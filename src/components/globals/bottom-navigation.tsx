"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Camera,
  MessageCircle,
  ChevronUp,
} from "lucide-react";
import { usePathname } from "next/navigation";

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.pageYOffset > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const nav = [
    { id: "hero", Icon: Home, action: () => scrollToSection("hero") },
    { id: "about", Icon: User, action: () => scrollToSection("about") },
    {
      id: "projects",
      Icon: Briefcase,
      action: () => scrollToSection("projects"),
    },
    {
      id: "photos",
      Icon: Camera,
      action: () => (window.location.href = "/photography"),
    },
    {
      id: "contact",
      Icon: MessageCircle,
      action: () => scrollToSection("contact"),
    },
  ];

  return (
    <>
      {/* Minimal centered pill - visible on small screens only */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block md:hidden">
        <div className="rounded-full bg-white/95 dark:bg-black/95 backdrop-blur-md border border-transparent shadow-lg px-3 py-2">
          <div className="flex items-center gap-2">
            {nav.map((item) => {
              const active =
                (pathname === "/" && item.id === "hero") ||
                (pathname === "/photography" && item.id === "photos") ||
                pathname.includes(item.id);

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  aria-label={item.id}
                  className={`relative p-2 rounded-full transition-all duration-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 ${
                    active
                      ? "bg-red-600 text-white shadow-md"
                      : "text-black/70 dark:text-white/70 hover:bg-red-50 dark:hover:bg-red-900/20"
                  }`}
                >
                  <item.Icon
                    className={`w-4 h-4 ${active ? "text-white" : ""}`}
                  />

                  {/* small active indicator under the button */}
                  {active && (
                    <span className="absolute -bottom-2 w-2 h-2 bg-white rounded-full shadow-sm" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Minimal Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed right-4 bottom-20 z-50 w-10 h-10 rounded-full bg-red-600 border border-transparent shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-200 md:bottom-6"
        >
          <ChevronUp className="w-4 h-4 text-white" />
        </button>
      )}
    </>
  );
};

export default BottomNavigation;
