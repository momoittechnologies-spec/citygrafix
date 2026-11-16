"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_PRICING_TABLES, PricingRow } from "@/data/pricing";
import { Search, Tag, ShieldAlert, Sparkles, MessageCircle, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

export default function PricingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Gifts Rates" },
    { id: "photoFrames", label: "A. Wall Photo Frames" },
    { id: "ceramicMugs", label: "B. Ceramic & Magic Mugs" },
    { id: "roundBadges", label: "C. Round Badges (Pin & Magnetic)" },
    { id: "photoPillows", label: "D. Photo Pillows" },
    { id: "customApparel", label: "E. DTF T-Shirts & Caps" },
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
      <section className="bg-brand-navy text-white py-14 sm:py-16 border-b border-white/10">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-md text-brand-gold text-xs font-bold uppercase tracking-wider mb-3.5 border border-white/15">
            <Tag className="w-3.5 h-3.5" />
            <span>Official Gifting Rate Card</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Personalized Gifts & Framing Rates
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-2.5">
            Transparent workshop rates for custom photo frames, ceramic mugs, round badges, pillows, and DTF apparel. Same-day collection in Kadapa.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="site-container -mt-6 sm:-mt-8 space-y-10 sm:space-y-12 relative z-20">
        {/* Rate Card Filter & Search Bar */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                Search Gifting Products & Rates
              </h2>
              <p className="text-xs text-slate-500">
                Filter by gift item name, size, or intended occasion.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Mugs, Badges, Frames, Pillows..."
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
        <div className="space-y-8 sm:space-y-10">
          {filteredSections.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">No items match your search &ldquo;{searchTerm}&rdquo;</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching for Flex, A0 Xerox, Mugs, or Visiting Cards.</p>
            </div>
          ) : (
            filteredSections.map((sec) => (
              <div
                key={sec.key}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <div className="bg-brand-navy text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base tracking-wide flex items-center space-x-2">
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

        {/* Commercial Printing Direct Quotation & Bajaj Finance Easy EMI Banner */}
        <div className="bg-gradient-to-br from-brand-navy via-[#0A192F] to-slate-950 rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-brand-red text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <span>Commercial & Industrial Printing</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-amber-400 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  <span>First Time in India • 0% EMI</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Looking for Star Flex, 3D LED Signage, Jumbo Xerox or Visiting Cards?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Commercial advertising and engineering blueprints are custom manufactured to your required dimensions, materials, and quantities.
                <strong className="text-white"> Now available on Easy Installments:</strong> Pay comfortably in monthly EMIs with Bajaj Finance!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getWhatsAppLink("Hello City Grafix, I need a quotation for commercial printing (Flex Banners / 3D Signage / Jumbo Xerox / Visiting Cards):")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Commercial Quote</span>
              </a>
              <Link
                href="/#emi-finance"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-4 py-3 rounded-xl transition-all shadow-md flex items-center space-x-1.5"
              >
                <span>Check 0% EMI Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Bajaj Finance Feature Strip */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Instant Credit</div>
              <div className="text-sm sm:text-base font-black text-white mt-0.5">₹5,000 – ₹50,000</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Down Payment</div>
              <div className="text-sm sm:text-base font-black text-emerald-400 mt-0.5">From Just ₹1,000</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Interest Charges</div>
              <div className="text-sm sm:text-base font-black text-amber-400 mt-0.5">0% No Interest*</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Finance Partner</div>
              <div className="text-sm sm:text-base font-black text-cyan-400 mt-0.5">Bajaj Finance</div>
            </div>
          </div>
        </div>

        {/* Pricing Policies Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7 text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="font-extrabold text-amber-950 flex items-center space-x-2 text-sm">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Official City Grafix Gifting & Delivery Notes:</span>
          </div>
          <p>
            • All gift orders are manufactured on-demand in our Kadapa workshop with same-day turnaround (1 to 2 hours for mugs, pillows, badges & frames).
          </p>
          <p>
            • Follow our official Instagram ID <span className="font-bold text-purple-900">@citygrafix1</span> to claim an instant Flat 10% discount on all photo frame sizes (A4 to 24×36).
          </p>
          <p>
            • Free basic photo pre-flight, contrast enhancement, and layout centering before printing on all personalized gift orders.
          </p>
        </div>
      </div>
    </div>
  );
}
