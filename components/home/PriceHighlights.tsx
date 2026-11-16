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
    name: "Ceramic Photo Mugs (Plain White)",
    telugu: "సిరామిక్ ఫోటో మగ్గులు",
    category: "Personalized Gifting",
    image: "/images/gifting-plain-white-mug.jpg",
    rate: "₹350",
    unit: "starting per mug",
    badge: "Same-Day Gift",
    specs: "Permanent HD sublimation print, 100% dishwasher & microwave safe ceramic",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Plain White Ceramic Photo Mugs (₹350):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Plain Ceramic", price: "₹350" },
      { label: "AAA Grade", price: "Pure White" },
      { label: "Microwave Safe", price: "Permanent" },
      { label: "Gift Packing", price: "+₹50" },
    ],
  },
  {
    id: "inner-colour-mug",
    name: "Inner Colour Ceramic Mugs (9 Tones)",
    telugu: "ఇన్నర్ కలర్ కాఫీ కప్",
    category: "Personalized Gifting",
    image: "/images/gifting-inner-colour-mug.jpg",
    rate: "₹450",
    unit: "per mug",
    badge: "9 Colour Tones",
    specs: "White exterior with vibrant Red, Blue, Yellow, Pink, Green, Black, Orange interior",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Inner Colour Ceramic Coffee Mugs (₹450):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Red Interior", price: "₹450" },
      { label: "Blue Interior", price: "₹450" },
      { label: "Yellow / Green", price: "₹450" },
      { label: "Black / Pink", price: "₹450" },
    ],
  },
  {
    id: "heart-handle-mug",
    name: "Heart Handle Romantic Couple Coffee Mugs",
    telugu: "హార్ట్ హ్యాండిల్ కపుల్ కప్",
    category: "Personalized Gifting",
    image: "/images/gifting-heart-handle-mug.jpg",
    rate: "₹500",
    unit: "per couple mug",
    badge: "Keepsake Mug",
    specs: "Sculpted heart-shaped handle in multi-color options, anniversary & Valentine special",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Heart Handle Couple Mugs (₹500):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Red Heart", price: "₹500" },
      { label: "Black Heart", price: "₹500" },
      { label: "Blue / Yellow", price: "₹500" },
      { label: "Gift Packing", price: "+₹50" },
    ],
  },
  {
    id: "magic-mug",
    name: "Personalized Magic Heat Reveal Ceramic Mug",
    telugu: "మ్యాజిక్ హీట్ రివీల్ కప్",
    category: "Personalized Gifting",
    image: "/images/gifting-magic-mug-heat-reveal.jpg",
    rate: "₹550",
    unit: "per magic mug",
    badge: "Hot Water Reveal",
    specs: "Pitch black when cold; pouring hot coffee/tea magically dissolves coating to reveal HD photo",
    turnaround: "1 to 2 Hours",
    whatsappMessage: "Hello City Grafix, I want to order Personalized Magic Heat Reveal Mugs (₹550):",
    detailUrl: "/services/personalized-gifts-framing-kadapa",
    variants: [
      { label: "Cold: Pitch Black", price: "Hidden" },
      { label: "Hot: HD Photo", price: "Revealed" },
      { label: "Microwave Safe", price: "₹550" },
      { label: "Gift Packing", price: "+₹50" },
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
];

export default function PriceHighlights() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative" id="popular-products">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2.5 border border-purple-100">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Personalized Gifting Studio • Direct Workshop</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-navy tracking-tight">
              Personalized Gifts & Custom Merchandise
            </h2>
            <p className="text-slate-600 text-sm sm:text-base xl:text-lg mt-2 max-w-2xl leading-relaxed">
              Explore Kadapa&apos;s favorite custom gifting items, fabricated in our workshop with transparent pricing. High-definition prints ready in 1 to 2 hours.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 shrink-0">
            <a
              href={getWhatsAppLink("Hello City Grafix, I want to order personalized gifts in Kadapa:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Gift Order</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-navy border border-slate-300 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Gifts Rate Card →</span>
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

        {/* Commercial Printing & Signage Quotation Notice */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 border border-red-100 px-2.5 py-0.5 rounded inline-block">
              Commercial & Architectural Printing
            </span>
            <h3 className="text-lg sm:text-xl font-black text-brand-navy">
              Looking for Star Flex, 3D LED Signboards, Jumbo Xerox or Visiting Cards?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Commercial advertising and engineering CAD prints are custom quoted based on dimensions, materials, and volume. Contact our Kadapa workshop for an instant factory quotation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink("Hello City Grafix, I need a quotation for commercial printing (Flex Banners / 3D Signage / Jumbo Xerox / Visiting Cards):")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy hover:bg-brand-navyLight text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors shadow-sm flex items-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>Get Commercial Quote</span>
            </a>
            <Link
              href="/services"
              className="border border-slate-300 text-slate-700 hover:bg-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              <span>Explore All Services →</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            * All personalized gifts are manufactured in-house in Kadapa with same-day turnaround (1 to 2 hours). Follow @citygrafix1 on Instagram for Flat 10% Off Photo Frames!
          </p>
        </div>
      </div>
    </section>
  );
}
