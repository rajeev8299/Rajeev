"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let queued = false;
    let lastPt: PointerEvent | null = null;

    const onPointerMove = (e: PointerEvent) => {
      lastPt = e;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        if (!lastPt || !spotlightRef.current) return;
        spotlightRef.current.style.setProperty("--mx", `${lastPt.clientX}px`);
        spotlightRef.current.style.setProperty("--my", `${lastPt.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <>
      {/* Clean subtle ambient glow without heavy 3D canvases or video drain */}
      <div className="bg-veil" aria-hidden="true" />
      <div className="aura aura-a" />
      <div className="aura aura-b" />
      <div ref={spotlightRef} className="spotlight" id="spot" />
    </>
  );
}
