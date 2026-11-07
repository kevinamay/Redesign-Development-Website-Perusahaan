"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, Sparkles, Box } from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface VariantProps {
  product: SampleProductItem;
}

/**
 * Desain 3: Cubic Hero Showcase (Kubus Spotlight)
 * Kontainer kubus fokus produk dengan panggung melingkar tersembunyi (recessed stage).
 * Bentuk kotak presisi dan proporsional, spesifikasi teknis diringkas pada bilah drawer
 * bawah yang rapi tanpa membuat container melebar menjadi persegi panjang.
 */
export default function Variant3CubicHeroShowcase({ product }: VariantProps) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[420px] mx-auto overflow-hidden group aspect-[1/1.1] sm:aspect-square flex flex-col justify-between p-4"
    >
      {/* ========================================================================= */}
      {/* 1. TOP HEADER & ACCENT                                                    */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between gap-2 z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-[10px] font-bold tracking-wider uppercase">
          <Box className="w-3 h-3 text-blue-600" />
          <span>{product.category}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>STANDAR B2B</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. RECESSED SPOTLIGHT PRODUCT PEDESTAL                                   */}
      {/* ========================================================================= */}
      <div className="relative flex-1 my-2 flex items-center justify-center">
        {/* Radial Spotlight Backdrop */}
        <div className="absolute inset-0 m-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-blue-100/60 via-slate-100/70 to-blue-50/30 dark:from-blue-950/40 dark:via-slate-800/50 dark:to-slate-800/20 blur-xl pointer-events-none transition-all duration-500 group-hover:scale-110" />

        {/* Circular stage ring */}
        <div className="absolute inset-0 m-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-slate-200/70 dark:border-slate-800 pointer-events-none opacity-60" />

        {/* Product Image */}
        <div className="relative z-10 w-full h-full max-w-[210px] sm:max-w-[240px] max-h-[170px] flex items-center justify-center">
          <Image
            src={product.imagePath}
            alt={product.title}
            fill
            quality={95}
            sizes="(max-width: 640px) 210px, 240px"
            className={`object-contain transition-transform duration-500 ${
              isHovered ? "scale-110 -translate-y-1" : "scale-100"
            } ${isPng ? "drop-shadow-lg" : "mix-blend-multiply dark:mix-blend-normal"}`}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. DOCKED BOTTOM DRAWER (TITLE, SPECS & ACTION)                           */}
      {/* ========================================================================= */}
      <div className="z-10 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 p-3 sm:p-3.5 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.title}
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
              {product.subtitle}
            </p>
          </div>
          <span className="p-1.5 rounded-lg bg-blue-600 text-white shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Micro Specs Strip */}
        <div className="grid grid-cols-2 gap-1.5 text-[10px] bg-white dark:bg-slate-900 rounded-xl p-2 border border-slate-200/60 dark:border-slate-800">
          <div>
            <span className="text-slate-400 block text-[9px]">Ukuran:</span>
            <span className="font-bold text-slate-800 dark:text-slate-200 truncate block">
              {product.dimensi}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[9px]">Kapasitas / Berat:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 truncate block">
              {product.kapasitas || product.bebanStatis || product.berat}
            </span>
          </div>
        </div>

        {/* RFQ Direct Action */}
        <a
          href={getWhatsAppProductUrl(product.title, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Hubungi Sales / Minta Penawaran</span>
        </a>
      </div>
    </article>
  );
}
