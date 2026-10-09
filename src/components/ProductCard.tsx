"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Ruler, Weight, PhoneCall } from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";

export interface ProductBadge {
  label: string;
  icon?: React.ReactNode;
  variant?: "blue" | "emerald";
}

export interface ProductCardProps {
  title: string;
  dimensi: string;
  berat: string;
  deskripsi: string;
  imagePath: string;
  subtitle?: string;
  badges?: ProductBadge[];
}

export default function ProductCard({
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

  const getBadgeLabel = (rawLabel: string) => {
    const lower = rawLabel.toLowerCase();
    if (lower.includes("flagship") || lower.includes("b2b")) {
      return ui.badges.flagship;
    }
    if (
      lower.includes("pabrik") ||
      lower.includes("factory") ||
      lower.includes("resmi") ||
      lower.includes("official")
    ) {
      return ui.badges.factoryOfficial;
    }
    return rawLabel;
  };

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(ui.whatsappMessage(productTitle));
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <article className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 p-5 sm:p-7 lg:p-10 transition-all">
      {/* 1. TOP SECTION (FULL WIDTH) */}
      <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4 sm:pb-6 mb-6 sm:mb-8">
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
            {badges.map((b, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase ${
                  b.variant === "emerald"
                    ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400"
                    : "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400"
                }`}
              >
                {b.icon}
                <span>{getBadgeLabel(b.label)}</span>
              </span>
            ))}
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 sm:mb-4 lg:mb-6 uppercase tracking-tight break-words">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm lg:text-base -mt-1 sm:-mt-2 mb-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. MIDDLE SECTION (SPLIT GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left Column (lg:col-span-7): Product Image Gallery & Description */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Top: Product Image Floating Container */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 aspect-auto flex items-center justify-center relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] border border-slate-100 dark:border-slate-800/80 group overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

            <div className="relative w-full h-48 sm:h-64 lg:h-80 flex items-center justify-center">
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                className={`object-contain ${
                  isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
                } drop-shadow-2xl hover:scale-105 transition-transform duration-500 select-none p-2`}
              />
            </div>
          </div>

          {/* Bottom: Description Directly Below Image */}
          <div className="mt-4 sm:mt-6">
            <p
              className={`text-justify text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base ${
                !isExpanded ? "line-clamp-3" : ""
              }`}
            >
              {deskripsi}
            </p>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm mt-2 hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              {isExpanded ? ui.actions.showLess : ui.actions.readMore}
            </button>
          </div>
        </div>

        {/* Right Column (lg:col-span-5): Specs & Action Buttons */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
          {/* 2-Column Grid for Specs */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {/* Dimensi */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 text-blue-600 dark:text-blue-400">
                <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  {ui.specsLabels.dimensions}
                </span>
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-900 dark:text-white break-words leading-snug">
                {dimensi}
              </div>
            </div>

            {/* Berat */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 text-blue-600 dark:text-blue-400">
                <Weight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  {ui.specsLabels.weight}
                </span>
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {berat}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center bg-blue-600 text-white px-4 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer text-center"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>{ui.actions.contactSales}</span>
            </a>

            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2 font-semibold text-xs sm:text-sm cursor-pointer text-center"
            >
              <span>{ui.actions.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
