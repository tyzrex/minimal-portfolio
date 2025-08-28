"use client";

import { useState, useEffect } from "react";

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  spotifyUrl: string;
  previewUrl: string | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
}

interface SpotifyError {
  message: string;
  status: number;
}

export const useSpotify = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<SpotifyError | null>(null);
  const [isOnline, setIsOnline] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);
  const [realTimeProgress, setRealTimeProgress] = useState<number>(0);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch("/api/spotify/currently-playing");

        if (response.status === 204) {
          // No track currently playing
          setCurrentTrack(null);
          setIsOnline(false);
          setError(null);
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        if (data.isPlaying) {
          const now = Date.now();
          const newTrack = {
            name: data.name,
            artist: data.artist,
            album: data.album,
            albumImageUrl: data.albumImageUrl,
            spotifyUrl: data.spotifyUrl,
            previewUrl: data.previewUrl,
            isPlaying: data.isPlaying,
            progress: data.progress,
            duration: data.duration,
          };

          setCurrentTrack(newTrack);
          setLastFetchTime(now);
          setRealTimeProgress(data.progress);
          setIsOnline(true);
        } else {
          setCurrentTrack(null);
          setIsOnline(false);
          setRealTimeProgress(0);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setError({
          message:
            err instanceof Error ? err.message : "Failed to fetch Spotify data",
          status: 500,
        });
        setCurrentTrack(null);
        setIsOnline(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchCurrentlyPlaying();

    // Set up polling every 20 seconds - conservative to avoid rate limits
    const interval = setInterval(fetchCurrentlyPlaying, 20000);

    return () => clearInterval(interval);
  }, []);

  // Real-time progress update effect
  useEffect(() => {
    if (!currentTrack || !currentTrack.isPlaying) {
      return;
    }

    const updateProgress = () => {
      const now = Date.now();
      const timeSinceLastFetch = now - lastFetchTime;
      const newProgress = currentTrack.progress + timeSinceLastFetch;

      // Don't exceed the song duration
      if (newProgress <= currentTrack.duration) {
        setRealTimeProgress(newProgress);
      }
    };

    // Update every 1 second - good balance between smoothness and performance
    const progressInterval = setInterval(updateProgress, 1000);

    // Initial update
    updateProgress();

    return () => clearInterval(progressInterval);
  }, [currentTrack, lastFetchTime]);
  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getProgressPercentage = () => {
    if (!currentTrack || currentTrack.duration === 0) return 0;
    return (realTimeProgress / currentTrack.duration) * 100;
  };

  const getCurrentProgress = () => {
    return realTimeProgress;
  };

  return {
    currentTrack,
    isLoading,
    error,
    isOnline,
    formatTime,
    getProgressPercentage,
    getCurrentProgress,
  };
};
