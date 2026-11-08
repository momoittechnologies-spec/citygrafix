import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Clock, Check } from "lucide-react";
import { CORE_SERVICES } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function FeaturedShowcase() {
  const featured = CORE_SERVICES.filter((s) => s.isFeatured);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 text-brand-red px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2.5">
              <span>Customer Favorites in Kadapa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-navy tracking-tight">
              Featured Printing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base xl:text-lg mt-2 max-w-2xl">
              High-demand workshop solutions crafted daily with industry-leading machinery and direct wholesale pricing.
            </p>
          </div>

          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center text-sm xl:text-base font-bold text-brand-royal hover:text-brand-navy transition-colors group"
          >
            <span>Browse Complete 11 Service Catalog</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-56 xl:h-64 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3.5 left-3.5 bg-brand-navy/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-brand-gold">
                  {service.teluguTitle}
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded shadow-sm font-mono text-xs font-bold text-emerald-700">
                  From {service.startingPrice}
                </div>
              </div>

              <div className="p-6 xl:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg xl:text-xl font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 py-3 border-y border-slate-100">
                  {service.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-start text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center text-slate-600 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-royal" />
                    {service.turnaround.split("(")[0]}
                  </span>
                  <span className="text-xs text-brand-red font-semibold">Direct Workshop</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="bg-slate-50 hover:bg-slate-100 text-brand-navy border border-slate-200 text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
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
