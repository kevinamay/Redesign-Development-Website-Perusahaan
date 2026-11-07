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
  bebanStatis,
  kapasitas,
  category,
  priority = false,
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
  const isPng = (imagePath || "").toLowerCase().endsWith(".png");

  // Inferred specs for ticket data sheet
  const isPallet = cleanTitle.toUpperCase().includes("PALLET");
  const displayBebanStatis = bebanStatis || (isPallet ? "3.000 KG" : undefined);

  // Multi-language UI labels
  const descLabel =
    lang === "en" ? "DESCRIPTION" : lang === "zh" ? "产品描述" : "DESKRIPSI";
  const rfqLabel =
    lang === "en"
      ? "Request Quote (RFQ)"
      : lang === "zh"
      ? "索取报价 (RFQ)"
      : "Minta Penawaran (RFQ)";
  const rfqTicketLabel =
    lang === "en"
      ? "Claim Price Quotation (RFQ Ticket)"
      : lang === "zh"
      ? "索取报价 (RFQ 询价单)"
      : "Klaim Penawaran Harga (RFQ Tiket)";
  const staticLoadLabel =
    lang === "en"
      ? "Static Load Capacity"
      : lang === "zh"
      ? "静态负荷能力"
      : "Kapasitas Beban Statis";
  const capacityLabel =
    lang === "en" ? "Volume / Capacity" : lang === "zh" ? "容量规格" : "Volume / Kapasitas";
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

  const categoryTag =
    category ||
    (badges && badges.length > 0 ? getBadgeLabel(badges[0].label) : "PRODUK INDUSTRI");

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
      {/* KARTU KATALOG UTAMA (DESAIN 4: NOTCHED SPEC-TICKET SESUAI DESAIN FIX)     */}
      {/* ========================================================================= */}
      <article
        suppressHydrationWarning
        data-no-scroll="true"
        role="button"
        tabIndex={0}
        aria-label={`${cleanTitle} - ${clickPrompt}`}
        onKeyDown={handleKeyDownCard}
        onClick={() => setIsModalOpen(true)}
        className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 w-full overflow-hidden group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500 max-w-2xl mx-auto"
      >
        {/* ======================================================================= */}
        {/* 1. BAGIAN ATAS: TIKET HEADER & PANGGUNG FOTO PRODUK                    */}
        {/* ======================================================================= */}
        <div className="relative p-6 sm:p-8 bg-slate-50/70 dark:bg-slate-800/40 select-none">
          {/* Top Ticket Header Tab */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
              {categoryTag}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="p-1.5 rounded-lg bg-white/80 dark:bg-slate-800 text-slate-500 hover:text-blue-600 shadow-xs border border-slate-200/60 dark:border-slate-700 transition-colors cursor-pointer"
              title={clickPrompt}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Product Photo: Sharp & Centered */}
          <div className="relative w-full h-48 sm:h-56 flex items-center justify-center my-2">
            <div className="relative w-full h-full max-w-[260px] sm:max-w-[320px] max-h-[90%] flex items-center justify-center mx-auto">
              <Image
                src={imagePath}
                alt={cleanTitle}
                fill
                priority={priority}
                quality={95}
                sizes="(max-width: 640px) 260px, 320px"
                className={`object-contain transition-transform duration-500 group-hover:scale-105 ${
                  isPng ? "drop-shadow-md" : "mix-blend-multiply dark:mix-blend-normal"
                }`}
              />
            </div>
          </div>

          {/* Product Title */}
          <div className="text-center mt-2 px-2">
            <h2
              suppressHydrationWarning
              className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {cleanTitle}
            </h2>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 2. PEMISAH TIKET: PERFORASI + NOTCH CEKUNG KIRI DAN KANAN               */}
        {/* ======================================================================= */}
        <div className="relative w-full h-7 flex items-center justify-center bg-transparent">
          {/* Left Concave Cutout Notch */}
          <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-950 border-r border-slate-200/90 dark:border-slate-800 shadow-inner z-20" />

          {/* Dashed Perforation Line */}
          <div className="w-full border-t-2 border-dashed border-slate-200 dark:border-slate-800 mx-5 z-10" />

          {/* Right Concave Cutout Notch */}
          <div className="absolute -right-3.5 w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-950 border-l border-slate-200/90 dark:border-slate-800 shadow-inner z-20" />
        </div>

        {/* ======================================================================= */}
        {/* 3. BAGIAN BAWAH: DATA SHEET TIKET & AKSI                                */}
        {/* ======================================================================= */}
        <div className="p-6 sm:p-7 space-y-4 bg-white dark:bg-slate-900">
          {/* Dotted Leader Line Specs */}
          <div className="space-y-2 text-xs">
            {displayDimensi && (
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {ui.specsLabels.dimensions}
                </span>
                <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
                <span className="font-bold text-slate-900 dark:text-white">
                  {displayDimensi}
                </span>
              </div>
            )}

            {displayBerat && (
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {ui.specsLabels.weight}
                </span>
                <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
                <span className="font-bold text-slate-900 dark:text-white">
                  {displayBerat}
                </span>
              </div>
            )}

            {displayBebanStatis && (
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {staticLoadLabel}
                </span>
                <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {displayBebanStatis}
                </span>
              </div>
            )}

            {kapasitas && (
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {capacityLabel}
                </span>
                <span className="flex-1 border-b border-dotted border-slate-200 dark:border-slate-800 mx-2" />
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {kapasitas}
                </span>
              </div>
            )}
          </div>

          {/* Action Button: RFQ Tiket WhatsApp */}
          <div className="pt-2">
            <a
              href={getWhatsAppProductUrl(cleanTitle, lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{rfqTicketLabel}</span>
            </a>
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
              </div>

              {/* Spesifikasi Teknis */}
              {(displayDimensi || displayBerat || displayBebanStatis || kapasitas) && (
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
                  {displayBebanStatis && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white uppercase">
                        {staticLoadLabel} :
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {displayBebanStatis}
                      </span>
                    </p>
                  )}
                  {kapasitas && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white uppercase">
                        {capacityLabel} :
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        {kapasitas}
                      </span>
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

              {/* Footer Modal: Tombol WhatsApp / RFQ (Touch target >= 44px) */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
                <a
                  href={getWhatsAppProductUrl(cleanTitle, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all active:scale-95"
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
