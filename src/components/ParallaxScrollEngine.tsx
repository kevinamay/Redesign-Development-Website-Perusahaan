"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function ParallaxScrollEngine() {
  const pathname = usePathname();

  // Parallax refs for ultra-smooth GPU transform without React re-render overhead
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);
  const gridPatternRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1. Continuous Background Parallax & Scroll Progress Engine (60fps rAF)
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      // Continuous dynamic top scroll progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      // Smooth multi-depth parallax shifts on background atmospheric layers
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(0, ${scrollY * -0.28}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.45}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(0, ${scrollY * -0.34}px, 0)`;
      }
      if (orb4Ref.current) {
        orb4Ref.current.style.transform = `translate3d(0, ${scrollY * -0.20}px, 0)`;
      }
      if (gridPatternRef.current) {
        gridPatternRef.current.style.transform = `translate3d(0, ${scrollY * -0.10}px, 0)`;
      }

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

  // 2. High-Precision Universal Scroll Reveal Engine (Continuously re-arms on repeated scroll)
  const setupObservers = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const windowHeight = window.innerHeight;
    const elementsToReveal: HTMLElement[] = [];
    const seen = new Set<HTMLElement>();

    // 2a. Target direct children of Grids (Products, Articles, Steps, Bento, FAQ, Partners)
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
          const delay = `${(idx % 6) * 80}ms`;
          child.dataset.scrollDelay = delay;
          child.style.transitionDelay = delay;
          child.classList.add("ap-card-hover");
          elementsToReveal.push(child);
        }
      });
    });

    // 2b. Target all Articles (News cards, Product cards, FAQ accordions)
    const articles = document.querySelectorAll<HTMLElement>("article");
    articles.forEach((art, idx) => {
      if (!seen.has(art) && art.offsetHeight > 20) {
        seen.add(art);
        const delay = art.style.transitionDelay || `${(idx % 6) * 75}ms`;
        art.dataset.scrollDelay = delay;
        art.style.transitionDelay = delay;
        elementsToReveal.push(art);
      }
    });

    // 2c. Target Headings, Section headers, and marked elements
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

    // 2d. Target Section Content Containers, Banners, & Forms
    const sections = document.querySelectorAll<HTMLElement>(
      "main section > div.max-w-7xl, main form, main section > div.container, main section > div[class*='rounded']"
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

    // IntersectionObserver configured for continuous repeated triggers on every scroll in both directions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // Restore staggered transition delay on entrance
            if (target.dataset.scrollDelay) {
              target.style.transitionDelay = target.dataset.scrollDelay;
            }
            target.classList.add("ap-scroll-in");
            target.classList.remove("ap-scroll-init");
          } else {
            // Re-arm animation without delay when scrolled out of view so it's ready to re-animate upon re-entry
            target.style.transitionDelay = "0ms";
            target.classList.remove("ap-scroll-in");
            target.classList.add("ap-scroll-init");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px",
      }
    );

    // Initial state: elements currently in the viewport start visible (ap-scroll-in)
    // Elements outside the viewport start hidden (ap-scroll-init)
    // ALL elements are observed continuously so they react to scroll repeatedly
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isCurrentlyVisible = rect.top < windowHeight * 0.9 && rect.bottom > 50;

      if (isCurrentlyVisible) {
        el.classList.add("ap-scroll-in");
        el.classList.remove("ap-scroll-init");
      } else {
        el.classList.add("ap-scroll-init");
        el.classList.remove("ap-scroll-in");
      }
      observer.observe(el);
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

  return (
    <>
      {/* ========================================================================= */}
      {/* 0. CONTINUOUS SCROLL PROGRESS INDICATOR (ULTRA-SMOOTH AT TOP OF PAGE)      */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3.5px] z-[9999] pointer-events-none bg-transparent"
      >
        <div
          ref={progressBarRef}
          className="h-full w-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 shadow-[0_0_12px_rgba(59,130,246,0.65)] transition-all duration-75 ease-out"
        />
      </div>

      {/* ========================================================================= */}
      {/* 1. CONTINUOUS AMBIENT PARALLAX DEPTH LAYERS (ISOLATED BEHIND ALL SECTIONS) */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Parallax Orb 1: Upper Right Sapphire/Cyan Atmosphere (Velocity: -0.28x) */}
        <div
          ref={orb1Ref}
          className="absolute -top-36 -right-36 w-[640px] h-[640px] rounded-full blur-[140px] bg-gradient-to-br from-blue-600/18 via-cyan-500/14 to-transparent dark:from-blue-500/25 dark:via-cyan-400/18 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 2: Mid-Left Azure Glow (Velocity: -0.45x) */}
        <div
          ref={orb2Ref}
          className="absolute top-[32%] -left-44 w-[560px] h-[560px] rounded-full blur-[130px] bg-gradient-to-tr from-cyan-500/16 via-indigo-600/14 to-transparent dark:from-cyan-400/22 dark:via-indigo-500/18 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 3: Lower Right Indigo Atmosphere (Velocity: -0.34x) */}
        <div
          ref={orb3Ref}
          className="absolute top-[65%] -right-36 w-[520px] h-[520px] rounded-full blur-[120px] bg-gradient-to-bl from-indigo-500/16 via-blue-600/14 to-transparent dark:from-indigo-400/22 dark:via-blue-500/18 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Orb 4: Lower Center Soft Teal Core (Velocity: -0.20x) */}
        <div
          ref={orb4Ref}
          className="absolute top-[82%] left-[20%] w-[440px] h-[440px] rounded-full blur-[120px] bg-gradient-to-t from-teal-500/12 to-transparent dark:from-teal-400/15 dark:to-transparent transition-opacity duration-700 will-change-transform"
        />

        {/* Parallax Micro Tech Grid Dots (Velocity: -0.10x) */}
        <div
          ref={gridPatternRef}
          className="absolute inset-0 w-full h-[180%] opacity-[0.045] dark:opacity-[0.07] bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:36px_36px] will-change-transform"
        />
      </div>
    </>
  );
}
