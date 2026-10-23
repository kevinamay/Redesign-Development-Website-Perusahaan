"use client";

import React, { useState } from "react";
import {
  Layers,
  Search,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { CategorySidebarProps } from "@/components/prototype/CategorySidebarOriginal";

export default function CategorySidebarVariantB({
  categories,
  activeCategoryId,
  onSelectCategory,
  sidebarTitle = "KATEGORI PRODUK",
}: CategorySidebarProps) {
  const [filterQuery, setFilterQuery] = useState("");

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <aside className="w-full">
      <div className="lg:sticky lg:top-32 h-fit bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl">
        {/* Title & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h2 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
              {sidebarTitle}
            </h2>
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            {categories.length} PILIHAN
          </span>
        </div>

        {/* Quick Instant Filter Input */}
        <div className="relative mb-4">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Cari kategori..."
            className="w-full bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 pl-8 pr-7 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all font-medium"
          />
          {filterQuery && (
            <button
              onClick={() => setFilterQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Categories List with Left Accent Border */}
        <div className="flex flex-col gap-1 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
          {filtered.length > 0 ? (
            filtered.map((cat, idx) => {
              const isActive = activeCategoryId === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-xs transition-all flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-extrabold border-l-4 border-blue-600 shadow-xs"
                      : "text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border-l-4 border-transparent font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-400 opacity-60"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{cat.name}</span>
                  </div>

                  {isActive ? (
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-400 shrink-0 transition-colors" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="py-6 text-center text-xs text-slate-400">
              Tidak ada kategori yang cocok
            </div>
          )}
        </div>

        {/* Quick Info Box */}
        <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-medium">
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
            <Sparkles className="w-3 h-3" />
            <span>Ready Stock B2B</span>
          </span>
          <span>CV. Asia Plastik</span>
        </div>
      </div>
    </aside>
  );
}
