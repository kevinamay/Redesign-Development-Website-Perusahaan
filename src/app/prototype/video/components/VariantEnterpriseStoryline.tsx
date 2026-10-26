"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Building2, Users2, HeartHandshake, Trophy, ArrowUpRight, type LucideIcon } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { VideoMediaItem } from "@/data/mediaData";

interface Pillar {
  id: string;
  category: "profil" | "karyawan" | "csr" | "event";
  title: string;
  shortDesc: string;
  stats: { value: string; label: string }[];
  highlightQuote: string;
  icon: LucideIcon;
}

const CORPORATE_PILLARS: Pillar[] = [
  {
    id: "pilar-1",
    category: "profil",
    title: "Teknologi Manufaktur & Presisi Pabrik",
    shortDesc:
      "Investasi berkelanjutan pada mesin injeksi otomatis dan blow moulding presisi tinggi untuk menjamin toleransi mikron pada setiap ulir tutup botol dan ketebalan dinding kemasan.",
    stats: [
      { value: "40+ Thn", label: "Pengalaman Sejak 1985" },
      { value: "100%", label: "Biji Plastik Murni (Virgin)" },
      { value: "0% Leak", label: "Uji Tekanan & Kebocoran" },
    ],
    highlightQuote:
      "“Presisi bukan sekadar angka spesifikasi, melainkan jaminan keutuhan produk cairan dan makanan milik mitra bisnis kami.”",
    icon: Building2,
  },
  {
    id: "pilar-2",
    category: "karyawan",
    title: "Kultur Kerja, Keselamatan & Soliditas Tim",
    shortDesc:
      "Karyawan adalah aset utama. Dari Medical Check Up rutin bersama Dinkes hingga perayaan HUT RI dan kompetisi masak MasterChef, iklim kerja yang sehat menghasilkan fokus produksi yang prima.",
    stats: [
      { value: "Rutin", label: "Medical Check Up Dinkes" },
      { value: "Zero Accident", label: "Standar K3 Pabrik" },
      { value: "Solid", label: "Kegiatan Gathering & Olahraga" },
    ],
    highlightQuote:
      "“Semangat kebersamaan seluruh tim operator mesin dan manajemen menjaga kelancaran pasokan tanpa keterlambatan.”",
    icon: Users2,
  },
  {
    id: "pilar-3",
    category: "csr",
    title: "Tanggung Jawab Sosial (CSR) & Berbagi Sesama",
    shortDesc:
      "Asia Plastik aktif berkontribusi kepada masyarakat sekitar, mulai dari bakti sosial ke Panti Asuhan Sola Gratia hingga dukungan bagi Yayasan Cinta Kasih Ibu Teresa.",
    stats: [
      { value: "Berkelanjutan", label: "Program Berbagi Kasih" },
      { value: "Surabaya", label: "Fokus Komunitas Lokal" },
      { value: "Empati", label: "Bantuan Panti & Sosial" },
    ],
    highlightQuote:
      "“Bertumbuh bersama masyarakat adalah amanah kami agar manfaat industri dirasakan secara nyata oleh mereka yang membutuhkan.”",
    icon: HeartHandshake,
  },
  {
    id: "pilar-4",
    category: "event",
    title: "Kemitraan Strategis, Event & Pameran",
    shortDesc:
      "Mendukung ekosistem industri melalui sponsorship turnamen mini soccer bersama MS Glow, kolaborasi kuliner bersama King Abdi, hingga syukuran kantor baru.",
    stats: [
      { value: "Nasional", label: "Jangkauan Mitra B2B" },
      { value: "Sponsorship", label: "Dukungan Event Komunitas" },
      { value: "Modern", label: "Fasilitas Kantor Baru" },
    ],
    highlightQuote:
      "“Membangun relasi jangka panjang dengan brand-brand terkemuka melalui solusi kemasan yang terpercaya.”",
    icon: Trophy,
  },
];

export function VariantEnterpriseStoryline({
  videos,
  onPlay,
}: {
  videos: VideoMediaItem[];
  onPlay: (v: VideoMediaItem) => void;
}) {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = CORPORATE_PILLARS[activePillarIndex];

  // Filter video sesuai pilar aktif, atau fallback ke profil/karyawan
  const pillarVideos = videos.filter((v) => v.category === activePillar.category);
  const displayVideos = pillarVideos.length > 0 ? pillarVideos : videos.slice(0, 4);

  return (
    <div className="py-14 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept Banner */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm mb-10 flex items-start gap-3">
          <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>Opsi 5 (Desain Baru): Corporate Pillars & Storyline Showcase</strong>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              Konsep narasi korporasi B2B tingkat enterprise. Video dikelompokkan ke dalam 4 pilar kredibilitas perusahaan (Teknologi, Kultur Tim, CSR, dan Kemitraan) disertai angka statistik bisnis nyata.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FaYoutube className="w-3.5 h-3.5 text-red-500" />
            <span>Transparansi Korporasi B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Pilar Kredibilitas & Dokumentasi Nyata Asia Plastik
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Jelajahi video dokumentasi berdasarkan pilar nilai perusahaan yang membuktikan integritas kami sebagai mitra manufaktur kemasan plastik terpercaya di Indonesia.
          </p>
        </div>

        {/* Pillar Tabs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {CORPORATE_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = activePillarIndex === index;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIndex(index)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-full ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-blue-600 dark:text-white border-transparent shadow-xl ring-2 ring-slate-900 dark:ring-blue-500"
                    : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-white/80" : "text-slate-400"}`}>
                    0{index + 1}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm line-clamp-2 leading-tight">
                  {pillar.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Split Screen Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Narrative & Key Metrics (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Fokus Pilar #{activePillarIndex + 1}
                </span>
                <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">
                  {activePillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activePillar.shortDesc}
                </p>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 italic text-xs text-slate-700 dark:text-slate-300">
                {activePillar.highlightQuote}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                {activePillar.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@AsiaPlastik/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-bold text-xs shadow-md transition-all"
              >
                <span>Lihat Seluruh Video di Kanal YouTube</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Selected Videos Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Dokumentasi Terkait Pilar Ini ({displayVideos.length} Video)
              </span>
              <span className="text-xs text-slate-400">Klik kartu untuk memutar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => onPlay(video)}
                  className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                        <Play className="w-4 h-4 ml-0.5 fill-white" />
                      </div>
                    </div>

                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                      {video.duration}
                    </span>
                  </div>

                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {video.categoryLabel}
                      </span>
                      <h4 className="mt-1 font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span>{video.publishedAt}</span>
                      <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:underline">
                        <span>Putar</span>
                        <Play className="w-2.5 h-2.5 fill-current" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
