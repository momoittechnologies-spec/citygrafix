"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function ServiceVerticals() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const serviceList = [
    {
      id: "flex-hoardings",
      title: "Flex Printing & Hoardings",
      telugu: "స్టార్ ఫ్లెక్స్ & హోర్డింగ్స్",
      category: "Outdoor Advertising",
      description: "Heavy-duty 340+ GSM Star Flex, frontlit, backlit, and large-format promotional banners with weather-proof UV inks.",
      image: "/images/flex-printing-machine.jpg",
      link: "/services/star-flex-banner-printing-kadapa",
      badge: "Express Same-Day",
      quoteMsg: "Hello City Grafix, I want a quotation for Flex Printing & Banners in Kadapa.",
    },
    {
      id: "pole-kiosks",
      title: "Pole Kiosk & Outdoor Displays",
      telugu: "పోల్ కియోస్క్స్ & మీడియన్ బోర్డ్స్",
      category: "Highway & Urban",
      description: "Roadside framed advertising hoardings, double-sided street pole kiosks, and road divider promotional panels.",
      image: "/images/pole-kiosk-median-advertising-night.webp",
      link: "/services/outdoor-advertising-hoardings",
      badge: "Turnkey Framing",
      quoteMsg: "Hello City Grafix, I want a quotation for Street Pole Kiosk & Roadside Hoarding displays in Kadapa.",
    },
    {
      id: "cad-jumbo",
      title: "Jumbo Xerox & CAD Plotting",
      telugu: "A0 జిరాక్స్ & ఇంజనీరింగ్ ప్లాన్స్",
      category: "Engineering & Maps",
      description: "High-speed A0-A4 color & B/W digital plotting, architectural plans, tracing sheets, and village sanction maps.",
      image: "/images/cad-blueprint-plotter.jpg",
      link: "/services/jumbo-xerox-kadapa",
      badge: "15-Min Turnaround",
      quoteMsg: "Hello City Grafix, I need CAD blueprint plotting / Jumbo Xerox copying in Kadapa.",
    },
    {
      id: "led-signage",
      title: "3D Acrylic & LED Signboards",
      telugu: "3D అక్రిలిక్ ఎల్ఈడీ లెటర్స్",
      category: "Architectural Signage",
      description: "Laser-cut 3D acrylic channel letters, halo backlit boards, and Samsung IP67 waterproof LED storefront installations.",
      image: "/images/3d-led-signage-storefront.jpg",
      link: "/services/3d-led-sign-boards-kadapa",
      badge: "3-Yr Guarantee",
      quoteMsg: "Hello City Grafix, I want a quotation for 3D Acrylic LED Signboards for my commercial store.",
    },
    {
      id: "stickers-commercial",
      title: "Stickers & Commercial Printing",
      telugu: "స్టిక్కర్స్ & సన్‌బోర్డ్ డిస్‌ప్లేలు",
      category: "Branding & Retail",
      description: "Waterproof die-cut vinyl stickers, 3mm-5mm sunboards, one-way vision facade film, 350 GSM visiting cards, and bill books.",
      image: "/images/stickers-boards-commercial.jpg",
      link: "/services/vinyl-stickers-sunboard-kadapa",
      badge: "Direct Wholesale",
      quoteMsg: "Hello City Grafix, I want a quotation for Vinyl Stickers / Sunboards / Visiting Cards.",
    },
    {
      id: "personalized-gifts",
      title: "Personalized Gifts & Framing",
      telugu: "కస్టమ్ గిఫ్ట్స్ & ఫోటో ఫ్రేమ్స్",
      category: "Custom Keepsakes",
      description: "Custom wall photo frames (A4 to 24×36 with 10% IG discount), magic heat mugs, satin photo pillows, and DTF apparel.",
      image: "/images/personalized-gifts-collection.jpg",
      link: "/services/personalized-gifts-framing-kadapa",
      badge: "10% IG Off",
      quoteMsg: "Hello City Grafix, I want to order Personalized Gifts / Photo Frames / Magic Mugs.",
    },
    {
      id: "vehicle-branding",
      title: "Vehicle Branding & Auto Publicity",
      telugu: "ఆటో ప్రచారం & వెహికల్ బ్రాండింగ్",
      category: "Transit Advertising",
      description: "Promotional auto hood flex, driver back banners, and route-tracked transit publicity campaigns across Kadapa.",
      image: "/images/auto-publicity-branding.jpg",
      link: "/services/auto-publicity-advertising-kadapa",
      badge: "Fleet Campaigns",
      quoteMsg: "Hello City Grafix, I want a quotation for Auto Publicity & Vehicle Branding in Kadapa.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-[#FAFAF7] border-b border-slate-200/80" id="services">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#101B38]/5 border border-[#101B38]/10 text-xs font-bold text-[#F04446] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In-House Production Verticals • Kadapa Workshop</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#101B38] tracking-tight">
              Commercial Printing &amp; Advertising Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our 7 primary production verticals. Manufactured directly in our Kadapa workshop with zero intermediaries and transparent wholesale rates.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-sm font-bold bg-[#101B38] hover:bg-[#2255D6] text-white px-5 py-2.5 rounded-xl transition-colors shadow-sm group"
            >
              <span>Browse Full 12-Service Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 7-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {serviceList.map((service, index) => {
            const isFeatured = index === 0 || index === 1; // First 2 cards can span 2 cols on certain breakpoints if desired
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#101B38]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white border border-white/10 shadow-xs">
                    {service.category}
                  </div>

                  {/* Operational Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-bold text-[10px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#FFC83D]">
                      ⚡ {service.badge}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {service.telugu}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#101B38] group-hover:text-[#2255D6] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed line-clamp-2 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Actions: View Details + Get Quote */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                    <Link
                      href={service.link}
                      className="bg-slate-100 hover:bg-[#101B38] hover:text-white text-[#101B38] text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center space-x-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <a
                      href={getWhatsAppLink(service.quoteMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F04446] hover:bg-[#d9383a] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center space-x-1 shadow-xs active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
