"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calculator,
  Truck,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  ShieldCheck,
  FileCheck,
  ChevronRight,
  ArrowRight,
  Info
} from "lucide-react";
import { JERRYCAN_PRODUCT } from "./data";

export default function Variant3B2BConfigurator() {
  const [quantity, setQuantity] = useState<number>(2500);
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const [capVariant, setCapVariant] = useState<"standard" | "vented">("standard");

  // Calculate pricing tier dynamically
  const getTierPrice = (qty: number) => {
    if (qty >= 10000) return 22000;
    if (qty >= 5000) return 24200;
    if (qty >= 2000) return 26000;
    return 28500;
  };

  const unitPrice = getTierPrice(quantity);
  const totalPrice = quantity * unitPrice;
  const totalPallets = Math.ceil(quantity / JERRYCAN_PRODUCT.logistics.totalPerPallet);
  const isFreeEmboss = quantity >= 2000;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            B2B PROCUREMENT ENGINE // DIRECT FACTORY
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kalkulator Order Grosir: Jerigen Plastik 20L HDPE
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Garansi Cetak Presisi ISO 9001
          </span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Product Frame with Swatches (Span 5) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-md relative overflow-hidden">
            {/* The photo on its grey background is framed inside a neutral studio presentation card */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-[#8c9197] flex items-center justify-center shadow-inner">
              <Image
                src={JERRYCAN_PRODUCT.imagePath}
                alt={JERRYCAN_PRODUCT.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              {/* Free Emboss Ribbon if active */}
              {isFreeEmboss && (
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  FREE EMBOSS LOGO AKTIF
                </div>
              )}
            </div>

            {/* Product Quick Specs Strip */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 block">Kapasitas</span>
                <strong className="text-slate-900 dark:text-white">20 Liter</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 block">Gramatur</span>
                <strong className="text-slate-900 dark:text-white">1.150 g</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 block">Standar Tutup</span>
                <strong className="text-slate-900 dark:text-white">DIN 61</strong>
              </div>
            </div>

            {/* Color Swatch Selectors */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200">Warna Bodi Jerigen:</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {JERRYCAN_PRODUCT.colorOptions[selectedColorIdx].name}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                {JERRYCAN_PRODUCT.colorOptions.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedColorIdx(i)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                      selectedColorIdx === i
                        ? "scale-110 ring-2 ring-blue-500 border-white shadow-md"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Logistics Summary Pill */}
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-3">
            <Truck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Pengiriman Langsung dari Pabrik Sidoarjo:</strong>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Armada truk siap antar ke kawasan industri SIER, PIER, Ngoro, Cikarang, Karawang, dan seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Volume Slider & Price Tiers (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold">
                SIMULASI VOLUME PEMBELIAN
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Tentukan Kuantitas Pesanan (Min. 500 Pcs)
              </h2>
            </div>

            {/* The Range Slider */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Jumlah Order:
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-blue-600 dark:text-blue-400">
                    {quantity.toLocaleString("id-ID")}
                  </span>
                  <span className="text-sm font-bold text-slate-500">Pcs</span>
                </div>
              </div>

              <input
                type="range"
                min={500}
                max={20000}
                step={250}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>500 Pcs (MOQ)</span>
                <span>5.000 Pcs</span>
                <span>10.000 Pcs</span>
                <span>20.000+ Pcs</span>
              </div>
            </div>

            {/* Pricing Matrix Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {JERRYCAN_PRODUCT.priceTiers.map((tier, idx) => {
                const isActive =
                  quantity >= tier.minQty &&
                  (!tier.maxQty || quantity <= tier.maxQty);
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <span className={`text-[10px] font-mono block ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                      {tier.minQty >= 10000 ? "≥ 10.000" : `${tier.minQty} - ${tier.maxQty}`} Pcs
                    </span>
                    <strong className="text-sm font-black block mt-0.5">
                      Rp {tier.pricePerUnit.toLocaleString("id-ID")}
                    </strong>
                    <span className={`text-[9px] block mt-1 truncate ${isActive ? "text-blue-100" : "text-slate-500"}`}>
                      {tier.leadTime}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Cap Specification Choice */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Pilihan Jenis Tutup / Cap Jerigen:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label
                  onClick={() => setCapVariant("standard")}
                  className={`p-3.5 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                    capVariant === "standard"
                      ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 ring-1 ring-blue-500"
                      : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="capType"
                    checked={capVariant === "standard"}
                    onChange={() => setCapVariant("standard")}
                    className="mt-1 text-blue-600"
                  />
                  <div>
                    <strong className="block font-bold">Tutup Segel Segi Enam (Standard)</strong>
                    <span className="text-[11px] text-slate-500 block">Liner EPE busa anti-bocor untuk cairan umum & minyak</span>
                  </div>
                </label>

                <label
                  onClick={() => setCapVariant("vented")}
                  className={`p-3.5 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                    capVariant === "vented"
                      ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 ring-1 ring-blue-500"
                      : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="capType"
                    checked={capVariant === "vented"}
                    onChange={() => setCapVariant("vented")}
                    className="mt-1 text-blue-600"
                  />
                  <div>
                    <strong className="block font-bold">Tutup Ventilasi Gas (Breather Cap)</strong>
                    <span className="text-[11px] text-slate-500 block">Membran PTFE untuk bahan kimia penghasil tekanan gas</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Calculation Summary Card */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-800 text-center sm:text-left">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Harga Satuan</span>
                  <span className="text-xl font-bold text-emerald-400">
                    Rp {unitPrice.toLocaleString("id-ID")}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Estimasi Kebutuhan Pallet</span>
                  <span className="text-xl font-bold text-blue-400">
                    {totalPallets} Pallet
                  </span>
                  <span className="text-[10px] text-slate-400 block">(64 pcs/pallet)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Total Anggaran B2B</span>
                  <span className="text-xl font-black text-amber-300">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => alert(`Mengirim data pemesanan: ${quantity} Pcs Jerigen 20L ke sales B2B...`)}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Minta Surat Penawaran Resmi (RFQ)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => alert("Mengunduh draft proforma invoice kalkulasi...")}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Unduh Proforma
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
