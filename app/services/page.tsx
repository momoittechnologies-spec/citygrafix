import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SERVICE_CATEGORIES, CORE_SERVICES, PERSONALIZED_GIFTS_ITEMS } from "@/data/services";
import { ArrowRight, MessageCircle, Clock, ShieldCheck, CheckCircle2, Sparkles, Tag, Gift } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

export const metadata: Metadata = {
  title: "Complete Printing Services Catalog | City Grafix Kadapa",
  description: "Browse all 11 core printing verticals in Kadapa: Star Flex, Jumbo Xerox, A0 CAD blueprints, 3D Acrylic LED letters, customized photo gifts, visiting cards, and bill books.",
  keywords: [
    "Printing Services Catalog Kadapa",
    "Flex Printing Services Kadapa",
    "Jumbo Xerox Services Kadapa",
    "Signage Manufacturers Kadapa",
    "Personalized Gifts Kadapa",
  ],
  alternates: {
    canonical: "https://www.citygrafix.in/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-navy via-brand-navyLight to-brand-dark text-white py-16">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-brand-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Printing Solutions in Kadapa</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Our 11 Core Printing Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-3">
            In-house manufacturing across wide-format flex, architectural signage, precision CAD blueprints, and personalized gifts. Zero broker markups.
          </p>
        </div>
      </section>

      {/* Main Categories Navigation Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm">
        <div className="site-container flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider shrink-0 mr-2">Jump to:</span>
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-700 font-bold transition-colors"
            >
              {cat.title}
            </a>
          ))}
          <a
            href="#personalized-gifts"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold transition-colors"
          >
            Personalized Gifts Menu
          </a>
        </div>
      </div>

      <div className="site-container pt-12 space-y-20">
        {/* Iterate each Category */}
        {SERVICE_CATEGORIES.map((cat) => {
          const categoryServices = CORE_SERVICES.filter((s) => s.categorySlug === cat.slug);

          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="border-b-2 border-brand-navy pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2.5 py-1 rounded">
                    {cat.teluguTitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1">
                    {cat.title}
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">{cat.description}</p>
                </div>
                <div className="text-xs text-brand-royal font-semibold flex items-center">
                  <Clock className="w-4 h-4 mr-1.5" />
                  <span>Turnaround: {cat.turnaroundSummary}</span>
                </div>
              </div>

              {/* Service Cards for this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold text-brand-gold">
                        {service.teluguTitle}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded shadow font-mono text-xs font-extrabold text-emerald-700">
                        {service.startingPrice}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="space-y-1 py-2 border-t border-slate-100 text-xs text-slate-700">
                        {service.specs.slice(0, 2).map((sp, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0" />
                            <span className="truncate">{sp}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                        <Link
                          href={`/services/${service.slug}`}
                          className="bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-bold py-2 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                        >
                          <span>Full Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <a
                          href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Dedicated Personalized Gifts Section */}
        <section id="personalized-gifts" className="scroll-mt-32 pt-8">
          <div className="border-b-2 border-purple-600 pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded">
                పర్సనలైజ్డ్ గిఫ్ట్స్ & సబ్లిమేషన్
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1 flex items-center space-x-2">
                <Gift className="w-7 h-7 text-purple-600" />
                <span>Personalized Gifts Customization Studio</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Sublimation & DTF photo mugs, magic reveal mugs, customized T-shirts, synthetic wooden frames, and LED glow pillows. Ready in 1 to 2 hours!
              </p>
            </div>
            <div className="text-xs text-purple-700 font-semibold flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              <span>Speed: 1 to 2 Hours (Same-Day)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONALIZED_GIFTS_ITEMS.map((gift) => (
              <div
                key={gift.id}
                className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 w-full bg-slate-900">
                  <Image
                    src={gift.image}
                    alt={gift.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-purple-900/90 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded">
                    {gift.teluguTitle}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-purple-800 text-xs font-black px-2.5 py-1 rounded shadow">
                    From {gift.price}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{gift.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{gift.description}</p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-100 text-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Available Options:</span>
                    {gift.options.map((opt, i) => (
                      <div key={i} className="text-slate-700 font-medium text-[11px] flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5" />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I want to order ${gift.title}. Please share catalogue and photo requirements.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Order on WhatsApp (1–2 Hr Dispatch)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
