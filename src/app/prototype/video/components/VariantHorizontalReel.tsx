"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight, Film, ShieldCheck, Factory, Award } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { VideoMediaItem } from "@/data/mediaData";

export function VariantHorizontalReel({
  videos,
  onPlay,
}: {
  videos: VideoMediaItem[];
  onPlay: (v: VideoMediaItem) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="py-14 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept Banner */}
        <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-xs sm:text-sm mb-10 flex items-start gap-3">
          <Film className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong>Opsi 4 (Desain Baru): Dynamic Horizontal Video Reel / Carousel</strong>
            <p className="mt-1 text-slate-300">
              Desain modern minim makan tempat (horizontal swipeable stream). Memberikan pengalaman scrolling mulus seperti galeri konten streaming dengan navigasi panah interaktif.
            </p>
          </div>
        </div>

        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider uppercase mb-3">
              <FaYoutube className="w-3.5 h-3.5" />
              <span>Video Reels Manufaktur</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Eksplorasi Fasilitas & Proses Produksi
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Geser ke samping untuk melihat seluruh 17 video operasional, mulai dari mesin injection molding berkecepatan tinggi hingga kegiatan gathering karyawan.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer shadow-md"
              aria-label="Geser ke kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer shadow-lg shadow-blue-600/30"
              aria-label="Geser ke kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Highlights Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 text-xs">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Factory className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white">Mesin Injection & Blow Moulding</p>
              <p className="text-slate-400 text-[11px]">Kapasitas jutaan pcs/bulan</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 text-xs">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white">Food Grade & ISO Quality</p>
              <p className="text-slate-400 text-[11px]">Material virgin murni bersertifikat</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 text-xs">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white">100% Pabrikasi Lokal</p>
              <p className="text-slate-400 text-[11px]">Beroperasi sejak tahun 1985</p>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlay(video)}
              className="group relative w-[300px] sm:w-[340px] shrink-0 rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer snap-start flex flex-col"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                {/* Floating Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-white/10">
                    {video.categoryLabel}
                  </span>
                </div>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-[11px] font-mono font-semibold">
                  {video.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm line-clamp-2 group-hover:text-blue-400 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{video.publishedAt}</span>
                  <span className="text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                    <span>Tonton</span>
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
