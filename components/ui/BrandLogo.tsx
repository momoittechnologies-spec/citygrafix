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
  size = "md",
  className = "",
  priority = true,
}: BrandLogoProps) {
  // Dimension metrics for 940x255 official full logo (aspect ratio ~3.686 : 1)
  const fullMetrics = {
    sm: { width: 144, height: 39, className: "h-8 sm:h-9 w-auto max-w-[160px]" },
    md: { width: 206, height: 56, className: "h-11 sm:h-12 md:h-13 lg:h-14 w-auto max-w-[240px]" },
    lg: { width: 295, height: 80, className: "h-14 sm:h-16 md:h-20 w-auto max-w-[320px]" },
  }[size];

  // Dimension metrics for 260x255 circular CG emblem
  const markMetrics = {
    sm: { width: 40, height: 39, className: "h-8 sm:h-9 w-auto" },
    md: { width: 57, height: 56, className: "h-11 sm:h-12 md:h-13 w-auto" },
    lg: { width: 82, height: 80, className: "h-14 sm:h-16 md:h-20 w-auto" },
  }[size];

  if (variant === "mark-only") {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/brand/city-grafix-emblem.webp"
          alt="City Grafix Official Emblem"
          width={markMetrics.width}
          height={markMetrics.height}
          className={`${markMetrics.className} object-contain transition-transform duration-200 group-hover:scale-105`}
          priority={priority}
        />
        <span className="sr-only">City Grafix</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/brand/city-grafix-official-logo.webp"
        alt="City Grafix - Kadapa's No #1 Printing & Branding Partner"
        width={fullMetrics.width}
        height={fullMetrics.height}
        className={`${fullMetrics.className} object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]`}
        priority={priority}
      />
      <span className="sr-only">
        City Grafix - Kadapa&apos;s No #1 Printing &amp; Branding Partner
      </span>
    </div>
  );
}
