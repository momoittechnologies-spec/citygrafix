"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Download,
  X,
  Share,
  PlusSquare,
  Smartphone,
  Zap,
  WifiOff,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PwaRegister() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker in supporting browsers
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            reg.onupdatefound = () => {
              const worker = reg.installing;
              if (worker) {
                worker.onstatechange = () => {
                  if (worker.state === "installed" && navigator.serviceWorker.controller) {
                    console.log("[PWA] City Grafix updated in background.");
                  }
                };
              }
            };
          })
          .catch((err) => {
            console.error("[PWA] Service Worker registration:", err);
          });
      });
    }

    // 2. Detect platform & standalone mode
    if (typeof window !== "undefined") {
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true;

      if (isStandalone) {
        setIsInstalled(true);
        return;
      }

      const iosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
      setIsIos(iosDevice);
    }

    // 3. Capture beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setIsModalOpen(false);
      setDeferredPrompt(null);
      localStorage.removeItem("citygrafix_pwa_dismissed");
    });

    // 4. Polite Engagement-Based Trigger:
    // NEVER disturb the user on initial load!
    // Only open after scrolling at least 50% of the page AND spending 25+ seconds, if never dismissed.
    let engagementTimer: NodeJS.Timeout | null = null;
    let hasScrolledHalfway = false;

    const checkEngagement = () => {
      if (hasScrolledHalfway) return;

      const dismissedAt = localStorage.getItem("citygrafix_pwa_dismissed");
      if (dismissedAt) {
        const timePassed = Date.now() - parseInt(dismissedAt, 10);
        // Do not prompt again if dismissed within the last 14 days
        if (timePassed < 14 * 24 * 60 * 60 * 1000) {
          return;
        }
      }

      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0 && window.scrollY / scrollTotal > 0.45) {
        hasScrolledHalfway = true;

        // Give a generous 10s delay after scrolling halfway before opening modal
        engagementTimer = setTimeout(() => {
          setIsModalOpen(true);
        }, 10000);
      }
    };

    window.addEventListener("scroll", checkEngagement, { passive: true });

    // 5. Global Custom Event: Explicitly opened by user clicking "Install App" anywhere
    const handleManualTrigger = () => {
      setIsModalOpen(true);
    };

    window.addEventListener("citygrafix-install-app", handleManualTrigger);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("citygrafix-install-app", handleManualTrigger);
      window.removeEventListener("scroll", checkEngagement);
      if (engagementTimer) clearTimeout(engagementTimer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setIsModalOpen(false);
      setDeferredPrompt(null);
    } else if (!isIos) {
      // If browser doesn't support programmatic install prompt (e.g. desktop Firefox)
      alert(
        "To install City Grafix:\n\n• On Chrome/Edge: Click the install icon (⊕) on the right side of the address bar.\n• On Android: Tap the menu (⋮) and select 'Add to Home screen' or 'Install app'."
      );
    }
  };

  const handleDismiss = useCallback(() => {
    setIsModalOpen(false);
    // Dismiss for 14 days so it does not disturb the user
    localStorage.setItem("citygrafix_pwa_dismissed", Date.now().toString());
  }, []);

  if (!isModalOpen || isInstalled) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Install City Grafix Mobile App"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={handleDismiss}
    >
      {/* Modal / Bottom Sheet Card */}
      <div
        className="bg-[#0B132B] text-white w-full max-w-md rounded-t-[32px] sm:rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-7 space-y-5 animate-in slide-in-from-bottom-6 duration-300 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto sm:hidden -mt-2 mb-3" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20 p-1 shrink-0 flex items-center justify-center shadow-lg ring-2 ring-amber-400/20">
              <Image
                src="/icons/icon-192x192.png"
                alt="City Grafix App Icon"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                  City Grafix App
                </h3>
                <span className="bg-[#FAC800] text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                  Official
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                City Grafix Kadapa • Direct In-House Hub
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Content: Android/Desktop vs iOS Safari */}
        {isIos ? (
          /* iOS Safari Specific Step-by-Step Instructions */
          <div className="space-y-3 pt-1">
            <div className="text-xs text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Smartphone className="w-4 h-4" />
              <span>Install on iPhone or iPad</span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <p className="leading-snug pt-0.5">
                  Tap the <strong className="text-white">Share</strong> icon <Share className="w-3.5 h-3.5 inline mx-1 text-cyan-400" /> at the bottom of Safari.
                </p>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <p className="leading-snug pt-0.5">
                  Scroll down the options and select <strong className="text-white">Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1 text-amber-400" />.
                </p>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <p className="leading-snug pt-0.5">
                  Tap <strong className="text-white">Add</strong> in the top-right corner to place the app on your home screen!
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="w-full bg-[#E50914] hover:bg-red-600 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
            >
              Done
            </button>
          </div>
        ) : (
          /* Standard App Feature Highlights & Install CTA */
          <div className="space-y-4">
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>1-Tap Instant Ordering:</strong> Direct photo & CAD dispatch on WhatsApp.</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <WifiOff className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Works 100% Offline:</strong> Access gifts & printing rate cards anytime.</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <CreditCard className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong>0% EMI Finance:</strong> Calculate Bajaj Finance credit from ₹5,000.</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                <span><strong>Zero Storage (&lt;1MB):</strong> Installs in 2 seconds with no app store download.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2.5 pt-1">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-gradient-to-r from-[#E50914] via-red-600 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-red-950/50 flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Install App to Home Screen</span>
              </button>

              <button
                onClick={handleDismiss}
                className="px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all cursor-pointer"
              >
                Maybe Later
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400 pt-1 border-t border-white/10">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Official PWA • Safe, Fast &amp; Ad-Free</span>
        </div>
      </div>
    </div>
  );
}
