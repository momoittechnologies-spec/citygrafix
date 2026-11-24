import React from "react";
import { Metadata } from "next";
import PhotomallClientView from "@/components/photomall/PhotomallClientView";
import { PHOTOMALL_META } from "@/data/photomall";

export const metadata: Metadata = {
  title: "City PhotoMall | Event Photography & Client Proofing Portal - City Grafix Kadapa",
  description:
    "Private client photo proofing and event photography portal by City Grafix Kadapa. Browse wedding ceremonies, political campaign roadshows, and traditional family functions. Select photos for luxury Karizma albums and order custom prints.",
  keywords: [
    "City PhotoMall Kadapa",
    "wedding photography Kadapa",
    "political campaign photographer Kadapa",
    "event photography Rayalaseema",
    "client photo proofing portal",
    "wedding album selection online Kadapa",
    "Karizma album printing Kadapa",
    "marriage photographer Kadapa",
    "political rally photography Andhra Pradesh",
  ],
  alternates: {
    canonical: "https://www.citygrafix.in/photomall",
  },
  openGraph: {
    title: "City PhotoMall | Event Photography & Client Proofing Portal",
    description:
      "Select your wedding and event photos online. Private PIN access, 1-tap WhatsApp album selection, and in-house Karizma album printing by City Grafix Kadapa.",
    url: "https://www.citygrafix.in/photomall",
    siteName: "City Grafix Kadapa",
    images: [
      {
        url: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
        width: 1200,
        height: 675,
        alt: "City PhotoMall Event Photography Kadapa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "City PhotoMall | Event Photography & Client Proofing Portal",
    description:
      "Private client proofing portal for weddings, political campaigns, and traditional events by City Grafix Kadapa.",
    images: ["/images/photomall/photomall_wedding_ceremony_kadapa.webp"],
  },
};

export default function PhotomallPage() {
  return (
    <main className="min-h-screen bg-[#060D1E] text-white">
      <PhotomallClientView />
    </main>
  );
}
