"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  Snowflake,
  Warehouse,
  Plane,
} from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { ProductVariantProps } from "./types";

export default function Variant3TabbedDeck({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
  subtitle,
}: ProductVariantProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "specs" | "apps">("summary");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { lang } = useLanguage();
  const ui = catalogUiTranslations[lang] || catalogUiTranslations.id;
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
      className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 lg:p-10"
    >
      {/* 1. Header Sederhana (Bersih & Elegan) */}
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
        <h2
          suppressHydrationWarning
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight mb-1.5"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
            {subtitle}
          </p>
        )}

        {/* Tab Segmented Control Bersih */}
        <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("summary")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "summary"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Ringkasan Produk
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("specs")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "specs"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Spesifikasi Lengkap
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("apps")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "apps"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Aplikasi Industri
          </button>
        </div>
      </div>

      {/* 2. Isi Konten Berdasarkan Tab */}
      <div
        suppressHydrationWarning
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Kolom Kiri: Foto Produk (Remove BG & Ukuran Lebih Besar) */}
        <div
          suppressHydrationWarning
          className="lg:col-span-6 flex items-center justify-center py-2 sm:py-4"
        >
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
        </div>

        {/* Kolom Kanan: Sesuai Tab yang Dipilih */}
        <div
          suppressHydrationWarning
          className="lg:col-span-6 flex flex-col justify-between h-full space-y-6"
        >
          {/* TAB 1: RINGKASAN PRODUK */}
          {activeTab === "summary" && (
            <div className="space-y-5">
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
              </div>

              {/* 2 Box Spesifikasi Bersih (Dimensi & Berat) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 mb-1 text-blue-600 dark:text-blue-400">
                    <Ruler className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                      Dimensi
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-white break-words">
                    {dimensi}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 mb-1 text-blue-600 dark:text-blue-400">
                    <Weight className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                      Berat
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-white">
                    {berat}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPESIFIKASI LENGKAP */}
          {activeTab === "specs" && (
            <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-slate-50/70 dark:bg-slate-800/30">
                    <td className="py-2.5 px-4 font-semibold text-slate-500 dark:text-slate-400">Material</td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">100% Virgin HDPE (Food Grade)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-500 dark:text-slate-400">Kapasitas Beban Statis</td>
                    <td className="py-2.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">Hingga 4.000 KG</td>
                  </tr>
                  <tr className="bg-slate-50/70 dark:bg-slate-800/30">
                    <td className="py-2.5 px-4 font-semibold text-slate-500 dark:text-slate-400">Kapasitas Beban Dinamis</td>
                    <td className="py-2.5 px-4 font-bold text-blue-600 dark:text-blue-400">Hingga 1.500 KG</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-500 dark:text-slate-400">Kapasitas Racking</td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">Hingga 1.000 KG</td>
                  </tr>
                  <tr className="bg-slate-50/70 dark:bg-slate-800/30">
                    <td className="py-2.5 px-4 font-semibold text-slate-500 dark:text-slate-400">Akses Masuk Forklift</td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">4-Way (Forklift & Hand Pallet)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-500 dark:text-slate-400">Standar Ekspor</td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">Bebas ISPM 15 (Tanpa Fumigasi)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: APLIKASI INDUSTRI */}
          {activeTab === "apps" && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <Snowflake className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Cold Storage & Industri Pangan</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Tahan suhu beku hingga -20°C tanpa getas, higienis dan mudah dibersihkan.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <Warehouse className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Pergudangan & Racking Otomasi</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Presisi tinggi untuk rak susun vertikal dan sistem konveyor otomatis ASRS.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <Plane className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Ekspor Petikemas Global</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Bebas karantina dan bebas sertifikat fumigasi kayu ISPM 15 antar negara.
                  </p>
                </div>
              </div>
            </div>
          )}

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
              <span>Hotline: +62 21 555-8901</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
