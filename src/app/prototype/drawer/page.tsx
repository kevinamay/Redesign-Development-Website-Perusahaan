"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Menu, ArrowLeft, Smartphone, Monitor, Sparkles } from "lucide-react";
import DrawerVariantA from "@/components/prototype/DrawerVariantA";
import DrawerVariantB from "@/components/prototype/DrawerVariantB";
import DrawerVariantC from "@/components/prototype/DrawerVariantC";
import PrototypeDrawerSwitcher from "@/components/prototype/PrototypeDrawerSwitcher";

const VARIANTS = [
  {
    id: "A",
    label: "Slide Kanan (Clean Minimalist)",
    description: "Slide dari kanan, desain bersih, modern & rapi",
  },
  {
    id: "B",
    label: "Slide Kiri (Industrial Corporate)",
    description: "Slide dari kiri, banner identitas pabrik B2B & ISO",
  },
  {
    id: "C",
    label: "Slide Kanan (Segmented Glass)",
    description: "Slide dari kanan, kartu tersegmen & frosted glassmorphism",
  },
];

function PrototypeDrawerContent() {
  const searchParams = useSearchParams();
  const currentVariant = searchParams.get("variant") ?? "A";
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between p-4 sm:p-8 font-sans relative overflow-x-hidden">
      {/* Top Bar for Prototype */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Website</span>
          </Link>
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
            PROTOTYPE / UI EXPLORATION
          </span>
        </div>

        <button
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span>{isDrawerOpen ? "Tutup Menu Drawer" : "Buka Menu Drawer"}</span>
        </button>
      </header>

      {/* Main Sandbox Area: Interactive Mobile Screen Simulator */}
      <main className="max-w-4xl mx-auto w-full my-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Eksplorasi Desain Slide-In Side Menu
          </h1>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Pilih varian di bilah bawah atau gunakan tombol panah{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-blue-400">
              ←
            </kbd>{" "}
            dan{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-blue-400">
              →
            </kbd>{" "}
            untuk membandingkan 3 variasi animasi slide dari samping.
          </p>
        </div>

        {/* 3 Variant Quick Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
          {VARIANTS.map((v) => {
            const isSelected = currentVariant === v.id;
            return (
              <Link
                key={v.id}
                href={`/prototype/drawer?variant=${v.id}`}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20"
                    : "bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                      isSelected ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {v.id}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      Aktif
                    </span>
                  )}
                </div>
                <div className="font-bold text-sm text-white">{v.label}</div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">{v.description}</div>
              </Link>
            );
          })}
        </div>

        {/* Interactive Trigger Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Menu className="w-5 h-5" />
          <span>Buka Menu Drawer Varian {currentVariant} (Animasi Slide)</span>
        </button>
      </main>

      {/* RENDER THE ACTIVE DRAWER VARIANT */}
      {currentVariant === "A" && (
        <DrawerVariantA isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      )}
      {currentVariant === "B" && (
        <DrawerVariantB isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      )}
      {currentVariant === "C" && (
        <DrawerVariantC isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      )}

      {/* Floating Bottom Switcher */}
      <PrototypeDrawerSwitcher
        variants={VARIANTS}
        currentVariant={currentVariant}
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
      />
    </div>
  );
}

export default function PrototypeDrawerPage() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Memuat prototype...</div>}>
      <PrototypeDrawerContent />
    </Suspense>
  );
}
