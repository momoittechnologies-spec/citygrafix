"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, X, Share, PlusSquare, Smartphone } from "lucide-react";

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
  const [showBanner, setShowBanner] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker in production/supporting browsers
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
                    console.log("[PWA] City Grafix PWA updated.");
                  }
                };
              }
            };
          })
          .catch((err) => {
            console.error("[PWA] Service Worker registration failed:", err);
          });
      });
    }

    // 2. Check if already running in standalone mode (installed)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 3. Listen for install prompt (Chrome / Android / Edge / Desktop)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);

      // Check if user dismissed it recently (within 7 days)
      const dismissedAt = localStorage.getItem("citygrafix_pwa_dismissed");
      if (dismissedAt) {
        const timePassed = Date.now() - parseInt(dismissedAt, 10);
        if (timePassed < 7 * 24 * 60 * 60 * 1000) {
          return;
        }
      }

      // Delay display slightly so it doesn't interrupt immediate first interaction
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3500);

      return () => clearTimeout(timer);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
      localStorage.removeItem("citygrafix_pwa_dismissed");
    });

    // 4. Custom Global Event to trigger install from any button in the app
    const handleManualTrigger = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(({ outcome }) => {
          if (outcome === "accepted") {
            setIsInstalled(true);
          }
          setShowBanner(false);
          setDeferredPrompt(null);
        });
      } else {
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIosDevice) {
          setShowIosGuide(true);
        } else {
          // If already installed or browser hasn't fired beforeinstallprompt
          setShowBanner(true);
        }
      }
    };

    window.addEventListener("citygrafix-install-app", handleManualTrigger);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("citygrafix-install-app", handleManualTrigger);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setShowBanner(false);
      setDeferredPrompt(null);
    } else {
      const isIosDevice = typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIosDevice) {
        setShowBanner(false);
        setShowIosGuide(true);
      } else {
        setShowBanner(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("citygrafix_pwa_dismissed", Date.now().toString());
  };

  return (
    <>
      {/* 1. Standard Install Banner for Mobile & Desktop */}
      {showBanner && !isInstalled && (
        <div
          role="dialog"
          aria-label="Install City Grafix App"
          className="fixed top-3 inset-x-3 sm:inset-x-auto sm:right-6 sm:top-24 z-50 max-w-sm mx-auto sm:mx-0 animate-in fade-in slide-in-from-top-3 duration-300 pointer-events-auto"
        >
          <div className="bg-[#0B132B]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 shadow-2xl text-white ring-1 ring-white/10 flex flex-col space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-white/15 p-1 shrink-0 flex items-center justify-center shadow-md">
                  <Image
                    src="/icons/icon-192x192.png"
                    alt="City Grafix App Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-black tracking-tight text-white">
                      City Grafix App
                    </span>
                    <span className="bg-[#FAC800] text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                      Fast
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                    Add to home screen for 1-tap ordering & offline rates.
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Dismiss install prompt"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-2 pt-0.5">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-gradient-to-r from-[#E50914] to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-lg shadow-red-950/40 flex items-center justify-center space-x-1.5 transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install Web App</span>
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. iOS Safari Add to Home Screen Instructions Modal */}
      {showIosGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowIosGuide(false)}
        >
          <div
            className="bg-[#0B132B] border border-white/20 rounded-3xl p-6 max-w-sm w-full text-white shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <Smartphone className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-sm text-white">Install on iPhone / iPad</h3>
              </div>
              <button
                onClick={() => setShowIosGuide(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  1
                </div>
                <div>
                  Tap the <strong className="text-white">Share</strong> button <Share className="w-3.5 h-3.5 inline mx-1 text-cyan-400" /> in Safari&apos;s bottom toolbar.
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  2
                </div>
                <div>
                  Scroll down the menu and tap <strong className="text-white">Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1 text-amber-400" />.
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  3
                </div>
                <div>
                  Tap <strong className="text-white">Add</strong> in the top-right corner to place City Grafix directly on your phone home screen!
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full bg-[#E50914] text-white font-bold text-xs py-3 rounded-xl shadow-md active:scale-95 transition-all"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
}
