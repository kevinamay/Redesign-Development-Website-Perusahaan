"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Maximize2,
  Sparkles,
  Ruler,
  Weight,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface Variant5Props {
  product: SampleProductItem;
}

/**
 * Desain 5: Organic Sculpted Pebble / Soft Oval
 * Mengikis semua garis siku kaku dengan kontur batu kerikil organik melengkung halus
 * (rounded-[3rem_1.5rem_3rem_1.5rem]) dan kubah panggung elips.
 */
export default function Variant5OrganicSoftOval({ product }: Variant5Props) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-[3rem_1.5rem_3rem_1.5rem] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-9 shadow-md hover:shadow-2xl transition-all duration-300 w-full overflow-hidden group max-w-2xl mx-auto"
    >
      {/* Background Organic Ambient Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Floating Badge Pill */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-wider uppercase">
          <Sparkles className="w-3 h-3" />
          <span>{product.category}</span>
        </div>

        <button
          type="button"
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors shadow-xs"
          title="Perbesar Tampilan"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Central Elliptical Stage (Kubah Panggung Melingkar) */}
      <div className="relative w-full h-56 sm:h-64 flex items-center justify-center my-3 select-none">
        {/* Soft Organic Dome Background */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-b from-slate-50 via-blue-50/30 to-transparent dark:from-slate-800/60 dark:via-blue-950/20 dark:to-transparent border border-slate-100 dark:border-slate-800/80 shadow-inner" />

        {/* Product Image */}
        <div className="relative z-10 w-full h-full max-w-[260px] sm:max-w-[320px] max-h-[90%] flex items-center justify-center mx-auto">
          <Image
            src={product.imagePath}
            alt={product.title}
            fill
            quality={95}
            sizes="(max-width: 640px) 260px, 320px"
            className={`object-contain transition-transform duration-500 ${
              isHovered ? "scale-110 -translate-y-1" : "scale-100"
            } ${isPng ? "drop-shadow-xl" : "mix-blend-multiply dark:mix-blend-normal"}`}
          />
        </div>
      </div>

      {/* Product Title & Subtitle */}
      <div className="text-center mt-3 mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto line-clamp-2">
          {product.subtitle}
        </p>
      </div>

      {/* Floating Specs Pill Capsules */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs">
          <Ruler className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-slate-400">Dimensi:</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            {product.dimensi}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs">
          <Weight className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-slate-400">Berat:</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            {product.berat}
          </span>
        </div>

        {product.bebanStatis && (
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 text-xs">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Beban: {product.bebanStatis}
            </span>
          </div>
        )}

        {product.kapasitas && (
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-blue-700 dark:text-blue-400 font-bold">
              Kapasitas: {product.kapasitas}
            </span>
          </div>
        )}
      </div>

      {/* Rounded Pebble Button */}
      <div className="text-center">
        <a
          href={getWhatsAppProductUrl(product.title, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-blue-600/25 active:scale-95 transition-all"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Hubungi Penjualan (Pebble RFQ)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

