import React from "react";
import type { Metadata } from "next";
import PortfolioSection from "@/components/home/PortfolioSection";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work & Project Portfolio | City Grafix Kadapa",
  description: "Browse authentic completed printing projects in Kadapa: Star Flex banners, 3D acrylic LED signboards, municipal layouts, A0 blueprints, custom photo gifts, and corporate stationery.",
  alternates: {
    canonical: "https://www.citygrafix.in/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-navy via-brand-navyLight to-brand-dark text-white py-16">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-brand-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fabricated at City Grafix Workshop</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Our Work & Client Portfolio
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-3">
            Real finished projects delivered to shops, engineering consultants, hospitals, and families across Kadapa and Rayalaseema.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Component */}
      <div className="-mt-8 relative z-20">
        <PortfolioSection />
      </div>

      {/* Custom Inquiry CTA */}
      <div className="site-container mt-16">
        <div className="bg-gradient-to-r from-brand-navy to-brand-dark rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-black">Have a custom design or billboard in mind?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Send us your reference images or CAD layouts. Our technicians will inspect dimensions and offer a direct wholesale quote.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={getWhatsAppLink("Hello City Grafix, I saw your portfolio and would like to get a quote for a custom project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors flex items-center space-x-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share Artwork on WhatsApp</span>
            </a>
            <Link
              href="/pricing#calculator"
              className="bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-colors text-sm"
            >
              Price Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
