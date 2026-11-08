"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/business";
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
  whatsappMessage: string;
  whatsappLine: "orders" | "signage";
  image: string;
  specs: string[];
  startingPrice: string;
  turnaroundTime: string;
  locationContext: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    categoryName: "Complete Solutions",
    badge: "Direct Workshop in Kadapa • Since 2014",
    badgeTelugu: "కడపలో సంపూర్ణ ప్రింటింగ్ పరిష్కారాలు",
    headline: "Commercial Printing, Signage & CAD Blueprints",
    accentText: "Under One Roof.",
    description: "In-house production for wide-format flex banners, A0 architectural plotting, 3D acrylic LED signboards, and personalized gifting. Transparent wholesale pricing with zero broker markups.",
    primaryCtaText: "Browse All 11 Services",
    primaryCtaLink: "/services",
    whatsappMessage: "Hello City Grafix, I want to inquire about printing services in Kadapa.",
    whatsappLine: "orders",
    image: "/images/flex-printing-machine.jpg",
    specs: ["Direct In-House Machines", "1440 DPI Japanese Inks", "Open 7 Days a Week"],
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
    description: "Vibrant wide-format banners engineered with UV-cured inks to endure Kadapa's harsh sun and heat. Finished with double-folded borders, wooden beeding, and rust-resistant brass eyelets.",
    primaryCtaText: "Explore Flex Banner Rates",
    primaryCtaLink: "/services/flex-banner-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I need Star Flex banner printing in Kadapa. Please share quotation.",
    whatsappLine: "orders",
    image: "/images/flex-printing-machine.jpg",
    specs: ["Tear-Resistant 340+ GSM Substrate", "Reinforced Brass Eyelets", "2 to 4 Hour Turnaround"],
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
    description: "High-speed wide-format line plotting for civil engineers, builders, and DTCP municipal sanctions. Smudge-proof black & color plotting on 90 GSM imported bond paper with accordion folding.",
    primaryCtaText: "Explore Jumbo Xerox",
    primaryCtaLink: "/services/jumbo-xerox-kadapa",
    whatsappMessage: "Hello City Grafix, I need Jumbo Xerox / CAD Blueprint printing in Kadapa.",
    whatsappLine: "orders",
    image: "/images/cad-blueprint-plotter.jpg",
    specs: ["1200 DPI Vector Precision", "Standard A0 to A4 Formats", "Large-Format 600 DPI Scanning"],
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
    description: "Precision CNC laser-cut cast acrylic letters, solid aluminum returns, and waterproof Samsung IP67 LED modules. Every board undergoes 48-hour electrical burn-in testing before installation.",
    primaryCtaText: "Explore Signage Solutions",
    primaryCtaLink: "/services/3d-led-sign-boards-kadapa",
    whatsappMessage: "Hello City Grafix, I want an inquiry for 3D Acrylic LED Glow Signboard in Kadapa.",
    whatsappLine: "signage",
    image: "/images/3d-led-signage-storefront.jpg",
    specs: ["Front-Lit & Halo Back-Lit Styles", "Samsung IP67 Waterproof LEDs", "Structural Frame Fabrication"],
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
    description: "AAA-grade ceramic photo mugs, magic heat-reveal mugs, washproof DTF T-shirts, and synthetic wooden wall frames. Send photos via WhatsApp and pick up finished gifts in 1 to 2 hours.",
    primaryCtaText: "Explore Gifting Catalog",
    primaryCtaLink: "/services#personalized-gifts",
    whatsappMessage: "Hello City Grafix, I want to order Personalized Gifts (Mugs, T-shirt, Photo Frame). Please share designs.",
    whatsappLine: "orders",
    image: "/images/personalized-gifts-collection.jpg",
    specs: ["Dishwasher-Safe Ceramic Mugs", "Magic Color Changing Mugs", "Synthetic Wooden Frames"],
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
    description: "350 GSM velvet-matte visiting cards with raised Spot UV gloss highlights. Custom numbered duplicate and triplicate NCR tax invoice books, retail bill books, and vibrant marketing flyers.",
    primaryCtaText: "Explore Offset Printing",
    primaryCtaLink: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    whatsappMessage: "Hello City Grafix, I need Visiting Cards / Bill Books / Pamphlets printing in Kadapa.",
    whatsappLine: "orders",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1800&q=85",
    specs: ["350 GSM Velvet + Spot UV Cards", "Numbered Duplicate/Triplicate NCR Books", "A4 & A5 Full-Color Flyers"],
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
    description: "High-definition plotting on continuous roll paper for large real estate layouts, revenue village maps (FMB sketches), and municipal building sanctions with clear survey boundary demarcation.",
    primaryCtaText: "Explore Layout Printing",
    primaryCtaLink: "/services/layout-map-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I want to print a Municipal Layout / Real Estate Map in Kadapa.",
    whatsappLine: "orders",
    image: "/images/municipal-layout-village-map.jpg",
    specs: ["44-Inch Continuous Roll Width", "Distinct Boundary Color Coding", "Accepted by Local Authorities"],
    startingPrice: "From ₹90 / sheet",
    turnaroundTime: "Same-Day Express",
    locationContext: "Engineered for Surveyors & Builders",
  },
  {
    id: 8,
    categoryName: "CAD Drawings",
    badge: "Strict 1:100 & 1:50 Scale Accuracy",
    badgeTelugu: "ఆర్కిటెక్చరల్ & ఇంజనీరింగ్ డ్రాయింగ్స్",
    headline: "Structural Blueprints & Engineering Layouts",
    accentText: "Zero Line Distortion.",
    description: "Accurate structural plans, foundation grids, column schedules, electrical schematics, and plumbing designs plotted with zero line distortion and folded to A4 for site binders.",
    primaryCtaText: "Explore CAD Drawings",
    primaryCtaLink: "/services/cad-engineering-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I have AutoCAD / Engineering Drawings to plot in Kadapa.",
    whatsappLine: "orders",
    image: "/images/cad-blueprint-plotter.jpg",
    specs: ["Strict Architectural Scale Fidelity", "Smudge-Proof Moisture Toner", "Standard Accordion Filing Folds"],
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
    description: "Complete street-level mobile advertising across Kadapa. Complete 3-sided auto rickshaw flex branding, high-output DTS loudspeaker mic announcements, and route-map tracking.",
    primaryCtaText: "Explore Auto Publicity",
    primaryCtaLink: "/services/vehicle-advertising-kadapa",
    whatsappMessage: "Hello City Grafix, I want to book an Auto Publicity campaign in Kadapa with DTS sound.",
    whatsappLine: "orders",
    image: "/images/auto-publicity-branding.jpg",
    specs: ["3-Sided Flex Panels (W6×H5 & W4×H5)", "High-Clarity DTS Loudspeaker", "Daily WhatsApp Route Photo Proof"],
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
    description: "Heavy-gauge industrial outdoor banners for major traffic arteries and highway bypasses across Kadapa district. Engineered with heavy wind pockets and reinforced brass eyelet loops.",
    primaryCtaText: "Explore Hoarding Rates",
    primaryCtaLink: "/services/hoarding-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I need Hoarding Flex / Highway Billboard printing in Kadapa.",
    whatsappLine: "orders",
    image: "/images/highway-hoarding-billboard.jpg",
    specs: ["Heavy Industrial Fabric Substrate", "Multi-Month Fade-Resistant UV Inks", "Double-Stitched Perimeter Borders"],
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
      className="relative w-full bg-brand-dark text-white overflow-hidden py-6 sm:py-10 lg:py-14 select-none border-b border-white/10"
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

      {/* Subtle Geometric Background - Non-distracting, clean architecture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="site-container-hero relative z-10">
        {/* Category Selector Bar (Clean, Tabular, Human-Designed) */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-2 shrink-0 hidden md:inline">
            Direct Workshop Categories:
          </span>
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 flex items-center space-x-1.5 ${
                currentSlide === idx
                  ? "bg-white text-brand-dark font-bold shadow-md"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className={`font-mono text-[10px] ${currentSlide === idx ? "text-brand-red font-bold" : "text-slate-400"}`}>
                {String(s.id).padStart(2, "0")}
              </span>
              <span>{s.categoryName}</span>
            </button>
          ))}
        </div>

        {/* Editorial Split Showcase (Balanced 45% Editorial / 55% Authentic Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-center min-h-[500px] lg:min-h-[560px]">
          {/* Left Column: Clear Human Typography & Action */}
          <div className="lg:col-span-6 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Authentic Context Pill */}
                <div className="flex items-center space-x-2 text-xs font-medium text-slate-300">
                  <span className="text-brand-red font-bold uppercase tracking-wider text-[11px]">
                    {slide.badge}
                  </span>
                  <span>•</span>
                  <span className="text-slate-400">{slide.badgeTelugu}</span>
                </div>

                {/* Clear, High-Contrast Typography (No rainbow gradients) */}
                <h1 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
                  <span>{slide.headline} </span>
                  <span className="text-brand-red block sm:inline">{slide.accentText}</span>
                </h1>

                {/* Mobile Photograph: Visible without scrolling */}
                <div className="block lg:hidden relative w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 my-2">
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                    <span className="truncate mr-2">{slide.categoryName}</span>
                    <span className="text-brand-gold shrink-0">{slide.turnaroundTime}</span>
                  </div>
                </div>

                {/* Direct, Informative Narrative */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Technical Specs List (Clean & Subdued) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {slide.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-xs text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-lg"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate font-medium">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Real Commercial Turnaround & Starting Pricing */}
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs sm:text-sm border-t border-white/10 pt-3">
                  <div className="flex items-center text-slate-300">
                    <Tag className="w-4 h-4 text-brand-gold mr-1.5" />
                    <span>Price: <strong className="text-white font-semibold">{slide.startingPrice}</strong></span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Clock className="w-4 h-4 text-emerald-400 mr-1.5" />
                    <span>Speed: <strong className="text-white font-semibold">{slide.turnaroundTime}</strong></span>
                  </div>
                </div>

                {/* Clear Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    href={slide.primaryCtaLink}
                    className="bg-brand-red hover:bg-brand-redDark text-white font-bold px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm shadow-sm"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={getWhatsAppLink(slide.whatsappMessage, slide.whatsappLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <Link
                    href="/pricing#calculator"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-3.5 rounded-xl border border-white/15 transition-colors text-sm flex items-center justify-center"
                  >
                    <span>Calculator</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Right Column: Large, Authentic Photograph */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="relative w-full h-[460px] xl:h-[520px] rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Information Strip */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-brand-dark/85 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Workshop Production:
                  </span>
                  <span className="text-base font-bold text-white">
                    {slide.categoryName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">
                    {slide.locationContext}
                  </span>
                  <span className="text-xs font-bold text-brand-gold">
                    Turnaround: {slide.turnaroundTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Progress Line & Slide Arrow Controls */}
        <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-white/10">
          <div className="flex-1 flex items-center space-x-3 max-w-md">
            <span className="font-mono text-xs font-bold text-slate-300 shrink-0">
              {String(currentSlide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
            <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-brand-red rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
