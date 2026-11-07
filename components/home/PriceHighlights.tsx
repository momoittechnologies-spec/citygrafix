import React from "react";
import Link from "next/link";
import { ArrowRight, Tag, ShieldCheck, Calculator } from "lucide-react";

export default function PriceHighlights() {
  const highlights = [
    { name: "Normal Flex Banner", telugu: "నార్మల్ ఫ్లెక్స్", rate: "₹12", unit: "per sq. ft.", badge: "Event Grade" },
    { name: "Star Flex Banner (340+ GSM)", telugu: "స్టార్ ఫ్లెక్స్", rate: "₹18", unit: "per sq. ft.", badge: "Most Popular" },
    { name: "Backlit Glow Box Flex", telugu: "బ్యాక్‌లిట్ ఫ్లెక్స్", rate: "₹35", unit: "per sq. ft.", badge: "Signage" },
    { name: "Waterproof Vinyl Stickers", telugu: "వినైల్ స్టిక్కర్స్", rate: "₹38", unit: "per sq. ft.", badge: "Self-Adhesive" },
    { name: "Sunboard Rigid Foam Sheet", telugu: "సన్‌బోర్డ్ డిస్‌ప్లే", rate: "₹65", unit: "per sq. ft.", badge: "Retail & Clinic" },
    { name: "A3 High-Speed Colour Xerox", telugu: "A3 కలర్ జిరాక్స్", rate: "₹25", unit: "per sheet", badge: "Instant" },
    { name: "A0 Jumbo B/W Architectural Plan", telugu: "A0 జంబో జిరాక్స్", rate: "₹90", unit: "per sheet", badge: "Engineering" },
    { name: "White Ceramic Photo Mug", telugu: "ఫోటో ప్రింట్ మగ్", rate: "₹350", unit: "per piece", badge: "1–2 Hr Delivery" },
    { name: "Custom Photo T-Shirt", telugu: "కస్టమ్ టీ-షర్ట్", rate: "₹300", unit: "starting price", badge: "Sublimation/DTF" },
    { name: "1000 Visiting Cards (Matte)", telugu: "1000 విజిటింగ్ కార్డ్స్", rate: "₹750", unit: "wholesale pack", badge: "Commercial" },
    { name: "3D Acrylic LED Letters", telugu: "3D అక్రిలిక్ లెటర్స్", rate: "₹45", unit: "per inch height", badge: "3-Yr Assurance" },
    { name: "Duplicate NCR Bill Books (5 pack)", telugu: "డూప్లికేట్ బిల్ బుక్స్", rate: "₹850", unit: "5 books pack", badge: "Numbered" },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-brand-gold/10 text-brand-dark px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5 text-brand-goldDark" />
              <span>Transparent Rate Card</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Popular Printing Price Highlights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Authentic wholesale rates from our Kadapa workshop. Zero hidden charges, zero agent markups.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <Link
              href="/pricing#calculator"
              className="inline-flex items-center text-xs font-bold bg-brand-royal text-white px-4 py-2.5 rounded-xl hover:bg-brand-blue transition-colors shadow-md space-x-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Use Price Calculator</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center text-xs font-bold text-brand-navy border border-slate-300 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>View Full Rate Card →</span>
            </Link>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-brand-royal hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-royal bg-blue-50 px-2 py-0.5 rounded">
                  {item.badge}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-2 group-hover:text-brand-royal transition-colors">
                  {item.name}
                </h3>
                <span className="text-[11px] text-brand-red font-medium block">{item.telugu}</span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-baseline justify-between">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-brand-navy font-mono">
                    {item.rate}
                  </span>
                  <span className="text-[10px] text-slate-500 block">{item.unit}</span>
                </div>
                <Link
                  href="/pricing#calculator"
                  className="text-xs text-brand-royal font-bold hover:underline"
                >
                  Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            * All prices reflect direct workshop production. Applicable minimum orders and finishing add-ons apply where relevant.
          </p>
        </div>
      </div>
    </section>
  );
}
