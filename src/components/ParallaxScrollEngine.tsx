"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export default function ParallaxScrollEngine() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Parallax refs for ultra-smooth 60fps GPU transform without React re-render overhead
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const gridPatternRef = useRef<HTMLDivElement>(null);

  // Floating geometric depth markers
  const floatAccent1Ref = useRef<HTMLDivElement>(null);
  const floatAccent2Ref = useRef<HTMLDivElement>(null);
  const floatAccent3Ref = useRef<HTMLDivElement>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1. Continuous Parallax Engine (60fps rAF with high-visibility travel)
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
      setShowBackToTop(scrollY > 300);

      // Pronounced, clearly visible parallax shifts on ambient atmospheric layers
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(0, ${scrollY * -0.32}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.52}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(0, ${scrollY * -0.42}px, 0)`;
      }
      if (gridPatternRef.current) {
        gridPatternRef.current.style.transform = `translate3d(0, ${scrollY * -0.15}px, 0)`;
      }

      // Floating geometric depth markers (giving immediate optical parallax depth)
      if (floatAccent1Ref.current) {
        floatAccent1Ref.current.style.transform = `translate3d(0, ${scrollY * -0.28}px, 0) rotate(${scrollY * 0.04}deg)`;
      }
      if (floatAccent2Ref.current) {
        floatAccent2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.55}px, 0) rotate(${scrollY * -0.05}deg)`;
      }
      if (floatAccent3Ref.current) {
        floatAccent3Ref.current.style.transform = `translate3d(0, ${scrollY * -0.38}px, 0) rotate(${scrollY * 0.03}deg)`;
      }

      // In-page content elements with [data-parallax] or .ap-parallax-element
      const parallaxElements = document.querySelectorAll<HTMLElement>(
        "[data-parallax], .ap-parallax-element"
      );
      parallaxElements.forEach((el) => {
        const speedAttr = el.getAttribute("data-parallax-speed");
        const speed = speedAttr ? parseFloat(speedAttr) : 0.14;
        const rect = el.getBoundingClientRect();
        // Calculate shift when element is near the viewport
        if (rect.top < windowHeight + 150 && rect.bottom > -150) {
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
          // Calculated kinetic wave delay for clearly visible sequential cascade
          child.style.transitionDelay = `${(idx % 6) * 95}ms`;
          child.classList.add("ap-card-hover");
          elementsToReveal.push(child);
        }
      });
    });

    // 2b. Observe all Articles (Product cards, News cards, blog items, FAQ items)
    const articles = document.querySelectorAll<HTMLElement>("article");
    articles.forEach((art, idx) => {
      if (!seen.has(art) && art.offsetHeight > 20) {
        seen.add(art);
        if (!art.style.transitionDelay) {
          art.style.transitionDelay = `${(idx % 6) * 90}ms`;
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

    // 2d. Observe discrete section wrapper containers and forms
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

    // IntersectionObserver with distinct viewport triggering threshold
    // Using rootMargin: "0px 0px -85px 0px" so the item is 85px inside the viewport
    // before animating, ensuring the user's eyes clearly perceive the smooth entrance!
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
        threshold: 0.15,
        rootMargin: "0px 0px -85px 0px",
      }
    );

    // Apply immediate reveal to above-the-fold content to avoid layout shift (CLS)
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isAboveTheFold = rect.top < windowHeight * 0.8 && rect.bottom > 0;

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
      {/* 1. VISIBLE CONTINUOUS PARALLAX ATMOSPHERIC DEPTH (ALL PAGES)               */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Parallax Orb 1: Upper Right Sapphire / Royal Blue (Noticeable Glow) */}
        <div
          ref={orb1Ref}
          className="absolute -top-24 -right-28 w-[580px] h-[580px] rounded-full blur-[110px] bg-gradient-to-br from-blue-600/22 via-sky-500/16 to-transparent dark:from-blue-500/32 dark:via-cyan-400/18 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 2: Mid-Left Azure / Cyan (Faster Floating Glide) */}
        <div
          ref={orb2Ref}
          className="absolute top-[35%] -left-32 w-[520px] h-[520px] rounded-full blur-[100px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent dark:from-cyan-400/28 dark:via-blue-500/18 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 3: Lower Right Deep Violet / Indigo Accent */}
        <div
          ref={orb3Ref}
          className="absolute top-[68%] -right-24 w-[480px] h-[480px] rounded-full blur-[105px] bg-gradient-to-bl from-indigo-600/20 via-purple-600/14 to-transparent dark:from-indigo-500/28 dark:via-purple-500/16 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Tech Grid Matrix */}
        <div
          ref={gridPatternRef}
          className="absolute inset-0 w-full h-[180%] opacity-[0.045] dark:opacity-[0.08] bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:36px_36px] will-change-transform"
        />

        {/* Floating Geometric Parallax Marker 1 (Top-Right Frosted Pill) */}
        <div
          ref={floatAccent1Ref}
          className="hidden lg:block absolute top-[22%] right-8 xl:right-16 w-16 h-16 rounded-2xl border-2 border-blue-500/20 dark:border-blue-400/30 bg-blue-50/20 dark:bg-blue-950/20 backdrop-blur-[2px] shadow-sm will-change-transform"
        />

        {/* Floating Geometric Parallax Marker 2 (Mid-Left Tech Crosshair Ring) */}
        <div
          ref={floatAccent2Ref}
          className="hidden lg:block absolute top-[52%] left-6 xl:left-14 w-20 h-20 rounded-full border border-cyan-400/25 dark:border-cyan-400/35 flex items-center justify-center will-change-transform"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/40 dark:bg-cyan-400/50" />
        </div>

        {/* Floating Geometric Parallax Marker 3 (Lower-Right Accent Ring) */}
        <div
          ref={floatAccent3Ref}
          className="hidden lg:block absolute top-[78%] right-10 xl:right-20 w-14 h-14 rounded-2xl border border-indigo-500/25 dark:border-indigo-400/35 rotate-45 will-change-transform"
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
