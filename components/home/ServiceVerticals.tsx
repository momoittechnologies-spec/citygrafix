import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function ServiceVerticals() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative" id="services">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
            <span>Direct Workshop Production</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Printing Services & Fabrication Verticals
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything is produced directly in our Kadapa workshop. From everyday photocopying and architectural CAD blueprints to heavy outdoor banners and 3D architectural signage.
          </p>
        </div>

        {/* Human-Designed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Product Photo */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <span className="text-xs font-semibold text-brand-red shrink-0">
                      {category.teluguTitle}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Capabilities list */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    What we manufacture:
                  </span>
                  {category.keyServices.map((service, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                      <span className="truncate">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs font-semibold text-slate-600 flex items-center justify-between border-t border-slate-100">
                  <span>Turnaround:</span>
                  <span className="font-bold text-brand-navy">{category.turnaroundSummary}</span>
                </div>

                {/* Card CTA Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href={`/services#${category.id}`}
                    className="bg-brand-navy hover:bg-brand-navyLight text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I am interested in ${category.title}. Please provide details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
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
