import { NextRequest, NextResponse } from "next/server";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyTrackResponse {
  item: {
    name: string;
    artists: Array<{ name: string }>;
    album: {
      name: string;
      images: Array<{ url: string; height: number; width: number }>;
    };
    external_urls: {
      spotify: string;
    };
    preview_url: string | null;
    duration_ms: number;
  };
  is_playing: boolean;
  progress_ms: number;
}

const getAccessToken = async (): Promise<string> => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify credentials in environment variables");
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.statusText}`);
  }

  const data: SpotifyTokenResponse = await response.json();
  return data.access_token;
};

export async function GET(request: NextRequest) {
  try {
    const accessToken = await getAccessToken();

    console.log(accessToken);

    const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      // Add cache control to prevent stale data
      next: { revalidate: 0 },
    });

    if (response.status === 204) {
      // No track currently playing
      return NextResponse.json({ isPlaying: false }, { status: 200 });
    }

    if (response.status === 404) {
      // User not found or no active device
      return NextResponse.json(
        {
          error: "No active Spotify session found",
        },
        { status: 404 }
      );
    }

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.statusText}`);
    }

    const data: SpotifyTrackResponse = await response.json();

    if (!data.item) {
      return NextResponse.json({ isPlaying: false }, { status: 200 });
    }

    const track = {
      name: data.item.name,
      artist: data.item.artists.map((artist) => artist.name).join(", "),
      album: data.item.album.name,
      albumImageUrl: data.item.album.images[0]?.url || "",
      spotifyUrl: data.item.external_urls.spotify,
      previewUrl: data.item.preview_url,
      isPlaying: data.is_playing,
      progress: data.progress_ms,
      duration: data.item.duration_ms,
    };

    return NextResponse.json(track, {
      status: 200,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Spotify API Error:", error);

    // More specific error handling
    let errorMessage = "Internal server error";
    let statusCode = 500;

    if (error instanceof Error) {
      if (error.message.includes("Missing Spotify credentials")) {
        errorMessage =
          "Spotify credentials not configured. Please set up your .env.local file.";
        statusCode = 503;
      } else if (error.message.includes("Failed to get access token")) {
        errorMessage =
          "Failed to authenticate with Spotify. Check your credentials.";
        statusCode = 401;
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        isPlaying: false,
      },
      { status: statusCode }
    );
  }
}
