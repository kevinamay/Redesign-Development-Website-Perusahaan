"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Search, Layers } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { VideoMediaItem } from "@/data/mediaData";

export function VariantGalleryMedia({
  videos,
  onPlay,
}: {
  videos: VideoMediaItem[];
  onPlay: (v: VideoMediaItem) => void;
}) {
  const [filter, setFilter] = useState<string>("semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { key: "semua", label: "Semua Video" },
    { key: "profil", label: "Profil Pabrik" },
    { key: "karyawan", label: "Aktivitas Karyawan" },
    { key: "event", label: "Event & Pameran" },
    { key: "csr", label: "CSR & Sosial" },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesFilter = filter === "semua" || video.category === filter;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept Banner */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-900 dark:text-purple-200 text-xs sm:text-sm mb-10 flex items-start gap-3">
          <Layers className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
          <div>
            <strong>Opsi 2 (Desain Asli): Halaman Mandiri /media (Galeri Video Lengkap)</strong>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              Pengunjung diarahkan ke halaman mandiri yang menyajikan seluruh 17+ dokumentasi video pabrik,
              lengkap dengan sistem filter kategori, pencarian judul, dan badge YouTube Shorts.
            </p>
          </div>
        </div>

        {/* Page Title & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-2">
              <FaYoutube className="w-3.5 h-3.5" />
              <span>Media Hub & Galeri Video</span>
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Dokumentasi & Video Resmi Asia Plastik
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Menampilkan {filteredVideos.length} video dokumentasi resmi pabrik dan kegiatan perusahaan.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari video kegiatan atau pabrik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filter === cat.key
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlay(video)}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div
                className={`relative w-full overflow-hidden bg-slate-950 ${
                  video.isShort ? "aspect-[9/13]" : "aspect-video"
                }`}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>

                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white">
                  {video.isShort && (
                    <span className="px-2 py-0.5 rounded bg-red-600 font-bold text-[10px] uppercase">
                      YouTube Short
                    </span>
                  )}
                  <span className="ml-auto px-2 py-0.5 rounded bg-black/80 text-[11px] font-semibold">
                    {video.duration}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {video.categoryLabel}
                    </span>
                    {video.views && (
                      <span className="text-[11px] text-slate-400">
                        {video.views} views
                      </span>
                    )}
                  </div>
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
                    <span>Putar Video</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-red-600 to-rose-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <FaYoutube className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Kunjungi Kanal YouTube @AsiaPlastik</h3>
              <p className="text-sm text-red-100 mt-0.5">
                Lebih dari 500+ video dokumentasi pabrik, tips kemasan industri, dan kegiatan terkini.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@AsiaPlastik"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-red-700 hover:bg-red-50 font-bold text-sm shadow-md transition-all shrink-0"
          >
            Buka Kanal YouTube Resmi →
          </a>
        </div>
      </div>
    </div>
  );
}
