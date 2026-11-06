"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, X, FileText } from "lucide-react";
import { useLanguage } from "@/data/translations";
import {
  catalogUiTranslations,
  getLocalizedProduct,
} from "@/data/catalogTranslations";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { ProductVariantProps } from "./types";

/**
 * 9-B: Technical Spec-Sheet Modal (Engineering & Procurement Standard)
 * Menampilkan lembar spesifikasi teknis rapi terstruktur (tabel data pabrik).
 * Menggunakan 1 foto produk beresolusi tinggi dengan dukungan i18n penuh.
 */
export default function VariantModalSpecTable({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
  subtitle,
  badges,
}: ProductVariantProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { lang } = useLanguage();
  const ui = catalogUiTranslations[lang] || catalogUiTranslations.id;

  const localized = getLocalizedProduct(
    {
      title: title || "",
      dimensi: dimensi || "",
      berat: berat || "",
      deskripsi: deskripsi || "",
      imagePath: imagePath || "",
      subtitle,
    },
    lang
  );

  const cleanTitle = (localized.title || title || "").replace(/^[\s—–-]+/, "").trim();
  const displayDimensi = localized.dimensi || dimensi;
  const displayBerat = localized.berat || berat;
  const displayDescription = localized.deskripsi || deskripsi;
  const isPng = (imagePath || "").toLowerCase().endsWith(".png");

  // Multi-language UI labels
  const descLabel =
    lang === "en" ? "DESCRIPTION" : lang === "zh" ? "产品描述" : "DESKRIPSI";
  const rfqLabel =
    lang === "en"
      ? "Request Quote (RFQ)"
      : lang === "zh"
      ? "索取报价 (RFQ)"
      : "Minta Penawaran (RFQ)";
  const backLabel =
    lang === "en" ? "BACK" : lang === "zh" ? "返回" : "KEMBALI";
  const specSheetLabel =
    lang === "en"
      ? "Data Sheet"
      : lang === "zh"
      ? "技术数据表"
      : "Lembar Data";
  const openSpecLabel =
    lang === "en"
      ? "Open Technical Spec Sheet ➔"
      : lang === "zh"
      ? "查看完整技术规格 ➔"
      : "Buka Lembar Spesifikasi Lengkap ➔";
  const materialLabel =
    lang === "en"
      ? "Plastic Material"
      : lang === "zh"
      ? "塑料材质"
      : "Material Plastik";
  const handlingLabel =
    lang === "en"
      ? "Forklift Entry"
      : lang === "zh"
      ? "进叉方向"
      : "Handling Masuk";
  const materialVal =
    lang === "en"
      ? "Industrial HDPE"
      : lang === "zh"
      ? "工业级高密度聚乙烯 (HDPE)"
      : "HDPE Industri";
  const handlingVal =
    lang === "en"
      ? "Logistics Standard"
      : lang === "zh"
      ? "标准物流进叉"
      : "Standar Logistik";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const handleKeyDownCard = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {/* 1. KARTU KATALOG UTAMA (1 FOTO TUNGGAL) */}
      <article
        suppressHydrationWarning
        data-no-scroll="true"
        role="button"
        tabIndex={0}
        aria-label={`${cleanTitle} - ${openSpecLabel}`}
        onKeyDown={handleKeyDownCard}
        onClick={() => setIsModalOpen(true)}
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 w-full overflow-hidden group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500"
      >
        <div className="relative w-full h-64 sm:h-80 bg-slate-50/80 dark:bg-slate-800/40 flex items-center justify-center p-6 select-none border-b border-slate-100 dark:border-slate-800">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imagePath}
              alt={cleanTitle}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 550px"
              className={`object-contain transition-transform duration-300 ${
                isPng ? "drop-shadow-md group-hover:scale-105" : "mix-blend-multiply dark:mix-blend-normal"
              }`}
            />
          </div>
        </div>

        {/* Deskripsi Singkat Card */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2
              suppressHydrationWarning
              className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {cleanTitle}
            </h2>
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-blue-500" /> {specSheetLabel}
            </span>
          </div>

          {(displayDimensi || displayBerat) && (
            <div className="grid grid-cols-2 gap-2 text-xs">
              {displayDimensi && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-medium block">
                    {ui.specsLabels.dimensions}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {displayDimensi}
                  </span>
                </div>
              )}
              {displayBerat && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-medium block">
                    {ui.specsLabels.weight}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {displayBerat}
                  </span>
                </div>
              )}
            </div>
          )}

          {displayDescription && (
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300 uppercase">
                {descLabel} :{" "}
              </span>
              {displayDescription}
            </p>
          )}

          <div className="pt-2 text-right">
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
              {openSpecLabel}
            </span>
          </div>
        </div>
      </article>

      {/* 2. MODAL TABEL SPESIFIKASI TEKNIS LENGKAP (1 FOTO TUNGGAL) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto Modal */}
            <div className="relative w-full h-56 sm:h-72 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-center p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 select-none shrink-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={imagePath}
                  alt={cleanTitle}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 500px"
                  className={`object-contain ${
                    isPng ? "drop-shadow-md scale-95" : "mix-blend-multiply dark:mix-blend-normal"
                  }`}
                />
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                aria-label="Tutup"
              >
                <X className="w-5 h-5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Isi Detail */}
            <div className="p-5 sm:p-7 space-y-4 overflow-y-auto min-h-0">
              <div className="text-center pb-1">
                <h2
                  suppressHydrationWarning
                  className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  {cleanTitle}
                </h2>
              </div>

              {/* Tabel Lembar Spesifikasi Teknis */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">
                      {ui.specsLabels.dimensions}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {displayDimensi}
                    </span>
                  </div>
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">
                      {ui.specsLabels.weight}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {displayBerat}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">
                      {materialLabel}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {materialVal}
                    </span>
                  </div>
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">
                      {handlingLabel}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {handlingVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Paragraf Deskripsi */}
              {displayDescription && (
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-bold uppercase">
                      {descLabel} :{" "}
                    </strong>
                    {displayDescription}
                  </p>
                </div>
              )}

              {/* Footer Tombol KEMBALI + RFQ */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full border border-slate-700 dark:border-slate-400 text-slate-800 dark:text-slate-100 font-bold text-xs tracking-wider uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-pointer active:scale-95"
                >
                  <span>◀</span> {backLabel}
                </button>

                <a
                  href={getWhatsAppProductUrl(cleanTitle, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs hover:shadow transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  {rfqLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
