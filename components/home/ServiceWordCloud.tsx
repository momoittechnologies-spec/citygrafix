"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Filter } from "lucide-react";

interface WordItem {
  text: string;
  category: "outdoor" | "signage" | "engineering" | "commercial" | "gifts" | "vehicle";
  href: string;
  weight: "xl" | "lg" | "md" | "sm";
  colorClass: string;
}

export default function ServiceWordCloud() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const words: WordItem[] = [
    // Outdoor Advertising (Primary Highlights)
    { text: "Roadside Hoardings", category: "outdoor", href: "/services/outdoor-advertising-hoardings", weight: "xl", colorClass: "text-[#FFC83D]" },
    { text: "Star Flex", category: "outdoor", href: "/services/flex-banner-printing-kadapa", weight: "xl", colorClass: "text-[#FAFAF7]" },
    { text: "Pole Kiosk Advertising", category: "outdoor", href: "/services/outdoor-advertising-hoardings", weight: "lg", colorClass: "text-[#F04446]" },
    { text: "Highway Billboards", category: "outdoor", href: "/services/outdoor-advertising-hoardings", weight: "lg", colorClass: "text-[#2255D6]" },
    { text: "Road Median Boards", category: "outdoor", href: "/services/outdoor-advertising-hoardings", weight: "md", colorClass: "text-[#FAFAF7]" },
    { text: "Flex Printing", category: "outdoor", href: "/services/flex-banner-printing-kadapa", weight: "xl", colorClass: "text-[#FAFAF7]" },
    { text: "Advertising Arches", category: "outdoor", href: "/services/arch-flex-printing-kadapa", weight: "md", colorClass: "text-[#94A3B8]" },
    { text: "Backlit Flex", category: "outdoor", href: "/services/flex-banner-printing-kadapa", weight: "md", colorClass: "text-[#FFC83D]" },
    { text: "Shop Branding", category: "outdoor", href: "/#emi-finance", weight: "lg", colorClass: "text-[#FAFAF7]" },

    // Signage
    { text: "3D Acrylic Letters", category: "signage", href: "/services/3d-led-sign-boards-kadapa", weight: "xl", colorClass: "text-[#F04446]" },
    { text: "LED Signboards", category: "signage", href: "/services/3d-led-sign-boards-kadapa", weight: "xl", colorClass: "text-[#FFC83D]" },
    { text: "Glow Signboards", category: "signage", href: "/services/3d-led-sign-boards-kadapa", weight: "lg", colorClass: "text-[#FAFAF7]" },
    { text: "Vinyl Stickers", category: "signage", href: "/services/stickers-boards-commercial", weight: "md", colorClass: "text-[#2255D6]" },
    { text: "Sunboard Printing", category: "signage", href: "/services/stickers-boards-commercial", weight: "md", colorClass: "text-[#FAFAF7]" },
    { text: "One Way Vision", category: "signage", href: "/services/stickers-boards-commercial", weight: "md", colorClass: "text-[#94A3B8]" },
    { text: "Window Graphics", category: "signage", href: "/services/stickers-boards-commercial", weight: "sm", colorClass: "text-[#CBD5E1]" },
    { text: "PVC Boards", category: "signage", href: "/services/stickers-boards-commercial", weight: "sm", colorClass: "text-[#94A3B8]" },

    // Engineering & CAD
    { text: "Jumbo Xerox", category: "engineering", href: "/services/jumbo-xerox-kadapa", weight: "xl", colorClass: "text-[#2255D6]" },
    { text: "CAD Plotting", category: "engineering", href: "/services/cad-engineering-printing-kadapa", weight: "xl", colorClass: "text-[#FAFAF7]" },
    { text: "A0 Printing", category: "engineering", href: "/services/jumbo-xerox-kadapa", weight: "lg", colorClass: "text-[#FFC83D]" },
    { text: "Engineering Blueprints", category: "engineering", href: "/services/cad-engineering-printing-kadapa", weight: "lg", colorClass: "text-[#FAFAF7]" },
    { text: "Village Maps", category: "engineering", href: "/services/layout-map-printing-kadapa", weight: "md", colorClass: "text-[#F04446]" },
    { text: "Architectural Plans", category: "engineering", href: "/services/cad-engineering-printing-kadapa", weight: "md", colorClass: "text-[#94A3B8]" },
    { text: "Survey Maps", category: "engineering", href: "/services/layout-map-printing-kadapa", weight: "md", colorClass: "text-[#FAFAF7]" },
    { text: "Layout Printing", category: "engineering", href: "/services/layout-map-printing-kadapa", weight: "sm", colorClass: "text-[#CBD5E1]" },
    { text: "A1 Printing", category: "engineering", href: "/services/jumbo-xerox-kadapa", weight: "sm", colorClass: "text-[#94A3B8]" },

    // Commercial Printing
    { text: "Visiting Cards", category: "commercial", href: "/services/visiting-cards-bill-books-pamphlets-kadapa", weight: "xl", colorClass: "text-[#FAFAF7]" },
    { text: "Offset Printing", category: "commercial", href: "/services/visiting-cards-bill-books-pamphlets-kadapa", weight: "lg", colorClass: "text-[#FFC83D]" },
    { text: "Bill Books", category: "commercial", href: "/services/visiting-cards-bill-books-pamphlets-kadapa", weight: "lg", colorClass: "text-[#2255D6]" },
    { text: "Pamphlets", category: "commercial", href: "/services/visiting-cards-bill-books-pamphlets-kadapa", weight: "md", colorClass: "text-[#F04446]" },
    { text: "ID Cards", category: "commercial", href: "/services/visiting-cards-bill-books-pamphlets-kadapa", weight: "sm", colorClass: "text-[#94A3B8]" },
    { text: "Product Labels", category: "commercial", href: "/services/stickers-boards-commercial", weight: "sm", colorClass: "text-[#CBD5E1]" },
    { text: "Promotional Badges", category: "commercial", href: "/pricing#badges", weight: "md", colorClass: "text-[#FAFAF7]" },

    // Personalized Gifts
    { text: "Photo Frames", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", weight: "xl", colorClass: "text-[#FFC83D]" },
    { text: "Photo Mugs", category: "gifts", href: "/pricing#mugs", weight: "xl", colorClass: "text-[#F04446]" },
    { text: "Magic Mugs", category: "gifts", href: "/pricing#mugs", weight: "lg", colorClass: "text-[#FAFAF7]" },
    { text: "DTF T-Shirts", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", weight: "lg", colorClass: "text-[#2255D6]" },
    { text: "Photo Pillows", category: "gifts", href: "/pricing#pillows", weight: "md", colorClass: "text-[#FAFAF7]" },
    { text: "Custom Caps", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", weight: "sm", colorClass: "text-[#94A3B8]" },
    { text: "Personalized Gifts", category: "gifts", href: "/services/personalized-gifts-framing-kadapa", weight: "md", colorClass: "text-[#FFC83D]" },

    // Advertising & Mobility
    { text: "Auto Rickshaw Advertising", category: "vehicle", href: "/services/vehicle-advertising-kadapa", weight: "xl", colorClass: "text-[#F04446]" },
    { text: "Vehicle Branding", category: "vehicle", href: "/services/vehicle-advertising-kadapa", weight: "lg", colorClass: "text-[#2255D6]" },
    { text: "Promotional Printing", category: "vehicle", href: "/services", weight: "md", colorClass: "text-[#FAFAF7]" },
  ];

  const filterCategories = [
    { key: "all", label: "All Capabilities" },
    { key: "outdoor", label: "Outdoor Hoardings" },
    { key: "signage", label: "3D LED Signage" },
    { key: "engineering", label: "Jumbo Xerox & CAD" },
    { key: "commercial", label: "Commercial Offset" },
    { key: "gifts", label: "Personalized Gifts" },
    { key: "vehicle", label: "Auto Publicity" },
  ];

  const filteredWords =
    activeFilter === "all" ? words : words.filter((w) => w.category === activeFilter);

  const getWeightClasses = (weight: "xl" | "lg" | "md" | "sm") => {
    switch (weight) {
      case "xl":
        return "text-xl sm:text-2xl md:text-3xl font-black px-4 py-2 bg-white/10 hover:bg-[#F04446] hover:text-white rounded-2xl shadow-sm border border-white/15";
      case "lg":
        return "text-base sm:text-lg md:text-xl font-extrabold px-3.5 py-1.5 bg-white/5 hover:bg-[#2255D6] hover:text-white rounded-xl border border-white/10";
      case "md":
        return "text-xs sm:text-sm md:text-base font-bold px-3 py-1 bg-white/5 hover:bg-white/15 rounded-lg border border-white/5";
      case "sm":
        return "text-[11px] sm:text-xs font-medium px-2.5 py-1 bg-transparent hover:bg-white/10 rounded-md";
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#101B38] via-[#0E172E] to-[#101B38] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#2255D6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#F04446]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FFC83D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Capabilities Hub</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white leading-tight">
            One Studio. Endless Printing Possibilities.
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore everything City Grafix can create, print and customize. Click any specialty to discover technical specifications, materials, and direct workshop rates.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filterCategories.map((cat) => {
              const isSelected = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#2255D6] text-white shadow-md shadow-blue-900/50 scale-102"
                      : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Word Cloud Editorial Typography Canvas */}
        <div className="max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4.5 leading-normal">
            {filteredWords.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`inline-flex items-center gap-1 transition-all duration-200 group active:scale-95 focus-visible:outline-2 focus-visible:outline-[#FFC83D] ${item.colorClass} ${getWeightClasses(
                  item.weight
                )}`}
                title={`Explore ${item.text} at City Grafix`}
              >
                <span>{item.text}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5 text-[#FFC83D]" />
              </Link>
            ))}
          </div>

          {/* Micro Footer inside Card */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <span>
              💡 Looking for custom dimensions or bulk rates? Every product is manufactured in-house.
            </span>
            <Link
              href="/pricing"
              className="text-[#FFC83D] hover:text-white font-bold inline-flex items-center gap-1 transition-colors shrink-0"
            >
              <span>View Official Rates</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
