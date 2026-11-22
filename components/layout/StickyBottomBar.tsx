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
        className="pointer-events-auto bg-[#060D1E] border-2 border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_18px_50px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.12)] p-1.5 flex items-center justify-between gap-1.5"
      >
        {/* 1. Services Catalog */}
        <Link
          href="/services"
          className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all active:scale-95 border ${
            isServicesActive
              ? "bg-blue-600/30 border-cyan-400 text-white font-bold shadow-md shadow-blue-950/60"
              : "bg-white/[0.08] hover:bg-white/[0.14] border-white/15 text-white font-bold"
          }`}
          aria-label="Browse Services"
        >
          <div className="relative">
            <Layers className="w-4 h-4 text-cyan-400 stroke-[2.2] mb-0.5" />
            {isServicesActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,1)]" />
            )}
          </div>
          <span className="text-[10.5px] text-white tracking-tight leading-tight">Services</span>
        </Link>

        {/* 2. Official Pricing Card */}
        <Link
          href="/pricing"
          className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all active:scale-95 border ${
            isPricingActive
              ? "bg-amber-600/30 border-amber-400 text-white font-bold shadow-md shadow-amber-950/60"
              : "bg-white/[0.08] hover:bg-white/[0.14] border-white/15 text-white font-bold"
          }`}
          aria-label="View Pricing"
        >
          <div className="relative">
            <Tag className="w-4 h-4 text-amber-400 stroke-[2.2] mb-0.5" />
            {isPricingActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,1)]" />
            )}
          </div>
          <span className="text-[10.5px] text-white tracking-tight leading-tight">Pricing</span>
        </Link>

        {/* 3. Center Elevated Hero Action: High-Visibility Logo Orange WhatsApp Order Desk */}
        <a
          href={getWhatsAppLink("Hello City Grafix, I need a quotation for printing in Kadapa. Here are my photos and requirements:")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] max-w-[140px] flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white shadow-[0_8px_25px_rgba(255,106,0,0.65),0_2px_4px_rgba(0,0,0,0.4)] active:scale-95 transition-all border-2 border-amber-200/70 group"
          aria-label="Order on WhatsApp"
        >
          <div className="relative shrink-0">
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-200 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white shadow-sm" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[11.5px] font-black tracking-wide text-white drop-shadow-md">WhatsApp</span>
            <span className="text-[8.5px] text-amber-100 font-extrabold uppercase tracking-wider drop-shadow-sm">Order Desk</span>
          </div>
        </a>

        {/* 4. Direct Call Desk */}
        <a
          href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-bold active:scale-95 transition-all"
          aria-label="Call Order Desk"
        >
          <Phone className="w-4 h-4 text-amber-300 stroke-[2.2] mb-0.5" />
          <span className="text-[10.5px] text-white tracking-tight leading-tight">Call</span>
        </a>

        {/* 5. Directions / Kadapa Shop Location */}
        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-bold active:scale-95 transition-all"
          aria-label="Directions to Kadapa Workshop"
        >
          <MapPin className="w-4 h-4 text-[#FF4D4F] stroke-[2.2] mb-0.5" />
          <span className="text-[10.5px] text-white tracking-tight leading-tight">Directions</span>
        </a>
      </nav>
    </aside>
  );
}
