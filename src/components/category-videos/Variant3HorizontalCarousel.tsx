"use client";

import React, { useRef } from "react";
import { VideoVariantProps } from "./types";
import { ChevronLeft, ChevronRight, Film } from "lucide-react";

/**
 * Desain 3: Horizontal Reel Carousel (Geser Halus)
 * Format strip carousel geser modern dengan tombol navigasi panah kiri/kanan.
 * Rapi dan hemat tempat secara vertikal.
 */
export default function Variant3HorizontalCarousel({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header + Nav Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 mb-2">
            <Film className="w-3 h-3" />
            <span>VIDEO REEL KATALOG • DOKUMENTASI RESMI</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {subheading}
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Geser video ke kiri"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Geser video ke kanan"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Reel Strip */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
      >
        {videos.map((vid, idx) => (
          <div
            key={vid.id || idx}
            className="w-80 sm:w-96 shrink-0 snap-start bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Top Tag & Duration */}
            <div className="p-3 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {vid.tag || `Uji Lapangan 0${idx + 1}`}
              </span>
              {vid.duration && (
                <span className="text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">
                  {vid.duration}
                </span>
              )}
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
                title={vid.title}
              >
                <source src={vid.videoUrl} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>

            {/* Video Meta */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-1.5 bg-white dark:bg-slate-900">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {vid.title}
              </h4>
              {vid.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
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
