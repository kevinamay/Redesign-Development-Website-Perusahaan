"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MobileMenuPopup,
  PrototypeSwitcher,
  MenuVariant,
  VariantA,
  VariantB,
  VariantC,
} from "@/components/MobileMenuPrototypes";
import {
  Sparkles,
  Smartphone,
  Eye,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function PrototypePage() {
  const [activePopup, setActivePopup] = useState<MenuVariant | null>(null);
  const [globalVariant, setGlobalVariant] = useState<MenuVariant>("A");

  const variantsInfo = [
    {
      id: "A" as MenuVariant,
      name: "Varian A: Center Modal Popup",
      tagline: "Glassmorphic Floating Dialog (iOS / macOS Style)",
      badgeColor: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      description:
        "Popup melayang di tengah layar dengan latar belakang dimmed blur (backdrop-blur-md). Menampilkan menu vertikal dengan ikon berkotak, language switcher bar, dan kontak representatif di dalam satu kartu elegan.",
      highlights: [
        "Fokus pandangan terpusat di tengah layar",
        "Layout vertikal yang bersih & mudah dibaca",
        "Kontak email & telepon terintegrasi di bagian bawah kartu",
        "Tampilan sangat premium ala dialog modal sistem iOS",
      ],
      component: VariantA,
    },
    {
      id: "B" as MenuVariant,
      name: "Varian B: Top Dropdown Island",
      tagline: "Header-Attached Dynamic Island (SaaS Web App Style)",
      badgeColor: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
      description:
        "Popup mengambang dinamis tepat di bawah header/navbar. Menu utama dirancang dalam format Grid 2x2 yang ringkas dan cepat disentuh, ditambah banner gradient 'Konsultasi & Penawaran' yang langsung menonjol.",
      highlights: [
        "Grid 2x2: Sangat hemat ruang & minim scrolling",
        "Banner CTA 'Hubungi Penjualan' khusus bergradasi",
        "Menempel tepat di bawah header layaknya Dynamic Island",
        "Akses cepat untuk pengguna yang terburu-buru",
      ],
      component: VariantB,
    },
    {
      id: "C" as MenuVariant,
      name: "Varian C: Bottom Action Sheet",
      tagline: "Thumb-Friendly Mobile Action Sheet (Modern App Style)",
      badgeColor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
      description:
        "Popup meluncur mulus dari dasar layar (bottom sheet) lengkap dengan drag handle. Setiap menu dilengkapi baris keterangan penjelasan (hint), serta dual action buttons di bawah (WhatsApp & Telepon).",
      highlights: [
        "Paling ergonomis untuk jempol tangan satu di layar HP besar",
        "Setiap menu ada sub-deskripsi penjelas (hint)",
        "Tombol aksi cepat hijau WhatsApp & Kontak Penjualan",
        "Standar UX aplikasi mobile modern masa kini",
      ],
      component: VariantC,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1 pb-24">
        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Desain Prototype UI Popup</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Pilihan Prototype Popup Menu Navigasi
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Kami telah menyiapkan <strong>3 variasi desain popup</strong> dengan struktur, tata letak, dan interaksi yang berbeda. Anda dapat menguji langsung setiap varian untuk memilih mana yang paling cocok dan siap dijadikan <em>fix</em>.
            </p>
          </div>
        </section>

        {/* 3 Variants Comparison Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {variantsInfo.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}
                    >
                      Varian {item.id}
                    </span>
                    <button
                      onClick={() => setActivePopup(item.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Tes Popup Live</span>
                    </button>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.name}
                  </h2>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                    {item.tagline}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Karakteristik Desain:
                    </div>
                    {item.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                  <button
                    onClick={() => setActivePopup(item.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Buka Popup Varian {item.id}</span>
                  </button>

                  <Link
                    href={`/?variant=${item.id}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-all text-center"
                  >
                    <span>Coba di Halaman Utama (/?variant={item.id})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Guide */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="bg-slate-100/70 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Cara Memilih Varian yang Anda Inginkan:
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Anda dapat mengklik tombol <strong>&ldquo;Tes Popup Live&rdquo;</strong> di atas, atau menggunakan bilah melayang di bawah layar pada setiap halaman website. Cukup sebutkan pilihan Anda (misalnya: <em>&ldquo;Pilih Varian A&rdquo;</em>, <em>&ldquo;Fix Varian C&rdquo;</em>, atau kombinasi fitur), dan kami akan langsung menetapkannya sebagai menu resmi produksi!
            </p>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Live Popup Preview Dispatcher */}
      {activePopup && (
        <MobileMenuPopup
          isOpen={true}
          onClose={() => setActivePopup(null)}
          variant={activePopup}
        />
      )}

      {/* Bottom Switcher Bar */}
      <PrototypeSwitcher
        currentVariant={globalVariant}
        onSelectVariant={(v) => {
          setGlobalVariant(v);
          setActivePopup(v);
        }}
        onOpenMenu={() => setActivePopup(globalVariant)}
      />
    </div>
  );
}
