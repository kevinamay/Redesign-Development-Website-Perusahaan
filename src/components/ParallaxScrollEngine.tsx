"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export default function ParallaxScrollEngine() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Parallax refs for ultra-smooth GPU transform without React re-render overhead
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const gridPatternRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1. Continuous Background Parallax & Scroll Progress Engine (60fps rAF)
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(1, docHeight - windowHeight);

      // Scroll progress percentage (0 - 100)
      const progress = Math.min(100, Math.max(0, (scrollY / maxScroll) * 100));
      setScrollProgress(progress);
      setShowBackToTop(scrollY > 350);

      // Parallax shifts on ambient depth layers
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(0, ${scrollY * -0.14}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.24}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(0, ${scrollY * -0.18}px, 0)`;
      }
      if (gridPatternRef.current) {
        gridPatternRef.current.style.transform = `translate3d(0, ${scrollY * -0.06}px, 0)`;
      }

      // In-page elements with [data-parallax] or .ap-parallax-element
      const parallaxElements = document.querySelectorAll<HTMLElement>(
        "[data-parallax], .ap-parallax-element"
      );
      parallaxElements.forEach((el) => {
        const speedAttr = el.getAttribute("data-parallax-speed");
        const speed = speedAttr ? parseFloat(speedAttr) : 0.08;
        const rect = el.getBoundingClientRect();
        // Check if element is in view before calculating transform
        if (rect.top < windowHeight + 100 && rect.bottom > -100) {
          const centerDiff = rect.top + rect.height / 2 - windowHeight / 2;
          const translateY = centerDiff * speed * -1;
          el.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 2. High-Precision Universal Scroll Reveal Engine
  const setupObservers = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const windowHeight = window.innerHeight;
    const elementsToReveal: HTMLElement[] = [];
    const seen = new Set<HTMLElement>();

    // 2a. Observe direct children of all Content Grids (Products, Articles, About steps, Bento, FAQ items, Partner logos)
    const grids = document.querySelectorAll<HTMLElement>(".grid");
    grids.forEach((grid) => {
      if (
        grid.closest("nav") ||
        grid.closest("footer") ||
        grid.closest("header") ||
        grid.closest("#floating-actions") ||
        grid.closest("[role='dialog']")
      ) {
        return;
      }

      const children = Array.from(grid.children) as HTMLElement[];
      children.forEach((child, idx) => {
        if (!seen.has(child) && child.offsetHeight > 20) {
          seen.add(child);
          child.style.transitionDelay = `${(idx % 6) * 75}ms`;
          child.classList.add("ap-card-hover");
          elementsToReveal.push(child);
        }
      });
    });

    // 2b. Observe all Articles (News cards, blog items, FAQ items)
    const articles = document.querySelectorAll<HTMLElement>("article");
    articles.forEach((art, idx) => {
      if (!seen.has(art) && art.offsetHeight > 20) {
        seen.add(art);
        if (!art.style.transitionDelay) {
          art.style.transitionDelay = `${(idx % 6) * 70}ms`;
        }
        elementsToReveal.push(art);
      }
    });

    // 2c. Observe Headings (h2, section banners)
    const headings = document.querySelectorAll<HTMLElement>(
      "main h2, main .section-header, main [data-scroll-reveal]"
    );
    headings.forEach((h) => {
      if (!seen.has(h) && !h.closest("nav") && !h.closest("footer")) {
        const isInsideSeen = Array.from(seen).some((s) => s.contains(h) && s !== h);
        if (!isInsideSeen) {
          seen.add(h);
          elementsToReveal.push(h);
        }
      }
    });

    // 2d. Observe discrete section wrapper containers
    const sections = document.querySelectorAll<HTMLElement>(
      "main section > div.max-w-7xl, main form, main section > div.container"
    );
    sections.forEach((sec) => {
      if (
        !seen.has(sec) &&
        !sec.closest("nav") &&
        !sec.closest("footer") &&
        sec.offsetHeight > 30
      ) {
        const containsSeenChildren = Array.from(seen).some(
          (s) => sec.contains(s) && sec !== s
        );
        if (!containsSeenChildren) {
          seen.add(sec);
          elementsToReveal.push(sec);
        }
      }
    });

    // IntersectionObserver with optimal viewport triggering threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("ap-scroll-in");
            target.classList.remove("ap-scroll-init");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    // Apply immediate reveal to above-the-fold content to avoid layout shift (CLS)
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isAboveTheFold = rect.top < windowHeight * 0.85 && rect.bottom > 0;

      if (isAboveTheFold) {
        el.classList.add("ap-scroll-in");
        el.classList.remove("ap-scroll-init");
      } else {
        el.classList.add("ap-scroll-init");
        el.classList.remove("ap-scroll-in");
        observer.observe(el);
      }
    });

    observerRef.current = observer;
  }, []);

  // Re-run observer on page change with dynamic mutation support
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. CONTINUOUS AMBIENT PARALLAX DEPTH LAYERS (ACTIVE ACROSS ALL PAGES)      */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Parallax Orb 1: Upper Right Blue Atmosphere */}
        <div
          ref={orb1Ref}
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-[130px] bg-blue-500/8 dark:bg-blue-600/14 transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 2: Mid-Left Cyan Glow */}
        <div
          ref={orb2Ref}
          className="absolute top-[38%] -left-36 w-[460px] h-[460px] rounded-full blur-[120px] bg-cyan-400/6 dark:bg-cyan-500/10 transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 3: Lower Right Indigo Glow */}
        <div
          ref={orb3Ref}
          className="absolute top-[70%] -right-28 w-[400px] h-[400px] rounded-full blur-[110px] bg-indigo-500/6 dark:bg-indigo-600/10 transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Micro Tech Grid Dots */}
        <div
          ref={gridPatternRef}
          className="absolute inset-0 w-full h-[150%] opacity-[0.025] dark:opacity-[0.045] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] will-change-transform"
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. ELEGANT FLOATING BACK-TO-TOP BUTTON WITH CIRCULAR SCROLL PROGRESS RING  */}
      {/* ========================================================================= */}
      {showBackToTop && (
        <button
          id="btn-parallax-back-to-top"
          onClick={scrollToTop}
          title="Kembali ke atas"
          aria-label="Kembali ke atas halaman"
          className="fixed bottom-6 left-6 z-[9980] w-11 h-11 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200/90 dark:border-slate-800/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
        >
          {/* Progress circle ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 p-0.5"
            viewBox="0 0 36 36"
          >
            <path
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-blue-600 dark:text-blue-400 transition-all duration-150"
              strokeDasharray={`${scrollProgress}, 100`}
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
