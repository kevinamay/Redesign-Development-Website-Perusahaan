"use client";

import React from "react";
import { VideoVariantProps } from "./types";

/**
 * Desain 4 (Revisi - FIX): Industrial Clean Player (Hanya Layar Video Murni)
 * Desain FINAL yang dipilih oleh pengguna:
 * - Header banner laboratorium & judul uji mutu dihapus sesuai instruksi
 * - Header Stensil & Footer Specs dihapus
 * - Video tampil FULL vertikal (portrait 9:16) murni tanpa letterbox hitam samping
 */
export default function Variant4MinimalIndustrial({ data }: VideoVariantProps) {
  const { videos } = data;

  return (
    <section className="w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border-2 border-slate-300 dark:border-slate-800 p-6 sm:p-8 shadow-md">
      {/* Grid Video Industrial Murni (Hanya Player Video Full Portrait) */}
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
