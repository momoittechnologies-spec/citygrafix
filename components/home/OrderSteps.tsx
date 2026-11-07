import React from "react";
import { MessageSquare, Calculator, CheckCircle2, Truck, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

export default function OrderSteps() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Share Requirements",
      telugu: "మీ వివరాలు పంపండి",
      description: "Drop your file, dimensions, or specifications via WhatsApp or visit our workshop opposite Tirumala Hospital.",
    },
    {
      step: "02",
      icon: Calculator,
      title: "Instant Quote",
      telugu: "కొటేషన్ పొందండి",
      description: "We review your artwork, confirm measurements, and provide our direct wholesale rate.",
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Approve Design",
      telugu: "డిజైన్ అప్రూవ్ చేయండి",
      description: "Inspect the calibrated digital pre-print proof on your phone and give your final approval.",
    },
    {
      step: "04",
      icon: Truck,
      title: "Printing & Delivery",
      telugu: "ప్రింటింగ్ & డెలివరీ",
      description: "We print on high-speed in-house machinery and have it ready for workshop collection or express dispatch.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-royal bg-brand-royal/10 px-3.5 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mt-3">
            How to Place an Order
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No complicated procedures. From your phone to finished print in four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-brand-navy/20 font-mono">{s.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-brand-royal/10 flex items-center justify-center text-brand-royal">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-0.5">{s.title}</h3>
                  <span className="text-xs font-semibold text-brand-red block mb-2">{s.telugu}</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Banner CTA */}
        <div className="mt-12 bg-emerald-700 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Ready to start your print order?</h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1">
              Send your CDR, PDF, PSD, or phone photos directly to our Kadapa Order Desk.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello City Grafix, I want to place a printing order. Here are my requirements:")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-md flex items-center space-x-2 shrink-0"
          >
            <span>Start WhatsApp Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
