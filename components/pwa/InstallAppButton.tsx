"use client";

import React from "react";
import { Download } from "lucide-react";

interface InstallAppButtonProps {
  className?: string;
  variant?: "full" | "compact" | "pill";
  label?: string;
}

export default function InstallAppButton({
  className = "",
  variant = "full",
  label = "Install City Grafix App",
}: InstallAppButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("citygrafix-install-app"));
    }
  };

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer ${className}`}
        title="Add to Home Screen"
      >
        <Download className="w-3.5 h-3.5" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center space-x-2 text-xs active:scale-95 cursor-pointer ${className}`}
    >
      <Download className="w-3.5 h-3.5 text-amber-400" />
      <span>{label}</span>
    </button>
  );
}
