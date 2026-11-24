"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Heart,
  Share2,
  Lock,
  Unlock,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Download,
  Printer,
  MessageCircle,
  Phone,
  Eye,
  Info,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  PHOTOMALL_META,
  PHOTOMALL_CATEGORIES,
  CLIENT_ALBUMS,
  SAMPLE_PHOTOS,
  PhotoItem,
  ClientAlbum,
} from "@/data/photomall";
import { getWhatsAppLink } from "@/data/business";

export default function PhotomallClientView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [activePrivateAlbum, setActivePrivateAlbum] = useState<ClientAlbum | null>(null);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter photos based on category or active private album
  const displayedPhotos = useMemo(() => {
    if (activePrivateAlbum) {
      return SAMPLE_PHOTOS.filter((p) =>
        activePrivateAlbum.photoIds.includes(p.id)
      );
    }
    if (activeCategory === "all") {
      return SAMPLE_PHOTOS;
    }
    return SAMPLE_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory, activePrivateAlbum]);

  // Handle Photo Selection
  const togglePhotoSelection = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearSelections = () => {
    setSelectedPhotoIds([]);
  };

  // Handle PIN Unlock
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pinInput.trim();
    const foundAlbum = CLIENT_ALBUMS.find((a) => a.accessCode === cleanPin);
    if (foundAlbum) {
      setActivePrivateAlbum(foundAlbum);
      setPinError(null);
      setIsPinModalOpen(false);
      setPinInput("");
    } else {
      setPinError("Invalid Passcode. Please check with City Grafix or enter demo PIN: 2026");
    }
  };

  const handleExitPrivateAlbum = () => {
    setActivePrivateAlbum(null);
    setActiveCategory("all");
  };

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedPhotos.length);
    }
  };

  const prevLightboxPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + displayedPhotos.length) % displayedPhotos.length
      );
    }
  };

  // WhatsApp Message for Selected Photos
  const generateWhatsAppSelectionUrl = () => {
    const albumName = activePrivateAlbum
      ? `${activePrivateAlbum.clientName} - ${activePrivateAlbum.eventTitle}`
      : "Selected Public Gallery Photos";

    const msg = `Hello City Grafix, I have selected ${selectedPhotoIds.length} photos on City PhotoMall for our Album Printing:\n\n- Event: ${albumName}\n- Selected Photo IDs (${selectedPhotoIds.length}):\n${selectedPhotoIds.join(", ")}\n\nPlease confirm print turnaround time and Karizma album package details.`;
    return getWhatsAppLink(msg, "orders");
  };

  const activePhotoForLightbox =
    lightboxIndex !== null ? displayedPhotos[lightboxIndex] : null;

  return (
    <div className="relative pb-28 sm:pb-32">
      {/* 1. HERO HEADER */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0A1124] via-[#0E1838] to-[#060D1E]">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7A00]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2255D6]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="site-container relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>City PhotoMall • Event Photography &amp; Client Proofing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            One Portal to View, Select &amp; Print Your Moments.
          </h1>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional wedding cinematography, political campaign documentation, and traditional family event coverage across Kadapa &amp; Rayalaseema. Select your favorite photos online for luxury in-house Karizma album printing.
          </p>

          <p className="text-xs text-amber-300/90 font-medium">
            కడప వెడ్డింగ్, పొలిటికల్ ర్యాలీ &amp; ఈవెంట్ ఫోటోగ్రఫీ క్లయింట్ పోర్టల్ • డైరెక్ట్ ఆల్బమ్ సెలెక్షన్
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setIsPinModalOpen(true)}
              className="bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-orange-950/40 border-t border-amber-200/50 flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Enter Event Passcode (PIN)</span>
            </button>

            <a
              href={getWhatsAppLink("Hello City Grafix, I want to book photography coverage for our upcoming wedding / event in Kadapa. Please share packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 backdrop-blur-md flex items-center space-x-2 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Book Event Photographer</span>
            </a>
          </div>

          {/* Quick Demo Hint */}
          <p className="text-[11px] text-slate-400">
            💡 Looking for a sample private album? Tap &quot;Enter Passcode&quot; and use demo PIN <strong className="text-white font-mono">2026</strong> or <strong className="text-white font-mono">7287</strong>.
          </p>
        </div>
      </section>

      {/* 2. PRIVATE CLIENT ALBUM UNLOCKED BANNER (IF ACTIVE) */}
      {activePrivateAlbum && (
        <section className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 border-b border-blue-500/30 px-4 py-4 sticky top-16 z-30 shadow-xl backdrop-blur-md">
          <div className="site-container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0">
                <Unlock className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    Private Album Active
                  </span>
                  <span className="text-xs text-slate-400 font-mono">PIN: {activePrivateAlbum.accessCode}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  {activePrivateAlbum.clientName} — {activePrivateAlbum.eventTitle}
                </h3>
                <p className="text-xs text-slate-300">
                  📍 {activePrivateAlbum.location} • 📅 {activePrivateAlbum.eventDate}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <div className="text-right text-xs">
                <span className="text-slate-300">Selected for Album:</span>
                <span className="font-bold text-amber-300 ml-1.5 font-mono text-sm">
                  {selectedPhotoIds.length} / {activePrivateAlbum.albumLimit}
                </span>
              </div>

              <button
                onClick={handleExitPrivateAlbum}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 transition-all cursor-pointer"
              >
                Exit Album
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. CATEGORY FILTER TABS (FOR PUBLIC VIEW) */}
      {!activePrivateAlbum && (
        <section className="py-6 px-4 border-b border-white/10 sticky top-16 z-20 bg-[#060D1E]/95 backdrop-blur-md">
          <div className="site-container max-w-5xl mx-auto overflow-x-auto no-scrollbar">
            <div className="flex items-center sm:justify-center gap-2 min-w-max mx-auto py-1">
              {PHOTOMALL_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                      isSelected
                        ? "bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white shadow-md shadow-orange-950/50 border-t border-amber-200/40"
                        : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] opacity-70">({cat.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. GALLERY GRID */}
      <section className="py-10 px-4 site-container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPhotos.map((photo, index) => {
            const isSelected = selectedPhotoIds.includes(photo.id);

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-slate-900 border transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 ${
                  isSelected
                    ? "border-amber-400 ring-2 ring-amber-400/50"
                    : "border-white/15 hover:border-white/30"
                }`}
              >
                {/* Photo Image Aspect */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="font-mono text-[11px] font-black tracking-wider px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-white/15">
                      {photo.id}
                    </span>

                    {/* Heart / Album Select Button */}
                    <button
                      onClick={(e) => togglePhotoSelection(photo.id, e)}
                      title={isSelected ? "Remove from Album Selection" : "Select for Karizma Album"}
                      className={`p-2 rounded-xl backdrop-blur-md transition-all active:scale-90 cursor-pointer ${
                        isSelected
                          ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/50 scale-105"
                          : "bg-black/60 text-white hover:text-amber-300 border border-white/20 hover:bg-black/80"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isSelected ? "fill-slate-950" : "fill-none"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Subtle Studio Watermark */}
                  <div className="absolute bottom-3 right-3 text-[10px] tracking-widest font-black uppercase text-white/40 pointer-events-none select-none">
                    City Grafix Photography
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="p-4 space-y-2 bg-[#091122]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-bold">{photo.categoryLabel}</span>
                    <span className="text-slate-400 text-[11px]">{photo.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    📍 {photo.eventTitle} • {photo.location}
                  </p>

                  {/* Camera EXIF Strip */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>{photo.cameraExif.camera}</span>
                    <span>{photo.cameraExif.lens.split(" ")[1] || "Prime"} • {photo.cameraExif.aperture}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. WORKSHOP ALBUM & WALL PRINTING UPGRADE STRIP */}
      <section className="site-container max-w-6xl mx-auto px-4 my-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#0C152E] via-[#101F42] to-[#0C152E] border border-white/15 p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-[#FF7A00]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-3 text-left">
              <span className="text-amber-400 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <Printer className="w-4 h-4" />
                <span>In-House Workshop Manufacturing • No Middlemen</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Turn Your Selected Moments into Luxury Karizma Albums &amp; Acrylic Wall Mounts.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Because City Grafix operates Kadapa&apos;s leading commercial print workshop, you get direct wholesale pricing for high-gloss, matte velvet, and metallic laminated albums without paying third-party lab margins.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Karizma &amp; Canvera Bindings</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3D Acrylic Wall Frames</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>0% Bajaj EMI Available</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <a
                href={getWhatsAppLink("Hello City Grafix, I want a quotation for Karizma Wedding Album Printing & Acrylic Wall Frames in Kadapa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black py-3 px-5 rounded-xl text-center text-xs sm:text-sm shadow-lg shadow-orange-950/40 border-t border-amber-200/50 transition-all active:scale-95 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire Album Printing Rates</span>
              </a>

              <Link
                href="/pricing"
                className="bg-white/10 hover:bg-white/15 text-white font-bold py-3 px-5 rounded-xl text-center text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>View Full Gift &amp; Frame Rates</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STICKY SELECTION PROOFING DRAWER (WHEN 1+ PHOTOS ARE SELECTED) */}
      {selectedPhotoIds.length > 0 && (
        <aside
          aria-label="Photo Selection Tray"
          className="fixed bottom-3 inset-x-2 sm:inset-x-6 z-40 max-w-2xl mx-auto animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="bg-[#060D1E] border-2 border-amber-400/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
                  {selectedPhotoIds.length}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white leading-none">
                    Photos Selected
                  </h4>
                  <p className="text-[10px] text-amber-300 mt-0.5">
                    Ready to submit for album proofing
                  </p>
                </div>
              </div>

              <button
                onClick={clearSelections}
                className="text-[11px] text-slate-400 hover:text-white underline sm:ml-2 cursor-pointer"
              >
                Clear
              </button>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <a
                href={generateWhatsAppSelectionUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#E63900] hover:from-[#FFA000] hover:to-[#FF4D00] text-white font-black text-xs py-2.5 px-4 rounded-xl shadow-lg shadow-orange-950/40 border-t border-amber-200/50 flex items-center justify-center space-x-1.5 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send to WhatsApp ({selectedPhotoIds.length})</span>
              </a>
            </div>
          </div>
        </aside>
      )}

      {/* 7. PASSCODE (PIN) UNLOCK MODAL */}
      {isPinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#091122] border-2 border-white/20 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl relative space-y-4">
            <button
              onClick={() => setIsPinModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-white">Unlock Client Event Album</h3>
              <p className="text-xs text-slate-300">
                Enter the 4-digit passcode given by City Grafix to view your private family or campaign photos.
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter 4-digit PIN (e.g. 2026)"
                  className="w-full text-center tracking-widest font-mono text-xl font-bold py-3 px-4 rounded-xl bg-slate-950 border border-white/20 text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 uppercase placeholder:text-slate-600"
                  autoFocus
                />
                {pinError && (
                  <p className="text-xs text-rose-400 mt-2 text-center">{pinError}</p>
                )}
              </div>

              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-white block">Try Active Demo Passcodes:</span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] pt-1">
                  <button
                    type="button"
                    onClick={() => setPinInput("2026")}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 text-left border border-white/10"
                  >
                    💍 Wedding: <strong className="text-amber-300 font-mono">2026</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPinInput("7287")}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 text-left border border-white/10"
                  >
                    🏛️ Rally: <strong className="text-amber-300 font-mono">7287</strong>
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white font-bold py-3 rounded-xl shadow-md text-xs sm:text-sm active:scale-95 transition-all cursor-pointer"
                >
                  Unlock Album
                </button>
                <button
                  type="button"
                  onClick={() => setIsPinModalOpen(false)}
                  className="px-4 py-3 bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. LIGHTBOX MODAL */}
      {activePhotoForLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevLightboxPhoto}
            className="absolute left-3 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightboxPhoto}
            className="absolute right-3 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Canvas */}
          <div className="relative max-w-5xl w-full h-[75vh] mx-4 flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={activePhotoForLightbox.src}
                alt={activePhotoForLightbox.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Info Bar inside Lightbox */}
            <div className="w-full bg-[#091122]/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
              <div className="text-left space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-amber-300 font-bold bg-black/60 px-2 py-0.5 rounded">
                    {activePhotoForLightbox.id}
                  </span>
                  <span className="font-bold">{activePhotoForLightbox.title}</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {activePhotoForLightbox.eventTitle} • {activePhotoForLightbox.location}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => togglePhotoSelection(activePhotoForLightbox.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    selectedPhotoIds.includes(activePhotoForLightbox.id)
                      ? "bg-amber-400 text-slate-950 font-black"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      selectedPhotoIds.includes(activePhotoForLightbox.id)
                        ? "fill-slate-950"
                        : "fill-none"
                    }`}
                  />
                  <span>
                    {selectedPhotoIds.includes(activePhotoForLightbox.id)
                      ? "Selected for Album"
                      : "Select for Album"}
                  </span>
                </button>

                <a
                  href={getWhatsAppLink(
                    `Hello City Grafix, I want to order a custom Acrylic Wall Frame of Photo #${activePhotoForLightbox.id} (${activePhotoForLightbox.title}):`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white font-bold px-4 py-2 rounded-xl flex items-center space-x-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Order Print / Frame</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
