"use client";

import React from "react";
import { VideoVariantProps } from "./types";

/**
 * Desain 4 (Revisi - FIX): Industrial Clean Player (Langsung Video Saja)
 * Sesuai instruksi pengguna:
 * - Menghapus kontainer/border box putih bagian luar
 * - Langsung menampilkan kartu video rounded murni tanpa pembungkus luar
 * - Video tampil FULL vertikal (portrait 9:16)
 */
export default function Variant4MinimalIndustrial({ data }: VideoVariantProps) {
  const { videos } = data;

  return (
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
          className="bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex items-center justify-center relative"
        >
          {/* Player Video Murni Full Portrait (Langsung Video Saja) */}
          <div className="relative w-full aspect-[9/16] max-h-[520px] bg-slate-950 flex items-center justify-center overflow-hidden rounded-2xl">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover rounded-2xl"
              title={vid.title}
            >
              <source src={vid.videoUrl} type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}
