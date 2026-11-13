"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceItem, PERSONALIZED_GIFTS_ITEMS } from "@/data/services";
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
          <div className="site-container">
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
        <header className="bg-brand-navy text-white pt-10 pb-16 relative border-b border-white/10">
          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 rounded-md px-3 py-1 text-xs">
                  <span className="text-brand-gold font-bold">{service.category}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-slate-200">{service.teluguTitle}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                  {service.shortDescription}
                </p>

                {/* Turnaround & Pricing Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm">
                  <div className="flex items-center bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" />
                    <span>Speed: <strong className="text-white">{service.turnaround}</strong></span>
                  </div>

                  <div className="flex items-center bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
                    <Tag className="w-4 h-4 text-brand-gold mr-2" />
                    <span>Starting: <strong className="text-brand-gold">{service.startingPrice}</strong></span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={getWhatsAppLink(service.whatsappMessage, service.recommendedLine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-sm transition-all flex items-center space-x-2 text-sm group"
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
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-3 rounded-xl border border-white/15 transition-colors flex items-center space-x-1.5 text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Call Technician</span>
                  </a>

                  <a
                    href={getWhatsAppLink(`Hello City Grafix, I want a quotation for ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-red hover:bg-brand-redDark text-white font-bold px-4 py-3 rounded-xl shadow-sm transition-colors text-sm"
                  >
                    Get Quotation
                  </a>
                </div>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-88 lg:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-white/20 bg-slate-900 group">
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
        <div className="site-container -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Main Column: In-depth Details, Specs, Audience, FAQs */}
            <div className="lg:col-span-8 space-y-8">
              {/* Detailed Overview */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
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

              {/* Specialized Gifting Catalog (when viewing Personalized Gifts & Framing) */}
              {service.id === "personalized-gifts-framing-kadapa" && (
                <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        In-House Gifting Studio & Merchandise
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-brand-navy mt-1">
                        Select Your Gift or Custom Product
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium w-fit">
                      8 Dedicated Products • Same-Day Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PERSONALIZED_GIFTS_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-white hover:border-brand-royal/40 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-brand-gold text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                              {item.price}
                            </div>
                            <div className="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-1 rounded-md flex items-center gap-1 border border-white/10 shadow-sm">
                              <Clock className="w-3 h-3" />
                              {item.turnaround}
                            </div>
                          </div>

                          <div className="p-4 sm:p-5">
                            <div className="text-[11px] font-bold text-brand-royal">
                              {item.teluguTitle}
                            </div>
                            <h3 className="text-base font-black text-brand-navy mt-0.5 leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                              {item.description}
                            </p>

                            <div className="mt-3 pt-3 border-t border-slate-200/80">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                                Available Options & Specs:
                              </span>
                              <div className="space-y-1">
                                {item.options.slice(0, 4).map((opt, oi) => (
                                  <div key={oi} className="flex items-center text-[11px] text-slate-700">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600 mr-1.5 shrink-0" />
                                    <span>{opt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                          <a
                            href={getWhatsAppLink(
                              `Hello City Grafix, I want to order ${item.title} (${item.price}):\n- Product: ${item.title}\n- Please confirm turnaround time and photo upload requirements.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 fill-white" />
                            <span>Order on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Technical Specifications & Standards */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
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
                <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3 flex items-center space-x-2">
                    <FileCheck className="w-6 h-6 text-brand-navy" />
                    <span>Visual Campaign Showcase & Verification Proof</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.galleryImages.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-900"
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
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3">
                  Why Choose City Grafix for this Service?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                    >
                      <ShieldCheck className="w-5 h-5 text-brand-red" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium pt-1">{b}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy mb-4 border-b border-slate-100 pb-3 flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6 text-brand-royal" />
                  <span>Frequently Asked Questions</span>
                </h2>

                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
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
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 sticky top-24">
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
                    href="/pricing"
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1.5 text-xs text-center"
                  >
                    <span>View Rate Card</span>
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
