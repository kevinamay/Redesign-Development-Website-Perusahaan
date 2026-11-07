"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Maximize2,
  CheckCircle2,
  Layers,
  Ruler,
  Weight,
  Sparkles,
} from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface Variant1Props {
  product: SampleProductItem;
}

/**
 * Desain 1: Landscape Two-Tone Capsule
 * Memecah bentuk kotak persegi panjang vertikal menjadi kapsul horizontal modern
 * dengan panggung foto melingkar (circular halo stage) dan tata letak lanskap elegan.
 */
export default function Variant1HorizontalCapsule({ product }: Variant1Props) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 lg:p-7 shadow-md hover:shadow-xl transition-all duration-300 w-full overflow-hidden group"
    >
      {/* Ambient background glow on hover */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* ========================================================================= */}
        {/* SISI KIRI: PANGGUNG FOTO MELINGKAR (CIRCULAR STAGE)                      */}
        {/* ========================================================================= */}
        <div className="relative w-full md:w-5/12 max-w-[320px] aspect-square rounded-[2rem] bg-gradient-to-br from-slate-50 via-slate-100/60 to-slate-50 dark:from-slate-800/60 dark:via-slate-800/30 dark:to-slate-800/60 p-6 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/50 shadow-inner select-none">
          {/* Circular halo glow ring */}
          <div className="absolute inset-4 rounded-full bg-white/80 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 shadow-sm pointer-events-none" />

          {/* Product Image */}
          <div className="relative w-full h-full max-w-[220px] max-h-[220px] flex items-center justify-center">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 220px, 260px"
              className={`object-contain transition-transform duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              } ${isPng ? "drop-shadow-lg" : "mix-blend-multiply dark:mix-blend-normal"}`}
            />
          </div>

          {/* Quick Lightbox Icon Top Right */}
          <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700 text-slate-500 group-hover:text-blue-600 flex items-center justify-center shadow-xs transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>

          {/* Category Chip Floating Bottom Left */}
          <span className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
            {product.category}
          </span>
        </div>

        {/* ========================================================================= */}
        {/* SISI KANAN: KONTEN SPESIFIKASI & AKSI                                      */}
        {/* ========================================================================= */}
        <div className="flex-1 w-full space-y-4">
          {/* Badges Pill Row */}
          {product.badges && product.badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {product.badges.map((b, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                    b.variant === "emerald"
                      ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60"
                      : "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{b.label}</span>
                </span>
              ))}
            </div>
          )}

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          {/* Specifications Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block flex items-center gap-1">
                <Ruler className="w-3 h-3 text-blue-500" /> Dimensi
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {product.dimensi}
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block flex items-center gap-1">
                <Weight className="w-3 h-3 text-blue-500" /> Berat Bersih
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {product.berat}
              </span>
            </div>

            {product.bebanStatis && (
              <div className="bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block flex items-center gap-1">
                  <Layers className="w-3 h-3 text-emerald-500" /> Beban Statis
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {product.bebanStatis}
                </span>
              </div>
            )}
            {product.kapasitas && (
              <div className="bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-blue-500" /> Kapasitas
                </span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  {product.kapasitas}
                </span>
              </div>
            )}
          </div>

          {/* Action Button Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppProductUrl(product.title, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Pesan / Minta Penawaran</span>
            </a>
            <span className="text-[11px] text-slate-400 font-medium">
              Kapsul Horizontal ➔
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

