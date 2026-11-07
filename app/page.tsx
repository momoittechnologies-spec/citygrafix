import React from "react";
import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import TrustHighlights from "@/components/home/TrustHighlights";
import ServiceVerticals from "@/components/home/ServiceVerticals";
import FeaturedShowcase from "@/components/home/FeaturedShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OrderSteps from "@/components/home/OrderSteps";
import PriceHighlights from "@/components/home/PriceHighlights";
import FlexCalculator from "@/components/calculator/FlexCalculator";
import PortfolioSection from "@/components/home/PortfolioSection";
import ReviewSection from "@/components/home/ReviewSection";
import LocationContact from "@/components/home/LocationContact";

export const metadata: Metadata = {
  title: "City Grafix Kadapa | Complete Printing, Flex, Signage & Jumbo Xerox Solutions",
  description: "Kadapa's premier commercial printing press since 2014. Star flex banners, A0 jumbo xerox, CAD blueprints, 3D acrylic LED signboards, personalized gifts, and wholesale rates.",
  keywords: [
    "Printing Services in Kadapa",
    "Printing Press in Kadapa",
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
      {/* 1. Hero Slider (5 Full-Width Service Slides) */}
      <HeroSlider />

      {/* 2. Trust Statistics Bar */}
      <TrustHighlights />

      {/* 3. Primary Service Verticals (3D Grid) */}
      <ServiceVerticals />

      {/* 4. Featured Services Showcase */}
      <FeaturedShowcase />

      {/* 5. Live Flex & Signage Price Calculator */}
      <section className="py-20 bg-slate-100/60" id="calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FlexCalculator />
        </div>
      </section>

      {/* 6. Why Choose City Grafix */}
      <WhyChooseUs />

      {/* 7. How to Place an Order (4-Step Flow) */}
      <OrderSteps />

      {/* 8. Printing Price Highlights */}
      <PriceHighlights />

      {/* 9. Visual Portfolio Gallery */}
      <PortfolioSection />

      {/* 10. Customer Testimonials & Google Reviews */}
      <ReviewSection />

      {/* 11. Workshop Location & Contact Form */}
      <LocationContact />
    </div>
  );
}
