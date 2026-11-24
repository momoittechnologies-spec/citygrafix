"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Clock,
  ArrowRight,
  Layers,
  FileText,
  Lightbulb,
  Gift,
  Printer,
  Sparkles,
  Smartphone,
  Tag,
  CreditCard,
  Image as ImageIcon,
  Camera,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "products" | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  const handleMouseEnter = (menu: "services" | "products") => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const serviceItems = [
    {
      title: "Outdoor Hoardings & Pole Kiosks",
      telugu: "రోడ్డు హోర్డింగ్స్ & పోల్ కియోస్క్స్",
      href: "/services/outdoor-advertising-hoardings",
      description: "Roadside framed hoardings, street pole kiosks & highway billboards",
      icon: Layers,
      color: "text-[#F04446]",
      badge: "Direct Workshop",
    },
    {
      title: "Star Flex & Vinyl Banners",
      telugu: "స్టార్ ఫ్లెక్స్ & బ్యానర్స్",
      href: "/services/star-flex-banner-printing-kadapa",
      description: "340+ GSM Star Flex, frontlit, backlit with outdoor UV inks",
      icon: Printer,
      color: "text-amber-500",
      badge: "Same-Day",
    },
    {
      title: "Architectural 3D LED Signage",
      telugu: "3D అక్రిలిక్ ఎల్ఈడీ బోర్డులు",
      href: "/services/3d-led-sign-boards-kadapa",
      description: "Laser-cut acrylic channel letters with Samsung IP67 waterproof LEDs",
      icon: Lightbulb,
      color: "text-[#2255D6]",
      badge: "3-Yr Guarantee",
    },
    {
      title: "A0 Jumbo Xerox & CAD Plotting",
      telugu: "A0 జిరాక్స్ & ఇంజనీరింగ్ ప్లాన్స్",
      href: "/services/jumbo-xerox-kadapa",
      description: "Exact 1:100 scale architectural plans & municipal sanction maps",
      icon: FileText,
      color: "text-emerald-500",
      badge: "15-Min Delivery",
    },
    {
      title: "Vehicle Branding & Auto Publicity",
      telugu: "ఆటో ప్రచారం & వెహికల్ బ్రాండింగ్",
      href: "/services/auto-publicity-advertising-kadapa",
      description: "Auto hood flex, driver back banners with route tracking in Kadapa",
      icon: Sparkles,
      color: "text-purple-500",
      badge: "Turnkey Fleets",
    },
    {
      title: "Commercial Stickers & Sunboards",
      telugu: "స్టిక్కర్స్ & సన్‌బోర్డ్ ప్రింటింగ్",
      href: "/services/vinyl-stickers-sunboard-kadapa",
      description: "Die-cut product labels, 3mm-5mm sunboard displays & foam sheets",
      icon: Tag,
      color: "text-cyan-500",
      badge: "Wholesale",
    },
  ];

  const productItems = [
    {
      title: "Custom Wall Photo Frames",
      telugu: "వాల్ ఫోటో ఫ్రేమ్స్",
      href: "/services/personalized-gifts-framing-kadapa",
      description: "A4 to 24×36 premium synthetic wood frames with matte/gloss sheet",
      price: "From ₹600 (10% IG Off)",
      icon: ImageIcon,
    },
    {
      title: "Ceramic & Magic Heat Mugs",
      telugu: "మ్యాజిక్ మగ్స్ & కస్టమ్ కప్స్",
      href: "/services/personalized-gifts-framing-kadapa",
      description: "Plain white, inner color, heart-handle & black heat-reveal mugs",
      price: "From ₹350",
      icon: Gift,
    },
    {
      title: "Custom T-Shirts & DTF Apparel",
      telugu: "కస్టమ్ టీ-షర్ట్స్ & క్యాప్స్",
      href: "/services/personalized-gifts-framing-kadapa",
      description: "Washproof DTF printing for corporate events, schools & birthdays",
      price: "From ₹350",
      icon: Sparkles,
    },
    {
      title: "Photo Pillows & Cushions",
      telugu: "కస్టమ్ ఫోటో పిల్లోస్",
      href: "/services/personalized-gifts-framing-kadapa",
      description: "Heart & square satin cushions with fiber filling and vibrant print",
      price: "From ₹450",
      icon: Gift,
    },
    {
      title: "Visiting Cards & Corporate Stationery",
      telugu: "విజిటింగ్ కార్డ్స్ & బిల్ బుక్స్",
      href: "/services/visiting-cards-offset-kadapa",
      description: "350 GSM matte/velvet cards, spot UV, letterheads & receipt books",
      price: "From ₹600 / 1000",
      icon: CreditCard,
    },
    {
      title: "Official Workshop Rate Card",
      telugu: "అన్ని ధరల పూర్తి వివరాలు",
      href: "/pricing",
      description: "Transparent pricing table for all printing, signage & gifting items",
      price: "Full Rate Card",
      icon: Tag,
    },
  ];

  return (
    <>
      {/* 1. Sleek Top Credibility & Direct Contact Bar (Hidden on mobile) */}
      <div
        className={`bg-[#0A1124] text-slate-300 text-xs px-4 border-b border-white/10 hidden md:block transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 py-0 opacity-0 border-b-0" : "max-h-11 py-2 opacity-100"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Left: Location & Hours */}
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#FFC83D] font-semibold">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#FFC83D]" />
              Kadapa&apos;s No #1 Printing &amp; Branding Partner
            </span>
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#F04446]" />
              Opp. Tirumala Hospital, Kadapa
            </span>
            <span className="flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 text-cyan-400" />
              Open 7 Days • 09:30 AM – 09:30 PM
            </span>
          </div>

          {/* Right: Direct Desk Phone & WhatsApp */}
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Direct Workshop Desk:</span>
            <a
              href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
              className="text-white hover:text-[#FFC83D] font-bold flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-emerald-400" />
              {BUSINESS_DATA.contacts.primaryOrders.displayNumber}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to inquire about printing services in Kadapa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1 fill-emerald-400/20" />
              WhatsApp Orders
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#101B38]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2 sm:py-2.5"
            : "bg-[#101B38] border-b border-white/10 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center group py-0.5" aria-label="City Grafix Homepage">
            <BrandLogo
              variant="horizontal"
              size="md"
              className="group-hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/" ? "text-[#FFC83D] bg-white/10 shadow-sm" : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1 ${
                  pathname.startsWith("/services")
                    ? "text-[#FFC83D] bg-white/10 shadow-sm"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-[#FFC83D]" : ""
                  }`}
                />
              </Link>

              {/* Services Mega Dropdown */}
              {activeDropdown === "services" && (
                <div className="absolute top-full -left-20 xl:-left-10 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="w-[780px] bg-white rounded-2xl shadow-2xl border border-slate-200 ring-1 ring-slate-900/10 overflow-hidden text-slate-900">
                    <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-700">
                        In-House Printing &amp; Fabrication Verticals
                      </span>
                      <Link
                        href="/services"
                        className="font-bold text-[#2255D6] hover:underline flex items-center space-x-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-2">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-3 group"
                        >
                          <div className={`p-2.5 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors ${item.color}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#2255D6] transition-colors truncate">
                                {item.title}
                              </h4>
                              {item.badge && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/pricing"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1 ${
                  pathname === "/pricing"
                    ? "text-[#FFC83D] bg-white/10 shadow-sm"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "products" ? "rotate-180 text-[#FFC83D]" : ""
                  }`}
                />
              </Link>

              {/* Products Dropdown Menu */}
              {activeDropdown === "products" && (
                <div className="absolute top-full -left-10 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-200 ring-1 ring-slate-900/10 overflow-hidden text-slate-900">
                    <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-700">
                        Popular Gifting &amp; Commercial Products
                      </span>
                      <Link
                        href="/pricing"
                        className="font-bold text-[#2255D6] hover:underline flex items-center space-x-1"
                      >
                        <span>Full Price Rate Card</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-2">
                      {productItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-3 group"
                        >
                          <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-100 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#2255D6] transition-colors truncate">
                                {item.title}
                              </h4>
                            </div>
                            <span className="text-[10px] text-[#F04446] font-bold block mt-0.5">
                              {item.price}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/our-work"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/our-work"
                  ? "text-[#FFC83D] bg-white/10 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/photomall"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                pathname === "/photomall"
                  ? "text-[#FFC83D] bg-white/10 shadow-sm"
                  : "text-amber-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>PhotoMall</span>
            </Link>

            <Link
              href="/pricing"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/pricing"
                  ? "text-[#FFC83D] bg-white/10 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/about"
                  ? "text-[#FFC83D] bg-white/10 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/contact"
                  ? "text-[#FFC83D] bg-white/10 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Install App Trigger */}
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("citygrafix-install-app"));
                }
              }}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2.5 rounded-xl border border-white/15 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
              title="Install City Grafix Web App"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>Install App</span>
            </button>

            {/* Quick Call */}
            <a
              href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC83D]" />
              <span>Call Desk</span>
            </a>

            {/* Primary Get Quote CTA Button */}
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to get a quotation for printing in Kadapa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F04446] hover:bg-[#d9383a] text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md hover:shadow-[#F04446]/25 transition-all flex items-center space-x-1.5 active:scale-95 group"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Get Quote</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Quick Action Buttons & Menu Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={getWhatsAppLink("Hello City Grafix, I would like to inquire about printing services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-xl text-xs flex items-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <a
              href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
              className="bg-white/10 text-white p-2 rounded-xl text-xs flex items-center border border-white/15"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 text-[#FFC83D]" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/15"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#101B38] border-b border-white/15 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10">
                  <Link href="/services" className="flex-1">
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 text-[#FFC83D] bg-white/10 rounded-lg text-xs"
                    aria-label="Toggle Services list"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-2xl my-1 border border-white/10">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block p-2 text-xs text-slate-200 hover:text-white hover:bg-white/10 rounded-lg font-medium"
                      >
                        <div className="font-bold text-white">{item.title}</div>
                        <div className="text-[10px] text-[#FFC83D]">{item.telugu}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Products Accordion */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10">
                  <Link href="/pricing" className="flex-1">
                    Products &amp; Gifts
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="p-1 text-[#FFC83D] bg-white/10 rounded-lg text-xs"
                    aria-label="Toggle Products list"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileProductsOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-2xl my-1 border border-white/10">
                    {productItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block p-2 text-xs text-slate-200 hover:text-white hover:bg-white/10 rounded-lg font-medium"
                      >
                        <div className="font-bold text-white">{item.title}</div>
                        <div className="text-[10px] text-emerald-400">{item.price}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/our-work"
                className="px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
              >
                Portfolio
              </Link>

              <Link
                href="/photomall"
                className="px-4 py-3 rounded-xl text-base font-bold text-amber-300 hover:bg-white/10 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span>City PhotoMall</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white">
                  Client Portal
                </span>
              </Link>

              <Link
                href="/pricing"
                className="px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
              >
                Pricing &amp; Rates
              </Link>

              <Link
                href="/about"
                className="px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/10"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Drawer Bottom CTAs */}
            <div className="pt-4 mt-4 border-t border-white/15 space-y-2.5">
              <a
                href={getWhatsAppLink("Hello City Grafix, I want to get a quotation for printing in Kadapa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 shadow-[0_8px_25px_rgba(255,106,0,0.5)] border-t border-amber-200/50 border-b border-orange-950/60 text-sm active:scale-95 transition-all group"
              >
                <div className="relative">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-300 animate-ping" />
                </div>
                <span>Get Instant WhatsApp Quote</span>
              </a>

              <a
                href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                className="w-full bg-white/10 hover:bg-white/15 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 border border-white/15 backdrop-blur-md text-sm active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Desk: {BUSINESS_DATA.contacts.primaryOrders.displayNumber}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
