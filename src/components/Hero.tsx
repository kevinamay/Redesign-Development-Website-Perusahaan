"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/data/translations";

const HERO_SLIDES = [
  {
    src: "/images/hero-gedung-1.jpeg",
    alt: "Gedung Kantor & Fasilitas CV. Asia Plastik Surabaya",
    imageClass:
      "object-cover object-[65%_center] sm:object-[70%_center] md:object-center md:scale-105 md:translate-x-[5%] lg:translate-x-[8%] dark:brightness-[0.72] dark:contrast-[1.08] transition-[filter] duration-500",
  },
  {
    src: "/images/hero-pabrik-1.jpeg",
    alt: "Fasilitas Pabrik & Area Produksi Manufaktur CV. Asia Plastik Surabaya",
    imageClass:
      "object-cover object-[60%_center] sm:object-[65%_center] md:object-[60%_center] md:scale-105 md:translate-x-[4%] lg:translate-x-[6%] dark:brightness-[0.72] dark:contrast-[1.08] transition-[filter] duration-500",
  },
  {
    src: "/images/hero-gedung-2.jpeg",
    alt: "Gedung Utama Pabrik CV. Asia Plastik Surabaya",
    imageClass:
      "object-cover object-[24%_center] sm:object-[28%_center] md:object-[30%_center] md:scale-115 lg:scale-120 md:translate-x-[20%] lg:translate-x-[24%] dark:brightness-[0.72] dark:contrast-[1.08] transition-[filter] duration-500",
  },
  {
    src: "/images/hero-pabrik-2.jpeg",
    alt: "Fasilitas Mesin Injection Moulding CV. Asia Plastik Surabaya",
    imageClass:
      "object-cover object-[55%_center] sm:object-[60%_center] md:object-[55%_center] md:scale-105 md:translate-x-[4%] lg:translate-x-[6%] dark:brightness-[0.72] dark:contrast-[1.08] transition-[filter] duration-500",
  },
];

export default function Hero() {
  const { t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [incomingSlide, setIncomingSlide] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    if (isSliding) return;
    const next = (currentSlide + 1) % HERO_SLIDES.length;
    setIncomingSlide(next);
    setIsSliding(true);

    setTimeout(() => {
      setCurrentSlide(next);
      setIncomingSlide(null);
      setIsSliding(false);
    }, 1000);
  }, [currentSlide, isSliding]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (targetIndex: number) => {
    if (isSliding || targetIndex === currentSlide) return;
    setIncomingSlide(targetIndex);
    setIsSliding(true);
    setTimeout(() => {
      setCurrentSlide(targetIndex);
      setIncomingSlide(null);
      setIsSliding(false);
    }, 1000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-110px)] lg:min-h-[calc(100svh-115px)] w-full max-w-[100vw] overflow-hidden isolate font-sans box-border"
    >
      {/* ========================================================================= */}
      {/* 1. LAYER 1: CAROUSEL BACKGROUND SLIDES (CONTAINED WITHIN HERO)            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          let transformClass = "";
          let opacityClass = "";
          let zIndexClass = "";
          let transitionClass = "";

          if (isSliding) {
            if (idx === currentSlide) {
              // Outgoing slide moves to the left (same direction as NewProduct)
              transformClass = "-translate-x-full";
              opacityClass = "opacity-90";
              zIndexClass = "z-[1]";
              transitionClass = "transition-all duration-1000 ease-in-out";
            } else if (idx === incomingSlide) {
              // Incoming slide enters from the right into center
              transformClass = "translate-x-0";
              opacityClass = "opacity-100";
              zIndexClass = "z-[2]";
              transitionClass = "transition-all duration-1000 ease-in-out";
            } else {
              transformClass = "translate-x-full";
              opacityClass = "opacity-0";
              zIndexClass = "z-0";
              transitionClass = "transition-none";
            }
          } else {
            if (idx === currentSlide) {
              transformClass = "translate-x-0";
              opacityClass = "opacity-100";
              zIndexClass = "z-[2]";
              transitionClass = "transition-none";
            } else {
              transformClass = "translate-x-full";
              opacityClass = "opacity-0";
              zIndexClass = "z-0";
              transitionClass = "transition-none";
            }
          }

          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full will-change-transform ${transformClass} ${opacityClass} ${zIndexClass} ${transitionClass}`}
            >
              <Image
                src={slide.src}
                fill
                priority
                quality={90}
                sizes="100vw"
                className={slide.imageClass}
                alt={slide.alt}
              />
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 2. LAYER 2: THE WHITE / DARK GRADIENT OVERLAY (SPLIT SCREEN EFFECT)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 via-35% to-transparent to-60% dark:from-slate-950 dark:via-slate-950/95 dark:via-35% dark:to-transparent dark:to-65% pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-0 z-10 hidden dark:block bg-slate-950/20 pointer-events-none transition-opacity duration-500" />

      {/* ========================================================================= */}
      {/* 3. LAYER 3: HERO CONTENT & STATS                                          */}
      {/* ========================================================================= */}
      <div className="relative z-20 flex flex-col justify-center min-h-[calc(100svh-110px)] lg:min-h-[calc(100svh-115px)] w-full max-w-[100vw] box-border">
        {/* HERO TYPOGRAPHY & LAYOUT */}
        <div className="flex-1 flex items-center w-full max-w-[100vw] overflow-hidden py-8 sm:py-12 lg:py-16">
          {/* Main Content Wrapper with safe mobile padding */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
            {/* Visual Accent: Thin, elegant vertical line */}
            <div className="border-l-4 border-blue-600 pl-4 sm:pl-7 lg:pl-9 max-w-2xl lg:max-w-3xl animate-fade-in-up">
              {/* Top Label Badge */}
              <div className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider text-blue-600 uppercase mb-2.5 sm:mb-3 flex items-center gap-2">
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline (H1) with consistent multi-line arrangement across mobile & desktop */}
              <h1 className="font-extrabold text-slate-900 dark:text-white text-[24px] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.12] tracking-tight uppercase">
                {t.hero.titleLines && t.hero.titleLines.length > 0 ? (
                  <>
                    {t.hero.titleLines.map((line, idx) => {
                      const isLast = idx === t.hero.titleLines!.length - 1;
                      return (
                        <span
                          key={idx}
                          className={`block ${isLast ? "whitespace-nowrap sm:whitespace-normal" : ""}`}
                        >
                          {line}
                          {isLast && (
                            <>
                              {" "}
                              <span className="text-blue-600 dark:text-blue-400">
                                {t.hero.titleHighlight}
                              </span>
                            </>
                          )}
                        </span>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {t.hero.titleStart}{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      {t.hero.titleHighlight}
                    </span>
                  </>
                )}
              </h1>

              {/* Action Buttons: Compact stack on mobile, side-by-side on sm+ */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full sm:w-auto">
                {/* 1. Primary Button */}
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center w-fit px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
                >
                  <span>{t.hero.primaryCta}</span>
                </Link>

                {/* 2. Secondary Button */}
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center w-fit px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
                >
                  <span>{t.hero.secondaryCta}</span>
                </Link>
              </div>

              {/* Slide Indicators: Subtle Dots */}
              <div className="flex items-center gap-2 mt-6 sm:mt-8">
                {HERO_SLIDES.map((slide, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    aria-label={slide.alt}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === i
                        ? "w-8 bg-blue-600 shadow-xs shadow-blue-500/50"
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
