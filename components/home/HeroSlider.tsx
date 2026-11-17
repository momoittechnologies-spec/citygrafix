"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/data/business";

interface HeroSlide {
  id: number;
  categoryName: string;
  badge: string;
  headline: string;
  accentText: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  image: string;
  startingPrice: string;
  turnaroundTime: string;
  locationContext: string;
  posterImage?: string;
  features?: { label: string; value: string; color?: string }[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    categoryName: "Commercial Printing Hub",
    badge: "Direct Workshop in Kadapa • Since 2014",
    headline: "Everything You Imagine.",
    accentText: "We Print.",
    description: "From large-format printing and architectural signage to personalized gifts and commercial printing, City Grafix brings your ideas to life with quality, creativity and precision.",
    primaryCtaText: "Explore Our Services",
    primaryCtaLink: "/services",
    image: "/images/flex-printing-machine.jpg",
    startingPrice: "Wholesale Rates",
    turnaroundTime: "Same-Day Dispatch",
    locationContext: "Opp. Tirumala Hospital, Kadapa",
  },
  {
    id: 2,
    categoryName: "Easy Installments • Bajaj Finance",
    badge: "First Time in India • 0% Interest Charges",
    headline: "Flex Printing & 3D LED Signs on Easy Installments",
    accentText: "Pay In EMIs.",
    description: "City Grafix is officially available on Bajaj Finance! Get instant credit from ₹5,000 to ₹50,000 with down payment starting from just ₹1,000. Upgrade your shop branding without upfront stress.",
    primaryCtaText: "Check EMI Details",
    primaryCtaLink: "/#emi-finance",
    image: "/images/flex-printing-machine.jpg",
    posterImage: "/images/bajaj-finance-emi-flyer.jpg",
    features: [
      { label: "Credit Range", value: "₹5,000 – ₹50,000", color: "text-amber-300" },
      { label: "Down Payment", value: "From ₹1,000", color: "text-emerald-400" },
      { label: "Interest", value: "0% No Interest", color: "text-cyan-300" },
    ],
    startingPrice: "Down Payment from ₹1,000",
    turnaroundTime: "Instant In-Store Approval",
    locationContext: "Kadapa Workshop",
  },
  {
    id: 3,
    categoryName: "Star Flex Printing",
    badge: "340+ GSM Weather-Tolerant Flex",
    headline: "Heavy-Duty Star Flex Banners & Hoardings",
    accentText: "Built to Last.",
    description: "Vibrant wide-format banners engineered with UV-cured inks to endure Kadapa's harsh sun and heat with reinforced brass eyelets.",
    primaryCtaText: "Explore Flex Banners",
    primaryCtaLink: "/services/flex-banner-printing-kadapa",
    image: "/images/star-flex-banner.jpg",
    startingPrice: "Custom Quotation",
    turnaroundTime: "2 to 4 Hours",
    locationContext: "Instant Machine Dispatch",
  },
  {
    id: 4,
    categoryName: "Jumbo Xerox & CAD",
    badge: "Millimeter-Accurate Plotting",
    headline: "A0, A1, A2 & A3 Architectural CAD Plotting",
    accentText: "Ready in 15 Minutes.",
    description: "High-speed wide-format line plotting for civil engineers, builders, and DTCP municipal sanctions with accordion folding.",
    primaryCtaText: "Explore Jumbo Xerox",
    primaryCtaLink: "/services/jumbo-xerox-kadapa",
    image: "/images/a0-jumbo-xerox.jpg",
    startingPrice: "Custom Quotation",
    turnaroundTime: "15 to 30 Minutes",
    locationContext: "While-You-Wait Service",
  },
  {
    id: 5,
    categoryName: "3D LED Signage",
    badge: "3-Year Electrical Assurance",
    headline: "3D Acrylic Letters & Illuminated Glow Boards",
    accentText: "Directly Fabricated.",
    description: "Precision CNC laser-cut cast acrylic letters, solid aluminum returns, and waterproof Samsung IP67 LED modules.",
    primaryCtaText: "Explore Signage Solutions",
    primaryCtaLink: "/services/3d-led-sign-boards-kadapa",
    image: "/images/3d-led-signage-storefront.jpg",
    startingPrice: "Custom Quotation",
    turnaroundTime: "2 to 4 Days Turnkey",
    locationContext: "On-Site Installation Across Kadapa",
  },
  {
    id: 6,
    categoryName: "Personalised Gifts",
    badge: "10% IG Discount on Photo Frames",
    headline: "Custom Photo Frames, Mugs & DTF T-Shirts",
    accentText: "Crafted On-Demand.",
    description: "Premium wall photo frames (Glossy/Matty/Glitter with Flat 10% Instagram Discount), AAA ceramic mugs, plush pillows, and washproof DTF T-shirts.",
    primaryCtaText: "Explore Gifting Catalog",
    primaryCtaLink: "/services/personalized-gifts-framing-kadapa",
    image: "/images/personalized-gifts-collection.jpg",
    startingPrice: "From ₹200 (DTF) • Frames ₹600",
    turnaroundTime: "1 to 2 Hours",
    locationContext: "Same-Day Collection Desk",
  },
  {
    id: 7,
    categoryName: "Visiting Cards & Offset",
    badge: "Commercial Offset Printing",
    headline: "Premium Visiting Cards & Carbonless Bill Books",
    accentText: "Direct Wholesale.",
    description: "350 GSM velvet-matte visiting cards with raised Spot UV gloss highlights and custom duplicate/triplicate NCR bill books.",
    primaryCtaText: "Explore Offset Printing",
    primaryCtaLink: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    image: "/images/visiting-cards-offset.jpg",
    startingPrice: "Wholesale Packages",
    turnaroundTime: "24 to 48 Hours",
    locationContext: "Wholesale Bundles Available",
  },
  {
    id: 8,
    categoryName: "Municipal Layout Maps",
    badge: "DTCP & KUDA Sanction Compliant",
    headline: "Real Estate Venture Layouts & Village Maps",
    accentText: "Continuous 44\" Rolls.",
    description: "High-definition plotting on continuous roll paper for large real estate layouts, revenue village maps (FMB sketches), and building sanctions.",
    primaryCtaText: "Explore Layout Printing",
    primaryCtaLink: "/services/layout-map-printing-kadapa",
    image: "/images/municipal-layout-village-map.jpg",
    startingPrice: "Custom Quotation",
    turnaroundTime: "Same-Day Express",
    locationContext: "Engineered for Surveyors & Builders",
  },
  {
    id: 9,
    categoryName: "CAD Blueprints",
    badge: "Strict 1:100 & 1:50 Scale Accuracy",
    headline: "Structural Blueprints & Engineering Layouts",
    accentText: "Zero Line Distortion.",
    description: "Accurate structural plans, foundation grids, column schedules, electrical schematics, and plumbing designs plotted with zero distortion.",
    primaryCtaText: "Explore CAD Drawings",
    primaryCtaLink: "/services/cad-engineering-printing-kadapa",
    image: "/images/cad-blueprint-plotter.jpg",
    startingPrice: "Custom Quotation",
    turnaroundTime: "15 to 30 Minutes",
    locationContext: "Walk-in & Digital Drop Desk",
  },
  {
    id: 10,
    categoryName: "Auto Publicity",
    badge: "Turnkey Mobile Rickshaw Campaigns",
    headline: "Auto Rickshaw Publicity with DTS Audio",
    accentText: "Cover Every Ward.",
    description: "Complete street-level mobile advertising across Kadapa: 3-sided auto rickshaw flex branding and high-output DTS loudspeaker announcements.",
    primaryCtaText: "Explore Auto Publicity",
    primaryCtaLink: "/services/vehicle-advertising-kadapa",
    image: "/images/auto-publicity-branding.jpg",
    startingPrice: "Custom Packages",
    turnaroundTime: "24-Hour Deployment",
    locationContext: "All Kadapa Town & Rural Routes",
  },
  {
    id: 11,
    categoryName: "Highway Hoardings",
    badge: "Reinforced Wind-Resistant Framing",
    headline: "Highway Hoardings & Outdoor Steel Billboards",
    accentText: "High-Span Visibility.",
    description: "Heavy-gauge industrial outdoor banners for major traffic arteries and highway bypasses across Kadapa district.",
    primaryCtaText: "Explore Hoardings",
    primaryCtaLink: "/services/hoarding-printing-kadapa",
    image: "/images/highway-hoarding-billboard.jpg",
    startingPrice: "Custom Quotation",
    turnaroundTime: "Same-Day Dispatch",
    locationContext: "Transit Corridors Across Kadapa",
  },
];

const ROTATION_DURATION_MS = 7000;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const progressStartTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number>();
  const resumeTimeoutRef = useRef<NodeJS.Timeout>();

  // Pause temporarily when user interacts (swipes, clicks arrows, or taps)
  const pauseTemporarily = useCallback((durationMs = 8000) => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      progressStartTimeRef.current = Date.now();
      setProgress(0);
      setIsPaused(false);
    }, durationMs);
  }, []);

  const nextSlide = useCallback((manual = false) => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
    if (manual) pauseTemporarily();
  }, [pauseTemporarily]);

  const prevSlide = useCallback((manual = false) => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
    if (manual) pauseTemporarily();
  }, [pauseTemporarily]);

  const goToSlide = useCallback((index: number, manual = false) => {
    setCurrentSlide(index);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
    if (manual) pauseTemporarily();
  }, [pauseTemporarily]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Keyboard Navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide(true);
      } else if (e.key === "ArrowRight") {
        nextSlide(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Page Visibility API (Sleep when tab is minimized/hidden to preserve mobile battery)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
        progressStartTimeRef.current = Date.now() - (progress / 100) * ROTATION_DURATION_MS;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [progress]);

  // Smooth Auto-Rotation Progress Loop
  useEffect(() => {
    if (isPaused) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const updateProgress = () => {
      const elapsed = Date.now() - progressStartTimeRef.current;
      const pct = Math.min(100, (elapsed / ROTATION_DURATION_MS) * 100);
      setProgress(pct);

      if (elapsed >= ROTATION_DURATION_MS) {
        nextSlide(false);
      } else {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPaused, currentSlide, nextSlide]);

  // Touch Gesture Handling with Smart Mobile Hold
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : touchEndX.current;
    if (!touchStartX.current || !endX) {
      pauseTemporarily(6000);
      return;
    }
    const distance = touchStartX.current - endX;
    if (distance > 40) {
      nextSlide(true);
    } else if (distance < -40) {
      prevSlide(true);
    } else {
      pauseTemporarily(6000);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full bg-brand-dark text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        progressStartTimeRef.current = Date.now() - (progress / 100) * ROTATION_DURATION_MS;
        setIsPaused(false);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Width Bezel-less Cinematic Image Showcase */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] xl:h-[760px] overflow-hidden bg-slate-950 group">
        {/* Seamless Stacked Slide Cross-Fade: Keeps all slides pre-mounted and smoothly cross-faded with ZERO blank void */}
        {HERO_SLIDES.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={s.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={s.image}
                alt={s.headline}
                fill
                priority={idx <= 1}
                loading={idx <= 1 ? "eager" : "lazy"}
                className="object-cover object-center"
                sizes="100vw"
              />

              {/* Asymmetric Cinematic Scrim: Dense on the left for maximum text contrast, fading out to reveal authentic machinery */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 sm:via-slate-950/55 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* Integrated Hero Content */}
        <div className="site-container relative z-20 h-full flex flex-col justify-end pb-12 sm:pb-16 md:justify-center md:pb-0 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full"
            >
              {slide.posterImage ? (
            /* Split 2-Column Showcase for Promotional Flyer Slides (Prevents Text Collision) */
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pointer-events-auto pt-8 sm:pt-0">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                {/* Category & Verified Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                    <span>{slide.categoryName}</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center text-[11px] sm:text-xs bg-white/10 text-slate-200 border border-white/15 px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                    {slide.badge}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  <span>{slide.headline} </span>
                  <span className="text-amber-400">{slide.accentText}</span>
                </h1>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Key Metrics Strip */}
                {slide.features && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 max-w-lg">
                    {slide.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-2.5 text-center shadow-md"
                      >
                        <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                          {feat.label}
                        </div>
                        <div className={`text-xs sm:text-sm font-black mt-0.5 ${feat.color || "text-white"}`}>
                          {feat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href={slide.primaryCtaLink}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center space-x-2 group/btn active:scale-95"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I want to inquire about Easy Installments with Bajaj Finance for printing / LED signage:`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm transition-all flex items-center space-x-2 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Quick WhatsApp Quote</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Promotional Flyer Mockup Showcase */}
              <div className="hidden lg:flex lg:col-span-5 justify-end">
                <div className="relative w-64 xl:w-72 aspect-[935/1024] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 ring-4 ring-amber-400/20 group/flyer hover:scale-105 transition-transform duration-500 bg-slate-900">
                  <Image
                    src={slide.posterImage}
                    alt={slide.headline}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    Official Partner
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Standard Cinematic Full-Width Slide */
            <div className="max-w-2xl pointer-events-auto space-y-3 sm:space-y-4 pt-10 sm:pt-0">
              {/* Category & Verified Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-brand-red text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>{slide.categoryName}</span>
                </span>
                <span className="hidden sm:inline-flex items-center text-[11px] sm:text-xs bg-white/10 text-slate-200 border border-white/15 px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                  {slide.badge}
                </span>
              </div>

              {/* Main Headline with Highlight Accent */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                <span>{slide.headline} </span>
                <span className="text-brand-gold">{slide.accentText}</span>
              </h1>

              {/* Description (Concise & Legible) */}
              <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-3">
                {slide.description}
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={slide.primaryCtaLink}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center space-x-2 group/btn active:scale-95"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={getWhatsAppLink(`Hello City Grafix, I want to get a free quote for ${slide.categoryName} (${slide.headline}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm transition-all flex items-center space-x-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Get a Free Quote</span>
                </a>
              </div>
            </div>
          )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Minimal Navigation Controls */}
        <button
          onClick={() => prevSlide(true)}
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/75 backdrop-blur-md border border-white/15 text-white transition-all flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => nextSlide(true)}
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/75 backdrop-blur-md border border-white/15 text-white transition-all flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Counter & Indicators */}
        <div className="site-container absolute bottom-4 sm:bottom-6 right-0 z-20 pointer-events-none flex items-center justify-end">
          <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/15 px-3 py-1 rounded-xl text-xs font-mono font-bold text-slate-200 shadow-md flex items-center space-x-1.5">
            <span className="text-brand-red">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="text-slate-500">/</span>
            <span>{String(HERO_SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Subtle Progress Bar Along Bottom Edge of Full-Width Slider */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20">
          <div
            className={`h-full bg-brand-red transition-all duration-100 ease-linear ${
              isPaused ? "opacity-60" : "opacity-100"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
