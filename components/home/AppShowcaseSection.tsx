"use client";

import React from "react";
import Image from "next/image";
import {
  Smartphone,
  Download,
  Zap,
  WifiOff,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function AppShowcaseSection() {
  const triggerInstall = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("citygrafix-install-app"));
    }
  };

  const appFeatures = [
    {
      icon: Zap,
      title: "1-Tap Instant Ordering",
      desc: "Send your photos, CAD files, and flex sizes straight to the Kadapa dispatch desk.",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      icon: WifiOff,
      title: "Works 100% Offline",
      desc: "Check personalized gift prices, mug rates, and workshop contact even with zero internet.",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
    {
      icon: CreditCard,
      title: "0% EMI on Bajaj Finance",
      desc: "Instant access to signage credit up to ₹50,000 with ₹1,000 down payment.",
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    },
    {
      icon: ShieldCheck,
      title: "Zero Storage & No App Store",
      desc: "No Google Play or Apple ID required. Adds directly in seconds with under 1MB storage.",
      color: "text-brand-red bg-brand-red/10 border-brand-red/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FAC800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Showcase & Feature Points (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-300 backdrop-blur-sm shadow-sm">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Official Progressive Web App (PWA)</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
                <span>City Grafix </span>
                <span className="text-[#FAC800]">In Your Pocket.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Install our official Web App directly to your Android phone, iPhone, or PC.
                Enjoy seamless ordering, instant pricing calculators, and direct workshop contact without app store delays.
              </p>
            </div>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {appFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-1.5"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 ${feat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-white text-xs sm:text-sm">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={triggerInstall}
                className="bg-gradient-to-r from-[#E50914] via-red-600 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-red-950/50 flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Install City Grafix App</span>
              </button>

              <a
                href={getWhatsAppLink("Hello City Grafix, I want to place an order from your website:")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black text-xs sm:text-sm px-5 py-3.5 rounded-2xl shadow-md shadow-orange-950/40 border-t border-amber-200/40 transition-all flex items-center space-x-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Order Desk</span>
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-1 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Installation Space (&lt;1 MB)</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Works on iOS & Android</span>
              </span>
            </div>
          </div>

          {/* Right Column: Smartphone UI Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/20 via-brand-red/30 to-cyan-400/20 rounded-[44px] blur-xl opacity-75" />

              {/* Realistic Phone Bezel */}
              <div className="relative bg-slate-950 rounded-[40px] border-4 border-slate-700/80 shadow-2xl p-3 ring-1 ring-white/20 overflow-hidden">
                {/* Phone Speaker & Dynamic Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700 mr-2" />
                  <div className="w-8 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Phone Screen Mockup Content */}
                <div className="bg-[#0B132B] rounded-[30px] p-4 text-white space-y-4 border border-white/10 shadow-inner">
                  {/* Top Header Mockup */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-white/15 p-1 flex items-center justify-center">
                        <Image
                          src="/icons/icon-192x192.png"
                          alt="City Grafix"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-black tracking-tight leading-none">
                          CITY <span className="text-[#E50914]">GRAFIX</span>
                        </div>
                        <div className="text-[8px] text-[#FAC800] font-bold mt-0.5">
                          KADAPA WORKSHOP
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      ● Active PWA
                    </span>
                  </div>

                  {/* App Quick Hero Card */}
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      ⚡ Quick Order Desk
                    </div>
                    <div className="text-sm font-black leading-tight">
                      Flex, LED Signs, Gifts & CAD Blueprints
                    </div>
                    <div className="text-[10px] text-slate-300 leading-snug">
                      Tap below to order directly with WhatsApp or calculate 0% EMI.
                    </div>
                  </div>

                  {/* 4 Quick Action Tiles Mockup */}
                  <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-bold text-amber-300">Gifts Catalog</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">Mugs & Frames</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-bold text-cyan-300">Easy EMI</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">Bajaj Finance</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-bold text-emerald-300">Jumbo Xerox</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">A0-A4 CAD</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-bold text-brand-red">Call Desk</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">728 786 7584</div>
                    </div>
                  </div>

                  {/* Interactive Install Action Inside Mockup */}
                  <button
                    type="button"
                    onClick={triggerInstall}
                    className="w-full bg-[#E50914] hover:bg-red-600 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Install App on Device</span>
                  </button>

                  <div className="text-[9px] text-center text-slate-400">
                    Works offline • Direct from Kadapa workshop
                  </div>
                </div>

                {/* Phone Bottom Home Bar Indicator */}
                <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
