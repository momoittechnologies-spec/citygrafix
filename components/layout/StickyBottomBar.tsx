"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calculator, MapPin } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-navy/98 backdrop-blur-xl border-t border-white/15 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-white/15 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-brand-gold mb-1" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppLink("Hello City Grafix, I need a quotation for printing in Kadapa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 active:scale-95 shadow-md shadow-emerald-950/40 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-white mb-1" />
          <span className="text-[11px] font-extrabold">WhatsApp</span>
        </a>

        {/* Flex Calculator */}
        <Link
          href="/pricing#calculator"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-white/15 active:scale-95 transition-all"
        >
          <Calculator className="w-5 h-5 text-brand-cyan mb-1" />
          <span className="text-[11px] font-bold">Calculator</span>
        </Link>

        {/* Workshop Map */}
        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white active:bg-white/15 active:scale-95 transition-all"
        >
          <MapPin className="w-5 h-5 text-brand-red mb-1" />
          <span className="text-[11px] font-bold">Directions</span>
        </a>
      </div>
    </div>
  );
}
