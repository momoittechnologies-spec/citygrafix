"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Calculator,
  MapPin,
  Clock,
  ArrowRight,
  Layers,
  FileText,
  Lightbulb,
  Gift,
  Printer,
  Sparkles,
  Zap,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import { SERVICE_CATEGORIES, CORE_SERVICES } from "@/data/services";
import BrandLogo from "@/components/ui/BrandLogo";

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

  const megaMenuCategories = [
    {
      id: "flex-outdoor-advertising",
      title: "Flex & Outdoor Advertising",
      telugu: "స్టార్ ఫ్లెక్స్ & హోర్డింగ్స్",
      description: "340+ GSM Star Flex, Grand Arches & Highway Billboards",
      badge: "From ₹12/sq.ft",
      icon: Layers,
      color: "text-brand-red bg-red-50 group-hover:bg-brand-red group-hover:text-white",
    },
    {
      id: "jumbo-xerox-cad",
      title: "Jumbo Xerox & CAD Blueprints",
      telugu: "A0 జిరాక్స్ & ఇంజనీరింగ్ ప్లాన్స్",
      description: "A0-A4 Plotting, Tracing Paper & Municipal Village Maps",
      badge: "15-Min Delivery",
      icon: FileText,
      color: "text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
    },
    {
      id: "3d-led-signage",
      title: "Architectural 3D LED Signage",
      telugu: "3D అక్రిలిక్ లెటర్స్ & గ్లో బోర్డ్స్",
      description: "Laser-Cut Acrylic Channel Letters & Samsung IP67 LEDs",
      badge: "3-Yr Assurance",
      icon: Lightbulb,
      color: "text-amber-600 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white",
    },
    {
      id: "personalized-gifts",
      title: "Personalized Gifts Studio",
      telugu: "కస్టమ్ ఫోటో మగ్స్ & టీ-షర్ట్స్",
      description: "Magic Reveal Mugs, Custom T-Shirts & LED Photo Frames",
      badge: "1–2 Hr Delivery",
      icon: Gift,
      color: "text-purple-600 bg-purple-50 group-hover:bg-purple-600 group-hover:text-white",
    },
    {
      id: "stickers-boards-commercial",
      title: "Stickers, Boards & Offset",
      telugu: "వినైల్ స్టిక్కర్లు & విజిటింగ్ కార్డ్స్",
      description: "Sunboard Displays, 350 GSM Cards & Carbonless Bill Books",
      badge: "Wholesale Packs",
      icon: Printer,
      color: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white",
    },
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
          {/* Modern Executive Brand Logo */}
          <Link href="/" className="flex items-center group py-1" aria-label="City Grafix Homepage">
            <BrandLogo
              variant="horizontal"
              theme="dark"
              size="md"
              className="group-hover:opacity-95 transition-opacity"
            />
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
                      <div className="absolute top-full -left-28 xl:-left-20 pt-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[820px] xl:w-[860px] bg-white rounded-2xl shadow-2xl border border-slate-200 ring-1 ring-slate-900/10 overflow-hidden text-slate-900">
                          {/* Top Announcement Bar */}
                          <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="font-bold uppercase tracking-wider text-slate-700">
                                In-House Printing Verticals & Machinery
                              </span>
                              <span className="text-slate-400">• Kadapa Workshop</span>
                            </div>
                            <Link
                              href="/services"
                              onClick={() => setIsServicesOpen(false)}
                              className="font-bold text-brand-royal hover:text-brand-navy transition-colors flex items-center space-x-1"
                            >
                              <span>Browse Full 11-Service Catalog</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          {/* Grid Body */}
                          <div className="grid grid-cols-12">
                            {/* Left Column: 5 Core Categories */}
                            <div className="col-span-7 p-4 sm:p-5 space-y-1.5">
                              <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-100 text-[11px]">
                                <span className="font-bold uppercase tracking-wider text-slate-400">
                                  Select Manufacturing Category
                                </span>
                                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                  Zero Middleman Brokerage
                                </span>
                              </div>

                              {megaMenuCategories.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.id}
                                    href={`/services#${item.id}`}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                                  >
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${item.color}`}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                                          {item.title}
                                        </span>
                                        <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded shrink-0 ml-2">
                                          {item.badge}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Right Column: Workshop Direct Desk & Live Calculator */}
                            <div className="col-span-5 bg-slate-50/80 p-5 border-l border-slate-100 flex flex-col justify-between space-y-4">
                              <div className="space-y-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2 py-0.5 rounded inline-block">
                                  Direct Workshop Desk
                                </span>
                                <h4 className="text-sm font-black text-brand-navy">
                                  City Grafix Kadapa
                                </h4>
                                <p className="text-[11px] text-slate-600 leading-snug">
                                  #21/135, Opp. Tirumala Hospital, beside New AF Automart Street.
                                </p>
                                <div className="flex items-center text-[10px] text-emerald-700 font-semibold pt-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                                  <span>Open 7 Days • 9:30 AM – 9:30 PM</span>
                                </div>
                              </div>

                              {/* Mini Price Estimator CTA Card */}
                              <Link
                                href="/pricing#calculator"
                                onClick={() => setIsServicesOpen(false)}
                                className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-brand-royal hover:shadow-md transition-all group block"
                              >
                                <div className="flex items-center space-x-2 text-xs font-bold text-brand-navy mb-1">
                                  <Calculator className="w-4 h-4 text-brand-royal" />
                                  <span>Instant Flex Price Estimator</span>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-snug">
                                  Input custom dimensions in feet to get transparent rates instantly.
                                </p>
                                <span className="text-[11px] text-brand-royal font-bold inline-flex items-center mt-2 group-hover:translate-x-1 transition-transform">
                                  <span>Calculate Online</span>
                                  <ArrowRight className="w-3 h-3 ml-1" />
                                </span>
                              </Link>

                              {/* Direct WhatsApp Quote Button */}
                              <a
                                href={getWhatsAppLink("Hello City Grafix, I want a quotation for printing in Kadapa.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl shadow-sm transition-all flex items-center justify-center space-x-1.5 text-xs"
                              >
                                <MessageCircle className="w-4 h-4 fill-white" />
                                <span>WhatsApp Order Desk</span>
                              </a>
                            </div>

                            {/* Bottom Bar */}
                            <div className="col-span-12 bg-slate-100/90 px-6 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs">
                              <span className="text-slate-600 font-medium">
                                Direct In-House Production • 10+ Years Trusted in Kadapa
                              </span>
                              <Link
                                href="/pricing"
                                onClick={() => setIsServicesOpen(false)}
                                className="font-bold text-brand-navy hover:text-brand-royal transition-colors inline-flex items-center space-x-1"
                              >
                                <span>Official Wholesale Rate Card</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
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
