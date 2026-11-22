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
    sm: { width: 144, height: 39, className: "h-8 sm:h-9 w-auto max-w-[155px]" },
    md: { width: 184, height: 50, className: "h-10 sm:h-11 md:h-12 w-auto max-w-[210px]" },
    lg: { width: 280, height: 76, className: "h-14 sm:h-16 md:h-20 w-auto max-w-[300px]" },
  }[size];

  // Dimension metrics for 245x255 circular CG emblem
  const markMetrics = {
    sm: { width: 38, height: 39, className: "h-8 sm:h-9 w-auto" },
    md: { width: 48, height: 50, className: "h-10 sm:h-11 md:h-12 w-auto" },
    lg: { width: 73, height: 76, className: "h-14 sm:h-16 md:h-20 w-auto" },
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
        className={`${fullMetrics.className} object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md`}
        priority={priority}
      />
      <span className="sr-only">
        City Grafix - Kadapa&apos;s No #1 Printing &amp; Branding Partner
      </span>
    </div>
  );
}
