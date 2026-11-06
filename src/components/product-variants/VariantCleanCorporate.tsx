"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, PhoneCall } from "lucide-react";
import { footerData } from "@/data/homeData";
import { ProductVariantProps } from "./types";

export default function VariantCleanCorporate({
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
      `Halo Asia Plastik, saya ingin menanyakan penawaran harga untuk produk: ${productTitle}`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <article
      suppressHydrationWarning
      data-no-scroll="true"
      className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 lg:p-10"
    >
      {/* 1. Header Sederhana Perusahaan */}
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Pallet Industri Standar
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Kategori: Logistik & Pergudangan
          </span>
        </div>

        <h2
          suppressHydrationWarning
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-2"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. Grid Sederhana & Seimbang */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Kolom Kiri: Foto Produk (Remove BG & Ukuran Lebih Besar) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center py-2 sm:py-4">
          <div className="relative w-full h-64 sm:h-80 md:h-[350px] lg:h-[390px] flex items-center justify-center">
            <Image
              src={imagePath}
              alt={title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className={`object-contain ${
                isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
              } drop-shadow-xl hover:scale-105 transition-transform duration-300`}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 w-full px-2">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Bahan 100% Virgin HDPE
            </span>
            <span className="font-medium">Standar Ekspor ISPM 15</span>
          </div>
        </div>

        {/* Kolom Kanan: Deskripsi, Spesifikasi, & Kontak */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
          <div>
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
              {isExpanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya"}
            </button>

            {/* Spesifikasi Grid 2x2 yang Rapi */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                  Dimensi (P x L x T)
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {dimensi}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                  Berat Bersih
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {berat}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                  Kapasitas Beban Statis
                </span>
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                  Hingga 4.000 KG
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                  Kapasitas Beban Dinamis
                </span>
                <span className="text-sm font-bold text-blue-700 dark:text-blue-400">
                  Hingga 1.500 KG
                </span>
              </div>
            </div>
          </div>

          {/* Tombol Aksi Bersih */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-colors text-center cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Penjualan</span>
            </a>

            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-center transition-colors cursor-pointer"
            >
              Hotline: 021-555-8901
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
