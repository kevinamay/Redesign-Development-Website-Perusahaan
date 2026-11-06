"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  X,
} from "lucide-react";
import {
  CAREER_VARIANTS_META,
  CareerVariantKey,
} from "./types";

interface PrototypeCareerSwitcherProps {
  currentVariant: CareerVariantKey;
  onSelectVariant?: (key: CareerVariantKey) => void;
}

export function PrototypeCareerSwitcher({
  currentVariant,
  onSelectVariant,
}: PrototypeCareerSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const activeMeta =
    CAREER_VARIANTS_META.find((v) => v.key === currentVariant) ||
    CAREER_VARIANTS_META[0];

  const handleSelect = (key: CareerVariantKey) => {
    if (onSelectVariant) {
      onSelectVariant(key);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("variant", key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const cycleVariant = (direction: "prev" | "next") => {
    const keys: CareerVariantKey[] = ["1", "2", "3", "4", "5"];
    const currentIndex = keys.indexOf(currentVariant);
    let nextIndex =
      direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = keys.length - 1;
    if (nextIndex >= keys.length) nextIndex = 0;
    handleSelect(keys[nextIndex]);
  };

  // Keyboard shortcut: Panah Kiri dan Panah Kanan
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (
        activeTag === "input" ||
        activeTag === "textarea" ||
        document.activeElement?.getAttribute("contenteditable") === "true"
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        cycleVariant("prev");
      } else if (e.key === "ArrowRight") {
        cycleVariant("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentVariant]);

  if (isCollapsed) {
    return (
      <button
        type="button"
        onClick={() => setIsCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Buka Kontrol Prototipe"
      >
        <Sparkles className="w-4 h-4" />
        <span>Ganti Desain ({activeMeta.badgeText})</span>
      </button>
    );
  }

  return (
    <aside
      aria-label="Prototype switcher"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="bg-slate-900/95 dark:bg-slate-900/95 text-white backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-700/80 shadow-2xl px-3 sm:px-5 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Left Controls: Arrows & Active Badge */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={() => cycleVariant("prev")}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-all cursor-pointer shrink-0"
            aria-label="Desain Sebelumnya"
            title="Desain Sebelumnya (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-mono font-bold tracking-wider text-[11px] shrink-0 text-center">
              {activeMeta.badgeText}
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-white text-xs truncate max-w-[200px] sm:max-w-xs">
                {activeMeta.name}
              </span>
              <span className="text-[10px] text-slate-400 truncate max-w-[200px] sm:max-w-sm hidden md:inline">
                {activeMeta.shortDesc}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => cycleVariant("next")}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-all cursor-pointer shrink-0"
            aria-label="Desain Selanjutnya"
            title="Desain Selanjutnya (→)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Center / Right: Numbered Direct Switchers 1..5 */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto justify-center">
          {CAREER_VARIANTS_META.map((meta) => {
            const isActive = meta.key === currentVariant;
            return (
              <button
                key={meta.key}
                type="button"
                onClick={() => handleSelect(meta.key)}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                }`}
                title={meta.name}
              >
                {meta.number}
              </button>
            );
          })}
        </div>

        {/* Right Tools: Showroom Link & Minimize */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/prototype/career"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-[11px] transition-colors whitespace-nowrap"
            title="Buka Halaman Showroom Terisolasi"
          >
            <span>Showroom</span>
            <ExternalLink className="w-3 h-3" />
          </Link>

          <button
            type="button"
            onClick={() => setIsCollapsed(true)}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Minimize control bar"
            title="Sembunyikan Bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

