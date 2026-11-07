import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import { SERVICE_CATEGORIES, CORE_SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-white/10 pt-16 pb-24 md:pb-12">
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white/95 rounded-xl p-2 shadow-lg border border-white/20">
              <Image
                src="/logo.png"
                alt="City Grafix Kadapa Logo"
                width={170}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              <strong className="text-white">CITY GRAFIX</strong> – Your Trusted Printing Partner in Kadapa since 2014. 
              We provide end-to-end printing, designing, advertising, architectural 3D signage, and personalized gifting solutions 
              with direct workshop fabrication at competitive rates.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {BUSINESS_DATA.mottos.map((motto, index) => (
                <span
                  key={index}
                  className="inline-flex items-center text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-slate-300"
                >
                  <ShieldCheck className="w-3 h-3 text-brand-gold mr-1" />
                  {motto}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2">Connect With Us</span>
              <div className="flex space-x-3">
                <a
                  href={BUSINESS_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-pink-600 text-white p-2.5 rounded-xl transition-colors text-xs flex items-center space-x-1.5"
                >
                  <span>Instagram @citygrafix1</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={BUSINESS_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-red-600 text-white p-2.5 rounded-xl transition-colors text-xs flex items-center space-x-1.5"
                >
                  <span>YouTube @Citygrafix1</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-red pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Our Workshop
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  All 11 Printing Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-brand-gold transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-gold transition-colors">
                  Official Rate Card & Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing#calculator" className="hover:text-brand-gold transition-colors text-brand-gold font-medium">
                  Instant Flex Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Workshop Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Printing Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-cyan pl-2.5">
              Printing Verticals
            </h4>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors block text-xs"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-brand-gold hover:underline text-xs font-semibold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5">
              Workshop & Enquiries
            </h4>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold">Orders & General Support:</span>
                <a
                  href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                  className="text-white hover:text-brand-gold font-bold flex items-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{BUSINESS_DATA.contacts.primaryOrders.displayNumber}</span>
                </a>
              </div>

              <div>
                <span className="text-slate-400 block font-semibold">3D Signage & Structural:</span>
                <a
                  href={BUSINESS_DATA.contacts.signageStructural.callUrl}
                  className="text-white hover:text-brand-gold font-bold flex items-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>{BUSINESS_DATA.contacts.signageStructural.displayNumber}</span>
                </a>
              </div>

              <div>
                <span className="text-slate-400 block font-semibold">Reception (WhatsApp Only):</span>
                <a
                  href={BUSINESS_DATA.contacts.receptionDesk.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-gold font-bold flex items-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{BUSINESS_DATA.contacts.receptionDesk.displayNumber}</span>
                </a>
              </div>

              <div className="pt-1">
                <span className="text-slate-400 block font-semibold">Workshop Address:</span>
                <p className="text-slate-300 leading-tight">
                  #21/135, Opp. Tirumala Hospital, Beside New AF Automart Street, Kadapa, AP – 516001.
                </p>
                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cyan hover:underline inline-flex items-center space-x-1 mt-1 font-semibold"
                >
                  <MapPin className="w-3 h-3 text-brand-red" />
                  <span>Get Directions on Maps</span>
                </a>
              </div>

              <div className="pt-1 border-t border-white/10">
                <span className="text-slate-400 block font-semibold">Operating Hours:</span>
                <p className="text-slate-300">Mon–Sat: 9:30 AM – 9:30 PM</p>
                <p className="text-slate-300">Sunday: 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech Partner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} CITY GRAFIX KADAPA. All rights reserved. Complete Printing Solutions in Kadapa.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={BUSINESS_DATA.socialLinks.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-medium"
            >
              ★ 5.0 Rated on Google Business
            </a>
            <span>•</span>
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
