"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Film,
} from "lucide-react";
import {
  CATEGORY_VIDEO_VARIANTS_META,
  CategoryVideoVariantKey,
} from "./types";

interface PrototypeCategoryVideoSwitcherProps {
  currentVariant: CategoryVideoVariantKey;
  onSelectVariant?: (key: CategoryVideoVariantKey) => void;
  paramName?: string;
}

export function PrototypeCategoryVideoSwitcher({
  currentVariant,
  onSelectVariant,
  paramName = "videoVariant",
}: PrototypeCategoryVideoSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const activeMeta =
    CATEGORY_VIDEO_VARIANTS_META.find((v) => v.key === currentVariant) ||
    CATEGORY_VIDEO_VARIANTS_META[0];

  const handleSelect = useCallback(
    (key: CategoryVideoVariantKey) => {
      if (onSelectVariant) {
        onSelectVariant(key);
      }
      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, key);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [onSelectVariant, searchParams, pathname, router, paramName]
  );

  const cycleVariant = useCallback(
    (direction: "prev" | "next") => {
      const keys: CategoryVideoVariantKey[] = [
        "1",
        "2",
        "3",
        "3-rev",
        "4",
        "4-rev",
        "5",
      ];
      const currentIndex = keys.indexOf(currentVariant);
      let nextIndex =
        direction === "next" ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0) nextIndex = keys.length - 1;
      if (nextIndex >= keys.length) nextIndex = 0;
      handleSelect(keys[nextIndex]);
    },
    [currentVariant, handleSelect]
  );

  // Keyboard shortcut: Alt + Left / Alt + Right
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
      if (e.key === "ArrowLeft" && e.altKey) {
        cycleVariant("prev");
      } else if (e.key === "ArrowRight" && e.altKey) {
        cycleVariant("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cycleVariant]);

  if (isCollapsed) {
    return (
      <button
        type="button"
        onClick={() => setIsCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Buka Kontrol Prototipe Video"
      >
        <Film className="w-4 h-4" />
        <span>Ganti Desain Video ({activeMeta.badge}: {activeMeta.tag})</span>
      </button>
    );
  }

  return (
    <aside
      aria-label="Kontrol Prototipe Desain Video Kategori"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[96vw] max-w-3xl bg-slate-900/95 dark:bg-slate-950/95 text-white backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-2.5 sm:p-3 animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <div className="flex items-center justify-between gap-2">
        {/* Panah Prev */}
        <button
          type="button"
          onClick={() => cycleVariant("prev")}
          className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
          title="Desain Video Sebelumnya (Alt + ←)"
          aria-label="Desain Video Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Info Desain Aktif */}
        <div className="flex-1 min-w-0 px-1 sm:px-2 flex items-center gap-2">
          <span className="shrink-0 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-600 text-white shadow-2xs">
            {activeMeta.badge}
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold truncate text-white">
              {activeMeta.name}
            </p>
            <p className="text-[10px] text-slate-400 truncate hidden md:block">
              {activeMeta.tag}
            </p>
          </div>
        </div>

        {/* Tombol Opsi Desain (1, 2, 3, 3-Rev, 4, 4-Rev, 5) */}
        <div className="flex items-center gap-1 shrink-0 overflow-x-auto scrollbar-none py-0.5">
          {CATEGORY_VIDEO_VARIANTS_META.map((meta) => {
            const isActive = meta.key === currentVariant;
            const isRevised = meta.key === "3-rev" || meta.key === "4-rev";
            return (
              <button
                key={meta.key}
                type="button"
                onClick={() => handleSelect(meta.key)}
                className={`px-2 h-7 sm:h-8 rounded-lg font-mono text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/50 scale-105"
                    : isRevised
                    ? "bg-amber-950/70 hover:bg-amber-900 border border-amber-600/60 text-amber-300"
                    : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white"
                }`}
                title={`Pilih ${meta.badge}: ${meta.name}`}
              >
                {meta.buttonLabel}
              </button>
            );
          })}
        </div>

        {/* Panah Next */}
        <button
          type="button"
          onClick={() => cycleVariant("next")}
          className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
          title="Desain Video Berikutnya (Alt + →)"
          aria-label="Desain Video Berikutnya"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Tombol Minimize */}
        <button
          type="button"
          onClick={() => setIsCollapsed(true)}
          className="p-1.5 sm:p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-0.5"
          title="Sembunyikan bilah"
          aria-label="Sembunyikan bilah"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
