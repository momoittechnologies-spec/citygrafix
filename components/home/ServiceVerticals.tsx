import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function ServiceVerticals() {
  return (
    <section className="py-20 bg-slate-50 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-brand-royal/10 border border-brand-royal/20 px-3.5 py-1 rounded-full text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Printing Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Our Primary Service Verticals
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Direct in-house fabrication across wide-format flex, architectural 3D signage, engineering blueprints, commercial offset, and personalized gifting in Kadapa.
          </p>
        </div>

        {/* 3D Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with Dark Gradient & Category Badge */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold text-brand-gold bg-brand-navy/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                    {category.teluguTitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 drop-shadow-sm">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Key Bullet Services */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Featured Capabilities:
                  </span>
                  {category.keyServices.map((service, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
                      <span className="truncate">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-semibold text-brand-royal flex items-center">
                  <span className="w-2 h-2 rounded-full bg-brand-royal mr-1.5" />
                  <span>Speed: {category.turnaroundSummary}</span>
                </div>

                {/* Card CTA Actions */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services#${category.id}`}
                    className="bg-brand-navy hover:bg-brand-navyLight text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I am interested in ${category.title}. Please provide details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
