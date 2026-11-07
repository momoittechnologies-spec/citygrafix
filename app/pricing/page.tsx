"use client";

import React, { useState, useMemo } from "react";
import { ALL_PRICING_TABLES, PricingRow } from "@/data/pricing";
import FlexCalculator from "@/components/calculator/FlexCalculator";
import { Search, Tag, ShieldAlert, Sparkles, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

export default function PricingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Rates" },
    { id: "flexBoards", label: "A. Flex, Boards & Signage" },
    { id: "finishing", label: "B. Finishing & Add-ons" },
    { id: "xeroxCad", label: "C. Jumbo Xerox & CAD" },
    { id: "offsetCommercial", label: "D. Commercial Offset" },
    { id: "gifts", label: "E. Personalized Gifts" },
  ];

  // Filter items based on activeTab and searchTerm
  const filteredSections = useMemo(() => {
    const sections: { key: string; title: string; rows: PricingRow[] }[] = [];

    Object.entries(ALL_PRICING_TABLES).forEach(([key, section]) => {
      if (activeTab !== "all" && activeTab !== key) return;

      const matchingRows = section.rows.filter((row) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
          row.item.toLowerCase().includes(term) ||
          (row.teluguItem && row.teluguItem.toLowerCase().includes(term)) ||
          (row.recommendedFor && row.recommendedFor.toLowerCase().includes(term))
        );
      });

      if (matchingRows.length > 0) {
        sections.push({ key, title: section.title, rows: matchingRows });
      }
    });

    return sections;
  }, [searchTerm, activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-navy via-brand-navyLight to-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-brand-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Tag className="w-3.5 h-3.5" />
            <span>Official Business Rate Card</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Transparent Workshop Pricing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-3">
            Pure wholesale prices straight from our Kadapa production workshop. No hidden broker fees, no surprise costs.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-12 relative z-20">
        {/* Interactive Flex Calculator Section */}
        <FlexCalculator />

        {/* Rate Card Filter & Search Bar */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-brand-navy">
                Search Complete Rate Card
              </h2>
              <p className="text-xs text-slate-500">
                Filter by service name, category, or intended application.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Star Flex, A0, Mugs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rate Tables */}
        <div className="space-y-10">
          {filteredSections.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">No items match your search &ldquo;{searchTerm}&rdquo;</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching for Flex, A0 Xerox, Mugs, or Visiting Cards.</p>
            </div>
          ) : (
            filteredSections.map((sec) => (
              <div
                key={sec.key}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between">
                  <h3 className="font-extrabold text-sm sm:text-base tracking-wide flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-brand-gold" />
                    <span>{sec.title}</span>
                  </h3>
                  <span className="text-xs text-slate-300 font-mono">Direct Workshop Rates</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                        <th className="py-3.5 px-6">Service / Product Item</th>
                        <th className="py-3.5 px-6">Direct Rate</th>
                        <th className="py-3.5 px-6">Unit</th>
                        <th className="py-3.5 px-6 hidden sm:table-cell">Minimum Order</th>
                        <th className="py-3.5 px-6 hidden md:table-cell">Recommended For</th>
                        <th className="py-3.5 px-4 text-right">Inquire</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sec.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-6 font-semibold text-slate-900">
                            <div>{row.item}</div>
                            {row.teluguItem && (
                              <div className="text-[11px] text-brand-red font-medium mt-0.5">
                                {row.teluguItem}
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-6 font-mono font-bold text-brand-royal text-sm sm:text-base">
                            {row.rate}
                          </td>
                          <td className="py-3.5 px-6 text-slate-600 text-xs">{row.unit}</td>
                          <td className="py-3.5 px-6 text-slate-500 font-mono text-xs hidden sm:table-cell">
                            {row.minOrder || "None"}
                          </td>
                          <td className="py-3.5 px-6 text-slate-600 text-xs hidden md:table-cell max-w-xs">
                            {row.recommendedFor || "General commercial usage"}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <a
                              href={getWhatsAppLink(`Hello City Grafix, I want to inquire about ${row.item} (${row.rate} ${row.unit}). Please confirm availability.`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-bold px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5 mr-1 fill-emerald-600" />
                              <span>Order</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pricing Policies Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="font-extrabold text-amber-950 flex items-center space-x-2 text-sm">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Official City Grafix Pricing & Delivery Notes:</span>
          </div>
          <p>
            • All quotations are strictly based on customer-supplied ready-to-print artwork (.cdr, .psd, .pdf, .tiff, .jpg, .dwg). 
            Our in-house pre-flight team checks CMYK colors, bleed, and DPI resolution free of cost.
          </p>
          <p>
            • Turnaround speeds: Jumbo Xerox (15–30 mins), Star Flex (2–4 hours), Personalized Mugs/Caps (1–2 hours), Commercial Offset (24–48 hours), 3D Acrylic LED Signage (2–4 days including 48-hr electrical burn-in testing).
          </p>
          <p>
            • On-site erection, welded iron frameworks, and regional transport across Kadapa, Proddatur, and Rayachoty are quoted transparently based on site requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
