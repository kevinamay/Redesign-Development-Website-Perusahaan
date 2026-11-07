"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, Maximize2, ShieldCheck, Ruler, Scale } from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface VariantProps {
  product: SampleProductItem;
}

/**
 * Desain 2: Precision Square Bento Box (1:1 Ratio)
 * Kontainer berproporsi kotak presisi (lebar & tinggi seimbang).
 * Membagi ruang kotak menjadi grid bento modular: panggung foto utama di atas
 * dan dua kompartemen data & aksi terintegrasi di bawah.
 */
export default function Variant2SquareBentoGrid({ product }: VariantProps) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-3 sm:p-4 shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-[420px] mx-auto overflow-hidden group flex flex-col justify-between aspect-[1/1.08] sm:aspect-square"
    >
      {/* ========================================================================= */}
      {/* 1. TOP BENTO CELL: PRODUCT STAGE (PANGGUNG FOTO KOTAK)                    */}
      {/* ========================================================================= */}
      <div className="relative flex-1 bg-gradient-to-b from-slate-50 to-slate-100/70 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl border border-slate-200/60 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
        {/* Subtle background tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

        {/* Top bar chips */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-white/90 dark:bg-slate-900/90 text-blue-600 dark:text-blue-400 border border-slate-200/70 dark:border-slate-700 shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>{product.category}</span>
          </span>

          <span className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-400 group-hover:text-blue-600 shadow-2xs transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Product Photo Stage */}
        <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
          <div className="relative w-full h-full max-w-[210px] sm:max-w-[230px] max-h-[170px] flex items-center justify-center">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 210px, 230px"
              className={`object-contain transition-transform duration-500 ${
                isHovered ? "scale-108" : "scale-100"
              } ${isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"}`}
            />
          </div>
        </div>

        {/* Product Title Bar inside Stage */}
        <div className="relative z-10 text-center pt-1">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
            {product.subtitle}
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM BENTO ROW: 2 MODULAR CELLS (SPECS & CTA)                       */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mt-2.5">
        {/* Left Bento Cell: Key Specs */}
        <div className="bg-slate-50/90 dark:bg-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-800 p-2.5 flex flex-col justify-center">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 font-medium">
            <Ruler className="w-3 h-3 text-blue-500" />
            <span>Dimensi:</span>
          </div>
          <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">
            {product.dimensi}
          </p>

          <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1">
            <Scale className="w-3 h-3 text-emerald-500" />
            <span>Berat / Beban:</span>
          </div>
          <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">
            {product.bebanStatis ? product.bebanStatis : product.berat}
          </p>
        </div>

        {/* Right Bento Cell: Quick RFQ Button */}
        <a
          href={getWhatsAppProductUrl(product.title, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-2xl p-2.5 flex flex-col items-center justify-center text-center shadow-md shadow-blue-600/20 transition-all group/btn"
        >
          <PhoneCall className="w-4 h-4 mb-1 group-hover/btn:rotate-12 transition-transform" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Minta Penawaran</span>
          <span className="text-[9px] text-blue-200 font-medium">Respon Cepat B2B</span>
        </a>
      </div>
    </article>
  );
}

