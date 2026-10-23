"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Boxes,
  Truck,
  Check,
} from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { ProductCardProps } from "@/components/ProductCard";

export default function ProductCardVariantD({
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
    <article className="bg-white dark:bg-slate-900 rounded-3xl lg:rounded-[2.5rem] shadow-xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 lg:p-10 transition-all duration-300 overflow-hidden">
      {/* 1. TOP AUTHORITATIVE HEADER (Dari Desain Original) */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 pb-5 mb-7">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUK UNGGULAN B2B</span>
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>ISO 9001:2015</span>
            </span>
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 hidden sm:block">
            CV. ASIA PLASTIK SURABAYA
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
          {title}
        </h2>

        {subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. MIDDLE SPLIT: STUDIO IMAGE & TECHNICAL SPEC CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
        {/* Left Column (col-span-7): Studio Image Showcase + Description */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 dark:from-slate-800/40 dark:via-slate-800/60 dark:to-slate-800/30 rounded-2xl sm:rounded-3xl p-6 flex items-center justify-center relative min-h-[240px] sm:min-h-[300px] lg:min-h-[350px] border border-slate-200/80 dark:border-slate-700/60 group overflow-hidden">
            {/* Ambient Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

            <div className="relative w-full h-48 sm:h-64 lg:h-76 flex items-center justify-center">
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                className={`object-contain ${
                  isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
                } drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 select-none p-2`}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 sm:mt-6">
            <p
              className={`text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-justify ${
                !isExpanded ? "line-clamp-3" : ""
              }`}
            >
              {deskripsi}
            </p>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{isExpanded ? ui.actions.showLess : ui.actions.readMore}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Right Column (col-span-5): Technical Matrix + High-Impact CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
          {/* Spec Cards Matrix (4-Grid) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Dimensi */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase mb-1">
                <Ruler className="w-3.5 h-3.5" />
                <span>{ui.specsLabels.dimensions}</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white leading-snug break-words">
                {dimensi}
              </div>
            </div>

            {/* Berat */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase mb-1">
                <Weight className="w-3.5 h-3.5" />
                <span>{ui.specsLabels.weight}</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                {berat}
              </div>
            </div>

            {/* Beban Dinamis */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase mb-1">
                <Truck className="w-3.5 h-3.5" />
                <span>Beban Dinamis</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                1.500 KG
              </div>
            </div>

            {/* Beban Statis */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase mb-1">
                <Boxes className="w-3.5 h-3.5" />
                <span>Beban Statis</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                4.000 KG
              </div>
            </div>
          </div>

          {/* Action Button Stack */}
          <div className="flex flex-col gap-3">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/25 transition-all inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-center cursor-pointer group/cta"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Minta Penawaran B2B (RFQ)</span>
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-5 rounded-2xl transition-colors inline-flex items-center justify-center text-xs text-center border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              <span>{ui.actions.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SPEC & FEATURE RIBBON (Elemen Elegan dari Varian C) */}
      <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>4-Way Forklift Entry</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Permukaan Anti-Slip</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Standar Ekspor & Racking</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>100% Recyclable HDPE</span>
        </div>
      </div>
    </article>
  );
}
