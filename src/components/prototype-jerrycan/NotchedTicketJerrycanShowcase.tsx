"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  Maximize2,
  X,
  CheckCircle2,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
  Info,
  Sliders,
  Package,
  FileText
} from "lucide-react";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/data/translations";

export type FramingTreatment = "square-fit" | "tonal-bleed" | "borderless-clean" | "dark-ticket";

export interface NotchedTicketJerrycanShowcaseProps {
  isStandalone?: boolean;
}

export default function NotchedTicketJerrycanShowcase({
  isStandalone = true,
}: NotchedTicketJerrycanShowcaseProps = {}) {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [treatment, setTreatment] = useState<FramingTreatment>("square-fit");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const product = {
    title: "JERIGEN 20 LITER",
    category: "BLOW MOULDING CONTAINER",
    dimensi: "288 X 225 X 398,5 MM",
    berat: "870 GR",
    bebanStatis: "4 Susun (Static Load)",
    kapasitas: "20 LITER",
    tutup: "Ø 55 mm DIN 61 Tamper-Evident",
    material: "100% Virgin High-Density Polyethylene (HDPE)",
    unCert: "UN Approved Packaging Group II & III",
    foodGrade: "Food Grade FDA & BPOM Approved (Bebas BPA)",
    pallet: "64 Jerigen per Pallet (1200 x 1000 mm)",
    moq: "500 Pcs",
    leadTime: "3 - 7 Hari Kerja",
    deskripsi:
      "Jerigen Plastik 20 Liter dari CV. Asia Plastik diproduksi menggunakan mesin Continuous Extrusion Blow Moulding presisi tinggi dengan dimensi standar 288 x 225 x 398,5 mm dan berat bersih 870 gr. Dirancang dengan tutup segel berulir anti-bocor serta daya tahan benturan prima untuk kebutuhan industri kimia, pelumas otomotif, maupun produk pangan cair.",
    imagePath: "/images/products/jerigen-hdpe-sample.jpg",
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  // Stable class names during SSR & hydration
  const isDark = mounted && treatment === "dark-ticket";
  const isTonal = mounted && treatment === "tonal-bleed";

  return (
    <div
      suppressHydrationWarning
      className={
        isStandalone
          ? "min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors py-8 sm:py-12"
          : "w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-900 dark:text-slate-100"
      }
    >
      <div className="max-w-5xl mx-auto space-y-8" suppressHydrationWarning>
        {/* Top Control Bar: Context & Treatment Selector */}
        <div
          suppressHydrationWarning
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            {isStandalone && (
              <Link
                href="/prototype"
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                ← Kembali ke Lab
              </Link>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Notched Spec-Ticket (Format Gambar 1)
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-300 dark:border-emerald-800">
                  Bilah Kanan & Kiri Dihapus (Pas 1:1)
                </span>
              </div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Tampilan Foto Pas Persegi (Tanpa Ruang Sisa Kanan-Kiri):
              </h2>
            </div>
          </div>

          {/* Treatment Options Selector */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setTreatment("square-fit")}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                treatment === "square-fit"
                  ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              1. Pas Persegi 1:1 (Rekomendasi)
            </button>
            <button
              type="button"
              onClick={() => setTreatment("borderless-clean")}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                treatment === "borderless-clean"
                  ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              2. Borderless Natural
            </button>
            <button
              type="button"
              onClick={() => setTreatment("tonal-bleed")}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                treatment === "tonal-bleed"
                  ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              3. Tonal Bleed
            </button>
            <button
              type="button"
              onClick={() => setTreatment("dark-ticket")}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                treatment === "dark-ticket"
                  ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              4. Dark Mode Ticket
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HEADER SECTION (PERSIS SESUAI GAMBAR 1: KATALOG PRODUK > PALLET INDUSTRI) */}
        {/* ========================================================================= */}
        <div className="mb-6 sm:mb-8" suppressHydrationWarning>
          <div className="text-[11px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 sm:mb-2">
            KATALOG PRODUK &gt; BLOW MOULDING CONTAINER
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-1.5 sm:mb-2 tracking-tight">
            JERIGEN INDUSTRI HDPE
          </h1>

          <div className="border-t border-slate-200 dark:border-slate-800 mt-4 sm:mt-6 pt-2" />
        </div>

        {/* ========================================================================= */}
        {/* KARTU KATALOG UTAMA (DESAIN 4: NOTCHED SPEC-TICKET SESUAI GAMBAR 1)       */}
        {/* ========================================================================= */}
        <div className="max-w-2xl mx-auto" suppressHydrationWarning>
          <article
            suppressHydrationWarning
            role="region"
            aria-label={product.title}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
            className={`relative rounded-3xl border shadow-lg hover:shadow-2xl transition-all duration-300 w-full overflow-hidden group cursor-pointer ${
              isDark
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white"
            }`}
          >
            {/* ======================================================================= */}
            {/* 1. BAGIAN ATAS: PANGGUNG FOTO PRODUK                                    */}
            {/* ======================================================================= */}
            <div
              suppressHydrationWarning
              className={`relative p-6 sm:p-8 select-none transition-colors ${
                isTonal
                  ? "bg-gradient-to-b from-[#9ba0a6] via-[#8d9298] to-[#80858b] text-white"
                  : isDark
                  ? "bg-slate-950/60"
                  : "bg-slate-50/70 dark:bg-slate-800/40"
              }`}
            >
              {/* Top Ticket Header Tab */}
              <div className="flex items-center justify-between gap-3 mb-4" suppressHydrationWarning>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                  {product.category}
                </span>
                <span
                  className="p-1.5 rounded-lg bg-white/80 dark:bg-slate-800 text-slate-400 group-hover:text-blue-600 shadow-2xs transition-colors"
                  aria-hidden="true"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Product Photo Stage: Exactly matched to 1:1 square, NO left/right bars! */}
              <div className="relative w-full flex items-center justify-center my-2" suppressHydrationWarning>
                {/* Treatment 1: Square Fit 1:1 - Photo fills the exact square container */}
                {treatment === "square-fit" && (
                  <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 aspect-square rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700 shadow-md">
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      fill
                      quality={90}
                      priority
                      sizes="(max-width: 640px) 224px, 256px"
                      className={`object-cover transition-transform duration-500 ${
                        isHovered ? "scale-106" : "scale-100"
                      }`}
                    />
                  </div>
                )}

                {/* Treatment 2: Borderless Clean - Natural photo with soft drop shadow */}
                {treatment === "borderless-clean" && (
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      fill
                      quality={90}
                      priority
                      sizes="(max-width: 640px) 224px, 256px"
                      className={`object-cover transition-transform duration-500 ${
                        isHovered ? "scale-106" : "scale-100"
                      }`}
                    />
                  </div>
                )}

                {/* Treatment 3: Tonal Bleed - Matches the background gradient */}
                {treatment === "tonal-bleed" && (
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      fill
                      quality={90}
                      priority
                      sizes="(max-width: 640px) 224px, 256px"
                      className={`object-cover transition-transform duration-500 ${
                        isHovered ? "scale-106" : "scale-100"
                      }`}
                    />
                  </div>
                )}

                {/* Treatment 4: Dark Mode Inset */}
                {treatment === "dark-ticket" && (
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 aspect-square rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      fill
                      quality={90}
                      priority
                      sizes="(max-width: 640px) 224px, 256px"
                      className={`object-cover transition-transform duration-500 ${
                        isHovered ? "scale-106" : "scale-100"
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* Product Title */}
              <div className="text-center mt-3" suppressHydrationWarning>
                <h3
                  className={`text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                    isTonal ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {product.title}
                </h3>
              </div>
            </div>

            {/* ======================================================================= */}
            {/* 2. PEMISAH TIKET: PERFORASI + NOTCH CEKUNG KIRI DAN KANAN              */}
            {/* ======================================================================= */}
            <div
              suppressHydrationWarning
              className="relative w-full h-7 flex items-center justify-center bg-transparent"
            >
              {/* Left Concave Cutout Notch */}
              <div
                suppressHydrationWarning
                className={`absolute -left-3.5 w-7 h-7 rounded-full border-r shadow-inner z-20 ${
                  isDark
                    ? "bg-slate-950 border-slate-800"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200/90 dark:border-slate-800"
                }`}
              />

              {/* Dashed Perforation Line */}
              <div
                suppressHydrationWarning
                className="w-full border-t-2 border-dashed border-slate-200 dark:border-slate-800 mx-5 z-10"
              />

              {/* Right Concave Cutout Notch */}
              <div
                suppressHydrationWarning
                className={`absolute -right-3.5 w-7 h-7 rounded-full border-l shadow-inner z-20 ${
                  isDark
                    ? "bg-slate-950 border-slate-800"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200/90 dark:border-slate-800"
                }`}
              />
            </div>

            {/* ======================================================================= */}
            {/* 3. BAGIAN BAWAH: DATA SHEET TIKET & AKSI                                */}
            {/* ======================================================================= */}
            <div
              suppressHydrationWarning
              className={`p-6 sm:p-7 space-y-4 ${
                isDark ? "bg-slate-900" : "bg-white dark:bg-slate-900"
              }`}
            >
              {/* Dotted Leader Line Specs (Persis sesuai SS user: Dimensi & Berat) */}
              <div className="space-y-3.5 text-xs sm:text-sm" suppressHydrationWarning>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Dimensi
                  </span>
                  <span className="flex-1 border-b border-dotted border-slate-300 dark:border-slate-700 mx-2" />
                  <span className="font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {product.dimensi}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Berat
                  </span>
                  <span className="flex-1 border-b border-dotted border-slate-300 dark:border-slate-700 mx-2" />
                  <span className="font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {product.berat}
                  </span>
                </div>
              </div>

              {/* Action Button: Klaim Penawaran Harga (RFQ Tiket) */}
              <div className="pt-2 flex items-center justify-between gap-3" suppressHydrationWarning>
                <a
                  suppressHydrationWarning
                  href={getWhatsAppProductUrl(product.title, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Klaim Penawaran Harga (RFQ Tiket)</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* ========================================================================= */}
        {/* LIGHTBOX MODAL SPESIFIKASI LENGKAP (KETIKA KARTU DIKLIK)                  */}
        {/* ========================================================================= */}
        {isModalOpen && (
          <div
            suppressHydrationWarning
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              suppressHydrationWarning
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8 animate-in fade-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    {product.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {product.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-500 cursor-pointer"
                  title="Tutup Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Product Image & Specs Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center">
                  <Image
                    src={product.imagePath}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    UN Approved Studio Shot
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {product.deskripsi}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-1.5">
                    <span className="font-bold text-blue-950 dark:text-blue-200 block">
                      Keunggulan Teknis Utama:
                    </span>
                    <ul className="text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                      <li>Material 100% Virgin High-Density Polyethylene.</li>
                      <li>Tutup segel ratchet DIN 61 tamper-evident anti-bocor.</li>
                      <li>Desain dasar interlocking dapat ditumpuk hingga 4 susun.</li>
                      <li>Lulus uji jatuh 1.8 meter & tekanan hidrolik 250 kPa.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Tabs: Parameter Teknis */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 block text-[10px]">Dimensi Luar</span>
                    <strong className="text-slate-900 dark:text-white">{product.dimensi}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 block text-[10px]">Berat Bersih</span>
                    <strong className="text-slate-900 dark:text-white">{product.berat}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 block text-[10px]">Beban Tumpuk</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">{product.bebanStatis}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 block text-[10px]">Muatan Pallet</span>
                    <strong className="text-blue-600 dark:text-blue-400">64 Pcs / Pallet</strong>
                  </div>
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  suppressHydrationWarning
                  href={getWhatsAppProductUrl(product.title, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Klaim Penawaran Harga via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
