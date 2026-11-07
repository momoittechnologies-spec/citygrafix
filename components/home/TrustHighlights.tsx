import React from "react";
import { Award, Clock, Wrench, Calendar, Star, Users } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Established in 2014",
      telugu: "2014 నుండి కడపలో",
      description: "Over 10+ continuous years serving Kadapa and Rayalaseema businesses.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: Wrench,
      title: "Direct Workshop Rates",
      telugu: "డైరెక్ట్ వర్క్‌షాప్ ధరలు",
      description: "In-house manufacturing machinery with zero third-party broker commission.",
      color: "text-brand-red",
      bgColor: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Express Turnaround",
      telugu: "అత్యంత వేగంగా డెలివరీ",
      description: "15-min CAD prints, 2-hr flex banners & same-day personalized gifts.",
      color: "text-brand-royal",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calendar,
      title: "Open 7 Days a Week",
      telugu: "వారంలో 7 రోజులు సేవలు",
      description: "Monday to Sunday active workshop production ready for urgent jobs.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Star,
      title: "5.0 ★ Google Rating",
      telugu: "కస్టమర్ల విశ్వాసం",
      description: "Hundreds of verified local 5-star reviews from engineers, shops & doctors.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: Users,
      title: "Complete Solutions Hub",
      telugu: "అన్ని రకాల ప్రింటింగ్ ఒకేచోట",
      description: "From visiting cards and Xerox up to 40ft highway billboards and 3D letters.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-14 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2 ${
                  index !== 0 ? "pt-4 lg:pt-0" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-3 shadow-inner`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                <span className="text-[11px] font-semibold text-brand-red mt-0.5">{item.telugu}</span>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
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
