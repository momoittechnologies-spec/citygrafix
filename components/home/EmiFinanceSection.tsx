"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Percent,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  BadgePercent,
  Layers,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function EmiFinanceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eligibleServices = [
    { name: "Flex Printing & Star Flex", telugu: "స్టార్ ఫ్లెక్స్ బ్యానర్లు", tag: "340+ GSM" },
    { name: "3D Acrylic & LED Signboards", telugu: "3D లెడ్ గ్లో సైన్ బోర్డులు", tag: "Waterproof LED" },
    { name: "Backlit Flex & Glow Boxes", telugu: "బ్యాక్‌లిట్ ఫ్లెక్స్ బోర్డులు", tag: "Day & Night" },
    { name: "Vinyl Stickers & Frosted Film", telugu: "వినైల్ స్టిక్కర్స్ & గ్లాస్ ఫిల్మ్స్", tag: "High-Res" },
    { name: "One Way Vision Window Graphics", telugu: "వన్ వే విజన్ గ్లాస్ గ్రాఫిక్స్", tag: "Storefront" },
    { name: "Multi-Colour Commercial Offset", telugu: "మల్టీ కలర్ ఆఫ్‌సెట్ ప్రింటింగ్", tag: "Catalogues & Books" },
    { name: "PVC Identity Cards & Lanyards", telugu: "ఐడీ కార్డులు & రిబ్బన్లు", tag: "Offices & Schools" },
    { name: "Custom Signage & Storefront Branding", telugu: "కంప్లీట్ షాప్ బ్రాండింగ్", tag: "Turnkey Setup" },
  ];

  const steps = [
    {
      step: "01",
      title: "Select Your Printing Or Signage",
      desc: "Share your banner size, 3D LED board dimensions, or commercial printing requirements with our order desk.",
    },
    {
      step: "02",
      title: "Quick Bajaj Finance Verification",
      desc: "Instant paperless approval in our Kadapa workshop with down payment starting from just ₹1,000.",
    },
    {
      step: "03",
      title: "Collect / Install & Pay In Easy EMIs",
      desc: "Your work is manufactured and installed immediately while you comfortably pay in monthly installments with zero interest!",
    },
  ];

  const whatsappMessage =
    "Hello City Grafix, I want to know more about Flex Printing & LED Signage on Easy Installments with Bajaj Finance (Down payment from ₹1,000). Please guide me.";

  return (
    <section id="emi-finance" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-brand-navy via-[#0A192F] to-slate-950 text-white overflow-hidden scroll-mt-20">
      {/* Decorative background glow & mesh pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(229,9,20,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,180,216,0.12),transparent_40%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header with Official Bajaj Finance Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
            <span>First Time in India • Exclusive City Grafix Offer</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Flex Printing & LED Signs Now on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              Easy Installments!
            </span>
          </h2>

          <div className="mt-4 flex items-center justify-center flex-wrap gap-2 text-sm sm:text-base text-slate-300">
            <span>Now Officially Available on</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-brand-navy font-black text-xs sm:text-sm rounded-lg shadow-md">
              <span className="w-4 h-4 rounded-full bg-[#0066b2] text-white flex items-center justify-center font-bold text-[10px]">
                B
              </span>
              BAJAJ FINANCE
            </span>
            <span>in Kadapa City</span>
          </div>

          <p className="mt-3 text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Upgrade your business storefront, Star Flex banners, 3D acrylic LED boards, and advertising needs today.
            Get instant credit with zero interest charges and flexible monthly installments.
          </p>
        </div>

        {/* 4 Core Pillars Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {/* Pillar 1: Instant Credit */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-gold/50 rounded-2xl p-4 sm:p-5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-brand-gold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Instant Credit</span>
            <div className="text-lg sm:text-2xl font-black text-white mt-0.5">₹5,000 – ₹50,000</div>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-1">Instant pre-approved credit for commercial & retail signage.</p>
          </div>

          {/* Pillar 2: Low Down Payment */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-gold/50 rounded-2xl p-4 sm:p-5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BadgePercent className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Down Payment</span>
            <div className="text-lg sm:text-2xl font-black text-emerald-400 mt-0.5">Starts from ₹1,000</div>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-1">Start your advertising project with minimal initial capital.</p>
          </div>

          {/* Pillar 3: Zero Interest */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-gold/50 rounded-2xl p-4 sm:p-5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-brand-red flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Percent className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Interest Charges</span>
            <div className="text-lg sm:text-2xl font-black text-white mt-0.5">0% No Interest*</div>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-1">Pure credit facility with zero hidden markup charges.</p>
          </div>

          {/* Pillar 4: Paperless In-Store */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-gold/50 rounded-2xl p-4 sm:p-5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-brand-cyan flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Processing</span>
            <div className="text-lg sm:text-2xl font-black text-white mt-0.5">Instant In-Store</div>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-1">Fast on-the-spot verification at our Kadapa workshop.</p>
          </div>
        </div>

        {/* Main Content Grid: Flyer Showcase on Right, Eligible Services & Steps on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Eligible Services & 3-Step Process (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-brand-gold" />
                    Eligible Printing & Signage Services
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Installment credit can be utilized across all major branding & commercial verticals:
                  </p>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] bg-brand-gold/15 text-brand-gold font-semibold rounded-md border border-brand-gold/30">
                  Kadapa Workshop
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {eligibleServices.map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-white leading-tight">
                        {svc.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-telugu mt-0.5">
                        {svc.telugu}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Step Flow */}
            <div className="bg-gradient-to-br from-brand-navy/90 to-brand-dark/95 border border-white/10 rounded-2xl p-5 sm:p-7">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                How to Avail Easy Installments at City Grafix
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {steps.map((st) => (
                  <div key={st.step} className="relative">
                    <div className="text-2xl font-black text-brand-gold/40 mb-1">{st.step}</div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{st.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink(whatsappMessage, "orders")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-center text-sm transition-all shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/50 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Apply on WhatsApp: 72878 67584</span>
              </a>

              <a
                href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3.5 px-6 rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call Helpline: 728 786 7584</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Promotional Poster Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-red via-brand-gold to-cyan-400 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                {/* Official Flyer Image Container */}
                <div
                  className="relative aspect-[4/5] w-full cursor-pointer bg-slate-950 overflow-hidden"
                  onClick={() => setIsModalOpen(true)}
                  title="Click to view full flyer"
                >
                  <Image
                    src="/images/bajaj-finance-emi-flex-printing.jpg"
                    alt="City Grafix Bajaj Finance Easy Installments Flex Printing & Signage Offer"
                    fill
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />

                  {/* Top-Right Click-to-Zoom Pill */}
                  <div className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow-lg transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-brand-gold" />
                    <span>View Poster</span>
                  </div>

                  {/* Bottom overlay badge */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-brand-gold">City Grafix Kadapa</span>
                      <span className="text-slate-300">Helpline: 728 786 7584</span>
                    </div>
                  </div>
                </div>

                {/* Card Sub-banner */}
                <div className="p-4 bg-slate-950/90 border-t border-white/10 text-center">
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Making Printing More Affordable!</strong> Available at our workshop opposite Tirumala Hospital, Kadapa.
                  </p>
                </div>

                {/* Regulatory Disclaimer */}
                <div className="p-3 bg-black/50 border-t border-white/5 text-[10px] text-slate-400 text-center leading-normal">
                  *Disclaimer: Financing facility, instant credit approval, eligible tenure, and processing fees are provided by and subject to the sole discretion and underwriting policies of Bajaj Finance Ltd. Zero-interest and down payment terms apply to eligible commercial printing &amp; LED signage categories in Kadapa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl max-h-[92vh] w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 bg-slate-950 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-brand-red text-white text-xs font-bold uppercase">
                  Official Flyer
                </span>
                <span className="text-sm font-semibold text-white">City Grafix Bajaj Finance Easy EMI</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 min-h-[480px] sm:min-h-[620px] bg-slate-950">
              <Image
                src="/images/bajaj-finance-emi-flex-printing.jpg"
                alt="City Grafix Bajaj Finance Full Flyer"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-slate-300">
                Direct Helpdesk: <strong className="text-white">728 786 7584</strong>
              </div>
              <a
                href={getWhatsAppLink(whatsappMessage, "orders")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Apply Now on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
