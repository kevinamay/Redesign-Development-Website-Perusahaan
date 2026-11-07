"use client";

import React, { useRef } from "react";
import { VideoVariantProps } from "./types";
import { ChevronLeft, ChevronRight, Film } from "lucide-react";

/**
 * Desain 3 (Revisi): Mini Reel Carousel
 * Revisi presisi sesuai feedback pengguna:
 * - Tampilan video tetap FULL vertikal (portrait 9:16) persis seperti Desain 3 asli (tanpa black bar di samping)
 * - Ukuran diperkecil secara proporsional (w-48 sm:w-56) sehingga tidak membengkak tinggi seperti Desain 3 di Gambar 2
 * - Desain asli Desain 3 tetap dipertahankan terpisah
 */
export default function Variant3CompactCarousel({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -230 : 230;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white dark:bg-slate-900/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-5">
      {/* Header + Nav Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50">
              <Film className="w-2.5 h-2.5" />
              <span>REVISI DESAIN 3 • MINI REEL KOMPAK (PORTRAIT FULL)</span>
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
            {heading}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-xl">
            {subheading}
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
            aria-label="Geser video ke kiri"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
            aria-label="Geser video ke kanan"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Mini Reel Strip (Full Portrait Vertikal, Ukuran Diperkecil Proporsional) */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-4 overflow-x-auto pb-3 scrollbar-none snap-x snap-mandatory scroll-smooth"
      >
        {videos.map((vid, idx) => (
          <div
            key={vid.id || idx}
            className="w-48 sm:w-56 shrink-0 snap-start bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Top Compact Tag & Duration */}
            <div className="px-3 py-2 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider truncate max-w-[120px]">
                {vid.tag || `Uji Lapangan 0${idx + 1}`}
              </span>
              {vid.duration && (
                <span className="text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">
                  {vid.duration}
                </span>
              )}
            </div>

            {/* Video Player (Full Portrait 9:16 persis seperti Desain 3 aslinya, tanpa black bar samping) */}
            <div className="relative w-full aspect-[9/16] bg-slate-950 flex items-center justify-center overflow-hidden">
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

            {/* Video Meta (Ringkas & Rapi) */}
            <div className="p-3 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between space-y-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {vid.title}
              </h4>
              {vid.description && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                  {vid.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
