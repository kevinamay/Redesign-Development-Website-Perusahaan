"use client";

import React, { useState } from "react";
import { VideoVariantProps } from "./types";
import { Layers, Play, CheckCircle2 } from "lucide-react";

/**
 * Desain 5: Bento Media Pods (Grid Asimetris)
 * Gaya Bento Grid Apple / Linear: 1 video utama di kompartemen besar kiri,
 * didampingi kartu video sekunder bertumpuk rapi di kanan.
 */
export default function Variant5BentoMediaPods({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const mainVideo = videos[selectedIdx] || videos[0];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-2">
            <Layers className="w-3 h-3 text-blue-600" />
            <span>BENTO VIDEO SUITE • ASIA PLASTIK</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {subheading}
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-slate-400">
          {videos.length} KLIP MEDIA TERVERIFIKASI
        </span>
      </div>

      {/* Asymmetric Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Big Bento Pod: 7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 sm:p-5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
              {mainVideo.tag || "PENGUJIAN UTAMA"}
            </span>
            {mainVideo.duration && (
              <span className="text-xs font-mono font-bold text-slate-400">
                {mainVideo.duration}
              </span>
            )}
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-inner">
            <video
              key={mainVideo.videoUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
              title={mainVideo.title}
            >
              <source src={mainVideo.videoUrl} type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          </div>

          <div className="mt-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {mainVideo.title}
            </h4>
            {mainVideo.description && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                {mainVideo.description}
              </p>
            )}
          </div>
        </div>

        {/* Right Column (Stacked Bento Pods: 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Koleksi Klip Tambahan ({videos.length}):
          </span>

          {videos.map((vid, idx) => {
            const isMain = idx === selectedIdx;
            return (
              <div
                key={vid.id || idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-3 ${
                  isMain
                    ? "bg-blue-50/80 dark:bg-blue-950/40 border-blue-400 dark:border-blue-700 shadow-sm ring-1 ring-blue-400"
                    : "bg-white dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className="w-full sm:w-28 aspect-video rounded-lg overflow-hidden bg-black shrink-0 relative flex items-center justify-center">
                  <video
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover pointer-events-none opacity-80"
                  >
                    <source src={vid.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center">
                    <Play className="w-3 h-3 ml-0.5" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-blue-600 dark:text-blue-400 font-semibold mb-0.5">
                    {isMain && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                    <span>{vid.tag || `Klip 0${idx + 1}`}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                    {vid.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {vid.duration ? `${vid.duration} • ` : ""}Klik untuk tayangkan di panggung
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
