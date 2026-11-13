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
      <section className="bg-brand-navy text-white py-14 sm:py-16 border-b border-white/10">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-md text-brand-gold text-xs font-bold uppercase tracking-wider mb-3.5 border border-white/15">
            <span>Complete Printing Solutions in Kadapa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Our 12 Core Printing & Gifting Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-2.5">
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

        {/* Dedicated Personalized Gifts & Framing Section */}
        <section id="personalized-gifts" className="scroll-mt-32 pt-8">
          <div className="border-b-2 border-purple-600 pb-4 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded">
                పర్సనలైజ్డ్ గిఫ్ట్స్, ఫోటో ఫ్రేమ్స్ & డీటీఎఫ్ ప్రింటింగ్
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1 flex items-center space-x-2">
                <Gift className="w-7 h-7 text-purple-600" />
                <span>Personalized Gifts, Framing & Merchandise Studio</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Handcrafted wall photo frames with Glossy, Matty, or Glitter finishes, AAA ceramic mugs, magic reveal mugs, plush photo pillows, and washproof DTF T-shirts.
              </p>
            </div>
            <div className="text-xs text-purple-700 font-semibold flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              <span>Speed: 1 to 2 Hours (Same-Day)</span>
            </div>
          </div>

          {/* Instagram Official Follower Discount Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 text-white p-5 sm:p-6 mb-8 border border-purple-500/30 shadow-xl">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Special Instagram Follower Offer</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Flat 10% Discount on All Photo Frames!
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Follow our official Instagram ID <span className="text-pink-400 font-bold">@citygrafix1</span> to claim an instant 10% discount on every frame size (A4 to 24×36). Available in <strong className="text-white">Glossy Sheet</strong> (High Shine), <strong className="text-white">Matty Sheet</strong> (Non-Reflective Elegance), and <strong className="text-white">Glitter Sheet</strong> (₹50 Extra Sparkling Luxury).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href="https://www.instagram.com/citygrafix1?exln=bmN0d2F2aDhyYzgy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>Follow @citygrafix1</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/services/personalized-gifts-framing-kadapa"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all"
                >
                  <span>Explore Service Page →</span>
                </Link>
              </div>
            </div>

            {/* Background Aesthetic Glow */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/3 -top-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* 4 Specialized Gifting Products Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERSONALIZED_GIFTS_ITEMS.map((gift) => (
              <div
                key={gift.id}
                className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={gift.image}
                    alt={gift.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-brand-navy/95 backdrop-blur-sm text-brand-gold text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {gift.teluguTitle}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-purple-900 text-xs font-black px-2.5 py-1 rounded shadow-md">
                    From {gift.price}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {gift.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-3">
                      {gift.description}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-100 text-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Price & Option Details:
                    </span>
                    {gift.options.slice(0, 4).map((opt, i) => (
                      <div key={i} className="text-slate-700 font-medium text-[11px] flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5 shrink-0" />
                        <span className="truncate">{opt}</span>
                      </div>
                    ))}
                    {gift.options.length > 4 ? (
                      <span className="text-[10px] text-purple-600 font-bold block pt-0.5">
                        +{gift.options.length - 4} more options available
                      </span>
                    ) : null}
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I want to order ${gift.title}. Here are my photos and requirements:`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm mt-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Order Desk</span>
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
