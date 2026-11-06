"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PhoneCall, X, FileText } from "lucide-react";
import { footerData } from "@/data/homeData";
import { ProductVariantProps } from "./types";

/**
 * 9-B: Technical Spec-Sheet Modal (Engineering & Procurement Standard)
 * Menampilkan lembar spesifikasi teknis rapi terstruktur (tabel data pabrik).
 * Sangat disukai oleh tim purchasing & procurement logistik industri.
 */
export default function VariantModalSpecTable({
  title,
  dimensi,
  berat,
  deskripsi,
  imagePath,
}: ProductVariantProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const galleryImages = [
    imagePath,
    "/images/product/Pallet/pallet-product-detail.jpg",
    "/images/product/Pallet/pallet-studio-crop.jpg",
    "/images/product/Pallet/pallet.jpg",
  ];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo Asia Plastik, saya ingin menanyakan lembar spesifikasi & RFQ produk: ${productTitle}`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const currentSrc = galleryImages[activeImageIdx] || imagePath;
  const isPng = currentSrc.toLowerCase().endsWith(".png");

  const fullDescription =
    deskripsi && deskripsi.length > 80
      ? deskripsi
      : "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.";

  return (
    <>
      {/* 1. KARTU KATALOG UTAMA */}
      <article
        suppressHydrationWarning
        data-no-scroll="true"
        onClick={() => setIsModalOpen(true)}
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 max-w-xl mx-auto overflow-hidden group cursor-pointer"
      >
        <div className="relative w-full h-64 sm:h-80 bg-slate-50/80 dark:bg-slate-800/40 flex items-center justify-center p-6 select-none border-b border-slate-100 dark:border-slate-800">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={currentSrc}
              alt={title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 550px"
              className={`object-contain transition-transform duration-300 ${
                isPng ? "drop-shadow-md group-hover:scale-105" : "mix-blend-multiply dark:mix-blend-normal"
              }`}
            />
          </div>

          {/* Slider Arrows */}
          <button
            type="button"
            onClick={handlePrevImage}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200/60 dark:border-slate-700 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextImage}
            aria-label="Foto Berikutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200/60 dark:border-slate-700 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Deskripsi Singkat Card */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2
              suppressHydrationWarning
              className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {title}
            </h2>
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-blue-500" /> Lembar Data
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-medium block">Dimensi</span>
              <span className="font-bold text-slate-900 dark:text-white">{dimensi || "1200 x 1165 x 140 MM"}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-medium block">Berat Bersih</span>
              <span className="font-bold text-slate-900 dark:text-white">{berat || "12 KG"}</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">DESKRIPSI :</span> Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern...
          </p>

          <div className="pt-2 text-right">
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
              Buka Lembar Spesifikasi Lengkap ➔
            </span>
          </div>
        </div>
      </article>

      {/* 2. MODAL TABEL SPESIFIKASI TEKNIS LENGKAP */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in-50 duration-150"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto Slider Modal */}
            <div className="relative w-full h-60 sm:h-72 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 select-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentSrc}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 500px"
                  className={`object-contain ${
                    isPng ? "drop-shadow-md scale-95" : "mix-blend-multiply dark:mix-blend-normal"
                  }`}
                />
              </div>

              {/* Slider Controls */}
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Foto Sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Foto Berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Isi Detail */}
            <div className="p-6 sm:p-7 space-y-4 overflow-y-auto">
              <div className="text-center pb-1">
                <h2
                  suppressHydrationWarning
                  className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight"
                >
                  {title}
                </h2>
              </div>

              {/* Tabel Lembar Spesifikasi Teknis */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Dimensi Fisik</span>
                    <span className="font-bold text-slate-900 dark:text-white">{dimensi || "1200 X 1165 X 140 MM"}</span>
                  </div>
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Berat Bersih</span>
                    <span className="font-bold text-slate-900 dark:text-white">{berat || "12 KG"}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Material Plastik</span>
                    <span className="font-bold text-slate-900 dark:text-white">HDPE Virgin / Recycled</span>
                  </div>
                  <div className="p-2.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Handling Masuk</span>
                    <span className="font-bold text-slate-900 dark:text-white">4 Arah (Forklift & Hand Pallet)</span>
                  </div>
                </div>
              </div>

              {/* Paragraf Deskripsi Sesuai Gambar 2 */}
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                <p>
                  <strong className="text-slate-900 dark:text-white font-bold">DESKRIPSI : </strong>
                  {fullDescription}
                </p>
              </div>

              {/* Footer Tombol KEMBALI + RFQ */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full border border-slate-700 dark:border-slate-400 text-slate-800 dark:text-slate-100 font-bold text-xs tracking-wider uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-pointer active:scale-95"
                >
                  <span>◀</span> KEMBALI
                </button>

                <a
                  href={getWhatsAppLink(title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs hover:shadow transition-all"
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

