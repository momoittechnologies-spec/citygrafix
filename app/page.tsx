import React from "react";
import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import TrustHighlights from "@/components/home/TrustHighlights";
import EmiFinanceSection from "@/components/home/EmiFinanceSection";
import ServiceVerticals from "@/components/home/ServiceVerticals";
import PriceEstimator from "@/components/calculator/PriceEstimator";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PriceHighlights from "@/components/home/PriceHighlights";
import OrderSteps from "@/components/home/OrderSteps";
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
      {/* 1. Hero Section ("Everything You Imagine. We Print.") */}
      <HeroSlider />

      {/* 2. Trust Indicators Bar */}
      <TrustHighlights />

      {/* 3. Services Showcase (6 Major Verticals) */}
      <ServiceVerticals />

      {/* 4. Bajaj Finance Easy Installments Feature */}
      <EmiFinanceSection />

      {/* 5. Featured Projects & Portfolio Gallery */}
      <PortfolioSection />

      {/* 6. Interactive Price Estimator (2-Column Calculator) */}
      <PriceEstimator />

      {/* 7. Why City Grafix (Core Business Strengths) */}
      <WhyChooseUs />

      {/* 8. Popular Products Showcase */}
      <PriceHighlights />

      {/* 9. Customer Testimonials & Verified Google Reviews */}
      <ReviewSection />

      {/* 10. How It Works (4-Step Timeline) */}
      <OrderSteps />

      {/* 11. Workshop Location & Contact Enquiry Form */}
      <LocationContact />
    </div>
  );
}
