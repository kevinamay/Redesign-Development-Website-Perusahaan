"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Tv, Clock, Eye, CheckCircle2, ChevronRight, Volume2 } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { VideoMediaItem } from "@/data/mediaData";

export function VariantCinemaTheater({
  videos,
  onPlay,
}: {
  videos: VideoMediaItem[];
  onPlay: (v: VideoMediaItem) => void;
}) {
  const [selectedVideo, setSelectedVideo] = useState<VideoMediaItem>(videos[0] || null);

  if (!selectedVideo) return null;

  return (
    <div className="py-12 bg-slate-950 text-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept Banner */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm mb-8 flex items-start gap-3">
          <Tv className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Opsi 3 (Desain Baru): Cinema Spotlight Stage & Interactive Playlist</strong>
            <p className="mt-1 text-slate-300">
              Konsep panggung sinematik premium ala Apple TV / Netflix Studio. Calon klien B2B dapat memilih video dari daftar putar di sebelah kanan dan menonton sorotan utama langsung di panggung bioskop interaktif.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider uppercase mb-2">
              <FaYoutube className="w-3.5 h-3.5" />
              <span>Studio Dokumentasi Interaktif</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sorotan Transparansi Manufaktur
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Pilih video di panel kanan untuk meninjau kecanggihan lini produksi, sertifikasi mutu botol & toples, dan budaya kerja Asia Plastik.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
            <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Kualitas 1080p Full HD Resmi Pabrik</span>
          </div>
        </div>

        {/* 2-Column Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Big Master Spotlight Player (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div
              onClick={() => onPlay(selectedVideo)}
              className="group relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer"
            >
              <Image
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

              {/* Center Play Button with Pulsing Wave */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-red-600/40 animate-ping" />
                  <div className="relative w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                </div>
              </div>

              {/* Bottom Badges on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-lg bg-red-600 font-bold uppercase tracking-wide text-[11px] shadow">
                  {selectedVideo.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-black/80 font-mono text-[11px] font-semibold backdrop-blur-md">
                  Durasi: {selectedVideo.duration}
                </span>
              </div>
            </div>

            {/* Video Details Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    {selectedVideo.publishedAt}
                  </span>
                  {selectedVideo.views && (
                    <span className="flex items-center gap-1 text-slate-300">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      {selectedVideo.views} tayangan
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Terverifikasi Tim Asia Plastik
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {selectedVideo.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedVideo.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onPlay(selectedVideo)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Buka Video Player (Layar Penuh)</span>
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white transition-colors underline"
                >
                  Tonton di YouTube Resmi ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Playlist Queue (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="flex items-center justify-between px-2 pb-1 border-b border-slate-800 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400">
                Daftar Putar Video Pabrik ({videos.length})
              </span>
              <span className="text-slate-500 text-[11px]">Klik untuk memutar</span>
            </div>

            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
              {videos.map((video) => {
                const isActive = selectedVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`group flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-red-600/20 to-slate-900 border-red-500/50 shadow-lg shadow-red-600/10 ring-1 ring-red-500/30"
                        : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700"
                    }`}
                  >
                    {/* Thumbnail Mini */}
                    <div className="relative w-28 h-18 rounded-xl overflow-hidden shrink-0 bg-slate-950">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono font-semibold">
                        {video.duration}
                      </span>
                      {isActive && (
                        <div className="absolute inset-0 bg-red-600/30 flex items-center justify-center">
                          <Play className="w-4 h-4 fill-white text-white animate-pulse" />
                        </div>
                      )}
                    </div>

                    {/* Metadata Mini */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isActive ? "text-red-400" : "text-slate-400"
                            }`}
                          >
                            {video.categoryLabel}
                          </span>
                          {isActive && (
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                          )}
                        </div>
                        <h4
                          className={`text-xs font-semibold mt-1 line-clamp-2 leading-snug ${
                            isActive ? "text-white font-bold" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {video.title}
                        </h4>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                        <span>{video.publishedAt}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "text-red-400 translate-x-0.5" : "text-slate-600"}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
