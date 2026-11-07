import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Phone, Calculator } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>
        <h1 className="text-2xl font-black text-brand-navy">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The printing service or page you are looking for may have moved or doesn&apos;t exist. 
          Use the quick links below or contact our Kadapa workshop.
        </p>

        <div className="space-y-2 pt-2">
          <Link
            href="/"
            className="w-full bg-brand-navy hover:bg-brand-navyLight text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-xs"
          >
            <span>Explore All 11 Services</span>
          </Link>

          <a
            href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
            className="w-full text-brand-royal hover:underline font-semibold text-xs flex items-center justify-center space-x-1 pt-2"
          >
            <Phone className="w-3.5 h-3.5 mr-1" />
            <span>Call Support: {BUSINESS_DATA.contacts.primaryOrders.displayNumber}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
