"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_PRICING_TABLES, PricingRow } from "@/data/pricing";
import {
  Search,
  Tag,
  ShieldAlert,
  Sparkles,
  MessageCircle,
  FileText,
  Clock,
  ArrowRight,
  ZoomIn,
  X,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

interface VisualGiftCard {
  id: string;
  categoryTab: string;
  name: string;
  telugu: string;
  badge: string;
  rate: string;
  unit: string;
  image: string;
  turnaround: string;
  specs: string;
  whatsappMessage: string;
}

const VISUAL_GIFT_CARDS: VisualGiftCard[] = [
  {
    id: "plain-white-mug",
    categoryTab: "ceramicMugs",
    name: "Plain White Ceramic Photo Mug",
    telugu: "ప్లెయిన్ వైట్ సిరామిక్ కప్",
    badge: "Ready in 1-2 Hrs",
    rate: "₹350",
    unit: "per mug (AAA Grade)",
    image: "/images/plain-mug-sublimation.jpg",
    turnaround: "1 to 2 Hours",
    specs: "High-grade AAA pure white sublimation ceramic mug. 100% microwave safe, durable glossy finish, and permanent HD photo print.",
    whatsappMessage: "Hello City Grafix, I want to order Plain White Ceramic Photo Mug (₹350):",
  },
  {
    id: "inner-colour-mug",
    categoryTab: "ceramicMugs",
    name: "Inner Colour Coffee Mug (6+ Colours)",
    telugu: "ఇన్నర్ కలర్ కాఫీ కప్ (6+ రంగులు)",
    badge: "Vibrant Dual-Tone",
    rate: "₹450",
    unit: "per mug (multi-colour)",
    image: "/images/inner-colour-mug.jpg",
    turnaround: "1 to 2 Hours",
    specs: "White exterior with vibrant colored interior & handle: Red, Yellow, Blue, Pink, Black, and Green. Personalize with photos, names, or corporate logos.",
    whatsappMessage: "Hello City Grafix, I want to order Inner Colour Ceramic Mug (₹450):",
  },
  {
    id: "heart-handle-mug",
    categoryTab: "ceramicMugs",
    name: "Heart Handle Couple Coffee Mug",
    telugu: "హార్ట్ హ్యాండిల్ కపుల్ కప్",
    badge: "Romantic Gift Choice",
    rate: "₹500",
    unit: "per mug (couple gift)",
    image: "/images/heart-handle-mug.jpg",
    turnaround: "1 to 2 Hours",
    specs: "Sculpted heart-shaped handle available in Red, Blue, Black, Yellow, Pink, and Green. Ideal for anniversaries, birthdays & Valentine gifts.",
    whatsappMessage: "Hello City Grafix, I want to order Heart Handle Couple Mug (₹500):",
  },
  {
    id: "magic-heat-reveal-mug",
    categoryTab: "ceramicMugs",
    name: "Personalized Magic Heat Reveal Mug",
    telugu: "మ్యాజిక్ హీట్ రివీల్ కప్",
    badge: "Heat Activated Reveal",
    rate: "₹550",
    unit: "per mug (heat activated)",
    image: "/images/magic-heat-reveal-mug.jpg",
    turnaround: "1 to 2 Hours",
    specs: "Solid gloss black when cold; pouring hot coffee, tea, or water magically reveals your printed photo and heartfelt message within seconds!",
    whatsappMessage: "Hello City Grafix, I want to order Personalized Magic Heat Reveal Mug (₹550):",
  },
  {
    id: "round-badges",
    categoryTab: "roundBadges",
    name: "Custom Printed Round Badges",
    telugu: "కస్టమ్ రౌండ్ బ్యాడ్జెస్ (పిన్ & మాగ్నెటిక్)",
    badge: "Pin & Magnetic Options",
    rate: "From ₹25",
    unit: "Pin from ₹25 • Magnetic from ₹55",
    image: "/images/round-badges-pin-magnetic-full.jpg",
    turnaround: "1 to 2 Hours / Same-Day",
    specs: "High quality custom printed badges for schools, offices, clubs, and campaigns. Available in 44mm & 58mm with pin or dual magnetic clasps.",
    whatsappMessage: "Hello City Grafix, I want to order Custom Round Badges (Pin / Magnetic):",
  },
  {
    id: "photo-frame",
    categoryTab: "photoFrames",
    name: "Custom Wall Photo Frames",
    telugu: "కస్టమ్ ఫోటో ఫ్రేమ్స్",
    badge: "Flat 10% IG Discount",
    rate: "₹600",
    unit: "A4 size (10% IG Discount)",
    image: "/images/photo-frames-price-chart-full.jpg",
    turnaround: "1 to 2 Hours",
    specs: "Synthetic gold & black beading with moisture-resistant backing. Available in Glossy, Matty, and Glitter Sheet finishes from A4 up to 24×36 mega living-room wall portraits.",
    whatsappMessage: "Hello City Grafix, I want to order Custom Photo Frames with the 10% Instagram Discount:",
  },
  {
    id: "photo-pillows",
    categoryTab: "photoPillows",
    name: "Heart & Square Photo Pillows",
    telugu: "ఫోటో పిల్లో & కుషన్స్",
    badge: "Luxury Plush",
    rate: "₹500",
    unit: "starting per piece",
    image: "/images/photo-pillows-price-chart-full.jpg",
    turnaround: "1 to 2 Hours",
    specs: "Ultra-soft micro-poly fill with zip closure and washproof HD photo prints. Available in Standard, Fancy Border, Magic Reversible Sequins, and Glowing LED lights.",
    whatsappMessage: "Hello City Grafix, I want to order a Custom Photo Pillow (₹500):",
  },
  {
    id: "dtf-tshirts",
    categoryTab: "customApparel",
    name: "Custom DTF T-Shirts & Caps",
    telugu: "డీటీఎఫ్ టీ-షర్ట్ ప్రింటింగ్",
    badge: "100% Washproof",
    rate: "₹200",
    unit: "print only / ₹400 w/ tee",
    image: "/images/gifting-tshirts-dtf-printing.jpg",
    turnaround: "Same-Day Dispatch",
    specs: "Commercial digital heat transfer printing. Bring your own fabric for ₹200 or choose our ready round neck cotton and executive collar polo T-shirts.",
    whatsappMessage: "Hello City Grafix, I want to order Custom DTF T-Shirts & Caps:",
  },
];

export default function PricingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; whatsappMsg: string } | null>(null);

  const tabs = [
    { id: "all", label: "All Gifts Rates (8)" },
    { id: "ceramicMugs", label: "Photo Mugs (4 Varieties)" },
    { id: "roundBadges", label: "Round Badges (Pin & Magnetic)" },
    { id: "photoFrames", label: "Wall Photo Frames (A4–24×36)" },
    { id: "photoPillows", label: "Photo Pillows & Cushions" },
    { id: "customApparel", label: "DTF T-Shirts & Caps" },
  ];

  // Filter visual cards
  const filteredCards = useMemo(() => {
    return VISUAL_GIFT_CARDS.filter((card) => {
      if (activeTab !== "all" && card.categoryTab !== activeTab) return false;
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return (
        card.name.toLowerCase().includes(term) ||
        card.telugu.toLowerCase().includes(term) ||
        card.specs.toLowerCase().includes(term)
      );
    });
  }, [activeTab, searchTerm]);

  // Filter tables based on activeTab and searchTerm
  const filteredSections = useMemo(() => {
    const sections: { key: string; title: string; rows: PricingRow[] }[] = [];

    Object.entries(ALL_PRICING_TABLES).forEach(([key, section]) => {
      if (activeTab !== "all" && activeTab !== key) return;

      const matchingRows = section.rows.filter((row) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
          row.item.toLowerCase().includes(term) ||
          (row.teluguItem && row.teluguItem.toLowerCase().includes(term)) ||
          (row.recommendedFor && row.recommendedFor.toLowerCase().includes(term))
        );
      });

      if (matchingRows.length > 0) {
        sections.push({ key, title: section.title, rows: matchingRows });
      }
    });

    return sections;
  }, [searchTerm, activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 sm:py-16 border-b border-white/10">
        <div className="site-container text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-md text-brand-gold text-xs font-bold uppercase tracking-wider mb-3.5 border border-white/15">
            <Tag className="w-3.5 h-3.5 text-brand-gold" />
            <span>Official Gifting Rate Card & Visual Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Personalized Gifts & Framing Rates
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-2.5">
            Transparent workshop rates for custom photo frames, ceramic mugs, round badges, pillows, and DTF apparel. Same-day collection in Kadapa.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="site-container -mt-6 sm:-mt-8 space-y-10 sm:space-y-12 relative z-20">
        {/* Rate Card Filter & Search Bar */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-brand-navy">
                Search Gifting Products & Rates
              </h2>
              <p className="text-xs text-slate-500">
                Filter by gift item name, size, or intended occasion. Click any flyer to view high resolution.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Mugs, Badges, Frames, Pillows..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-slate-50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#151923] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Product Flyers Grid (Uncropped Square Display) */}
        {filteredCards.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-[#151923]">
                  Product Visual Showcase & Flyers
                </h3>
                <p className="text-xs sm:text-sm text-[#667085]">
                  Click any flyer to inspect full size, color options, and pricing details.
                </p>
              </div>
              <span className="text-xs font-bold text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                {filteredCards.length} Products Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image container: Uncropped Aspect Square with object-contain */}
                  <div
                    className="relative aspect-square w-full overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-2 cursor-pointer group/img"
                    onClick={() =>
                      setSelectedImage({
                        src: card.image,
                        title: card.name,
                        whatsappMsg: card.whatsappMessage,
                      })
                    }
                  >
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 bg-[#151923]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white border border-white/10 shadow-sm">
                      {card.badge}
                    </div>

                    <div className="absolute bottom-2.5 right-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-mono flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{card.turnaround}</span>
                    </div>

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center space-x-1.5">
                        <ZoomIn className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>View Full Flyer</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-heading font-black text-[#151923] group-hover:text-[#F97316] transition-colors line-clamp-1">
                        {card.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        {card.telugu}
                      </span>
                      <p className="text-[11px] text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {card.specs}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-xl sm:text-2xl font-black text-[#151923] font-mono">
                            {card.rate}
                          </span>
                          <span className="text-[10px] text-slate-500 block">
                            {card.unit}
                          </span>
                        </div>
                      </div>

                      <a
                        href={getWhatsAppLink(card.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Rate Tables */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#151923]">
              Detailed Size & Specifications Rate Tables
            </h3>
            <p className="text-xs sm:text-sm text-[#667085]">
              Full workshop breakdown with sizes, minimum orders, and finishing add-ons.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
                <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-800">
                  No items match your search &ldquo;{searchTerm}&rdquo;
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try searching for Mugs, Badges, Frames, or Pillows.
                </p>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <div
                  key={sec.key}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <div className="bg-brand-navy text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
                    <h3 className="font-bold text-sm sm:text-base tracking-wide flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-brand-gold" />
                      <span>{sec.title}</span>
                    </h3>
                    <span className="text-xs text-slate-300 font-mono">Direct Workshop Rates</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                          <th className="py-3.5 px-6">Service / Product Item</th>
                          <th className="py-3.5 px-6">Direct Rate</th>
                          <th className="py-3.5 px-6">Unit</th>
                          <th className="py-3.5 px-6 hidden sm:table-cell">Minimum Order</th>
                          <th className="py-3.5 px-6 hidden md:table-cell">Recommended For</th>
                          <th className="py-3.5 px-4 text-right">Inquire</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {sec.rows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-3.5 px-6 font-semibold text-slate-900">
                              <div>{row.item}</div>
                              {row.teluguItem && (
                                <div className="text-[11px] text-brand-red font-medium mt-0.5">
                                  {row.teluguItem}
                                </div>
                              )}
                            </td>
                            <td className="py-3.5 px-6 font-mono font-bold text-brand-royal text-sm sm:text-base">
                              {row.rate}
                            </td>
                            <td className="py-3.5 px-6 text-slate-600 text-xs">{row.unit}</td>
                            <td className="py-3.5 px-6 text-slate-500 font-mono text-xs hidden sm:table-cell">
                              {row.minOrder || "None"}
                            </td>
                            <td className="py-3.5 px-6 text-slate-600 text-xs hidden md:table-cell max-w-xs">
                              {row.recommendedFor || "General commercial usage"}
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <a
                                href={getWhatsAppLink(
                                  `Hello City Grafix, I want to inquire about ${row.item} (${row.rate} ${row.unit}). Please confirm availability.`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-bold px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5 mr-1 fill-emerald-600" />
                                <span>Order</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Commercial Printing Direct Quotation & Bajaj Finance Easy EMI Banner */}
        <div className="bg-gradient-to-br from-brand-navy via-[#0A192F] to-slate-950 rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-brand-red text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <span>Commercial & Industrial Printing</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-amber-400 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  <span>First Time in India • 0% EMI</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Looking for Star Flex, 3D LED Signage, Jumbo Xerox or Visiting Cards?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Commercial advertising and engineering blueprints are custom manufactured to your required dimensions, materials, and quantities.
                <strong className="text-white"> Now available on Easy Installments:</strong> Pay comfortably in monthly EMIs with Bajaj Finance!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getWhatsAppLink(
                  "Hello City Grafix, I need a quotation for commercial printing (Flex Banners / 3D Signage / Jumbo Xerox / Visiting Cards):"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Commercial Quote</span>
              </a>
              <Link
                href="/#emi-finance"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-4 py-3 rounded-xl transition-all shadow-md flex items-center space-x-1.5"
              >
                <span>Check 0% EMI Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Bajaj Finance Feature Strip */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Instant Credit</div>
              <div className="text-sm sm:text-base font-black text-white mt-0.5">₹5,000 – ₹50,000</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Down Payment</div>
              <div className="text-sm sm:text-base font-black text-emerald-400 mt-0.5">From Just ₹1,000</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Interest Charges</div>
              <div className="text-sm sm:text-base font-black text-amber-400 mt-0.5">0% No Interest*</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase">Finance Partner</div>
              <div className="text-sm sm:text-base font-black text-cyan-400 mt-0.5">Bajaj Finance</div>
            </div>
          </div>
        </div>

        {/* Pricing Policies Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7 text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="font-extrabold text-amber-950 flex items-center space-x-2 text-sm">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Official City Grafix Gifting & Delivery Notes:</span>
          </div>
          <p>
            • All gift orders are manufactured on-demand in our Kadapa workshop with same-day turnaround (1 to 2 hours for mugs, pillows, badges & frames).
          </p>
          <p>
            • Follow our official Instagram ID <span className="font-bold text-purple-900">@citygrafix1</span> to claim an instant Flat 10% discount on all photo frame sizes (A4 to 24×36).
          </p>
          <p>
            • Free basic photo pre-flight, contrast enhancement, and layout centering before printing on all personalized gift orders.
          </p>
        </div>
      </div>

      {/* Lightbox / High-Resolution Product Flyer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-heading font-black text-slate-900 text-sm sm:text-base">
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full aspect-square bg-slate-100 p-2 overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Footer Action */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Official City Grafix Workshop Catalog
              </span>
              <a
                href={getWhatsAppLink(selectedImage.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center space-x-1.5 shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order this item on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
