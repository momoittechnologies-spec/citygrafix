"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolio";
import { MapPin, Clock, ArrowRight, X, ExternalLink, Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "flex", label: "Flex & Arches" },
    { id: "signage", label: "3D LED Signage" },
    { id: "xerox", label: "Jumbo Xerox & CAD" },
    { id: "gifts", label: "Personalized Gifts" },
    { id: "offset", label: "Commercial Offset" },
    { id: "vehicle", label: "Vehicle Branding" },
  ];

  const filteredItems = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative" id="portfolio">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-brand-navy/10 text-brand-navy px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-royal" />
              <span>Fabricated in Kadapa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
              Our Recent Work & Portfolio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base xl:text-lg mt-2 max-w-2xl">
              Inspect completed signage, blueprints, wide-format flex banners, and customized gifts manufactured right here at our workshop.
            </p>
          </div>

          <Link
            href="/our-work"
            data-cursor="ALL"
            className="mt-4 md:mt-0 text-sm xl:text-base font-bold text-brand-royal hover:underline inline-flex items-center"
          >
            <span>Explore Full Gallery →</span>
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="FILTER"
              className={`px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              data-cursor="INSPECT"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between card-3d-tilt"
            >
              <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3.5 left-3.5 bg-brand-navy/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] xl:text-xs font-bold text-brand-gold uppercase tracking-wider">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5 xl:p-6 flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <h3 className="text-base xl:text-lg font-black text-brand-navy group-hover:text-brand-royal transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs xl:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center truncate mr-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-red mr-1 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="flex items-center shrink-0 font-bold text-brand-royal">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {item.turnaround}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-96 w-full bg-slate-900">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-brand-royal uppercase tracking-wider">
                  {selectedItem.categoryLabel} • {selectedItem.clientType}
                </span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">{selectedItem.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{selectedItem.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 text-brand-red mr-1" />
                    {selectedItem.location}
                  </span>
                  <span className="flex items-center font-semibold text-slate-900">
                    <Clock className="w-4 h-4 text-emerald-600 mr-1" />
                    Turnaround: {selectedItem.turnaround}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
