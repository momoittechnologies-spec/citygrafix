import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin, ShieldCheck, Layers, Eye, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

export default function FeaturedOutdoorProjects() {
  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-[#FAFAF7] border-y border-slate-200/80">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#101B38]/5 border border-[#101B38]/10 text-xs font-bold text-[#F04446] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Commercial Outdoor Advertising</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#101B38] tracking-tight">
              Roadside Hoardings &amp; Pole Kiosk Advertising in Kadapa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              High-visibility roadside displays, metal-framed advertising hoardings, and double-sided pole kiosks fabricated with heavy-gauge MS framing and vibrant weather-resistant flex prints.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services/outdoor-advertising-hoardings"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#2255D6] hover:text-[#101B38] transition-colors group"
            >
              <span>Explore Dedicated Outdoor Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 2-Column High-Impact Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card 1: Busetty Silver Jewellery Roadside Hoarding (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 group">
              <Image
                src="/images/roadside-jewellery-hoarding-proddatur.webp"
                alt="Roadside framed outdoor advertising display for Busetty Silver Jewellery in Kadapa Proddatur region"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#101B38]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#FFC83D] border border-white/15 flex items-center space-x-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Workshop Project</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3.5 inset-x-3.5 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Busetty Silver Jewellery • Proddatur / Kadapa
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  Framed Roadside Promotional Display with Custom Steel Structure &amp; HD Frontlit Flex
                </p>
              </div>
            </div>

            {/* Project Details Footer */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center space-x-4">
                <span><strong>Framework:</strong> 1.5&quot; MS Pipe Grid</span>
                <span>•</span>
                <span><strong>Media:</strong> 340 GSM Star Flex</span>
              </div>
              <a
                href={getWhatsAppLink("Hello City Grafix, I want a quotation for Roadside Framed Hoardings like the Busetty Jewellery display.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#F04446] hover:text-[#d9383a] inline-flex items-center space-x-1"
              >
                <span>Request Similar Hoarding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Urban Pole Kiosk & Road Median Boards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 group mb-4">
                <Image
                  src="/images/pole-kiosk-median-advertising-night.webp"
                  alt="Double-sided illuminated pole kiosk advertising on urban road median at night"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 bg-[#101B38]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/15">
                  Dual-Sided Visibility
                </div>

                <div className="absolute bottom-3.5 inset-x-3.5 text-white">
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                    Street Pole Kiosks &amp; Median Boards
                  </span>
                  <p className="text-xs font-semibold text-slate-100">
                    High-Frequency Road Divider &amp; Streetlight Advertising Panels
                  </p>
                </div>
              </div>

              {/* Key Highlights Checklist */}
              <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Double-sided 3×2 ft and 4×3 ft standard street pole sizing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Heavy-gauge clamp mounting engineered for high wind tolerance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Optional night illumination box &amp; reflective vinyl borders</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Fabricated in Kadapa</span>
                <a
                  href={getWhatsAppLink("Hello City Grafix, I want a quotation for Street Pole Kiosk Advertising Panels.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#101B38] hover:bg-[#2255D6] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors inline-flex items-center space-x-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire Kiosks</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
