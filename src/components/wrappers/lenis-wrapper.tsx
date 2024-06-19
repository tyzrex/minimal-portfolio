"use client";

import { ReactLenis, useLenis } from "lenis/react";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        syncTouch: true,
        smoothWheel: true,
        // infinite: true,
        lerp: 0.07,
        touchInertiaMultiplier: 0.5,
        touchMultiplier: 3,
      }}
    >
      {children}
    </ReactLenis>
  );
}
