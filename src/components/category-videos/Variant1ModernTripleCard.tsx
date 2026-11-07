"use client";

import React from "react";
import { VideoVariantProps } from "./types";
import { ShieldCheck, Film } from "lucide-react";

/**
 * Desain 1: Modern Triple-Card (Refleksi Gambar 1)
 * Mengadopsi langsung tata letak 3 video sejajar dari web asli seperti di Gambar 1,
 * namun ditingkatkan dengan styling modern: kartu rounded glass, video duration chip,
 * judul pengujian, dan kontrol HTML5 responsif.
 */
export default function Variant1ModernTripleCard({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;

  return (
    <section className="w-full bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 mb-2">
            <Film className="w-3 h-3" />
            <span>DOKUMENTASI VIDEO RESMI • ASIA PLASTIK</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {subheading}
          </p>
        </div>

        <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500 shrink-0">
          {videos.length} VIDEO DOKUMENTASI
        </span>
      </div>

      {/* Triple Card Grid (Mirip Gambar 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {videos.map((vid, idx) => (
          <div
            key={vid.id || idx}
            className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Top Video Card Header */}
            <div className="p-3 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>{vid.tag || `Video 0${idx + 1}`}</span>
              </span>

              {vid.duration && (
                <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                  {vid.duration}
                </span>
              )}
            </div>

            {/* Video Player (HTML5 Native persis seperti Gambar 1) */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
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

            {/* Bottom Caption & Description */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-1.5 bg-white dark:bg-slate-900">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {vid.title}
              </h4>
              {vid.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
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
