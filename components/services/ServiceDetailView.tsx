"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import { CORE_SERVICES } from "@/data/services";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import {
  Clock,
  Tag,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileCheck,
  Layers,
  Sparkles,
} from "lucide-react";

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailView({ service }: Props) {
  const relatedServices = CORE_SERVICES.filter(
    (s) => s.id !== service.id && s.categorySlug === service.categorySlug
  );

  const fallbackRelated = relatedServices.length > 0 ? relatedServices : CORE_SERVICES.slice(0, 3);

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Breadcrumb Schema JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.citygrafix.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.citygrafix.in/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.citygrafix.in/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-slate-50 pb-20">
        {/* Breadcrumb Header */}
        <div className="bg-brand-navy text-slate-300 py-3 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-brand-gold font-medium truncate">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <header className="bg-gradient-to-b from-brand-navy via-brand-navyLight to-brand-dark text-white pt-10 pb-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs">
                  <span className="text-brand-gold font-bold">{service.category}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-slate-200">{service.teluguTitle}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {service.shortDescription}
                </p>

                {/* Turnaround & Pricing Badges */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm">
                  <div className="flex items-center bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/15">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" />
                    <span>Speed: <strong className="text-white">{service.turnaround}</strong></span>
                  </div>

                  <div className="flex items-center bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/15">
                    <Tag className="w-4 h-4 text-brand-gold mr-2" />
                    <span>Starting: <strong className="text-brand-gold">{service.startingPrice}</strong></span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center space-x-2 text-sm sm:text-base group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Inquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={
                      service.recommendedLine === "signage"
                        ? BUSINESS_DATA.contacts.signageStructural.callUrl
                        : BUSINESS_DATA.contacts.primaryOrders.callUrl
                    }
                    className="bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 transition-colors flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Call Technician</span>
                  </a>

                  <Link
                    href="/pricing#calculator"
                    className="bg-brand-red hover:bg-brand-redDark text-white font-bold px-5 py-3.5 rounded-xl shadow-md transition-colors text-sm sm:text-base"
                  >
                    Calculate Price
                  </Link>
                </div>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-xs text-slate-200">
                    <span className="font-bold text-brand-gold block">{service.teluguTitle}</span>
                    <span>Direct workshop fabrication in Kadapa (No brokers)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Main Column: In-depth Details, Specs, Audience, FAQs */}
            <div className="lg:col-span-8 space-y-8">
              {/* Detailed Overview */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3">
                  Service Overview & Workshop Capabilities
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Supported Customer Segments */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Suitable For & Recommended Segments:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.map((audience, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-brand-royal text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-100"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Technical Specifications & Standards */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3 flex items-center space-x-2">
                  <FileCheck className="w-6 h-6 text-brand-royal" />
                  <span>Technical Specifications & Standards</span>
                </h2>

                <div className="space-y-3">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Supported Dimensions */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Supported Dimensions & Formats:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.supportedSizes.map((size, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono font-medium"
                      >
                        • {size}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Visual Showcase Gallery (if multiple images provided) */}
              {service.galleryImages && service.galleryImages.length > 1 && (
                <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3 flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-brand-gold" />
                    <span>Visual Campaign Showcase & Verification Proof</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.galleryImages.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-slate-900"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${service.title} Showcase ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Key Benefits */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3">
                  Why Choose City Grafix for this Service?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
                    >
                      <ShieldCheck className="w-5 h-5 text-brand-red" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium pt-1">{b}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3 flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6 text-brand-royal" />
                  <span>Frequently Asked Questions</span>
                </h2>

                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sticky Sidebar: Quick Summary, Direct Orders, Related Services */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Workshop Summary Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5 sticky top-24">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Rate Card Info
                  </span>
                  <div className="text-2xl font-black text-brand-navy mt-1">
                    {service.startingPrice}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{service.pricingDetails}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 space-y-1 text-xs">
                  <span className="font-bold text-brand-royal block">Turnaround Speed:</span>
                  <span className="text-slate-700 font-semibold">{service.turnaround}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <a
                    href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2 text-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Quotation</span>
                  </a>

                  <a
                    href={
                      service.recommendedLine === "signage"
                        ? BUSINESS_DATA.contacts.signageStructural.callUrl
                        : BUSINESS_DATA.contacts.primaryOrders.callUrl
                    }
                    className="w-full bg-brand-navy hover:bg-brand-navyLight text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-xs"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Direct Call to Desk</span>
                  </a>

                  <Link
                    href="/pricing#calculator"
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1.5 text-xs text-center"
                  >
                    <span>Use Flex Calculator</span>
                  </Link>
                </div>

                {/* Workshop Address & Hours Snippet */}
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  <div className="font-semibold text-slate-800">Workshop Address:</div>
                  <p className="leading-snug">{BUSINESS_DATA.address.full}</p>
                  <p className="font-medium text-emerald-700">Open 7 Days (9:30 AM – 9:30 PM)</p>
                </div>

                {/* Related Services in Same Category */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    Related Services:
                  </span>
                  <div className="space-y-1.5">
                    {fallbackRelated.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/services/${rel.slug}`}
                        className="block p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-900 line-clamp-1">{rel.title}</div>
                        <div className="text-[11px] text-brand-royal">From {rel.startingPrice}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
