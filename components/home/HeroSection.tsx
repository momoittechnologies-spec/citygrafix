"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

interface CapabilityTab {
  id: string;
  name: string;
  telugu: string;
  image: string;
  badge: string;
  highlight: string;
  link: string;
}

const CAPABILITY_TABS: CapabilityTab[] = [
  {
    id: "flex",
    name: "Outdoor Hoardings & Star Flex",
    telugu: "హోర్డింగ్స్ & స్టార్ ఫ్లెక్స్",
    image: "/images/roadside-jewellery-hoarding-proddatur.jpg",
    badge: "Roadside, Pole & Highway",
    highlight: "Roadside metal-framed hoardings, double-sided pole kiosks & 340+ GSM Star Flex with UV outdoor ink.",
    link: "/services/outdoor-advertising-hoardings",
  },
  {
    id: "cad",
    name: "Jumbo Xerox & CAD",
    telugu: "A0 జిరాక్స్ & బ్లూప్రింట్స్",
    image: "/images/cad-blueprint-plotter.jpg",
    badge: "1:100 Scale Precision",
    highlight: "A0, A1, A2, A3 plotting & municipal sanction maps. While-you-wait 15-minute dispatch.",
    link: "/services/jumbo-xerox-kadapa",
  },
  {
    id: "signage",
    name: "3D LED Signboards",
    telugu: "3D అక్రిలిక్ ఎల్ఈడీ బోర్డులు",
    image: "/images/3d-led-signage-storefront.jpg",
    badge: "Samsung IP67 LEDs",
    highlight: "Laser-cut cast acrylic channel letters with 48-hour continuous electrical testing.",
    link: "/services/3d-led-sign-boards-kadapa",
  },
  {
    id: "gifts",
    name: "Personalized Gifts",
    telugu: "కస్టమ్ గిఫ్ట్స్ & ఫ్రేమ్స్",
    image: "/images/personalized-gifts-collection.jpg",
    badge: "Flat 10% Off with IG Follow",
    highlight: "Custom wall photo frames, magic heat reveal mugs, plush cushions, and washproof DTF T-shirts.",
    link: "/services/personalized-gifts-framing-kadapa",
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<CapabilityTab>(CAPABILITY_TABS[0]);

  return (
    <section className="relative w-full bg-[#101B38] text-white overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-white/10">
      {/* Background Ambient Lighting (Refined, Non-Distracting) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2255D6]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#F04446]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & High-Converting CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FFC83D] backdrop-blur-sm shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC83D]" />
              <span>Direct In-House Printing Workshop • Since 2014</span>
            </div>

            {/* Confident, Professional Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12]">
                <span>Kadapa&apos;s Complete </span>
                <span className="text-[#FFC83D]">Printing &amp; Signage </span>
                <span>Solutions.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl pt-1">
                From Roadside Hoardings and Jumbo Xerox to 3D LED Signboards and Personalized Gifts — Professional Quality Under One Roof in Kadapa.
              </p>
            </div>

            {/* Quick Capability Switcher Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Explore Core Workshop Verticals:
              </span>
              <div className="flex flex-wrap gap-2">
                {CAPABILITY_TABS.map((tab) => {
                  const isActive = activeTab.id === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                        isActive
                          ? "bg-[#FFC83D] text-[#101B38] shadow-md ring-2 ring-[#FFC83D]/50"
                          : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                      }`}
                    >
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppLink(
                  `Hello City Grafix Kadapa, I want to get a free quotation for ${activeTab.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/30 flex items-center space-x-2 transition-all active:scale-95 group/wa"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get WhatsApp Quote</span>
                <ArrowRight className="w-4 h-4 group-hover/wa:translate-x-0.5 transition-transform" />
              </a>

              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl backdrop-blur-sm transition-all flex items-center space-x-2 active:scale-95"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>

            {/* Verified Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs text-slate-300 max-w-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Broker Markup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15-Min CAD Plotting</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0% EMI Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workshop Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-slate-900 group">
              {/* Active Workshop Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  key={activeTab.id}
                  src={activeTab.image}
                  alt={activeTab.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Subtle Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 left-3.5 bg-[#0B132B]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-bold text-amber-300 shadow-md">
                  {activeTab.badge}
                </div>

                {/* Floating Telugu Tag */}
                <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white border border-white/10">
                  {activeTab.telugu}
                </div>

                {/* Bottom Detail Strip */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white space-y-1.5">
                  <div className="text-base sm:text-lg font-black tracking-tight leading-tight">
                    {activeTab.name}
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {activeTab.highlight}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <Link
                      href={activeTab.link}
                      className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center space-x-1 transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <span className="text-[10px] text-slate-400">Kadapa Workshop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
