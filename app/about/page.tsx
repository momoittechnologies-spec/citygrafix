import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import { Award, ShieldCheck, Cpu, Clock, CheckCircle2, MapPin, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | City Grafix Kadapa - Established 2014",
  description: "Learn about City Grafix Kadapa, established in 2014. Over 10+ years of continuous printing excellence, direct workshop production, and complete commercial solutions.",
  alternates: {
    canonical: "https://www.citygrafix.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 sm:py-16 border-b border-white/10">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-md text-brand-gold text-xs font-bold uppercase tracking-wider mb-3.5 border border-white/15">
            <Award className="w-3.5 h-3.5" />
            <span>Established in 2014 • Over 10+ Years of Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            About City Grafix Kadapa
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-2.5">
            Kadapa’s premier commercial printing press, wide-format outdoor advertising fabricator, and specialized Jumbo Xerox hub.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="site-container -mt-6 sm:-mt-8 space-y-12 sm:space-y-16 relative z-20">
        {/* Story Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-md">
              <span>Our Legacy & Commitment</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
              Kadapa’s Most Trusted Printing & Jumbo Xerox Partner
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Founded in 2014, <strong>City Grafix</strong> was established with a singular vision: to eliminate costly agency brokerages in Kadapa by providing businesses, civil engineers, doctors, and families direct access to commercial-grade printing machinery under one roof.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Located conveniently opposite Tirumala Hospital in the Ganagapeta commercial corridor, our workshop has grown from a specialized CAD and Xerox station into Kadapa’s foremost multi-vertical printing house—spanning 1440 DPI outdoor Star Flex plotters, CNC laser-cut 3D acrylic LED channel letters, and rapid-turnaround personalized gifting.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl sm:text-3xl font-black text-brand-navy font-mono">10+</span>
                <span className="text-xs text-slate-500 font-semibold block mt-1">Years Continuous Operations</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">5.0 ★</span>
                <span className="text-xs text-slate-500 font-semibold block mt-1">Google Customer Rating</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-72 sm:h-88 lg:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1000&q=80"
                alt="City Grafix Commercial Printing Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-xs">
                <span className="font-bold text-brand-gold uppercase text-[11px] block">Direct Workshop Fabrication</span>
                <span>Opposite Tirumala Hospital, Kadapa, Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              Our Core Operational Pillars
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              The principles that ensure every blueprint, banner, and signboard meets perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-royal flex items-center justify-center font-black">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">In-House Machinery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero third-party outsourcing. Our high-speed wide plotters, digital presses, and laser tables produce prints directly on-site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Direct Wholesale Rates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe premium printing shouldn&apos;t come with inflated broker margins. Transparent per-square-foot pricing guaranteed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">On-Time Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We respect deadlines. While-you-wait 15-minute CAD blueprints, 2-hour event banners, and fast same-day gifts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Pre-Print Calibration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In-house technicians check CMYK profiles, bleed, resolution, and scale accuracy to prevent costly printing mistakes.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Contact CTA Card */}
        <div className="bg-brand-navy rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2.5 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-md">
              Visit Our Workshop
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Experience the City Grafix Difference
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Drop in with your USB drive, send files on WhatsApp, or speak to our structural signage engineer today.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span>{BUSINESS_DATA.address.full}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to discuss a printing requirement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/pricing"
              className="bg-white text-brand-navy hover:bg-slate-100 font-bold px-6 py-3.5 rounded-xl transition-all text-sm flex items-center justify-center space-x-1"
            >
              <span>View Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
