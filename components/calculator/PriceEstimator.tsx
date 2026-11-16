"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  MessageCircle,
  Sparkles,
  Check,
  ArrowRight,
  Info,
  Layers,
  RefreshCw,
  Plus,
  Minus,
  Maximize2,
} from "lucide-react";
import {
  CALCULATOR_MATERIALS,
  CALCULATOR_ADDONS,
  POPULAR_SIZE_PRESETS,
  CalculatorMaterial,
  CalculatorAddon,
} from "@/data/pricing";
import { formatCurrency } from "@/lib/utils";
import { getWhatsAppLink } from "@/data/business";

export default function PriceEstimator() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("star-flex");
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(4);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(["brass-eyelets"]);

  const selectedMaterial = useMemo<CalculatorMaterial>(() => {
    return (
      CALCULATOR_MATERIALS.find((m) => m.id === selectedMaterialId) ||
      CALCULATOR_MATERIALS[0]
    );
  }, [selectedMaterialId]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const applyPreset = (presetWidth: number, presetHeight: number) => {
    setWidth(presetWidth);
    setHeight(presetHeight);
  };

  const resetCalculator = () => {
    setSelectedMaterialId("star-flex");
    setWidth(10);
    setHeight(4);
    setQuantity(1);
    setSelectedAddonIds(["brass-eyelets"]);
  };

  // Calculations logic
  const calculations = useMemo(() => {
    const validWidth = Math.max(1, Number(width) || 1);
    const validHeight = Math.max(1, Number(height) || 1);
    const validQty = Math.max(1, Number(quantity) || 1);
    const areaSqFt = validWidth * validHeight;

    const rawMaterialCostPerUnit = areaSqFt * selectedMaterial.ratePerSqFt;
    const materialCostPerUnit = Math.max(
      rawMaterialCostPerUnit,
      selectedMaterial.minCharge
    );
    const isMinChargeApplied = rawMaterialCostPerUnit < selectedMaterial.minCharge;

    // Addons cost per unit
    let addonsCostPerUnit = 0;
    const activeAddonsList: { name: string; cost: number }[] = [];

    selectedAddonIds.forEach((addonId) => {
      const addon = CALCULATOR_ADDONS.find((a) => a.id === addonId);
      if (addon) {
        let cost = 0;
        if (addon.type === "flat") {
          cost = addon.rate;
        } else {
          cost = addon.rate * areaSqFt;
        }
        addonsCostPerUnit += cost;
        activeAddonsList.push({ name: addon.name, cost });
      }
    });

    const unitTotal = materialCostPerUnit + addonsCostPerUnit;
    const grandTotal = unitTotal * validQty;

    return {
      width: validWidth,
      height: validHeight,
      quantity: validQty,
      areaSqFt,
      rawMaterialCostPerUnit,
      materialCostPerUnit,
      isMinChargeApplied,
      addonsCostPerUnit,
      activeAddonsList,
      unitTotal,
      grandTotal,
    };
  }, [width, height, quantity, selectedMaterial, selectedAddonIds]);

  // WhatsApp Pre-filled message generator
  const whatsappUrl = useMemo(() => {
    const addonsText =
      calculations.activeAddonsList.length > 0
        ? `Add-ons: ${calculations.activeAddonsList.map((a) => a.name).join(", ")}`
        : "Add-ons: None";

    const msg = `Hello City Grafix Kadapa, I used your website price calculator for a printing estimate:
• Product: ${selectedMaterial.name}
• Dimensions: ${calculations.width} ft × ${calculations.height} ft (${calculations.areaSqFt} sq. ft.)
• Quantity: ${calculations.quantity}
• ${addonsText}
• Estimated Total: ${formatCurrency(calculations.grandTotal)}

Please confirm this quotation and advise on artwork preparation and turnaround.`;

    const line = selectedMaterialId === "led-glow-board" ? "signage" : "orders";
    return getWhatsAppLink(msg, line);
  }, [calculations, selectedMaterial, selectedMaterialId]);

  return (
    <section id="calculator" className="py-16 sm:py-20 lg:py-24 bg-[#F4F5F7] scroll-mt-16">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#F97316] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Workshop Quotation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-[#151923] tracking-tight">
            Interactive Printing Price Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
            Configure your banner or signage dimensions, select materials and finishing options,
            and instantly generate an accurate factory estimate with one-click WhatsApp quotation.
          </p>
        </div>

        {/* 2-Column Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-6xl mx-auto items-start">
          {/* Left Column: Material & Options Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-[#E5E7EB] shadow-sm space-y-6">
            {/* Step 1: Select Material */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#151923] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#151923] text-white flex items-center justify-center text-[10px] font-mono">
                    1
                  </span>
                  Select Material & Printing Type
                </label>
                <span className="text-[11px] text-[#667085]">9 In-House Options</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CALCULATOR_MATERIALS.map((mat) => {
                  const isSelected = selectedMaterialId === mat.id;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`text-left p-3 rounded-xl border transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? "bg-orange-50/70 border-[#F97316] ring-1 ring-[#F97316]/50 shadow-xs"
                          : "bg-white border-[#E5E7EB] hover:bg-[#F4F5F7] hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="font-heading font-bold text-xs text-[#151923] leading-snug">
                          {mat.name.split("(")[0]}
                        </div>
                        {mat.isPopular && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-tight bg-[#F97316] text-white shrink-0">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <span className="font-telugu text-[#667085] truncate pr-2">
                          {mat.teluguName}
                        </span>
                        <span className="font-mono font-bold text-[#151923] shrink-0">
                          ₹{mat.ratePerSqFt}/sq.ft
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dimensions (Width x Height) & Popular Presets */}
            <div className="pt-4 border-t border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#151923] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#151923] text-white flex items-center justify-center text-[10px] font-mono">
                    2
                  </span>
                  Enter Dimensions (Feet)
                </label>
                <span className="text-[11px] font-mono font-semibold text-[#F97316]">
                  Total: {calculations.areaSqFt} sq. ft.
                </span>
              </div>

              {/* Quick Presets Pills */}
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {POPULAR_SIZE_PRESETS.map((preset) => {
                  const isActive = width === preset.width && height === preset.height;
                  return (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => applyPreset(preset.width, preset.height)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all ${
                        isActive
                          ? "bg-[#151923] text-white border-[#151923]"
                          : "bg-[#F4F5F7] text-slate-700 border-[#E5E7EB] hover:bg-slate-200/80"
                      }`}
                    >
                      {preset.name} ({preset.width}×{preset.height} ft)
                    </button>
                  );
                })}
              </div>

              {/* Width & Height Inputs */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Width (W) in Feet:
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setWidth((prev) => Math.max(1, prev - 1))}
                      className="w-10 h-10 rounded-l-xl bg-[#F4F5F7] border border-r-0 border-[#E5E7EB] text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, Number(e.target.value) || 1))}
                      className="w-full h-10 border-y border-[#E5E7EB] text-center font-bold text-sm text-[#151923] focus:outline-none focus:ring-1 focus:ring-[#F97316]"
                    />
                    <button
                      type="button"
                      onClick={() => setWidth((prev) => prev + 1)}
                      className="w-10 h-10 rounded-r-xl bg-[#F4F5F7] border border-l-0 border-[#E5E7EB] text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Height (H) in Feet:
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setHeight((prev) => Math.max(1, prev - 1))}
                      className="w-10 h-10 rounded-l-xl bg-[#F4F5F7] border border-r-0 border-[#E5E7EB] text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 1))}
                      className="w-full h-10 border-y border-[#E5E7EB] text-center font-bold text-sm text-[#151923] focus:outline-none focus:ring-1 focus:ring-[#F97316]"
                    />
                    <button
                      type="button"
                      onClick={() => setHeight((prev) => prev + 1)}
                      className="w-10 h-10 rounded-r-xl bg-[#F4F5F7] border border-l-0 border-[#E5E7EB] text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Finishing & Fabrication Addons */}
            <div className="pt-4 border-t border-[#E5E7EB]">
              <label className="text-xs font-bold uppercase tracking-wider text-[#151923] flex items-center gap-1.5 mb-2.5">
                <span className="w-5 h-5 rounded-full bg-[#151923] text-white flex items-center justify-center text-[10px] font-mono">
                  3
                </span>
                Finishing & Mounting Options
              </label>

              <div className="space-y-2">
                {CALCULATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  const rateLabel =
                    addon.type === "flat"
                      ? `+₹${addon.rate} flat`
                      : `+₹${addon.rate}/sq.ft`;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-orange-50/50 border-[#F97316]/60"
                          : "bg-[#F4F5F7] border-[#E5E7EB] hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-[#F97316] border-[#F97316] text-white"
                              : "border-slate-400 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#151923] block leading-tight">
                            {addon.name}
                          </span>
                          <span className="text-[11px] text-[#667085]">{addon.description}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#151923] shrink-0 ml-2">
                        {rateLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Quantity & Reset */}
            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#151923]">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-l-lg bg-[#F4F5F7] border border-r-0 border-[#E5E7EB] text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                    className="w-14 h-8 border-y border-[#E5E7EB] text-center font-bold text-xs text-[#151923] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 rounded-r-lg bg-[#F4F5F7] border border-l-0 border-[#E5E7EB] text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={resetCalculator}
                className="text-xs font-semibold text-[#667085] hover:text-[#151923] flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Aspect Preview & Quotation Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sticky top-24">
            {/* Live Aspect Ratio Visual Canvas */}
            <div className="bg-[#151923] rounded-2xl p-5 border border-slate-800 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2.5">
                <span className="font-heading font-bold text-slate-200 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#F97316]" />
                  Live Proportion Preview
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  {calculations.width} ft × {calculations.height} ft
                </span>
              </div>

              {/* Dynamic canvas container */}
              <div className="h-44 w-full bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center justify-center p-3 overflow-hidden relative">
                {/* Visual Banner Representation */}
                <div
                  className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 rounded shadow-lg flex flex-col items-center justify-center text-white font-black text-center p-2 relative transition-all duration-300"
                  style={{
                    width: `${Math.min(95, Math.max(25, (calculations.width / (calculations.width + calculations.height)) * 170))}%`,
                    height: `${Math.min(85, Math.max(25, (calculations.height / (calculations.width + calculations.height)) * 170))}%`,
                  }}
                >
                  <span className="text-[10px] sm:text-xs font-heading font-black tracking-tight leading-tight line-clamp-1 drop-shadow">
                    {selectedMaterial.name.split("(")[0]}
                  </span>
                  <span className="text-[9px] font-mono opacity-90 drop-shadow">
                    {calculations.width}′ × {calculations.height}′
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 font-mono">
                  Scale: 1:1 Aspect
                </div>
              </div>

              {/* Material Details Note */}
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {selectedMaterial.description}
              </p>
            </div>

            {/* Price Breakdown & WhatsApp Action Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-sm text-[#151923] border-b border-[#E5E7EB] pb-2.5">
                Quotation Breakdown
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Base Area ({calculations.width} × {calculations.height} ft):</span>
                  <span className="font-mono font-bold text-[#151923]">{calculations.areaSqFt} sq. ft.</span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Material Rate ({selectedMaterial.name.split("(")[0]}):</span>
                  <span className="font-mono font-bold text-[#151923]">{formatCurrency(calculations.materialCostPerUnit)}</span>
                </div>

                {calculations.activeAddonsList.map((addon) => (
                  <div key={addon.name} className="flex items-center justify-between text-slate-600">
                    <span className="truncate pr-2">• {addon.name}:</span>
                    <span className="font-mono font-bold text-[#151923]">{formatCurrency(addon.cost)}</span>
                  </div>
                ))}

                <div className="flex items-center justify-between text-slate-600 pt-1 border-t border-slate-100">
                  <span>Per Unit Cost:</span>
                  <span className="font-mono font-bold text-[#151923]">{formatCurrency(calculations.unitTotal)}</span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Quantity:</span>
                  <span className="font-mono font-bold text-[#151923]">× {calculations.quantity}</span>
                </div>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase font-bold text-orange-950">
                    Estimated Workshop Total:
                  </span>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-heading font-black text-[#F97316]">
                      {formatCurrency(calculations.grandTotal)}
                    </div>
                    <span className="text-[10px] text-slate-500 block">
                      Direct factory rate • No broker fees
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-900/20 active:scale-95 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Quote on WhatsApp</span>
                </a>

                <p className="text-[10px] text-center text-[#667085] leading-tight pt-1">
                  * Instant calculation for Kadapa orders. Heavy quantities qualify for additional bulk volume discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
