import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "mark-only" | "stacked";
  theme?: "dark" | "light"; // "dark" = for navy/dark backgrounds, "light" = for white/light backgrounds
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  className = "",
}: BrandLogoProps) {
  // Size metrics
  const markDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  }[size];

  const cityTextClass = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl sm:text-3xl",
  }[size];

  const sublineClass = {
    sm: "text-[8px] tracking-[0.18em]",
    md: "text-[9px] sm:text-[10px] tracking-[0.22em]",
    lg: "text-xs tracking-[0.25em]",
  }[size];

  const textColorPrimary = theme === "dark" ? "text-white" : "text-brand-navy";
  const textColorSub = theme === "dark" ? "text-slate-300" : "text-slate-500";
  const badgeBorder = theme === "dark" ? "border-white/10" : "border-slate-200";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* 1. Precision "CG" Geometric Monogram Icon */}
      <div className={`relative shrink-0 ${markDimensions} flex items-center justify-center`}>
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Red Gradient for "C" Ribbon */}
            <linearGradient id="cgRedGrad" x1="4" y1="4" x2="36" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF2E55" />
              <stop offset="60%" stopColor="#C80A0A" />
              <stop offset="100%" stopColor="#990000" />
            </linearGradient>

            {/* Blue/Cyan Gradient for "G" Inward Ribbon */}
            <linearGradient id="cgBlueGrad" x1="16" y1="12" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A3FF" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Gold Accent for CMYK Precision Node */}
            <linearGradient id="cgGoldGrad" x1="22" y1="22" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
          </defs>

          {/* Outer Rounded Geometric Shield Base */}
          <rect
            x="2"
            y="2"
            width="50"
            height="50"
            rx="14"
            fill={theme === "dark" ? "#070E22" : "#FFFFFF"}
            stroke={theme === "dark" ? "rgba(255,255,255,0.12)" : "rgba(11,19,43,0.1)"}
            strokeWidth="1.5"
          />

          {/* Precision Corner Registration Marks (Print Calibration Metaphor) */}
          <path d="M7 11H11M7 11V7" stroke="#C80A0A" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M47 11H43M47 11V7" stroke="#00A3FF" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M7 43H11M7 43V47" stroke="#EAB308" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M47 43H43M47 43V47" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" />

          {/* Dynamic "C" Ribbon (Outer Sweeping Red Arc) */}
          <path
            d="M36 14C33 11.5 28.5 10 23.5 10C14.5 10 8.5 17 8.5 27C8.5 37 15 44 24 44C29 44 33.5 42 36.5 39"
            stroke="url(#cgRedGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Dynamic "G" Ribbon (Interlocking Inward Blue Flow with Precision Bar) */}
          <path
            d="M26 27H43V34C43 38.5 38.5 43 32.5 43C28 43 25 41.5 23 39"
            stroke="url(#cgBlueGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central CMYK Diamond Calibration Accent */}
          <polygon
            points="27,19 32,24 27,29 22,24"
            fill="url(#cgGoldGrad)"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* 2. Brand Wordmark Typography */}
      {variant !== "mark-only" && (
        <div className={`ml-3 flex flex-col justify-center leading-none ${variant === "stacked" ? "items-center text-center ml-0 mt-2" : ""}`}>
          <div className="flex items-center space-x-1.5 font-black tracking-tight">
            <span className={`${textColorPrimary} ${cityTextClass} font-extrabold uppercase font-sans`}>
              City
            </span>
            <span className={`text-brand-red ${cityTextClass} font-black uppercase font-sans tracking-wide`}>
              Grafix
            </span>
          </div>

          <div className={`flex items-center space-x-1.5 mt-1 ${sublineClass} uppercase font-bold ${textColorSub}`}>
            <span>Printing</span>
            <span className="text-brand-red font-black">•</span>
            <span>Signage</span>
            <span className="text-brand-gold font-black">•</span>
            <span className="text-brand-gold font-extrabold">Kadapa</span>
          </div>
        </div>
      )}
    </div>
  );
}
