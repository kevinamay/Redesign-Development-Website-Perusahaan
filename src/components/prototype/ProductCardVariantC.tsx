"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Layers,
  ArrowRight,
} from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { ProductCardProps } from "@/components/ProductCard";

export default function ProductCardVariantC({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
  subtitle,
  badges,
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { lang } = useLanguage();
  const ui = catalogUiTranslations[lang] || catalogUiTranslations.id;
  const isPng = imagePath.toLowerCase().endsWith(".png");

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(ui.whatsappMessage(productTitle));
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <article className="bg-white dark:bg-slate-900 rounded-3xl lg:rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300">
      {/* 1. TOP PANORAMIC STAGE */}
      <div className="relative bg-gradient-to-b from-slate-100/90 via-slate-50 to-white dark:from-slate-800/60 dark:via-slate-900/40 dark:to-slate-900 p-6 sm:p-10 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[340px] border-b border-slate-100 dark:border-slate-800/80 group">
        {/* Floating Glass Badges (Top Left & Top Right) */}
        <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HEAVY DUTY SERIES</span>
          </span>
        </div>

        <div className="absolute top-5 right-5 z-10 hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>STANDAR EKSPOR</span>
          </span>
        </div>

        {/* Ambient Radial Spotlight */}
        <div className="absolute inset-x-12 bottom-6 h-12 bg-blue-500/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

        {/* Central Pallet Hero Image */}
        <div className="relative w-full h-48 sm:h-64 lg:h-72 flex items-center justify-center">
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 65vw"
            className={`object-contain ${
              isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
            } drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 select-none p-2`}
          />
        </div>
      </div>

      {/* 2. MIDDLE HORIZONTAL SPEC RIBBON */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 divide-x divide-y sm:divide-y-0 divide-slate-200/80 dark:divide-slate-700/60">
        {/* Spec 1: Dimensi */}
        <div className="p-4 sm:p-5 text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            <Ruler className="w-3.5 h-3.5 text-blue-500" />
            <span>{ui.specsLabels.dimensions}</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            {dimensi}
          </div>
        </div>

        {/* Spec 2: Bobot */}
        <div className="p-4 sm:p-5 text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            <Weight className="w-3.5 h-3.5 text-blue-500" />
            <span>{ui.specsLabels.weight}</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            {berat}
          </div>
        </div>

        {/* Spec 3: Bahan Baku */}
        <div className="p-4 sm:p-5 text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Bahan Baku</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            HDPE / PP Murni
          </div>
        </div>

        {/* Spec 4: Kategori */}
        <div className="p-4 sm:p-5 text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Kategori Beban</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            Racking & Ekspor
          </div>
        </div>
      </div>

      {/* 3. BOTTOM EDITORIAL & ACTIONS */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Title, Subtitle & Description */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 font-medium">
              {subtitle}
            </p>
          )}

          <p
            className={`text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed ${
              !isExpanded ? "line-clamp-2" : ""
            }`}
          >
            {deskripsi}
          </p>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 dark:text-blue-400 font-bold text-xs mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{isExpanded ? ui.actions.showLess : ui.actions.readMore}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 min-w-[220px]">
          <a
            href={getWhatsAppLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/25 transition-all inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-center cursor-pointer group/cta"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>Hubungi Penjualan</span>
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-5 rounded-2xl transition-colors inline-flex items-center justify-center text-xs text-center border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <span>{ui.actions.hotline}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
