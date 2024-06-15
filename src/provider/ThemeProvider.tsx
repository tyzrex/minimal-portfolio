"use client";

import { ThemeProvider } from "next-themes";

export default function ColorModeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
