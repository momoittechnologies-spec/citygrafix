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
    // 1. Register Service Worker in supporting browsers with auto-update
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Reload page once new controller activates so user always has fresh assets
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            // Check for updates periodically and on registration
            reg.update();

            reg.onupdatefound = () => {
              const worker = reg.installing;
              if (worker) {
                worker.onstatechange = () => {
                  if (worker.state === "installed" && navigator.serviceWorker.controller) {
                    console.log("[PWA] City Grafix updated in background.");
                    // Prompt new worker to take control
                    worker.postMessage({ type: "SKIP_WAITING" });
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

      try {
        if (sessionStorage.getItem("citygrafix_pwa_session_dismissed")) {
          return;
        }
      } catch {
        // ignore
      }

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
    // Dismiss for current session and 14-day cooldown
    try {
      sessionStorage.setItem("citygrafix_pwa_session_dismissed", "true");
      localStorage.setItem("citygrafix_pwa_dismissed", Date.now().toString());
    } catch {
      // ignore storage errors
    }
  }, []);

  if (!isModalOpen || isInstalled) return null;

  return (
    <div
      role="region"
      aria-label="Install City Grafix Web App"
      className="fixed bottom-20 left-3 sm:bottom-6 sm:left-6 z-45 max-w-[360px] w-[calc(100%-1.5rem)] sm:w-auto animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto"
    >
      {/* Compact Floating Toast Card (Zero dark overlay, zero scroll lock, no obstruction of WhatsApp on right) */}
      <div className="bg-[#101B38] text-white rounded-2xl border border-white/20 shadow-2xl p-4 sm:p-4.5 space-y-3 ring-1 ring-black/20">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-white/20 p-0.5 shrink-0 flex items-center justify-center shadow-md">
              <Image
                src="/icons/icon-192x192.png"
                alt="City Grafix App Icon"
                width={38}
                height={38}
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                City Grafix on Your Phone
              </h4>
              <p className="text-[11px] text-slate-300 truncate">
                Quick access to services and quotations.
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Dismiss installation prompt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content & Action Buttons */}
        {isIos ? (
          <div className="space-y-2 pt-1 border-t border-white/10 text-[11px] text-slate-300">
            <p className="leading-snug">
              To install: tap <strong className="text-white">Share</strong> <Share className="w-3 h-3 inline mx-0.5 text-cyan-400" /> then select <strong className="text-white">Add to Home Screen</strong> <PlusSquare className="w-3 h-3 inline mx-0.5 text-[#FFC83D]" />.
            </p>
            <button
              onClick={handleDismiss}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-1.5 rounded-lg text-xs transition-colors"
            >
              Got It
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2 pt-1">
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-[#F04446] hover:bg-[#D63335] text-white font-bold text-xs py-2 px-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>

            <button
              onClick={handleDismiss}
              className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer"
            >
              Not Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
