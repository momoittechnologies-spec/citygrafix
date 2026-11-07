"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Tag,
  CheckCircle2,
  Maximize2,
  Volume2,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/business";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlide {
  id: number;
  categoryName: string;
  badge: string;
  badgeTelugu: string;
  headline: string;
  highlightWord: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  whatsappMessage: string;
  whatsappLine: "orders" | "signage";
  image: string;
  specs: string[];
  startingPrice: string;
  turnaroundTime: string;
  floatingBadge: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    categoryName: "Complete Solutions",
    badge: "Est. 2014 • Over 10+ Years in Kadapa",
    badgeTelugu: "కడపలో సంపూర్ణ ప్రింటింగ్ సొల్యూషన్స్",
    headline: "Everything You Print.",
    highlightWord: "We Make It Better.",
    description: "Your trusted commercial printing destination for wide-format flex banners, architectural 3D signage, precision CAD blueprints, and corporate gifting.",
    primaryCtaText: "Explore All 11 Services",
    primaryCtaLink: "/services",
    whatsappMessage: "Hello City Grafix, I want to explore your complete printing solutions in Kadapa.",
    whatsappLine: "orders",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=85",
    specs: ["Direct Workshop Machine Rates", "1440 DPI Japanese Eco-Solvent Inks", "Open 7 Days a Week"],
    startingPrice: "Wholesale Rates",
    turnaroundTime: "Same-Day Express",
    floatingBadge: "10+ Years Trusted in Kadapa",
  },
  {
    id: 2,
    categoryName: "Star Flex Printing",
    badge: "High-Gloss 340+ GSM Substrate",
    badgeTelugu: "స్టార్ ఫ్లెక్స్ & ఔట్‌డోర్ ప్రచారం",
    headline: "Make Your Brand",
    highlightWord: "Impossible to Miss.",
    description: "Heavy-duty outdoor flex banners, grand entrance arches, roadside hoardings, and stage backdrops engineered with UV inks to endure scorching Kadapa heat.",
    primaryCtaText: "Explore Flex Printing",
    primaryCtaLink: "/services/flex-banner-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I need Star Flex Banner printing in Kadapa. Please share quotation.",
    whatsappLine: "orders",
    image: "/images/flex-printing-machine.jpg",
    specs: ["1440 DPI Photographic Clarity", "Tear-Resistant 340+ GSM", "Brass Rings & Wooden Beeding"],
    startingPrice: "From ₹18 / sq. ft.",
    turnaroundTime: "2 to 4 Hours Fast Dispatch",
    floatingBadge: "Direct Workshop • ₹18/sq.ft",
  },
  {
    id: 3,
    categoryName: "Jumbo Xerox & CAD",
    badge: "Instant While-You-Wait Delivery",
    badgeTelugu: "జంబో జిరాక్స్ & ఇంజనీరింగ్ ప్లాన్స్",
    headline: "Precision Plotting.",
    highlightWord: "Every Single Detail.",
    description: "High-speed wide-format A0, A1, A2, A3, and A4 color and monochrome plotting. AutoCAD layouts, municipal approvals, and 600 DPI large-format scanning.",
    primaryCtaText: "Explore Jumbo Xerox",
    primaryCtaLink: "/services/jumbo-xerox-kadapa",
    whatsappMessage: "Hello City Grafix, I need Jumbo Xerox / AutoCAD Blueprint printing in Kadapa.",
    whatsappLine: "orders",
    image: "/images/cad-blueprint-plotter.jpg",
    specs: ["1200 DPI Vector Line Precision", "Standard A0, A1, A2, A3, A4 Sizes", "90 GSM Imported High-Opacity Bond"],
    startingPrice: "From ₹25 / sheet",
    turnaroundTime: "15 to 30 Minutes Instant",
    floatingBadge: "A0 to A4 • 1200 DPI Scale",
  },
  {
    id: 4,
    categoryName: "3D LED Signage",
    badge: "Direct Fabrication • 3-Yr Warranty",
    badgeTelugu: "3D అక్రిలిక్ ఎల్ఈడీ లెటర్స్ & గ్లో బోర్డ్స్",
    headline: "Give Your Business a",
    highlightWord: "Powerful Identity.",
    description: "Elite CNC laser-cut 3D cast acrylic letters, solid aluminum returns, halo backlit glow, and Samsung IP67 waterproof LED modules with 48-hour burn-in testing.",
    primaryCtaText: "Explore 3D Signage",
    primaryCtaLink: "/services/3d-led-sign-boards-kadapa",
    whatsappMessage: "Hello City Grafix, I want an inquiry for 3D Acrylic LED Glow Signboard in Kadapa.",
    whatsappLine: "signage",
    image: "/images/3d-led-signage-storefront.jpg",
    specs: ["Front-Lit & Halo Back-Lit Styles", "IP67 Waterproof Samsung LEDs", "48-Hour Electrical Testing"],
    startingPrice: "₹45 / inch letter height",
    turnaroundTime: "2 to 4 Days Turnkey",
    floatingBadge: "Samsung IP67 LEDs • 3-Yr Warranty",
  },
  {
    id: 5,
    categoryName: "Personalised Gifts",
    badge: "1 to 2 Hours Same-Day Dispatch",
    badgeTelugu: "కస్టమ్ గిఫ్ట్స్ & సబ్లిమేషన్ స్టూడియో",
    headline: "Make Every Moment",
    highlightWord: "Uniquely Personal.",
    description: "Custom photo mugs, magic reveal mugs, DTF washproof T-shirts, synthetic wooden frames, LED ambient glow art, and soft microfiber photo cushions.",
    primaryCtaText: "Explore Personalised Gifts",
    primaryCtaLink: "/services#personalized-gifts",
    whatsappMessage: "Hello City Grafix, I want to order Personalized Gifts (Mugs, T-shirt, Photo Frame). Please share designs.",
    whatsappLine: "orders",
    image: "/images/personalized-gifts-collection.jpg",
    specs: ["AAA Sparkling White Ceramic Mugs", "Magic Heat Reveal Photo Mug (₹550)", "Synthetic Wood Wall & Table Frames"],
    startingPrice: "From ₹250",
    turnaroundTime: "1 to 2 Hours Delivery",
    floatingBadge: "Ready in 1 to 2 Hours",
  },
  {
    id: 6,
    categoryName: "Visiting Cards & Offset",
    badge: "Commercial Offset Printing",
    badgeTelugu: "విజిటింగ్ కార్డ్స్, బిల్ బుక్స్ & పాంప్లెట్లు",
    headline: "Commercial Stationery.",
    highlightWord: "Elite First Impression.",
    description: "350 GSM Velvet Soft-Touch Visiting Cards with raised Spot UV gloss, duplicate/triplicate carbonless NCR bill books with numbering, and full-color flyers.",
    primaryCtaText: "Explore Offset Printing",
    primaryCtaLink: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    whatsappMessage: "Hello City Grafix, I need Visiting Cards / Bill Books / Pamphlets printing in Kadapa.",
    whatsappLine: "orders",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1800&q=85",
    specs: ["350 GSM Velvet + Spot UV Cards", "Carbonless NCR Duplicate Tax Books", "A5 & A4 Full-Color Flyers"],
    startingPrice: "₹750 / 1000 cards",
    turnaroundTime: "24 to 48 Hours",
    floatingBadge: "1000 Cards from ₹750",
  },
  {
    id: 7,
    categoryName: "Municipal Layout Maps",
    badge: "DTCP & KUDA Sanction Standards",
    badgeTelugu: "మున్సిపల్ లేఅవుట్స్ & విలేజ్ మ్యాప్స్",
    headline: "Town Planning Maps &",
    highlightWord: "Venture Layouts.",
    description: "Large-size real estate venture layouts, revenue village maps (FMB sketches), and municipal building sanctions with clear boundary zoning and survey numbers.",
    primaryCtaText: "Explore Layout Maps",
    primaryCtaLink: "/services/layout-map-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I want to print a Municipal Layout / Real Estate Map in Kadapa.",
    whatsappLine: "orders",
    image: "/images/municipal-layout-village-map.jpg",
    specs: ["High-Definition 44-Inch Rolls", "Vibrant Plot Boundary Colors", "Accepted by DTCP & KUDA"],
    startingPrice: "From ₹90 / sheet",
    turnaroundTime: "Same-Day Express",
    floatingBadge: "44-Inch Continuous Rolls",
  },
  {
    id: 8,
    categoryName: "CAD Drawings",
    badge: "Millimeter-Accurate Scaling",
    badgeTelugu: "ఆర్కిటెక్చరల్ & ఇంజనీరింగ్ డ్రాయింగ్స్",
    headline: "Architectural Plans &",
    highlightWord: "Structural Blueprints.",
    description: "AutoCAD structural drawings, foundation grids, column schedules, electrical schematics, and plumbing layouts with zero line distortion and accordion folding.",
    primaryCtaText: "Explore CAD Drawings",
    primaryCtaLink: "/services/cad-engineering-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I have AutoCAD / Engineering Drawings to plot in Kadapa.",
    whatsappLine: "orders",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
    specs: ["Strict 1:100 & 1:50 Architectural Scales", "Smudge-Proof Moisture-Resistant Toner", "Automatic A4 Filing Folding"],
    startingPrice: "From ₹40 / sheet",
    turnaroundTime: "15 to 30 Minutes",
    floatingBadge: "True 1:100 Scale Adherence",
  },
  {
    id: 9,
    categoryName: "Auto Publicity",
    badge: "Complete Mobile Rickshaw Campaigns",
    badgeTelugu: "ఆటో పబ్లిసిటీ & మొబైల్ ప్రచారం",
    headline: "Take Your Brand to",
    highlightWord: "Every Street in Kadapa.",
    description: "Complete 3-sided auto rickshaw flex branding, high-power DTS sound system with mic announcements, pamphlet distribution, and live WhatsApp route map tracking.",
    primaryCtaText: "Explore Auto Publicity",
    primaryCtaLink: "/services/vehicle-advertising-kadapa",
    whatsappMessage: "Hello City Grafix, I want to book an Auto Publicity campaign in Kadapa with DTS sound.",
    whatsappLine: "orders",
    image: "/images/auto-publicity-branding.jpg",
    specs: ["3-Sided Flex Panels (W6xH5 & W4xH5)", "Crystal-Clear DTS Loudspeaker", "Live 10-Min WhatsApp Photo Proof"],
    startingPrice: "From ₹450 / auto",
    turnaroundTime: "Same-Day / 24 Hours",
    floatingBadge: "DTS Sound + 10-Min GPS Updates",
  },
  {
    id: 10,
    categoryName: "Highway Hoardings",
    badge: "Industrial Heavy Wind Resistant",
    badgeTelugu: "హోర్డింగ్ ఫలెక్స్ & హైవే బిల్ బోర్డ్స్",
    headline: "Command the Skyline with",
    highlightWord: "Highway Billboards.",
    description: "Massive roadside hoardings and national highway advertising billboards across Kadapa transit corridors with reinforced perimeter borders and brass eyelets.",
    primaryCtaText: "Explore Hoardings",
    primaryCtaLink: "/services/hoarding-printing-kadapa",
    whatsappMessage: "Hello City Grafix, I need Hoarding Flex / Highway Billboard printing in Kadapa.",
    whatsappLine: "orders",
    image: "/images/highway-hoarding-billboard.jpg",
    specs: ["Heavy Wind-Resistant Industrial GSM", "Multi-Month Fade-Resistant Outdoor UV Inks", "Double-Stitched Brass Eyelets (రింగులు)"],
    startingPrice: "From ₹20 / sq. ft.",
    turnaroundTime: "2 to 4 Hours Fast Dispatch",
    floatingBadge: "Highway Spans up to 60ft",
  },
];

const ROTATION_DURATION_MS = 6000;

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

  // Page Visibility API (pause when user switches tabs)
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

  // Smooth Progress Fill and Auto-Rotation
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

  // Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
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
      className="relative w-full bg-brand-dark overflow-hidden py-8 sm:py-12 xl:py-16 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        progressStartTimeRef.current = Date.now() - (progress / 100) * ROTATION_DURATION_MS;
        setIsPaused(false);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Hidden Preloader for the very next slide image to guarantee 0ms latency on transitions */}
      <link rel="preload" as="image" href={nextSlideData.image} />

      {/* Cinematic Ambient Mesh & Lighting */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-brand-royal/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:36px_36px] pointer-events-none" />

      <div className="site-container-hero relative z-10">
        {/* Top Ticker: 10 Clickable Category Showcase Pills */}
        <div className="hidden lg:flex items-center space-x-2 overflow-x-auto pb-5 scrollbar-none border-b border-white/10 mb-8">
          <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mr-3 shrink-0 flex items-center">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
            Showcase:
          </span>
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                data-cursor="SELECT"
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center space-x-1.5 ${
                  currentSlide === idx
                    ? "bg-gradient-to-r from-brand-royal via-cyan-500 to-sky-400 text-white shadow-lg shadow-cyan-500/30 scale-105 border border-cyan-300/40"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span className={`font-mono text-[11px] ${currentSlide === idx ? "text-amber-200" : "text-slate-400"}`}>
                  {String(s.id).padStart(2, "0")}
                </span>
                <span>{s.categoryName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Split Showcase Layout (42% Content / 58% Visuals) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 2xl:gap-16 items-center min-h-[560px] lg:min-h-[620px] xl:min-h-[660px]">
          {/* LEFT COLUMN: Editorial Presentation & CTAs (42% width) */}
          <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Category Pill with Counter & Trust Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center space-x-2 bg-brand-navy/90 border border-cyan-400/40 rounded-full px-3.5 py-1 shadow-md shadow-cyan-950/40">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-bold text-cyan-300 font-mono tracking-wider">
                      {String(slide.id).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-xs font-bold text-brand-gold">{slide.badge}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 hidden xl:inline">
                    {slide.badgeTelugu}
                  </span>
                </div>

                {/* Big Display Headline */}
                <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  <span>{slide.headline} </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-amber-300 text-glow">
                    {slide.highlightWord}
                  </span>
                </h1>

                {/* Clear Narrative Description */}
                <p className="text-slate-300 text-sm sm:text-base xl:text-lg leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Machine / Quality Spec Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {slide.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-xs text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate font-medium">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Live Commercial Pricing & Turnaround Speed */}
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs xl:text-sm">
                  <div className="flex items-center bg-brand-gold/10 border border-brand-gold/30 px-3.5 py-1.5 rounded-xl">
                    <Tag className="w-4 h-4 text-brand-gold mr-1.5" />
                    <span className="text-slate-300">
                      Rate: <strong className="text-brand-gold font-bold">{slide.startingPrice}</strong>
                    </span>
                  </div>

                  <div className="flex items-center bg-cyan-500/10 border border-cyan-400/30 px-3.5 py-1.5 rounded-xl">
                    <Clock className="w-4 h-4 text-cyan-400 mr-1.5" />
                    <span className="text-slate-300">
                      Speed: <strong className="text-white font-bold">{slide.turnaroundTime}</strong>
                    </span>
                  </div>
                </div>

                {/* Dual Primary Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href={slide.primaryCtaLink}
                    data-cursor="EXPLORE"
                    className="bg-gradient-to-r from-brand-red via-brand-redDark to-brand-red hover:from-brand-redLight hover:to-brand-red text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-red/40 hover:shadow-brand-red/60 transition-all flex items-center space-x-2 text-xs sm:text-sm group"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <a
                    href={getWhatsAppLink(slide.whatsappMessage, slide.whatsappLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="CHAT"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 text-xs sm:text-sm group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <Link
                    href="/pricing#calculator"
                    data-cursor="CALC"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-3.5 rounded-xl border border-white/20 transition-colors text-xs sm:text-sm hidden sm:inline-flex items-center space-x-1.5"
                  >
                    <span>Calculator</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Dominant Cinematic Visual Presentation (58% width) */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7 relative">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] xl:h-[600px] 2xl:h-[660px] rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-950/70 bg-slate-900 group">
              {/* Cinematic Edge Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/40 pointer-events-none z-20 shadow-[inset_0_0_30px_rgba(0,240,255,0.15)]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Dominant Crystal-Clear Photography */}
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />

                  {/* Gentle Bottom Gradient for Card Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Top-Right Floating Assurance Tag */}
              <div className="absolute top-5 right-5 z-20 bg-brand-navy/90 backdrop-blur-md border border-cyan-400/50 text-cyan-300 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-xl flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{slide.floatingBadge}</span>
              </div>

              {/* Bottom Integrated Service Information Strip */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between bg-brand-navy/85 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-300 tracking-wider block">
                    Direct Workshop Production
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">
                    {slide.categoryName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">
                    Turnaround Speed
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-brand-gold">
                    {slide.turnaroundTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Controls Strip: Animated Progress Bar & Slide Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5">
              {/* Animated Progress Bar */}
              <div className="w-full sm:w-2/3 flex items-center space-x-3">
                <span className="font-mono text-xs font-bold text-cyan-300 shrink-0">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-brand-royal via-cyan-400 to-brand-gold rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 hidden md:inline">
                  {slide.categoryName}
                </span>
              </div>

              {/* Prev / Next Arrow Navigation */}
              <div className="flex items-center space-x-2.5 shrink-0 self-end sm:self-auto">
                <button
                  onClick={prevSlide}
                  data-cursor="PREV"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-brand-dark text-white border border-white/20 transition-all flex items-center justify-center active:scale-95 shadow-md"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  data-cursor="NEXT"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-brand-dark text-white border border-white/20 transition-all flex items-center justify-center active:scale-95 shadow-md"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
