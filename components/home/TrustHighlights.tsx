import React from "react";
import { Award, Clock, ShieldCheck, Calendar, Star, Layers } from "lucide-react";

export default function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Established 2014",
      subtitle: "10+ Years in Kadapa",
      telugu: "2014 నుండి కడపలో",
      description: "10+ continuous years serving Kadapa businesses, engineers, and families.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Workshop Rates",
      subtitle: "Zero Middleman Fees",
      telugu: "సొంత ప్రొడక్షన్ ధరలు",
      description: "In-house Japanese plotters and fabrication with zero third-party broker fees.",
    },
    {
      icon: Clock,
      title: "Express Turnaround",
      subtitle: "15-Min to Same-Day",
      telugu: "అత్యంత వేగంగా డెలివరీ",
      description: "15-minute CAD plots, 2-hour flex banners, and same-day personalized gifts.",
    },
    {
      icon: Calendar,
      title: "Open 7 Days a Week",
      subtitle: "09:30 AM – 09:30 PM",
      telugu: "వారంలో 7 రోజులు సేవలు",
      description: "Monday through Sunday active workshop production ready for urgent jobs.",
    },
    {
      icon: Star,
      title: "5.0 ★ Google Rating",
      subtitle: "100+ Verified Reviews",
      telugu: "కస్టమర్ల విశ్వాసం",
      description: "Hundreds of verified reviews from local civil engineers, clinics, and shops.",
    },
    {
      icon: Layers,
      title: "Complete In-House Hub",
      subtitle: "Flex, Signage & Gifting",
      telugu: "అన్ని రకాల ప్రింటింగ్ ఒకేచోట",
      description: "From visiting cards and photocopies up to 60ft highway billboards.",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/90 relative z-20 shadow-xs">
      <div className="site-container py-5 sm:py-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-1 sm:px-2 ${
                  index !== 0 ? "pt-3 sm:pt-0" : ""
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-brand-navy flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-red" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight leading-tight">
                  {item.title}
                </h4>
                <span className="text-[11px] font-semibold text-brand-royal mt-0.5">
                  {item.subtitle}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {item.telugu}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
