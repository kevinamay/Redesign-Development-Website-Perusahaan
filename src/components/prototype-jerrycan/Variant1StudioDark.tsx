"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Layers,
  Zap,
  Lock,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Download,
  PhoneCall,
  Sparkles,
  Info,
  ChevronRight,
  PackageCheck
} from "lucide-react";
import { JERRYCAN_PRODUCT } from "./data";

export default function Variant1StudioDark() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [activePin, setActivePin] = useState<number | null>(null);
  const [showSpecDrawer, setShowSpecDrawer] = useState(false);

  const pins = [
    {
      id: 1,
      title: "Tutup Segel Ratchet DIN 61",
      desc: "Tutup bersegel tamper-evident dengan liner EPE busa berdensitas tinggi untuk mencegah rembesan cairan kimia & asam pekat.",
      top: "14%",
      left: "35%",
    },
    {
      id: 2,
      title: "Gagang Angkat Terintegrasi",
      desc: "Struktur gagang hollow moulding tanpa sambungan lem/las, tahan beban angkat > 65 kg.",
      top: "17%",
      left: "58%",
    },
    {
      id: 3,
      title: "Dinding Tebal 2.2 mm Virgin HDPE",
      desc: "Dinding tebal merata menggunakan resin HMW-HDPE berkualitas tinggi, tahan benturan dan bebas retak lingkungan (ESCR).",
      top: "48%",
      left: "50%",
    },
    {
      id: 4,
      title: "Lekukan Bawah Interlocking",
      desc: "Dasar jerigen dengan pola interlocking yang mengunci tutup jerigen di bawahnya saat ditumpuk di pallet.",
      top: "84%",
      left: "48%",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-white font-sans">
      {/* Top Breadcrumb & Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <span className="text-blue-400 font-mono">CV. ASIA PLASTIK</span>
          <span>/</span>
          <span>Katalog Produk</span>
          <span>/</span>
          <span className="text-white font-semibold">Blow Moulding Container</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> UN Packaging Certified
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            Ready Stock B2B
          </span>
        </div>
      </div>

      {/* Main Studio Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Studio Photo Showcase (Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-black border border-slate-800 p-4 sm:p-8 shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow matching the grey studio lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Studio Badge Top */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                STUDIO PRODUCT PHOTOGRAPHY // UNRETOUCHED
              </span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                100% VIRGIN HDPE
              </span>
            </div>

            {/* Photo Container - Seamless integration with original studio grey background */}
            <div className="relative w-full aspect-square max-h-[540px] rounded-2xl overflow-hidden border border-slate-700/60 shadow-inner flex items-center justify-center bg-[#8d9298]">
              <Image
                src={JERRYCAN_PRODUCT.imagePath}
                alt={JERRYCAN_PRODUCT.name}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 55vw"
              />

              {/* Interactive Dimension Pins */}
              {pins.map((pin) => (
                <div
                  key={pin.id}
                  style={{ top: pin.top, left: pin.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    type="button"
                    onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                    className="relative w-7 h-7 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg border-2 border-white hover:scale-125 transition-transform cursor-pointer"
                    title={pin.title}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40 pointer-events-none" />
                  </button>

                  {/* Pin Tooltip */}
                  {activePin === pin.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-blue-500 text-xs shadow-2xl text-left z-30 animate-in fade-in zoom-in-95">
                      <div className="font-bold text-blue-300 flex items-center justify-between mb-1">
                        <span>{pin.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">#{pin.id}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">{pin.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Instruction Callout Below Image */}
            <div className="relative z-10 mt-4 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Info className="w-3.5 h-3.5" /> Klik pin biru pada foto untuk melihat detail anatomi jerigen
              </span>
              <span className="font-mono text-slate-500">{JERRYCAN_PRODUCT.dimensions.length} x {JERRYCAN_PRODUCT.dimensions.width} x {JERRYCAN_PRODUCT.dimensions.height}</span>
            </div>
          </div>

          {/* Quick Features Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {JERRYCAN_PRODUCT.features.map((feat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-center space-y-1 hover:border-slate-700 transition-colors"
              >
                <span className="text-xs font-bold text-white block line-clamp-1">{feat.title}</span>
                <span className="text-[10px] text-slate-400 block line-clamp-2">{feat.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Industrial Specifications & B2B Order Details (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" /> {JERRYCAN_PRODUCT.code} // INDUSTRIAL TIER
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {JERRYCAN_PRODUCT.name}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {JERRYCAN_PRODUCT.tagline}
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="border-r border-slate-800 pr-2">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">Volume</span>
              <strong className="text-lg font-black text-blue-400">20 LITER</strong>
              <span className="text-[10px] text-slate-500 block">Maks. 21.5L</span>
            </div>
            <div className="border-r border-slate-800 px-2">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">Berat Bersih</span>
              <strong className="text-lg font-black text-amber-400">1.150 G</strong>
              <span className="text-[10px] text-slate-500 block">± 30 Gram</span>
            </div>
            <div className="pl-2">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">Tebal Dinding</span>
              <strong className="text-lg font-black text-emerald-400">2.2 MM</strong>
              <span className="text-[10px] text-slate-500 block">Heavy Duty</span>
            </div>
          </div>

          {/* Color Batch Option Selector */}
          <div className="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300">Pilihan Warna Batch Produksi:</span>
              <span className="text-blue-400 font-mono text-[11px]">
                {JERRYCAN_PRODUCT.colorOptions[selectedColor].name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {JERRYCAN_PRODUCT.colorOptions.map((c, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedColor(idx)}
                  className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                    selectedColor === idx
                      ? "ring-2 ring-blue-500 scale-110 border-white shadow-lg"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                >
                  {selectedColor === idx && (
                    <CheckCircle2 className={`w-4 h-4 ${idx === 0 ? "text-slate-900" : "text-white"}`} />
                  )}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              {JERRYCAN_PRODUCT.colorOptions[selectedColor].usage}
            </p>
          </div>

          {/* Specifications Table Snippet */}
          <div className="rounded-2xl border border-slate-800 overflow-hidden text-xs">
            <div className="bg-slate-800/80 px-4 py-2.5 font-bold font-mono text-slate-300 flex items-center justify-between">
              <span>PARAMETER TEKNIS BLOW MOULDING</span>
              <span className="text-blue-400">ISO 9001</span>
            </div>
            <div className="divide-y divide-slate-800 bg-slate-900/40">
              <div className="flex justify-between px-4 py-2">
                <span className="text-slate-400">Material Resin</span>
                <span className="font-semibold text-white">{JERRYCAN_PRODUCT.material}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <span className="text-slate-400">Dimensi Produk (P x L x T)</span>
                <span className="font-mono text-white">{JERRYCAN_PRODUCT.dimensions.length} x {JERRYCAN_PRODUCT.dimensions.width} x {JERRYCAN_PRODUCT.dimensions.height}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <span className="text-slate-400">Diameter Leher / Cap</span>
                <span className="font-mono text-white">{JERRYCAN_PRODUCT.dimensions.neckDiameter}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <span className="text-slate-400">Kapasitas Pallet (1200 x 1000)</span>
                <span className="font-semibold text-emerald-400">{JERRYCAN_PRODUCT.logistics.totalPerPallet} Jerigen (4 Layer)</span>
              </div>
            </div>
          </div>

          {/* B2B Pricing & Call To Action */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-900/60 space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Estimasi Harga B2B (MOQ 500 Pcs)</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-white">Rp 28.500</span>
                  <span className="text-xs text-slate-400">/ Pcs</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-600/30 text-blue-300 text-xs font-mono font-bold border border-blue-500/40">
                MOQ 500 Pcs
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => alert("Mengirim permintaan sampel produk Jerigen 20L...")}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PackageCheck className="w-4 h-4 text-blue-400" />
                <span>Minta Sampel Gratis</span>
              </button>
              <button
                type="button"
                onClick={() => alert("Menghubungkan ke tim sales B2B CV. Asia Plastik...")}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi Penawaran</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
