"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Check,
  Download,
  Mail,
  ChevronRight
} from "lucide-react";
import { JERRYCAN_PRODUCT } from "./data";

export default function Variant5SwissEditorial() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-slate-900 dark:text-slate-100">
      {/* Editorial Header */}
      <div className="border-b-2 border-slate-900 dark:border-white pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            <span>CV. ASIA PLASTIK SIDOARJO</span>
            <span>/</span>
            <span>MONOGRAPH ISSUE 2026</span>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-bold">CONTAINER 01</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-slate-900 dark:text-white uppercase">
            Jerigen Industri HDPE 20L
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl font-normal leading-relaxed">
            Kajian desain struktural blow moulding: ketebalan dinding presisi 2.2 mm, geometri interlocking pallet, dan ketahanan kimia polimer berdensitas tinggi.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs font-mono text-slate-400 block uppercase">Spesifikasi Cetak</span>
          <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">AP-JRG-20HD</span>
        </div>
      </div>

      {/* Main Exhibition Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: The Architectural Matting Photo Frame (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Studio Passe-Partout Matting Container */}
          <div className="rounded-3xl bg-[#d4d8de] dark:bg-slate-800 p-6 sm:p-10 border border-slate-300 dark:border-slate-700 shadow-sm relative">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-300 pb-3 border-b border-slate-400/40 dark:border-slate-700">
              <span>PLATE NO. 01 // ARCHIVAL PHOTO</span>
              <span>NEUTRAL STUDIO LIGHTING</span>
            </div>

            {/* The Photo with its original grey background perfectly harmonious with the matte frame */}
            <div className="relative my-4 aspect-square rounded-2xl overflow-hidden border border-slate-400/60 shadow-lg bg-[#8c9197] flex items-center justify-center">
              <Image
                src={JERRYCAN_PRODUCT.imagePath}
                alt="Editorial Presentation Jerigen 20L"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-400/40 dark:border-slate-700">
              <span>DIMENSI: 290 x 240 x 385 MM</span>
              <span>BERAT BERSIH: 1.150 G</span>
            </div>
          </div>

          {/* Color Selection Palette Monograph */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="uppercase text-slate-500 font-bold">PILIHAN PIGMEN RESIN:</span>
              <span className="text-slate-900 dark:text-white font-bold">
                {JERRYCAN_PRODUCT.colorOptions[selectedColorIndex].name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {JERRYCAN_PRODUCT.colorOptions.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedColorIndex(i)}
                  className={`w-9 h-9 rounded-full border-2 transition-transform cursor-pointer ${
                    selectedColorIndex === i
                      ? "ring-2 ring-slate-900 dark:ring-white scale-110 border-white"
                      : "border-slate-300 dark:border-slate-700 opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              {JERRYCAN_PRODUCT.colorOptions[selectedColorIndex].usage}
            </p>
          </div>
        </div>

        {/* Right: Architectural Chapter Texts & Spec Indices (Span 5) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Chapter 01 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-mono text-slate-400">01</span>
              <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Geometri & Ergonomi Lini Pengisian
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l border-slate-200 dark:border-slate-800">
              Desain leher DIN 61 presisi menjamin pengisian cairan otomatis (nozzle liquid filling) berkecepatan tinggi tanpa turbulensi atau tumpahan. Gagang hollow moulding dirancang menyatu dengan distribusi berat seimbang untuk kenyamanan operator angkut manual.
            </p>
          </div>

          {/* Chapter 02 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Integritas Polimer Virgin HDPE
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l border-slate-200 dark:border-slate-800">
              Dibuat tanpa campuran bahan daur ulang (100% Virgin Grade), menghasilkan kemurnian material bebas bau yang lolos sertifikasi kontak pangan (Food Grade BPOM/FDA) serta ketahanan zat korosif asam pekat (UN Approved Group II/III).
            </p>
          </div>

          {/* Chapter 03 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Rasio Palletizing & Efisiensi Kontainer
              </h2>
            </div>
            <div className="pl-6 border-l border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Kapasitas per Pallet Standar:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">64 Jerigen (4 Layer)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Maksimum Muatan Truk Wingbox:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">1.280 Jerigen</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Kapasitas Kontainer Laut 40ft HQ:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">3.900 Jerigen</span>
              </div>
            </div>
          </div>

          {/* Executive Direct Procurement Accord */}
          <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase block">
                MINIMUM ORDER QUANTITY (MOQ)
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                  500 PCS
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Rp 28.500 / Pcs (Volume Tier Available)
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => alert("Membuka jalur negosiasi B2B executive...")}
                className="w-full py-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Ajukan Permintaan Penawaran Tender</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
