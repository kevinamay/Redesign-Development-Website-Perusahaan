"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import GlobalDistribution from "@/components/GlobalDistribution";
import NewProduct from "@/components/NewProduct";
import CareerBanner from "@/components/CareerBanner";
import Footer from "@/components/Footer";
import AnimatedMetric from "@/components/AnimatedMetric";

export default function HomeClient() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);

      // Detect current active section for waypoint navigation
      const sections = ["hero", "about", "distribution", "products", "career"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative">
      {/* 1. FLOATING RIGHT-HAND SECTION WAYPOINTS (Dot Navigator for Desktop) */}
      <nav
        aria-label="Navigasi Bagian Halaman"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[9990] hidden lg:flex flex-col gap-3 p-2 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl"
      >
        {[
          { id: "hero", label: "Beranda" },
          { id: "about", label: "Tentang Kami" },
          { id: "distribution", label: "Distribusi Global" },
          { id: "products", label: "Produk Unggulan" },
          { id: "career", label: "Karir" },
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              title={item.label}
              className="group relative flex items-center justify-center p-1.5 cursor-pointer"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 h-2.5 bg-blue-600 dark:bg-blue-400 shadow-xs shadow-blue-500"
                    : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
              {/* Tooltip on Hover */}
              <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Global Sticky Navigation */}
      <Navbar />

      {/* Main Page Container */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-clip">
        {/* ========================================================================= */}
        {/* 1. HERO SHOWCASE SECTION WITH DYNAMIC PARALLAX DEPTH                      */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${Math.min(80, scrollY * 0.1)}px)`,
            opacity: Math.max(0.35, 1 - scrollY / 950),
          }}
        >
          <Hero />
        </section>

        {/* ========================================================================= */}
        {/* KINETIC FLOATING METRICS BAR (Scroll-Triggered Animated Counters)         */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20 mb-6 sm:mb-10">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <AnimatedMetric target={38} suffix="+" label="Tahun Pengalaman (1985)" />
            <AnimatedMetric target={100} suffix="+" label="Varian Produk Presisi" />
            <AnimatedMetric target={500} suffix=" L" label="Kapasitas Blow Moulding" />
            <AnimatedMetric target={100} suffix="%" label="Standar ISO 9001:2015" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ABOUT US PREVIEW SECTION (Universal Kinetic Scroll Entrance)           */}
        {/* ========================================================================= */}
        <section id="about">
          <AboutPreview />
        </section>

        {/* ========================================================================= */}
        {/* 3. GLOBAL DISTRIBUTION SECTION (Universal Kinetic Scroll Entrance)        */}
        {/* ========================================================================= */}
        <section id="distribution">
          <GlobalDistribution />
        </section>

        {/* ========================================================================= */}
        {/* 4. NEW PRODUCT SHOWCASE SECTION (Universal Kinetic Scroll Entrance)       */}
        {/* ========================================================================= */}
        <section id="products">
          <NewProduct />
        </section>

        {/* ========================================================================= */}
        {/* 5. CAREER BANNER SECTION (Universal Kinetic Scroll Entrance)              */}
        {/* ========================================================================= */}
        <section id="career">
          <CareerBanner />
        </section>
      </main>

      {/* 6. Corporate Footer */}
      <Footer />
    </div>
  );
}
