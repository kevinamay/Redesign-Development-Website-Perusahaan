"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  Flame,
  Zap,
  Activity,
  CheckCircle,
  AlertTriangle,
  Layers,
  Gauge,
  FlaskConical,
  ArrowDownCircle,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { JERRYCAN_PRODUCT } from "./data";

export default function Variant4StressTestBento() {
  const [activeTest, setActiveTest] = useState<"drop" | "hydraulic" | "stack" | "chemical">("drop");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/30">
            <Activity className="w-3.5 h-3.5 text-amber-400" /> QA LAB TEST VERIFIED // CV. ASIA PLASTIK
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Uji Ketahanan Fisik & Laboratorium: Jerigen HDPE 20L
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Teruji melalui 4 simulasi kondisi ekstrem pabrik sesuai protokol sertifikasi keselamatan UN Packaging Dangerous Goods.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs">
          <div className="text-center px-2">
            <span className="text-[10px] text-slate-400 uppercase font-mono block">Drop Height</span>
            <strong className="text-lg font-black text-amber-400">1.8 M</strong>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="text-center px-2">
            <span className="text-[10px] text-slate-400 uppercase font-mono block">Max Load</span>
            <strong className="text-lg font-black text-emerald-400">350 KG</strong>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="text-center px-2">
            <span className="text-[10px] text-slate-400 uppercase font-mono block">Pressure</span>
            <strong className="text-lg font-black text-blue-400">250 kPa</strong>
          </div>
        </div>
      </div>

      {/* Bento Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Bento Card 1: Central Specimen Stage (Span 3 on lg, Row span 2) */}
        <div className="lg:col-span-3 rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              SPECIMEN: UN-PACKAGING BATCH
            </span>
            <span className="text-blue-400 font-bold">100% VIRGIN RESIN</span>
          </div>

          {/* Photo Frame - Neutral Studio Box */}
          <div className="relative my-4 aspect-square rounded-2xl overflow-hidden border border-slate-700 bg-[#8c9197] flex items-center justify-center shadow-2xl">
            <Image
              src={JERRYCAN_PRODUCT.imagePath}
              alt="Uji Laboratorium Jerigen 20L"
              fill
              priority
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 45vw"
            />

            {/* Test Target Reticle Overlay */}
            <div className="absolute inset-4 border border-dashed border-white/30 rounded-xl pointer-events-none flex items-start justify-between p-3">
              <span className="text-[10px] font-mono bg-black/70 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/50">
                STRESS-TEST READY
              </span>
              <span className="text-[10px] font-mono bg-black/70 text-slate-300 px-2 py-0.5 rounded">
                WEIGHT: 1.150 G
              </span>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Material Composition:</span>
              <span className="font-bold text-white">High Molecular Weight HDPE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Wall Thickness Uniformity:</span>
              <span className="font-bold text-emerald-400">2.2 mm (± 0.1 mm)</span>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Interactive Test Dials Selector (Span 3 on lg) */}
        <div className="lg:col-span-3 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Gauge className="w-4 h-4 text-amber-500" />
              Pilih Pengujian Laboratorium
            </h3>
            <span className="text-xs text-slate-400 font-mono">STANDAR UN</span>
          </div>

          {/* Test Category Buttons */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTest("drop")}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTest === "drop"
                  ? "bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-950 dark:text-amber-200 ring-2 ring-amber-400"
                  : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <Zap className="w-4 h-4 text-amber-500 mb-1" />
              <span className="block">1. Uji Jatuh Bebas</span>
              <span className="text-[10px] font-normal text-slate-500">1.8 Meter (Isi Penuh)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTest("hydraulic")}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTest === "hydraulic"
                  ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-950 dark:text-blue-200 ring-2 ring-blue-400"
                  : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <ArrowDownCircle className="w-4 h-4 text-blue-500 mb-1" />
              <span className="block">2. Uji Tekanan Air</span>
              <span className="text-[10px] font-normal text-slate-500">250 kPa Hidrolik</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTest("stack")}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTest === "stack"
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 ring-2 ring-emerald-400"
                  : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-500 mb-1" />
              <span className="block">3. Beban Tumpukan</span>
              <span className="text-[10px] font-normal text-slate-500">350 kg Top Load</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTest("chemical")}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTest === "chemical"
                  ? "bg-purple-50 dark:bg-purple-950/40 border-purple-500 text-purple-950 dark:text-purple-200 ring-2 ring-purple-400"
                  : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <FlaskConical className="w-4 h-4 text-purple-500 mb-1" />
              <span className="block">4. Korosi Kimiawi</span>
              <span className="text-[10px] font-normal text-slate-500">&gt; 1.000 Jam ESCR</span>
            </button>
          </div>

          {/* Active Test Dynamic Detail Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            {activeTest === "drop" && (
              <>
                <strong className="text-amber-700 dark:text-amber-400 block font-bold">
                  Hasil Uji Jatuh Bebas (UN 6.1.5.3):
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Jerigen diisi air penuh 20 liter (total berat 21.15 kg) dan dijatuhkan dari ketinggian 1.8 meter dalam 5 orientasi benturan berbeda: jatuh tegak, jatuh terbalik bertumpu pada tutup, sudut diagonal bawah, dan sisi gagang. Hasil: <strong>Zero Leaks, Struktur Utuh Tanpa Retak</strong>.
                </p>
              </>
            )}

            {activeTest === "hydraulic" && (
              <>
                <strong className="text-blue-700 dark:text-blue-400 block font-bold">
                  Hasil Uji Tekanan Hidrolik (ASTM D4991):
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Diberi tekanan udara terkompresi internal 250 kPa selama 30 menit dalam bak air. Tutup DIN 61 dengan seal EPE foam menahan tekanan secara sempurna tanpa ada gelembung rembesan udara keluar.
                </p>
              </>
            )}

            {activeTest === "stack" && (
              <>
                <strong className="text-emerald-700 dark:text-emerald-400 block font-bold">
                  Hasil Uji Beban Tekan Statis (ISO 2234):
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Diuji dengan beban penindih statis 350 kg di atas jerigen selama 28 hari berturut-turut pada suhu ruangan 40°C. Struktur bodi dan lekukan interlocking bawah tidak melorot atau meledak.
                </p>
              </>
            )}

            {activeTest === "chemical" && (
              <>
                <strong className="text-purple-700 dark:text-purple-400 block font-bold">
                  Ketahanan Kimia & Stress Crack (ASTM D1693):
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Resin HMW-HDPE terbukti kebal terhadap zat surfaktan pekat, larutan asam sulfat, klorin, pelarut hidrokarbon, dan pestisida berkonsentrasi tinggi tanpa mengalami penggetasan polimer.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Bento Card 3: Sertifikasi Resmi (Span 3 on lg) */}
        <div className="lg:col-span-3 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">
            LEGALITAS & AKREDITASI
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Sertifikasi Standar Industri Internasional
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {JERRYCAN_PRODUCT.certifications.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bento Card 4: Sektor Aplikasi Industri (Span 3 on lg) */}
        <div className="lg:col-span-3 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">
            SEKTOR PENGGUNA TERPERCAYA
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Aplikasi Utama Lini Bisnis B2B
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {JERRYCAN_PRODUCT.applications.map((app, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <strong className="text-slate-900 dark:text-white block font-bold mb-0.5">
                  {app.industry}
                </strong>
                <span className="text-[10px] text-slate-500 line-clamp-2">{app.examples}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer Callout */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase block">
            KONTRAK PENGADAAN VOLUME BESAR (OEM/ODM)
          </span>
          <h3 className="text-lg font-bold">
            Konsultasikan Kebutuhan Wadah Kimia & Pangan Pabrik Anda
          </h3>
        </div>

        <button
          type="button"
          onClick={() => alert("Menghubungi konsultan teknis QA CV. Asia Plastik...")}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Hubungi Tim Teknis QA Pabrik</span>
        </button>
      </div>
    </div>
  );
}
