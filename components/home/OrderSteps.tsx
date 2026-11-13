import React from "react";
import { Layers, MessageSquare, FileCheck, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

export default function OrderSteps() {
  const steps = [
    {
      step: "01",
      icon: Layers,
      title: "Choose Your Service",
      telugu: "మీ సేవను ఎంచుకోండి",
      description: "Browse our 12 in-house printing verticals and explore our transparent wholesale rate card.",
    },
    {
      step: "02",
      icon: MessageSquare,
      title: "Share Your Requirements",
      telugu: "మీ వివరాలు పంపండి",
      description: "Send your dimensions, CDR/PDF vector files, or phone photos directly to our Kadapa WhatsApp Order Desk.",
    },
    {
      step: "03",
      icon: FileCheck,
      title: "Confirm Your Quotation",
      telugu: "కొటేషన్ కన్ఫర్మ్ చేయండి",
      description: "Review your transparent wholesale quotation and approve the calibrated digital pre-print proof on your phone.",
    },
    {
      step: "04",
      icon: Truck,
      title: "Get Delivered / Collect It",
      telugu: "ప్రింటింగ్ & డెలివరీ",
      description: "Collect directly at our workshop opposite Tirumala Hospital, or receive fast local dispatch across Kadapa.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative" id="how-it-works">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-2xl xl:max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-royal bg-brand-royal/10 px-3.5 py-1.5 rounded-full inline-block">
            Seamless 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-navy tracking-tight mt-3">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base xl:text-lg mt-2 leading-relaxed">
            Zero complicated paperwork. From your phone to finished print in four easy, transparent steps.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-brand-red/30 transition-colors font-mono">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-brand-royal/10 text-brand-royal group-hover:bg-brand-red group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy mb-1 tracking-tight">
                    {s.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand-red block mb-2.5">
                    {s.telugu}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-emerald-700/30">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">Ready to start your print order?</h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Drop your CDR, PDF, PSD, or mobile photos directly to our Kadapa Order Desk for an immediate wholesale quote.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello City Grafix, I want to place a printing order. Here are my requirements:")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-md flex items-center justify-center space-x-2 shrink-0 w-full sm:w-auto group"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Start WhatsApp Order Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
