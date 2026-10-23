"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface PrototypeProductVariant {
  id: string;
  label: string;
  shortName: string;
  description: string;
}

export const PRODUCT_PROTOTYPE_VARIANTS: PrototypeProductVariant[] = [
  {
    id: "original",
    label: "Desain Awal (Split Grid)",
    shortName: "Original",
    description: "Layout kartu bawaan dengan split grid gambar & deskripsi",
  },
  {
    id: "C",
    label: "Varian C (Panoramic Ribbon)",
    shortName: "Varian C",
    description: "Showcase panggung lebar dengan horizontal technical spec ribbon",
  },
  {
    id: "D",
    label: "Varian D (Enterprise Hybrid)",
    shortName: "Varian D ⭐",
    description: "Kombinasi terbaik Original + C: Header penuh, split studio, & ribbon bawah",
  },
  {
    id: "E",
    label: "Varian E (Executive Tech Stage)",
    shortName: "Varian E ⭐",
    description: "Evolusi mewah Varian C: Panggung sinematik, 4-metrik ribbon, & B2B RFQ box",
  },
  {
    id: "A",
    label: "Varian A (Industrial Studio)",
    shortName: "Varian A",
    description: "Podium produk studio heroik dengan 4-Cell Technical Spec Matrix",
  },
  {
    id: "B",
    label: "Varian B (Modern B2B Bento)",
    shortName: "Varian B",
    description: "Apple/Linear-style Bento 3-tile grid modular, terstruktur & high-conversion",
  },
];

interface PrototypeProductSwitcherProps {
  currentVariant?: string;
  onVariantChange?: (variantId: string) => void;
}

export default function PrototypeProductSwitcher({
  currentVariant,
  onVariantChange,
}: PrototypeProductSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeVariantId =
    currentVariant || searchParams.get("variant") || "D";

  const currentIndex = PRODUCT_PROTOTYPE_VARIANTS.findIndex(
    (v) => v.id.toLowerCase() === activeVariantId.toLowerCase()
  );
  const activeVariant =
    PRODUCT_PROTOTYPE_VARIANTS[currentIndex >= 0 ? currentIndex : 2]; // Default to Variant D if not found

  const setVariant = useCallback(
    (variantId: string) => {
      if (onVariantChange) {
        onVariantChange(variantId);
      }
      const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
      params.set("variant", variantId);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [onVariantChange, pathname, router, searchParams]
  );

  const handlePrev = useCallback(() => {
    const prevIdx =
      (currentIndex - 1 + PRODUCT_PROTOTYPE_VARIANTS.length) %
      PRODUCT_PROTOTYPE_VARIANTS.length;
    setVariant(PRODUCT_PROTOTYPE_VARIANTS[prevIdx].id);
  }, [currentIndex, setVariant]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % PRODUCT_PROTOTYPE_VARIANTS.length;
    setVariant(PRODUCT_PROTOTYPE_VARIANTS[nextIdx].id);
  }, [currentIndex, setVariant]);

  // Keyboard navigation: Left/Right arrows
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
      } else if (e.key === "1") {
        setVariant("A");
      } else if (e.key === "2") {
        setVariant("B");
      } else if (e.key === "3") {
        setVariant("C");
      } else if (e.key === "4" || e.key.toLowerCase() === "d") {
        setVariant("D");
      } else if (e.key === "5" || e.key.toLowerCase() === "e") {
        setVariant("E");
      } else if (e.key === "0") {
        setVariant("original");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, setVariant]);

  return (
    <aside aria-label="Prototype switcher" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] flex flex-col items-center gap-2 pointer-events-auto select-none max-w-[95vw]">
      {/* Quick Selector Pills */}
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-2xl bg-slate-950/90 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl">
        <button
          onClick={handlePrev}
          title="Varian Sebelumnya (Panah Kiri)"
          aria-label="Varian Sebelumnya"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {PRODUCT_PROTOTYPE_VARIANTS.map((v) => {
            const isActive =
              v.id.toLowerCase() === activeVariant.id.toLowerCase();
            return (
              <button
                key={v.id}
                onClick={() => setVariant(v.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-[1.03]"
                    : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/70"
                }`}
              >
                {isActive && <Sparkles className="w-3 h-3 text-amber-300" />}
                <span>{v.shortName}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          title="Varian Berikutnya (Panah Kanan)"
          aria-label="Varian Berikutnya"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Description Tooltip Bar */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900/80 text-slate-300 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-medium border border-slate-800/80 shadow-lg">
        <span className="text-blue-400 font-bold">{activeVariant.label}:</span>
        <span className="text-slate-300">{activeVariant.description}</span>
        <span className="text-slate-500 text-[10px] ml-1">(Gunakan tombol 1, 2, 3, 0 atau ← →)</span>
      </div>
    </aside>
  );
}
