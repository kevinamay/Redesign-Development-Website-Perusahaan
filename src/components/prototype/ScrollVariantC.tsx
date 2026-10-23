"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import GlobalDistribution from "@/components/GlobalDistribution";
import NewProduct from "@/components/NewProduct";
import CareerBanner from "@/components/CareerBanner";
import { BookOpen, Layers, CheckCircle2 } from "lucide-react";

const CHAPTERS = [
  { id: "hero", num: "01", title: "Pionir Manufaktur Plastik Presisi" },
  { id: "about", num: "02", title: "Masa Depan & Standar Mutu ISO" },
  { id: "distribution", num: "03", title: "Jaringan Distribusi Dunia" },
  { id: "products", num: "04", title: "Inovasi Flagship & Custom Moulding" },
  { id: "career", num: "05", title: "Peluang Karir & Sinergi" },
];

export default function ScrollVariantC() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(scrollY / total);
      }

      // Check section offsets
      const sectionIds = ["sec-hero", "sec-about", "sec-dist", "sec-prod", "sec-career"];
      sectionIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.1) {
            setActiveChapter(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = CHAPTERS[activeChapter] || CHAPTERS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative">
      {/* 1. FLOATING STORYTELLING CHAPTER HUD (Top Center) */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] max-w-[90vw] pointer-events-none">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 text-white backdrop-blur-xl border border-slate-700/80 shadow-2xl">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-wider">
            <span>BAB {current.num}</span>
          </div>
          <span className="text-xs font-bold text-slate-200 truncate max-w-[200px] sm:max-w-xs">
            {current.title}
          </span>
          {/* Circular mini progress */}
          <div className="w-4 h-4 relative flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-700"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-500 transition-all duration-150"
                strokeDasharray={`${scrollProgress * 100}, 100`}
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>
      </div>

      <Navbar />

      <main className="w-full max-w-[100vw] overflow-x-clip space-y-12 sm:space-y-16 pb-20">
        {/* ========================================================================= */}
        {/* CARD STACK 01: HERO                                                       */}
        {/* ========================================================================= */}
        <section
          id="sec-hero"
          className="sticky top-14 z-10 bg-slate-900 rounded-b-[2.5rem] shadow-2xl border-b border-slate-800 transition-transform duration-500 will-change-transform"
        >
          <Hero />
        </section>

        {/* ========================================================================= */}
        {/* CARD STACK 02: ABOUT PREVIEW                                             */}
        {/* ========================================================================= */}
        <section
          id="sec-about"
          className="relative z-20 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 mx-2 sm:mx-6 overflow-hidden transition-all duration-500"
        >
          <div className="p-2 sm:p-4">
            <AboutPreview />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CARD STACK 03: GLOBAL DISTRIBUTION                                       */}
        {/* ========================================================================= */}
        <section
          id="sec-dist"
          className="relative z-30 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 mx-2 sm:mx-6 overflow-hidden transition-all duration-500"
        >
          <div className="p-2 sm:p-4">
            <GlobalDistribution />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CARD STACK 04: NEW PRODUCT FLAGSHIP                                      */}
        {/* ========================================================================= */}
        <section
          id="sec-prod"
          className="relative z-40 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 mx-2 sm:mx-6 overflow-hidden transition-all duration-500"
        >
          <div className="p-2 sm:p-4">
            <NewProduct />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CARD STACK 05: CAREER RECRUITMENT                                        */}
        {/* ========================================================================= */}
        <section
          id="sec-career"
          className="relative z-50 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 mx-2 sm:mx-6 overflow-hidden transition-all duration-500"
        >
          <div className="p-2 sm:p-4">
            <CareerBanner />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
