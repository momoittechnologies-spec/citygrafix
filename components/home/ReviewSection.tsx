import React from "react";
import { Star, ShieldCheck, ExternalLink, ThumbsUp } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Sreenivasula Reddy",
      role: "Civil Engineering Consultant, Kadapa",
      content: "For municipal sanction drawings and large A0 blueprints, City Grafix is the absolute best in Kadapa. Exact 1:100 scale adherence, zero line blur, and while-you-wait 15-minute delivery.",
      rating: 5,
      date: "Verified Google Review",
    },
    {
      name: "Dr. K. V. Ramanathan",
      role: "Clinic Director, Seven Roads Circle",
      content: "Got a 3D Acrylic LED Glow Signboard made for our medical clinic. High-quality waterproof LEDs, anti-rust frame, and 48-hour testing before installation. Direct workshop price saved us substantial cost.",
      rating: 5,
      date: "Verified Google Review",
    },
    {
      name: "Ravi Teja",
      role: "Showroom Manager, Kadapa",
      content: "Star Flex banner quality is incredible. Printed in 2 hours for our grand festival inauguration. Colors were super vibrant and withstood heavy rains with no water damage.",
      rating: 5,
      date: "Verified Google Review",
    },
    {
      name: "Lakshmi Prasanna",
      role: "Customer, Kadapa",
      content: "Ordered magic heat reveal photo mugs and custom LED photo frame for anniversary. Received on the very same day within 2 hours. Wonderful gift packing!",
      rating: 5,
      date: "Verified Google Review",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="site-container">
        <div className="bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-dark rounded-3xl p-8 sm:p-12 xl:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/10">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>Google Business Profile Rating</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Rated 5.0 Stars by Kadapa Clients
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                Real customer experiences from engineers, retailers, medical professionals, and local families.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="flex items-center space-x-1 bg-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md">
                <div className="text-3xl font-black text-brand-gold font-mono">5.0</div>
                <div className="pl-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-300 font-semibold block">500+ Verified Reviews</span>
                </div>
              </div>

              <a
                href={BUSINESS_DATA.socialLinks.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold hover:bg-brand-goldDark text-brand-dark font-bold px-5 py-3 rounded-xl transition-all shadow-lg text-xs sm:text-sm flex items-center space-x-2"
              >
                <span>Leave Us a Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed italic">
                    &ldquo;{r.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-brand-gold font-medium">{r.role}</p>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
