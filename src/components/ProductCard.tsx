"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Ruler, Weight, PhoneCall } from "lucide-react";
import { footerData } from "@/data/homeData";

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
  const isPng = imagePath.toLowerCase().endsWith(".png");

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo CV. Asia Plastik, saya tertarik dengan produk ${productTitle} dari katalog website dan ingin menanyakan penawaran harga serta spesifikasi.`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <article className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8 lg:p-10 transition-all">
      {/* 1. TOP SECTION (FULL WIDTH) */}
      <div className="border-b border-slate-100 dark:border-slate-800/80 pb-6 mb-8">
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {badges.map((b, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                  b.variant === "emerald"
                    ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400"
                    : "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400"
                }`}
              >
                {b.icon}
                <span>{b.label}</span>
              </span>
            ))}
          </div>
        )}

        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base -mt-4 mb-2">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. MIDDLE SECTION (SPLIT GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column (lg:col-span-7): Product Image Gallery & Description */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Top: Product Image Floating Container */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 aspect-auto flex items-center justify-center relative min-h-[300px] sm:min-h-[340px] border border-slate-100 dark:border-slate-800/80 group overflow-hidden">
            {/* Ambient Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

            <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={`object-contain ${
                  isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
                } drop-shadow-2xl hover:scale-105 transition-transform duration-500 select-none p-2`}
              />
            </div>
          </div>

          {/* Bottom: Description Directly Below Image */}
          <div className="mt-6">
            <p
              className={`text-justify text-slate-600 dark:text-slate-300 leading-relaxed text-base ${
                !isExpanded ? "line-clamp-3" : ""
              }`}
            >
              {deskripsi}
            </p>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-2 hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              {isExpanded ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
            </button>
          </div>
        </div>

        {/* Right Column (lg:col-span-5): Specs & Action Buttons */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 h-fit flex flex-col gap-6">
            {/* 2-Column Grid for Specs */}
            <div className="grid grid-cols-2 gap-4">
              {/* Dimensi */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                  <Ruler className="w-4 h-4 shrink-0" />
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Dimensi
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-words">
                  {dimensi}
                </div>
              </div>

              {/* Berat */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                  <Weight className="w-4 h-4 shrink-0" />
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Berat
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {berat}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppLink(title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center bg-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer text-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hubungi Penjualan</span>
              </a>

              <a
                href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm cursor-pointer text-center"
              >
                <span>Hotline: {footerData.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
