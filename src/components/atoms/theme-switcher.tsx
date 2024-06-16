"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Lightbulb, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  const toggleTheme = () => {
    theme.setTheme(theme.resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant={"ghost"} className="rounded-full p-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black dark:border-white "></div>
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={() => toggleTheme()}
        variant={"ghost"}
        className="rounded-full p-2"
      >
        {theme?.resolvedTheme === "dark" ? (
          <Lightbulb size={24} />
        ) : (
          <Moon size={24} />
        )}
      </Button>
    </>
  );
}
