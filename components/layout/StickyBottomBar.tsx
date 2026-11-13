"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Calculator, MapPin, Layers } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function StickyBottomBar() {
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");
  const isPricingActive = pathname.startsWith("/pricing");

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-[max(0.65rem,env(safe-area-inset-bottom))] inset-x-2.5 sm:inset-x-6 z-40 md:hidden max-w-md mx-auto pointer-events-none select-none"
    >
      <div className="pointer-events-auto bg-brand-navy/95 backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.65)] px-2 py-1.5 flex items-center justify-between gap-1">
        {/* 1. Services Catalog */}
        <Link
          href="/services"
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all active:scale-95 ${
            isServicesActive
              ? "text-white font-bold bg-white/10"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
          aria-label="Browse Services"
        >
          <div className="relative">
            <Layers className={`w-4 h-4 mb-0.5 ${isServicesActive ? "text-brand-cyan" : "text-slate-300"}`} />
            {isServicesActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-cyan" />
            )}
          </div>
          <span className="text-[10px] tracking-tight">Services</span>
        </Link>

        {/* 2. Price Estimator */}
        <Link
          href="/pricing#calculator"
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all active:scale-95 ${
            isPricingActive
              ? "text-white font-bold bg-white/10"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
          aria-label="Price Calculator"
        >
          <div className="relative">
            <Calculator className={`w-4 h-4 mb-0.5 ${isPricingActive ? "text-brand-gold" : "text-brand-cyan"}`} />
            {isPricingActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold" />
            )}
          </div>
          <span className="text-[10px] tracking-tight">Calculator</span>
        </Link>

        {/* 3. Center Elevated Hero Action: WhatsApp Order Desk */}
        <a
          href={getWhatsAppLink("Hello City Grafix, I need a quotation for printing in Kadapa. Here are my photos and requirements:")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[130px] flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950/60 active:scale-95 transition-all border border-emerald-400/30 group"
          aria-label="Order on WhatsApp"
        >
          <div className="relative shrink-0">
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[11px] font-black tracking-wide">WhatsApp</span>
            <span className="text-[8px] text-emerald-100 font-medium">Order Desk</span>
          </div>
        </a>

        {/* 4. Direct Call Desk */}
        <a
          href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
          aria-label="Call Order Desk"
        >
          <Phone className="w-4 h-4 text-brand-gold mb-0.5" />
          <span className="text-[10px] tracking-tight font-medium">Call</span>
        </a>

        {/* 5. Directions / Kadapa Shop Location */}
        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
          aria-label="Directions to Kadapa Workshop"
        >
          <MapPin className="w-4 h-4 text-brand-red mb-0.5" />
          <span className="text-[10px] tracking-tight font-medium">Directions</span>
        </a>
      </div>
    </aside>
  );
}
