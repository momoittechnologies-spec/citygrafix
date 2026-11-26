"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Heart,
  Lock,
  Unlock,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Printer,
  MessageCircle,
  Phone,
  Eye,
  EyeOff,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronDown,
  Calendar,
  MapPin,
  HelpCircle,
  Megaphone,
  Building,
} from "lucide-react";
import {
  PHOTOMALL_META,
  PHOTOMALL_CATEGORIES,
  ALBUM_PACKAGES,
  CLIENT_ALBUMS,
  SAMPLE_PHOTOS,
  PHOTOGRAPHY_SERVICES,
  PHOTOMALL_FAQS,
  PhotoItem,
  ClientAlbum,
  AlbumPackage,
} from "@/data/photomall";
import { getWhatsAppLink } from "@/data/business";

export default function PhotomallClientView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSubEvent, setSelectedSubEvent] = useState<string>("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [showWatermark, setShowWatermark] = useState<boolean>(true);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [activePrivateAlbum, setActivePrivateAlbum] = useState<ClientAlbum | null>(null);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>("pkg-karizma-royal");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Compute available sub-events
  const availableSubEvents = useMemo(() => {
    if (activePrivateAlbum && activePrivateAlbum.subEvents?.length) {
      return activePrivateAlbum.subEvents;
    }
    const set = new Set<string>();
    SAMPLE_PHOTOS.forEach((p) => {
      if (activeCategory === "all" || p.category === activeCategory) {
        if (p.subEvent) set.add(p.subEvent);
      }
    });
    return ["All", ...Array.from(set)];
  }, [activePrivateAlbum, activeCategory]);

  // Target limit for album
  const albumTarget = activePrivateAlbum ? activePrivateAlbum.albumLimit : 80;
  const progressPercent = Math.min(100, Math.round((selectedPhotoIds.length / albumTarget) * 100));

  // Filter photos based on category, private album, sub-event, and favorites toggle
  const displayedPhotos = useMemo(() => {
    let list: PhotoItem[] = [];

    if (activePrivateAlbum) {
      list = SAMPLE_PHOTOS.filter((p) => activePrivateAlbum.photoIds.includes(p.id));
    } else if (activeCategory === "all") {
      list = SAMPLE_PHOTOS;
    } else {
      list = SAMPLE_PHOTOS.filter((p) => p.category === activeCategory);
    }

    // Filter by SubEvent
    if (selectedSubEvent !== "All") {
      list = list.filter((p) => p.subEvent === selectedSubEvent);
    }

    // Filter by Favorites Only
    if (showFavoritesOnly) {
      list = list.filter((p) => selectedPhotoIds.includes(p.id));
    }

    return list;
  }, [activeCategory, activePrivateAlbum, selectedSubEvent, showFavoritesOnly, selectedPhotoIds]);

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
      setSelectedSubEvent("All");
      setShowFavoritesOnly(false);
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
    setSelectedSubEvent("All");
    setShowFavoritesOnly(false);
  };

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxPhoto = () => {
    if (lightboxIndex !== null && displayedPhotos.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % displayedPhotos.length);
    }
  };

  const prevLightboxPhoto = () => {
    if (lightboxIndex !== null && displayedPhotos.length > 0) {
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

    const chosenPkg = ALBUM_PACKAGES.find((p) => p.id === selectedPackage);
    const pkgText = chosenPkg ? `\n- Chosen Album Type: ${chosenPkg.name} (${chosenPkg.size})` : "";

    const msg = `Hello City Grafix, I have finalized ${selectedPhotoIds.length} photos on City PhotoMall for our Album Printing:\n\n- Event: ${albumName}${pkgText}\n- Selected Photo IDs (${selectedPhotoIds.length}):\n${selectedPhotoIds.join(", ")}\n\nPlease confirm print turnaround time and dispatch schedule.`;
    return getWhatsAppLink(msg, "orders");
  };

  const activePhotoForLightbox =
    lightboxIndex !== null ? displayedPhotos[lightboxIndex] : null;

  return (
    <div className="relative pb-28 sm:pb-32">
      {/* 1. HERO HEADER */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0A1124] via-[#0E1838] to-[#060D1E]">
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
        <section className="py-4 px-4 border-b border-white/10 sticky top-16 z-20 bg-[#060D1E]/95 backdrop-blur-md">
          <div className="site-container max-w-6xl mx-auto overflow-x-auto no-scrollbar">
            <div className="flex items-center sm:justify-center gap-2 min-w-max mx-auto py-1">
              {PHOTOMALL_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setSelectedSubEvent("All");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                      isSelected
                        ? "bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white shadow-md shadow-orange-950/50 border-t border-amber-200/40"
                        : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. SUB-EVENT PILLS & PROOFING CONTROLS TOOLBAR */}
      <section className="py-4 px-4 border-b border-white/10 bg-[#0A1227]/90 backdrop-blur-sm">
        <div className="site-container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          {/* Sub-event pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] shrink-0">
              Ceremony / Phase:
            </span>
            {availableSubEvents.map((sub) => {
              const active = selectedSubEvent === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubEvent(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? "bg-amber-400 text-slate-950 font-black shadow-sm"
                      : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>

          {/* Quick Toolbar Toggles */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end shrink-0">
            {/* Show Favorites Only Toggle */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer border ${
                showFavoritesOnly
                  ? "bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm"
                  : "bg-white/5 text-slate-300 hover:text-white border-white/15"
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  showFavoritesOnly ? "fill-rose-400 text-rose-400" : "text-slate-400"
                }`}
              />
              <span>
                {showFavoritesOnly ? "Showing Favorites" : "Favorites Only"} ({selectedPhotoIds.length})
              </span>
            </button>

            {/* Watermark Toggle */}
            <button
              onClick={() => setShowWatermark(!showWatermark)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:text-white border border-white/15 transition-all flex items-center space-x-1.5 cursor-pointer"
              title={showWatermark ? "Hide studio watermark" : "Show studio watermark"}
            >
              {showWatermark ? <Eye className="w-3.5 h-3.5 text-cyan-400" /> : <EyeOff className="w-3.5 h-3.5 text-slate-400" />}
              <span>{showWatermark ? "Watermark: On" : "Watermark: Off"}</span>
            </button>
          </div>
        </div>

        {/* Album Progress Bar */}
        <div className="site-container max-w-7xl mx-auto mt-3 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-slate-400">Album Selection:</span>
            <strong className="text-amber-300 font-mono text-sm">
              {selectedPhotoIds.length} / {albumTarget}
            </strong>
            <span className="text-slate-400 text-[11px]">
              ({progressPercent}% of target)
            </span>
          </div>

          <div className="w-full sm:w-72 bg-slate-950/80 rounded-full h-2.5 overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="text-[11px] text-slate-400 text-right w-full sm:w-auto">
            {selectedPhotoIds.length < albumTarget ? (
              <span>Need {albumTarget - selectedPhotoIds.length} more photos for complete album</span>
            ) : selectedPhotoIds.length === albumTarget ? (
              <span className="text-emerald-400 font-bold">Target reached! Ready for printing</span>
            ) : (
              <span className="text-amber-300 font-bold">
                {selectedPhotoIds.length - albumTarget} extra photos selected (additional sheets)
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 5. GALLERY GRID */}
      <section className="py-8 px-4 site-container max-w-7xl mx-auto">
        {displayedPhotos.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/5 rounded-3xl border border-white/10 max-w-md mx-auto space-y-3">
            <Heart className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="text-lg font-bold text-white">No photos match this filter</h4>
            <p className="text-xs text-slate-400">
              {showFavoritesOnly
                ? "You haven't selected any photos yet. Tap the heart icon on any photo to add it to your album."
                : "No photos found under this category or ceremony phase."}
            </p>
            {showFavoritesOnly && (
              <button
                onClick={() => setShowFavoritesOnly(false)}
                className="mt-2 bg-amber-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl"
              >
                View All Event Photos
              </button>
            )}
          </div>
        ) : (
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

                    {/* Watermark Diagonal Overlay (If enabled) */}
                    {showWatermark && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 opacity-30 group-hover:opacity-40 transition-opacity">
                        <div className="transform -rotate-12 border-2 border-white/60 px-4 py-1 rounded-xl text-center backdrop-blur-[1px]">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white block">
                            CITY GRAFIX PHOTOGRAPHY
                          </span>
                          <span className="text-[9px] tracking-wider text-amber-300 block">
                            CLIENT PROOF • NOT FOR REPRODUCTION
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[11px] font-black tracking-wider px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-white/15">
                          {photo.id}
                        </span>
                        {photo.subEvent && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white">
                            {photo.subEvent}
                          </span>
                        )}
                      </div>

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

                    {/* Subtle Studio Corner Tag */}
                    <div className="absolute bottom-3 right-3 text-[10px] tracking-widest font-black uppercase text-white/50 pointer-events-none select-none z-10">
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
        )}
      </section>

      {/* 6. KARIZMA ALBUM PACKAGES & BINDINGS SECTION */}
      <section className="site-container max-w-7xl mx-auto px-4 my-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Direct Workshop Album Bindings • Kadapa In-House</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Choose Your Luxury Karizma Album Package
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Handcrafted with metallic silk, 3D beveled acrylic glass covers, and non-tearable velvet pages. Because we manufacture albums locally in Kadapa, you save up to 35% over third-party studio commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALBUM_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? "bg-gradient-to-b from-[#101F42] to-[#0A1227] border-amber-400 ring-2 ring-amber-400/50 shadow-2xl scale-[1.02]"
                    : "bg-[#091122] border-white/15 hover:border-white/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                      <p className="text-xs text-amber-300 font-semibold">{pkg.size}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-amber-400 border-amber-400 text-slate-950"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>

                  <div className="text-xl sm:text-2xl font-black text-white">
                    {pkg.priceEstimate}
                    <span className="text-xs text-slate-400 font-normal block">Complete Print &amp; Hardcover Box</span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pkg.sheets}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pkg.finish}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pkg.boxType}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <a
                    href={getWhatsAppLink(
                      `Hello City Grafix, I want to inquire about the ${pkg.name} (${pkg.size}) album package for our event.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-[#FF7A00] to-[#E63900] text-white shadow-md shadow-orange-950/40"
                        : "bg-white/10 hover:bg-white/15 text-white"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire {pkg.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. PHOTOGRAPHY SERVICES SECTION */}
      <section className="site-container max-w-7xl mx-auto px-4 my-14">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4" />
            <span>Complete Event Coverage • Kadapa &amp; Rayalaseema</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Comprehensive Photography &amp; Cinematography Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            From traditional weddings and political roadshows to grand store openings. Our crew is equipped with Sony FX3 cinema cameras, DJI 4K drones, and multi-light setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHOTOGRAPHY_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#091122] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-amber-400/50 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{srv.title}</h3>
                  <p className="text-xs text-amber-300 font-semibold">{srv.teluguTitle}</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                  {srv.startingRate}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {srv.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                {srv.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center justify-between">
                <a
                  href={getWhatsAppLink(
                    `Hello City Grafix, I want to check availability and book: ${srv.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-white/20 flex items-center space-x-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Check Availability on WhatsApp</span>
                </a>

                <a
                  href={`tel:${PHOTOMALL_META.photographyDeskPhone}`}
                  className="text-xs font-bold text-slate-400 hover:text-white flex items-center space-x-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>{PHOTOMALL_META.photographyDeskPhone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PHOTOMALL FAQ ACCORDION */}
      <section className="site-container max-w-4xl mx-auto px-4 my-14">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Everything You Need to Know About City PhotoMall
          </h2>
        </div>

        <div className="space-y-3">
          {PHOTOMALL_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#091122] border border-white/15 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. STICKY SELECTION PROOFING TRAY (POSITIONED ABOVE MOBILE STICKY BAR) */}
      {selectedPhotoIds.length > 0 && (
        <aside
          aria-label="Photo Selection Tray"
          className="fixed bottom-[4.85rem] sm:bottom-4 inset-x-2 sm:inset-x-6 z-40 max-w-3xl mx-auto animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="bg-[#060D1E]/95 backdrop-blur-xl border-2 border-amber-400/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center space-x-2.5">
                <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
                  {selectedPhotoIds.length}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white leading-none">
                    Photos Selected for Album
                  </h4>
                  <p className="text-[10px] text-amber-300 mt-0.5">
                    Target: {selectedPhotoIds.length} / {albumTarget} photos ({progressPercent}%)
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
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className="px-3 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 transition-all"
              >
                {showFavoritesOnly ? "View All" : "Review Set"}
              </button>

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

      {/* 10. PASSCODE (PIN) UNLOCK MODAL */}
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
                    className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-left border border-white/10"
                  >
                    💍 Wedding: <strong className="text-amber-300 font-mono">2026</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPinInput("7287")}
                    className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-left border border-white/10"
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
                  className="px-4 py-3 bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 11. FULLSCREEN LIGHTBOX MODAL */}
      {activePhotoForLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevLightboxPhoto}
            className="absolute left-3 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightboxPhoto}
            className="absolute right-3 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
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

              {/* Watermark in Lightbox if enabled */}
              {showWatermark && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 opacity-30">
                  <div className="transform -rotate-12 border-2 border-white/60 px-6 py-2 rounded-2xl text-center backdrop-blur-[1px]">
                    <span className="text-sm sm:text-base font-black uppercase tracking-widest text-white block">
                      CITY GRAFIX PHOTOGRAPHY
                    </span>
                    <span className="text-xs tracking-wider text-amber-300 block">
                      CLIENT PROOF • WATERMARKED
                    </span>
                  </div>
                </div>
              )}
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
