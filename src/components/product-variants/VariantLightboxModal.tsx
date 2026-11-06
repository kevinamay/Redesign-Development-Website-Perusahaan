"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, X, Maximize2 } from "lucide-react";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import { catalogUiTranslations } from "@/data/catalogTranslations";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { ProductVariantProps } from "./types";

export default function VariantLightboxModal({
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

  const cleanTitle = (title || "").replace(/^[\s—–-]+/, "").trim();
  const isPng = (imagePath || "").toLowerCase().endsWith(".png");

  // Multi-language labels
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
  const clickPrompt =
    lang === "en"
      ? "Click card to view full specifications (Lightbox) →"
      : lang === "zh"
      ? "点击卡片查看完整技术规格 (画廊弹窗) →"
      : "Klik kartu untuk membuka lembar spesifikasi (Lightbox) ➔";

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

  // Tutup modal dengan Escape & kunci scroll halaman belakang
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
      {/* ========================================================================= */}
      {/* KARTU KATALOG UTAMA (1 FOTO BERSIH + DUKUNGAN MULTILINGUAL ID/EN/ZH)       */}
      {/* ========================================================================= */}
      <article
        suppressHydrationWarning
        data-no-scroll="true"
        role="button"
        tabIndex={0}
        aria-label={`${cleanTitle} - ${clickPrompt}`}
        onKeyDown={handleKeyDownCard}
        onClick={() => setIsModalOpen(true)}
        className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 w-full overflow-hidden group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500"
      >
        {/* Kontainer Foto Produk Tunggal */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center p-6 select-none border-b border-slate-100 dark:border-slate-800/60">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imagePath}
              alt={cleanTitle}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-contain transition-all duration-300 ${
                isPng
                  ? "drop-shadow-md scale-100 group-hover:scale-105"
                  : "mix-blend-multiply dark:mix-blend-normal"
              }`}
            />
          </div>

          <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-500 group-hover:text-blue-600 shadow-xs border border-slate-200/60 dark:border-slate-700 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Informasi Produk Ringkas */}
        <div className="p-6 sm:p-8 space-y-3.5">
          {/* Badges / Tag Kategori */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
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

          <div>
            <h2
              suppressHydrationWarning
              className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {cleanTitle}
            </h2>
            {subtitle && (
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Spesifikasi Dimensi & Berat (Dinamis Sesuai Produk) */}
          {(dimensi || berat) && (
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              {dimensi && (
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium uppercase">
                    {ui.specsLabels.dimensions} :
                  </span>
                  <span className="font-bold">{dimensi}</span>
                </p>
              )}
              {berat && (
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium uppercase">
                    {ui.specsLabels.weight} :
                  </span>
                  <span className="font-bold">{berat}</span>
                </p>
              )}
            </div>
          )}

          {/* Deskripsi Produk Dinamis */}
          {deskripsi && (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1 text-xs sm:text-sm line-clamp-3">
              <span className="font-semibold text-slate-800 dark:text-slate-200 uppercase">
                {descLabel} :{" "}
              </span>
              {deskripsi}
            </p>
          )}

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-bold">
            <span>{clickPrompt}</span>
          </div>
        </div>
      </article>

      {/* ========================================================================= */}
      {/* MODAL POPUP LIGHTBOX (1 FOTO UTAMA + MULTILINGUAL ID/EN/ZH)              */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cleanTitle}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto Produk di Atas Modal */}
            <div className="relative w-full h-64 sm:h-80 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center p-6 select-none border-b border-slate-100 dark:border-slate-800/60">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={imagePath}
                  alt={cleanTitle}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 600px"
                  className={`object-contain ${
                    isPng ? "drop-shadow-md scale-95" : "mix-blend-multiply dark:mix-blend-normal"
                  }`}
                />
              </div>

              {/* Close Button X pojok kanan atas */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-all"
                aria-label="Tutup Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Konten Detail Modal */}
            <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
              {/* Badges Modal */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                  {badges.map((b, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase ${
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

              <div className="text-center pb-1">
                <h2
                  suppressHydrationWarning
                  className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  {cleanTitle}
                </h2>
                {subtitle && (
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Spesifikasi Teknis */}
              {(dimensi || berat) && (
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-slate-50/60 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {dimensi && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white uppercase">
                        {ui.specsLabels.dimensions} :
                      </span>
                      <span>{dimensi}</span>
                    </p>
                  )}
                  {berat && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white uppercase">
                        {ui.specsLabels.weight} :
                      </span>
                      <span>{berat}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Deskripsi Lengkap */}
              {deskripsi && (
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-bold uppercase">
                      {descLabel} :{" "}
                    </strong>
                    {deskripsi}
                  </p>
                </div>
              )}

              {/* Footer Modal: Tombol KEMBALI + WhatsApp / RFQ */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full border-2 border-slate-700 dark:border-slate-400 text-slate-800 dark:text-slate-100 font-extrabold text-xs tracking-wider uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-pointer active:scale-95 shadow-xs"
                >
                  <span>◀</span> {backLabel}
                </button>

                <a
                  href={getWhatsAppProductUrl(cleanTitle, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
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
