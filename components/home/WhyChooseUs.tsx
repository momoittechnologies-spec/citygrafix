import React from "react";
import { ShieldCheck, CheckCircle2, Zap, Award, Layers, Cpu, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "12+ Years of Experience",
      telugu: "2014 నుండి కడపలో సేవలందిస్తున్నాం",
      description: "Over a decade of continuous operational excellence in Kadapa with thousands of satisfied businesses, engineers, and families.",
      badge: "Since 2014",
    },
    {
      icon: Cpu,
      title: "Professional Printing Equipment",
      telugu: "అధునాతన జపనీస్ మిషనరీ",
      description: "Direct in-house heavy roll-to-roll plotters, CNC laser cutters, and production digital printers with strict color calibration.",
      badge: "In-House Fleet",
    },
    {
      icon: Layers,
      title: "Competitive Direct Workshop Pricing",
      telugu: "దళారులు లేరు - స్వచ్ఛమైన హోల్‌సేల్ రేట్లు",
      description: "Zero third-party commissions or agent markups. You deal directly with our Kadapa production workshop at pure wholesale rates.",
      badge: "Wholesale Value",
    },
    {
      icon: ShieldCheck,
      title: "Certified Quality Materials",
      telugu: "నాణ్యమైన మెటీరియల్స్ & UV రక్షణ",
      description: "Engineered with 340+ GSM Star Flex, Samsung IP67 waterproof LEDs, and thick 350 GSM velvet-matte cardstock built to last.",
      badge: "Premium Grade",
    },
    {
      icon: Clock,
      title: "Fast & Express Turnaround",
      telugu: "సేమ్ డే ఎక్స్‌ప్రెస్ డెలివరీ",
      description: "While-you-wait 15-minute CAD blueprints, 2-hour flex banners, and same-day personalized gifts ready for urgent deadlines.",
      badge: "15-Min to Same-Day",
    },
    {
      icon: CheckCircle2,
      title: "Complete Printing Solutions",
      telugu: "అన్ని రకాల ప్రింటింగ్ ఒకేచోట",
      description: "Complete single-source printing hub: visiting cards, photocopies, CAD plans, 3D acrylic signs, and 60ft highway billboards.",
      badge: "Under One Roof",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white relative">
      <div className="site-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3.5 py-1 rounded-full text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-brand-gold" />
            <span>The City Grafix Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight">
            Why Kadapa Trusts City Grafix
          </h2>
          <p className="text-slate-300 text-sm sm:text-base xl:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            Combining state-of-the-art Japanese plotters, direct workshop rates, and meticulous quality control under one roof.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-red transition-colors shadow-inner">
                      <Icon className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {r.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand-gold/90 block mb-2.5">
                    {r.telugu}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
