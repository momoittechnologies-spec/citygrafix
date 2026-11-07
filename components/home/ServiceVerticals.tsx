import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function ServiceVerticals() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative" id="services">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-brand-royal/10 border border-brand-royal/20 px-3.5 py-1 rounded-full text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Printing Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Our Primary Service Verticals
          </h2>
          <p className="text-slate-600 text-base sm:text-lg xl:text-xl mt-3">
            Direct in-house fabrication across wide-format flex, architectural 3D signage, engineering blueprints, commercial offset, and personalized gifting in Kadapa.
          </p>
        </div>

        {/* 3D Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              data-cursor="EXPLORE"
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between card-3d-tilt"
            >
              {/* Image with Dark Gradient & Category Badge */}
              <div className="relative h-60 sm:h-64 xl:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[11px] xl:text-xs font-bold text-brand-gold bg-brand-navy/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                    {category.teluguTitle}
                  </span>
                  <h3 className="text-xl xl:text-2xl font-black text-white mt-1.5 drop-shadow-sm">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 xl:p-8 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-slate-600 text-xs sm:text-sm xl:text-base leading-relaxed">
                  {category.description}
                </p>

                {/* Key Bullet Services */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[11px] xl:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Featured Capabilities:
                  </span>
                  {category.keyServices.map((service, idx) => (
                    <div key={idx} className="flex items-center text-xs xl:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      <span className="truncate">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs xl:text-sm font-semibold text-brand-royal flex items-center">
                  <span className="w-2 h-2 rounded-full bg-brand-royal mr-2" />
                  <span>Speed: {category.turnaroundSummary}</span>
                </div>

                {/* Card CTA Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services#${category.id}`}
                    data-cursor="VIEW"
                    className="bg-brand-navy hover:bg-brand-navyLight text-white text-xs xl:text-sm font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I am interested in ${category.title}. Please provide details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="CHAT"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs xl:text-sm font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
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
