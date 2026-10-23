"use client";

import React from "react";
import {
  Layers,
  ChevronRight,
  Boxes,
  Archive,
  Fuel,
  Droplets,
  Sparkles,
  PaintBucket,
  Fish,
  ShieldAlert,
  Sprout,
  Package,
  Building2,
  Factory,
} from "lucide-react";
import { CategorySidebarProps } from "@/components/prototype/CategorySidebarOriginal";

const CATEGORY_ICON_MAP: Record<string, React.ReactNode> = {
  "pallet-industri": <Boxes className="w-4 h-4 shrink-0" />,
  "keranjang-industri": <Layers className="w-4 h-4 shrink-0" />,
  "box-lipat": <Archive className="w-4 h-4 shrink-0" />,
  "blok-lalu-lintas": <ShieldAlert className="w-4 h-4 shrink-0" />,
  "botol-pupuk-pet": <Sprout className="w-4 h-4 shrink-0" />,
  kosmetik: <Sparkles className="w-4 h-4 shrink-0" />,
  "botol-minyak-goreng": <Droplets className="w-4 h-4 shrink-0" />,
  "beragam-kemasan-pet": <Package className="w-4 h-4 shrink-0" />,
  "jerigen-hdpe": <Fuel className="w-4 h-4 shrink-0" />,
  "jerigen-chemical-hdpe": <Fuel className="w-4 h-4 shrink-0" />,
  "jerigen-oli": <Fuel className="w-4 h-4 shrink-0" />,
  "jerigen-lipat": <Archive className="w-4 h-4 shrink-0" />,
  "botol-hdpe": <Package className="w-4 h-4 shrink-0" />,
  "kaleng-pail-plastik": <PaintBucket className="w-4 h-4 shrink-0" />,
  "perikanan-dan-kelautan": <Fish className="w-4 h-4 shrink-0" />,
};

const SECTORS = [
  {
    name: "Logistik & Pergudangan",
    icon: <Building2 className="w-3.5 h-3.5 text-blue-500" />,
    ids: ["pallet-industri", "keranjang-industri", "box-lipat"],
  },
  {
    name: "Kemasan Kimia & Cairan",
    icon: <Factory className="w-3.5 h-3.5 text-emerald-500" />,
    ids: [
      "jerigen-hdpe",
      "jerigen-chemical-hdpe",
      "jerigen-oli",
      "jerigen-lipat",
      "kaleng-pail-plastik",
    ],
  },
  {
    name: "Kemasan Konsumen & Khusus",
    icon: <Sparkles className="w-3.5 h-3.5 text-indigo-500" />,
    ids: [
      "botol-minyak-goreng",
      "botol-pupuk-pet",
      "beragam-kemasan-pet",
      "botol-hdpe",
      "kosmetik",
      "blok-lalu-lintas",
      "perikanan-dan-kelautan",
    ],
  },
];

export default function CategorySidebarVariantA({
  categories,
  activeCategoryId,
  onSelectCategory,
  sidebarTitle = "KATEGORI PRODUK",
}: CategorySidebarProps) {
  const catMap = new Map(categories.map((c) => [c.id, c]));

  return (
    <aside className="w-full">
      <div className="lg:sticky lg:top-32 h-fit bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {sidebarTitle}
              </h2>
              <span className="text-[10px] text-slate-400 font-semibold">
                Sektor Industri Terpadu
              </span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-extrabold text-blue-600 dark:text-blue-400">
            {categories.length} Kategori
          </span>
        </div>

        {/* Grouped Sectors */}
        <div className="flex flex-col gap-6">
          {SECTORS.map((sector, sIdx) => {
            const sectorCats = sector.ids
              .map((id) => catMap.get(id))
              .filter(Boolean) as typeof categories;

            if (sectorCats.length === 0) return null;

            return (
              <div key={sIdx} className="flex flex-col gap-1.5">
                {/* Sector Header */}
                <div className="flex items-center gap-1.5 px-2 mb-1 text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {sector.icon}
                  <span>{sector.name}</span>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-1">
                  {sectorCats.map((cat) => {
                    const isActive = activeCategoryId === cat.id;
                    const icon = CATEGORY_ICON_MAP[cat.id] || (
                      <Package className="w-4 h-4" />
                    );

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => onSelectCategory(cat.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-between group cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 scale-[1.01]"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span
                            className={`${
                              isActive
                                ? "text-white"
                                : "text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                            }`}
                          >
                            {icon}
                          </span>
                          <span className="truncate">{cat.name}</span>
                        </div>

                        {isActive ? (
                          <ChevronRight className="w-3.5 h-3.5 text-white shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-blue-500 shrink-0 transition-colors" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Trust Badge */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 text-center font-medium">
          Standar Mutu ISO 9001:2015 • Halal & Food Grade
        </div>
      </div>
    </aside>
  );
}
