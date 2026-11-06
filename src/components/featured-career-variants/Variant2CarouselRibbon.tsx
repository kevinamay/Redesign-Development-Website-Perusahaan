"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Briefcase,
} from "lucide-react";
import { companyConfig } from "@/data/companyConfig";
import { useLanguage } from "@/data/translations";
import { FEATURED_PRODUCTS } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";

/**
 * Desain 2: Dynamic Carousel Showcase + Horizontal Ribbon Strip
 * - Produk Favorit: Carousel geser 6 produk unggulan dengan navigasi panah halus
 * - Loker Dikecilkan: Ribbon strip ultra-ramping (~84px) beraksen biru industri
 */
export default function Variant2CarouselRibbon() {
  const { lang } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const t = {
    id: {
      heading: "Eksplorasi Produk Unggulan Terpopuler",
      subheading:
        "Geser untuk melihat rangkaian produk pilihan utama yang paling banyak dipesan oleh ribuan mitra industri di seluruh Indonesia.",
      allProducts: "Katalog Lengkap",
      rfq: "Pesan / RFQ",
      hiringBadge: "LOWONGAN TERBUKA",
      hiringText: "Ingin berkarier di industri manufaktur & packaging modern?",
      hiringSub: "Kirimkan CV Anda ke",
      hiringBtn: "Kirim CV",
    },
    en: {
      heading: "Discover Our Most Demanded Industrial Products",
      subheading:
        "Swipe to explore our flagship items trusted by manufacturing, supply-chain, and retail partners nationwide.",
      allProducts: "Full Catalog",
      rfq: "Request Quote",
      hiringBadge: "WE'RE HIRING",
      hiringText: "Looking for a rewarding career in modern plastics manufacturing?",
      hiringSub: "Send your CV directly to",
      hiringBtn: "Submit CV",
    },
    zh: {
      heading: "探索工业级高需求热销产品全矩阵",
      subheading:
        "左右滑动浏览受到全国各大型物流、仓储与农业客户高度认可的代表性注塑与吹塑产品。",
      allProducts: "完整产品目录",
      rfq: "询价咨询",
      hiringBadge: "诚聘英才",
      hiringText: "期待在现代化塑料制造与供应链行业施展才华？",
      hiringSub: "欢迎发送简历至",
      hiringBtn: "投递简历",
    },
  }[lang] || {
    heading: "Eksplorasi Produk Unggulan Terpopuler",
    subheading:
      "Geser untuk melihat rangkaian produk pilihan utama yang paling banyak dipesan oleh ribuan mitra industri di seluruh Indonesia.",
    allProducts: "Katalog Lengkap",
    rfq: "Pesan / RFQ",
    hiringBadge: "LOWONGAN TERBUKA",
    hiringText: "Ingin berkarier di industri manufaktur & packaging modern?",
    hiringSub: "Kirimkan CV Anda ke",
    hiringBtn: "Kirim CV",
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER DENGAN TOMBOL NAVIGASI CAROUSEL                         */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Panah Navigasi Carousel & Tombol Lihat Semua */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          >
            <span>{t.allProducts}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Geser ke kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Geser ke kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CAROUSEL STRIP 6 PRODUK FAVORIT                                        */}
      {/* ========================================================================= */}
      <div
        ref={carouselRef}
        className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth w-full"
      >
        {FEATURED_PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="w-72 sm:w-80 shrink-0 snap-start bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
          >
            {/* Foto Produk */}
            <div className="relative w-full h-56 bg-slate-50/80 dark:bg-slate-800/40 p-4 flex items-center justify-center border-b border-slate-100 dark:border-slate-800/80 select-none">
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs z-10">
                {p.badge.label}
              </span>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={p.imagePath}
                  alt={p.title}
                  fill
                  sizes="320px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              </div>
            </div>

            {/* Informasi Detail */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                  {p.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {p.subtitle}
                </p>

                {/* Spesifikasi Badge Ringkas */}
                <div className="mt-3 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                  {p.specs.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dimensi:</span>
                      <span className="font-semibold">{p.specs.dimensions}</span>
                    </div>
                  )}
                  {p.specs.loadStatic && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Beban Statis:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {p.specs.loadStatic}
                      </span>
                    </div>
                  )}
                  {p.specs.capacity && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Kapasitas:</span>
                      <span className="font-semibold">{p.specs.capacity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action RFQ WhatsApp */}
              <div className="pt-2">
                <a
                  href={getWhatsAppProductUrl(p.title, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t.rfq}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 3. LOKER DIKECILKAN: HORIZONTAL RIBBON STRIP (TINGGI HANYA ~84PX)          */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white rounded-2xl border border-blue-500/30 dark:border-blue-900/40 shadow-lg shadow-blue-600/20 dark:shadow-none px-5 sm:px-8 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Briefcase Icon + Badge + Text */}
        <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/20 dark:bg-blue-600/20 border border-white/30 dark:border-blue-500/30 text-white dark:text-blue-400 flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 dark:bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-blue-100 dark:text-blue-400 uppercase">
                {t.hiringBadge}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">
              {t.hiringText}{" "}
              <span className="text-blue-100/90 dark:text-slate-400 font-normal hidden sm:inline">
                {t.hiringSub} {companyConfig.contact.recruitmentEmail}
              </span>
            </p>
          </div>
        </div>

        {/* Right: Quick Action Button */}
        <a
          href={`mailto:${companyConfig.contact.recruitmentEmail}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white px-5 sm:px-6 py-2.5 rounded-full font-bold text-xs shadow-md shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer whitespace-nowrap"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>{t.hiringBtn}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

