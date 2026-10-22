"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

export interface PrototypeDrawerSwitcherProps {
  variants: { id: string; label: string; description: string }[];
  currentVariant: string;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

export default function PrototypeDrawerSwitcher({
  variants,
  currentVariant,
  isDrawerOpen,
  onToggleDrawer,
}: PrototypeDrawerSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentIndex = variants.findIndex((v) => v.id === currentVariant);
  const activeVariant = variants[currentIndex >= 0 ? currentIndex : 0];

  const setVariant = (variantId: string) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    params.set("variant", variantId);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + variants.length) % variants.length;
    setVariant(variants[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % variants.length;
    setVariant(variants[nextIdx].id);
  };

  // Keyboard navigation: Left/Right arrows cycle, 'M' toggles menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key.toLowerCase() === "m") {
        e.preventDefault();
        onToggleDrawer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, variants, onToggleDrawer]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000000] flex flex-col items-center gap-2 pointer-events-auto">
      {/* Quick Info & Toggle Hint */}
      <div className="flex items-center gap-2 bg-slate-900/90 text-white dark:bg-white/95 dark:text-slate-900 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold shadow-xl border border-white/10 dark:border-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>PROTOTYPE MENU DRAWER</span>
        <span className="text-slate-400 dark:text-slate-500">|</span>
        <button
          onClick={onToggleDrawer}
          className="text-blue-400 dark:text-blue-600 hover:underline flex items-center gap-1 cursor-pointer font-bold"
        >
          {isDrawerOpen ? (
            <>
              <X className="w-3.5 h-3.5" /> Tutup Menu (M)
            </>
          ) : (
            <>
              <Menu className="w-3.5 h-3.5" /> Buka Menu (M)
            </>
          )}
        </button>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <div className="flex items-center gap-2 bg-slate-950/95 dark:bg-slate-900/95 text-white p-2 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-xl">
        <button
          onClick={handlePrev}
          title="Varian Sebelumnya (Panah Kiri)"
          aria-label="Varian Sebelumnya"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="px-3 py-1 flex flex-col items-center min-w-[200px] sm:min-w-[240px]">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded-md bg-blue-600 text-[10px] font-black uppercase tracking-wider text-white">
              {activeVariant.id}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-100">
              {activeVariant.label}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 hidden sm:block">
            {activeVariant.description}
          </span>
        </div>

        <button
          onClick={handleNext}
          title="Varian Berikutnya (Panah Kanan)"
          aria-label="Varian Berikutnya"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
