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
import { usePathname, useRouter } from "next/navigation";

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.pageYOffset > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const nav = [
    {
      id: "hero",
      Icon: Home,
      label: "Home",
      action: () => router.push("/"),
    },
    {
      id: "about",
      Icon: User,
      label: "About",
      action: () => router.push("/#about"),
    },
    {
      id: "projects",
      Icon: Briefcase,
      label: "Projects",
      action: () => router.push("/#projects"),
    },
    {
      id: "photos",
      Icon: Camera,
      label: "Photos",
      action: () => router.push("/photography"),
    },
    {
      id: "contact",
      Icon: MessageCircle,
      label: "Contact",
      action: () => router.push("/#contact"),
    },
  ];

  return (
    <>
      {/* Minimal centered pill - visible on small screens only */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block md:hidden">
        <div className="rounded-full bg-black/95 dark:border dark:border-gray-800 backdrop-blur-md border border-transparent shadow-lg px-3 py-2">
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
                  className={`relative py-2 px-5 rounded-full transition-all duration-200 flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 ${
                    active
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-black text-white/80 "
                  }`}
                >
                  <item.Icon
                    className={`w-4 h-4 ${
                      active ? "text-white" : "text-white/80"
                    }`}
                  />
                  <span
                    className={`mt-1 text-[10px] font-medium ${
                      active ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </span>
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
