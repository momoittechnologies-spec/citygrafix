import React from "react";
import type { Metadata } from "next";
import LocationContact from "@/components/home/LocationContact";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import { Phone, MessageCircle, Mail, MapPin, Clock, FileCheck, Navigation, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Workshop Location | City Grafix Kadapa",
  description: "Contact City Grafix Kadapa: Opp. Tirumala Hospital, Beside New AF Automart Street. Direct phone and WhatsApp lines for flex printing, 3D LED signage, and Jumbo Xerox.",
  alternates: {
    canonical: "https://www.citygrafix.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 sm:py-16 border-b border-white/10">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-md text-brand-gold text-xs font-bold uppercase tracking-wider mb-3.5 border border-white/15">
            <MapPin className="w-3.5 h-3.5" />
            <span>Opposite Tirumala Hospital, Kadapa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Contact & Workshop Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-2.5">
            Open 7 days a week. Connect directly with our order desk, signage engineer, or reception desk.
          </p>
        </div>
      </section>

      {/* Main Location Section */}
      <div className="-mt-6 sm:-mt-8 relative z-20">
        <LocationContact />
      </div>

      {/* Supported Files & Pre-flight Guide */}
      <div className="site-container mt-12 sm:mt-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-royal flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">Customer File Drop & Pre-Flight Verification</h2>
              <p className="text-xs text-slate-500">We print from ready-to-print customer files in all standard formats.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {BUSINESS_DATA.supportedFormats.map((fmt, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 text-center"
              >
                {fmt}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            * Our technicians inspect dimensions, CMYK color balance, and resolution before output to ensure sharp reproduction. 
            Send your files via WhatsApp to <strong>72878 67584</strong> or email to <strong>citygrafix5@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
