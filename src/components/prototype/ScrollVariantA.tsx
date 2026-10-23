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
import { ArrowUp, Sparkles } from "lucide-react";

/**
 * Hook to apply smooth intersection-observer scroll reveals
 */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            entry.target.classList.remove("opacity-0", "translate-y-12", "scale-[0.98]");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function ScrollVariantA() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (current / total) * 100)));
      }

      // Check current active section for waypoint dots
      const sections = ["hero", "about", "distribution", "products", "career"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative">

      {/* 2. FLOATING RIGHT-HAND SECTION WAYPOINTS (Dot Navigator) */}
      <nav aria-label="Waypoint Navigation" className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[9999] hidden lg:flex flex-col gap-3 p-2 rounded-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl">
        {[
          { id: "hero", label: "Hero" },
          { id: "about", label: "Tentang Kami" },
          { id: "distribution", label: "Distribusi" },
          { id: "products", label: "Produk" },
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-7 h-2.5 bg-blue-600 dark:bg-blue-400 shadow-sm shadow-blue-500"
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
              {/* Tooltip on hover */}
              <span className="absolute right-full mr-3 px-2 py-1 rounded-md bg-slate-900 text-white text-[10px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Standard Navbar */}
      <Navbar />

      <main className="w-full max-w-[100vw] overflow-x-clip">
        {/* ========================================================================= */}
        {/* HERO SECTION WITH DYNAMIC PARALLAX DEPTH                                  */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${Math.min(100, scrollY * 0.12)}px)`,
            opacity: Math.max(0.3, 1 - scrollY / 900),
          }}
        >
          <Hero />
        </section>

        {/* ========================================================================= */}
        {/* ABOUT PREVIEW WITH STAGGERED ELEVATION GLIDE                             */}
        {/* ========================================================================= */}
        <section
          id="about"
          className="scroll-reveal opacity-0 translate-y-12 scale-[0.98] transition-all duration-1000 ease-out will-change-transform"
        >
          <div className="relative">
            {/* Ambient subtle glow drifting on scroll */}
            <div
              className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-1000"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            />
            <AboutPreview />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GLOBAL DISTRIBUTION WITH DEPTH EMERGENCE                                 */}
        {/* ========================================================================= */}
        <section
          id="distribution"
          className="scroll-reveal opacity-0 translate-y-12 scale-[0.98] transition-all duration-1000 ease-out will-change-transform"
        >
          <GlobalDistribution />
        </section>

        {/* ========================================================================= */}
        {/* NEW PRODUCT WITH DYNAMIC FOCAL POINT                                      */}
        {/* ========================================================================= */}
        <section
          id="products"
          className="scroll-reveal opacity-0 translate-y-12 scale-[0.98] transition-all duration-1000 ease-out will-change-transform"
        >
          <NewProduct />
        </section>

        {/* ========================================================================= */}
        {/* CAREER BANNER WITH ZOOM GLIDE                                            */}
        {/* ========================================================================= */}
        <section
          id="career"
          className="scroll-reveal opacity-0 translate-y-12 scale-[0.98] transition-all duration-1000 ease-out will-change-transform"
        >
          <CareerBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
}
