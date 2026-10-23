"use client";

import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import GlobalDistribution from "@/components/GlobalDistribution";
import NewProduct from "@/components/NewProduct";
import CareerBanner from "@/components/CareerBanner";
import { Activity, Zap, ShieldCheck, Globe, Cpu } from "lucide-react";

/**
 * Animated Counter Component for metrics that count up on scroll into view
 */
function AnimatedMetric({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
        {label}
      </div>
    </div>
  );
}

export default function ScrollVariantB() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* 1. DYNAMIC AMBIENT CURSOR/SCROLL SPOTLIGHT */}
      <div
        className="fixed pointer-events-none z-[1] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 bg-radial from-blue-500 via-indigo-600 to-transparent transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
        }}
      />

      {/* 2. DYNAMIC KINETIC SCROLL ACCENT GRID LINES */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* 3. FLOATING KINETIC TELEMETRY HUD (Top Floating Pill) */}
      <div className="fixed top-20 right-6 z-[50] hidden xl:flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-blue-500/30 text-xs font-mono text-slate-300 shadow-2xl">
        <div className="flex items-center gap-1.5 text-blue-400">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span className="font-bold">KINETIC ENGINE</span>
        </div>
        <span className="text-slate-700">|</span>
        <span className="text-emerald-400 font-bold">DEPTH: {Math.round(scrollY)}px</span>
      </div>

      <Navbar />

      <main className="w-full max-w-[100vw] overflow-x-clip relative z-10">
        {/* HERO SECTION */}
        <div className="relative">
          <Hero />
        </div>

        {/* ========================================================================= */}
        {/* KINETIC FLOATING METRICS BAR (Scroll-Triggered Animated Counters)           */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <AnimatedMetric target={38} suffix="+" label="Tahun Pengalaman (1985)" />
            <AnimatedMetric target={100} suffix="+" label="Varian Produk Presisi" />
            <AnimatedMetric target={500} suffix=" L" label="Kapasitas Blow Moulding" />
            <AnimatedMetric target={100} suffix="%" label="Standar ISO 9001:2015" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ABOUT PREVIEW WITH GLOW CONTAINER BENTO                                  */}
        {/* ========================================================================= */}
        <section className="relative my-8 sm:my-14 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-cyan-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <div className="relative">
            <AboutPreview />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GLOBAL DISTRIBUTION WITH ACTIVE RADAR SCROLL PULSE                       */}
        {/* ========================================================================= */}
        <section className="relative my-8 sm:my-14">
          <GlobalDistribution />
        </section>

        {/* ========================================================================= */}
        {/* NEW PRODUCT WITH 3D INTERACTIVE PERSPECTIVE                              */}
        {/* ========================================================================= */}
        <section className="relative my-8 sm:my-14">
          <NewProduct />
        </section>

        {/* ========================================================================= */}
        {/* CAREER BANNER WITH KINETIC SHIMMER BORDER                                */}
        {/* ========================================================================= */}
        <section className="relative my-8 sm:my-14">
          <CareerBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
}
