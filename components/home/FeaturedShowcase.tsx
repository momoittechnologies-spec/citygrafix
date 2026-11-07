import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Sparkles, Clock, Check } from "lucide-react";
import { CORE_SERVICES, PERSONALIZED_GIFTS_ITEMS } from "@/data/services";
import { getWhatsAppLink } from "@/data/business";

export default function FeaturedShowcase() {
  const featured = CORE_SERVICES.filter((s) => s.isFeatured);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 text-brand-red px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-brand-red" />
              <span>Customer Favorites in Kadapa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Featured Printing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              High-demand workshop solutions crafted daily with industry-leading machinery and direct wholesale pricing.
            </p>
          </div>

          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-brand-royal hover:text-brand-blue group"
          >
            <span>Browse Complete 11 Service Catalog</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50/70 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-bold text-brand-gold">
                  {service.teluguTitle}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg shadow font-mono text-xs font-extrabold text-emerald-700">
                  From {service.startingPrice}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-1.5 py-2 border-y border-slate-200/80">
                  {service.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-start text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center text-slate-600 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1 text-brand-royal" />
                    {service.turnaround.split("(")[0]}
                  </span>
                  <span className="text-[11px] text-brand-red font-semibold">Direct Workshop</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href={`/services/${service.slug}`}
                    className="bg-white hover:bg-slate-100 text-brand-navy border border-slate-300 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
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
