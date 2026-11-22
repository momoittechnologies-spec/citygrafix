"use client";

import React, { useState, useRef } from "react";
import {
  UploadCloud,
  FileCheck,
  AlertCircle,
  MessageCircle,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  X,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/business";

interface FileInspection {
  name: string;
  sizeMb: string;
  type: string;
  dimensions?: { width: number; height: number };
  dpi300Estimate?: string;
}

export default function ArtworkDropzone({ defaultService = "Flex Banner Printing" }: { defaultService?: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [inspection, setInspection] = useState<FileInspection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedService, setSelectedService] = useState(defaultService);
  const [notes, setNotes] = useState("");
  const [referenceId, setReferenceId] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_SIZE_MB = 100;
  const ALLOWED_EXTENSIONS = [
    ".pdf",
    ".jpg",
    ".jpeg",
    ".png",
    ".tiff",
    ".tif",
    ".cdr",
    ".psd",
    ".dwg",
    ".ai",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const processSelectedFile = (selectedFile: File) => {
    setError(null);
    const ext = "." + selectedFile.name.split(".").pop()?.toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setError(
        `Unsupported file type (${ext}). Please upload PDF, JPG, PNG, TIFF, CorelDRAW (.cdr), Photoshop (.psd), or AutoCAD (.dwg).`
      );
      return;
    }

    const sizeInMb = selectedFile.size / (1024 * 1024);
    if (sizeInMb > MAX_SIZE_MB) {
      setError(`File size (${sizeInMb.toFixed(1)} MB) exceeds maximum limit of ${MAX_SIZE_MB} MB.`);
      return;
    }

    setFile(selectedFile);
    const newRefId = `CG-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setReferenceId(newRefId);

    const baseInspection: FileInspection = {
      name: selectedFile.name,
      sizeMb: sizeInMb.toFixed(2),
      type: ext.toUpperCase().replace(".", ""),
    };

    // If image, inspect dimensions
    if (["image/jpeg", "image/png", "image/webp"].includes(selectedFile.type)) {
      const img = new Image();
      img.onload = () => {
        const widthInches = (img.width / 300).toFixed(1);
        const heightInches = (img.height / 300).toFixed(1);
        setInspection({
          ...baseInspection,
          dimensions: { width: img.width, height: img.height },
          dpi300Estimate: `Approx. ${widthInches}" × ${heightInches}" at 300 DPI high resolution`,
        });
      };
      img.src = URL.createObjectURL(selectedFile);
    } else {
      setInspection(baseInspection);
    }
  };

  const clearFile = () => {
    setFile(null);
    setInspection(null);
    setError(null);
    setIsSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !inspection) {
      setError("Please select or drop an artwork file first.");
      return;
    }

    const message = `Hello City Grafix Kadapa,
*ARTWORK SUBMISSION & ORDER ENQUIRY*
• Reference Code: *${referenceId}*
• Customer Name: ${customerName || "Customer"}
• Phone Number: ${customerPhone || "Not provided"}
• Required Service: ${selectedService}
• Artwork File: ${inspection.name} (${inspection.type}, ${inspection.sizeMb} MB${
      inspection.dimensions ? `, ${inspection.dimensions.width}×${inspection.dimensions.height}px` : ""
    })
${inspection.dpi300Estimate ? `• Print Size Check: ${inspection.dpi300Estimate}\n` : ""}• Customer Instructions: ${
      notes || "Please inspect file, confirm pricing and advise turnaround time."
    }

I am attaching the file directly in this WhatsApp chat.`;

    setIsSuccess(true);
    window.open(getWhatsAppLink(message, "orders"), "_blank");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5">
            <UploadCloud className="w-4 h-4" />
            Direct Artwork Submission Desk
          </span>
          <h3 className="text-xl font-heading font-black text-brand-navy mt-1">
            Upload Artwork &amp; Request Print Proof
          </h3>
        </div>
        <div className="flex items-center text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full font-semibold border border-emerald-100">
          <ShieldCheck className="w-3.5 h-3.5 mr-1" />
          <span>Direct to Kadapa Workshop</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dropzone Container */}
        {!file ? (
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 hover:border-brand-royal bg-slate-50 hover:bg-blue-50/40 rounded-2xl p-8 text-center cursor-pointer transition-all space-y-3"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.tiff,.tif,.cdr,.psd,.dwg,.ai"
              className="hidden"
            />
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mx-auto text-brand-royal">
              <UploadCloud className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">
                Click to browse or drag and drop your artwork file
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Supported: PDF, CorelDRAW (.cdr), Photoshop (.psd), TIFF, JPG, PNG, AutoCAD (.dwg)
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Maximum file size: 100 MB</p>
            </div>
          </div>
        ) : (
          /* File Inspected Card */
          <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 font-mono font-bold text-xs shadow-sm">
                  {inspection?.type}
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy break-all">
                    {inspection?.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Size: <strong>{inspection?.sizeMb} MB</strong> • Ref:{" "}
                    <span className="font-mono text-brand-royal font-bold">{referenceId}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={clearFile}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-white transition-colors"
                title="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {inspection?.dimensions && (
              <div className="bg-white/80 rounded-xl p-3 border border-blue-100 text-xs text-slate-700 space-y-1">
                <div className="flex items-center space-x-2 font-semibold">
                  <ImageIcon className="w-3.5 h-3.5 text-brand-royal" />
                  <span>
                    Resolution: {inspection.dimensions.width} × {inspection.dimensions.height} pixels
                  </span>
                </div>
                {inspection.dpi300Estimate && (
                  <p className="text-[11px] text-emerald-700 font-medium pl-5.5">
                    ✓ {inspection.dpi300Estimate}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="artwork-customer-name" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Your Name:
            </label>
            <input
              id="artwork-customer-name"
              type="text"
              required
              placeholder="e.g. Anand Reddy"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50"
            />
          </div>

          <div>
            <label htmlFor="artwork-customer-phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Phone / WhatsApp Number:
            </label>
            <input
              id="artwork-customer-phone"
              type="tel"
              required
              placeholder="e.g. 98765 43210"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="artwork-service" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Selected Printing Service:
            </label>
            <select
              id="artwork-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50 font-medium"
            >
              <option>Star Flex Banner Printing (340+ GSM)</option>
              <option>Jumbo Xerox / A0 CAD Blueprints</option>
              <option>3D Acrylic LED Glow Signboard</option>
              <option>Personalized Photo Frames (A4 to 24x36)</option>
              <option>Ceramic Photo Mugs & Magic Mugs</option>
              <option>Custom Round Badges (Pin / Magnetic)</option>
              <option>DTF Custom T-Shirt / Fabric Printing</option>
              <option>Visiting Cards & Carbonless Bill Books</option>
              <option>Vinyl Stickers & Sunboard Boards</option>
              <option>Auto Publicity Campaign</option>
            </select>
          </div>

          <div>
            <label htmlFor="artwork-notes" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Dimensions &amp; Special Instructions:
            </label>
            <input
              id="artwork-notes"
              type="text"
              placeholder="e.g. 10x4 ft with brass eyelets, delivery by 5 PM"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-royal bg-slate-50"
            />
          </div>
        </div>

        {/* Submit Action */}
        <div className="space-y-3 pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black py-3.5 px-5 rounded-2xl shadow-lg shadow-orange-950/30 border-t border-amber-200/50 transition-all flex items-center justify-center space-x-2 text-sm active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Submit Order Details &amp; Open WhatsApp Desk</span>
          </button>

          <p className="text-[11px] text-center text-slate-500">
            🔒 Private &amp; Direct: After clicking, attach your selected file in the WhatsApp chat window that opens.
          </p>
        </div>

        {isSuccess && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Reference Code Generated: {referenceId}</span>
            </div>
            <p>
              Your WhatsApp chat has opened with the order desk. Simply tap the paperclip icon in WhatsApp to send your file to our technician.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
