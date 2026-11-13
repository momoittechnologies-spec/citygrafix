"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Check, Clock, Tag, Calculator } from "lucide-react";
import { SERVICE_CATEGORIES, CORE_SERVICES } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function ServiceVerticals() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Capabilities (6 Verticals)" },
    { id: "flex-outdoor-advertising", label: "Flex & Billboards" },
    { id: "jumbo-xerox-cad", label: "Jumbo Xerox & CAD" },
    { id: "3d-led-signage", label: "3D LED Signage" },
    { id: "personalized-gifts", label: "Personalized Gifts" },
    { id: "commercial-offset-printing", label: "Commercial Offset" },
    { id: "vehicle-branding-publicity", label: "Vehicle Branding" },
  ];

  // Specific services when a category tab is selected
  const filteredServices = activeTab === "all"
    ? []
    : CORE_SERVICES.filter((s) => s.categorySlug === activeTab);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative" id="services">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>In-House Workshop Manufacturing • Opp. Tirumala Hospital</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-navy tracking-tight">
              Master Printing Capabilities & Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore our 6 core production verticals. From while-you-wait 15-minute CAD blueprints and heavy 340+ GSM Star Flex to precision CNC 3D acrylic letters.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 shrink-0">
            <a
              href="#calculator-section"
              className="inline-flex items-center text-xs sm:text-sm font-bold bg-brand-navy text-white px-4 py-2.5 rounded-xl hover:bg-brand-navyLight transition-colors shadow-sm space-x-1.5"
            >
              <Calculator className="w-4 h-4 text-brand-gold" />
              <span>Instant Price Calculator ↓</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs (Scrollable on mobile, wrapped on desktop) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:space-x-0 sm:gap-2 border-b border-slate-200/80">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 sm:shrink mb-2 ${
                activeTab === tab.id
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. All Capabilities View (6 Pillars) */}
        {activeTab === "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Photo */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 bg-brand-navy/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-brand-gold border border-white/10 shadow-sm">
                    {category.teluguTitle}
                  </div>
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold text-[11px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      ⚡ {category.turnaroundSummary}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  {/* Capabilities list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Direct In-House Fabrication:
                    </span>
                    {category.keyServices.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setActiveTab(category.slug)}
                      className="bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center space-x-1"
                    >
                      <span>View Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getWhatsAppLink(`Hello City Grafix, I want a quotation for ${category.title}. Here are my requirements:`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center space-x-1 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 2. Filtered Detailed Category Items View */
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Showing {filteredServices.length} Specialized Services in this Vertical:
              </span>
              <button
                onClick={() => setActiveTab("all")}
                className="text-xs font-bold text-brand-royal hover:underline"
              >
                ← Back to All 6 Verticals
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-brand-navy/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-brand-gold">
                      {service.teluguTitle}
                    </div>
                    <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded shadow-sm font-mono text-xs font-bold text-emerald-700">
                      From {service.startingPrice}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-1.5 py-3 border-y border-slate-100">
                      {service.specs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-start text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center text-slate-600 font-medium">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-royal" />
                        {service.turnaround.split("(")[0]}
                      </span>
                      <span className="text-xs text-brand-red font-semibold">Direct Workshop</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="bg-slate-50 hover:bg-slate-100 text-brand-navy border border-slate-200 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                      >
                        <span>Full Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
