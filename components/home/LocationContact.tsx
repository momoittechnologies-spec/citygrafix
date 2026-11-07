"use client";

import React, { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Mail, Navigation, Send, CheckCircle2 } from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function LocationContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Star Flex Banner Printing");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `Hello City Grafix Kadapa,
My Name: ${name || "Customer"}
Contact Number: ${phone || "Not provided"}
Required Service: ${service}
Details: ${message || "Please provide quotation and turnaround time."}`;

    window.open(getWhatsAppLink(query, "orders"), "_blank");
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative" id="contact">
      <div className="site-container">
        <div className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 px-3.5 py-1 rounded-full">
            Direct Workshop & Reception Desk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mt-3">
            Visit Us or Contact Our Team
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            Conveniently located opposite Tirumala Hospital near Seven Roads Circle in Kadapa. Walk in or connect on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Workshop Details & Contact Lines */}
          <div className="lg:col-span-5 space-y-6">
            {/* Workshop Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md">
              <div className="flex items-start space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Workshop Location</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {BUSINESS_DATA.address.full}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                    <span className="font-semibold text-slate-700 block">Landmarks:</span>
                    {BUSINESS_DATA.landmarks.map((l, i) => (
                      <div key={i} className="flex items-center text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-royal mr-1.5" />
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={BUSINESS_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-bold bg-brand-royal text-white px-4 py-2 rounded-xl hover:bg-brand-blue transition-colors space-x-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dedicated Department Contacts */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
                Official Department Lines
              </h3>

              {/* Line 1 */}
              <div className="flex items-start justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">Orders & General Support:</span>
                  <span className="text-[11px] text-slate-500 block">{BUSINESS_DATA.contacts.primaryOrders.purpose}</span>
                </div>
                <div className="flex space-x-1.5 shrink-0">
                  <a
                    href={BUSINESS_DATA.contacts.primaryOrders.callUrl}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
                    title="Call Line 1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={BUSINESS_DATA.contacts.primaryOrders.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
                    title="WhatsApp Line 1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  </a>
                </div>
              </div>

              {/* Line 2 */}
              <div className="flex items-start justify-between text-xs pt-2 border-t border-slate-100">
                <div>
                  <span className="font-bold text-slate-900 block">3D Signage & Structural:</span>
                  <span className="text-[11px] text-slate-500 block">{BUSINESS_DATA.contacts.signageStructural.purpose}</span>
                </div>
                <div className="flex space-x-1.5 shrink-0">
                  <a
                    href={BUSINESS_DATA.contacts.signageStructural.callUrl}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
                    title="Call Line 2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={BUSINESS_DATA.contacts.signageStructural.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
                    title="WhatsApp Line 2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  </a>
                </div>
              </div>

              {/* Line 3 */}
              <div className="flex items-start justify-between text-xs pt-2 border-t border-slate-100">
                <div>
                  <span className="font-bold text-slate-900 block">Reception Desk (WhatsApp Only):</span>
                  <span className="text-[11px] text-slate-500 block">{BUSINESS_DATA.contacts.receptionDesk.purpose}</span>
                </div>
                <div className="shrink-0">
                  <a
                    href={BUSINESS_DATA.contacts.receptionDesk.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg inline-flex items-center space-x-1 text-[11px] font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center font-semibold">
                  <Clock className="w-4 h-4 text-brand-royal mr-1.5" />
                  <span>Workshop Hours:</span>
                </span>
                <span className="font-medium text-right">Mon–Sat: 9:30 AM–9:30 PM | Sun: 10 AM–6 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Contact Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick WhatsApp Inquiry Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md">
              <h3 className="text-xl font-bold text-brand-navy mb-1">
                Fast WhatsApp Quotation Request
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill in your basic job requirements to open an instant, structured WhatsApp chat with our workshop technician.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Select Printing Category / Service:
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50/50 font-medium"
                  >
                    <option>Star Flex Banner Printing (340+ GSM)</option>
                    <option>Jumbo Xerox / A0 CAD Blueprints</option>
                    <option>3D Acrylic LED Glow Signboard</option>
                    <option>Grand Arch Flex / Road Welcome Arch</option>
                    <option>Municipal Layout & Village Map Printing</option>
                    <option>Personalized Photo Mugs & Magic Mugs</option>
                    <option>Custom Photo T-Shirts (DTF / Sublimation)</option>
                    <option>Visiting Cards & Carbonless Bill Books</option>
                    <option>Vinyl Stickers & Sunboard Rigid Displays</option>
                    <option>Auto Publicity Campaign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Dimensions / Quantity / Notes:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 10x4 ft banner, need urgent delivery by 4 PM today..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Request to WhatsApp Orders</span>
                </button>
              </form>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md">
              <div className="p-3 bg-slate-100 flex items-center justify-between text-xs text-slate-700 font-semibold">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
                  <span>City Grafix Kadapa • Opp. Tirumala Hospital</span>
                </span>
                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-royal hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
              <iframe
                title="City Grafix Kadapa Google Map Location"
                src="https://maps.google.com/maps?q=City+Grafix+Kadapa+Opp+Tirumala+Hospital&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
