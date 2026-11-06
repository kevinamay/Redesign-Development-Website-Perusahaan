"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { footerData } from "@/data/homeData";
import { ProductVariantProps } from "./types";

export default function VariantSoftMinimal({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
  subtitle,
}: ProductVariantProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const isPng = imagePath.toLowerCase().endsWith(".png");

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo Asia Plastik, saya ingin menanyakan produk: ${productTitle}`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <article
      suppressHydrationWarning
      data-no-scroll="true"
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all p-7 sm:p-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Kolom Kiri: Panggung Foto Sederhana (Remove BG & Ukuran Lebih Besar) */}
        <div className="lg:col-span-5 flex items-center justify-center py-2">
          <div className="relative w-full h-64 sm:h-80 md:h-[350px] lg:h-[390px] flex items-center justify-center">
            <Image
              src={imagePath}
              alt={title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 45vw"
              className={`object-contain ${
                isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
              } drop-shadow-xl hover:scale-105 transition-transform duration-500`}
            />
          </div>
        </div>

        {/* Kolom Kanan: Tipografi & Info Rapi */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
              CV. Asia Plastik • Heavy Duty
            </span>

            <h2
              suppressHydrationWarning
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 mb-4 leading-relaxed">
                {subtitle}
              </p>
            )}

            <p
              className={`text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed ${
                !isExpanded ? "line-clamp-3" : ""
              }`}
            >
              {deskripsi}
            </p>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 dark:text-blue-400 font-semibold text-xs mt-1.5 hover:underline cursor-pointer block"
            >
              {isExpanded ? "Sembunyikan" : "Baca selengkapnya"}
            </button>

            {/* Spec Cards Sederhana */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                  Ukuran Fisik
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {dimensi}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                  Berat Bersih
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {berat}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 shadow-xs transition-colors text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Tim Penjualan</span>
            </a>

            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold text-center transition-colors"
            >
              Hotline Pabrik
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
