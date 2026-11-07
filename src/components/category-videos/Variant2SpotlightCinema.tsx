"use client";

import React, { useState } from "react";
import { VideoVariantProps } from "./types";
import { Sparkles, CheckCircle, Video } from "lucide-react";

/**
 * Desain 2: Spotlight Cinema & Playlist Reel
 * Menampilkan 1 panggung video utama berukuran sinematik di bagian atas,
 * disertai daftar playlist thumbnail video pengujian di bawahnya.
 */
export default function Variant2SpotlightCinema({ data }: VideoVariantProps) {
  const { heading, subheading, videos } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = videos[activeIndex] || videos[0];

  return (
    <section className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600/30 text-blue-400 border border-blue-500/30 mb-2">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>SPOTLIGHT REEL • UJI KETAHANAN RESMI</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {subheading}
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 shrink-0">
          Klip {activeIndex + 1} dari {videos.length}
        </div>
      </div>

      {/* Main Theater Stage */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video sm:aspect-[21/9] max-h-[460px] flex items-center justify-center border border-slate-800 shadow-2xl">
        <video
          key={activeVideo.videoUrl}
          controls
          autoPlay={false}
          playsInline
          className="w-full h-full object-contain"
          title={activeVideo.title}
        >
          <source src={activeVideo.videoUrl} type="video/mp4" />
          Browser Anda tidak mendukung tag video.
        </video>
      </div>

      {/* Title & Description of Active Video */}
      <div className="bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase">
              {activeVideo.tag || "PENGUJIAN RESMI"}
            </span>
            {activeVideo.duration && (
              <span className="text-[10px] font-mono text-slate-400">
                Durasi: {activeVideo.duration}
              </span>
            )}
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {activeVideo.title}
          </h4>
          {activeVideo.description && (
            <p className="text-xs text-slate-400 mt-1">
              {activeVideo.description}
            </p>
          )}
        </div>
      </div>

      {/* Playlist Selector Buttons below Theater */}
      {videos.length > 1 && (
        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Pilih Video Pengujian Lainnya:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {videos.map((vid, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={vid.id || idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-600/20"
                      : "bg-slate-800/40 hover:bg-slate-800 border-slate-700/70 text-slate-300 hover:text-white"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {isSelected ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Video className="w-4 h-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{vid.title}</p>
                    <p className="text-[10px] text-slate-400">
                      {vid.duration ? `${vid.duration} • ` : ""}
                      {vid.tag || `Klip ${idx + 1}`}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
