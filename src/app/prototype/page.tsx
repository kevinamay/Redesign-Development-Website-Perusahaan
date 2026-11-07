import React from "react";
import Link from "next/link";
import { Sparkles, Layers, Video, ArrowRight, Shapes } from "lucide-react";

export default function PrototypeIndexPage() {
  const labs = [
    {
      title: "Bentuk Container Kartu Produk (5 Desain Non-Persegi)",
      desc: "Eksplorasi 5 alternatif bentuk container non-persegi panjang (Kapsul Horizontal, Dual-Pod Terpisah, Chamfer Teknik, Tiket Berlekuk, Pebble Organik).",
      href: "/prototype/container",
      badge: "Desain Baru (Local)",
      icon: Shapes,
      highlight: true,
    },
    {
      title: "Desain Halaman Produk (7 Pilihan Mode Terang)",
      desc: "Eksplorasi 7 konsep radikal desain kartu produk Pallet Industri & kemasan B2B dengan switcher interaktif (Default Mode Terang).",
      href: "/prototype/products",
      badge: "Katalog Lab",
      icon: Layers,
      highlight: false,
    },
    {
      title: "Eksplorasi Video Showcase",
      desc: "Prototipe format presentasi video resmi pabrik & profil Youtube Asia Plastik.",
      href: "/prototype/video",
      badge: "Video Lab",
      icon: Video,
      highlight: false,
    },
    {
      title: "Hero Section Variations",
      desc: "Eksplorasi alternatif tata letak banner utama beranda website.",
      href: "/prototype/hero",
      badge: "Hero Lab",
      icon: Sparkles,
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-6 sm:p-12 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10">
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 font-mono text-xs font-bold border border-blue-200 dark:border-blue-500/30 uppercase tracking-widest inline-block mb-3">
            CV. ASIA PLASTIK // LAB
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-3 text-slate-900 dark:text-white">
            Prototype Showcase
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Pusat eksplorasi desain throwaway lokal untuk pengujian variasi antarmuka dan interaksi pengguna (Default Mode Terang).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {labs.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <Link
                key={i}
                href={lab.href}
                className={`p-6 rounded-3xl border transition-all flex items-center justify-between group cursor-pointer ${
                  lab.highlight
                    ? "bg-white dark:bg-slate-900 border-blue-300 dark:border-blue-500/40 shadow-lg shadow-blue-500/5 hover:border-blue-500 hover:shadow-xl"
                    : "bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-2xl ${
                      lab.highlight
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                        {lab.badge}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {lab.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                      {lab.desc}
                    </p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-white transition-all shrink-0 ml-4 shadow-xs">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          <Link href="/products" className="hover:text-slate-800 dark:hover:text-slate-300 underline font-semibold">
            Kembali ke Katalog Produk Utama (/products)
          </Link>
        </div>
      </div>
    </div>
  );
}
