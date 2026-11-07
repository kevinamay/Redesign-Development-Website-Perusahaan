"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CONTAINER_VARIANTS_META,
  resolveContainerVariantKey,
  SAMPLE_PRODUCTS,
} from "@/components/container-variants/types";
import {
  CONTAINER_VARIANT_COMPONENTS,
  PrototypeContainerSwitcher,
} from "@/components/container-variants";
import { ArrowLeft, Layers, Eye, CheckCircle2, Shapes } from "lucide-react";

function ContainerPrototypeContent() {
  const searchParams = useSearchParams();
  const currentKey = resolveContainerVariantKey(searchParams.get("variant"));
  const [viewMode, setViewMode] = useState<"single" | "all">("single");
  const [selectedProductId, setSelectedProductId] = useState<string>("pallet-p-series");

  const activeProduct =
    SAMPLE_PRODUCTS.find((p) => p.id === selectedProductId) ||
    SAMPLE_PRODUCTS[0];

  const activeMeta =
    CONTAINER_VARIANTS_META.find((v) => v.key === currentKey) ||
    CONTAINER_VARIANTS_META[0];

  const ActiveComponent =
    CONTAINER_VARIANT_COMPONENTS[currentKey] ||
    CONTAINER_VARIANT_COMPONENTS["1"];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col pb-36">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER & PROTOTYPE LABORATORY CONTROLS                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/prototype"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Kembali ke Index Prototype"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono font-bold tracking-wider uppercase text-[11px] shadow-xs flex items-center gap-1.5">
            <Shapes className="w-3.5 h-3.5" />
            <span>LAB BENTUK CONTAINER (NON-PERSEGI PANJANG)</span>
          </span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-mono font-semibold hidden md:inline bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
            LOCAL ONLY (TIDAK DI-PUSH)
          </span>
        </div>

        {/* View Mode Toggle: Fokus 1 Desain vs Bandingkan 5 Sekaligus */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center gap-1 text-xs">
            <button
              type="button"
              onClick={() => setViewMode("single")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "single"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Fokus 1 Desain</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "all"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Bandingkan 5 Sekaligus</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. SUB-BAR: PRODUCT SAMPLE SELECTOR                                       */}
      {/* ========================================================================= */}
      <section className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Uji Coba Sampel Produk:
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {SAMPLE_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                type="button"
                onClick={() => setSelectedProductId(prod.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedProductId === prod.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                {prod.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT: RENDER VARIANT                                           */}
      {/* ========================================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {viewMode === "single" ? (
          /* ========================================================================= */
          /* MODE 1: FOKUS PADA 1 DESAIN PILIHAN DENGAN PENJELASAN LENGKAP             */
          /* ========================================================================= */
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Penjelasan Desain Aktif */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase mb-2">
                    <Shapes className="w-3.5 h-3.5" />
                    <span>DESAIN {activeMeta.num} DARI 5: {activeMeta.tag}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {activeMeta.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    {activeMeta.description}
                  </p>
                </div>
              </div>

              {/* Poin Keunggulan Bentuk Non-Persegi Panjang */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                {activeMeta.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Render Komponen Desain Terpilih */}
            <div className="py-6 flex items-center justify-center">
              <ActiveComponent product={activeProduct} />
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* MODE 2: BANDINGKAN SEMUA 5 BENTUK CONTAINER SEKALIGUS                     */
          /* ========================================================================= */
          <div className="space-y-16 animate-in fade-in duration-200">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Perbandingan 5 Bentuk Container Produk
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Setiap desain mematahkan bentuk balok persegi panjang vertikal yang kaku dengan pendekatan geometri, modularitas, atau kurva organik yang berbeda.
              </p>
            </div>

            {CONTAINER_VARIANTS_META.map((meta) => {
              const Comp =
                CONTAINER_VARIANT_COMPONENTS[meta.key] ||
                CONTAINER_VARIANT_COMPONENTS["1"];
              return (
                <section
                  key={meta.key}
                  id={`variant-${meta.key}`}
                  className="bg-white/50 dark:bg-slate-900/40 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white uppercase mr-2">
                        Desain {meta.num}
                      </span>
                      <h3 className="inline text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {meta.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {meta.description}
                      </p>
                    </div>

                    <Link
                      href={`/prototype/container?variant=${meta.key}`}
                      onClick={() => setViewMode("single")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors shrink-0"
                    >
                      <span>Fokus ke Desain Ini</span>
                      <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                    </Link>
                  </div>

                  {/* Render Variant Canvas */}
                  <div className="py-4 flex items-center justify-center">
                    <Comp product={activeProduct} />
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* Floating Interactive Switcher */}
      <PrototypeContainerSwitcher currentVariant={currentKey} />
    </div>
  );
}

export default function ContainerPrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
            <span className="font-mono text-xs">Memuat 5 Desain Container...</span>
          </div>
        </div>
      }
    >
      <ContainerPrototypeContent />
    </Suspense>
  );
}
