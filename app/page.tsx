import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustHighlights from "@/components/home/TrustHighlights";
import ServiceVerticals from "@/components/home/ServiceVerticals";
import PriceEstimator from "@/components/calculator/PriceEstimator";
import ServiceWordCloud from "@/components/home/ServiceWordCloud";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PriceHighlights from "@/components/home/PriceHighlights";
import EmiFinanceSection from "@/components/home/EmiFinanceSection";
import OrderSteps from "@/components/home/OrderSteps";
import ReviewSection from "@/components/home/ReviewSection";
import AppShowcaseSection from "@/components/home/AppShowcaseSection";
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
    "Flex Printing on Easy Installments Kadapa",
    "Bajaj Finance Printing Kadapa",
    "LED Sign Board EMI Kadapa",
  ],
  alternates: {
    canonical: "https://www.citygrafix.in",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section ("Kadapa's Complete Printing & Signage Solutions") */}
      <HeroSection />

      {/* 2. Compact Credibility Strip (Verified Business Facts) */}
      <TrustHighlights />

      {/* 3. Six Core Service Categories */}
      <ServiceVerticals />

      {/* 4. Interactive Price Estimator (Instant 2-Column Calculator) */}
      <PriceEstimator />

      {/* 5. Master Interactive Word Cloud ("One Studio. Endless Printing Possibilities.") */}
      <ServiceWordCloud />

      {/* 6. Featured Real Projects Portfolio */}
      <PortfolioSection />

      {/* 6. Why Choose City Grafix (Core Differentiators) */}
      <WhyChooseUs />

      {/* 7. Personalized Gifts & Popular Products Showcase */}
      <PriceHighlights />

      {/* 8. Bajaj Finance Easy Installments Feature */}
      <EmiFinanceSection />

      {/* 9. Simple 4-Step Order Flow */}
      <OrderSteps />

      {/* 10. Verified Customer Reviews & Community Feedback */}
      <ReviewSection />

      {/* 11. Official Mobile App Showcase (Progressive Web App) */}
      <AppShowcaseSection />

      {/* 12. Workshop Location & Contact Form */}
      <LocationContact />
    </div>
  );
}
