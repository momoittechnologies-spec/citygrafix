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
      subtitle: "0% EMI on Bajaj Finance",
      telugu: "సులభ వాయిదాల సదుపాయం",
      description: "In-house workshop rates with zero middleman fees. Easy installments on Bajaj Finance now available!",
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
    <section className="bg-white border-y border-[#E5E7EB] relative z-20 shadow-xs">
      <div className="site-container py-5 sm:py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-2.5 sm:p-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F4F5F7] border border-[#E5E7EB] text-[#151923] flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F97316]" />
                </div>
                <h4 className="font-heading font-bold text-[#151923] text-xs sm:text-sm tracking-tight leading-tight">
                  {item.title}
                </h4>
                <span className="text-[11px] font-semibold text-[#0066b2] mt-0.5">
                  {item.subtitle}
                </span>
                <span className="text-[10px] text-[#667085] mt-0.5">
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
