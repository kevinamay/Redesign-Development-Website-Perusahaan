"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, X, Maximize2 } from "lucide-react";
import { useLanguage } from "@/data/translations";
import {
  catalogUiTranslations,
  getLocalizedProduct,
} from "@/data/catalogTranslations";
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

  // Multi-language product resolution
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
  const displaySubtitle = localized.subtitle || subtitle;
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
  const clickPrompt =
    lang === "en"
      ? "Click card to view full specifications (Lightbox) →"
      : lang === "zh"
      ? "点击卡片查看完整技术规格 (画廊弹窗) →"
      : "Klik kartu untuk membuka lembar spesifikasi (Lightbox) ➔";
  const closeLabel =
    lang === "en" ? "Close modal" : lang === "zh" ? "关闭弹窗" : "Tutup Modal";

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

  // Tutup modal dengan Escape & kunci scroll halaman belakang (termasuk iOS Safari touch)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
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
        {/* Kontainer Foto Produk Tunggal: Ukuran proporsional & tajam tanpa peregangan berlebih */}
        <div className="relative w-full h-52 sm:h-60 md:h-64 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center p-5 sm:p-7 select-none border-b border-slate-100 dark:border-slate-800/60">
          <div className="relative w-full h-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] max-h-[88%] flex items-center justify-center mx-auto">
            <Image
              src={imagePath}
              alt={cleanTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
              className={`object-contain transition-all duration-300 ${
                isPng
                  ? "drop-shadow-md group-hover:scale-105"
                  : "mix-blend-multiply dark:mix-blend-normal"
              }`}
            />
          </div>

          <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-500 group-hover:text-blue-600 shadow-xs border border-slate-200/60 dark:border-slate-700 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Informasi Produk Ringkas */}
        <div className="p-5 sm:p-8 space-y-3.5">
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
            {displaySubtitle && (
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                {displaySubtitle}
              </p>
            )}
          </div>

          {/* Spesifikasi Dimensi & Berat (Dinamis Sesuai Produk) */}
          {(displayDimensi || displayBerat) && (
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              {displayDimensi && (
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium uppercase">
                    {ui.specsLabels.dimensions} :
                  </span>
                  <span className="font-bold">{displayDimensi}</span>
                </p>
              )}
              {displayBerat && (
                <p className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium uppercase">
                    {ui.specsLabels.weight} :
                  </span>
                  <span className="font-bold">{displayBerat}</span>
                </p>
              )}
            </div>
          )}

          {/* Deskripsi Produk Dinamis */}
          {displayDescription && (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1 text-xs sm:text-sm line-clamp-3">
              <span className="font-semibold text-slate-800 dark:text-slate-200 uppercase">
                {descLabel} :{" "}
              </span>
              {displayDescription}
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overscroll-contain animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto Produk di Atas Modal (Proporsional untuk layar hp pendek maupun lebar) */}
            <div className="relative w-full h-44 sm:h-56 md:h-60 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center p-4 sm:p-6 select-none border-b border-slate-100 dark:border-slate-800/60 shrink-0">
              <div className="relative w-full h-full max-w-[300px] sm:max-w-[360px] max-h-[88%] flex items-center justify-center mx-auto">
                <Image
                  src={imagePath}
                  alt={cleanTitle}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 300px, 360px"
                  className={`object-contain ${
                    isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"
                  }`}
                />
              </div>

              {/* Close Button X: Target sentuh nyaman 44x44px standar mobile */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={closeLabel}
              >
                <X className="w-5 h-5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Konten Detail Modal (Smooth momentum scrolling untuk iOS Safari & Android) */}
            <div
              className="p-5 sm:p-8 space-y-4 sm:space-y-5 overflow-y-auto overscroll-contain min-h-0"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
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
                {displaySubtitle && (
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    {displaySubtitle}
                  </p>
                )}
              </div>

              {/* Spesifikasi Teknis */}
              {(displayDimensi || displayBerat) && (
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-slate-50/60 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {displayDimensi && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white uppercase">
                        {ui.specsLabels.dimensions} :
                      </span>
                      <span>{displayDimensi}</span>
                    </p>
                  )}
                  {displayBerat && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white uppercase">
                        {ui.specsLabels.weight} :
                      </span>
                      <span>{displayBerat}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Deskripsi Lengkap */}
              {displayDescription && (
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-bold uppercase">
                      {descLabel} :{" "}
                    </strong>
                    {displayDescription}
                  </p>
                </div>
              )}

              {/* Footer Modal: Tombol KEMBALI + WhatsApp / RFQ (Touch target >= 44px) */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-3 rounded-full border-2 border-slate-700 dark:border-slate-400 text-slate-800 dark:text-slate-100 font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-pointer active:scale-95 shadow-xs"
                >
                  <span>◀</span> {backLabel}
                </button>

                <a
                  href={getWhatsAppProductUrl(cleanTitle, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
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
