import React from "react";
import type { Metadata } from "next";
import EmiFinanceSection from "@/components/home/EmiFinanceSection";

export const metadata: Metadata = {
  title: "Easy EMI with Bajaj Finance | City Grafix Kadapa",
  description:
    "Finance your commercial flex printing, 3D acrylic LED signboards, and storefront branding on easy monthly installments with Bajaj Finance at City Grafix Kadapa.",
  alternates: {
    canonical: "https://www.citygrafix.in/emi-finance",
  },
};

export default function EmiFinancePage() {
  return (
    <div className="min-h-screen bg-[#101B38]">
      <EmiFinanceSection />
    </div>
  );
}
