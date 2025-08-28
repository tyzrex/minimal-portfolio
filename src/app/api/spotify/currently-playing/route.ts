import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const REFRESH_TOKEN_FILE =
  process.env.SPOTIFY_REFRESH_TOKEN_FILE ||
  path.join(process.cwd(), ".spotify_refresh_token");

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

// Simple in-memory cache for the access token to avoid refreshing on every request
let tokenCache: { token: string; expiresAt: number } | null = null;

const getAccessToken = async (forceRefresh = false): Promise<string> => {
  // return cached token when valid unless a forced refresh is requested
  if (!forceRefresh && tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.token;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  // prefer env var, fallback to file (helps pick up rotated refresh tokens)
  let refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || "";

  if (!refreshToken) {
    try {
      const file = await fs.readFile(REFRESH_TOKEN_FILE, {
        encoding: "utf8",
      });
      refreshToken = file.trim();
    } catch (e) {
      // ignore - we'll handle missing token below
      console.warn(
        "No refresh token in env; could not read from file:",
        REFRESH_TOKEN_FILE,
        String(e)
      );
    }
  }

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing Spotify credentials in environment variables or refresh token file"
    );
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
    // Try to capture the response body for better diagnostics
    let bodyText: string;
    try {
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const json = await response.json();
        bodyText = JSON.stringify(json);
      } else {
        bodyText = await response.text();
      }
    } catch (e) {
      bodyText = `Unable to read body: ${String(e)}`;
    }

    // Include status and body in the thrown error so server logs capture the details
    throw new Error(
      `Failed to get access token (status: ${response.status}): ${bodyText}`
    );
  }

  const data: SpotifyTokenResponse & { refresh_token?: string } =
    await response.json();
  if (!data || !data.access_token) {
    throw new Error("Token endpoint returned no access_token");
  }

  // If Spotify returned a new refresh token (rotation), persist it so subsequent requests will use it.
  if (data.refresh_token) {
    try {
      await fs.writeFile(REFRESH_TOKEN_FILE, data.refresh_token, {
        encoding: "utf8",
        mode: 0o600,
      });
      console.info("Persisted rotated refresh_token to", REFRESH_TOKEN_FILE);
    } catch (e) {
      console.warn(
        "Failed to persist rotated refresh_token to file:",
        String(e)
      );
    }
  }

  // cache the access token, subtract a small buffer to avoid edge cases
  const expiresIn = data.expires_in || 3600;
  tokenCache = {
    token: data.access_token,
    expiresAt: Date.now() + (expiresIn - 30) * 1000,
  };

  return data.access_token;
};

export async function GET(request: NextRequest) {
  try {
    // attempt to get cached or fresh access token
    let accessToken = await getAccessToken();

    console.log(
      "Using access token (partial):",
      accessToken?.slice?.(0, 8) ? `${accessToken.slice(0, 8)}...` : "(token)"
    );

    let response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      // Add cache control to prevent stale data
      next: { revalidate: 0 },
    });

    // If Spotify rejects the token, try once with a forced refresh (in case cache was stale or token rotated)
    if (response.status === 401) {
      console.warn(
        "Spotify currently-playing returned 401, attempting a forced token refresh and retry..."
      );
      try {
        accessToken = await getAccessToken(true);
      } catch (tokenErr) {
        console.error("Forced token refresh failed:", tokenErr);
        // fall through to the response handling below which will return a 401 JSON
      }

      response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: { revalidate: 0 },
      });
    }

    if (response.status === 204) {
      // No track currently playing
      return NextResponse.json({ isPlaying: false }, { status: 200 });
    }

    if (response.status === 401) {
      // Access token was rejected by Spotify — likely invalid/expired token or revoked refresh token
      let body = "";
      try {
        body = await response.text();
      } catch (e) {
        body = `Could not read body: ${String(e)}`;
      }
      console.error("Spotify currently-playing 401 response:", body);
      return NextResponse.json(
        {
          error:
            "Unauthorized: Spotify rejected the access token. This often means the refresh token is invalid or revoked. Please re-authorize and update SPOTIFY_REFRESH_TOKEN.",
          details: body,
          isPlaying: false,
        },
        { status: 401 }
      );
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
