"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Maximize2,
} from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface Variant4Props {
  product: SampleProductItem;
}

/**
 * Desain 4: Notched Spec-Ticket (Industrial Tag)
 * Terinspirasi dari tiket inspeksi batch pabrik dengan lekukan kurva cekung (concave notch)
 * di kedua sisi dan garis perforasi pemisah, memecah bidang persegi panjang kaku.
 */
export default function Variant4NotchedSpecTicket({ product }: Variant4Props) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 w-full overflow-hidden group max-w-2xl mx-auto"
    >
      {/* ========================================================================= */}
      {/* 1. BAGIAN ATAS: PANGGUNG FOTO PRODUK                                      */}
      {/* ========================================================================= */}
      <div className="relative p-6 sm:p-8 bg-slate-50/70 dark:bg-slate-800/40 select-none">
        {/* Top Ticket Header Tab */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
            {product.category}
          </span>
          <button
            type="button"
            className="p-1.5 rounded-lg bg-white/80 dark:bg-slate-800 text-slate-500 hover:text-blue-600 shadow-xs cursor-pointer"
            title="Perbesar"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Product Photo: Sharp & Centered */}
        <div className="relative w-full h-48 sm:h-56 flex items-center justify-center my-2">
          <div className="relative w-full h-full max-w-[260px] sm:max-w-[320px] max-h-[90%] flex items-center justify-center mx-auto">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 240px, 320px"
              className={`object-contain transition-transform duration-500 ${
                isHovered ? "scale-108" : "scale-100"
              } ${isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"}`}
            />
          </div>
        </div>

        {/* Product Title */}
        <div className="text-center mt-2">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PEMISAH TIKET: PERFORASI + NOTCH CEKUNG KIRI DAN KANAN                 */}
      {/* ========================================================================= */}
      <div className="relative w-full h-7 flex items-center justify-center bg-transparent">
        {/* Left Concave Cutout Notch */}
        <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-950 border-r border-slate-200/90 dark:border-slate-800 shadow-inner z-20" />

        {/* Dashed Perforation Line */}
        <div className="w-full border-t-2 border-dashed border-slate-200 dark:border-slate-800 mx-5 z-10" />

        {/* Right Concave Cutout Notch */}
        <div className="absolute -right-3.5 w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-950 border-l border-slate-200/90 dark:border-slate-800 shadow-inner z-20" />
      </div>

      {/* ========================================================================= */}
      {/* 3. BAGIAN BAWAH: DATA SHEET TIKET & AKSI                                  */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-7 space-y-4 bg-white dark:bg-slate-900">
        {/* Dotted Leader Line Specs */}
        <div className="space-y-2 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Dimensi Standar
            </span>
            <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
            <span className="font-bold text-slate-900 dark:text-white">
              {product.dimensi}
            </span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Berat Bersih
            </span>
            <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
            <span className="font-bold text-slate-900 dark:text-white">
              {product.berat}
            </span>
          </div>

          {product.bebanStatis && (
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Kapasitas Beban Statis
              </span>
              <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {product.bebanStatis}
              </span>
            </div>
          )}

          {product.kapasitas && (
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Volume / Kapasitas
              </span>
              <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {product.kapasitas}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <a
            href={getWhatsAppProductUrl(product.title, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Klaim Penawaran Harga (RFQ Tiket)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
