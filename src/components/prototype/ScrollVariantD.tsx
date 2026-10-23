"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import GlobalDistribution from "@/components/GlobalDistribution";
import NewProduct from "@/components/NewProduct";
import CareerBanner from "@/components/CareerBanner";
import { Sparkles, Eye, Compass, Shield, Award } from "lucide-react";

export default function ScrollVariantD() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-500 relative overflow-x-hidden">
      {/* 1. DYNAMIC LIVING MESH GRADIENT BACKDROP */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20 bg-blue-600 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20 bg-cyan-500 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-[700px] h-[700px] rounded-full blur-[200px] opacity-15 bg-indigo-600 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      {/* 2. FLOATING AMBIENT GLOW BAR AT TOP */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[99999] bg-slate-900">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-lg shadow-cyan-400/50"
          style={{
            width: `${Math.min(
              100,
              (scrollY /
                (typeof document !== "undefined"
                  ? document.documentElement.scrollHeight - window.innerHeight || 1
                  : 1)) *
                100
            )}%`,
          }}
        />
      </div>

      <Navbar />

      <main className="w-full max-w-[100vw] overflow-x-clip relative z-10 space-y-16 py-6">
        {/* HERO SECTION WITH DUAL PARALLAX LAYER */}
        <section className="relative">
          <div
            className="transition-transform duration-150 ease-out"
            style={{
              transform: `translateY(${Math.min(90, scrollY * 0.15)}px) scale(${Math.max(
                0.95,
                1 - scrollY / 3000
              )})`,
            }}
          >
            <Hero />
          </div>
        </section>

        {/* SECTION 2: ABOUT PREVIEW (Glassmorphic Elevated Capsule) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-4 sm:p-8 shadow-2xl hover:border-cyan-500/30 transition-all duration-500 group">
            {/* Ambient edge flare */}
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />
            <AboutPreview />
          </div>
        </section>

        {/* SECTION 3: GLOBAL DISTRIBUTION (Deep Contrast Slate Container) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-4 sm:p-8 shadow-2xl hover:border-blue-500/30 transition-all duration-500 group">
            <div className="absolute top-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent pointer-events-none" />
            <GlobalDistribution />
          </div>
        </section>

        {/* SECTION 4: NEW PRODUCT (Frosted Showcase with Spotlight) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-2xl border border-white/10 p-4 sm:p-8 shadow-2xl hover:border-indigo-500/30 transition-all duration-500">
            <NewProduct />
          </div>
        </section>

        {/* SECTION 5: CAREER BANNER (Floating Holographic Accent) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl hover:border-cyan-400/40 transition-all duration-500">
            <CareerBanner />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
