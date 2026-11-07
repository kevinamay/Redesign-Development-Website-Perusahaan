"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Maximize2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface Variant2Props {
  product: SampleProductItem;
}

/**
 * Desain 2: Modular Dual-Pod (Floating Island)
 * Memecah kotak tunggal menjadi DUA POD TERPISAH (Pod Visual Squircle + Dock Spesifikasi Pill)
 * sehingga menghilangkan kesan balok persegi panjang masif.
 */
export default function Variant2ModularSplitPod({ product }: Variant2Props) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5 group">
      {/* ========================================================================= */}
      {/* POD 1: VISUAL SQUIRCLE STAGE (PULAU UTAMA PRODUK)                         */}
      {/* ========================================================================= */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        {/* Soft circular background pedestal */}
        <div className="absolute inset-x-8 top-6 bottom-16 rounded-full bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-transparent dark:from-blue-950/20 dark:via-slate-800/20 dark:to-transparent -z-0 pointer-events-none" />

        {/* Top Header Row with Badges and Lightbox icon */}
        <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
              {product.category}
            </span>
            {product.badges && product.badges.length > 0 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60">
                <Sparkles className="w-3 h-3" />
                <span>{product.badges[0].label}</span>
              </span>
            )}
          </div>

          <button
            type="button"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Lihat ukuran penuh"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Product Floating Display: Constrained for Razor Sharp Rendering */}
        <div className="relative z-10 w-full h-52 sm:h-60 flex items-center justify-center my-2 select-none">
          <div className="relative w-full h-full max-w-[280px] sm:max-w-[340px] max-h-[90%] flex items-center justify-center mx-auto">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 260px, 340px"
              className={`object-contain transition-transform duration-500 ${
                isHovered ? "scale-108 -translate-y-1" : "scale-100"
              } ${isPng ? "drop-shadow-xl" : "mix-blend-multiply dark:mix-blend-normal"}`}
            />
          </div>
        </div>

        {/* Product Title & Short Teaser */}
        <div className="relative z-10 text-center mt-3">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg mx-auto line-clamp-2">
            {product.subtitle}
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* POD 2: DOCKED SPECIFICATION BAR (PULAU SPESIFIKASI MELAYANG)              */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-blue-950 dark:to-slate-800 text-white rounded-full p-2.5 sm:p-3 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 px-5 sm:px-7 border border-slate-700/50">
        {/* Left: Quick Specs Summary */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs divide-x divide-slate-700/80">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
              Dimensi
            </span>
            <span className="font-bold text-white text-[11px] sm:text-xs">
              {product.dimensi}
            </span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
              Berat Bersih
            </span>
            <span className="font-bold text-white text-[11px] sm:text-xs">
              {product.berat}
            </span>
          </div>

          {(product.bebanStatis || product.kapasitas) && (
            <div className="pl-4 sm:pl-6">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                {product.bebanStatis ? "Beban Statis" : "Kapasitas"}
              </span>
              <span className="font-bold text-emerald-400 text-[11px] sm:text-xs">
                {product.bebanStatis || product.kapasitas}
              </span>
            </div>
          )}
        </div>

        {/* Right: RFQ Button */}
        <a
          href={getWhatsAppProductUrl(product.title, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold text-xs shadow-md shadow-blue-600/30 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Pesan / RFQ</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
