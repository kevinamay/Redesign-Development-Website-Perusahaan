"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface DrawerPrototypeBarProps {
  activeVariant: "A" | "B" | "C";
  onSelectVariant: (v: "A" | "B" | "C") => void;
}

export default function DrawerPrototypeBar({
  activeVariant,
  onSelectVariant,
}: DrawerPrototypeBarProps) {
  return (
    <div className="mb-4 p-3 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 border-2 border-blue-500/30 dark:border-blue-400/30 shrink-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          PILIH DESAIN PROTOTYPE:
        </span>
        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
          Klik untuk tes varian
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        <button
          type="button"
          onClick={() => onSelectVariant("A")}
          className={`py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer ${
            activeVariant === "A"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-[1.02]"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
          }`}
        >
          <div className="text-[9px] font-extrabold uppercase opacity-80">Desain 1</div>
          <div className="text-xs font-bold leading-tight">Slide Kanan</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectVariant("B")}
          className={`py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer ${
            activeVariant === "B"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-[1.02]"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
          }`}
        >
          <div className="text-[9px] font-extrabold uppercase opacity-80">Desain 2</div>
          <div className="text-xs font-bold leading-tight">Slide Kiri</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectVariant("C")}
          className={`py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer ${
            activeVariant === "C"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-[1.02]"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
          }`}
        >
          <div className="text-[9px] font-extrabold uppercase opacity-80">Desain 3</div>
          <div className="text-xs font-bold leading-tight">Glass Card</div>
        </button>
      </div>
    </div>
  );
}
