"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Download,
  CheckCircle,
  Sliders,
  Layers,
  Shield,
  Box,
  Truck,
  Maximize,
  HelpCircle,
  ChevronRight,
  Calculator
} from "lucide-react";
import { JERRYCAN_PRODUCT } from "./data";

export default function Variant2TechnicalBlueprint() {
  const [activeTab, setActiveTab] = useState<"cad" | "pallet" | "cert">("cad");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-mono text-slate-800 dark:text-slate-100">
      {/* Blueprint Header */}
      <div className="bg-slate-900 text-cyan-400 p-5 rounded-2xl border border-cyan-800/60 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300/80 mb-1">
            <span>DOC-NO: AP-SPEC-JRG20-REV4</span>
            <span>•</span>
            <span>BLOW MOULDING DIVISION</span>
            <span>•</span>
            <span className="text-emerald-400">UN CERTIFIED</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
            TECHNICAL CAD SPEC SHEET: JERIGEN HDPE 20L HEAVY DUTY
          </h1>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto text-xs">
          <button
            type="button"
            onClick={() => alert("Mengunduh lembar spesifikasi CAD PDF...")}
            className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Unduh CAD Spec (PDF)</span>
          </button>
        </div>
      </div>

      {/* Blueprint Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Technical Orthographic Frame with Image (Span 6) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl bg-slate-950 border-2 border-dashed border-cyan-800/80 p-6 shadow-2xl relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#06b6d4 1px, transparent 1px), radial-gradient(#06b6d4 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                backgroundPosition: "0 0, 12px 12px",
              }}
            />

            {/* Top Blueprint Stamp */}
            <div className="relative z-10 flex items-center justify-between text-xs text-cyan-400 pb-3 border-b border-cyan-900/60 font-mono">
              <span>PHYSICAL SAMPLE: LOT #AP-2026-B08</span>
              <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                SCALE: 1:1 INDUSTRIAL CAD
              </span>
            </div>

            {/* The Photo Container with Dimensional Callouts */}
            <div className="relative my-4 aspect-square rounded-2xl overflow-hidden border border-cyan-900 bg-[#8c9197] flex items-center justify-center shadow-inner">
              <Image
                src={JERRYCAN_PRODUCT.imagePath}
                alt="CAD Physical Sample Jerigen 20L"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dimensional Callout Lines Overlay */}
              {/* Height Callout (Vertical Line) */}
              <div className="absolute right-4 top-10 bottom-10 w-px bg-cyan-400 flex flex-col justify-between items-center pointer-events-none">
                <span className="w-2 h-px bg-cyan-400" />
                <span className="bg-slate-950/90 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded border border-cyan-600 rotate-90 -translate-x-1 whitespace-nowrap">
                  H: 385 mm
                </span>
                <span className="w-2 h-px bg-cyan-400" />
              </div>

              {/* Width Callout (Horizontal Line) */}
              <div className="absolute bottom-4 left-10 right-10 h-px bg-cyan-400 flex justify-between items-center pointer-events-none">
                <span className="h-2 w-px bg-cyan-400" />
                <span className="bg-slate-950/90 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded border border-cyan-600 whitespace-nowrap">
                  W: 290 mm x D: 240 mm
                </span>
                <span className="h-2 w-px bg-cyan-400" />
              </div>

              {/* Neck Callout */}
              <div className="absolute top-8 left-1/4 -translate-x-1/2 bg-slate-950/90 text-cyan-300 text-[10px] px-2 py-0.5 rounded border border-cyan-600 pointer-events-none flex items-center gap-1">
                <span>Leher: Ø 55 mm (DIN 61)</span>
              </div>
            </div>

            {/* Bottom Orthographic Notes */}
            <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-cyan-900/60 text-xs text-slate-300 font-mono">
              <div>
                <span className="text-[10px] text-cyan-400 block uppercase">Gramatur Standar</span>
                <strong className="text-white font-bold">1.150 Gram (Heavy Duty)</strong>
              </div>
              <div>
                <span className="text-[10px] text-cyan-400 block uppercase">Kapasitas Maksimal</span>
                <strong className="text-white font-bold">21.5 Liter (Brimful)</strong>
              </div>
            </div>
          </div>

          {/* Quick Technical Guarantee Pills */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 block">Toleransi Ukuran</span>
              <strong className="text-slate-900 dark:text-white">± 0.5 mm</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 block">Beban Tekan Puncak</span>
              <strong className="text-slate-900 dark:text-white">350 kg</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 block">Suhu Kerja</span>
              <strong className="text-slate-900 dark:text-white">-20°C s/d +80°C</strong>
            </div>
          </div>
        </div>

        {/* Right Column: CAD Tables, Pallet Logistics & Tolerance (Span 6) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Engineering Tab Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab("cad")}
              className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === "cad"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              1. Parameter CAD Mesin
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("pallet")}
              className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === "pallet"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              2. Logistik Palletizing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cert")}
              className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === "cert"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              3. Uji Mutu UN Standar
            </button>
          </div>

          {/* TAB 1: PARAMETER CAD */}
          {activeTab === "cad" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-600" />
                Matriks Parameter Cetak Moulding
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Tipe Mesin Manufaktur</span>
                  <span className="font-bold text-slate-900 dark:text-white">Continuous Extrusion Blow Moulding</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Spesifikasi Resin Polimer</span>
                  <span className="font-bold text-slate-900 dark:text-white">High Molecular Weight HDPE (MFI: 0.05 g/10min)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Ketebalan Dinding Rata-Rata</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">2.2 mm (Sudut Penguat 2.8 mm)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Sistem Pengunci Tutup (Cap Thread)</span>
                  <span className="font-bold text-slate-900 dark:text-white">DIN 61 Screw Thread dengan Ratchet Ring Tamper-Evident</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Opsi Ventilasi Udara (Vent Cap)</span>
                  <span className="font-bold text-slate-900 dark:text-white">Tersedia Membran PTFE Anti-Off-Gassing (Bahan Bergas)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LOGISTIK PALLET */}
          {activeTab === "pallet" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Truck className="w-4 h-4 text-cyan-600" />
                Kalkulasi Muatan Pallet & Kontainer Ekspor
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 block">Susunan per Layer</span>
                  <strong className="text-base font-bold text-slate-900 dark:text-white">16 Jerigen / Layer</strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Pola 4 x 4 di Pallet 1200x1000mm</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 block">Total per Pallet (4 Layer)</span>
                  <strong className="text-base font-bold text-emerald-600 dark:text-emerald-400">64 Jerigen</strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Tinggi Total Tumpukan: 1.54 Meter</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 block">Kapasitas Truk CDD</span>
                  <strong className="text-base font-bold text-slate-900 dark:text-white">400 - 550 Jerigen</strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Pengiriman Jabodetabek & Jatim</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 block">Kontainer Ekspor 40ft HQ</span>
                  <strong className="text-base font-bold text-slate-900 dark:text-white">3.900 Jerigen</strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Kemasan Siap Ekspor Antarnegara</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: UJI MUTU UN */}
          {activeTab === "cert" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-600" />
                Sertifikasi Kelayakan Bahan Berbahaya (UN B3)
              </h3>

              <div className="space-y-2 text-xs">
                {JERRYCAN_PRODUCT.testMetrics.map((tm, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">{tm.label}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{tm.standard}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-cyan-600 dark:text-cyan-400 block">{tm.value}</span>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{tm.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Technical RFQ Box */}
          <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-800/60 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">
                  Permintaan Penawaran Tender / Spesifikasi Custom
                </span>
                <span className="text-[11px] text-slate-400">
                  Dapatkan lembar perhitungan gramatur khusus dan toleransi cetak resmi pabrik.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert("Membuka form RFQ teknis B2B CV. Asia Plastik...")}
              className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-600/30 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Hitung Estimasi Harga & Kebutuhan Pallet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
