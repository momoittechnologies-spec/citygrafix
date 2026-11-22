import React from "react";
import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import TrustHighlights from "@/components/home/TrustHighlights";
import ServiceVerticals from "@/components/home/ServiceVerticals";
import FeaturedOutdoorProjects from "@/components/home/FeaturedOutdoorProjects";
import ServiceWordCloud from "@/components/home/ServiceWordCloud";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PortfolioSection from "@/components/home/PortfolioSection";
import PriceHighlights from "@/components/home/PriceHighlights";
import PriceEstimator from "@/components/calculator/PriceEstimator";
import OrderSteps from "@/components/home/OrderSteps";
import ReviewSection from "@/components/home/ReviewSection";
import LocationContact from "@/components/home/LocationContact";

export const metadata: Metadata = {
  title: "City Grafix Kadapa | Complete Printing, Signage, Hoardings & CAD Solutions",
  description:
    "Kadapa's premier commercial printing & branding partner since 2014. Roadside hoardings, Star Flex banners, 3D acrylic LED signboards, A0 Jumbo Xerox, CAD plotting, and personalized gifts.",
  keywords: [
    "Printing Services in Kadapa",
    "Printing Press in Kadapa",
    "Hoardings in Kadapa",
    "Outdoor Advertising Kadapa",
    "Pole Kiosk Advertising Kadapa",
    "Flex Printing in Kadapa",
    "Jumbo Xerox in Kadapa",
    "A0 Xerox in Kadapa",
    "CAD Drawing Printing in Kadapa",
    "Banner Printing in Kadapa",
    "LED Sign Board Manufacturers in Kadapa",
    "3D Acrylic Letters in Kadapa",
    "Visiting Card Printing in Kadapa",
    "Custom Photo Mug Printing Kadapa",
  ],
  alternates: {
    canonical: "https://www.citygrafix.in",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Premium Five-Slide Photographic Hero Slider */}
      <HeroSlider />

      {/* 2. Compact Trust & Credibility Strip (Verified Business Facts) */}
      <TrustHighlights />

      {/* 3. Core Printing & Advertising Services */}
      <ServiceVerticals />

      {/* 4. Featured Outdoor Advertising Projects (Roadside Hoardings & Pole Kiosks) */}
      <FeaturedOutdoorProjects />

      {/* 5. Master Interactive Word Cloud ("One Studio. Endless Printing Possibilities.") */}
      <ServiceWordCloud />

      {/* 6. Why Choose City Grafix (Core Differentiators & Workshop Advantages) */}
      <WhyChooseUs />

      {/* 7. Featured Real Projects Portfolio */}
      <PortfolioSection />

      {/* 8. Personalized Gifts & Popular Products Showcase */}
      <PriceHighlights />

      {/* 9. Quick Quotation Calculator (2-Column Desktop / Stacked Mobile Estimator) */}
      <PriceEstimator />

      {/* 10. Simple 4-Step Order Flow */}
      <OrderSteps />

      {/* 11. Genuine Customer Testimonials & Reviews */}
      <ReviewSection />

      {/* 12. Workshop Location & Contact Form */}
      <LocationContact />
    </div>
  );
}
