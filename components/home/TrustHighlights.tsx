import React from "react";
import { Award, Clock, Wrench, Calendar, Star, Users } from "lucide-react";

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
    <section className="relative -mt-6 sm:-mt-12 z-30 site-container">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-4 sm:p-8 xl:p-10 transition-all hover:shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 xl:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-2 bg-slate-50/70 sm:bg-transparent rounded-2xl border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-2.5 sm:mb-3.5 shadow-inner`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm xl:text-base leading-tight">
                  {item.title}
                </h4>
                <span className="text-[10px] sm:text-xs font-semibold text-brand-red mt-0.5 sm:mt-1">
                  {item.telugu}
                </span>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-snug line-clamp-2 hidden sm:block">
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
