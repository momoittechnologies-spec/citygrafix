"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calculator, MapPin } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-navy/95 backdrop-blur-lg border-t border-white/15 px-3 py-2 md:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Call Now */}
        <a
          href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-300 hover:text-white active:bg-white/10"
        >
          <Phone className="w-5 h-5 text-brand-gold mb-0.5" />
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppLink("Hello City Grafix, I need a quotation for printing in Kadapa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg bg-emerald-600/90 text-white active:bg-emerald-700 shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-white mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Flex Calculator */}
        <Link
          href="/pricing#calculator"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-300 hover:text-white active:bg-white/10"
        >
          <Calculator className="w-5 h-5 text-brand-cyan mb-0.5" />
          <span className="text-[10px] font-semibold">Calculator</span>
        </Link>

        {/* Workshop Map */}
        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-300 hover:text-white active:bg-white/10"
        >
          <MapPin className="w-5 h-5 text-brand-red mb-0.5" />
          <span className="text-[10px] font-semibold">Visit Us</span>
        </a>
      </div>
    </div>
  );
}
