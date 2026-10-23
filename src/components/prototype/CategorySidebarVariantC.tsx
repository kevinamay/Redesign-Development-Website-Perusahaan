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
} from "lucide-react";
import { CategorySidebarProps } from "@/components/prototype/CategorySidebarOriginal";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
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

export default function CategorySidebarVariantC({
  categories,
  activeCategoryId,
  onSelectCategory,
  sidebarTitle = "KATEGORI PRODUK",
}: CategorySidebarProps) {
  return (
    <aside className="w-full">
      <div className="lg:sticky lg:top-32 h-fit bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-600 text-white shadow-xs">
              <Layers className="w-3.5 h-3.5" />
            </span>
            <h2 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
              {sidebarTitle}
            </h2>
          </div>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
            OFFICIAL B2B
          </span>
        </div>

        {/* Categories as Modern Cards */}
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            const icon = CATEGORY_ICONS[cat.id] || (
              <Package className="w-4 h-4" />
            );

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full text-left p-3 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]"
                    : "bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-400"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span
                    className={`p-1.5 rounded-xl ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
                    }`}
                  >
                    {icon}
                  </span>
                  <span className="truncate">{cat.name}</span>
                </div>

                {isActive && (
                  <ChevronRight className="w-4 h-4 text-white shrink-0 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
