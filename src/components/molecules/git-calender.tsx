"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

export default function GitCalendar() {
  const { theme } = useTheme();
  return (
    <GitHubCalendar
      style={{ width: "100%" }}
      blockSize={14}
      // hideMonthLabels
      username="tyzrex"
      colorScheme={theme === "dark" ? "dark" : "light"}
      hideColorLegend
      hideTotalCount
    />
  );
}
