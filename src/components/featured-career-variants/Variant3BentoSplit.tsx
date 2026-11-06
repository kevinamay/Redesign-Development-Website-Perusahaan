"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, ShieldCheck, PhoneCall, ExternalLink, Award } from "lucide-react";
import { companyConfig } from "@/data/companyConfig";
import { useLanguage } from "@/data/translations";
import { FEATURED_PRODUCTS } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";

/**
 * Desain 3: Bento Grid Hierarchy + Two-Tone Split Micro-Card
 * - Produk Favorit: Bento Grid asimetris fokus Flagship Pallet + 3 kartu pendamping
 * - Loker Dikecilkan: Split micro-card two-tone elegan di bawah bento
 */
export default function Variant3BentoSplit() {
  const { lang } = useLanguage();
  const flagship = FEATURED_PRODUCTS[0]; // Pallet
  const sideProducts = FEATURED_PRODUCTS.slice(1, 4); // Keranjang, Box Lipat, Jerigen

  const t = {
    id: {
      badge: "ARSITEKTUR BENTO B2B",
      heading: "Koleksi Produk Paling Diminati Klien Korporasi",
      subheading:
        "Struktur bento dirancang untuk menyorot standar produk unggulan utama kami dengan efisiensi tata letak kelas dunia.",
      flagshipLabel: "PRODUK UTAMA TERLARIS",
      rfq: "Minta Penawaran (RFQ)",
      details: "Spesifikasi",
      careerEyebrow: "REKRUTMEN & TALENTA",
      careerHeading: "Peluang Karir di Industri Manufaktur",
      careerDesc:
        "Bergabunglah bersama keluarga besar Asia Plastik dalam membangun masa depan kemasan dan logistik industri Indonesia.",
      careerBtn: "Kirim Berkas Lamaran",
    },
    en: {
      badge: "B2B BENTO ARCHITECTURE",
      heading: "Most In-Demand Products for Enterprise Clients",
      subheading:
        "Asymmetric bento layout spotlighting our primary flagship industrial pallet alongside high-frequency logistics containers.",
      flagshipLabel: "PRIMARY B2B FLAGSHIP",
      rfq: "Request Quotation (RFQ)",
      details: "Specifications",
      careerEyebrow: "CAREERS & TALENT",
      careerHeading: "Join Our Manufacturing Operations",
      careerDesc:
        "Be part of Asia Plastik dedicated workforce shaping the future of industrial containers and logistics solutions.",
      careerBtn: "Submit Application",
    },
    zh: {
      badge: "便携模块化产品矩阵",
      heading: "面向大型企业客户的核心产品精选展示",
      subheading:
        "采用现代非对称便携盒 (Bento) 架构，深度突出重载托盘旗舰标杆，协同呈现高频周转筐与工业化工桶系列。",
      flagshipLabel: "重磅工业级旗舰标杆",
      rfq: "索取正式技术报价",
      details: "查看详情",
      careerEyebrow: "人才与招聘",
      careerHeading: "加入亚洲塑料现代工业制造团队",
      careerDesc:
        "与我们携手共进，在现代化注塑与精密吹塑工厂共创高质量工业物流与包装产业未来。",
      careerBtn: "发送求职简历",
    },
  }[lang] || {
    badge: "ARSITEKTUR BENTO B2B",
    heading: "Koleksi Produk Paling Diminati Klien Korporasi",
    subheading:
      "Struktur bento dirancang untuk menyorot standar produk unggulan utama kami dengan efisiensi tata letak kelas dunia.",
    flagshipLabel: "PRODUK UTAMA TERLARIS",
    rfq: "Minta Penawaran (RFQ)",
    details: "Spesifikasi",
    careerEyebrow: "REKRUTMEN & TALENTA",
    careerHeading: "Peluang Karir di Industri Manufaktur",
    careerDesc:
      "Bergabunglah bersama keluarga besar Asia Plastik dalam membangun masa depan kemasan dan logistik industri Indonesia.",
    careerBtn: "Kirim Berkas Lamaran",
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER                                                         */}
      {/* ========================================================================= */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-2.5">
          <Award className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.heading}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
          {t.subheading}
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. BENTO ASYMMETRIC GRID                                                  */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN: HERO BENTO FLAGSHIP (7 Cols on desktop) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header Card Flagship */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                {t.flagshipLabel}
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase">
                {flagship.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              {flagship.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
              {flagship.subtitle}
            </p>
          </div>

          {/* Foto Besar Flagship */}
          <div className="relative w-full h-64 sm:h-80 my-4 flex items-center justify-center select-none">
            <Image
              src={flagship.imagePath}
              alt={flagship.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
            />
          </div>

          {/* Specs Highlights & CTA */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Dimensi</span>
                <span className="font-bold text-slate-900 dark:text-white">{flagship.specs.dimensions}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Beban Dinamis</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{flagship.specs.loadDynamic}</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 uppercase block">Beban Statis</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{flagship.specs.loadStatic}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppProductUrl(flagship.title, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.rfq}</span>
              </a>
              <Link
                href={flagship.catalogUrl}
                className="inline-flex items-center gap-1.5 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>{t.details}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3 STACKED MINI-CARDS (5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          {sideProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Foto Produk Mini */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 p-2 shrink-0 border border-slate-100 dark:border-slate-800 select-none">
                <Image
                  src={p.imagePath}
                  alt={p.title}
                  fill
                  sizes="120px"
                  className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
                />
              </div>

              {/* Konten Ringkas */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                  {p.badge.label}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase truncate group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {p.subtitle}
                </p>

                <div className="mt-2.5 flex items-center gap-2">
                  <a
                    href={getWhatsAppProductUrl(p.title, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{t.rfq}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. LOKER DIKECILKAN: TWO-TONE SPLIT MICRO-CARD                             */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-stretch">
        {/* Left Side: Thumbnail Handshake (25% on desktop) */}
        <div className="relative md:w-3/12 min-h-[140px] md:min-h-auto bg-slate-100 dark:bg-slate-800">
          <Image
            src="/images/career-handshake.jpg"
            alt="Asia Plastik Careers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-slate-900/90 hidden md:block" />
        </div>

        {/* Right Side: Career Info & CTA (75% on desktop) */}
        <div className="md:w-9/12 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-1">
              {t.careerEyebrow}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {t.careerHeading}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mt-1 leading-relaxed">
              {t.careerDesc}
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={`mailto:${companyConfig.contact.recruitmentEmail}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-blue-600/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.careerBtn}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

