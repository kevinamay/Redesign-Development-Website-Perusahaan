"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { footerData } from "@/data/homeData";
import { ProductVariantProps } from "./types";

export default function VariantValueFocus({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
  subtitle,
}: ProductVariantProps) {
  const isPng = imagePath.toLowerCase().endsWith(".png");

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo Asia Plastik, saya tertarik untuk mendiskusikan pengadaan produk: ${productTitle}`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  const keyBenefits = [
    "Material 100% Virgin HDPE murni, lentur dan tahan benturan forklift",
    "Bebas rayap, jamur, serta higienis untuk industri makanan & farmasi",
    "Memenuhi standar ekspor ISPM 15 tanpa memerlukan biaya fumigasi kayu",
    "Presisi tinggi untuk racking bertingkat & sistem konveyor otomasi ASRS",
  ];

  return (
    <article
      suppressHydrationWarning
      data-no-scroll="true"
      className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 lg:p-10"
    >
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
          Solusi Logistik & Rantai Pasok
        </span>
        <h2
          suppressHydrationWarning
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tight"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Kolom Kiri: Foto Produk (Remove BG & Ukuran Lebih Besar) + Dimensi & Berat */}
        <div className="lg:col-span-5 flex flex-col gap-3 items-center justify-center">
          <div className="relative w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center">
            <Image
              src={imagePath}
              alt={title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
              className={`object-contain ${
                isPng ? "" : "mix-blend-multiply dark:mix-blend-normal"
              } drop-shadow-xl hover:scale-105 transition-transform duration-300`}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs w-full">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Dimensi</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{dimensi}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Berat Net</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{berat}</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Poin Keunggulan Utama & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {deskripsi}
            </p>

            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Keunggulan Utama:
              </span>
              {keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 shadow-xs transition-colors text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Penjualan</span>
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
