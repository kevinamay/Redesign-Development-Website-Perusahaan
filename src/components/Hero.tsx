"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/data/translations";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-110px)] lg:min-h-[calc(100svh-115px)] w-full max-w-[100vw] overflow-x-clip isolate font-sans box-border"
    >
      {/* ========================================================================= */}
      {/* 1. LAYER 1: THE BACKGROUND IMAGE                                          */}
      {/* ========================================================================= */}
      <Image
        src="/images/fotopt.png"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-[75%_center] sm:object-[80%_center] md:object-center -z-10 dark:brightness-[0.72] dark:contrast-[1.08] transition-[filter] duration-500"
        alt="Asia Plastik Background"
      />

      {/* ========================================================================= */}
      {/* 2. LAYER 2: THE WHITE / DARK GRADIENT OVERLAY (SPLIT SCREEN EFFECT)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 via-40% to-transparent to-70% dark:from-slate-950 dark:via-slate-950/95 dark:via-40% dark:to-transparent dark:to-75% pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-0 z-10 hidden dark:block bg-slate-950/20 pointer-events-none transition-opacity duration-500" />

      {/* ========================================================================= */}
      {/* 3. LAYER 3: HERO CONTENT & STATS                                          */}
      {/* ========================================================================= */}
      <div className="relative z-20 flex flex-col justify-between min-h-[calc(100svh-110px)] lg:min-h-[calc(100svh-115px)] w-full max-w-[100vw] box-border">
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

              {/* Main Headline (H1) with responsive sizing */}
              <h1 className="font-extrabold text-slate-900 dark:text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18] sm:leading-[1.14] tracking-tight uppercase break-words">
                {t.hero.titleStart}{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="mt-3 sm:mt-5 font-medium text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg tracking-wide max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons: Responsive Stack on mobile, side-by-side on sm+ */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                {/* 1. Primary Button */}
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
                >
                  <span>{t.hero.primaryCta}</span>
                </Link>

                {/* 2. Secondary Button */}
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
                >
                  <span>{t.hero.secondaryCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. REFINED BOTTOM STATS SECTION */}
        <div className="w-full border-t border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-950/85 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-8 box-border overflow-hidden">
          <div className="max-w-7xl mx-auto w-full box-border">
            {/* Statistics Grid: grid-cols-2 on mobile, lg:grid-cols-4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full box-border">
              {t.hero.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden box-border">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 shrink-0">
                    {metric.value}
                  </span>
                  <div className="flex flex-col min-w-0 overflow-hidden">
                    <span className="font-bold text-slate-900 dark:text-white text-xs md:text-sm leading-tight truncate sm:whitespace-normal">
                      {metric.label}
                    </span>
                    <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight truncate sm:whitespace-normal">
                      {metric.sublabel}
                    </span>
                  </div>
                </div>
              ))}

              {/* Facility Quick Link integrated into 4th grid cell or full width on mobile */}
              <div className="flex items-center col-span-2 lg:col-span-1 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200/50 dark:border-slate-800/50 min-w-0 overflow-hidden box-border">
                <a
                  href="/about#mesin-produksi"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-xs md:text-sm inline-flex items-center gap-1.5 transition-colors group min-w-0"
                >
                  <span className="group-hover:underline truncate sm:whitespace-normal">{t.hero.facilityLink}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
