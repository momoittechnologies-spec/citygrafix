import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, ShieldCheck, Clock, MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

interface PopularProduct {
  id: string;
  name: string;
  telugu: string;
  category: string;
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
  {
    id: "star-flex",
    name: "Star Flex Banners (340+ GSM)",
    telugu: "స్టార్ ఫ్లెక్స్ బ్యానర్లు",
    category: "Flex & Hoardings",
    image: "/images/star-flex-banner.jpg",
    rate: "₹18",
    unit: "per sq. ft.",
    badge: "Most Popular",
    specs: "Japanese UV outdoor ink, heavy wind tolerance, double brass eyelets",
    turnaround: "2 to 4 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Star Flex Banners (₹18/sq.ft). Here are my dimensions:",
    detailUrl: "/services/flex-banner-printing-kadapa",
    variants: [
      { label: "Normal Flex", price: "₹12/sq.ft" },
      { label: "Star Flex", price: "₹18/sq.ft" },
      { label: "Backlit Glow", price: "₹35/sq.ft" },
    ],
  },
  {
    id: "photo-frame",
    name: "Custom Wall Photo Frames",
    telugu: "కస్టమ్ ఫోటో ఫ్రేమ్స్",
    category: "Framing Studio",
    image: "/images/gifting-photo-frames-price-chart.jpg",
    rate: "₹600",
    unit: "A4 size (10% IG Discount)",
    badge: "10% IG Discount",
    specs: "Synthetic gold & black beading with high-density moisture-resistant backboard",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Custom Photo Frames with the 10% Instagram Discount:",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Glossy Sheet", price: "Vibrant" },
      { label: "Matty Sheet", price: "Non-Reflective" },
      { label: "Glitter Sheet", price: "+₹50" },
      { label: "A4 / 8x12", price: "₹600" },
      { label: "12x18", price: "₹1,200" },
      { label: "16x24", price: "₹2,000" },
    ],
  },
  {
    id: "photo-mugs",
    name: "Ceramic Photo Mugs & Magic Reveal",
    telugu: "సిరామిక్ ఫోటో మగ్గులు",
    category: "Personalized Gifting",
    image: "/images/gifting-custom-photo-mugs.jpg",
    rate: "₹350",
    unit: "starting per mug",
    badge: "Same-Day Gift",
    specs: "Permanent HD sublimation print, 100% dishwasher & microwave safe ceramic",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Custom Ceramic Photo Mugs:",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Plain Ceramic", price: "₹350" },
      { label: "Inner Colour", price: "₹450" },
      { label: "Heart Handle", price: "₹500" },
      { label: "Magic Reveal", price: "₹550" },
    ],
  },
  {
    id: "round-badges",
    name: "Custom Round Badges (Pin & Magnetic)",
    telugu: "కస్టమ్ రౌండ్ బ్యాడ్జెస్",
    category: "Promotional Badges",
    image: "/images/round-badges-pin-magnetic.jpg",
    rate: "₹25",
    unit: "starting per badge",
    badge: "Same-Day Dispatch",
    specs: "44mm & 58mm diameter with rustproof metal back, high-gloss mylar film, pin & magnetic clasps",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Custom Round Badges (Pin / Magnetic):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Pin 44mm", price: "₹25" },
      { label: "Pin 58mm", price: "₹30" },
      { label: "Magnetic 44mm", price: "₹55" },
      { label: "Magnetic 58mm", price: "₹65" },
    ],
  },
  {
    id: "photo-pillows",
    name: "Heart & Square Photo Pillows",
    telugu: "ఫోటో పిల్లో & కుషన్స్",
    category: "Personalized Gifting",
    image: "/images/gifting-photo-pillows.jpg",
    rate: "₹500",
    unit: "starting per piece",
    badge: "Luxury Plush",
    specs: "Ultra-soft micro-poly fill with zip closure, washproof HD photo prints",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order a Custom Photo Pillow:",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Standard Plush", price: "₹500" },
      { label: "Fancy Border", price: "₹600" },
      { label: "Magic Sequins", price: "₹750" },
      { label: "Glowing LED", price: "₹800" },
    ],
  },
  {
    id: "dtf-tshirts",
    name: "Custom DTF T-Shirts & Caps",
    telugu: "డీటీఎఫ్ టీ-షర్ట్ ప్రింటింగ్",
    category: "Custom Apparel",
    image: "/images/gifting-tshirts-dtf-printing.jpg",
    rate: "₹200",
    unit: "print only / ₹400 w/ tee",
    badge: "100% Washproof",
    specs: "Commercial 6-color digital transfer with melt adhesive, stretch & fade proof",
    turnaround: "Same-Day Dispatch",
    whatsappMessage: "Hello City Grafix, I want to order Custom DTF T-Shirts & Caps:",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Print Only", price: "₹200" },
      { label: "Sublimation", price: "₹400" },
      { label: "DTF Tee", price: "₹400" },
      { label: "Collar Polo", price: "₹500" },
      { label: "Printed Cap", price: "₹300" },
    ],
  },
  {
    id: "a0-cad",
    name: "A0 Jumbo Xerox & CAD Blueprints",
    telugu: "A0 జంబో జిరాక్స్ & క్యాడ్ ప్లాన్స్",
    category: "Engineering Plans",
    image: "/images/a0-jumbo-xerox.jpg",
    rate: "₹25",
    unit: "starting per sheet",
    badge: "15-Min Delivery",
    specs: "1200 DPI vector plotting on 90 GSM bond paper, DTCP & KUDA compliant",
    turnaround: "15 to 30 Minutes",
    whatsappMessage: "Hello City Grafix, I need A0 Jumbo Xerox / CAD Blueprint plotting in Kadapa:",
    detailUrl: "/services/jumbo-xerox-kadapa",
    variants: [
      { label: "A0 B&W CAD", price: "₹25" },
      { label: "A0 Color Plot", price: "₹90" },
      { label: "Tracing Film", price: "₹140" },
    ],
  },
  {
    id: "visiting-cards",
    name: "350 GSM Velvet Visiting Cards",
    telugu: "1000 విజిటింగ్ కార్డ్స్",
    category: "Commercial Offset",
    image: "/images/visiting-cards-offset.jpg",
    rate: "₹750",
    unit: "wholesale pack of 1000",
    badge: "Wholesale Pack",
    specs: "Matte velvet lamination, raised Spot UV gloss highlights on heavy cardstock",
    turnaround: "24 to 48 Hours",
    whatsappMessage: "Hello City Grafix, I want to order 1000 Visiting Cards wholesale pack (₹750):",
    detailUrl: "/services/visiting-cards-bill-books-pamphlets-kadapa",
    variants: [
      { label: "Standard Matte", price: "₹550" },
      { label: "350 GSM Velvet", price: "₹750" },
      { label: "Raised Spot UV", price: "₹1,100" },
    ],
  },
  {
    id: "3d-led-signage",
    name: "3D Acrylic Letters & LED Glow Boards",
    telugu: "3D అక్రిలిక్ లెటర్స్",
    category: "Architectural Signage",
    image: "/images/3d-led-signage-storefront.jpg",
    rate: "₹45",
    unit: "per inch letter height",
    badge: "3-Yr Assurance",
    specs: "Laser-cut cast acrylic, Samsung IP67 waterproof LEDs, 48-hr burn-in test",
    turnaround: "2 to 4 Days Turnkey",
    whatsappMessage: "Hello City Grafix, I need a quotation for 3D Acrylic LED Signboard fabrication:",
    detailUrl: "/services/3d-led-sign-boards-kadapa",
    variants: [
      { label: "Frontlit Acrylic", price: "₹45/in" },
      { label: "Backlit Halo", price: "₹55/in" },
      { label: "Gold Titanium", price: "₹75/in" },
    ],
  },
];

const ADDITIONAL_RATES = [
  { name: "Normal Flex Banner", rate: "₹12 / sq.ft", badge: "Event Grade" },
  { name: "Waterproof Vinyl Stickers", rate: "₹38 / sq.ft", badge: "Self-Adhesive" },
  { name: "Sunboard Rigid Displays", rate: "₹65 / sq.ft", badge: "Foam Sheet" },
  { name: "KUDA Approved Layout Maps", rate: "₹90 / sheet", badge: "Continuous Roll" },
  { name: "Duplicate NCR Bill Books", rate: "₹850 / 5 books", badge: "Numbered" },
  { name: "3-Sided Auto Publicity Flex", rate: "Custom Package", badge: "DTS Audio" },
];

export default function PriceHighlights() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative" id="popular-products">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2.5">
              <Tag className="w-3.5 h-3.5 text-brand-navy" />
              <span>Direct Workshop Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-navy tracking-tight">
              Popular Products & Direct Rates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base xl:text-lg mt-2 max-w-2xl leading-relaxed">
              Explore Kadapa&apos;s most requested commercial printing items, fabricated directly on in-house machinery with transparent wholesale pricing.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 shrink-0">
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to get a custom wholesale price quote for printing:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Request WhatsApp Quote</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-navy border border-slate-300 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Full Rate Card →</span>
            </Link>
          </div>
        </div>

        {/* Popular Products Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Badges */}
                <div className="absolute top-3 left-3 bg-brand-navy/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-gold border border-white/10 shadow-sm">
                  {product.badge}
                </div>

                <div className="absolute bottom-2.5 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-mono flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>{product.turnaround}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-royal tracking-wider block">
                    {product.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-brand-navy mt-1 group-hover:text-brand-royal transition-colors line-clamp-1">
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
                            <span className="font-bold text-brand-navy border-l border-slate-300 pl-1">
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
                      <span className="text-xl sm:text-2xl font-black text-brand-navy font-mono">
                        {product.rate}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {product.unit}
                      </span>
                    </div>

                    {product.detailUrl && (
                      <Link
                        href={product.detailUrl}
                        className="text-xs text-brand-royal font-bold hover:underline inline-flex items-center space-x-0.5"
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
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Rate Ticker for Additional Printing Services */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Additional Workshop Rate Highlights:
              </span>
            </div>
            <Link
              href="/pricing"
              className="text-xs font-bold text-brand-royal hover:underline"
            >
              View Complete Itemized Rate Card (All 12 Verticals) →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ADDITIONAL_RATES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-xl border border-slate-200 text-center flex flex-col justify-between"
              >
                <span className="text-[10px] text-slate-400 font-bold uppercase block truncate">
                  {item.badge}
                </span>
                <span className="text-xs font-bold text-brand-navy mt-1 truncate">
                  {item.name}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700 mt-1 block">
                  {item.rate}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            * All prices reflect direct in-house production in Kadapa. Finishing add-ons, quantity discounts, and custom framing options available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
