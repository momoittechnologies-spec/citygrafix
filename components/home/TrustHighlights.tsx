import React from "react";
import { Award, Clock, Wrench, Calendar, Star, Layers } from "lucide-react";

export default function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Established in 2014",
      telugu: "2014 నుండి కడపలో",
      description: "10+ continuous years serving Kadapa businesses, engineers, and families.",
    },
    {
      icon: Wrench,
      title: "Direct Workshop Rates",
      telugu: "సొంత ప్రొడక్షన్ ధరలు",
      description: "In-house Japanese plotters and fabrication with zero third-party broker fees.",
    },
    {
      icon: Clock,
      title: "Express Turnaround",
      telugu: "అత్యంత వేగంగా డెలివరీ",
      description: "15-minute CAD plots, 2-hour flex banners, and same-day personalized gifts.",
    },
    {
      icon: Calendar,
      title: "Open 7 Days a Week",
      telugu: "వారంలో 7 రోజులు సేవలు",
      description: "Monday through Sunday active workshop production ready for urgent jobs.",
    },
    {
      icon: Star,
      title: "5.0 ★ Google Rating",
      telugu: "కస్టమర్ల విశ్వాసం",
      description: "Hundreds of verified reviews from local civil engineers, clinics, and shops.",
    },
    {
      icon: Layers,
      title: "Complete In-House Hub",
      telugu: "అన్ని రకాల ప్రింటింగ్ ఒకేచోట",
      description: "From visiting cards and photocopies up to 60ft highway billboards.",
    },
  ];

  return (
    <section className="site-container -mt-6 sm:-mt-10 relative z-30 mb-8 sm:mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2 ${
                  index !== 0 ? "pt-3 sm:pt-0" : ""
                }`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100 text-brand-navy flex items-center justify-center mb-2.5">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {item.title}
                </h4>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">
                  {item.telugu}
                </span>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-snug hidden lg:block">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
