"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, CheckCircle2, ChevronRight } from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface VariantProps {
  product: SampleProductItem;
}

/**
 * Desain 5: Square-Circle Contrast Lens (Kotak Lensa Melingkar)
 * Memadukan bingkai kotak luar yang proporsional dengan panggung lingkaran sempurna (circular lens)
 * di dalamnya. Menghilangkan kesan kaku persegi panjang dan mengunci pandangan pengunjung
 * langsung pada siluet produk industri.
 */
export default function Variant5SquareCircleLens({ product }: VariantProps) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-[420px] mx-auto overflow-hidden group aspect-[1/1.1] sm:aspect-square flex flex-col justify-between p-4"
    >
      {/* ========================================================================= */}
      {/* 1. TOP BAR: CATEGORY & BADGE                                              */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900">
          {product.category}
        </span>

        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-3 h-3" />
          <span>Siap Kirim</span>
        </span>
      </div>

      {/* ========================================================================= */}
      {/* 2. INNER CIRCULAR LENS STAGE                                             */}
      {/* ========================================================================= */}
      <div className="relative flex-1 my-1 flex items-center justify-center">
        {/* Perfect Circle Lens Frame */}
        <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center p-4 relative overflow-hidden transition-all duration-500 group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:shadow-inner">
          {/* Subtle concentric guide ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-slate-200 dark:border-slate-700/50 pointer-events-none" />

          {/* Product Image inside Circle */}
          <div className="relative w-full h-full max-w-[170px] sm:max-w-[190px] max-h-[140px] flex items-center justify-center">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 170px, 190px"
              className={`object-contain transition-transform duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              } ${isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"}`}
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. PRODUCT TITLE & 2-COLUMN MICRO-PILL SPECS                              */}
      {/* ========================================================================= */}
      <div className="z-10 space-y-2.5">
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Horizontal Spec Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-700 dark:text-slate-300">
            {product.dimensi}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
            {product.bebanStatis || product.kapasitas || product.berat}
          </span>
        </div>

        {/* WhatsApp RFQ Button */}
        <a
          href={getWhatsAppProductUrl(product.title, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all group/btn"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Klaim Penawaran Harga</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </article>
  );
}

