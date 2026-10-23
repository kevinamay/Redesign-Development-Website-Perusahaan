"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Sparkles, Layers, LayoutGrid } from "lucide-react";

export interface PrototypeProductVariant {
  id: string;
  label: string;
  shortName: string;
  description: string;
}

export const PRODUCT_PROTOTYPE_VARIANTS: PrototypeProductVariant[] = [
  {
    id: "D",
    label: "Varian D (Enterprise Hybrid)",
    shortName: "Kartu D ⭐",
    description: "Kombinasi terbaik Original + C: Header penuh, split studio, & ribbon bawah",
  },
  {
    id: "E",
    label: "Varian E (Executive Tech Stage)",
    shortName: "Kartu E ⭐",
    description: "Evolusi mewah Varian C: Panggung sinematik, 4-metrik ribbon, & B2B RFQ box",
  },
  {
    id: "C",
    label: "Varian C (Panoramic Ribbon)",
    shortName: "Kartu C",
    description: "Showcase panggung lebar dengan horizontal technical spec ribbon",
  },
  {
    id: "original",
    label: "Desain Awal (Split Grid)",
    shortName: "Kartu Original",
    description: "Layout kartu bawaan dengan split grid gambar & deskripsi",
  },
  {
    id: "A",
    label: "Varian A (Industrial Studio)",
    shortName: "Kartu A",
    description: "Podium produk studio heroik dengan 4-Cell Technical Spec Matrix",
  },
  {
    id: "B",
    label: "Varian B (Modern B2B Bento)",
    shortName: "Kartu B",
    description: "Apple/Linear-style Bento 3-tile grid modular, terstruktur & high-conversion",
  },
];

export const CATEGORY_PROTOTYPE_VARIANTS = [
  {
    id: "A",
    label: "Sidebar A (Grouped Hierarchy & Icons)",
    shortName: "Sidebar A ⭐",
    description: "Kategori terbagi 3 sektor industri resmi dengan ikon tematik & badge",
  },
  {
    id: "B",
    label: "Sidebar B (Glass HUD & Instant Filter)",
    shortName: "Sidebar B",
    description: "Sidebar kapsul kaca modern dengan kolom pencarian kategori instan",
  },
  {
    id: "C",
    label: "Sidebar C (Modern Minimalist Matrix)",
    shortName: "Sidebar C",
    description: "Kartu kategori individual dengan aksen hover & animasi pulsasi aktif",
  },
  {
    id: "original",
    label: "Sidebar Original (Standar Bawaan)",
    shortName: "Sidebar Original",
    description: "Sidebar bawaan dengan daftar tombol teks sederhana",
  },
];

interface PrototypeProductSwitcherProps {
  currentVariant?: string;
  currentCatVariant?: string;
  onVariantChange?: (variantId: string) => void;
  onCatVariantChange?: (catVariantId: string) => void;
}

export default function PrototypeProductSwitcher({
  currentVariant,
  currentCatVariant,
  onVariantChange,
  onCatVariantChange,
}: PrototypeProductSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeVariantId =
    currentVariant || searchParams.get("variant") || "D";
  const activeCatVariantId =
    currentCatVariant || searchParams.get("catVariant") || "A";

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
      params.set(key, value);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const setCardVariant = useCallback(
    (variantId: string) => {
      if (onVariantChange) onVariantChange(variantId);
      setParam("variant", variantId);
    },
    [onVariantChange, setParam]
  );

  const setCategoryVariant = useCallback(
    (catVariantId: string) => {
      if (onCatVariantChange) onCatVariantChange(catVariantId);
      setParam("catVariant", catVariantId);
    },
    [onCatVariantChange, setParam]
  );

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      if (e.key === "1") setCardVariant("D");
      if (e.key === "2") setCardVariant("E");
      if (e.key === "3") setCardVariant("C");
      if (e.key === "0") setCardVariant("original");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCardVariant]);

  return (
    <aside
      aria-label="Prototype switcher"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[99999] flex flex-col items-center gap-1.5 pointer-events-auto select-none max-w-[96vw]"
    >
      {/* Unified 2-Deck Prototype Switcher */}
      <div className="flex flex-col gap-1.5 p-2 rounded-2xl bg-slate-950/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl">
        {/* ROW 1: DESAIN KARTU PRODUK */}
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 flex items-center gap-1 shrink-0">
            <LayoutGrid className="w-3 h-3 text-blue-400" />
            <span className="hidden sm:inline">Desain Kartu:</span>
          </span>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {PRODUCT_PROTOTYPE_VARIANTS.map((v) => {
              const isActive =
                v.id.toLowerCase() === activeVariantId.toLowerCase();
              return (
                <button
                  key={v.id}
                  onClick={() => setCardVariant(v.id)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-[1.02]"
                      : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/70"
                  }`}
                >
                  {isActive && <Sparkles className="w-2.5 h-2.5 text-amber-300" />}
                  <span>{v.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 2: DESAIN SIDEBAR KATEGORI */}
        <div className="flex items-center gap-1 sm:gap-2 pt-1 border-t border-slate-800">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 flex items-center gap-1 shrink-0">
            <Layers className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">Sidebar Kategori:</span>
          </span>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {CATEGORY_PROTOTYPE_VARIANTS.map((c) => {
              const isActive =
                c.id.toLowerCase() === activeCatVariantId.toLowerCase();
              return (
                <button
                  key={c.id}
                  onClick={() => setCategoryVariant(c.id)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]"
                      : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/70"
                  }`}
                >
                  {isActive && <Sparkles className="w-2.5 h-2.5 text-amber-300" />}
                  <span>{c.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
