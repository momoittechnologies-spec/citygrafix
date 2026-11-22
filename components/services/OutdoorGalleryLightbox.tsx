"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  telugu: string;
  image: string;
  category: string;
  caption: string;
  location: string;
}

interface Props {
  items: GalleryItem[];
}

export default function OutdoorGalleryLightbox({ items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  }, [selectedIndex, items.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  }, [selectedIndex, items.length]);

  // Keyboard navigation (Escape, Left, Right)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <>
      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpen(index)}
            className="group relative bg-[#FAFAF7] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#2255D6] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#101B38]/90 backdrop-blur-xs text-[#FFC83D] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                {item.category}
              </div>

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#101B38]/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFC83D]" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>

            {/* Meta Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#101B38] line-clamp-2 leading-snug group-hover:text-[#2255D6] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#53627B] mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="flex items-center text-[10px] text-slate-500 font-medium pt-2 border-t border-slate-200">
                <MapPin className="w-3 h-3 text-[#F04446] mr-1 shrink-0" />
                <span className="truncate">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full bg-[#101B38] text-white rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between p-4 bg-[#0B1326] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#F04446] text-white text-[10px] font-bold uppercase">
                  {items[selectedIndex].category}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white truncate max-w-md">
                  {items[selectedIndex].title}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[500px] bg-slate-950 flex items-center justify-center">
              <Image
                src={items[selectedIndex].image}
                alt={items[selectedIndex].title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer border border-white/20"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer border border-white/20"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Caption Footer */}
            <div className="p-4 sm:p-5 bg-[#0B1326] border-t border-white/10 space-y-1.5 text-xs">
              <div className="flex items-center justify-between gap-2">
                <h5 className="font-bold text-sm text-[#FFC83D]">
                  {items[selectedIndex].title}
                </h5>
                <span className="text-slate-400 text-[11px] font-mono">
                  {selectedIndex + 1} of {items.length}
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {items[selectedIndex].caption}
              </p>
              <div className="flex items-center text-[11px] text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#F04446] mr-1 shrink-0" />
                <span>Location: {items[selectedIndex].location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
