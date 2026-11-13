"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlide {
  id: number;
  categoryName: string;
  badge: string;
  badgeTelugu: string;
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
    badgeTelugu: "కడపలో సంపూర్ణ ప్రింటింగ్ సొల్యూషన్స్",
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
    badgeTelugu: "స్టార్ ఫ్లెక్స్ & ఔట్‌డోర్ ప్రచారం",
    headline: "Heavy-Duty Star Flex Banners & Hoardings",
    accentText: "Built to Last.",
    description: "Vibrant wide-format banners engineered with UV-cured inks to endure Kadapa's harsh sun and heat with reinforced brass eyelets.",
    primaryCtaText: "Explore Flex Banner Rates",
    primaryCtaLink: "/services/flex-banner-printing-kadapa",
    image: "/images/flex-printing-machine.jpg",
    startingPrice: "From ₹18 / sq. ft.",
    turnaroundTime: "2 to 4 Hours",
    locationContext: "Instant Machine Dispatch",
  },
  {
    id: 3,
    categoryName: "Jumbo Xerox & CAD",
    badge: "Millimeter-Accurate Plotting",
    badgeTelugu: "జంబో జిరాక్స్ & ఇంజనీరింగ్ ప్లాన్స్",
    headline: "A0, A1, A2 & A3 Architectural CAD Plotting",
    accentText: "Ready in 15 Minutes.",
    description: "High-speed wide-format line plotting for civil engineers, builders, and DTCP municipal sanctions with accordion folding.",
    primaryCtaText: "Explore Jumbo Xerox",
    primaryCtaLink: "/services/jumbo-xerox-kadapa",
    image: "/images/cad-blueprint-plotter.jpg",
    startingPrice: "From ₹25 / sheet",
    turnaroundTime: "15 to 30 Minutes",
    locationContext: "While-You-Wait Service",
  },
  {
    id: 4,
    categoryName: "3D LED Signage",
    badge: "3-Year Electrical Assurance",
    badgeTelugu: "3D అక్రిలిక్ ఎల్ఈడీ లెటర్స్ & గ్లో బోర్డ్స్",
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
    badge: "Finished within 1 to 2 Hours",
    badgeTelugu: "కస్టమ్ గిఫ్ట్స్ & సబ్లిమేషన్ స్టూడియో",
    headline: "Custom Photo Mugs, T-Shirts & Photo Frames",
    accentText: "Crafted On-Demand.",
    description: "AAA-grade ceramic photo mugs, magic heat-reveal mugs, washproof DTF T-shirts, and synthetic wooden wall frames.",
    primaryCtaText: "Explore Gifting Catalog",
    primaryCtaLink: "/services#personalized-gifts",
    image: "/images/personalized-gifts-collection.jpg",
    startingPrice: "From ₹250",
    turnaroundTime: "1 to 2 Hours",
    locationContext: "Same-Day Collection Desk",
  },
  {
    id: 6,
    categoryName: "Visiting Cards & Offset",
    badge: "Commercial Offset Printing",
    badgeTelugu: "విజిటింగ్ కార్డ్స్, బిల్ బుక్స్ & పాంప్లెట్లు",
    headline: "Premium Visiting Cards & Carbonless Bill Books",
    accentText: "Direct Wholesale.",
    description: "350 GSM velvet-matte visiting cards with raised Spot UV gloss highlights and custom duplicate/triplicate NCR bill books.",
    primaryCtaText: "Explore Offset Printing",
    primaryCtaLink: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1800&q=85",
    startingPrice: "₹750 / 1000 cards",
    turnaroundTime: "24 to 48 Hours",
    locationContext: "Wholesale Bundles Available",
  },
  {
    id: 7,
    categoryName: "Municipal Layout Maps",
    badge: "DTCP & KUDA Sanction Compliant",
    badgeTelugu: "మున్సిపల్ లేఅవుట్స్ & విలేజ్ మ్యాప్స్",
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
    badgeTelugu: "ఆర్కిటెక్చరల్ & ఇంజనీరింగ్ డ్రాయింగ్స్",
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
    badgeTelugu: "ఆటో పబ్లిసిటీ & మొబైల్ ప్రచారం",
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
    badgeTelugu: "హోర్డింగ్ ఫలెక్స్ & హైవే బిల్ బోర్డ్స్",
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

const ROTATION_DURATION_MS = 6500;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const progressStartTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number>();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
  }, []);

  // Keyboard Navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Page Visibility API
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
        nextSlide();
      } else {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPaused, currentSlide, nextSlide]);

  // Touch Gesture Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : touchEndX.current;
    if (!touchStartX.current || !endX) return;
    const distance = touchStartX.current - endX;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const slide = HERO_SLIDES[currentSlide];
  const nextSlideIndex = (currentSlide + 1) % HERO_SLIDES.length;
  const nextSlideData = HERO_SLIDES[nextSlideIndex];

  return (
    <section
      className="relative w-full bg-brand-dark text-white overflow-hidden py-4 sm:py-6 lg:py-8 select-none border-b border-white/10"
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

      {/* Subtle Geometric Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="site-container-hero relative z-10">
        {/* Large Full-Width Immersive Image Showcase */}
        <div className="relative w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[600px] xl:h-[660px] 2xl:h-[720px] rounded-2xl lg:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 95vw"
              />

              {/* Natural Subtle Vignette Overlays for Maximum Image Clarity */}
              <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Top-Left Category Identification Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center space-x-2">
            <div className="bg-brand-navy/90 backdrop-blur-md border border-white/15 px-3 sm:px-4 py-1.5 rounded-xl shadow-lg flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {slide.categoryName}
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-xs text-brand-gold font-medium hidden sm:inline">
                {slide.badgeTelugu}
              </span>
            </div>
          </div>

          {/* Floating Top-Right Slide Number Indicator */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center space-x-2">
            <div className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-200 shadow-md">
              <span className="text-brand-red">{String(currentSlide + 1).padStart(2, "0")}</span>
              <span className="text-slate-500"> / </span>
              <span>{String(HERO_SLIDES.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Floating Left & Right Cinematic Arrow Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 shadow-xl"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Sleek Bottom Information Overlay Bar */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-6 sm:right-6 z-20 bg-brand-dark/85 backdrop-blur-md border border-white/15 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-gold shrink-0 hidden sm:block" />
              <div className="min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm sm:text-base lg:text-lg font-black text-white tracking-tight truncate">
                    {slide.headline}
                  </span>
                  <span className="text-xs font-bold text-brand-red hidden lg:inline">
                    {slide.accentText}
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm line-clamp-1 mt-0.5 max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0 self-end sm:self-auto">
              <div className="text-right hidden md:block">
                <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">
                  {slide.locationContext}
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  {slide.startingPrice}
                </span>
              </div>

              <Link
                href={slide.primaryCtaLink}
                className="bg-brand-red hover:bg-brand-redDark text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          {/* Subtle Progress Bar Along Bottom Edge of Slider */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20">
            <div
              className="h-full bg-brand-red transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
