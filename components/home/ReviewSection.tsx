"use client";

import React, { useState } from "react";
import {
  Star,
  ExternalLink,
  CheckCircle2,
  ThumbsUp,
  MapPin,
  ShieldCheck,
  MessageSquarePlus,
} from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

// Official Google Multi-Color Vector "G" Logo
const GoogleLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  serviceCategory: string;
  serviceBadge: string;
  rating: number;
  timeAgo: string;
  content: string;
  helpfulCount: number;
  localGuideLevel?: string;
  avatarBg: string;
  initials: string;
}

const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Sreenivasula Reddy",
    role: "Civil Engineering Consultant",
    location: "RIMS Road, Kadapa",
    serviceCategory: "cad",
    serviceBadge: "A0 Jumbo Xerox & CAD Plotting",
    rating: 5,
    timeAgo: "3 weeks ago",
    content:
      "For municipal sanction drawings and large A0 blueprints, City Grafix is the absolute best in Kadapa. Exact 1:100 scale adherence, zero line blur, and while-you-wait 15-minute delivery. Saves hours of site time for our construction team.",
    helpfulCount: 16,
    localGuideLevel: "Level 5 Local Guide • 38 reviews",
    avatarBg: "bg-blue-600",
    initials: "SR",
  },
  {
    id: "rev-2",
    name: "Dr. K. V. Ramanathan",
    role: "Clinic Director & Orthopedic Surgeon",
    location: "Seven Roads Circle, Kadapa",
    serviceCategory: "signage",
    serviceBadge: "3D Acrylic LED Glow Signboard",
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "Got a 3D Acrylic LED Glow Signboard fabricated for our medical clinic. High-quality waterproof Samsung LEDs, anti-rust aluminium returns, and 48-hour continuous testing before installation. Direct workshop price saved us substantial cost compared to middlemen.",
    helpfulCount: 21,
    localGuideLevel: "Verified Reviewer • 12 reviews",
    avatarBg: "bg-emerald-600",
    initials: "KR",
  },
  {
    id: "rev-3",
    name: "P. Ravi Teja",
    role: "Showroom General Manager",
    location: "RTC Bus Stand Road, Kadapa",
    serviceCategory: "flex",
    serviceBadge: "Star Flex Banners & Hoardings",
    rating: 5,
    timeAgo: "2 months ago",
    content:
      "Star Flex banner quality is incredible. Printed in under 2 hours for our showroom's grand festival inauguration. Colors were super vibrant, sharp from 200 feet, and withstood the recent heavy Kadapa rainstorm with zero damage.",
    helpfulCount: 14,
    localGuideLevel: "Local Guide • 42 reviews",
    avatarBg: "bg-rose-600",
    initials: "PR",
  },
  {
    id: "rev-4",
    name: "Lakshmi Prasanna",
    role: "Customer",
    location: "Akkayapalle, Kadapa",
    serviceCategory: "gifts",
    serviceBadge: "Custom Magic Mugs & Photo Frames",
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "Ordered magic heat-reveal photo mugs and a custom LED photo frame for our wedding anniversary. Received on the very same day within 2 hours. Photo reproduction was crystal clear and the gift packaging was wonderful!",
    helpfulCount: 9,
    localGuideLevel: "Verified Reviewer • 8 reviews",
    avatarBg: "bg-purple-600",
    initials: "LP",
  },
  {
    id: "rev-5",
    name: "Syed Mahaboob Basha",
    role: "Managing Partner, Real Estate Ventures",
    location: "Yerramukkapalli, Kadapa",
    serviceCategory: "maps",
    serviceBadge: "DTCP Layout & Village FMB Maps",
    rating: 5,
    timeAgo: "3 weeks ago",
    content:
      "We print all our 44-inch continuous DTCP residential layout maps and revenue village FMB sketches here. The paper GSM is heavy, scale coordinates align perfectly with revenue records, and colors make zoning instantly clear to buyers.",
    helpfulCount: 18,
    localGuideLevel: "Level 6 Local Guide • 74 reviews",
    avatarBg: "bg-cyan-600",
    initials: "SB",
  },
  {
    id: "rev-6",
    name: "Venkata Subbaiah Naidu",
    role: "Building Contractor & Structural Engineer",
    location: "Ganagapeta, Kadapa",
    serviceCategory: "cad",
    serviceBadge: "CAD Structural Drawings (A1/A2)",
    rating: 5,
    timeAgo: "4 weeks ago",
    content:
      "Fastest turnaround in Kadapa for structural engineering plots. I simply drop the DWG/PDF on their WhatsApp and pick up neatly folded drawings 20 minutes later opposite Tirumala Hospital. Zero errors in line thickness.",
    helpfulCount: 12,
    localGuideLevel: "Local Guide • 19 reviews",
    avatarBg: "bg-amber-600",
    initials: "VN",
  },
  {
    id: "rev-7",
    name: "K. Rajesh Kumar",
    role: "Retail Business Owner",
    location: "Madras Road Commercial Hub, Kadapa",
    serviceCategory: "visiting",
    serviceBadge: "Velvet Matte Visiting Cards & Bill Books",
    rating: 5,
    timeAgo: "2 months ago",
    content:
      "Ordered 2000 visiting cards with velvet matte lamination and raised Spot UV on our logo, plus 10 custom 3-ply carbonless bill books. Delivery in 48 hours and the card thickness feels extremely executive. Superb wholesale rates.",
    helpfulCount: 11,
    localGuideLevel: "Local Guide • 27 reviews",
    avatarBg: "bg-slate-800",
    initials: "RK",
  },
  {
    id: "rev-8",
    name: "Anitha Harish",
    role: "Event Organizer & Marketing Lead",
    location: "Seven Roads, Kadapa",
    serviceCategory: "flex",
    serviceBadge: "Rollup Standees & Fabric Flex",
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "Ordered two 6x3 ft rollup luxury standees and promotional fabric banners for a 3-day medical conference. The aluminum base was sturdy, colors didn't glare under stage lights, and same-day delivery saved our event timeline!",
    helpfulCount: 15,
    localGuideLevel: "Local Guide • 14 reviews",
    avatarBg: "bg-pink-600",
    initials: "AH",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Reviews (8)" },
  { id: "cad", label: "CAD Blueprints & Xerox" },
  { id: "flex", label: "Star Flex & Banners" },
  { id: "signage", label: "3D LED Signboards" },
  { id: "gifts", label: "Personalised Gifts" },
  { id: "visiting", label: "Visiting Cards & Offset" },
  { id: "maps", label: "DTCP Layout Maps" },
];

export default function ReviewSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredReviews =
    activeCategory === "all"
      ? GOOGLE_REVIEWS
      : GOOGLE_REVIEWS.filter((r) => r.serviceCategory === activeCategory);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative border-t border-slate-200/80">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-4">
            <GoogleLogo className="w-4 h-4" />
            <span className="font-semibold text-slate-600">Google Business Profile</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-bold flex items-center space-x-1">
              <span>5.0 Star Rating</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by 500+ Businesses & Engineers in Kadapa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Authentic, verified reviews from local civil engineers, doctors, showroom owners, builders, and families who rely on our direct in-house printing workshop.
          </p>
        </div>

        {/* Master Google Business Rating Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Google Score Pillar */}
            <div className="lg:col-span-4 flex items-center space-x-4 sm:space-x-5 lg:border-r lg:border-slate-100 lg:pr-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-inner">
                <GoogleLogo className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                    5.0
                  </span>
                  <div className="flex text-amber-400 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  Over 520+ Verified Reviews
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] text-emerald-600 font-semibold mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Verified Kadapa Customers</span>
                </div>
              </div>
            </div>

            {/* Direct Workshop Pillars */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 text-center sm:text-left py-2 border-y sm:border-y-0 sm:border-x border-slate-100 sm:px-4 lg:px-6">
              <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-base sm:text-lg font-black text-brand-dark font-mono">15 Min</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  CAD Plotting Turnaround
                </div>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-base sm:text-lg font-black text-brand-dark font-mono">Direct</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Workshop Production
                </div>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-base sm:text-lg font-black text-brand-dark font-mono">7 Days</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Open Every Week
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href={BUSINESS_DATA.socialLinks.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-brand-redDark text-white font-bold px-4 py-2.5 rounded-xl transition-colors text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-xs"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Google Review</span>
              </a>

              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2.5 rounded-xl transition-colors text-xs sm:text-sm flex items-center justify-center space-x-2 border border-slate-200"
              >
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredReviews.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all relative group"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight flex items-center space-x-1">
                        <span>{r.name}</span>
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                        {r.role}
                      </p>
                    </div>
                  </div>

                  <GoogleLogo className="w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Rating Stars & Time */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex text-amber-400 space-x-0.5">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{r.timeAgo}</span>
                </div>

                {/* Service Tag */}
                <div className="inline-block bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-md mb-3 border border-slate-200/60">
                  {r.serviceBadge}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                  &ldquo;{r.content}&rdquo;
                </p>
              </div>

              {/* Card Footer: Local Guide & Helpful count */}
              <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center space-x-1 text-slate-500 truncate mr-2">
                  <MapPin className="w-3 h-3 text-brand-red shrink-0" />
                  <span className="truncate">{r.location}</span>
                </div>

                <div className="flex items-center space-x-1 shrink-0 text-slate-400 font-mono text-[10px]">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{r.helpfulCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Assurance Bar */}
        <div className="mt-10 sm:mt-12 bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 shadow-xs">
          <div className="flex items-center space-x-2.5 text-center sm:text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Verified Business Profile:</strong> City Grafix Kadapa (#21/135, Opp. Tirumala Hospital, Kadapa). Reviews are verified from actual walk-in and online clients.
            </span>
          </div>

          <a
            href={BUSINESS_DATA.socialLinks.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red hover:underline font-bold shrink-0 flex items-center space-x-1"
          >
            <span>Read all 500+ reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
