import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "horizontal" | "mark-only" | "badge";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  concept?: "legacy" | "concept-1" | "concept-2" | "concept-3";
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  concept = "legacy",
  className = "",
  priority = true,
}: BrandLogoProps) {
  // Size metrics - preserving the original emblem dimensions and aspect ratio
  const emblemMetrics = {
    sm: { width: 44, height: 40, className: "h-8 sm:h-9 w-auto" },
    md: { width: 56, height: 50, className: "h-10 sm:h-11 md:h-12 w-auto" },
    lg: { width: 80, height: 72, className: "h-14 sm:h-16 md:h-20 w-auto" },
  }[size];

  // Prominent, balanced geometric sans-serif typography (800 weight)
  const brandNameClass = {
    sm: "text-[14px] sm:text-[16px]",
    md: "text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px]",
    lg: "text-[22px] sm:text-[26px] md:text-[28px]",
  }[size];

  // Smaller uppercase tagline with clean alignment & subtle tracking
  const taglineClass = {
    sm: "text-[7.5px] sm:text-[8.5px] tracking-[0.14em]",
    md: "text-[8px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.16em] sm:tracking-[0.2em]",
    lg: "text-[10px] sm:text-[11.5px] md:text-[12px] tracking-[0.2em]",
  }[size];

  // Improved spacing between emblem and brand text
  const spacingClass = {
    sm: "ml-2.5",
    md: "ml-3 sm:ml-3.5 md:ml-4",
    lg: "ml-3.5 sm:ml-4 md:ml-5",
  }[size];

  const cityColor = theme === "dark" ? "text-white" : "text-brand-navy";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Logo Emblem / Mark */}
      <div className="relative shrink-0 flex items-center justify-center">
        {concept === "concept-1" ? (
          <Image
            src="/brand/monogram-cg.svg"
            alt="City Grafix Modern Monogram"
            width={emblemMetrics.width}
            height={emblemMetrics.height}
            className={`${emblemMetrics.className} object-contain transition-transform duration-200 group-hover:scale-105`}
            priority={priority}
          />
        ) : (
          <Image
            src="/logo.png"
            alt="City Grafix Kadapa Official Logo"
            width={emblemMetrics.width * 2}
            height={emblemMetrics.height * 2}
            className={`${emblemMetrics.className} object-contain transition-transform duration-200 group-hover:scale-105`}
            priority={priority}
          />
        )}
      </div>

      {/* Premium Brand Typography Lockup */}
      {variant === "horizontal" && (
        <div className={`${spacingClass} flex flex-col justify-center`}>
          {/* Brand Wordmark: CITY GRAFIX */}
          <div className="flex items-baseline space-x-1.5 whitespace-nowrap leading-none font-brand">
            <span
              className={`${cityColor} ${brandNameClass} font-[800] uppercase tracking-[0.025em]`}
            >
              CITY
            </span>
            <span
              className={`text-[#F04446] ${brandNameClass} font-[800] uppercase tracking-[0.025em]`}
            >
              GRAFIX
            </span>
          </div>

          {/* Subtitle & Location: PRINTING • SIGNAGE • ADVERTISING • KADAPA */}
          <div
            className={`flex items-center space-x-1 sm:space-x-1.5 mt-1 sm:mt-1.5 ${taglineClass} uppercase font-semibold leading-none font-brand`}
          >
            <span className={theme === "dark" ? "text-slate-100" : "text-slate-800"}>PRINTING</span>
            <span className="text-slate-400 font-bold">•</span>
            <span className={theme === "dark" ? "text-slate-300" : "text-slate-600"}>SIGNAGE</span>
            <span className="text-slate-400 font-bold">•</span>
            <span className={theme === "dark" ? "text-slate-200" : "text-slate-700"}>ADVERTISING</span>
            <span className="text-slate-400 font-bold">•</span>
            <span className="text-[#FFC83D] font-bold">KADAPA</span>
          </div>
        </div>
      )}
    </div>
  );
}
