"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Tag, MapPin, Layers } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function StickyBottomBar() {
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");
  const isPricingActive = pathname.startsWith("/pricing");

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-[max(0.65rem,env(safe-area-inset-bottom))] inset-x-2 sm:inset-x-6 z-40 md:hidden max-w-md mx-auto pointer-events-none select-none"
    >
      <nav
        aria-label="Mobile Quick Navigation"
        className="pointer-events-auto bg-[#091122]/92 backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] px-1.5 py-1.5 flex items-center justify-between gap-1"
      >
        {/* 1. Services Catalog */}
        <Link
          href="/services"
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all active:scale-90 ${
            isServicesActive
              ? "text-white font-bold bg-white/12 shadow-sm shadow-blue-900/30"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
          aria-label="Browse Services"
        >
          <div className="relative">
            <Layers className={`w-4 h-4 mb-0.5 ${isServicesActive ? "text-cyan-400" : "text-slate-300"}`} />
            {isServicesActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            )}
          </div>
          <span className="text-[10px] tracking-tight font-medium">Services</span>
        </Link>

        {/* 2. Official Pricing Card */}
        <Link
          href="/pricing"
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all active:scale-90 ${
            isPricingActive
              ? "text-white font-bold bg-white/12 shadow-sm shadow-amber-900/30"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
          aria-label="View Pricing"
        >
          <div className="relative">
            <Tag className={`w-4 h-4 mb-0.5 ${isPricingActive ? "text-amber-400" : "text-slate-300"}`} />
            {isPricingActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
            )}
          </div>
          <span className="text-[10px] tracking-tight font-medium">Pricing</span>
        </Link>

        {/* 3. Center Elevated Hero Action: Logo Vibrant Orange WhatsApp Order Desk */}
        <a
          href={getWhatsAppLink("Hello City Grafix, I need a quotation for printing in Kadapa. Here are my photos and requirements:")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[136px] flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white shadow-[0_8px_22px_rgba(255,106,0,0.55),0_2px_4px_rgba(0,0,0,0.3)] active:scale-95 transition-all border-t border-amber-200/50 border-x border-orange-400/40 border-b border-orange-950/60 group"
          aria-label="Order on WhatsApp"
        >
          <div className="relative shrink-0">
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-300 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white shadow-sm" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[11px] font-black tracking-wide text-white drop-shadow-sm">WhatsApp</span>
            <span className="text-[8px] text-amber-100 font-bold uppercase tracking-wider">Order Desk</span>
          </div>
        </a>

        {/* 4. Direct Call Desk */}
        <a
          href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 active:scale-90 transition-all"
          aria-label="Call Order Desk"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] tracking-tight font-medium">Call</span>
        </a>

        {/* 5. Directions / Kadapa Shop Location */}
        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 active:scale-90 transition-all"
          aria-label="Directions to Kadapa Workshop"
        >
          <MapPin className="w-4 h-4 text-[#F04446] mb-0.5" />
          <span className="text-[10px] tracking-tight font-medium">Directions</span>
        </a>
      </nav>
    </aside>
  );
}
