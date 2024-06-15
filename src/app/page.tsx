"use client";

import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";
import { useTheme } from "next-themes";

export default function Home() {
  const theme = useTheme();
  return (
    <main className="min-h-screen ">
      <MaxWidthWrapper>
        <HeroSection />
        <AboutSection />
      </MaxWidthWrapper>
    </main>
  );
}
