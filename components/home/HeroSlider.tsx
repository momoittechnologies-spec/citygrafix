"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

interface HeroSlide {
  id: number;
  badge: string;
  badgeTelugu: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  whatsappMessage: string;
  whatsappLine: "orders" | "signage";
  bgImage: string;
  accentColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Est. 2014 • Over 10+ Years in Kadapa",
    badgeTelugu: "కడపలో సంపూర్ణ ప్రింటింగ్ సొల్యూషన్స్",
    headline: "Everything You Print. We Make It Better.",
    description: "Your trusted destination for commercial printing, wide-format flex, architectural 3D signage, and personalized gifting solutions in Kadapa.",
    primaryCtaText: "Explore Our Services",
    primaryCtaLink: "/services",
    whatsappMessage: "Hello City Grafix, I want to explore your complete printing solutions in Kadapa.",
    whatsappLine: "orders",
    bgImage: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1920&q=80",
    accentColor: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    badge: "High-Gloss 340+ GSM Star Flex",
    badgeTelugu: "స్టార్ ఫ్లెక్స్ & ఔట్‌డోర్ ప్రచారం",
    headline: "Make Your Brand Impossible to Miss.",
    description: "High-quality flex banners, grand entrance arches, roadside hoardings, backlit prints, and highway advertising engineered for Rayalaseema weather.",
    primaryCtaText: "Explore Flex Printing",
    primaryCtaLink: "/services/flex-banner-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I need Star Flex Banner / Outdoor advertising in Kadapa. Please share quotation.",
    whatsappLine: "orders",
    bgImage: "/images/flex-printing-machine.jpg",
    accentColor: "from-brand-red to-rose-700",
  },
  {
    id: 3,
    badge: "Instant 15-Min Delivery • 1200 DPI",
    badgeTelugu: "జంబో జిరాక్స్ & ఇంజనీరింగ్ బ్లూప్రింట్స్",
    headline: "Precision Printing. Every Single Detail.",
    description: "Professional A0, A1, A2, A3, and A4 printing, AutoCAD drawings, municipal layouts, village survey maps, and 600 DPI large-format scanning.",
    primaryCtaText: "Explore Jumbo Xerox",
    primaryCtaLink: "/services/jumbo-xerox-kadapa",
    whatsappMessage: "Hello City Grafix, I need Jumbo Xerox / AutoCAD Blueprint printing in Kadapa.",
    whatsappLine: "orders",
    bgImage: "/images/cad-blueprint-plotter.jpg",
    accentColor: "from-sky-600 to-blue-800",
  },
  {
    id: 4,
    badge: "Direct Fabrication • 3-Yr Warranty",
    badgeTelugu: "3D అక్రిలిక్ ఎల్ఈడీ లెటర్స్ & గ్లో బోర్డ్స్",
    headline: "Give Your Business a Powerful Identity.",
    description: "Elite CNC laser-cut 3D acrylic channel letters, halo backlit signage, and Samsung IP67 waterproof LED glow signboards with 48-hour burn-in testing.",
    primaryCtaText: "Explore 3D Signage",
    primaryCtaLink: "/services/3d-led-sign-boards-kadapa",
    whatsappMessage: "Hello City Grafix, I want an inquiry for 3D Acrylic LED Glow Signboard in Kadapa.",
    whatsappLine: "signage",
    bgImage: "/images/3d-led-signage-storefront.jpg",
    accentColor: "from-amber-500 to-brand-red",
  },
  {
    id: 5,
    badge: "1 to 2 Hours Same-Day Dispatch",
    badgeTelugu: "కస్టమ్ ఫోటో మగ్స్, టీ-షర్ట్స్ & ఫ్రేమ్స్",
    headline: "Make Every Moment Personal.",
    description: "Custom photo mugs, magic reveal mugs, DTF washproof T-shirts, synthetic wooden frames, LED wall art, and photo pillows crafted with care.",
    primaryCtaText: "Explore Personalised Gifts",
    primaryCtaLink: "/services#personalized-gifts",
    whatsappMessage: "Hello City Grafix, I want to order Personalized Gifts (Mugs, T-shirt, Photo Frame). Please share designs.",
    whatsappLine: "orders",
    bgImage: "/images/personalized-gifts-collection.jpg",
    accentColor: "from-purple-600 to-pink-600",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] overflow-hidden bg-brand-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Deck */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Vignette & Layered Gradient */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.headline}
                fill
                priority={index === 0}
                className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
                sizes="100vw"
              />
              {/* Rich Multi-stop Dark Gradient Overlay for Maximum Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-navy/85 to-brand-dark/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-3xl space-y-4 sm:space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-brand-gold tracking-wide">
                    {slide.badge}
                  </span>
                  <span className="text-white/40 hidden sm:inline">|</span>
                  <span className="text-xs text-slate-200 hidden sm:inline font-medium">
                    {slide.badgeTelugu}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                  {slide.headline}
                </h1>

                {/* Subtitle Description */}
                <p className="text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal drop-shadow">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <Link
                    href={slide.primaryCtaLink}
                    className="bg-gradient-to-r from-brand-red to-brand-redDark hover:from-brand-redLight hover:to-brand-red text-white font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-brand-red/40 hover:shadow-brand-red/60 transition-all flex items-center space-x-2 text-sm sm:text-base group"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <a
                    href={getWhatsAppLink(slide.whatsappMessage, slide.whatsappLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <Link
                    href="/pricing#calculator"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-colors text-sm sm:text-base hidden sm:inline-flex items-center space-x-1.5"
                  >
                    <span>Price Calculator</span>
                  </Link>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                  <span className="flex items-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
                    Direct Workshop Fabrication
                  </span>
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 text-brand-gold mr-1.5" />
                    Zero Broker Markup
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5" />
                    Same-Day Express Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-lg active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-lg active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center items-center space-x-2.5">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 h-2.5 bg-brand-gold shadow-md shadow-brand-gold/50"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
