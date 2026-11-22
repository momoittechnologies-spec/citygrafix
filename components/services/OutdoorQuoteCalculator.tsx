"use client";

import React, { useState } from "react";
import {
  Sliders,
  MessageCircle,
  Phone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { BUSINESS_DATA, getWhatsAppLink } from "@/data/business";

export default function OutdoorQuoteCalculator() {
  const [adCategory, setAdCategory] = useState("roadside-hoarding");
  const [widthFt, setWidthFt] = useState(10);
  const [heightFt, setHeightFt] = useState(6);
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState("star-flex");
  const [structure, setStructure] = useState("new-ms-frame");
  const [installation, setInstallation] = useState("with-mounting");
  const [locationArea, setLocationArea] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

  const presets: Record<
    string,
    { label: string; defaultW: number; defaultH: number; description: string }
  > = {
    "roadside-hoarding": {
      label: "Roadside Hoarding Display",
      defaultW: 10,
      defaultH: 6,
      description: "Welded metal-framed roadside display with 340+ GSM Star Flex.",
    },
    "pole-kiosk": {
      label: "Pole Kiosk (Double-Sided)",
      defaultW: 4,
      defaultH: 3,
      description: "Dual-sided display panels fitted with municipal pole mounting clamps.",
    },
    "road-median": {
      label: "Road Median Divider Board",
      defaultW: 6,
      defaultH: 3,
      description: "Eye-level road divider panel for bumper-to-bumper vehicular traffic.",
    },
    "highway-billboard": {
      label: "Highway Billboard / Megasite",
      defaultW: 30,
      defaultH: 15,
      description: "Heavy wind-resistant industrial flex with reinforced border lacing.",
    },
  };

  const handleCategoryChange = (catKey: string) => {
    setAdCategory(catKey);
    setWidthFt(presets[catKey].defaultW);
    setHeightFt(presets[catKey].defaultH);
  };

  const totalSqFt = widthFt * heightFt;
  const grandTotalSqFt = totalSqFt * quantity;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const adTypeLabel = presets[adCategory]?.label || "Outdoor Advertising";
    const materialLabel =
      material === "star-flex"
        ? "340+ GSM Heavy Star Flex (High Gloss)"
        : material === "backlit"
        ? "Industrial Backlit Flex (Illuminated)"
        : material === "vinyl-sunboard"
        ? "Eco-Solvent Vinyl on Sunboard / Acrylic"
        : "Standard Frontlit Flex (260 GSM)";

    const structureLabel =
      structure === "new-ms-frame"
        ? "New Welded MS Hollow Pipe Iron Frame"
        : structure === "clamps-only"
        ? "Pole Kiosk Clamp & Bracket System"
        : "Skin Replacement Only (Existing Structure)";

    const installLabel =
      installation === "with-mounting"
        ? "Required (City Grafix On-Site Installation)"
        : "Not Required (Workshop Pickup / Self-Mounting)";

    const message = `Hello City Grafix Kadapa,
*OUTDOOR ADVERTISING & HOARDING QUOTATION REQUEST*
• Advertising Category: *${adTypeLabel}*
• Single Board Size: *${widthFt} ft (W) × ${heightFt} ft (H)* (${totalSqFt} sq. ft.)
• Quantity: *${quantity} unit(s)* (Total: ${grandTotalSqFt} sq. ft.)
• Printing Material: ${materialLabel}
• Framework / Structure: ${structureLabel}
• Installation Support: ${installLabel}
• Proposed Location / Road: ${locationArea || "Kadapa Town / Highway Corridor"}
• Customer Name: ${customerName || "Customer"}
• Phone / WhatsApp: ${customerPhone || "Not provided"}
${specialNotes ? `• Special Notes: ${specialNotes}\n` : ""}
Please review these campaign specifications and provide your best direct workshop quotation and turnaround time.`;

    window.open(getWhatsAppLink(message, "orders"), "_blank");
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#101B38] text-white p-6 sm:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFC83D] bg-white/10 px-2.5 py-1 rounded inline-block mb-1.5">
            ప్రత్యేక కొటేషన్ కాలిక్యులేటర్
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
            Outdoor Advertising &amp; Hoarding Quotation Form
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Configure your board dimensions, structural requirements, and print materials for an immediate direct workshop estimate.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs bg-white/10 px-3.5 py-2 rounded-xl text-slate-200 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Zero Middleman Brokerage</span>
        </div>
      </div>

      {/* Body Form */}
      <form onSubmit={handleWhatsAppSubmit} className="p-6 sm:p-8 space-y-8">
        {/* Step 1: Select Type */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38]">
            1. Select Advertising Structure Type:
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(presets).map(([key, data]) => {
              const isSelected = adCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleCategoryChange(key)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "border-[#2255D6] bg-blue-50/80 shadow-xs ring-2 ring-[#2255D6]/20"
                      : "border-slate-200 bg-[#FAFAF7] hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`block text-xs font-bold ${
                      isSelected ? "text-[#2255D6]" : "text-[#101B38]"
                    }`}
                  >
                    {data.label}
                  </span>
                  <span className="text-[11px] text-[#53627B] mt-1 block leading-snug">
                    {data.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Dimensions & Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              2. Width (in Feet):
            </label>
            <input
              type="number"
              min={1}
              max={120}
              required
              value={widthFt}
              onChange={(e) => setWidthFt(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              Height (in Feet):
            </label>
            <input
              type="number"
              min={1}
              max={60}
              required
              value={heightFt}
              onChange={(e) => setHeightFt(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              Quantity (Units / Poles):
            </label>
            <input
              type="number"
              min={1}
              max={500}
              required
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            />
          </div>
        </div>

        {/* Calculated Area Metric Banner */}
        <div className="bg-[#FAFAF7] rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[#101B38]">Estimated Print Area:</span>
            <span className="font-mono font-bold text-[#2255D6] bg-blue-50 px-2 py-0.5 rounded">
              {totalSqFt} Sq. Ft. per unit
            </span>
            {quantity > 1 && (
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Total: {grandTotalSqFt} Sq. Ft. ({quantity} units)
              </span>
            )}
          </div>
          <span className="text-[#53627B]">
            * Exact pricing depends on structure steel gauge &amp; location height
          </span>
        </div>

        {/* Step 3: Material & Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              3. Printing Material:
            </label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            >
              <option value="star-flex">340+ GSM Star Flex (Recommended for Outdoors)</option>
              <option value="normal-flex">Standard 260 GSM Flex (Short-Term Event)</option>
              <option value="backlit">Industrial Backlit Flex (Illuminated Box)</option>
              <option value="vinyl-sunboard">Eco-Solvent Vinyl on Board / Acrylic</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              4. Framework &amp; Metal Structure:
            </label>
            <select
              value={structure}
              onChange={(e) => setStructure(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            >
              <option value="new-ms-frame">New Heavy MS Hollow Pipe Welded Frame</option>
              <option value="skin-only">Skin Replacement Only (Existing Structure)</option>
              <option value="clamps-only">Pole Kiosk Clamps &amp; Bracket Set</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              5. Installation Support:
            </label>
            <select
              value={installation}
              onChange={(e) => setInstallation(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            >
              <option value="with-mounting">With City Grafix On-Site Installation</option>
              <option value="self-install">Workshop Pickup (Self-Installation)</option>
            </select>
          </div>
        </div>

        {/* Step 4: Contact & Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              6. Proposed Location / Landmark:
            </label>
            <input
              type="text"
              placeholder="e.g. 7 Roads Circle, RIMS Road, Proddatur"
              value={locationArea}
              onChange={(e) => setLocationArea(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              Your Name / Business:
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Busetty Jewellers / Suresh"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101B38] mb-1.5">
              WhatsApp / Phone Number:
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 98765 43210"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2255D6] bg-[#FAFAF7]"
            />
          </div>
        </div>

        {/* Submit Actions */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <button
            type="submit"
            className="w-full bg-[#F04446] hover:bg-[#D63335] text-white font-bold text-sm sm:text-base py-4 px-6 rounded-2xl shadow-lg shadow-red-950/30 flex items-center justify-center space-x-2 transition-all active:scale-98 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Send Hoarding &amp; Outdoor Advertising Request on WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-[#53627B]">
            ⚡ Direct Workshop Connection: Your specifications will be transferred to our Kadapa estimation desk on WhatsApp (72878 67584) for a line-item quotation.
          </p>
        </div>
      </form>
    </div>
  );
}
