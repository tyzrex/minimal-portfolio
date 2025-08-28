"use client";

import { Music, Play, ExternalLink } from "lucide-react";
import { useSpotify } from "@/hooks/useSpotify";
import Image from "next/image";
import Link from "next/link";

export default function SpotifyWidget() {
  const {
    currentTrack,
    isLoading,
    error,
    isOnline,
    formatTime,
    getProgressPercentage,
    getCurrentProgress,
  } = useSpotify();

  // Show loading state
  if (isLoading) {
    return (
      <div className="relative z-10 w-full xl:max-w-xs xl:px-0">
        <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Music className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="ml-3 text-sm text-muted-foreground">
              Loading music...
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="relative z-10 w-full xl:max-w-xs  xl:px-0">
        <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Music className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="ml-3 text-sm text-muted-foreground">
              Music offline
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Don't render anything if no track is playing
  if (!currentTrack) {
    return (
      <div className="relative z-10 w-full xl:max-w-xs xl:px-0">
        <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-500 rounded-full flex items-center justify-center">
              <Music className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="ml-3 text-sm text-muted-foreground">
              Not playing anything
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Render the current track
  return (
    <div className="relative z-10 w-full xl:max-w-xs xl:px-0">
      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Music className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Currently Vibing to
              </p>
              {currentTrack.isPlaying && (
                <div className="flex items-center justify-center gap-1 h-4 sm:h-5">
                  {/* Floating music note */}
                  <div className="flex items-center gap-0.5">
                    <div
                      className="w-1 h-1 bg-green-400 rounded-full smooth-pulse"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-green-400 rounded-full smooth-pulse"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-green-400 rounded-full smooth-pulse"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                  </div>

                  {/* Audio bars */}
                  <div className="ml-1 flex items-end gap-0.5">
                    {[...Array(6)].map((_, i) => {
                      const heights = [4, 8, 12, 16, 10, 6]; // More varied heights
                      const delays = [0, 0.1, 0.3, 0.2, 0.4, 0.5]; // More complex timing

                      return (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-green-600 via-green-500 to-green-400 rounded-full audio-wave"
                          style={{
                            width: "1.5px",
                            minHeight: "3px",
                            height: `${heights[i]}px`,
                            animationDelay: `${delays[i]}s`,
                            animationDuration: `${1.2 + i * 0.1}s`,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  currentTrack.isPlaying
                    ? "bg-green-500 animate-pulse"
                    : "bg-gray-400"
                }`}
              ></div>
              <span className="text-xs sm:text-sm font-medium">Spotify</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Album Art */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            {currentTrack.albumImageUrl ? (
              <Image
                src={currentTrack.albumImageUrl}
                alt={`${currentTrack.album} cover`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Music className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-xs sm:text-sm truncate">
              {currentTrack.name}
            </h4>
            <p className="text-xs text-muted-foreground truncate">
              {currentTrack.artist}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-[90%] h-0.5 sm:h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground">
                {formatTime(getCurrentProgress())}
              </span>
            </div>
          </div>

          {/* External Link Button */}
          <Link
            href={currentTrack.spotifyUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
