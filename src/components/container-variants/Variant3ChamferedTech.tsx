"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Maximize2,
  Cpu,
  Layers,
  Ruler,
  Weight,
} from "lucide-react";
import { SampleProductItem } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

interface Variant3Props {
  product: SampleProductItem;
}

/**
 * Desain 3: Industrial Chamfered Tech Box
 * Bentuk berorientasi manufaktur dengan sudut chamfer/bevel asimetris
 * (rounded-tr-[3.5rem] rounded-bl-[3.5rem]) dan aksen blueprint cetakan presisi.
 */
export default function Variant3ChamferedTech({ product }: Variant3Props) {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const isPng = product.imagePath.toLowerCase().endsWith(".png");

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-slate-900 rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl border-2 border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 w-full overflow-hidden group"
    >
      {/* Blueprint Crosshair Marks in Corners */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-300 dark:text-slate-700 pointer-events-none select-none">
        + SPEC // 01
      </div>
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 dark:text-slate-700 pointer-events-none select-none">
        ISO-9001 +
      </div>

      {/* Decorative chamfer cut accent line top right */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />

      {/* Top Header: Technical Eyebrow & Category */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {product.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {product.badges && product.badges.length > 0 && (
            <span className="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {product.badges[0].label}
            </span>
          )}
          <button
            type="button"
            className="w-7 h-7 rounded-md bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
            title="Perbesar"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Layout: 2 Columns on Tablet/Desktop */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Product Image Stage: Hexagonal chamfer frame */}
        <div className="relative w-full md:w-5/12 max-w-[300px] h-52 sm:h-60 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl bg-gradient-to-b from-slate-50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-800/20 p-5 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/60 select-none">
          <div className="relative w-full h-full max-w-[240px] max-h-[90%] flex items-center justify-center">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 240px, 300px"
              className={`object-contain transition-transform duration-500 ${
                isHovered ? "scale-108" : "scale-100"
              } ${isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"}`}
            />
          </div>
        </div>

        {/* Content & Technical Table */}
        <div className="flex-1 w-full space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {product.subtitle}
            </p>
          </div>

          {/* Technical Data Sheet Grid */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-xl p-3 border border-slate-200/70 dark:border-slate-800 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-700/50 pb-1.5">
              <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                <Ruler className="w-3.5 h-3.5 text-blue-500" /> DIMENSI (MM)
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {product.dimensi}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-700/50 pb-1.5">
              <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                <Weight className="w-3.5 h-3.5 text-blue-500" /> BERAT BERSIH
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {product.berat}
              </span>
            </div>

            {product.bebanStatis && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                  <Layers className="w-3.5 h-3.5 text-emerald-500" /> BEBAN STATIS
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {product.bebanStatis}
                </span>
              </div>
            )}
            {product.kapasitas && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                  <Cpu className="w-3.5 h-3.5 text-blue-500" /> KAPASITAS
                </span>
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {product.kapasitas}
                </span>
              </div>
            )}
          </div>

          {/* CTA Action */}
          <div className="pt-1 flex items-center justify-between gap-3">
            <a
              href={getWhatsAppProductUrl(product.title, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>REQUEST TECHNICAL RFQ</span>
            </a>

            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              PRECISION MOLD ➔
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
