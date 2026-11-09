"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CATEGORY_VIDEO_VARIANTS_META,
  resolveVideoVariantKey,
  PrototypeCategoryVideoSwitcher,
  CategoryVideoSection,
  Variant1ModernTripleCard,
  Variant2SpotlightCinema,
  Variant3HorizontalCarousel,
  Variant3CompactCarousel,
  Variant4IndustrialProofCard,
  Variant4MinimalIndustrial,
  Variant5BentoMediaPods,
} from "@/components/category-videos";
import { getCategoryVideos, CATEGORY_VIDEOS } from "@/data/categoryVideos";
import { ArrowLeft, Film, Eye, Layers, CheckCircle2 } from "lucide-react";

function CategoryVideoPrototypeContent() {
  const searchParams = useSearchParams();
  const currentKey = resolveVideoVariantKey(searchParams.get("videoVariant"));
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("pallet-industri");
  const [viewMode, setViewMode] = useState<"single" | "all">("single");

  const activeCategoryData =
    getCategoryVideos(selectedCategoryId) || CATEGORY_VIDEOS["pallet-industri"];
  const activeMeta =
    CATEGORY_VIDEO_VARIANTS_META.find((v) => v.key === currentKey) ||
    CATEGORY_VIDEO_VARIANTS_META[0];

  const categoryOptions = [
    { id: "pallet-industri", name: "Pallet Industri (3 Video)" },
    { id: "keranjang-industri", name: "Keranjang Industri (3 Video)" },
    { id: "box-lipat", name: "Box Lipat (1 Video)" },
    { id: "blok-lalu-lintas", name: "Blok Lalu Lintas & Cone (3 Video)" },
    { id: "kosmetik", name: "Kosmetik (4 Video)" },
    { id: "botol-minyak-goreng", name: "Botol Minyak Goreng (3 Video)" },
    { id: "jerigen-hdpe", name: "Jerigen HDPE (4 Video)" },
    { id: "kaleng-pail-plastik", name: "Kaleng & Pail (7 Video)" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col pb-36">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER & PROTOTYPE LABORATORY CONTROLS                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <Link
            href="/prototype"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Kembali ke Index Prototype"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono font-bold tracking-wider uppercase text-[11px] shadow-2xs flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5" />
            <span>LAB DESAIN VIDEO SHOWCASE (HASIL SCRAPING)</span>
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium hidden md:inline bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
            PROTOTYPE LAB
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center gap-1 text-xs">
            <button
              type="button"
              onClick={() => setViewMode("single")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "single"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Fokus 1 Desain</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "all"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Bandingkan Semua Varian</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. SUB-BAR: CATEGORY SELECTOR CHIPS                                       */}
      {/* ========================================================================= */}
      <section className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Pilih Kategori untuk Diuji:
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categoryOptions.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategoryId === cat.id
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT CANVAS                                                    */}
      {/* ========================================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {viewMode === "single" ? (
          /* ========================================================================= */
          /* MODE 1: FOKUS PADA 1 DESAIN PILIHAN DENGAN PENJELASAN LENGKAP             */
          /* ========================================================================= */
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Penjelasan Desain Aktif */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase mb-2">
                <Film className="w-3.5 h-3.5" />
                <span>{activeMeta.badge}: {activeMeta.tag}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {activeMeta.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {activeMeta.description}
              </p>

              {/* Poin Keunggulan Desain */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                {activeMeta.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Render Komponen Desain Terpilih */}
            <div className="py-2">
              <CategoryVideoSection
                categoryId={selectedCategoryId}
                variant={currentKey}
              />
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* MODE 2: BANDINGKAN SEMUA VARIAN VIDEO SEKALIGUS                           */
          /* ========================================================================= */
          <div className="space-y-16 animate-in fade-in duration-200">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Perbandingan Format Video Showcase Produk
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Menampilkan desain asli dan desain revisi baru sesuai arahan Anda. Semua menggunakan video resmi asiaplastik.com.
              </p>
            </div>

            {/* Varian 3 (Revisi Baru - Kompak Mini Reel) */}
            <section className="space-y-4 p-4 rounded-3xl bg-blue-50/40 dark:bg-blue-950/20 border-2 border-blue-400/50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500 text-white">
                  REVISI BARU
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                  Desain 3 (Revisi)
                </span>
                <h3 className="text-lg font-bold">Mini Reel Carousel (Video Diperkecil & Kompak)</h3>
              </div>
              <p className="text-xs text-slate-500">
                Sesuai request: video diperkecil ukurannya sehingga tidak memakan banyak tinggi halaman, format geser halus dipertahankan.
              </p>
              <Variant3CompactCarousel data={activeCategoryData} />
            </section>

            {/* Varian 4 (Revisi Baru - Clean Player Tanpa Header/Footer Clutter) */}
            <section className="space-y-4 p-4 rounded-3xl bg-emerald-50/40 dark:bg-emerald-950/20 border-2 border-emerald-400/50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500 text-white">
                  REVISI BARU
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-600 text-white">
                  Desain 4 (Revisi)
                </span>
                <h3 className="text-lg font-bold">Industrial Clean Player (Tanpa Header Stensil & Lembar Specs Bawah)</h3>
              </div>
              <p className="text-xs text-slate-500">
                Sesuai request: bagian stensil atas (Gambar 4) dan lembar deskripsi/passed bawah (Gambar 3) dihapus total. Hanya menyisakan 3 layar video industrial murni.
              </p>
              <Variant4MinimalIndustrial data={activeCategoryData} />
            </section>

            {/* Varian 3 (Original - Tetap Ada Sesuai Permintaan) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-600 text-white">
                  ORIGINAL
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                  Desain 3 (Asli)
                </span>
                <h3 className="text-lg font-bold">Horizontal Reel Carousel (Ukuran Normal)</h3>
              </div>
              <Variant3HorizontalCarousel data={activeCategoryData} />
            </section>

            {/* Varian 4 (Original - Tetap Ada Sesuai Permintaan) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-600 text-white">
                  ORIGINAL
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                  Desain 4 (Asli)
                </span>
                <h3 className="text-lg font-bold">Industrial QC Proof Cards (Lengkap dengan Header & Specs)</h3>
              </div>
              <Variant4IndustrialProofCard data={activeCategoryData} />
            </section>

            {/* Varian 1 */}
            <section className="space-y-4 opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-500 text-white">
                  Desain 1
                </span>
                <h3 className="text-lg font-bold">Modern Triple-Card (Refleksi Gambar 1)</h3>
              </div>
              <Variant1ModernTripleCard data={activeCategoryData} />
            </section>

            {/* Varian 2 */}
            <section className="space-y-4 opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-500 text-white">
                  Desain 2
                </span>
                <h3 className="text-lg font-bold">Spotlight Cinema & Playlist Reel</h3>
              </div>
              <Variant2SpotlightCinema data={activeCategoryData} />
            </section>

            {/* Varian 5 */}
            <section className="space-y-4 opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-500 text-white">
                  Desain 5
                </span>
                <h3 className="text-lg font-bold">Bento Media Pods</h3>
              </div>
              <Variant5BentoMediaPods data={activeCategoryData} />
            </section>
          </div>
        )}
      </main>

      {/* Floating Interactive Switcher */}
      <PrototypeCategoryVideoSwitcher currentVariant={currentKey} />
    </div>
  );
}

export default function CategoryVideoPrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
            <span className="font-mono text-xs">Memuat Prototype Video Showcase...</span>
          </div>
        </div>
      }
    >
      <CategoryVideoPrototypeContent />
    </Suspense>
  );
}
