"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CAREER_VARIANTS_META,
  CareerVariantKey,
  resolveCareerVariantKey,
} from "@/components/featured-career-variants/types";
import {
  CAREER_VARIANT_COMPONENTS,
  PrototypeCareerSwitcher,
} from "@/components/featured-career-variants";
import { Sparkles, ArrowLeft } from "lucide-react";

function CareerPrototypeContent() {
  const searchParams = useSearchParams();
  const currentKey = resolveCareerVariantKey(searchParams.get("variant"));
  const [viewMode, setViewMode] = useState<"single" | "all">("single");

  const activeMeta =
    CAREER_VARIANTS_META.find((v) => v.key === currentKey) ||
    CAREER_VARIANTS_META[0];

  const renderVariant = (key: CareerVariantKey) => {
    const Component = CAREER_VARIANT_COMPONENTS[key] || CAREER_VARIANT_COMPONENTS["1"];
    return <Component />;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col pb-36">
      {/* Top Prototype Laboratory Banner */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Kembali ke Beranda"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono font-bold tracking-wider uppercase text-[11px] shadow-xs">
            PROTOTYPE LAB
          </span>
          <div className="flex flex-col">
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Eksplorasi Desain Produk Favorit + Loker Compact</span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="text-blue-600 dark:text-cyan-400 font-mono text-xs hidden sm:inline">
                {activeMeta.name}
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View Mode Toggle: Single vs All */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center text-xs">
            <button
              type="button"
              onClick={() => setViewMode("single")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === "single"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Fokus 1 Desain
            </button>
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === "all"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Bandingkan Semua (5)
            </button>
          </div>

          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hidden md:inline"
          >
            Tampilkan di Halaman Utama →
          </Link>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {viewMode === "single" ? (
          <div>
            {/* Context Info Box */}
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-black">
                  {activeMeta.number}
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {activeMeta.name}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {activeMeta.shortDesc}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 shrink-0">
                {activeMeta.tag}
              </span>
            </div>

            {/* Rendered Single Active Variant */}
            {renderVariant(currentKey)}
          </div>
        ) : (
          /* Stacked View of All 5 Variants for Direct Comparison */
          <div className="space-y-20">
            {CAREER_VARIANTS_META.map((meta) => (
              <div
                key={meta.key}
                id={`variant-${meta.key}`}
                className="pt-8 border-t-2 border-dashed border-slate-200 dark:border-slate-800 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                      {meta.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {meta.name}
                      </h3>
                      <p className="text-xs text-slate-500">{meta.shortDesc}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {meta.tag}
                  </span>
                </div>

                <div className="bg-slate-100/50 dark:bg-slate-900/30 rounded-3xl p-2 sm:p-4 border border-slate-200/60 dark:border-slate-800/60">
                  {renderVariant(meta.key)}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Bottom Switcher */}
      <PrototypeCareerSwitcher currentVariant={currentKey} />
    </div>
  );
}

export default function CareerPrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600 animate-spin" />
            <span>Memuat Prototype Lab Produk Favorit & Loker...</span>
          </div>
        </div>
      }
    >
      <CareerPrototypeContent />
    </Suspense>
  );
}

