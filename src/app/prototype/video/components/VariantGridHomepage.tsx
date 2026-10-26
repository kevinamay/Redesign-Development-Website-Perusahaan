"use client";

import React from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { VideoMediaItem } from "@/data/mediaData";

export function VariantGridHomepage({
  videos,
  onPlay,
  onSwitchVariant,
}: {
  videos: VideoMediaItem[];
  onPlay: (v: VideoMediaItem) => void;
  onSwitchVariant: (variantKey: string) => void;
}) {
  const highlightVideos = videos.slice(0, 3);

  return (
    <div className="space-y-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept Banner */}
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-900 dark:text-blue-200 text-xs sm:text-sm mb-10 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <strong>Opsi 1 (Desain Asli): 3-Card Grid Showcase di Beranda</strong>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              Format grid 3 kartu ringkas yang dipasang langsung di tengah halaman Beranda.
              Sangat pas untuk social proof cepat bagi klien B2B, dengan tombol langsung menuju galeri lengkap.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-3">
              <FaYoutube className="w-4 h-4 text-red-500" />
              <span>Dokumentasi Video Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Aktivitas Pabrik & Showcase Manufaktur
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Saksikan secara transparan presisi mesin injection moulding, pengujian kualitas kemasan, serta dedikasi seluruh tim profesional CV. Asia Plastik.
            </p>
          </div>

          <button
            onClick={() => onSwitchVariant("gallery")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all shrink-0 w-fit cursor-pointer"
          >
            <span>Lihat Semua Video di Galeri Media</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Showcase Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlay(video)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white text-[11px] font-semibold">
                  {video.duration}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {video.categoryLabel}
                  </span>
                  <h3 className="mt-1 font-bold text-slate-900 dark:text-white text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>{video.publishedAt}</span>
                  <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                    <span>Tonton Video</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
