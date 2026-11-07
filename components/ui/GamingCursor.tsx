"use client";

import React, { useEffect, useRef, useState } from "react";

export default function GamingCursor() {
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rippleContainerRef = useRef<HTMLDivElement | null>(null);

  const [cursorState, setCursorState] = useState<"default" | "pointer" | "card" | "text">("default");
  const [badgeText, setBadgeText] = useState("EXPLORE");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // 1. Check for genuine desktop with fine mouse pointer
    const mediaQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || prefersReducedMotion.matches) {
      return;
    }
    setIsDesktop(true);

    // Coordinate storage (separate from React state to eliminate re-renders during mouse movement)
    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let rafId: number;
    let isVisible = false;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (pointerRef.current) pointerRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Hardware-level instant response (0ms perceived latency)
      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Ultra-snappy RAF loop for concentric outer ring (lerp factor 0.35)
    const animateRing = () => {
      // 0.35 factor gives buttery high-framerate response without sluggish floating
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);

    // Event delegation for hover states (runs ONLY on entering/exiting elements, not on move)
    const onPointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInput = target.closest("input, textarea, select, [contenteditable='true']");
      if (isInput) {
        setCursorState("text");
        return;
      }

      const card = target.closest<HTMLElement>("[data-cursor], .card-3d-tilt, [data-service-card]");
      if (card) {
        setCursorState("card");
        const customBadge = card.getAttribute("data-cursor");
        setBadgeText(customBadge || "INSPECT");
        return;
      }

      const interactive = target.closest("button, a, [role='button'], input[type='submit'], [tabindex='0']");
      if (interactive) {
        setCursorState("pointer");
        return;
      }

      setCursorState("default");
    };

    // Click handler for gaming shockwave pulse
    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);

      // Spawn CSS shockwave ripple at click coordinates
      if (rippleContainerRef.current) {
        const ripple = document.createElement("div");
        ripple.className = "absolute rounded-full pointer-events-none";
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.marginLeft = "-5px";
        ripple.style.marginTop = "-5px";
        ripple.style.border = "2px solid #00F0FF";
        ripple.style.boxShadow = "0 0 16px #00F0FF, inset 0 0 10px rgba(0, 240, 255, 0.5)";
        ripple.style.animation = "gamingShockwave 0.55s cubic-bezier(0.1, 0.8, 0.3, 1) forwards";

        rippleContainerRef.current.appendChild(ripple);

        // Remove element once CSS animation finishes
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      }
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (pointerRef.current) pointerRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (pointerRef.current) pointerRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onMouseDown);
    window.addEventListener("pointerup", onMouseUp);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onMouseDown);
      window.removeEventListener("pointerup", onMouseUp);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes gamingShockwave {
          0% {
            transform: scale(0.4);
            opacity: 1;
          }
          100% {
            transform: scale(8.5);
            opacity: 0;
          }
        }
      `}</style>

      {/* Ripple Container */}
      <div
        ref={rippleContainerRef}
        className="fixed inset-0 pointer-events-none z-[99998] overflow-hidden select-none"
      />

      {/* Custom Gaming Pointer Wrapper */}
      <div
        className={`fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none transition-opacity duration-200 ${
          cursorState === "text" ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Snappy Concentric Outer Ring */}
        <div
          ref={ringRef}
          className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none opacity-0 will-change-transform transition-[width,height,margin,border-color,box-shadow,background-color] duration-150 ${
            cursorState === "card"
              ? "w-20 h-20 -ml-10 -mt-10 border-2 border-dashed border-amber-400 bg-brand-navy/60 shadow-[0_0_25px_rgba(250,200,0,0.5)] backdrop-blur-[2px]"
              : cursorState === "pointer"
              ? "w-14 h-14 -ml-7 -mt-7 border-2 border-cyan-400 shadow-[0_0_20px_#00F0FF,inset_0_0_10px_rgba(0,240,255,0.3)] bg-cyan-500/10"
              : isClicking
              ? "w-9 h-9 -ml-[18px] -mt-[18px] border-2 border-cyan-300 shadow-[0_0_15px_#00F0FF] bg-cyan-400/20"
              : "w-10 h-10 -ml-5 -mt-5 border border-cyan-400/60 shadow-[0_0_12px_rgba(0,240,255,0.3)] bg-transparent"
          }`}
        >
          {/* Subtle concentric inner radar ring */}
          <div
            className={`rounded-full border border-cyan-400/30 transition-all duration-200 ${
              cursorState === "pointer"
                ? "w-8 h-8 border-cyan-300/60 scale-105"
                : cursorState === "card"
                ? "w-12 h-12 border-amber-400/30 scale-100"
                : "w-5 h-5 scale-90"
            }`}
          />

          {/* Floating Contextual Badge */}
          {cursorState === "card" && (
            <span className="absolute text-[9px] font-black tracking-widest text-brand-gold uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {badgeText}
            </span>
          )}
        </div>

        {/* Immediate Zero-Lag Center Pointer (Cyan Arrowhead + Bright Hotspot) */}
        <div
          ref={pointerRef}
          className="fixed top-0 left-0 pointer-events-none opacity-0 will-change-transform -ml-1 -mt-1"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            {/* Gaming Arrow SVG */}
            <svg
              viewBox="0 0 24 24"
              className={`w-4 h-4 transition-transform duration-100 ${
                isClicking ? "scale-75" : cursorState === "pointer" ? "scale-110" : "scale-100"
              }`}
              style={{
                filter: "drop-shadow(0 0 6px #00F0FF) drop-shadow(0 0 12px rgba(14,165,233,0.8))",
              }}
              fill="none"
            >
              <path
                d="M3 3L10.5 21L13.2 13.8L20.5 11L3 3Z"
                fill="#00F0FF"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            {/* Central Bright Hotspot Dot */}
            <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF]" />
          </div>
        </div>
      </div>
    </>
  );
}
