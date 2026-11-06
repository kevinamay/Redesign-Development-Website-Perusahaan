"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { PRODUCT_VARIANTS_META, ProductCardVariantKey } from "./types";

interface PrototypeProductSwitcherProps {
  currentVariant: ProductCardVariantKey;
  onVariantChange?: (variant: ProductCardVariantKey) => void;
}

export function PrototypeProductSwitcher({
  currentVariant,
  onVariantChange,
}: PrototypeProductSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const currentIndex = PRODUCT_VARIANTS_META.findIndex(
    (v) => v.key === currentVariant
  );
  const activeIndex = currentIndex >= 0 ? currentIndex : 2; // default to clean-corporate
  const activeMeta = PRODUCT_VARIANTS_META[activeIndex];

  const navigateToVariant = useCallback(
    (key: ProductCardVariantKey) => {
      if (onVariantChange) {
        onVariantChange(key);
      }
      const params = new URLSearchParams(searchParams.toString());
      params.set("variant", key);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [onVariantChange, pathname, router, searchParams]
  );

  const handlePrev = useCallback(() => {
    const prevIdx =
      (activeIndex - 1 + PRODUCT_VARIANTS_META.length) %
      PRODUCT_VARIANTS_META.length;
    navigateToVariant(PRODUCT_VARIANTS_META[prevIdx].key);
  }, [activeIndex, navigateToVariant]);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % PRODUCT_VARIANTS_META.length;
    navigateToVariant(PRODUCT_VARIANTS_META[nextIdx].key);
  }, [activeIndex, navigateToVariant]);

  // Keyboard navigation: Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput =
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.getAttribute("contenteditable") === "true");

      if (isInput) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  if (isMinimized) {
    return (
      <aside aria-label="Prototype controls" className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-white px-4 py-2.5 rounded-full shadow-2xl border border-blue-500/40 flex items-center gap-2 text-xs font-bold hover:scale-105 transition-all cursor-pointer backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Buka Pilihan Desain ({activeMeta.badgeText})</span>
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Prototype controls" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-full p-2.5 sm:px-4 sm:py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-slate-800 dark:text-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Navigation Arrows & Current Label */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={handlePrev}
            title="Desain Sebelumnya (Arrow Left ←)"
            aria-label="Desain Sebelumnya"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-slate-200 dark:border-slate-700 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-1 text-center sm:text-left">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 font-mono text-[11px] font-bold shrink-0">
              {activeMeta.badgeText}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                {activeMeta.name}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden md:inline line-clamp-1">
                {activeMeta.shortDesc}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            title="Desain Berikutnya (Arrow Right →)"
            aria-label="Desain Berikutnya"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-slate-200 dark:border-slate-700 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Click Number Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {PRODUCT_VARIANTS_META.map((meta) => {
            const isSelected = meta.key === currentVariant;
            return (
              <button
                key={meta.key}
                type="button"
                onClick={() => navigateToVariant(meta.key)}
                title={meta.name}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105 ring-2 ring-blue-400"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {meta.badgeText}
              </button>
            );
          })}
        </div>

        {/* Actions: Showroom Link & Minimize */}
        <div className="flex items-center gap-2 shrink-0">
          {pathname !== "/prototype/products" && (
            <Link
              href={`/prototype/products?variant=${currentVariant}`}
              className="text-[11px] font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-cyan-950/60 border border-blue-200 dark:border-cyan-800/50"
            >
              <span>Showroom</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}

          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            title="Sembunyikan panel"
            aria-label="Sembunyikan panel kontrol prototype"
            className="w-7 h-7 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
