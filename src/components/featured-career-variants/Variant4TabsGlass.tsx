"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, Layers, PhoneCall, Briefcase, Tag } from "lucide-react";
import { companyConfig } from "@/data/companyConfig";
import { useLanguage } from "@/data/translations";
import { FEATURED_PRODUCTS } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";

/**
 * Desain 4: Interactive Category Tabs + Floating Glassmorphic Bar
 * - Produk Favorit: Tab kategori interaktif untuk menyaring produk favorit
 * - Loker Dikecilkan: Glassmorphic bar ultra-sleek semi-transparan (~76px)
 */
export default function Variant4TabsGlass() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  const t = {
    id: {
      badge: "KATEGORI PRODUK FAVORIT",
      heading: "Pilihan Utama Sesuai Kebutuhan Sektor Industri",
      subheading:
        "Pilih kategori untuk melihat produk-produk favorit yang paling teruji dan dipercaya di bidangnya.",
      tabs: {
        all: "Semua Favorit",
        logistics: "Pallet & Pergudangan",
        crates: "Keranjang & Box",
        containers: "Jerigen & Kemasan Cair",
      },
      rfq: "Minta Penawaran",
      viewAll: "Lihat Semua",
      careerEyebrow: "KARIR",
      careerTitle: "Peluang Karir di Industri Manufaktur Plastik Modern",
      careerCta: "Kirim CV",
    },
    en: {
      badge: "FAVORITE CATEGORIES",
      heading: "Top Picks Tailored to Industrial Sectors",
      subheading:
        "Select an industrial category to explore proven favorite products trusted across the supply chain.",
      tabs: {
        all: "All Favorites",
        logistics: "Pallets & Warehouse",
        crates: "Crates & Boxes",
        containers: "Jerrycans & Liquids",
      },
      rfq: "Request RFQ",
      viewAll: "View All",
      careerEyebrow: "CAREERS",
      careerTitle: "Build Your Professional Career with Asia Plastik",
      careerCta: "Send CV",
    },
    zh: {
      badge: "行业热门细分目录",
      heading: "按工业应用细分精选的核心热门产品",
      subheading:
        "点击分类快速浏览各行业领域采购频次最高、口碑最为卓越的标杆塑料产品。",
      tabs: {
        all: "全部热门",
        logistics: "立库重载托盘",
        crates: "工业周转筐与折叠箱",
        containers: "化工油桶与液体包装",
      },
      rfq: "获取报价",
      viewAll: "查看全部",
      careerEyebrow: "人才招聘",
      careerTitle: "期待在现代化塑料智造产业开创职业未来？",
      careerCta: "投递简历",
    },
  }[lang] || {
    badge: "KATEGORI PRODUK FAVORIT",
    heading: "Pilihan Utama Sesuai Kebutuhan Sektor Industri",
    subheading:
      "Pilih kategori untuk melihat produk-produk favorit yang paling teruji dan dipercaya di bidangnya.",
    tabs: {
      all: "Semua Favorit",
      logistics: "Pallet & Pergudangan",
      crates: "Keranjang & Box",
      containers: "Jerigen & Kemasan Cair",
    },
    rfq: "Minta Penawaran",
    viewAll: "Lihat Semua",
    careerEyebrow: "KARIR",
    careerTitle: "Peluang Karir di Industri Manufaktur Plastik Modern",
    careerCta: "Kirim CV",
  };

  const filteredProducts = FEATURED_PRODUCTS.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "logistics") return p.categoryId.includes("pallet") || p.categoryId.includes("lalu");
    if (activeTab === "crates") return p.categoryId.includes("keranjang") || p.categoryId.includes("box");
    if (activeTab === "containers") return p.categoryId.includes("jerigen") || p.categoryId.includes("botol");
    return true;
  }).slice(0, 4);

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER DENGAN TAB FILTER KATEGORI                              */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-2.5">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none shrink-0 w-full lg:w-auto">
          {[
            { key: "all", label: t.tabs.all },
            { key: "logistics", label: t.tabs.logistics },
            { key: "crates", label: t.tabs.crates },
            { key: "containers", label: t.tabs.containers },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. GRID PRODUK SESUAI TAB AKTIF                                           */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Badge Kategori */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50">
                  {p.badge.label}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {p.specs.material.split(" ")[0]}
                </span>
              </div>

              {/* Foto Produk */}
              <div className="relative w-full h-48 bg-slate-50/70 dark:bg-slate-800/30 rounded-xl p-3 flex items-center justify-center select-none border border-slate-100 dark:border-slate-800/60 mb-4">
                <Image
                  src={p.imagePath}
                  alt={p.title}
                  fill
                  sizes="260px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {p.subtitle}
              </p>
            </div>

            {/* Quick Specs & RFQ Button */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center justify-between">
                <span>Spesifikasi Utama:</span>
                <span className="font-semibold">{p.specs.dimensions || p.specs.capacity}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppProductUrl(p.title, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t.rfq}</span>
                </a>
                <Link
                  href={p.catalogUrl}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
                >
                  {t.viewAll}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 3. LOKER DIKECILKAN: FLOATING GLASSMORHPIC SLIM BAR (TINGGI ~76PX)        */}
      {/* ========================================================================= */}
      <div className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-white rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all duration-300 px-5 sm:px-8 py-3.5 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Icon & Headline */}
        <div className="flex items-center gap-3.5 w-full md:w-auto">
          <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-500/20">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block">
              {t.careerEyebrow}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              {t.careerTitle}
            </p>
          </div>
        </div>

        {/* Right: Mail and Button */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
            {companyConfig.contact.recruitmentEmail}
          </span>
          <a
            href={`mailto:${companyConfig.contact.recruitmentEmail}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-bold text-xs shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.careerCta}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

