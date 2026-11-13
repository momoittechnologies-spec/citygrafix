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
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    categoryName: "Complete Printing Solutions",
    badge: "Direct Workshop in Kadapa • Since 2014",
    headline: "Commercial Printing, Flex & CAD Blueprints",
    accentText: "Under One Roof.",
    description: "In-house production for wide-format flex banners, A0 architectural plotting, 3D acrylic LED signboards, and personalized gifting.",
    primaryCtaText: "Browse All Services",
    primaryCtaLink: "/services",
    image: "/images/flex-printing-machine.jpg",
    startingPrice: "Wholesale Rates",
    turnaroundTime: "Same-Day Dispatch",
    locationContext: "Opp. Tirumala Hospital, Kadapa",
  },
  {
    id: 2,
    categoryName: "Star Flex Printing",
    badge: "340+ GSM Weather-Tolerant Flex",
    headline: "Heavy-Duty Star Flex Banners & Hoardings",
    accentText: "Built to Last.",
    description: "Vibrant wide-format banners engineered with UV-cured inks to endure Kadapa's harsh sun and heat with reinforced brass eyelets.",
    primaryCtaText: "Explore Flex Banner Rates",
    primaryCtaLink: "/services/flex-banner-printing-kadapa",
    image: "/images/star-flex-banner.jpg",
    startingPrice: "From ₹18 / sq. ft.",
    turnaroundTime: "2 to 4 Hours",
    locationContext: "Instant Machine Dispatch",
  },
  {
    id: 3,
    categoryName: "Jumbo Xerox & CAD",
    badge: "Millimeter-Accurate Plotting",
    headline: "A0, A1, A2 & A3 Architectural CAD Plotting",
    accentText: "Ready in 15 Minutes.",
    description: "High-speed wide-format line plotting for civil engineers, builders, and DTCP municipal sanctions with accordion folding.",
    primaryCtaText: "Explore Jumbo Xerox",
    primaryCtaLink: "/services/jumbo-xerox-kadapa",
    image: "/images/a0-jumbo-xerox.jpg",
    startingPrice: "From ₹25 / sheet",
    turnaroundTime: "15 to 30 Minutes",
    locationContext: "While-You-Wait Service",
  },
  {
    id: 4,
    categoryName: "3D LED Signage",
    badge: "3-Year Electrical Assurance",
    headline: "3D Acrylic Letters & Illuminated Glow Boards",
    accentText: "Directly Fabricated.",
    description: "Precision CNC laser-cut cast acrylic letters, solid aluminum returns, and waterproof Samsung IP67 LED modules.",
    primaryCtaText: "Explore Signage Solutions",
    primaryCtaLink: "/services/3d-led-sign-boards-kadapa",
    image: "/images/3d-led-signage-storefront.jpg",
    startingPrice: "₹45 / inch letter height",
    turnaroundTime: "2 to 4 Days Turnkey",
    locationContext: "On-Site Installation Across Kadapa",
  },
  {
    id: 5,
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
    id: 6,
    categoryName: "Visiting Cards & Offset",
    badge: "Commercial Offset Printing",
    headline: "Premium Visiting Cards & Carbonless Bill Books",
    accentText: "Direct Wholesale.",
    description: "350 GSM velvet-matte visiting cards with raised Spot UV gloss highlights and custom duplicate/triplicate NCR bill books.",
    primaryCtaText: "Explore Offset Printing",
    primaryCtaLink: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    image: "/images/visiting-cards-offset.jpg",
    startingPrice: "₹750 / 1000 cards",
    turnaroundTime: "24 to 48 Hours",
    locationContext: "Wholesale Bundles Available",
  },
  {
    id: 7,
    categoryName: "Municipal Layout Maps",
    badge: "DTCP & KUDA Sanction Compliant",
    headline: "Real Estate Venture Layouts & Village Maps",
    accentText: "Continuous 44\" Rolls.",
    description: "High-definition plotting on continuous roll paper for large real estate layouts, revenue village maps (FMB sketches), and building sanctions.",
    primaryCtaText: "Explore Layout Printing",
    primaryCtaLink: "/services/layout-map-printing-kadapa",
    image: "/images/municipal-layout-village-map.jpg",
    startingPrice: "From ₹90 / sheet",
    turnaroundTime: "Same-Day Express",
    locationContext: "Engineered for Surveyors & Builders",
  },
  {
    id: 8,
    categoryName: "CAD Blueprints",
    badge: "Strict 1:100 & 1:50 Scale Accuracy",
    headline: "Structural Blueprints & Engineering Layouts",
    accentText: "Zero Line Distortion.",
    description: "Accurate structural plans, foundation grids, column schedules, electrical schematics, and plumbing designs plotted with zero distortion.",
    primaryCtaText: "Explore CAD Drawings",
    primaryCtaLink: "/services/cad-engineering-printing-kadapa",
    image: "/images/cad-blueprint-plotter.jpg",
    startingPrice: "From ₹40 / sheet",
    turnaroundTime: "15 to 30 Minutes",
    locationContext: "Walk-in & Digital Drop Desk",
  },
  {
    id: 9,
    categoryName: "Auto Publicity",
    badge: "Turnkey Mobile Rickshaw Campaigns",
    headline: "Auto Rickshaw Publicity with DTS Audio",
    accentText: "Cover Every Ward.",
    description: "Complete street-level mobile advertising across Kadapa: 3-sided auto rickshaw flex branding and high-output DTS loudspeaker announcements.",
    primaryCtaText: "Explore Auto Publicity",
    primaryCtaLink: "/services/vehicle-advertising-kadapa",
    image: "/images/auto-publicity-branding.jpg",
    startingPrice: "From ₹450 / auto",
    turnaroundTime: "24-Hour Deployment",
    locationContext: "All Kadapa Town & Rural Routes",
  },
  {
    id: 10,
    categoryName: "Highway Hoardings",
    badge: "Reinforced Wind-Resistant Framing",
    headline: "Highway Hoardings & Outdoor Steel Billboards",
    accentText: "High-Span Visibility.",
    description: "Heavy-gauge industrial outdoor banners for major traffic arteries and highway bypasses across Kadapa district.",
    primaryCtaText: "Explore Hoarding Rates",
    primaryCtaLink: "/services/hoarding-printing-kadapa",
    image: "/images/highway-hoarding-billboard.jpg",
    startingPrice: "From ₹20 / sq. ft.",
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
  const nextSlideIndex = (currentSlide + 1) % HERO_SLIDES.length;
  const nextSlideData = HERO_SLIDES[nextSlideIndex];

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
      {/* Background Image Preloader */}
      <link rel="preload" as="image" href={nextSlideData.image} />

      {/* Full-Width Bezel-less Cinematic Image Showcase */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] xl:h-[760px] overflow-hidden bg-slate-950 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Asymmetric Cinematic Scrim: Dense on the left for maximum text contrast, fading out to reveal authentic machinery */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 sm:via-slate-950/55 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Integrated Left-Aligned Hero Content */}
        <div className="site-container relative z-20 h-full flex flex-col justify-end pb-12 sm:pb-16 md:justify-center md:pb-0 pointer-events-none">
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
                className="bg-brand-red hover:bg-brand-redDark text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 flex items-center space-x-2 group/btn"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href={getWhatsAppLink(`Hello City Grafix, I want to inquire about ${slide.categoryName} (${slide.headline}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm transition-all items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Quote</span>
              </a>
            </div>
          </div>
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
