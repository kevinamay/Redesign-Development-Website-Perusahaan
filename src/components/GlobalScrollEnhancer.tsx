"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, Sparkles, Sliders, Check, RefreshCw } from "lucide-react";

export type ScrollTransitionMode = "silk" | "kinetic" | "parallax";

export interface ScrollSettings {
  mode: ScrollTransitionMode;
  showBackToTop: boolean;
}

const STORAGE_KEY = "ap_scroll_settings_v1";

export const DEFAULT_SCROLL_SETTINGS: ScrollSettings = {
  mode: "kinetic",
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

  // 3. Universal Kinetic Precision & Scale Lift Engine for ALL pages
  const setupObservers = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const windowHeight = window.innerHeight;
    const elementsToReveal: HTMLElement[] = [];
    const seen = new Set<HTMLElement>();

    // 3a. Target all direct children of Grids (Product cards, article cards, features, bento boxes)
    const grids = document.querySelectorAll<HTMLElement>(".grid");
    grids.forEach((grid) => {
      if (
        grid.closest("nav") ||
        grid.closest("footer") ||
        grid.closest("header") ||
        grid.closest("#floating-actions") ||
        grid.closest("#floating-ai-chat") ||
        grid.closest("[role='dialog']")
      ) {
        return;
      }

      const children = Array.from(grid.children) as HTMLElement[];
      children.forEach((child, idx) => {
        if (!seen.has(child) && child.offsetHeight > 24) {
          seen.add(child);
          // Calculated kinetic stagger delay for grid items
          child.style.transitionDelay = `${(idx % 6) * 90}ms`;
          child.classList.add("kinetic-card-hover");
          elementsToReveal.push(child);
        }
      });
    });

    // 3b. Target all Articles (FAQ accordion items, article cards, news items)
    const articles = document.querySelectorAll<HTMLElement>("article");
    articles.forEach((art, idx) => {
      if (!seen.has(art) && art.offsetHeight > 24) {
        seen.add(art);
        if (!art.style.transitionDelay) {
          art.style.transitionDelay = `${(idx % 6) * 80}ms`;
        }
        elementsToReveal.push(art);
      }
    });

    // 3c. Target discrete section containers, feature splits, forms, and hero metrics
    const sectionContainers = document.querySelectorAll<HTMLElement>(
      "main section > div, main form, [data-scroll-reveal], .kinetic-reveal, main section [role='tablist']"
    );
    sectionContainers.forEach((block) => {
      if (
        block.closest("nav") ||
        block.closest("footer") ||
        block.closest("header") ||
        block.closest("#floating-actions") ||
        block.closest("#floating-ai-chat") ||
        block.classList.contains("no-scroll-reveal")
      ) {
        return;
      }

      // Avoid double-animating a giant wrapper if it only contains already observed grid children
      if (!seen.has(block) && block.offsetHeight > 30) {
        const containsSeenGrids = Array.from(seen).some((s) => block.contains(s) && block !== s);
        if (!containsSeenGrids) {
          seen.add(block);
          elementsToReveal.push(block);
        }
      }
    });

    // 3d. Target Section Headings (h2) for smooth elevation with their sections
    const headings = document.querySelectorAll<HTMLElement>("main h2, main .section-header");
    headings.forEach((h) => {
      if (!seen.has(h) && !h.closest("nav") && !h.closest("footer")) {
        const isInsideSeen = Array.from(seen).some((s) => s.contains(h) && s !== h);
        if (!isInsideSeen) {
          seen.add(h);
          elementsToReveal.push(h);
        }
      }
    });

    // Create the IntersectionObserver with optimal threshold for noticeable kinetic entrance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("universal-scroll-in");
            target.classList.remove("universal-scroll-init");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Differentiate above-the-fold elements vs below-the-fold elements
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isAlreadyVisible = rect.top < windowHeight * 0.88 && rect.bottom > 0;

      if (isAlreadyVisible) {
        // Above the fold: instantaneously visible with 0 CLS / no delay
        el.classList.add("universal-scroll-in");
        el.classList.remove("universal-scroll-init");
      } else {
        // Below the fold: attach snappy kinetic entrance
        el.classList.add("universal-scroll-init");
        el.classList.remove("universal-scroll-in");
        observer.observe(el);
      }
    });

    observerRef.current = observer;
  }, []);

  // Run observer whenever pathname changes, with MutationObserver for dynamically added elements
  useEffect(() => {
    const timer = setTimeout(() => {
      setupObservers();
    }, 120);

    const mutationObserver = new MutationObserver((mutations) => {
      let shouldRefresh = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldRefresh = true;
          break;
        }
      }
      if (shouldRefresh) {
        setupObservers();
      }
    });

    const mainEl = document.querySelector("main") || document.body;
    mutationObserver.observe(mainEl, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      mutationObserver.disconnect();
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
