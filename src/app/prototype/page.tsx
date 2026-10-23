"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Layers,
  Compass,
  ArrowRight,
  Sliders,
  Check,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import ScrollVariantA from "@/components/prototype/ScrollVariantA";
import ScrollVariantB from "@/components/prototype/ScrollVariantB";
import ScrollVariantC from "@/components/prototype/ScrollVariantC";
import ScrollVariantD from "@/components/prototype/ScrollVariantD";
import { ScrollTransitionMode, ScrollSettings, DEFAULT_SCROLL_SETTINGS } from "@/components/GlobalScrollEnhancer";

const STORAGE_KEY = "ap_scroll_settings_v1";

const MODES: {
  id: ScrollTransitionMode;
  name: string;
  tag: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  timing: string;
}[] = [
  {
    id: "silk",
    name: "Silk Glide & Soft Blur",
    tag: "GAYA APPLE MINIMALIS",
    description: "Transisi vertikal 22px dengan efek optical blur-to-sharp (blur 3px ke 0). Sangat lembut, elegan, dan natural.",
    icon: Sparkles,
    timing: "cubic-bezier(0.16, 1, 0.3, 1) • 0.75s",
  },
  {
    id: "kinetic",
    name: "Kinetic Precision & Scale Lift",
    tag: "INDUSTRIAL B2B SNAPPY",
    description: "Transisi vertikal 44px dengan scale lift ekspansif (0.935 ke 1.0) & staggered cascade antar kartu. Sangat terlihat, bertenaga, dan presisi tinggi.",
    icon: Zap,
    timing: "cubic-bezier(0.2, 0.85, 0.2, 1) • 0.68s",
  },
  {
    id: "parallax",
    name: "Magnetic Parallax & Deep Fade",
    tag: "CINEMATIC LUXURY",
    description: "Transisi 38px dengan soft blur 6px dan scale-in 0.96. Memberikan ilusi kedalaman spasial yang kaya dan dramatis.",
    icon: Compass,
    timing: "cubic-bezier(0.16, 1, 0.3, 1) • 0.95s",
  },
];

const PAGES_TO_TEST = [
  { href: "/", label: "Beranda Utama", tag: "Landing Page" },
  { href: "/about", label: "Tentang Kami", tag: "Fasilitas & ISO" },
  { href: "/products", label: "Produk & Layanan", tag: "Katalog & Spek" },
  { href: "/article", label: "Berita & Artikel", tag: "Grid Artikel" },
  { href: "/faq", label: "Pusat Bantuan / FAQ", tag: "Accordions" },
  { href: "/kontak", label: "Hubungi Penjualan", tag: "Formulir & Peta" },
];

function PrototypeStudioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [settings, setSettings] = useState<ScrollSettings>(DEFAULT_SCROLL_SETTINGS);
  const [activePreviewTab, setActivePreviewTab] = useState<"sandbox" | "previewA" | "previewB" | "previewC" | "previewD">("sandbox");
  const [animKey, setAnimKey] = useState(0);

  // Initialize from storage or URL
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSettings(JSON.parse(saved));
      }
    } catch {}

    const urlMode = searchParams.get("mode") as ScrollTransitionMode;
    if (urlMode && (urlMode === "silk" || urlMode === "kinetic" || urlMode === "parallax")) {
      updateMode(urlMode);
    }
  }, [searchParams]);

  const updateMode = (newMode: ScrollTransitionMode) => {
    const updated: ScrollSettings = { ...settings, mode: newMode };
    setSettings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    document.documentElement.setAttribute("data-scroll-mode", newMode);
    window.dispatchEvent(new CustomEvent("ap-scroll-settings-change", { detail: updated }));
    setAnimKey((prev) => prev + 1);
  };


  const toggleBackToTop = () => {
    const updated: ScrollSettings = { ...settings, showBackToTop: !settings.showBackToTop };
    setSettings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    window.dispatchEvent(new CustomEvent("ap-scroll-settings-change", { detail: updated }));
  };

  const replayAnimations = () => {
    setAnimKey((prev) => prev + 1);
    const elements = document.querySelectorAll(".universal-scroll-in");
    elements.forEach((el) => {
      el.classList.remove("universal-scroll-in");
      el.classList.add("universal-scroll-init");
      setTimeout(() => {
        el.classList.add("universal-scroll-in");
        el.classList.remove("universal-scroll-init");
      }, 50);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* 1. TOP STUDIO HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white uppercase">
                  Universal Scroll Studio
                </h1>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-blue-600/30 text-blue-400 border border-blue-500/30 uppercase">
                  Active On All Pages
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Pilih mode transisi scroll di bawah ini — otomatis aktif di <strong className="text-slate-200">semua halaman website</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={replayAnimations}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all cursor-pointer border border-slate-700 shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
              <span>Putar Ulang Efek</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all shadow-md shadow-blue-600/30"
            >
              <span>Buka Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. MODE SELECTOR & CONFIGURATION BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
            PILIHAN FISIKA & GAYA TRANSISI
          </span>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Pilih Mode Transisi Scroll yang Anda Inginkan
          </h2>
        </div>

        {/* Mode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {MODES.map((m) => {
            const isSelected = settings.mode === m.id;
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => updateMode(m.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected
                    ? "bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/20 ring-2 ring-blue-500/50"
                    : "bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                      {m.tag}
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                    <h3 className="text-base font-extrabold text-white">{m.name}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{m.description}</p>
                </div>
                <div className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800/80">
                  {m.timing}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Switches & Page Testing Station */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 mb-12">
          {/* Left: Global Toggles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Fitur Tambahan Terintegrasi (Semua Halaman)
            </h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <span className="text-xs font-bold text-slate-200">
                  Universal Back-to-Top Button dengan Progress Ring
                </span>
                <input
                  type="checkbox"
                  checked={settings.showBackToTop}
                  onChange={toggleBackToTop}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Right: Quick Page Testing Buttons */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Uji Efek Transisi Scroll Ini Langsung di Halaman-Halaman Website:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {PAGES_TO_TEST.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group p-3 rounded-xl bg-slate-950/70 hover:bg-blue-600/10 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    <span>{page.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">{page.tag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SANDBOX PREVIEW (Feel the scrolling physics live) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
              LIVE INTERACTIVE PREVIEW
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Coba Scroll ke Bawah untuk Merasakan Transisi &quot;{MODES.find((m) => m.id === settings.mode)?.name}&quot;
            </h2>
          </div>

          {/* Tabs to toggle preview scope */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActivePreviewTab("sandbox")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activePreviewTab === "sandbox"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Simulasi Komponen
            </button>
            <button
              onClick={() => setActivePreviewTab("previewA")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activePreviewTab === "previewA"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Halaman Utuh (A)
            </button>
            <button
              onClick={() => setActivePreviewTab("previewB")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activePreviewTab === "previewB"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Halaman Utuh (B)
            </button>
          </div>
        </div>

        {/* Content based on tab */}
        {activePreviewTab === "sandbox" && (
          <div key={animKey} className="space-y-12">
            {/* Card 1 */}
            <div className="universal-scroll-init p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                01. DEDIKASI MANUFAKTUR PRESISI SEJAK 1985
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Teknologi Injection & Blow Moulding Modern
              </h3>
              <p className="text-slate-300 leading-relaxed text-base max-w-3xl">
                Setiap komponen dan cetakan kemasan diproduksi di bawah standar ISO 9001:2015 dengan toleransi mikro berpresisi tinggi. Perhatikan bagaimana kartu ini masuk ke layar dengan transisi mode{" "}
                <strong className="text-blue-400">{settings.mode.toUpperCase()}</strong>.
              </p>
            </div>

            {/* Card 2: 3 Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Blow Moulding 500L", desc: "Kapasitas tunggal terbesar untuk wadah kimia dan cairan industri." },
                { title: "In-House Tooling", desc: "Bengkel mold mandiri untuk kustomisasi bentuk dan efisiensi waktu." },
                { title: "Standar ISO 9001:2015", desc: "Audit kualitas berkala untuk garansi zero-defect di setiap pengiriman." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="universal-scroll-init p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-lg hover:border-blue-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Card 3: Wide Banner */}
            <div className="universal-scroll-init p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/20 shadow-2xl">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                03. JANGKAUAN DISTRIBUSI
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Melayani Lebih Dari 20+ Negara dan Ratusan Mitra Nasional
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm max-w-2xl mb-6">
                Rantai pasok logistik terintegrasi dengan pergudangan modern di Surabaya siap memenuhi kebutuhan kemasan industri Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontak"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30"
                >
                  Hubungi Tim Penjualan
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider"
                >
                  Lihat Katalog Produk
                </Link>
              </div>
            </div>
          </div>
        )}

        {activePreviewTab === "previewA" && <ScrollVariantA />}
        {activePreviewTab === "previewB" && <ScrollVariantD />}
      </section>
    </div>
  );
}

export default function PrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            <span className="font-bold text-sm tracking-wider uppercase">
              Memuat Universal Scroll Studio...
            </span>
          </div>
        </div>
      }
    >
      <PrototypeStudioContent />
    </Suspense>
  );
}
