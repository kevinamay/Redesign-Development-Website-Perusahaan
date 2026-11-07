"use client";

import React from "react";
import { VideoVariantProps } from "./types";
import { Factory } from "lucide-react";

/**
 * Desain 4 (Revisi - FIX): Industrial Clean Player (Tanpa Header Stensil & Tanpa Footer Deskripsi)
 * Desain FINAL yang dipilih oleh pengguna:
 * - Menghapus bagian Gambar 4 (Header Stensil "TEST REF: AP-V01   UJI BEBAN GUDANG")
 * - Menghapus bagian Gambar 3 (Bagian bawah "UJI STACKING & DISTRIBUSI... DURASI: 0:16 PASSED")
 * - Video tampil FULL vertikal (portrait 9:16) tajam tanpa black bar samping
 * - Menghasilkan tampilan 3 player video industrial yang murni, bersih, dan fokus penuh pada rekaman uji produk
 */
export default function Variant4MinimalIndustrial({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;

  return (
    <section className="w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border-2 border-slate-300 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
      {/* Industrial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-dashed border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded bg-blue-600 text-white">
              <Factory className="w-3.5 h-3.5" />
            </span>
            <span className="font-mono text-[10px] font-bold tracking-widest text-slate-700 dark:text-slate-300 uppercase">
              LABORATORIUM UJI MUTU • ASIA PLASTIK FACTORY VERIFICATION
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-mono">
            {subheading}
          </p>
        </div>

        <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shrink-0">
          QC VERIFIED • READY FOR B2B
        </span>
      </div>

      {/* Grid Video Industrial Murni (Hanya Player Video Full Portrait, Tanpa Header Gambar 4 & Tanpa Footer Gambar 3) */}
      <div
        className={`grid gap-5 sm:gap-6 ${
          videos.length === 1
            ? "grid-cols-1 max-w-sm"
            : videos.length === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {videos.map((vid, idx) => (
          <div
            key={vid.id || idx}
            className="bg-black rounded-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group flex items-center justify-center relative"
          >
            {/* Player Video Murni Full Portrait (Tanpa Letterbox Hitam di Kiri-Kanan) */}
            <div className="relative w-full aspect-[9/16] max-h-[520px] bg-slate-950 flex items-center justify-center overflow-hidden">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                title={vid.title}
              >
                <source src={vid.videoUrl} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
