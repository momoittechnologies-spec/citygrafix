"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, Sparkles, ZoomIn, X, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

interface PopularProduct {
  id: string;
  name: string;
  telugu: string;
  category: string;
  group: "gifts" | "commercial";
  image: string;
  rate: string;
  unit: string;
  badge: string;
  specs: string;
  turnaround: string;
  whatsappMessage: string;
  detailUrl?: string;
  variants?: { label: string; price?: string }[];
}

const POPULAR_PRODUCTS: PopularProduct[] = [
  // 1. Plain White Ceramic Mug
  {
    id: "plain-white-mug",
    name: "Plain White Ceramic Photo Mug",
    telugu: "ప్లెయిన్ వైట్ సిరామిక్ కప్",
    category: "Personalized Gifting",
    group: "gifts",
    image: "/images/plain-mug-sublimation.jpg",
    rate: "₹350",
    unit: "per mug (AAA Grade)",
    badge: "Ready in 1-2 Hrs",
    specs: "High-grade AAA pure white sublimation ceramic mug. 100% microwave safe, durable glossy finish, and permanent HD photo print.",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Plain White Ceramic Photo Mug (₹350):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "AAA Ceramic", price: "White" },
      { label: "Microwave Safe", price: "100%" },
      { label: "Glossy Finish", price: "HD Print" },
      { label: "Turnaround", price: "1-2 Hrs" },
    ],
  },

  // 2. Inner Colour Ceramic Mug
  {
    id: "inner-colour-mug",
    name: "Inner Colour Coffee Mug (6+ Colours)",
    telugu: "ఇన్నర్ కలర్ కాఫీ కప్ (6+ రంగులు)",
    category: "Personalized Gifting",
    group: "gifts",
    image: "/images/inner-colour-mug.jpg",
    rate: "₹450",
    unit: "per mug (multi-colour)",
    badge: "Vibrant Dual-Tone",
    specs: "Premium white exterior with vibrant interior & handle colours: Red, Yellow, Blue, Pink, Black, and Green. Personalize with photos, names, or corporate logos.",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Inner Colour Ceramic Mug (₹450):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "6+ Colours", price: "Vibrant" },
      { label: "Photo / Name", price: "Included" },
      { label: "Dual-Tone", price: "Ceramic" },
      { label: "Turnaround", price: "1-2 Hrs" },
    ],
  },

  // 3. Heart Handle Couple Mug
  {
    id: "heart-handle-mug",
    name: "Heart Handle Couple Coffee Mug",
    telugu: "హార్ట్ హ్యాండిల్ కపుల్ కప్",
    category: "Personalized Gifting",
    group: "gifts",
    image: "/images/heart-handle-mug.jpg",
    rate: "₹500",
    unit: "per mug (romantic gift)",
    badge: "Romantic Gift Choice",
    specs: "Sculpted heart-shaped handle available in multiple color combinations (Red, Blue, Black, Yellow, Pink, Green). Ideal for anniversaries, birthdays & Valentine gifts.",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Heart Handle Couple Mug (₹500):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Heart Handle", price: "Sculpted" },
      { label: "Multi-Colour", price: "Options" },
      { label: "Anniversary", price: "Gift Choice" },
      { label: "Turnaround", price: "1-2 Hrs" },
    ],
  },

  // 4. Personalized Magic Mug
  {
    id: "magic-heat-reveal-mug",
    name: "Personalized Magic Heat Reveal Mug",
    telugu: "మ్యాజిక్ హీట్ రివీల్ కప్",
    category: "Personalized Gifting",
    group: "gifts",
    image: "/images/magic-heat-reveal-mug.jpg",
    rate: "₹550",
    unit: "per mug (heat activated)",
    badge: "Heat Activated Reveal",
    specs: "Solid gloss black when cold; pouring hot coffee, tea, or water magically reveals your printed photo and heartfelt message within seconds!",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Personalized Magic Heat Reveal Mug (₹550):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Cold State", price: "Black" },
      { label: "Hot Water", price: "Reveals Photo" },
      { label: "Thermosensitive", price: "HD Quality" },
      { label: "Turnaround", price: "1-2 Hrs" },
    ],
  },

  // 5. Round Badges (Pin & Magnetic)
  {
    id: "round-badges",
    name: "Custom Printed Round Badges",
    telugu: "కస్టమ్ రౌండ్ బ్యాడ్జెస్ (పిన్ & మాగ్నెటిక్)",
    category: "Personalized Gifting",
    group: "gifts",
    image: "/images/round-badges-pin-magnetic-full.jpg",
    rate: "From ₹25",
    unit: "Pin from ₹25 • Magnetic from ₹55",
    badge: "Pin & Magnetic Options",
    specs: "High quality custom printed badges for schools, offices, clubs, and campaigns. Available in 44mm & 58mm with pin clasps or dual neodymium magnetic mounts.",
    turnaround: "1 to 2 Hours / Same-Day",
    whatsappMessage: "Hello City Grafix, I want to order Custom Round Badges (Pin / Magnetic):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "44mm Pin", price: "₹25" },
      { label: "58mm Pin", price: "₹30" },
      { label: "44mm Magnetic", price: "₹55" },
      { label: "58mm Magnetic", price: "₹65" },
    ],
  },

  // 6. Custom Wall Photo Frames
  {
    id: "photo-frame",
    name: "Custom Wall Photo Frames",
    telugu: "కస్టమ్ ఫోటో ఫ్రేమ్స్",
    category: "Framing Studio",
    group: "gifts",
    image: "/images/photo-frames-price-chart-full.jpg",
    rate: "₹600",
    unit: "A4 size (10% IG Discount)",
    badge: "Flat 10% IG Discount",
    specs: "Synthetic gold & black beading with moisture-resistant backing. Available in Glossy, Matty, and Glitter Sheet finishes from A4 up to 24×36 mega living-room wall portraits.",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Custom Photo Frames with the 10% Instagram Discount:",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "A4 / 8x12", price: "₹600" },
      { label: "12x18", price: "₹1,200" },
      { label: "16x24", price: "₹2,000" },
      { label: "Glitter Sheet", price: "+₹50" },
    ],
  },

  // 7. Heart & Square Photo Pillows
  {
    id: "photo-pillows",
    name: "Heart & Square Photo Pillows",
    telugu: "ఫోటో పిల్లో & కుషన్స్",
    category: "Personalized Gifting",
    group: "gifts",
    image: "/images/photo-pillows-price-chart-full.jpg",
    rate: "₹500",
    unit: "starting per piece",
    badge: "Luxury Plush",
    specs: "Ultra-soft micro-poly fill with zip closure and washproof HD photo prints. Available in Standard, Fancy Border, Magic Reversible Sequins, and Glowing LED lights.",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order a Custom Photo Pillow (₹500):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Standard Plush", price: "₹500" },
      { label: "Fancy Border", price: "₹600" },
      { label: "Magic Sequins", price: "₹750" },
      { label: "Glowing LED", price: "₹800" },
    ],
  },

  // 8. Custom DTF T-Shirts & Caps
  {
    id: "dtf-tshirts",
    name: "Custom DTF T-Shirts & Caps",
    telugu: "డీటీఎఫ్ టీ-షర్ట్ ప్రింటింగ్",
    category: "Custom Apparel",
    group: "gifts",
    image: "/images/gifting-tshirts-dtf-printing.jpg",
    rate: "₹200",
    unit: "print only / ₹400 w/ tee",
    badge: "100% Washproof",
    specs: "Commercial digital heat transfer printing. Bring your own fabric for ₹200 or choose our ready round neck cotton and executive collar polo T-shirts.",
    turnaround: "Same-Day Dispatch",
    whatsappMessage: "Hello City Grafix, I want to order Custom DTF T-Shirts & Caps:",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Print Only", price: "₹200" },
      { label: "Sublimation", price: "₹400" },
      { label: "DTF Tee", price: "₹400" },
      { label: "Collar Polo", price: "₹500" },
    ],
  },

  // 9. Star Flex Banners & Hoardings (Commercial)
  {
    id: "flex-banners",
    name: "Star Flex Banners & Hoardings",
    telugu: "స్టార్ ఫ్లెక్స్ బ్యానర్లు & హోర్డింగ్స్",
    category: "Outdoor Advertising",
    group: "commercial",
    image: "/images/star-flex-banner.jpg",
    rate: "Custom Quote",
    unit: "per dimension",
    badge: "340+ GSM Heavy Duty",
    specs: "UV-cured Japanese eco-solvent inks with solid brass ring eyelets and wooden beeding for all weather resistance.",
    turnaround: "2 to 4 Hours",
    whatsappMessage: "Hello City Grafix, I need Star Flex Banner printing in Kadapa. Please calculate quote for my dimensions:",
    detailUrl: "/services/flex-banner-printing-kadapa",
    variants: [
      { label: "340+ GSM", price: "Star Flex" },
      { label: "Event Grade", price: "Normal Flex" },
      { label: "Eyelets", price: "Included" },
      { label: "0% EMI", price: "Available" },
    ],
  },

  // 10. 3D Acrylic LED Signs (Commercial)
  {
    id: "led-signage",
    name: "3D Acrylic LED Glow Sign Boards",
    telugu: "3D అక్రిలిక్ ఎల్ఈడీ బోర్డ్స్",
    category: "Architectural Signage",
    group: "commercial",
    image: "/images/3d-led-signage-storefront.jpg",
    rate: "Custom Quote",
    unit: "turnkey fabrication",
    badge: "0% EMI on Bajaj",
    specs: "Precision CNC laser-cut acrylic letters with Samsung IP67 waterproof LED modules, solid aluminum returns, and MS iron frames.",
    turnaround: "2 to 4 Days Turnkey",
    whatsappMessage: "Hello City Grafix, I need a quotation for 3D Acrylic LED Signboard for my shop:",
    detailUrl: "/services/3d-led-sign-boards-kadapa",
    variants: [
      { label: "Frontlit", price: "Cast Acrylic" },
      { label: "Backlit Halo", price: "Titanium" },
      { label: "Samsung LED", price: "IP67" },
      { label: "Bajaj Finance", price: "0% EMI" },
    ],
  },

  // 11. 350 GSM Velvet Visiting Cards (Commercial)
  {
    id: "visiting-cards",
    name: "350 GSM Velvet Visiting Cards",
    telugu: "ప్రీమియం విజిటింగ్ కార్డ్స్",
    category: "Commercial Offset",
    group: "commercial",
    image: "/images/visiting-cards-offset.jpg",
    rate: "Wholesale Quote",
    unit: "1000 pack",
    badge: "Wholesale Value",
    specs: "High-grade 350 GSM imported artboard with velvet-matte lamination and raised Spot UV gloss highlights.",
    turnaround: "24 to 48 Hours",
    whatsappMessage: "Hello City Grafix, I want to order 350 GSM Visiting Cards / Bill Books:",
    detailUrl: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    variants: [
      { label: "Matte Lamination", price: "Wholesale" },
      { label: "Spot UV Gloss", price: "Executive" },
      { label: "Duplicate NCR", price: "Bill Books" },
      { label: "Fast Dispatch", price: "24-48 Hrs" },
    ],
  },

  // 12. Vinyl Stickers & Sunboards (Commercial)
  {
    id: "vinyl-stickers",
    name: "Vinyl Stickers & Display Sunboards",
    telugu: "వినైల్ స్టిక్కర్స్ & సన్‌బోర్డ్స్",
    category: "Retail Branding",
    group: "commercial",
    image: "/images/stickers-boards-commercial.jpg",
    rate: "Custom Quote",
    unit: "per sq.ft / roll",
    badge: "Waterproof Adhesive",
    specs: "High-resolution self-adhesive vinyl decals and 3mm/5mm rigid PVC sunboard prints for clinic walls, menus, and glass facades.",
    turnaround: "Same-Day / 24 Hours",
    whatsappMessage: "Hello City Grafix, I need Vinyl Stickers / Sunboard printing in Kadapa:",
    detailUrl: "/services/flex-banner-printing-kadapa",
    variants: [
      { label: "Vinyl Decals", price: "Waterproof" },
      { label: "One-Way Vision", price: "Glass Film" },
      { label: "3mm Sunboard", price: "Rigid Foam" },
      { label: "Gloss/Matte", price: "Lamination" },
    ],
  },
];

export default function PriceHighlights() {
  const [activeFilter, setActiveFilter] = useState<"all" | "gifts" | "commercial">("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; whatsappMsg: string } | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return POPULAR_PRODUCTS;
    return POPULAR_PRODUCTS.filter((p) => p.group === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative" id="popular-products">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-orange-100 text-[#F97316] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2.5 border border-orange-200">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Direct Workshop Production</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-black text-[#151923] tracking-tight">
              Popular Products & Printing Solutions
            </h2>
            <p className="text-[#667085] text-sm sm:text-base xl:text-lg mt-2 max-w-2xl leading-relaxed">
              Explore authentic personalized gifts, custom ceramic mugs, round badges, photo frames, and heavy-duty commercial advertising prints made right in Kadapa.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 shrink-0">
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to inquire about your popular printing products:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm font-bold bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-xl transition-all shadow-md shadow-orange-500/20 space-x-1.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Enquiry</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-[#151923] border border-[#E5E7EB] px-4 py-2.5 rounded-xl hover:bg-[#F4F5F7] transition-colors"
            >
              <span>Gifts Rate Card →</span>
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === "all"
                ? "bg-[#151923] text-white shadow-sm"
                : "bg-[#F4F5F7] text-[#667085] hover:bg-slate-200 hover:text-[#151923]"
            }`}
          >
            All Products ({POPULAR_PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveFilter("gifts")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === "gifts"
                ? "bg-[#F97316] text-white shadow-sm"
                : "bg-[#F4F5F7] text-[#667085] hover:bg-slate-200 hover:text-[#151923]"
            }`}
          >
            Personalized Gifts & Badges (8)
          </button>
          <button
            onClick={() => setActiveFilter("commercial")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === "commercial"
                ? "bg-[#151923] text-white shadow-sm"
                : "bg-[#F4F5F7] text-[#667085] hover:bg-slate-200 hover:text-[#151923]"
            }`}
          >
            Commercial Printing & Signage (4)
          </button>
        </div>

        {/* Popular Products Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Visual Container (Aspect-Square With Object-Contain to Preserve Entire Graphic Uncropped) */}
              <div
                className="relative aspect-square w-full overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-2 cursor-pointer group/img"
                onClick={() =>
                  setSelectedImage({
                    src: product.image,
                    title: product.name,
                    whatsappMsg: product.whatsappMessage,
                  })
                }
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading={idx < 4 ? "eager" : "lazy"}
                  priority={idx < 2}
                  className="object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 bg-[#151923]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white border border-white/10 shadow-sm">
                  {product.badge}
                </div>

                <div className="absolute bottom-2.5 right-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-mono flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>{product.turnaround}</span>
                </div>

                {/* Hover Zoom Prompt */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center space-x-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>View Full Flyer</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#F97316] tracking-wider block">
                    {product.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-heading font-black text-[#151923] mt-1 group-hover:text-[#F97316] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                    {product.telugu}
                  </span>

                  {/* Structured Variants Pills */}
                  {product.variants && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {product.variants.map((v, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center space-x-1 text-[10px] bg-slate-50 hover:bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 transition-colors"
                        >
                          <span className="font-medium">{v.label}</span>
                          {v.price && (
                            <span className="font-bold text-[#151923] border-l border-slate-300 pl-1">
                              {v.price}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-[11px] text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.specs}
                  </p>
                </div>

                {/* Price Display & Actions */}
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-[#151923] font-mono">
                        {product.rate}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {product.unit}
                      </span>
                    </div>

                    {product.detailUrl && (
                      <Link
                        href={product.detailUrl}
                        className="text-xs text-[#F97316] font-bold hover:underline inline-flex items-center space-x-0.5"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>

                  <a
                    href={getWhatsAppLink(product.whatsappMessage)}
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

        {/* Commercial Printing & Signage Quotation Notice */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-[#151923] to-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full inline-block">
                Commercial & Architectural Printing
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <span>⚡ 0% EMI on Bajaj Finance</span>
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-black text-white">
              Looking for Star Flex, 3D LED Signboards, Jumbo Xerox or Visiting Cards?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Commercial advertising and engineering CAD prints are custom quoted based on dimensions and specifications.
              <strong className="text-amber-400"> Now available on Bajaj Finance:</strong> Get instant credit from ₹5,000 to ₹50,000 with down payment starting from just ₹1,000 & zero interest charges!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/emi-finance"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center space-x-1.5"
            >
              <span>Check 0% EMI Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppLink("Hello City Grafix, I need a quotation for commercial printing (Flex Banners / 3D Signage / Jumbo Xerox / Visiting Cards):")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-md shadow-orange-950/40 border-t border-amber-200/40 flex items-center space-x-1.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get WhatsApp Quote</span>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#667085]">
            * All personalized gifts are manufactured in-house in Kadapa with same-day turnaround (1 to 2 hours). Follow @citygrafix1 on Instagram for Flat 10% Off Photo Frames!
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
    </section>
  );
}
