"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/data/translations";
import { aboutTranslations } from "@/data/aboutTranslations";
import {
  Cpu,
  ArrowLeft,
  Camera,
  Layers,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";

export default function PrototypeBlowMouldingOriginalPage() {
  const { lang } = useLanguage();
  const t = aboutTranslations[lang] || aboutTranslations.id;

  // Mode: "original" (Solid #1e3a5f) or "transparent" (Current Transparent Parallax)
  const [viewMode, setViewMode] = useState<"original" | "transparent">("original");
  const [hideBannerForScreenshot, setHideBannerForScreenshot] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col">
      {/* ========================================================================= */}
      {/* FLOATING PROTOTYPE TOOLBAR (Dapat disembunyikan untuk keperluan Screenshot)*/}
      {/* ========================================================================= */}
      {!hideBannerForScreenshot && (
        <aside
          aria-label="Toolbar Kontrol Prototipe"
          className="sticky top-0 z-[100] w-full bg-slate-950/95 text-white border-b border-blue-500/40 backdrop-blur-md px-4 py-3 shadow-xl flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Tentang Kami</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-700 pl-3">
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold tracking-wider uppercase border border-amber-500/30">
                PROTOTYPE HANYA UNTUK SCREENSHOT
              </span>
              <span className="text-xs text-slate-400">
                Warna Asal: Solid Navy Blue <strong className="text-blue-400 font-mono">#1e3a5f</strong> (Pre-Transparansi)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle Buttons */}
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode("original")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "original"
                    ? "bg-blue-600 text-white shadow-md font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Warna Asal (Solid #1e3a5f)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("transparent")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "transparent"
                    ? "bg-blue-600 text-white shadow-md font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Versi Transparan (Aktif)</span>
              </button>
            </div>

            {/* Tombol Bersihkan UI untuk Screenshot */}
            <button
              type="button"
              onClick={() => setHideBannerForScreenshot(true)}
              title="Sembunyikan toolbar ini agar tampilan bersih saat di-screenshot"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/30 cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Bersihkan Layar untuk SS</span>
            </button>
          </div>
        </aside>
      )}

      {/* Floating Restore Button jika Banner Disembunyikan */}
      {hideBannerForScreenshot && (
        <button
          type="button"
          onClick={() => setHideBannerForScreenshot(false)}
          className="fixed bottom-6 right-6 z-[99999] px-4 py-2 rounded-full bg-slate-900/90 text-white border border-slate-700 shadow-2xl backdrop-blur-md text-xs font-semibold hover:bg-slate-800 flex items-center gap-2 transition-all cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-blue-400" />
          <span>Tampilkan Toolbar Kontrol</span>
        </button>
      )}

      {/* Header & Navbar Resmi */}
      <Navbar />

      {/* Intro Mini-Banner Context */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 px-4 text-center text-white">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          Prototipe Arsip: Section Blow Moulding 500 Liter
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {viewMode === "original"
            ? "Menampilkan desain awal sebelum efek transparansi diterapkan (latar polos warna #1e3a5f tanpa background foto warehouse)."
            : "Menampilkan desain sesudah penerapan efek transparan parallax (dengan background warehouse & glassmorphism)."}
        </p>
      </div>

      <main className="flex-1 w-full">
        {/* ========================================================================= */}
        {/* VARIAN A: TAMPILAN ASAL (SOLID NAVY BLUE #1e3a5f TANPA FOTO WAREHOUSE)     */}
        {/* ========================================================================= */}
        {viewMode === "original" && (
          <section
            id="mesin-produksi"
            className="bg-[#1e3a5f] w-full py-24 sm:py-28 text-white scroll-mt-20 relative transition-all duration-300"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
              {/* Text Left */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-bold tracking-widest uppercase border border-blue-400/30">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{t.machinery.eyebrow}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {t.machinery.title}
                </h2>

                {/* Paragraph 1 */}
                <p className="text-blue-100 text-lg leading-relaxed font-normal">
                  {t.machinery.desc1}
                </p>

                {/* Paragraph 2 */}
                <p className="text-blue-100 text-lg leading-relaxed font-normal">
                  {t.machinery.desc2}
                </p>

                {/* Paragraph 3 */}
                <p className="text-blue-100 text-lg leading-relaxed font-normal">
                  {t.machinery.desc3}
                </p>

                {/* Machinery Features Badges (Desain Asal: solid navy p-3 rounded-xl bg-blue-950/50) */}
                <div className="pt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-400/20 shadow-md">
                    <span className="block text-xl font-bold text-white">{t.machinery.badge1Val}</span>
                    <span className="text-xs text-blue-200">{t.machinery.badge1Label}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-400/20 shadow-md">
                    <span className="block text-xl font-bold text-white">{t.machinery.badge2Val}</span>
                    <span className="text-xs text-blue-200">{t.machinery.badge2Label}</span>
                  </div>
                </div>
              </div>

              {/* Images Right (Two horizontal images stacked) */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                {/* Machinery Image 1 */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 group">
                  <Image
                    src="/images/assets/machinery-1.webp"
                    alt="Mesin Heavy-Duty Blow Moulding 500L"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="w-full h-[220px] sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    {t.machinery.image1Badge}
                  </div>
                </div>

                {/* Machinery Image 2 */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 group">
                  <Image
                    src="/images/assets/machinery-2.webp"
                    alt="Lini Perakitan & Tooling In-House Asia Plastik"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="w-full h-[220px] sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    {t.machinery.image2Badge}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* VARIAN B: TAMPILAN SESUDAH TRANSPARAN (AKTIF SEKARANG DENGAN PARALLAX)    */}
        {/* ========================================================================= */}
        {viewMode === "transparent" && (
          <section
            id="mesin-produksi-transparan"
            className="relative w-full py-28 lg:py-32 bg-[url('/images/assets/warehouse.webp')] bg-fixed bg-cover bg-center overflow-hidden shadow-2xl scroll-mt-20 text-white transition-all duration-300"
          >
            {/* Dark gradient overlay in Light Mode, Corporate Blue overlay in Dark Mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90 dark:from-[#1e3a5f]/90 dark:via-[#1e3a5f]/85 dark:to-[#1e3a5f]/90 backdrop-blur-xs pointer-events-none transition-all duration-500" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
              {/* Text Left */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 dark:bg-blue-400/20 text-blue-300 dark:text-blue-200 text-xs font-bold tracking-widest uppercase border border-blue-400/30 backdrop-blur-xs">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{t.machinery.eyebrow}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
                  {t.machinery.title}
                </h2>

                <p className="text-slate-200 dark:text-blue-100 text-lg leading-relaxed font-normal transition-colors duration-300">
                  {t.machinery.desc1}
                </p>

                <p className="text-slate-200 dark:text-blue-100 text-lg leading-relaxed font-normal transition-colors duration-300">
                  {t.machinery.desc2}
                </p>

                <p className="text-slate-200 dark:text-blue-100 text-lg leading-relaxed font-normal transition-colors duration-300">
                  {t.machinery.desc3}
                </p>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/10 dark:bg-blue-900/30 border border-white/15 dark:border-blue-400/20 backdrop-blur-md shadow-lg transition-colors duration-300">
                    <span className="block text-2xl font-black text-white">{t.machinery.badge1Val}</span>
                    <span className="text-xs text-slate-300 dark:text-blue-200 font-medium transition-colors duration-300">
                      {t.machinery.badge1Label}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 dark:bg-blue-900/30 border border-white/15 dark:border-blue-400/20 backdrop-blur-md shadow-lg transition-colors duration-300">
                    <span className="block text-2xl font-black text-white">{t.machinery.badge2Val}</span>
                    <span className="text-xs text-slate-300 dark:text-blue-200 font-medium transition-colors duration-300">
                      {t.machinery.badge2Label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Images Right */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 dark:border-blue-400/30 group backdrop-blur-xs">
                  <Image
                    src="/images/assets/machinery-1.webp"
                    alt="Mesin Heavy-Duty Blow Moulding 500L"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="w-full h-[220px] sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 shadow-md">
                    {t.machinery.image1Badge}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 dark:border-blue-400/30 group backdrop-blur-xs">
                  <Image
                    src="/images/assets/machinery-2.webp"
                    alt="Lini Perakitan & Tooling In-House Asia Plastik"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="w-full h-[220px] sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 shadow-md">
                    {t.machinery.image2Badge}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
