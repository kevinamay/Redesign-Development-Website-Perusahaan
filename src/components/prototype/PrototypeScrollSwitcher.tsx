"use client";

import React, { useEffect, useCallback, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, Layers, Sliders, ArrowLeft } from "lucide-react";

export interface PrototypeScrollSwitcherProps {
  variants: {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  currentVariant: string;
}

export default function PrototypeScrollSwitcher({
  variants,
  currentVariant,
}: PrototypeScrollSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track global scroll percentage for developer visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentIndex = variants.findIndex((v) => v.id === currentVariant);
  const activeVariant = variants[currentIndex >= 0 ? currentIndex : 0];

  const setVariant = useCallback(
    (variantId: string) => {
      const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
      params.set("variant", variantId);
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + variants.length) % variants.length;
    setVariant(variants[prevIdx].id);
  }, [currentIndex, setVariant, variants]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % variants.length;
    setVariant(variants[nextIdx].id);
  }, [currentIndex, setVariant, variants]);

  // Keyboard navigation: Left/Right arrows cycle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const ActiveIcon = activeVariant?.icon || Sparkles;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999999] flex flex-col items-center gap-2 pointer-events-auto max-w-[95vw]">
      {/* Top Badge: Prototype Info & Scroll Meter */}
      <div className="flex items-center gap-3 bg-slate-950/90 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xl border border-slate-700/80">
        <Link
          href="/"
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-bold pr-2 border-r border-slate-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Website</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-bold tracking-wider uppercase text-blue-400">Scroll Prototype</span>
        </div>
        <span className="text-slate-600">•</span>
        <span className="font-mono text-[11px] text-emerald-400 font-bold">
          Scroll: {scrollProgress}%
        </span>
      </div>

      {/* Main Switcher Capsule */}
      <div className="flex items-center gap-1.5 sm:gap-3 bg-slate-900/95 dark:bg-slate-900/95 text-white backdrop-blur-xl px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl sm:rounded-full shadow-2xl border border-slate-700/80">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          title="Varian Sebelumnya (Panah Kiri)"
          className="p-2 sm:p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Variant Tabs */}
        <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-xl sm:rounded-full border border-slate-800">
          {variants.map((v) => {
            const isSelected = v.id === currentVariant;
            const Icon = v.icon;
            return (
              <button
                key={v.id}
                onClick={() => setVariant(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg sm:rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>Varian {v.id}</span>
              </button>
            );
          })}
        </div>

        {/* Current Active Label */}
        <div className="hidden md:flex flex-col text-left pl-2 pr-3 border-l border-slate-700/80">
          <span className="text-xs font-extrabold text-white leading-tight">
            {activeVariant.name}
          </span>
          <span className="text-[10px] text-slate-400 leading-tight">
            {activeVariant.subtitle}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          title="Varian Selanjutnya (Panah Kanan)"
          className="p-2 sm:p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
