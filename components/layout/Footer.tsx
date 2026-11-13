import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, ShieldCheck, Heart, Star } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import { CORE_SERVICES } from "@/data/services";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-white/10 pt-14 sm:pt-16 lg:pt-20 pb-32 sm:pb-28 md:pb-16 lg:pb-16">
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 sm:pb-14 border-b border-white/10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group" aria-label="City Grafix Homepage">
              <BrandLogo
                variant="horizontal"
                theme="dark"
                size="lg"
                className="group-hover:opacity-95 transition-opacity"
              />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed pr-2 sm:pr-6 max-w-lg">
              <strong className="text-white">CITY GRAFIX</strong> – Your Trusted Printing Partner in Kadapa since 2014. 
              Direct workshop fabrication for Star Flex banners, A0 Jumbo Xerox, CAD blueprints, 3D acrylic LED signage, and personalized gifting at transparent wholesale rates.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {BUSINESS_DATA.mottos.map((motto, index) => (
                <span
                  key={index}
                  className="inline-flex items-center text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300 shadow-sm"
                >
                  <ShieldCheck className="w-3 h-3 text-brand-gold mr-1.5 shrink-0" />
                  <span>{motto}</span>
                </span>
              ))}
            </div>

            {/* Social & Review Links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2.5">
                Connect With Our Workshop
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white px-3.5 py-2 rounded-xl transition-all text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
                >
                  <span>Instagram @citygrafix1</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
                <a
                  href={BUSINESS_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-red-600 text-white px-3.5 py-2 rounded-xl transition-all text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
                >
                  <span>YouTube @Citygrafix1</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-red pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors text-slate-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors text-slate-300">
                  About Our Workshop
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors text-slate-300">
                  All 12 Printing Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-brand-gold transition-colors text-slate-300">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-gold transition-colors text-slate-300">
                  Official Rate Card & Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing#calculator" className="hover:text-brand-gold transition-colors text-brand-gold font-semibold flex items-center space-x-1">
                  <span>Instant Flex Calculator</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors text-slate-300">
                  Workshop Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Printing Verticals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-cyan pl-2.5">
              Top Services
            </h4>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors block text-xs text-slate-300 line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-brand-gold hover:underline text-xs font-bold inline-flex items-center space-x-1">
                  <span>View All 12 Services</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Hours */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5 flex items-center justify-between">
              <span>Kadapa Workshop</span>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                Open 7 Days
              </span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 block font-semibold text-[11px]">Orders & Dispatch Desk:</span>
                <a
                  href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                  className="text-white hover:text-brand-gold font-bold flex items-center space-x-1.5 text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{BUSINESS_DATA.contacts.primaryOrders.displayNumber}</span>
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block font-semibold text-[11px]">Direct Workshop Address:</span>
                <p className="text-slate-300 leading-snug">
                  #21/135, Opp. Tirumala Hospital, beside New AF Automart Street, Kadapa, AP – 516001.
                </p>
                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cyan hover:underline inline-flex items-center space-x-1 mt-0.5 font-bold"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>Open Directions on Google Maps →</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Timings:</span>
                </div>
                <span className="font-semibold text-white">09:30 AM – 09:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech Partner */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} CITY GRAFIX KADAPA. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            <a
              href={BUSINESS_DATA.socialLinks.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-bold flex items-center space-x-1"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Rated on Google Business</span>
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>
              Technology Partner:{" "}
              <a
                href={BUSINESS_DATA.techPartner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-gold font-bold underline"
              >
                {BUSINESS_DATA.techPartner.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
