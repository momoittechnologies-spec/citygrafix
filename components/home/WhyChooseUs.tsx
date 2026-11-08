import React from "react";
import { ShieldCheck, CheckCircle2, Zap, Award, ThumbsUp, Layers, Cpu, Clock, MessageCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Established in 2014 (10+ Years)",
      telugu: "10 ఏళ్ల నమ్మకం",
      description: "A decade of continuous operational excellence in Kadapa with thousands of satisfied clients.",
    },
    {
      icon: Cpu,
      title: "Direct In-House Machinery",
      telugu: "సొంత మిషనరీ & ప్రొడక్షన్",
      description: "We own our heavy roll-to-roll plotters, digital Xerox machines, and 3D laser cutters.",
    },
    {
      icon: Layers,
      title: "Zero Broker Markups",
      telugu: "దళారులు లేరు - హోల్‌సేల్ రేట్లు",
      description: "Get pure wholesale workshop pricing directly without paying agency commissions.",
    },
    {
      icon: CheckCircle2,
      title: "Pre-Flight Artwork Check",
      telugu: "పర్ఫెక్ట్ కలర్ కాలిబ్రేషన్",
      description: "Our technicians inspect CMYK colors, bleed, DPI resolution, and dimensions before printing.",
    },
    {
      icon: ThumbsUp,
      title: "Digital Proof Approval",
      telugu: "వాట్సాప్ ప్రూఫ్ అప్రూవల్",
      description: "Review and approve your digital preprint proof on WhatsApp before physical production starts.",
    },
    {
      icon: Clock,
      title: "Same-Day Express Turnaround",
      telugu: "సేమ్ డే ఎక్స్‌ప్రెస్ డెలివరీ",
      description: "15-minute CAD blueprints, 2-hour flex banners, and fast turnaround on urgent jobs.",
    },
    {
      icon: MessageCircle,
      title: "Effortless WhatsApp Ordering",
      telugu: "సులువైన వాట్సాప్ ఆర్డరింగ్",
      description: "Simply share your requirements, dimensions, or design files on WhatsApp for instant service.",
    },
    {
      icon: ShieldCheck,
      title: "3-Year Signage Assurance",
      telugu: "3 సంవత్సరాల గ్యారెంటీ",
      description: "Samsung IP67 LEDs and 48-hour electrical burn-in testing on all 3D architectural signage.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white relative">
      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3 py-1 rounded-md text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-brand-gold" />
            <span>The City Grafix Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight">
            Why Kadapa Trusts City Grafix
          </h2>
          <p className="text-slate-300 text-sm sm:text-base xl:text-lg mt-3">
            Combining state-of-the-art Japanese plotters, direct workshop pricing, and meticulous quality control under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-brand-gold/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors">
                    <Icon className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{r.title}</h3>
                  <span className="text-xs font-semibold text-brand-gold/90 block mb-2">{r.telugu}</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{r.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
