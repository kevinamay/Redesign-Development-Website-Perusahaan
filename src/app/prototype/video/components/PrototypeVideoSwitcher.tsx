"use client";

import React, { useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Layers,
  Tv,
  Film,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface PrototypeVariantDef {
  key: string;
  name: string;
  badge: string;
  icon: LucideIcon;
  color: string;
}

export const VIDEO_PROTOTYPE_VARIANTS: PrototypeVariantDef[] = [
  {
    key: "grid",
    name: "Desain 1: 3-Card Grid (Homepage)",
    badge: "Opsi Asli 1",
    icon: LayoutGrid,
    color: "from-blue-600 to-indigo-600",
  },
  {
    key: "gallery",
    name: "Desain 2: Galeri Lengkap (/media)",
    badge: "Opsi Asli 2",
    icon: Layers,
    color: "from-purple-600 to-pink-600",
  },
  {
    key: "cinema",
    name: "Desain 3: Cinema Theater Spotlight",
    badge: "Baru • Spotlight",
    icon: Tv,
    color: "from-amber-500 to-red-600",
  },
  {
    key: "reel",
    name: "Desain 4: Dynamic Video Reel / Carousel",
    badge: "Baru • Carousel",
    icon: Film,
    color: "from-cyan-500 to-blue-600",
  },
  {
    key: "enterprise",
    name: "Desain 5: Corporate Pillars Storyline",
    badge: "Baru • Enterprise",
    icon: Building2,
    color: "from-emerald-500 to-teal-600",
  },
];

export function PrototypeVideoSwitcher({
  currentKey,
  onSelectVariant,
}: {
  currentKey: string;
  onSelectVariant: (key: string) => void;
}) {
  const currentIndex = VIDEO_PROTOTYPE_VARIANTS.findIndex((v) => v.key === currentKey);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;

  const goPrev = useCallback(() => {
    const prevIndex = (safeIndex - 1 + VIDEO_PROTOTYPE_VARIANTS.length) % VIDEO_PROTOTYPE_VARIANTS.length;
    onSelectVariant(VIDEO_PROTOTYPE_VARIANTS[prevIndex].key);
  }, [safeIndex, onSelectVariant]);

  const goNext = useCallback(() => {
    const nextIndex = (safeIndex + 1) % VIDEO_PROTOTYPE_VARIANTS.length;
    onSelectVariant(VIDEO_PROTOTYPE_VARIANTS[nextIndex].key);
  }, [safeIndex, onSelectVariant]);

  // Keyboard navigation: Left/Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInput =
        activeElement?.tagName === "INPUT" ||
        activeElement?.tagName === "TEXTAREA" ||
        (activeElement as HTMLElement)?.isContentEditable;

      if (isInput) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext]);

  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4">
      {/* Floating Control Deck */}
      <div className="pointer-events-auto flex flex-col sm:flex-row items-center gap-2 p-2 rounded-3xl bg-slate-950/95 text-white border border-slate-800 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 max-w-full overflow-x-auto">
        {/* Navigation Step Arrows */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={goPrev}
            className="p-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Desain sebelumnya (atau tekan tombol panah kiri ←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-bold text-slate-400 px-1">
            {safeIndex + 1}/{VIDEO_PROTOTYPE_VARIANTS.length}
          </span>

          <button
            onClick={goNext}
            className="p-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Desain selanjutnya (atau tekan tombol panah kanan →)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-slate-800 shrink-0 mx-1" />

        {/* Direct Variant Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          {VIDEO_PROTOTYPE_VARIANTS.map((variant) => {
            const Icon = variant.icon;
            const isSelected = variant.key === currentKey;
            return (
              <button
                key={variant.key}
                onClick={() => onSelectVariant(variant.key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? `bg-gradient-to-r ${variant.color} text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/30 scale-102`
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{variant.name.split(":")[0]}</span>
                <span className="hidden md:inline text-[10px] opacity-80 font-normal">
                  ({variant.badge})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="pointer-events-auto mt-1.5 text-[11px] text-slate-400 bg-black/60 px-3 py-0.5 rounded-full backdrop-blur-sm">
        💡 Tips: Gunakan tombol panah <kbd className="px-1 py-0.2 bg-slate-800 rounded font-mono">←</kbd> dan <kbd className="px-1 py-0.2 bg-slate-800 rounded font-mono">→</kbd> pada keyboard untuk mengganti desain langsung.
      </p>
    </div>
  );
}
