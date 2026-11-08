import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "horizontal" | "mark-only" | "badge";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  className = "",
  priority = true,
}: BrandLogoProps) {
  // Size metrics
  const emblemMetrics = {
    sm: { width: 44, height: 40, className: "h-9 w-auto" },
    md: { width: 56, height: 50, className: "h-11 sm:h-12 w-auto" },
    lg: { width: 80, height: 72, className: "h-16 sm:h-20 w-auto" },
  }[size];

  const titleClass = {
    sm: "text-sm",
    md: "text-base sm:text-lg",
    lg: "text-xl sm:text-2xl",
  }[size];

  const sublineClass = {
    sm: "text-[8px] tracking-[0.16em]",
    md: "text-[9px] sm:text-[10px] tracking-[0.2em]",
    lg: "text-xs tracking-[0.22em]",
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official 3D Emblem with transparent background */}
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="City Grafix Kadapa Official Logo"
          width={emblemMetrics.width * 2}
          height={emblemMetrics.height * 2}
          className={`${emblemMetrics.className} object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200`}
          priority={priority}
        />
      </div>

      {/* Accompanying Editorial Label (for horizontal navbar lockup) */}
      {variant === "horizontal" && (
        <div className="ml-2.5 hidden sm:flex flex-col justify-center leading-tight">
          <div className="flex items-center space-x-1 font-black tracking-tight">
            <span className={`text-white ${titleClass} font-extrabold uppercase font-sans`}>
              City
            </span>
            <span className={`text-brand-red ${titleClass} font-black uppercase font-sans`}>
              Grafix
            </span>
          </div>

          <div className={`flex items-center space-x-1.5 mt-0.5 ${sublineClass} uppercase font-bold text-slate-300`}>
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
