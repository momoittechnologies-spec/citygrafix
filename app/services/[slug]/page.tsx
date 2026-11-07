import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CORE_SERVICES, ServiceItem } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CORE_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = CORE_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.title} in Kadapa | City Grafix`;
  const description = `${service.shortDescription} Starting from ${service.startingPrice}. Direct workshop production in Kadapa with express turnaround.`;

  return {
    title,
    description,
    keywords: [
      `${service.title} in Kadapa`,
      `${service.teluguTitle} Kadapa`,
      `${service.category} Kadapa`,
      "City Grafix Kadapa",
      "Printing Press in Kadapa",
      "Wholesale Printing Kadapa",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.citygrafix.in/services/${service.slug}`,
      type: "article",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `https://www.citygrafix.in/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = CORE_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
