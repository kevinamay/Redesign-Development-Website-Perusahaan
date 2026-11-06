"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, X, Maximize2 } from "lucide-react";
import { footerData } from "@/data/homeData";
import { ProductVariantProps } from "./types";

export default function VariantLightboxModal({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
}: ProductVariantProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const cleanTitle = (title || "").replace(/^[\s—–-]+/, "").trim();
  const isPng = (imagePath || "").toLowerCase().endsWith(".png");

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo Asia Plastik, saya tertarik untuk meminta penawaran produk: ${productTitle}`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  // Tutup modal dengan tombol keyboard Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const displayDescription =
    deskripsi && deskripsi.trim().length > 0
      ? deskripsi
      : "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.";

  return (
    <>
      {/* ========================================================================= */}
      {/* KARTU KATALOG UTAMA (1 FOTO BERSIH, BEBAS SLIDER PAKSAAN)                */}
      {/* ========================================================================= */}
      <article
        suppressHydrationWarning
        data-no-scroll="true"
        className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl mx-auto overflow-hidden group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Kontainer Foto Produk Tunggal */}
        <div className="relative w-full h-72 sm:h-96 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center p-6 select-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imagePath}
              alt={cleanTitle}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 650px"
              className={`object-contain transition-all duration-300 ${
                isPng
                  ? "drop-shadow-md scale-100 group-hover:scale-105"
                  : "mix-blend-multiply dark:mix-blend-normal"
              }`}
            />
          </div>

          <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-500 hover:text-blue-600 shadow-xs border border-slate-200/60 dark:border-slate-700 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Informasi Produk Ringkas */}
        <div className="p-6 sm:p-8 space-y-3.5">
          <div className="flex items-center justify-between">
            <h2
              suppressHydrationWarning
              className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {cleanTitle}
            </h2>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <p className="flex items-center gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium">DIMENSI :</span>
              <span className="font-bold">{dimensi || "1200 x 1165 x 140 MM"}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium">BERAT :</span>
              <span className="font-bold">{berat || "12 KG"}</span>
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1 line-clamp-3">
              <span className="font-semibold text-slate-800 dark:text-slate-200">DESKRIPSI : </span>
              {displayDescription}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-bold">
            <span>Klik kartu untuk membuka lembar spesifikasi (Lightbox) ➔</span>
          </div>
        </div>
      </article>

      {/* ========================================================================= */}
      {/* MODAL POPUP LIGHTBOX (1 FOTO UTAMA DENGAN TOMBOL ◀ KEMBALI)               */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto Produk di Atas Modal */}
            <div className="relative w-full h-64 sm:h-80 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-center p-6 select-none">
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
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Konten Detail Modal */}
            <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
              <div className="text-center pb-1">
                <h2
                  suppressHydrationWarning
                  className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  {cleanTitle}
                </h2>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <p className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white">DIMENSI :</span>
                  <span>{dimensi || "1200 x 1165 x 140 MM"}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white">BERAT :</span>
                  <span>{berat || "12 KG"}</span>
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                <p>
                  <strong className="text-slate-900 dark:text-white font-bold">DESKRIPSI : </strong>
                  {displayDescription}
                </p>
              </div>

              {/* Footer Modal: Tombol KEMBALI + WhatsApp */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full border-2 border-slate-700 dark:border-slate-400 text-slate-800 dark:text-slate-100 font-extrabold text-xs tracking-wider uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-pointer active:scale-95 shadow-xs"
                >
                  <span>◀</span> KEMBALI
                </button>

                <a
                  href={getWhatsAppLink(cleanTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Minta Penawaran (RFQ)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
