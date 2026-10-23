"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  Sparkles,
  Zap,
  Building2,
  Check,
  ChevronDown,
} from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { ProductCardProps } from "@/components/ProductCard";

export default function ProductCardVariantB({
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
    <article className="bg-slate-100/70 dark:bg-slate-950 p-3 sm:p-4 rounded-3xl lg:rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 shadow-xl">
      {/* 3-TILE BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
        {/* BENTO TILE 1: VISUAL SPOTLIGHT (lg:col-span-4) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-slate-200/60 dark:border-slate-800 relative overflow-hidden group min-h-[260px] sm:min-h-[300px]">
          {/* Subtle Ambient Radial Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

          {/* Floating Pill on image */}
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
              <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>READY STOCK</span>
            </span>

            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              HDPE / PP
            </span>
          </div>

          {/* Center Pallet Image */}
          <div className="relative w-full h-44 sm:h-52 my-auto flex items-center justify-center">
            <Image
              src={imagePath}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 30vw"
              className={`object-contain ${
                isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
              } drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 select-none p-2`}
            />
          </div>

          <div className="text-center z-10">
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              Standar Pabrik Asia Plastik
            </span>
          </div>
        </div>

        {/* BENTO TILE 2: PRODUCT STORY & KEY HIGHLIGHTS (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-slate-200/60 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-wider mb-3">
              <Building2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>PRODUK B2B PILIHAN</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase mb-2">
              {title}
            </h2>

            {subtitle && (
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed font-medium">
                {subtitle}
              </p>
            )}

            {/* Bullet Highlights */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>4-Way Entry Forklift</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Permukaan Anti-Slip</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Tahan Suhu & Cuaca</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Higienis & Mudah Dicuci</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
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
              className="text-blue-600 dark:text-blue-400 font-bold text-xs mt-1.5 hover:underline inline-flex items-center gap-1 cursor-pointer"
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

        {/* BENTO TILE 3: SPECS & DIRECT ACTION HUD (lg:col-span-3) */}
        <div className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Ambient subtle glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>SPESIFIKASI UTAMA</span>
            </div>

            {/* Spec 1: Dimensi */}
            <div className="bg-slate-800/80 rounded-xl p-3 mb-2.5 border border-slate-700/60">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase mb-0.5">
                <Ruler className="w-3 h-3 text-blue-400" />
                <span>{ui.specsLabels.dimensions}</span>
              </div>
              <div className="text-sm font-extrabold text-white break-words">
                {dimensi}
              </div>
            </div>

            {/* Spec 2: Berat */}
            <div className="bg-slate-800/80 rounded-xl p-3 mb-4 border border-slate-700/60">
              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase mb-0.5">
                <Weight className="w-3 h-3 text-blue-400" />
                <span>{ui.specsLabels.weight}</span>
              </div>
              <div className="text-sm font-extrabold text-white">
                {berat}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2 z-10">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-3 rounded-xl shadow-lg shadow-emerald-600/30 transition-all inline-flex items-center justify-center gap-2 text-xs text-center cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
              <span>Chat Sales WhatsApp</span>
            </a>

            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold py-2.5 px-3 rounded-xl transition-colors inline-flex items-center justify-center text-[11px] text-center border border-slate-700 cursor-pointer"
            >
              <span>{ui.actions.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
