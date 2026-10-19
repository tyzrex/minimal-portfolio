"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiGmail,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const navigation = [
  { label: "Home", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/sulav.baral.58/", icon: SiFacebook },
  { label: "Instagram", href: "https://www.instagram.com/sulav_baral_58/", icon: SiInstagram },
  { label: "X", href: "https://twitter.com/tyzrex07", icon: SiX },
  { label: "Email", href: "mailto:sulavbaral58@gmail.com", icon: SiGmail },
  { label: "GitHub", href: "https://github.com/tyzrex", icon: SiGithub },
];

export default function Footer() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const measure = () => {
      setContentHeight(content.getBoundingClientRect().height);
      setViewportHeight(window.innerHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  const reveal = !reducedMotion && contentHeight > 0 && contentHeight <= viewportHeight;
  const style = { "--footer-height": `${contentHeight}px` } as CSSProperties;

  return (
    <footer
      style={style}
      className={reveal ? "footer-reveal relative" : "relative"}
    >
      <div className={reveal ? "footer-reveal-track" : undefined}>
        <div className={reveal ? "footer-reveal-sticky" : undefined}>
          <div
            ref={contentRef}
            className="relative flex min-h-[min(75svh,50rem)] items-center overflow-hidden bg-neutral-900 dark:bg-background text-white py-10 md:py-14"
          >
            <MaxWidthWrapper>
              <div className="flex flex-col items-center gap-7 md:gap-9">
                <p className="text-[clamp(3rem,10vw,10rem)] averta-bold leading-[1.05] tracking-tight text-center">
                  <span>Sulav Baral</span>
                  <span className="text-accent-red">.</span>
                </p>

                <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 text-lg">
                  {navigation.map(({ label, href }) => (
                    <Link key={label} href={href} className="rounded-sm hover:text-accent-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                      {label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} aria-label={label} className="flex size-11 items-center justify-center rounded-full border border-white/20 hover:text-accent-red hover:border-accent-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                      <Icon size={22} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-white/10 pt-5 text-xs text-white/50 sm:justify-between">
                <p>© {new Date().getFullYear()} Sulav Baral</p>
                <Link href="#" onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
                }} className="inline-flex items-center gap-1.5 rounded-sm text-white/70 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                  Back to top <ArrowUp aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      </div>
    </footer>
  );
}
