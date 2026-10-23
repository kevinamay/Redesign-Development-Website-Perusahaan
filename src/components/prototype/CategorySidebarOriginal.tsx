"use client";

import React from "react";
import { Layers, ChevronRight } from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
}

export interface CategorySidebarProps {
  categories: CategoryItem[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  sidebarTitle?: string;
}

export default function CategorySidebarOriginal({
  categories,
  activeCategoryId,
  onSelectCategory,
  sidebarTitle = "KATEGORI PRODUK",
}: CategorySidebarProps) {
  return (
    <aside className="w-full">
      <div className="lg:sticky lg:top-32 h-fit">
        <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-6 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{sidebarTitle}</span>
        </h2>

        <div className="flex flex-col gap-2">
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full text-left px-5 py-3.5 font-semibold text-sm transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white rounded-xl shadow-md"
                    : "text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 rounded-xl"
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <ChevronRight className="w-4 h-4 text-white shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
