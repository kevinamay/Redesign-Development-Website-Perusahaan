"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Layers,
  FileCode,
  Sliders,
  Activity,
  Maximize2,
  CheckCircle2,
  Info
} from "lucide-react";
import Variant1StudioDark from "./Variant1StudioDark";
import Variant2TechnicalBlueprint from "./Variant2TechnicalBlueprint";
import Variant3B2BConfigurator from "./Variant3B2BConfigurator";
import Variant4StressTestBento from "./Variant4StressTestBento";
import Variant5SwissEditorial from "./Variant5SwissEditorial";
import NotchedTicketJerrycanShowcase from "./NotchedTicketJerrycanShowcase";
import { JerrycanVariantKey } from "./types";

interface VariantMeta {
  key: JerrycanVariantKey;
  num: number;
  label: string;
  shortLabel: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  bgIntegrationNote: string;
}

const VARIANTS: VariantMeta[] = [
  {
    key: "1",
    num: 1,
    label: "Desain 1: Studio Shadow-Box",
    shortLabel: "1. Studio Dark",
    tagline: "Panggung Dark Minimalist yang Memadukan Background Abu-Abu Studio Menjadi Kesan Mewah",
    icon: Sparkles,
    bgIntegrationNote:
      "Background abu-abu asli foto menyatu alami di dalam panggung obsidian gelap layaknya etalase fotografi produk Apple / Tesla.",
  },
  {
    key: "2",
    num: 2,
    label: "Desain 2: Technical Blueprint",
    shortLabel: "2. CAD Blueprint",
    tagline: "Lembar Spesifikasi CAD & Standar B2B dengan Callout Dimensi Presisi",
    icon: FileCode,
    bgIntegrationNote:
      "Foto berlatar abu-abu diposisikan sebagai 'Physical Production Sample' lengkap dengan garis ukur ortografis dan matriks toleransi.",
  },
  {
    key: "3",
    num: 3,
    label: "Desain 3: B2B Tier Configurator",
    shortLabel: "3. B2B Configurator",
    tagline: "Kalkulator Order Grosir Interaktif dengan Slider Kuantitas & Pilihan Tutup",
    icon: Sliders,
    bgIntegrationNote:
      "Foto berlatar abu-abu dibingkai dalam kartu studio soft-neutral yang harmonis dengan palet e-commerce B2B modern.",
  },
  {
    key: "4",
    num: 4,
    label: "Desain 4: Stress-Test Bento",
    shortLabel: "4. Stress-Test Bento",
    tagline: "Dashboard Bento Grid Menampilkan Uji Ketahanan Lab (Drop Test, Pressure, Stacking)",
    icon: Activity,
    bgIntegrationNote:
      "Foto diletakkan di pusat Bento Box bertema ruang uji laboratorium dengan reticle indikator ketahanan benturan.",
  },
  {
    key: "5",
    num: 5,
    label: "Desain 5: Swiss Editorial",
    shortLabel: "5. Swiss Editorial",
    tagline: "Monograf Katalog Elegan Terinspirasi Desain Tipografi Swiss & Braun",
    icon: Layers,
    bgIntegrationNote:
      "Merayakan latar abu-abu foto dengan passe-partout museum matting hangat, nomor bab editorial (01-03), dan tipografi berwibawa.",
  },
  {
    key: "6",
    num: 6,
    label: "Desain 6: Notched Spec-Ticket",
    shortLabel: "6. Notched Ticket",
    tagline: "Format Kartu Tiket Berlekuk Minimalis (Foto Pas Persegi / Tonal Bleed / Dark)",
    icon: Layers,
    bgIntegrationNote:
      "Format kartu fisik voucher/tiket industri minimalis dengan opsi Tonal Bleed dan Dark Mode.",
  },
];

export default function JerrycanPrototypeSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlParam = searchParams.get("variant") as JerrycanVariantKey | null;
  const initialVariant = urlParam && ["1", "2", "3", "4", "5", "6"].includes(urlParam) ? urlParam : "1";

  const [activeVariant, setActiveVariant] = useState<JerrycanVariantKey>(initialVariant);

  const handleSelectVariant = useCallback(
    (key: JerrycanVariantKey) => {
      setActiveVariant(key);
      const params = new URLSearchParams(searchParams.toString());
      params.set("variant", key);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Keyboard navigation (← and →)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      const currentIdx = VARIANTS.findIndex((v) => v.key === activeVariant);
      if (e.key === "ArrowLeft") {
        const prevIdx = currentIdx > 0 ? currentIdx - 1 : VARIANTS.length - 1;
        handleSelectVariant(VARIANTS[prevIdx].key);
      } else if (e.key === "ArrowRight") {
        const nextIdx = currentIdx < VARIANTS.length - 1 ? currentIdx + 1 : 0;
        handleSelectVariant(VARIANTS[nextIdx].key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVariant, handleSelectVariant]);

  const currentMeta = VARIANTS.find((v) => v.key === activeVariant) || VARIANTS[0];
  const currentIdx = VARIANTS.findIndex((v) => v.key === activeVariant);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors pb-28">
      {/* Top Fixed Control Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            {/* Left Context Link */}
            <div className="flex items-center gap-3">
              <Link
                href="/prototype"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Lab Showcase</span>
              </Link>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Eksplorasi Foto Asli (No Remove BG)
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-300 dark:border-emerald-800">
                    5 Pilihan Desain
                  </span>
                </div>
                <h1 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  Jerigen Plastik Industri HDPE 20L
                </h1>
              </div>
            </div>

            {/* Direct Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {VARIANTS.map((v) => {
                const Icon = v.icon;
                const isSelected = activeVariant === v.key;
                return (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => handleSelectVariant(v.key)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-500"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{v.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Concept Briefing Sub-Bar */}
        <div className="bg-slate-100/90 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800/80 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white">
                {currentMeta.label}:
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {currentMeta.tagline}
              </span>
            </div>
            <div className="text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 shrink-0 font-medium">
              <Info className="w-3.5 h-3.5" />
              <span>{currentMeta.bgIntegrationNote}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Active Variant Render */}
      <main className="py-6 transition-all duration-300">
        {activeVariant === "1" && <Variant1StudioDark />}
        {activeVariant === "2" && <Variant2TechnicalBlueprint />}
        {activeVariant === "3" && <Variant3B2BConfigurator />}
        {activeVariant === "4" && <Variant4StressTestBento />}
        {activeVariant === "5" && <Variant5SwissEditorial />}
        {activeVariant === "6" && <NotchedTicketJerrycanShowcase isStandalone={false} />}
      </main>

      {/* Floating Bottom Navigator Bar (Per UI.md Prototype Standards) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-slate-900/95 backdrop-blur-md text-white px-4 sm:px-6 py-3 rounded-full shadow-2xl border border-slate-700/80 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5">
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => {
              const prevIdx = currentIdx > 0 ? currentIdx - 1 : VARIANTS.length - 1;
              handleSelectVariant(VARIANTS[prevIdx].key);
            }}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Desain Sebelumnya (Panah Kiri ←)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Quick Numbered Pills */}
          <div className="flex items-center gap-1.5">
            {VARIANTS.map((v) => (
              <button
                key={v.key}
                type="button"
                onClick={() => handleSelectVariant(v.key)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                  activeVariant === v.key
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/50 scale-110"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {v.num}
              </button>
            ))}
          </div>

          {/* Active Label */}
          <div className="hidden sm:block text-xs font-bold text-slate-200 border-l border-slate-700 pl-3">
            {currentMeta.label}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => {
              const nextIdx = currentIdx < VARIANTS.length - 1 ? currentIdx + 1 : 0;
              handleSelectVariant(VARIANTS[nextIdx].key);
            }}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Desain Berikutnya (Panah Kanan →)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
