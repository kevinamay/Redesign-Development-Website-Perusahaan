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
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { ProductCardProps } from "@/components/ProductCard";

export default function ProductCardVariantA({
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
    <article className="group bg-white dark:bg-slate-900 rounded-3xl lg:rounded-[2.5rem] shadow-xl hover:shadow-2xl border border-slate-200/80 dark:border-slate-800 transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT: STUDIO HERO SHOWCASE (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100/60 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800">
          {/* Studio Top Floating Badges */}
          <div className="flex items-center justify-between gap-2 z-10 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <Sparkles className="w-3 h-3" />
              <span>OFFICIAL CATALOG</span>
            </span>

            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200/60 dark:border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>ISO 9001:2015</span>
            </span>
          </div>

          {/* Studio Center Floating Product Image */}
          <div className="relative w-full aspect-square max-h-[300px] sm:max-h-[340px] flex items-center justify-center my-auto py-4">
            {/* Subtle Studio Podium Glow */}
            <div className="absolute inset-x-8 bottom-4 h-10 bg-blue-600/15 dark:bg-blue-500/20 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className={`object-contain ${
                  isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
                } drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 select-none p-3`}
              />
            </div>
          </div>

          {/* Studio Bottom Feature Micro-Chips */}
          <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-semibold z-10">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Material Premium</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>B2B Heavy Duty</span>
            </span>
          </div>
        </div>

        {/* RIGHT: SPECIFICATION MATRIX & RFQ ACTION (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Category / Sub-brand kicker */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                ASIA PLASTIK MANUFAKTUR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                LOGISTIK & INDUSTRI
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                {subtitle}
              </p>
            )}

            {/* TECHNICAL MATRIX (4 GRID TILES) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6">
              {/* Tile 1: Dimensi */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Ruler className="w-4 h-4 shrink-0" />
                  <span>{ui.specsLabels.dimensions}</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {dimensi}
                </div>
              </div>

              {/* Tile 2: Bobot */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Weight className="w-4 h-4 shrink-0" />
                  <span>{ui.specsLabels.weight}</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {berat}
                </div>
              </div>

              {/* Tile 3: Material Standard */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>Bahan Baku</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  100% Virgin HDPE / PP
                </div>
              </div>

              {/* Tile 4: Kompatibilitas */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Standar Mutu</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  Heavy Duty & Racking
                </div>
              </div>
            </div>

            {/* Description Accordion */}
            <div className="mb-6">
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
          </div>

          {/* DUAL ACTION BUTTONS (HIGH IMPACT) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all inline-flex items-center justify-center gap-2 text-sm text-center cursor-pointer group/btn"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Minta Penawaran B2B (RFQ)</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-5 py-3.5 rounded-2xl transition-colors inline-flex items-center justify-center gap-2 text-sm text-center cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <span>{ui.actions.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
