"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ChevronDown, Calculator, Sparkles, MapPin, Clock } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import { SERVICE_CATEGORIES, CORE_SERVICES } from "@/data/services";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Our Work", href: "/our-work" },
    { label: "Pricing & Calculator", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification Bar for Kadapa Local Trust */}
      <div className="bg-brand-dark text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="site-container flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              10+ Years of Quality Printing in Kadapa (Since 2014)
            </span>
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 mr-1 text-brand-red" />
              Opp. Tirumala Hospital, Kadapa
            </span>
            <span className="flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 text-brand-cyan" />
              Open 7 Days a Week (09:30 AM – 09:30 PM)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Order Desk:</span>
            <a
              href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
              className="text-white hover:text-brand-gold font-semibold flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-emerald-400" />
              {BUSINESS_DATA.contacts.primaryOrders.displayNumber}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to inquire about printing services in Kadapa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1 fill-emerald-400/20" />
              WhatsApp Orders
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-navy/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2.5"
            : "bg-brand-navy border-b border-white/10 py-3.5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Brand Logo - Preserving exact original logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative bg-white/95 rounded-xl p-1.5 shadow-md border border-white/30 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="City Grafix Kadapa Logo - Complete Printing Solutions"
                width={160}
                height={55}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1 ${
                        pathname.startsWith("/services")
                          ? "text-brand-gold bg-white/10 shadow-sm"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180 text-brand-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-[580px] bg-brand-navy/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="col-span-2 pb-2 border-b border-white/10 flex items-center justify-between">
                          <div>
                            <span className="text-xs uppercase tracking-wider font-bold text-brand-gold">
                              Printing Verticals & Services
                            </span>
                            <p className="text-[11px] text-slate-300">Direct workshop production in Kadapa</p>
                          </div>
                          <Link
                            href="/services"
                            className="text-xs text-brand-cyan hover:underline font-medium"
                          >
                            View All 11 Services →
                          </Link>
                        </div>

                        {/* Category List */}
                        <div className="space-y-1">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
                            Core Categories
                          </span>
                          {SERVICE_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/services#${cat.id}`}
                              className="block p-2 rounded-lg hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="text-xs font-semibold text-slate-100">{cat.title}</div>
                              <div className="text-[11px] text-brand-gold/90">{cat.teluguTitle}</div>
                            </Link>
                          ))}
                        </div>

                        {/* Top Direct Services */}
                        <div className="space-y-1 border-l border-white/10 pl-3">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
                            Popular Local Services
                          </span>
                          {CORE_SERVICES.slice(0, 5).map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="block p-2 rounded-lg hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="text-xs font-medium text-slate-200 truncate">{service.title}</div>
                              <div className="text-[11px] text-emerald-400 font-mono">From {service.startingPrice}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-brand-gold bg-white/10 shadow-sm font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* WhatsApp Quick Trigger */}
            <a
              href={getWhatsAppLink("Hello City Grafix, I need a quotation for printing in Kadapa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl transition-all shadow-md hover:shadow-emerald-500/25 flex items-center justify-center group"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            {/* Call Now Button */}
            <a
              href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2.5 rounded-xl border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>Call Now</span>
            </a>

            {/* Get a Quote CTA Button */}
            <Link
              href="/pricing#calculator"
              className="bg-gradient-to-r from-brand-red to-brand-redDark hover:from-brand-redLight hover:to-brand-red text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 transition-all flex items-center space-x-1.5 tracking-wide"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Get Instant Quote</span>
            </Link>
          </div>

          {/* Mobile Menu & Quick Contact Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={getWhatsAppLink("Hello City Grafix, I would like to inquire about printing services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-xl text-xs flex items-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
              className="bg-brand-red text-white p-2 rounded-xl text-xs flex items-center"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-brand-navy border-b border-white/15 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <div className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5">
                        <Link href={link.href} className="flex-1 font-semibold">
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="px-2.5 py-1 text-brand-gold bg-white/10 rounded-lg text-xs font-bold flex items-center space-x-1 border border-white/10"
                        >
                          <span>11 Categories</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180 text-cyan-400" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <div className="pl-3 pr-2 py-2 space-y-1 bg-white/5 rounded-2xl my-1 border border-white/10">
                          {SERVICE_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/services#${cat.id}`}
                              className="block p-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg font-medium"
                            >
                              <div className="font-bold text-slate-200">{cat.title}</div>
                              <div className="text-[10px] text-brand-gold">{cat.teluguTitle}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                      pathname === link.href
                        ? "bg-white/15 text-brand-gold font-bold"
                        : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 space-y-2">
                <Link
                  href="/pricing#calculator"
                  className="w-full bg-gradient-to-r from-brand-red to-brand-redDark text-white py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Flex & Signage Price Calculator</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                    className="bg-white/10 text-white py-3 px-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 border border-white/10 active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Call Order Desk</span>
                  </a>
                  <a
                    href={getWhatsAppLink("Hello City Grafix, I want to inquire about printing in Kadapa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white py-3 px-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
