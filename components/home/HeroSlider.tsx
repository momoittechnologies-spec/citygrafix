"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Pause,
  Play,
  Sparkles,
  Layers,
  Lightbulb,
  FileText,
  Gift,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

interface SlideData {
  id: string;
  category: string;
  headline: string;
  highlightWords?: string[];
  description: string;
  primaryCta: {
    label: string;
    href: string;
    isWhatsApp?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
    isWhatsApp?: boolean;
  };
  desktopImage: string;
  mobileImage: string;
  alt: string;
  badge?: string;
  icon: React.ElementType;
}

const SLIDES: SlideData[] = [
  {
    id: "brand-intro",
    category: "CITY GRAFIX • KADAPA",
    headline: "Big Ideas. Bold Prints. Made in Kadapa.",
    highlightWords: ["Bold Prints.", "Made in Kadapa."],
    description:
      "Your complete destination for professional printing, signage, outdoor advertising and personalized creations with direct workshop pricing.",
    primaryCta: {
      label: "Explore Our Services",
      href: "/services",
    },
    secondaryCta: {
      label: "Get a Free Quote",
      href: getWhatsAppLink("Hello City Grafix, I would like to get a quote for printing in Kadapa."),
      isWhatsApp: true,
    },
    desktopImage: "/images/hero-slider/slide-1-brand-intro.webp",
    mobileImage: "/images/hero-slider/slide-1-brand-intro-mobile.webp",
    alt: "Commercial wide-format roll printing machine actively printing vivid banner output at City Grafix Kadapa",
    badge: "Direct In-House Workshop • Since 2014",
    icon: Sparkles,
  },
  {
    id: "outdoor-advertising",
    category: "OUTDOOR ADVERTISING",
    headline: "Make Your Brand Impossible to Miss.",
    highlightWords: ["Impossible to Miss."],
    description:
      "Roadside hoardings, highway billboards, pole kiosks and outdoor advertising displays fabricated directly in our Kadapa workshop.",
    primaryCta: {
      label: "Explore Outdoor Advertising",
      href: "/services/outdoor-advertising-hoardings",
    },
    secondaryCta: {
      label: "Request Hoarding Quote",
      href: getWhatsAppLink("Hello City Grafix, I need a quotation for roadside hoardings / pole kiosk advertising in Kadapa."),
      isWhatsApp: true,
    },
    desktopImage: "/images/hero-slider/slide-2-outdoor-hoardings.webp",
    mobileImage: "/images/hero-slider/slide-2-outdoor-hoardings-mobile.webp",
    alt: "Roadside framed hoarding and street pole kiosk outdoor advertising displays in Kadapa",
    badge: "Framed Hoardings • Pole Kiosks • Billboards",
    icon: Layers,
  },
  {
    id: "3d-led-signboards",
    category: "PREMIUM SIGNAGE",
    headline: "Make Your Business Shine.",
    highlightWords: ["Shine."],
    description:
      "Premium 3D acrylic letters, illuminated signboards and eye-catching storefront branding with Samsung IP67 waterproof LEDs.",
    primaryCta: {
      label: "Explore LED Signboards",
      href: "/services/3d-led-sign-boards-kadapa",
    },
    secondaryCta: {
      label: "Get Signage Quote",
      href: getWhatsAppLink("Hello City Grafix, I want a quotation for 3D Acrylic LED Signboards for my shop/store."),
      isWhatsApp: true,
    },
    desktopImage: "/images/hero-slider/slide-3-led-signboards.webp",
    mobileImage: "/images/hero-slider/slide-3-led-signboards-mobile.webp",
    alt: "Architectural 3D acrylic laser-cut LED signboards illuminated on commercial storefront",
    badge: "3-Year LED Assurance • Samsung IP67 Modules",
    icon: Lightbulb,
  },
  {
    id: "cad-jumbo-xerox",
    category: "ENGINEERING PRINTING",
    headline: "Precision Printing for Every Plan.",
    highlightWords: ["Every Plan."],
    description:
      "Professional large-format CAD plotting, engineering drawings, architectural plans and A0-A4 Jumbo Xerox while you wait.",
    primaryCta: {
      label: "Explore CAD Printing",
      href: "/services/jumbo-xerox-kadapa",
    },
    secondaryCta: {
      label: "Get Printing Quote",
      href: getWhatsAppLink("Hello City Grafix, I need CAD blueprint plotting / Jumbo Xerox in Kadapa."),
      isWhatsApp: true,
    },
    desktopImage: "/images/hero-slider/slide-4-cad-plotting.webp",
    mobileImage: "/images/hero-slider/slide-4-cad-plotting-mobile.webp",
    alt: "Professional large-format plotter printing architectural engineering blueprint drawings",
    badge: "15-Minute Turnaround • Exact 1:100 Scale Plotting",
    icon: FileText,
  },
  {
    id: "personalized-gifts",
    category: "CUSTOM GIFTS & MERCHANDISE",
    headline: "Personalized Gifts. Lasting Memories.",
    highlightWords: ["Lasting Memories."],
    description:
      "Beautiful photo frames, custom magic mugs, printed T-shirts, cushions and personalized keepsakes crafted with care.",
    primaryCta: {
      label: "Explore Personalized Gifts",
      href: "/services/personalized-gifts-framing-kadapa",
    },
    secondaryCta: {
      label: "Order on WhatsApp",
      href: getWhatsAppLink("Hello City Grafix, I would like to order personalized photo frames / custom mugs / gifts."),
      isWhatsApp: true,
    },
    desktopImage: "/images/hero-slider/slide-5-personalized-gifts.webp",
    mobileImage: "/images/hero-slider/slide-5-personalized-gifts-mobile.webp",
    alt: "Curated collection of custom wall photo frames, ceramic mugs, photo cushions, and DTF printed gifts",
    badge: "Flat 10% Off with Instagram Follow • Same-Day Dispatch",
    icon: Gift,
  },
];

const AUTOPLAY_INTERVAL = 6500; // 6.5 seconds

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Navigation handlers
  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prefersReducedMotion, goToNext]);

  // Pause when browser tab is inactive / hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance threshold 40px
    if (diff > 40) {
      goToNext();
    } else if (diff < -40) {
      goToPrev();
    }
    setTouchStart(null);
  };

  const currentSlide = SLIDES[current];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#101B38] text-white overflow-hidden select-none focus:outline-none"
      aria-roledescription="carousel"
      aria-label="City Grafix Commercial Printing & Signage Showcase"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Viewport Container with Responsive Professional Heights */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] xl:h-[720px]">
        {/* Slides Layer */}
        {SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${SLIDES.length}: ${slide.headline}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Desktop Photographic Background */}
              <div className="hidden sm:block absolute inset-0">
                <Image
                  src={slide.desktopImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  className="object-cover object-right md:object-center transform scale-100 transition-transform duration-7000 ease-out"
                />
              </div>

              {/* Mobile Dedicated Portrait Crop Background */}
              <div className="block sm:hidden absolute inset-0">
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Master Photographic Overlay - Left Navy Vignette for Crystal Clear Text Readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(16,27,56,0.96) 0%, rgba(16,27,56,0.88) 35%, rgba(16,27,56,0.45) 65%, rgba(16,27,56,0.2) 100%)",
                }}
              />
              {/* Additional Top & Bottom Subtle Shading for Integration with Navbar */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B38] via-transparent to-[#101B38]/60 pointer-events-none" />

              {/* Slide Content Box */}
              <div className="site-container h-full relative z-20 flex items-center">
                <div className="max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6 pt-4 sm:pt-0">
                  {/* Category Eyebrow Pill */}
                  <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                    <slide.icon className="w-3.5 h-3.5 text-[#FFC83D]" />
                    <span className="text-xs sm:text-xs font-black tracking-widest uppercase text-[#FFC83D]">
                      {slide.category}
                    </span>
                  </div>

                  {/* Large Cinematic Headline */}
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] drop-shadow-lg text-white">
                    {slide.headline}
                  </h1>

                  {/* Supporting Description */}
                  <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium drop-shadow-md">
                    {slide.description}
                  </p>

                  {/* Operational Badge */}
                  {slide.badge && (
                    <div className="pt-0.5">
                      <span className="inline-block text-[11px] sm:text-xs text-slate-300 font-semibold bg-[#101B38]/70 border border-white/15 px-3 py-1 rounded-lg backdrop-blur-sm">
                        ✓ {slide.badge}
                      </span>
                    </div>
                  )}

                  {/* Call-to-Action Buttons */}
                  <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                    {/* Primary CTA */}
                    {slide.primaryCta.isWhatsApp ? (
                      <a
                        href={slide.primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F04446] hover:bg-[#d9383a] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-[#F04446]/30 transition-all transform active:scale-95 flex items-center space-x-2 group"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>{slide.primaryCta.label}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={slide.primaryCta.href}
                        className="bg-[#F04446] hover:bg-[#d9383a] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-[#F04446]/30 transition-all transform active:scale-95 flex items-center space-x-2 group"
                      >
                        <span>{slide.primaryCta.label}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}

                    {/* Secondary CTA */}
                    {slide.secondaryCta && (
                      slide.secondaryCta.isWhatsApp ? (
                        <a
                          href={slide.secondaryCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center space-x-2 active:scale-95"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          <span>{slide.secondaryCta.label}</span>
                        </a>
                      ) : (
                        <Link
                          href={slide.secondaryCta.href}
                          className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center space-x-2 active:scale-95"
                        >
                          <span>{slide.secondaryCta.label}</span>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Manual Navigation Controls (Desktop & Tablet) */}
        <div className="absolute inset-y-0 left-4 right-4 z-30 hidden sm:flex items-center justify-between pointer-events-none">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous Hero Slide"
            className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#101B38]/70 hover:bg-[#101B38] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl hover:border-[#FFC83D]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next Hero Slide"
            className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#101B38]/70 hover:bg-[#101B38] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl hover:border-[#FFC83D]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Interactive Control Strip (Pagination + Autoplay Indicator) */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 pointer-events-none">
          <div className="site-container flex items-center justify-between">
            {/* Active Slide Indicators with Progress Fill */}
            <div className="flex items-center space-x-2 sm:space-x-3 pointer-events-auto bg-[#101B38]/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 shadow-xl">
              {SLIDES.map((slide, index) => {
                const isActive = index === current;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.category}`}
                    className={`relative transition-all duration-300 rounded-full h-2 overflow-hidden ${
                      isActive ? "w-8 sm:w-12 bg-white/20" : "w-2 sm:w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <span
                        key={current}
                        className={`absolute inset-0 bg-[#FFC83D] ${
                          !isPaused && !prefersReducedMotion ? "animate-progress" : "w-full"
                        }`}
                        style={{
                          animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                        }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Slide Counter (e.g. 01 / 05) */}
              <div className="pl-2 border-l border-white/20 text-xs font-mono font-bold tracking-wider text-slate-300 flex items-center space-x-1">
                <span className="text-[#FFC83D]">0{current + 1}</span>
                <span className="text-slate-500">/</span>
                <span>0{SLIDES.length}</span>
              </div>
            </div>

            {/* Autoplay Pause / Play Toggle (Accessibility) */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Resume automatic slide rotation" : "Pause automatic slide rotation"}
              className="pointer-events-auto hidden md:flex items-center space-x-1.5 text-xs text-slate-300 bg-[#101B38]/80 hover:bg-[#101B38] px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-md transition-colors shadow-lg"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  <span className="text-[11px] font-semibold">Paused</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-amber-400" />
                  <span className="text-[11px] font-semibold">Auto-Playing</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
