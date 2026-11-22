"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Globe2,
  LayoutGrid,
  Pause,
  Play,
  RotateCw,
  Eye,
  Layers,
} from "lucide-react";

interface WordItem {
  id: string;
  text: string;
  category: "outdoor" | "signage" | "engineering" | "commercial" | "gifts" | "vehicle";
  href: string;
  size: "hero" | "xl" | "lg" | "md";
  theme: "gold" | "coral" | "blue" | "cyan" | "white";
}

const ALL_WORDS: WordItem[] = [
  // 1. Outdoor Advertising
  { id: "w-1", text: "Roadside Hoardings", category: "outdoor", href: "/services/outdoor-advertising-hoardings", size: "hero", theme: "gold" },
  { id: "w-2", text: "Star Flex Banners", category: "outdoor", href: "/services/star-flex-banner-printing-kadapa", size: "hero", theme: "white" },
  { id: "w-3", text: "Pole Kiosk Advertising", category: "outdoor", href: "/services/outdoor-advertising-hoardings", size: "xl", theme: "coral" },
  { id: "w-4", text: "Highway Billboards", category: "outdoor", href: "/services/outdoor-advertising-hoardings", size: "lg", theme: "blue" },
  { id: "w-5", text: "Road Median Boards", category: "outdoor", href: "/services/outdoor-advertising-hoardings", size: "md", theme: "cyan" },
  { id: "w-6", text: "Flex Printing", category: "outdoor", href: "/services/star-flex-banner-printing-kadapa", size: "xl", theme: "white" },
  { id: "w-7", text: "Backlit Glow Boxes", category: "outdoor", href: "/services/star-flex-banner-printing-kadapa", size: "md", theme: "gold" },
  { id: "w-8", text: "Shop Front Signage", category: "outdoor", href: "/services/3d-led-sign-boards-kadapa", size: "lg", theme: "coral" },

  // 2. Architectural 3D LED Signage
  { id: "w-9", text: "3D Acrylic Letters", category: "signage", href: "/services/3d-led-sign-boards-kadapa", size: "hero", theme: "coral" },
  { id: "w-10", text: "LED Signboards", category: "signage", href: "/services/3d-led-sign-boards-kadapa", size: "hero", theme: "gold" },
  { id: "w-11", text: "Samsung IP67 LEDs", category: "signage", href: "/services/3d-led-sign-boards-kadapa", size: "lg", theme: "blue" },
  { id: "w-12", text: "Laser-Cut Acrylic", category: "signage", href: "/services/3d-led-sign-boards-kadapa", size: "md", theme: "cyan" },
  { id: "w-13", text: "Halo Backlit Signs", category: "signage", href: "/services/3d-led-sign-boards-kadapa", size: "md", theme: "white" },
  { id: "w-14", text: "Glow Sign Boards", category: "signage", href: "/services/3d-led-sign-boards-kadapa", size: "lg", theme: "gold" },

  // 3. Engineering, Jumbo Xerox & CAD
  { id: "w-15", text: "A0 Jumbo Xerox", category: "engineering", href: "/services/jumbo-xerox-kadapa", size: "hero", theme: "blue" },
  { id: "w-16", text: "CAD Plotting", category: "engineering", href: "/services/jumbo-xerox-kadapa", size: "hero", theme: "white" },
  { id: "w-17", text: "Architectural Plans", category: "engineering", href: "/services/jumbo-xerox-kadapa", size: "lg", theme: "cyan" },
  { id: "w-18", text: "Engineering Blueprints", category: "engineering", href: "/services/jumbo-xerox-kadapa", size: "xl", theme: "gold" },
  { id: "w-19", text: "Municipal Village Maps", category: "engineering", href: "/services/jumbo-xerox-kadapa", size: "md", theme: "coral" },
  { id: "w-20", text: "Tracing Paper CAD", category: "engineering", href: "/services/jumbo-xerox-kadapa", size: "md", theme: "white" },

  // 4. Commercial & Stickers
  { id: "w-21", text: "Waterproof Vinyl Stickers", category: "commercial", href: "/services/vinyl-stickers-sunboard-kadapa", size: "xl", theme: "blue" },
  { id: "w-22", text: "Sunboard Printing", category: "commercial", href: "/services/vinyl-stickers-sunboard-kadapa", size: "lg", theme: "cyan" },
  { id: "w-23", text: "350 GSM Visiting Cards", category: "commercial", href: "/services/visiting-cards-offset-kadapa", size: "hero", theme: "white" },
  { id: "w-24", text: "NCR Bill Books", category: "commercial", href: "/services/visiting-cards-offset-kadapa", size: "md", theme: "gold" },
  { id: "w-25", text: "One Way Vision Glass", category: "commercial", href: "/services/vinyl-stickers-sunboard-kadapa", size: "md", theme: "coral" },
  { id: "w-26", text: "Product Labels & Decals", category: "commercial", href: "/services/vinyl-stickers-sunboard-kadapa", size: "md", theme: "white" },
  { id: "w-27", text: "Promotional Badges", category: "commercial", href: "/pricing", size: "md", theme: "cyan" },

  // 5. Personalized Gifts
  { id: "w-28", text: "Custom Wall Photo Frames", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", size: "hero", theme: "gold" },
  { id: "w-29", text: "Magic Heat Reveal Mugs", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", size: "xl", theme: "coral" },
  { id: "w-30", text: "Washproof DTF T-Shirts", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", size: "lg", theme: "blue" },
  { id: "w-31", text: "Satin Photo Pillows", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", size: "md", theme: "white" },
  { id: "w-32", text: "Personalized Keepsakes", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", size: "md", theme: "cyan" },

  // 6. Vehicle Branding & Transit
  { id: "w-33", text: "Auto Publicity Branding", category: "vehicle", href: "/services/auto-publicity-advertising-kadapa", size: "xl", theme: "coral" },
  { id: "w-34", text: "Driver Back Banners", category: "vehicle", href: "/services/auto-publicity-advertising-kadapa", size: "md", theme: "gold" },
  { id: "w-35", text: "Fleet Promotional Decals", category: "vehicle", href: "/services/auto-publicity-advertising-kadapa", size: "md", theme: "blue" },
];

const FILTER_TABS = [
  { key: "all", label: "All Capabilities" },
  { key: "outdoor", label: "Outdoor Hoardings" },
  { key: "signage", label: "3D LED Signage" },
  { key: "engineering", label: "Jumbo Xerox & CAD" },
  { key: "commercial", label: "Commercial Offset" },
  { key: "gifts", label: "Personalized Gifts" },
  { key: "vehicle", label: "Auto Publicity" },
];

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export default function ServiceWordCloud() {
  const [viewMode, setViewMode] = useState<"sphere" | "grid">("sphere");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Rotation angles & mouse tracking
  const [rotation, setRotation] = useState<{ rx: number; ry: number }>({ rx: 0.1, ry: 0.2 });
  const rotationRef = useRef<{ rx: number; ry: number }>({ rx: 0.1, ry: 0.2 });
  const mouseRef = useRef<{ x: number; y: number; isInteracting: boolean }>({
    x: 0,
    y: 0,
    isInteracting: false,
  });
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filtered words
  const filteredWords = useMemo(() => {
    return activeFilter === "all"
      ? ALL_WORDS
      : ALL_WORDS.filter((w) => w.category === activeFilter);
  }, [activeFilter]);

  // Initial 3D spherical positions for the active words (Fibonacci Sphere Algorithm)
  const initialPositions = useMemo(() => {
    const N = filteredWords.length;
    const positions: Point3D[] = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      positions.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }
    return positions;
  }, [filteredWords.length]);

  // Responsive Radius based on screen size
  const [radius, setRadius] = useState<number>(220);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadius(140);
      } else if (w < 1024) {
        setRadius(185);
      } else if (w < 1440) {
        setRadius(230);
      } else {
        setRadius(260);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // 3D Spherical Physics Animation Loop
  useEffect(() => {
    if (viewMode !== "sphere") return;

    const animate = () => {
      if (!isPaused) {
        // Base auto-rotation velocity
        let vx = 0.0018;
        let vy = 0.0028;

        // Influence rotation smoothly if user is moving mouse inside
        if (mouseRef.current.isInteracting) {
          vx += mouseRef.current.y * 0.005;
          vy += mouseRef.current.x * 0.005;
        }

        rotationRef.current.rx += vx;
        rotationRef.current.ry += vy;
        setRotation({ rx: rotationRef.current.rx, ry: rotationRef.current.ry });
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [viewMode, isPaused]);

  // Mouse move over 3D canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseRef.current = { x: nx, y: -ny, isInteracting: true };
  };

  const handleMouseEnter = () => {
    mouseRef.current.isInteracting = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.isInteracting = false;
  };

  // Touch Drag on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - touchStartRef.current.x;
    const deltaY = e.touches[0].clientY - touchStartRef.current.y;

    rotationRef.current.rx -= deltaY * 0.008;
    rotationRef.current.ry += deltaX * 0.008;
    setRotation({ rx: rotationRef.current.rx, ry: rotationRef.current.ry });

    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  // Theme styling helpers (3D metallic glass & neon glows)
  const getThemePillStyles = (theme: WordItem["theme"], size: WordItem["size"], isFront: boolean) => {
    const baseSize = {
      hero: "text-sm sm:text-base md:text-lg font-black px-4 py-2 sm:px-5 sm:py-2.5",
      xl: "text-xs sm:text-sm md:text-base font-extrabold px-3.5 py-1.5 sm:px-4 sm:py-2",
      lg: "text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-3.5 sm:py-1.5",
      md: "text-[11px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1",
    }[size];

    const themeColors = {
      gold: {
        text: "text-[#FFC83D]",
        bg: "bg-gradient-to-b from-[#FFC83D]/25 to-[#FFC83D]/10",
        border: "border-[#FFC83D]/40 hover:border-[#FFC83D]",
        glow: "hover:shadow-[0_0_30px_rgba(255,200,61,0.6)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6)]",
        specular: "border-t-[#FFC83D]/60",
      },
      coral: {
        text: "text-[#F04446]",
        bg: "bg-gradient-to-b from-[#F04446]/25 to-[#F04446]/10",
        border: "border-[#F04446]/40 hover:border-[#F04446]",
        glow: "hover:shadow-[0_0_30px_rgba(240,68,70,0.6)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6)]",
        specular: "border-t-[#F04446]/60",
      },
      blue: {
        text: "text-[#60A5FA]",
        bg: "bg-gradient-to-b from-[#2255D6]/30 to-[#2255D6]/10",
        border: "border-[#3B82F6]/40 hover:border-[#60A5FA]",
        glow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6)]",
        specular: "border-t-[#93C5FD]/60",
      },
      cyan: {
        text: "text-cyan-300",
        bg: "bg-gradient-to-b from-cyan-500/25 to-cyan-500/10",
        border: "border-cyan-400/40 hover:border-cyan-300",
        glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6)]",
        specular: "border-t-cyan-300/60",
      },
      white: {
        text: "text-white",
        bg: "bg-gradient-to-b from-white/20 to-white/5",
        border: "border-white/30 hover:border-white",
        glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6)]",
        specular: "border-t-white/60",
      },
    }[theme];

    return `${baseSize} ${themeColors.text} ${themeColors.bg} ${themeColors.border} ${themeColors.glow} ${themeColors.specular}`;
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0A1124] via-[#101B38] to-[#0A1124] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-white/10 select-none">
      {/* 3D Atmospheric Lighting & Deep Space Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#2255D6]/20 via-[#F04446]/15 to-[#FFC83D]/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle 3D Perspective Grid Background Floor */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "perspective(600px) rotateX(60deg) translateY(-100px) scale(2)",
          transformOrigin: "center top",
        }}
      />

      <div className="site-container relative z-10 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFC83D] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC83D]" />
            <span>Interactive 3D Capabilities Constellation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            One Studio. Endless Printing Possibilities.
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Rotate the interactive 3D universe of commercial services, outdoor hoardings, and customized creations fabricated directly inside our Kadapa workshop.
          </p>

          {/* Interactive Mode & Play Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* View Mode Toggle: 3D Orbital Sphere vs 3D Depth Matrix */}
            <div className="bg-white/10 p-1 rounded-2xl border border-white/15 backdrop-blur-md flex items-center shadow-lg">
              <button
                type="button"
                onClick={() => setViewMode("sphere")}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "sphere"
                    ? "bg-[#2255D6] text-white shadow-md shadow-blue-900/60"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>3D Orbital Sphere</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#2255D6] text-white shadow-md shadow-blue-900/60"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>3D Depth Matrix</span>
              </button>
            </div>

            {/* Play/Pause Rotation Toggle (Sphere Mode only) */}
            {viewMode === "sphere" && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume 3D rotation" : "Pause 3D rotation"}
                className="bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 flex items-center space-x-1.5 backdrop-blur-md transition-all shadow-md active:scale-95"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    <span>Spin</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#FFC83D]" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`text-xs font-bold px-3 py-1 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#F04446] text-white shadow-md shadow-red-900/50 scale-102"
                      : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- VIEW 1: INTERACTIVE 3D ORBITAL SPHERE CANVAS --- */}
        {viewMode === "sphere" ? (
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-[520px] sm:h-[580px] md:h-[620px] lg:h-[660px] mx-auto rounded-3xl bg-slate-950/40 backdrop-blur-md border border-white/15 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            {/* Center Gravitational Hologram Ring */}
            <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#2255D6]/30 pointer-events-none animate-spin-slow" />
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-dotted border-[#FFC83D]/25 pointer-events-none animate-reverse-spin" />
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#2255D6] to-[#F04446] blur-sm animate-pulse pointer-events-none" />

            {/* Orbiting 3D Tags */}
            {mounted &&
              filteredWords.map((word, index) => {
                const pos = initialPositions[index] || { x: 0, y: 0, z: 0 };

                // 3D Matrix Rotation formulas
                // 1. Rotation around X axis
                const cosX = Math.cos(rotation.rx);
                const sinX = Math.sin(rotation.rx);
                const y1 = pos.y * cosX - pos.z * sinX;
                const z1 = pos.y * sinX + pos.z * cosX;

                // 2. Rotation around Y axis
                const cosY = Math.cos(rotation.ry);
                const sinY = Math.sin(rotation.ry);
                const x2 = pos.x * cosY + z1 * sinY;
                const z2 = -pos.x * sinY + z1 * cosY;

                // Perspective projection
                const distance = 420;
                const scale = Math.max(0.6, distance / (distance - z2 * radius));
                const screenX = x2 * radius * scale;
                const screenY = y1 * radius * scale;

                // Depth-of-field optical cues
                const isFront = z2 > 0;
                const opacity = Math.min(1, Math.max(0.35, (z2 + 1) * 0.45 + 0.25));
                const zIndex = Math.round((z2 + 1) * 100) + 10;
                const blur = z2 < -0.3 ? Math.min(2.5, Math.abs(z2 + 0.3) * 3) : 0;

                return (
                  <Link
                    key={word.id}
                    href={word.href}
                    style={{
                      transform: `translate3d(${screenX}px, ${screenY}px, 0px) scale(${scale})`,
                      opacity,
                      zIndex,
                      filter: blur > 0 ? `blur(${blur}px)` : "none",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`absolute rounded-2xl border backdrop-blur-md transition-shadow duration-300 flex items-center space-x-1.5 whitespace-nowrap group active:scale-95 focus-visible:outline-2 focus-visible:outline-[#FFC83D] ${getThemePillStyles(
                      word.theme,
                      word.size,
                      isFront
                    )}`}
                    title={`Explore ${word.text} at City Grafix`}
                  >
                    <span>{word.text}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FFC83D]" />
                  </Link>
                );
              })}

            {/* Micro Helper Tip */}
            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
              <span className="text-[11px] text-slate-400 bg-[#101B38]/80 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                🖱️ Move mouse or drag to rotate 3D sphere • Hover word to pause • Tap to explore
              </span>
            </div>
          </div>
        ) : (
          /* --- VIEW 2: 3D DEPTH MATRIX (TACTILE EXTRUDED BADGES) --- */
          <div className="max-w-6xl mx-auto bg-slate-950/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
              {filteredWords.map((word) => (
                <Link
                  key={word.id}
                  href={word.href}
                  className={`rounded-2xl border-2 backdrop-blur-md transition-all duration-300 flex items-center space-x-2 group hover:-translate-y-2 hover:scale-105 active:scale-95 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.7)] ${getThemePillStyles(
                    word.theme,
                    word.size,
                    true
                  )}`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  title={`Explore ${word.text} at City Grafix`}
                >
                  <span className="group-hover:tracking-wide transition-all font-bold">
                    {word.text}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC83D] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>

            {/* Card Footer */}
            <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
              <span>
                💡 All 35+ items engineered &amp; fabricated in-house at our Kadapa workshop.
              </span>
              <Link
                href="/pricing"
                className="text-[#FFC83D] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
              >
                <span>View Complete Workshop Rates</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
