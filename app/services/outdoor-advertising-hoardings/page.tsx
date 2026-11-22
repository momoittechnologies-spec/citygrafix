import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Maximize2,
  Zap,
  Sparkles,
  ChevronRight,
  Sliders,
  FileCheck,
  Info,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import ArtworkDropzone from "@/components/artwork/ArtworkDropzone";
import OutdoorQuoteCalculator from "@/components/services/OutdoorQuoteCalculator";
import OutdoorGalleryLightbox from "@/components/services/OutdoorGalleryLightbox";

export const metadata: Metadata = {
  title: "Outdoor Advertising, Hoardings & Pole Kiosk Signage in Kadapa | City Grafix",
  description:
    "Professional outdoor advertising in Kadapa: Roadside metal-framed display hoardings, double-sided pole kiosks, road median boards, and highway billboards with direct workshop fabrication.",
  keywords: [
    "Outdoor Advertising Kadapa",
    "Hoarding Printing Kadapa",
    "Roadside Hoardings Kadapa",
    "Pole Kiosk Advertising Kadapa",
    "Road Median Advertising Boards Kadapa",
    "Highway Billboards Kadapa",
    "Advertising Hoarding Manufacturers Kadapa",
    "Flex Hoarding Replacement Kadapa",
  ],
  alternates: {
    canonical: "https://www.citygrafix.in/services/outdoor-advertising-hoardings",
  },
};

export default function OutdoorAdvertisingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.citygrafix.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.citygrafix.in/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Outdoor Advertising & Hoardings",
        "item": "https://www.citygrafix.in/services/outdoor-advertising-hoardings",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outdoor Advertising, Hoardings & Pole Kiosk Signage",
    alternateName: "ఔట్‌డోర్ అడ్వర్టైజింగ్, హోర్డింగ్స్ & పోల్ కియోస్క్ సైనేజ్",
    description:
      "Comprehensive outdoor advertising production in Kadapa: Roadside metal-framed displays, illuminated double-sided pole kiosks, road median divider boards, and heavy industrial highway billboards.",
    provider: {
      "@type": "PrintShop",
      name: "City Grafix Kadapa",
      url: "https://www.citygrafix.in",
      telephone: BUSINESS_DATA.contacts.primaryOrders.number,
      address: {
        "@type": "PostalAddress",
        streetAddress: "#21/135, Opp. Tirumala Hospital, Beside New AF Automart Street",
        addressLocality: "Kadapa",
        addressRegion: "Andhra Pradesh",
        postalCode: "516001",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Kadapa",
    },
  };

  const faqs = [
    {
      question: "What types of outdoor advertising structures does City Grafix fabricate?",
      answer:
        "We fabricate sturdy roadside metal-framed hoarding displays, double-sided pole kiosks for street lighting poles, road divider median panels, and giant steel-truss highway billboards. We also provide precision flex skin replacement for existing client structures.",
    },
    {
      question: "Does City Grafix provide municipal advertising spaces or permissions?",
      answer:
        "City Grafix specializes in the technical manufacturing, high-resolution printing, frame fabrication, and physical mounting of outdoor displays. Municipal site allotments, space ownership, and advertising license permissions are handled directly by the client or authorized municipal concessionaires.",
    },
    {
      question: "Can existing hoarding or pole kiosk flex be replaced?",
      answer:
        "Yes! If you already possess pole kiosks, median frames, or hoarding structures, we print high-tension replacement flex with reinforced borders and brass eyelets, followed by prompt on-site refitting by our technicians.",
    },
    {
      question: "What printing materials are recommended for outdoor hoardings?",
      answer:
        "For maximum durability under intense Rayalaseema heat and wind, we recommend 340+ GSM Star Flex with Japanese UV outdoor inks. For illuminated night displays, we utilize heavy-duty translucent Backlit Flex or UV-laminated vinyl on acrylic/sunboard backing.",
    },
    {
      question: "How quickly can a hoarding display be manufactured?",
      answer:
        "Print-only replacement flex is typically dispatched within 2 to 4 hours. Complete welded metal frameworks with fabrication, painting, and mounting take between 24 to 48 hours.",
    },
  ];

  const galleryItems = [
    {
      id: "roadside-jewellery",
      title: "Busetty Silver Jewellery Roadside Framed Display",
      telugu: "ప్రొద్దుటూరు మెటల్ ఫ్రేమ్డ్ రోడ్డు అడ్వర్టైజింగ్ డిస్‌ప్లే",
      image: "/images/roadside-jewellery-hoarding-proddatur.jpg",
      category: "Roadside Hoarding",
      caption:
        "Heavy-duty metal-framed outdoor advertising board engineered for road median visibility. High-definition 1440 DPI print featuring intricate gold and silver jewellery detailing with fade-resistant outdoor UV inks.",
      location: "Proddatur / Kadapa Corridor",
    },
    {
      id: "pole-kiosk-night",
      title: "Urban Boulevard Double-Sided Pole Kiosks & Road Median Boards",
      telugu: "నైట్ ఇల్యూమినేటెడ్ పోల్ కియోస్క్స్ & రోడ్ డివైడర్ బోర్డులు",
      image: "/images/pole-kiosk-median-advertising-night.jpg",
      category: "Pole Kiosk & Median",
      caption:
        "Double-sided illuminated commercial display panels mounted on street poles and road medians. Engineered with anti-glare diffuser sheets and weatherproof electrical enclosures for night vehicular traffic visibility.",
      location: "Commercial Transit Boulevard, Kadapa",
    },
    {
      id: "highway-megasite",
      title: "National Highway Megasite Steel Billboard Span",
      telugu: "హైవే మెగాస్పాన్ స్టీల్ ట్రస్ బిల్ బోర్డ్",
      image: "/images/highway-hoarding-billboard.jpg",
      category: "Highway Billboard",
      caption:
        "Multi-span highway hoarding constructed with heavy MS steel trussing, high-wind tear-resistant 340+ GSM Star Flex, and reinforced perimeter brass eyelet lacing.",
      location: "Kadapa Highway Transit Corridor",
    },
    {
      id: "flex-workshop",
      title: "Industrial 1440 DPI Large-Format Flex Printing Workshop",
      telugu: "డైరెక్ట్ వర్క్‌షాప్ హై-స్పీడ్ ఫ్లెక్స్ ప్రింటింగ్",
      image: "/images/flex-printing-machine.jpg",
      category: "In-House Printing",
      caption:
        "City Grafix in-house wide-format production hub delivering rapid same-day turnaround with zero broker markups.",
      location: "City Grafix Workshop, Kadapa",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAF7] pb-24 text-[#101B38]">
        {/* Breadcrumb Header */}
        <div className="bg-[#101B38] text-slate-300 py-3 border-b border-white/10">
          <div className="site-container">
            <nav className="flex items-center space-x-2 text-xs" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[#FFC83D] font-medium truncate">
                Outdoor Advertising &amp; Hoardings
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Banner Section */}
        <section className="relative bg-gradient-to-br from-[#101B38] via-[#182852] to-[#0B1326] text-white py-14 sm:py-18 lg:py-20 border-b border-white/10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2255D6]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F04446]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FFC83D] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC83D]" />
                <span>Direct Workshop Production • Kadapa &amp; Rayalaseema</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-black tracking-tight leading-[1.15] text-white">
                Outdoor Advertising, Hoardings &amp; Pole Kiosk Signage in Kadapa
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                From roadside advertising boards and pole kiosks to large-format hoarding prints, City Grafix delivers professional outdoor advertising solutions. Direct in-house welding, precision 1440 DPI Star Flex printing, and safe on-site mounting.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href={getWhatsAppLink(
                    "Hello City Grafix, I want to get a quotation for Outdoor Advertising & Hoardings in Kadapa.",
                    "orders"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F04446] hover:bg-[#D63335] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-950/40 transition-all flex items-center space-x-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Get WhatsApp Quote</span>
                </a>

                <a
                  href="#quote-calculator"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2"
                >
                  <Sliders className="w-4 h-4 text-[#FFC83D]" />
                  <span>Calculate Custom Estimate</span>
                </a>

                <a
                  href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-all flex items-center space-x-2"
                  title="Call Order Desk"
                >
                  <Phone className="w-4 h-4 text-[#FFC83D]" />
                  <span>728 786 7584</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars Overview Strip */}
        <section className="bg-white border-b border-slate-200 py-6">
          <div className="site-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#53627B] block">Roadside Hoardings</span>
                <span className="text-base sm:text-lg font-black text-[#101B38]">Welded MS Frames</span>
              </div>
              <div className="p-3 border-l border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#53627B] block">Pole Kiosks</span>
                <span className="text-base sm:text-lg font-black text-[#101B38]">Double-Sided Clamps</span>
              </div>
              <div className="p-3 border-l border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#53627B] block">Median Panels</span>
                <span className="text-base sm:text-lg font-black text-[#101B38]">Road Divider Displays</span>
              </div>
              <div className="p-3 border-l border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#53627B] block">Highway Billboards</span>
                <span className="text-base sm:text-lg font-black text-[#101B38]">340+ GSM Star Flex</span>
              </div>
            </div>
          </div>
        </section>

        <div className="site-container pt-12 space-y-16">
          {/* 4 Primary Subsections */}
          <section className="space-y-10">
            <div className="border-b-2 border-[#101B38] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F04446] bg-red-50 px-2.5 py-1 rounded inline-block">
                సమగ్ర ఔట్‌డోర్ ప్రచార పరిష్కారాలు
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#101B38] mt-2">
                Four Specialized Outdoor Advertising Verticals
              </h2>
              <p className="text-[#53627B] text-sm mt-1 max-w-3xl">
                Every outdoor campaign requires tailored structural strength, optimal viewing distance, and weather resistance. Explore our 4 dedicated manufacturing verticals:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1. Roadside Advertising Hoardings */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#2255D6] bg-blue-50 px-2 py-0.5 rounded">
                      Vertical 01
                    </span>
                    <h3 className="text-xl font-bold text-[#101B38] mt-1.5">
                      Roadside Advertising Hoardings
                    </h3>
                    <div className="text-xs text-[#F04446] font-semibold mt-0.5">
                      రోడ్డు పక్కన అడ్వర్టైజింగ్ హోర్డింగ్స్
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2255D6] flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#53627B] leading-relaxed">
                  Heavy metal-framed advertisement boards engineered for prime commercial street frontage, retail showroom openings, and high-footfall intersections.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Heavy anti-rust MS tubular iron frames (welded in our Kadapa workshop)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>1440 DPI high-gloss 340+ GSM Star Flex with multi-month UV sunlight protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Existing hoarding flex skin replacement and fast re-tensioning service</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Standard sizes: 6×4 ft, 8×5 ft, 10×6 ft, 12×8 ft, and custom dimensions</span>
                  </div>
                </div>
              </div>

              {/* 2. Pole Kiosk Advertising */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#2255D6] bg-blue-50 px-2 py-0.5 rounded">
                      Vertical 02
                    </span>
                    <h3 className="text-xl font-bold text-[#101B38] mt-1.5">
                      Pole Kiosk Advertising
                    </h3>
                    <div className="text-xs text-[#F04446] font-semibold mt-0.5">
                      పోల్ కియోస్క్ అడ్వర్టైజింగ్
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#53627B] leading-relaxed">
                  Double-sided advertising panels mounted along street lighting poles in continuous series. Delivers unmatched frequency and repetition for transit drivers and pedestrians.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Double-sided display panels for dual-direction vehicular exposure</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Heavy-duty mounting clamps with high-tensile bolts fitting all municipal pole diameters</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Frontlit and internal backlit illuminated options for night impact</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Popular series sizes: 3×2 ft, 4×2.5 ft, 5×3 ft</span>
                  </div>
                </div>
              </div>

              {/* 3. Road Median Advertising Boards */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#2255D6] bg-blue-50 px-2 py-0.5 rounded">
                      Vertical 03
                    </span>
                    <h3 className="text-xl font-bold text-[#101B38] mt-1.5">
                      Road Median Advertising Boards
                    </h3>
                    <div className="text-xs text-[#F04446] font-semibold mt-0.5">
                      రోడ్ మీడియన్ అడ్వర్టైజింగ్ బోర్డులు
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#53627B] leading-relaxed">
                  Low-altitude advertising boards mounted securely on road dividers, boulevard railings, and rotary medians right at eye-level for bumper-to-bumper traffic.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Eye-level viewing height capturing two-wheeler and four-wheeler attention</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Protective corner beading preventing weather peeling and water seepage</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Quick-change flex display installations for promotional campaigns and festivals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Standard median dimensions: 4×3 ft, 6×3 ft, 8×3 ft</span>
                  </div>
                </div>
              </div>

              {/* 4. Highway Billboards & Megasites */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#2255D6] bg-blue-50 px-2 py-0.5 rounded">
                      Vertical 04
                    </span>
                    <h3 className="text-xl font-bold text-[#101B38] mt-1.5">
                      Highway Billboards &amp; Spans
                    </h3>
                    <div className="text-xs text-[#F04446] font-semibold mt-0.5">
                      హైవే బిల్బోర్డ్స్ &amp; హోర్డింగ్స్
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#F04446] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#53627B] leading-relaxed">
                  Giant roadside steel truss billboard structures designed for high-speed highway traffic across the Kadapa-Tirupati, Kadapa-Kurnool, and bypass transit corridors.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>High wind-load engineered flex with double-stitched perimeter hems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Reinforced heavy brass eyelets (రింగులు) spaced every 12 inches for tight lacing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Seamless heat-welded joints invisible from highway distances</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span>Mega spans: 20×10 ft, 30×15 ft, 40×20 ft, 60×30 ft</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Authentic Portfolio Photo Gallery with Lightbox */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2255D6] bg-blue-50 px-2.5 py-1 rounded inline-block">
                  నిజమైన ప్రాజెక్ట్ ఫొటోలు • Verified Workshop Gallery
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#101B38] mt-1.5">
                  Authentic Outdoor Advertising Projects
                </h2>
                <p className="text-[#53627B] text-xs sm:text-sm mt-1">
                  Actual photographs of roadside framed displays, median panels, and large-format printing produced for Rayalaseema businesses.
                </p>
              </div>
              <div className="text-xs text-[#53627B] font-medium flex items-center">
                <span>Click any image to view in full resolution</span>
              </div>
            </div>

            <OutdoorGalleryLightbox items={galleryItems} />
          </section>

          {/* Compliance & Transparency Disclaimer */}
          <section className="bg-blue-50/70 rounded-2xl p-5 sm:p-6 border border-blue-200/80 flex items-start space-x-3.5 text-xs text-slate-700 leading-relaxed">
            <Info className="w-5 h-5 text-[#2255D6] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#101B38] font-bold block text-sm">
                Operational Scope &amp; Regulatory Transparency:
              </strong>
              <p>
                City Grafix is a registered commercial printing press and metal signage fabricator. We specialize in high-resolution wide-format printing, MS tubular steel frame manufacturing, pole kiosk bracket welding, and physical display mounting.
              </p>
              <p className="text-[#53627B]">
                * Municipal site allotments, roadside billboard space ownership, and municipal display permissions are arranged directly by the advertising client, private land owners, or licensed municipal concessionaires. City Grafix does not broker unauthorized public advertising spaces.
              </p>
            </div>
          </section>

          {/* Interactive Outdoor Quotation Calculator (Task 7) */}
          <section id="quote-calculator" className="scroll-mt-24">
            <OutdoorQuoteCalculator />
          </section>

          {/* Direct Artwork Dropzone Integration */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F04446] flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                <span>Ready-to-Print Files</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#101B38] mt-1">
                Have Hoarding or Kiosk Artwork Ready?
              </h3>
              <p className="text-xs sm:text-sm text-[#53627B] mt-0.5">
                Upload your CorelDRAW (.cdr), Photoshop (.psd), PDF, or TIFF file below for instant resolution/DPI pre-flight verification before printing.
              </p>
            </div>

            <ArtworkDropzone defaultService="Outdoor Advertising & Hoardings" />
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2255D6] bg-blue-50 px-2.5 py-1 rounded inline-block">
                సందేహాలు &amp; సమాధానాలు
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#101B38] mt-1.5 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#2255D6]" />
                <span>Frequently Asked Questions</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAFAF7] border border-slate-200/80 space-y-1.5">
                  <h4 className="text-sm font-bold text-[#101B38]">{faq.question}</h4>
                  <p className="text-xs text-[#53627B] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Call to Action Strip */}
          <section className="bg-gradient-to-r from-[#101B38] via-[#182852] to-[#0B1326] rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC83D] bg-white/10 px-3 py-1 rounded-full">
              Ready to Launch Your Campaign?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              Get a Hoarding &amp; Outdoor Advertising Quote Today
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
              Connect directly with our outdoor advertising team. Share your road location, required board size, and campaign timeline for an immediate workshop quotation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppLink(
                  "Hello City Grafix, I want to discuss Outdoor Advertising & Hoardings in Kadapa. Please advise pricing and availability.",
                  "orders"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F04446] hover:bg-[#D63335] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp: 72878 67584</span>
              </a>

              <a
                href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#FFC83D]" />
                <span>Call Order Desk</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
