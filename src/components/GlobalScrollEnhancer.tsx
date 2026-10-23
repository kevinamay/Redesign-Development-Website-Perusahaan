"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, Sparkles, Sliders, Check, RefreshCw } from "lucide-react";

export type ScrollTransitionMode = "silk" | "kinetic" | "parallax";

export interface ScrollSettings {
  mode: ScrollTransitionMode;
  showProgressBar: boolean;
  showBackToTop: boolean;
}

const STORAGE_KEY = "ap_scroll_settings_v1";

export const DEFAULT_SCROLL_SETTINGS: ScrollSettings = {
  mode: "kinetic",
  showProgressBar: true,
  showBackToTop: true,
};

export default function GlobalScrollEnhancer() {
  const pathname = usePathname();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [settings, setSettings] = useState<ScrollSettings>(DEFAULT_SCROLL_SETTINGS);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1. Load persisted mode/settings
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSettings((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // fallback to default
    }

    // Listen for custom change events dispatched from /prototype
    const handleSettingsChange = (e: Event) => {
      const customEvent = e as CustomEvent<ScrollSettings>;
      if (customEvent.detail) {
        setSettings(customEvent.detail);
      }
    };

    window.addEventListener("ap-scroll-settings-change", handleSettingsChange);
    return () => window.removeEventListener("ap-scroll-settings-change", handleSettingsChange);
  }, []);

  // 2. Set root attribute for active transition mode
  useEffect(() => {
    document.documentElement.setAttribute("data-scroll-mode", settings.mode);
  }, [settings.mode]);

  // 3. Universal Intersection Observer for ALL pages
  const setupObservers = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Identify candidate elements for scroll reveal across any page
    const candidates = document.querySelectorAll(
      "section, article, main > div, .scroll-reveal, [data-scroll-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("universal-scroll-in");
            entry.target.classList.remove("universal-scroll-init");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    candidates.forEach((el) => {
      // Don't apply to navbar or footer or small elements
      if (
        el.closest("nav") ||
        el.closest("footer") ||
        el.id === "global-navbar" ||
        el.id === "global-footer" ||
        el.classList.contains("no-scroll-reveal")
      ) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const isAlreadyVisible = rect.top < window.innerHeight * 0.9;

      if (isAlreadyVisible) {
        // Already on screen when page loads: keep instantly visible
        el.classList.add("universal-scroll-in");
      } else {
        // Below the fold: attach transition class
        el.classList.add("universal-scroll-init");
        observer.observe(el);
      }
    });

    observerRef.current = observer;
  }, []);

  // Run observer whenever pathname changes (navigating between pages)
  useEffect(() => {
    // Small timeout to let the new page DOM render completely
    const timer = setTimeout(() => {
      setupObservers();
    }, 120);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname, setupObservers]);

  // 4. Scroll position and progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShowBackToTop(current > 380);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (current / totalHeight) * 100));
        setScrollPercent(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. UNIVERSAL TOP READING PROGRESS BAR (Works on EVERY page) */}
      {settings.showProgressBar && (
        <div className="fixed top-0 left-0 right-0 h-1 sm:h-1.5 z-[999999] pointer-events-none bg-slate-200/30 dark:bg-slate-800/30 backdrop-blur-xs">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 shadow-sm shadow-cyan-400/50 transition-all duration-75 ease-out"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>
      )}

      {/* 2. UNIVERSAL FLOATING BACK-TO-TOP BUTTON WITH PROGRESS RING (Works on EVERY page) */}
      {settings.showBackToTop && showBackToTop && (
        <button
          id="btn-universal-back-to-top"
          onClick={scrollToTop}
          title="Kembali ke atas"
          aria-label="Kembali ke atas halaman"
          className="fixed bottom-24 right-5 sm:right-6 z-[9980] w-11 h-11 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
        >
          {/* Progress circle ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 36 36">
            <path
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-blue-600 dark:text-blue-400 transition-all duration-150"
              strokeDasharray={`${scrollPercent}, 100`}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}
