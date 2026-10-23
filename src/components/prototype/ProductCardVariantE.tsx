"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Truck,
  Boxes,
  Zap,
} from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { ProductCardProps } from "@/components/ProductCard";

export default function ProductCardVariantE({
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
    <article className="group bg-white dark:bg-slate-900 rounded-3xl lg:rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden transition-all duration-300">
      {/* 1. TOP PANORAMIC STAGE (Studio Sinematik Bersih) */}
      <div className="relative bg-gradient-to-b from-slate-100/90 via-slate-50/70 to-white dark:from-slate-800/80 dark:via-slate-900/60 dark:to-slate-900 p-6 sm:p-10 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[350px] border-b border-slate-200/80 dark:border-slate-800 overflow-hidden">
        {/* Floating Top Badges */}
        <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>HEAVY DUTY SERIES</span>
          </span>
        </div>

        <div className="absolute top-5 right-5 z-10 hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>ISO 9001:2015 CERTIFIED</span>
          </span>
        </div>

        {/* Ambient Radial Spotlight */}
        <div className="absolute inset-x-12 bottom-6 h-12 bg-blue-500/15 dark:bg-blue-500/25 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

        {/* Central Pallet Hero Image */}
        <div className="relative w-full h-48 sm:h-64 lg:h-76 flex items-center justify-center">
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

      {/* 2. MIDDLE 4-METRIC SPEC RIBBON (Pita Spesifikasi Horizontal Mewah) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-50/90 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 divide-x divide-y sm:divide-y-0 divide-slate-200/80 dark:divide-slate-700/60">
        {/* Spec 1: Dimensi */}
        <div className="p-4 sm:p-5 text-center hover:bg-white dark:hover:bg-slate-800/90 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            <Ruler className="w-3.5 h-3.5" />
            <span>{ui.specsLabels.dimensions}</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            {dimensi}
          </div>
        </div>

        {/* Spec 2: Bobot */}
        <div className="p-4 sm:p-5 text-center hover:bg-white dark:hover:bg-slate-800/90 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            <Weight className="w-3.5 h-3.5" />
            <span>{ui.specsLabels.weight}</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            {berat}
          </div>
        </div>

        {/* Spec 3: Beban Dinamis */}
        <div className="p-4 sm:p-5 text-center hover:bg-white dark:hover:bg-slate-800/90 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            <Truck className="w-3.5 h-3.5" />
            <span>Beban Dinamis</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            1.500 KG
          </div>
        </div>

        {/* Spec 4: Beban Statis */}
        <div className="p-4 sm:p-5 text-center hover:bg-white dark:hover:bg-slate-800/90 transition-colors">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
            <Boxes className="w-3.5 h-3.5" />
            <span>Beban Statis</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white">
            4.000 KG
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BALANCED SECTION: EDITORIAL + EXECUTIVE CONVERSION HUB */}
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column (col-span-7): Product Narrative & Feature Pills */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
              ASIA PLASTIK
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              STANDAR LOGISTIK & EKSPOR
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
            {title}
          </h2>

          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed font-medium">
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

        {/* Right Column (col-span-5): High-Conversion B2B CTA Box */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-700/60 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <Zap className="w-4 h-4 fill-blue-500 text-blue-500" />
              <span>PENAWARAN RESMI</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
              Respon Cepat
            </span>
          </div>

          <a
            href={getWhatsAppLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-center cursor-pointer group/cta"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>Minta Penawaran B2B (RFQ)</span>
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-3 px-5 rounded-xl transition-colors inline-flex items-center justify-center text-xs text-center border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <span>{ui.actions.hotline}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
