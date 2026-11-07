"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export default function GamingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "pointer" | "card" | "text">("default");
  const [cardBadgeText, setCardBadgeText] = useState("EXPLORE");
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on true desktop with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    if (!mediaQuery.matches) return;
    setIsDesktop(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveCard = target.closest<HTMLElement>("[data-cursor], .card-tilt, [data-service-card]");
      const interactiveButton = target.closest<HTMLElement>("button, a, [role='button'], input[type='submit']");
      const isInput = target.closest<HTMLElement>("input, textarea, select, [contenteditable='true']");

      if (isInput) {
        setCursorState("text");
      } else if (interactiveCard) {
        setCursorState("card");
        const customText = interactiveCard.getAttribute("data-cursor");
        setCardBadgeText(customText || "VIEW");
      } else if (interactiveButton) {
        setCursorState("pointer");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple: ClickRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]); // keep last 4 ripples
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Clean up ripples after animation
  useEffect(() => {
    if (ripples.length === 0) return;
    const timer = setTimeout(() => {
      setRipples((prev) => prev.filter((r) => Date.now() - r.id < 900));
    }, 900);
    return () => clearTimeout(timer);
  }, [ripples]);

  if (!isDesktop || !isVisible) return null;
  if (cursorState === "text") return null; // let native I-beam cursor shine on forms

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none">
      {/* Click Shockwave Ripples (mimicking user's uploaded reference image) */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <React.Fragment key={ripple.id}>
            {/* Concentric Ring 1 */}
            <motion.div
              initial={{ scale: 0.2, opacity: 0.9 }}
              animate={{ scale: 2.4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: ripple.x - 30,
                top: ripple.y - 30,
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: "2px solid #00F0FF",
                boxShadow: "0 0 20px #00F0FF, inset 0 0 15px rgba(0, 240, 255, 0.4)",
              }}
            />
            {/* Concentric Ring 2 */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0.7 }}
              animate={{ scale: 3.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
              style={{
                position: "absolute",
                left: ripple.x - 30,
                top: ripple.y - 30,
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: "1.5px solid #2563EB",
                boxShadow: "0 0 30px #2563EB",
              }}
            />
          </React.Fragment>
        ))}
      </AnimatePresence>

      {/* Outer Concentric Energy Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorState === "card" ? 42 : cursorState === "pointer" ? 32 : 24),
          y: mousePosition.y - (cursorState === "card" ? 42 : cursorState === "pointer" ? 32 : 24),
          width: cursorState === "card" ? 84 : cursorState === "pointer" ? 64 : 48,
          height: cursorState === "card" ? 84 : cursorState === "pointer" ? 64 : 48,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 280,
          mass: 0.4,
        }}
        style={{
          border: cursorState === "pointer" 
            ? "2px solid rgba(0, 240, 255, 0.9)" 
            : cursorState === "card"
            ? "2px dashed rgba(250, 200, 0, 0.8)"
            : "1.5px solid rgba(0, 240, 255, 0.5)",
          boxShadow: cursorState === "pointer"
            ? "0 0 25px rgba(0, 240, 255, 0.6), inset 0 0 15px rgba(0, 240, 255, 0.3)"
            : cursorState === "card"
            ? "0 0 30px rgba(250, 200, 0, 0.5), inset 0 0 20px rgba(250, 200, 0, 0.2)"
            : "0 0 15px rgba(0, 240, 255, 0.3)",
          backdropFilter: cursorState === "card" ? "blur(3px)" : "none",
          backgroundColor: cursorState === "card" ? "rgba(11, 19, 43, 0.45)" : "transparent",
        }}
      >
        {/* Secondary Inner Concentric Ring (matches reference gaming style) */}
        <div
          className={`w-3/4 h-3/4 rounded-full border border-cyan-400/30 transition-all duration-300 ${
            cursorState === "pointer" ? "scale-110 border-cyan-300/60 animate-pulse" : "scale-90"
          }`}
        />

        {/* Floating Contextual Badge for Service Cards */}
        {cursorState === "card" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute text-[10px] font-black text-brand-gold tracking-widest uppercase drop-shadow"
          >
            {cardBadgeText}
          </motion.span>
        )}
      </motion.div>

      {/* Precision Core Pointer (Central Gaming Arrow / Dot) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.7 : cursorState === "pointer" ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 900,
          mass: 0.1,
        }}
      >
        {/* Core Glowing Arrowhead Pointer Inspired by Reference */}
        <div className="relative w-4 h-4 flex items-center justify-center">
          {/* Arrow SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_#00F0FF]"
            fill="currentColor"
          >
            <path d="M3 3l7.5 18 2.5-6.5L19.5 12 3 3z" />
          </svg>
          {/* Central Bright Hotspot */}
          <span className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#FFFFFF] top-0.5 left-0.5" />
        </div>
      </motion.div>
    </div>
  );
}
