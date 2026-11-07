"use client";

import React, { useState, useMemo } from "react";
import { Calculator, MessageCircle, Sparkles, Check, ArrowRight, Info, Layers, RefreshCw } from "lucide-react";
import { CALCULATOR_MATERIALS, CALCULATOR_ADDONS, POPULAR_SIZE_PRESETS, CalculatorMaterial, CalculatorAddon } from "@/data/pricing";
import { formatCurrency } from "@/lib/utils";
import { getWhatsAppLink } from "@/data/business";

export default function FlexCalculator() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("star-flex");
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(4);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(["brass-eyelets"]);

  const selectedMaterial = useMemo<CalculatorMaterial>(() => {
    return CALCULATOR_MATERIALS.find((m) => m.id === selectedMaterialId) || CALCULATOR_MATERIALS[0];
  }, [selectedMaterialId]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const applyPreset = (presetWidth: number, presetHeight: number) => {
    setWidth(presetWidth);
    setHeight(presetHeight);
  };

  // Calculations
  const calculations = useMemo(() => {
    const validWidth = Math.max(1, Number(width) || 1);
    const validHeight = Math.max(1, Number(height) || 1);
    const validQty = Math.max(1, Number(quantity) || 1);
    const areaSqFt = validWidth * validHeight;

    const rawMaterialCostPerUnit = areaSqFt * selectedMaterial.ratePerSqFt;
    const materialCostPerUnit = Math.max(rawMaterialCostPerUnit, selectedMaterial.minCharge);
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
    const addonsText = calculations.activeAddonsList.length > 0
      ? `Add-ons: ${calculations.activeAddonsList.map(a => a.name).join(", ")}`
      : "Add-ons: None";

    const msg = `Hello City Grafix Kadapa, I used your website price calculator for a printing estimate:
• Product: ${selectedMaterial.name}
• Dimensions: ${calculations.width} ft × ${calculations.height} ft (${calculations.areaSqFt} sq. ft.)
• Quantity: ${calculations.quantity}
• ${addonsText}
• Estimated Total: ${formatCurrency(calculations.grandTotal)}

Please confirm the quote and let me know the artwork submission and delivery time.`;

    const line = selectedMaterialId === "led-glow-board" ? "signage" : "orders";
    return getWhatsAppLink(msg, line);
  }, [calculations, selectedMaterial, selectedMaterialId]);

  // Dynamic Aspect Ratio Preview
  const aspectRatio = useMemo(() => {
    const w = calculations.width;
    const h = calculations.height;
    // Bound ratio to prevent extreme distortions in preview box
    const ratio = w / h;
    return Math.min(Math.max(ratio, 0.4), 3.5);
  }, [calculations.width, calculations.height]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden" id="calculator">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navyLight to-brand-dark p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-brand-red/30 border border-brand-red/40 px-3 py-1 rounded-full text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Direct Workshop Rate Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Instant Flex & Signage Price Estimator
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Select your printing substrate, input custom feet dimensions, and get transparent workshop rates instantly.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs bg-white/10 px-3 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">Zero Middlemen • 100% Direct Rates</span>
          </div>
        </div>
      </div>

      {/* Main Calculator Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Inputs & Material Selection */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Material Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
              1. Choose Printing Material / Substrate:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CALCULATOR_MATERIALS.map((mat) => {
                const isSelected = mat.id === selectedMaterialId;
                return (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setSelectedMaterialId(mat.id)}
                    className={`text-left p-3 rounded-xl border transition-all relative ${
                      isSelected
                        ? "border-brand-royal bg-blue-50/70 shadow-sm ring-2 ring-brand-royal/20"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${isSelected ? "text-brand-royal" : "text-slate-900"}`}>
                        {mat.name.split("(")[0]}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        ₹{mat.ratePerSqFt}/sq.ft
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{mat.teluguName}</div>
                    {mat.minCharge > 0 && (
                      <div className="text-[10px] text-slate-400 mt-0.5">Min. order: ₹{mat.minCharge}</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Dimensions & Popular Size Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                2. Enter Dimensions (in Feet):
              </label>
              <span className="text-[11px] text-brand-royal font-semibold">Standard Unit: Feet</span>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-xs text-slate-400 self-center mr-1">Presets:</span>
              {POPULAR_SIZE_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => applyPreset(preset.width, preset.height)}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                    width === preset.width && height === preset.height
                      ? "bg-brand-navy text-white border-brand-navy font-bold"
                      : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {preset.name} ({preset.width}×{preset.height} ft)
                </button>
              ))}
            </div>

            {/* Dimension Sliders & Number Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {/* Width */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-700">Width (Horizontal):</span>
                  <div className="flex items-center space-x-1">
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, Number(e.target.value) || 1))}
                      className="w-16 px-2 py-1 text-right font-mono font-bold text-base sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-royal"
                    />
                    <span className="text-xs text-slate-500 font-semibold">ft</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={40}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-brand-royal h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-700">Height (Vertical):</span>
                  <div className="flex items-center space-x-1">
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 1))}
                      className="w-16 px-2 py-1 text-right font-mono font-bold text-base sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-royal"
                    />
                    <span className="text-xs text-slate-500 font-semibold">ft</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-brand-royal h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-3 flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-700">Quantity (Units / Banners):</span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-mono font-bold text-base w-8 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Optional Add-ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              3. Optional Finishing & Add-ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CALCULATOR_ADDONS.map((addon) => {
                const isChecked = selectedAddonIds.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-start space-x-2.5 transition-all ${
                      isChecked
                        ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                        isChecked ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-800">{addon.name}</span>
                        <span className="text-[11px] font-mono text-slate-600 font-bold">
                          +₹{addon.rate}{addon.type === "per_sqft" ? "/sqft" : " flat"}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5">{addon.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Aspect-Ratio Preview & Calculation Summary */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center space-x-1">
                <Layers className="w-3.5 h-3.5 text-brand-royal" />
                <span>Live Visual Proportion</span>
              </span>
              <span className="text-xs font-mono font-bold text-brand-navy">
                {calculations.width} ft × {calculations.height} ft
              </span>
            </div>

            {/* Proportional Render Box */}
            <div className="w-full h-44 bg-slate-900 rounded-xl flex items-center justify-center p-3 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 to-transparent pointer-events-none" />

              {/* Proportional Box */}
              <div
                style={{
                  aspectRatio: `${aspectRatio}`,
                  maxHeight: "85%",
                  maxWidth: "90%",
                }}
                className="w-full bg-gradient-to-r from-brand-red via-brand-redDark to-brand-red rounded border-2 border-white/60 shadow-2xl relative flex flex-col items-center justify-center text-white p-2 transition-all duration-300"
              >
                {/* Simulated Brass Eyelets */}
                {selectedAddonIds.includes("brass-eyelets") && (
                  <>
                    <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-amber-300 border border-amber-600 shadow" />
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-300 border border-amber-600 shadow" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-amber-300 border border-amber-600 shadow" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-amber-300 border border-amber-600 shadow" />
                  </>
                )}

                <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">CITY GRAFIX</span>
                <span className="text-xs font-black drop-shadow text-center">
                  {calculations.width} ft × {calculations.height} ft
                </span>
                <span className="text-[9px] text-amber-300 font-semibold mt-0.5">
                  {calculations.areaSqFt} Sq. Ft.
                </span>
              </div>
            </div>

            {/* Price Breakdown Table */}
            <div className="mt-5 space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Selected Substrate:</span>
                <span className="font-semibold text-slate-900 text-right">{selectedMaterial.name.split("(")[0]}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Total Area ({calculations.width} × {calculations.height} ft):</span>
                <span className="font-mono font-bold text-slate-900">{calculations.areaSqFt} sq. ft.</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Substrate Rate:</span>
                <span className="font-mono font-bold text-slate-900">₹{selectedMaterial.ratePerSqFt} / sq. ft.</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Material Cost (Unit):</span>
                <span className="font-mono font-bold text-slate-900">
                  {formatCurrency(calculations.materialCostPerUnit)}
                  {calculations.isMinChargeApplied && (
                    <span className="text-[10px] text-amber-600 ml-1 font-normal">(Min. order applied)</span>
                  )}
                </span>
              </div>

              {calculations.activeAddonsList.map((addon) => (
                <div key={addon.name} className="flex justify-between py-1 text-slate-600">
                  <span>+ {addon.name}:</span>
                  <span className="font-mono font-semibold text-slate-800">{formatCurrency(addon.cost)}</span>
                </div>
              ))}

              {calculations.quantity > 1 && (
                <div className="flex justify-between py-1.5 border-t border-slate-200 font-semibold text-slate-700">
                  <span>Quantity Multiplier:</span>
                  <span className="font-mono">× {calculations.quantity}</span>
                </div>
              )}
            </div>
          </div>

          {/* Grand Total Box & WhatsApp CTA */}
          <div className="pt-4 border-t-2 border-slate-200">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">Estimated Price</span>
                <span className="text-[10px] text-slate-400">Direct workshop rate</span>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-brand-navy tracking-tight">
                  {formatCurrency(calculations.grandTotal)}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center justify-center space-x-2 text-sm group"
            >
              <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>Send This Estimate to WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-[11px] text-slate-400 text-center mt-2 flex items-center justify-center space-x-1">
              <Info className="w-3 h-3 text-slate-400" />
              <span>Final price may vary with on-site structural erection or delivery.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
