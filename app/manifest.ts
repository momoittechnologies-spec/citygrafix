import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "City Grafix - Printing & Signage Solutions Kadapa",
    short_name: "City Grafix",
    description:
      "Premier digital printing, Star Flex banners, 3D LED Sign Boards, Jumbo Xerox, Visiting Cards, and Personalized Gifts in Kadapa.",
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: "#0B132B",
    theme_color: "#0B132B",
    orientation: "portrait",
    scope: "/",
    categories: ["business", "shopping", "productivity"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Gifts & Pricing",
        short_name: "Pricing",
        description: "View workshop rates for gifts, frames, mugs and badges",
        url: "/pricing",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "All Printing Services",
        short_name: "Services",
        description: "Explore Star Flex, CAD Plotting, 3D Signage & Offset",
        url: "/services",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "Easy EMI Finance",
        short_name: "Easy EMI",
        description: "0% interest flex and signage finance with Bajaj Finance",
        url: "/#emi-finance",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "Contact & Order Desk",
        short_name: "Contact",
        description: "Get direction and reach Kadapa workshop order desk",
        url: "/contact",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
    ],
  };
}
