import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBottomBar from "@/components/layout/StickyBottomBar";
import { BUSINESS_DATA } from "@/data/business";

export const viewport: Viewport = {
  themeColor: "#0B132B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citygrafix.in"),
  title: {
    default: "City Grafix Kadapa | Complete Printing Solutions, Flex & Jumbo Xerox",
    template: "%s | City Grafix Kadapa",
  },
  description: "City Grafix Kadapa offers commercial printing, Star Flex banners, A0-A4 Jumbo Xerox, AutoCAD blueprint plotting, 3D Acrylic LED signboards, and personalized gifts with direct workshop pricing.",
  keywords: [
    "Printing Services in Kadapa",
    "Printing Press in Kadapa",
    "Printing Shop in Kadapa",
    "Flex Printing in Kadapa",
    "Jumbo Xerox in Kadapa",
    "A0 Xerox in Kadapa",
    "CAD Drawing Printing in Kadapa",
    "Banner Printing in Kadapa",
    "LED Sign Board Manufacturers in Kadapa",
    "3D Acrylic Letters in Kadapa",
    "Visiting Card Printing in Kadapa",
    "Vinyl Sticker Printing in Kadapa",
    "Photo Mug Printing in Kadapa",
    "Custom T-Shirt Printing in Kadapa",
    "Sunboard Printing in Kadapa",
    "Pamphlet Printing in Kadapa",
  ],
  authors: [{ name: "City Grafix Kadapa" }],
  creator: "City Grafix Kadapa",
  publisher: "City Grafix Kadapa",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "City Grafix Kadapa | Complete Printing Solutions & Signage",
    description: "Quality Printing • Creative Designing • Affordable Prices • On-Time Delivery. Kadapa's trusted printing press since 2014.",
    url: "https://www.citygrafix.in",
    siteName: "City Grafix Kadapa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 680,
        height: 453,
        alt: "City Grafix Kadapa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Grafix Kadapa | Complete Printing Solutions",
    description: "Quality Printing, Flex, 3D LED Signage & Jumbo Xerox in Kadapa. Direct workshop rates.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "GSC_VERIFICATION_PLACEHOLDER_CITYGRAFIX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PrintShop",
    "@id": "https://www.citygrafix.in/#organization",
    "name": BUSINESS_DATA.name,
    "alternateName": "City Grafix",
    "url": "https://www.citygrafix.in",
    "logo": "https://www.citygrafix.in/logo.png",
    "image": "https://www.citygrafix.in/logo.png",
    "telephone": BUSINESS_DATA.contacts.primaryOrders.number,
    "email": BUSINESS_DATA.contacts.email,
    "priceRange": "₹12 - ₹5000",
    "description": "Commercial digital printing press, wide-format flex & hoarding manufacturer, 3D acrylic LED signage fabricator, and A0-A4 Jumbo Xerox hub in Kadapa.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#21/135, Opp. Tirumala Hospital, Beside New AF Automart Street",
      "addressLocality": "Kadapa",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "516001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_DATA.coordinates.lat,
      "longitude": BUSINESS_DATA.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      BUSINESS_DATA.socialLinks.instagram,
      BUSINESS_DATA.socialLinks.youtube,
      BUSINESS_DATA.socialLinks.googleReviews
    ],
    "areaServed": [
      { "@type": "City", "name": "Kadapa" },
      { "@type": "AdministrativeArea", "name": "YSR Kadapa District" },
      { "@type": "City", "name": "Proddatur" },
      { "@type": "City", "name": "Pulivendula" },
      { "@type": "City", "name": "Rayachoty" }
    ],
    "founder": {
      "@type": "Organization",
      "name": "City Grafix"
    },
    "foundingDate": "2014"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Analytics Placeholders */}
        {/* Google Tag Manager / GA4 placeholder: <!-- Google tag (gtag.js) - G-XXXXXXXXXX --> */}
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <StickyBottomBar />
        <Footer />
      </body>
    </html>
  );
}
