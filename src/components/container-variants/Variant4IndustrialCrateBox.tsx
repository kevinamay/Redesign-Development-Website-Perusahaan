"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, Factory } from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface VariantProps {
  product: SampleProductItem;
}

/**
 * Desain 4: Industrial Heavy-Duty Crate (Kotak Peti Logistik)
 * Terinspirasi langsung dari bentuk produk kontainer peti dan palet plastik Asia Plastik.
 * Menggunakan proporsi kotak kokoh dengan bumper sudut siku bertulang (corner brackets),
 * stensil data sheet pabrik, dan garis pembatas struktural ganda.
 */
export default function Variant4IndustrialCrateBox({ product }: VariantProps) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-300 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-[420px] mx-auto overflow-hidden group aspect-[1/1.1] sm:aspect-square flex flex-col justify-between p-4"
    >
      {/* ========================================================================= */}
      {/* 4 INDUSTRIAL CORNER REINFORCEMENT BRACKETS                                */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-600 rounded-tl-xl pointer-events-none z-20" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-600 rounded-tr-xl pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-600 rounded-bl-xl pointer-events-none z-20" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-600 rounded-br-xl pointer-events-none z-20" />

      {/* ========================================================================= */}
      {/* 1. TOP HEADER: FACTORY STENCIL BAR                                       */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5 z-10">
        <div className="flex items-center gap-1.5">
          <Factory className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-700 dark:text-slate-300 uppercase">
            GRADE-A // 100% VIRGIN PP
          </span>
        </div>

        <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300/80 dark:border-slate-700">
          QC PASSED
        </span>
      </div>

      {/* ========================================================================= */}
      {/* 2. CENTER PRODUCT DISPLAY WITH STRUCTURAL RIBS                            */}
      {/* ========================================================================= */}
      <div className="relative flex-1 my-1 flex flex-col items-center justify-center">
        {/* Background Structural Accent lines */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-16 border-y border-dashed border-slate-200/90 dark:border-slate-800 pointer-events-none" />

        {/* Product Image */}
        <div className="relative z-10 w-full h-full max-w-[210px] sm:max-w-[240px] max-h-[170px] flex items-center justify-center">
          <Image
            src={product.imagePath}
            alt={product.title}
            fill
            quality={95}
            sizes="(max-width: 640px) 210px, 240px"
            className={`object-contain transition-transform duration-500 ${
              isHovered ? "scale-108 -translate-y-1" : "scale-100"
            } ${isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"}`}
          />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mt-1">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
            {product.subtitle}
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM INDUSTRIAL DATA SPEC & ACTION                                   */}
      {/* ========================================================================= */}
      <div className="z-10 pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
        {/* Monospace Spec Grid */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <div>
            <span className="text-slate-400 block text-[9px]">DIMENSI:</span>
            <span className="font-bold text-slate-800 dark:text-slate-200 truncate block">
              {product.dimensi}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[9px]">KAPASITAS:</span>
            <span className="font-bold text-blue-600 dark:text-blue-400 truncate block">
              {product.bebanStatis || product.kapasitas || product.berat}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={getWhatsAppProductUrl(product.title, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
        >
          <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
          <span>Minta Penawaran Pabrik (RFQ)</span>
        </a>
      </div>
    </article>
  );
}
