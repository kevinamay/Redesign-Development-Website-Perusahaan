"use client";

import React from "react";
import { VideoVariantProps } from "./types";
import { Factory } from "lucide-react";

/**
 * Desain 4: Industrial QC Proof Cards (Kartu Uji Mutu)
 * Dirancang selaras dengan kartu inspeksi produk Asia Plastik:
 * Menyajikan video sebagai bukti uji mutu bersertifikat pabrik dengan
 * stensil parameter teknis, nomor batch pengujian, dan tata letak industrial.
 */
export default function Variant4IndustrialProofCard({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;

  return (
    <section className="w-full bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-300 dark:border-slate-800 p-6 sm:p-8 shadow-md space-y-6">
      {/* Industrial Header */}
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

      {/* Industrial Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {videos.map((vid, idx) => (
          <div
            key={vid.id || idx}
            className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-300 dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Stencil Tag Header */}
            <div className="p-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between font-mono text-[10px]">
              <span className="font-bold text-slate-800 dark:text-slate-200 uppercase">
                TEST REF: AP-V0{idx + 1}
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-bold uppercase">
                {vid.tag || "UJI KEKUATAN"}
              </span>
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

            {/* Industrial Specs Sheet Info */}
            <div className="p-4 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between space-y-2 border-t border-slate-200 dark:border-slate-800">
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {vid.title}
                </h4>
                {vid.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {vid.description}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-dotted border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>DURASI: {vid.duration || "N/A"}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  PASSED
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
