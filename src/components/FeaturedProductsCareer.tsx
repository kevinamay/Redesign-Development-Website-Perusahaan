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
} from "lucide-react";
import { companyConfig } from "@/data/companyConfig";
import { useLanguage } from "@/data/translations";
import { FEATURED_PRODUCTS } from "./featured-career-variants/types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";

/**
 * FeaturedProductsCareer
 * Komponen Terpadu Hasil Seleksi Desain Final:
 * 1. Bagian Atas: Desain 2 (Eksplorasi Produk Unggulan Terpopuler Carousel Ribbon)
 * 2. Bagian Bawah: Desain 3 (Two-Tone Split Micro-Card Loker / Karir)
 */
export default function FeaturedProductsCareer() {
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
      dimensiLabel: "Dimensi:",
      bebanStatisLabel: "Beban Statis:",
      kapasitasLabel: "Kapasitas:",
      careerEyebrow: "REKRUTMEN & TALENTA",
      careerHeading: "Peluang Karir di Industri Manufaktur",
      careerDesc:
        "Bergabunglah bersama keluarga besar Asia Plastik dalam membangun masa depan kemasan dan logistik industri Indonesia.",
      careerBtn: "Kirim Berkas Lamaran",
    },
    en: {
      heading: "Discover Our Most Demanded Industrial Products",
      subheading:
        "Swipe to explore our flagship items trusted by manufacturing, supply-chain, and retail partners nationwide.",
      allProducts: "Full Catalog",
      rfq: "Request Quote",
      dimensiLabel: "Dimensions:",
      bebanStatisLabel: "Static Load:",
      kapasitasLabel: "Capacity:",
      careerEyebrow: "CAREERS & TALENT",
      careerHeading: "Join Our Manufacturing Operations",
      careerDesc:
        "Be part of Asia Plastik dedicated workforce shaping the future of industrial containers and logistics solutions.",
      careerBtn: "Submit Application",
    },
    zh: {
      heading: "探索工业级高需求热销产品全矩阵",
      subheading:
        "左右滑动浏览受到全国各大型物流、仓储与农业客户高度认可的代表性注塑与吹塑产品。",
      allProducts: "完整产品目录",
      rfq: "询价咨询",
      dimensiLabel: "外形尺寸:",
      bebanStatisLabel: "静载负荷:",
      kapasitasLabel: "容量规格:",
      careerEyebrow: "人才与招聘",
      careerHeading: "加入亚洲塑料现代工业制造团队",
      careerDesc:
        "与我们携手共进，在现代化注塑与精密吹塑工厂共创高质量工业物流与包装产业未来。",
      careerBtn: "发送求职简历",
    },
  }[lang] || {
    heading: "Eksplorasi Produk Unggulan Terpopuler",
    subheading:
      "Geser untuk melihat rangkaian produk pilihan utama yang paling banyak dipesan oleh ribuan mitra industri di seluruh Indonesia.",
    allProducts: "Katalog Lengkap",
    rfq: "Pesan / RFQ",
    dimensiLabel: "Dimensi:",
    bebanStatisLabel: "Beban Statis:",
    kapasitasLabel: "Kapasitas:",
    careerEyebrow: "REKRUTMEN & TALENTA",
    careerHeading: "Peluang Karir di Industri Manufaktur",
    careerDesc:
      "Bergabunglah bersama keluarga besar Asia Plastik dalam membangun masa depan kemasan dan logistik industri Indonesia.",
    careerBtn: "Kirim Berkas Lamaran",
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER DENGAN TOMBOL NAVIGASI CAROUSEL (DESAIN 2)              */}
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
      {/* 2. CAROUSEL STRIP 6 PRODUK FAVORIT (DESAIN 2)                             */}
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
              <div className="relative w-full h-full max-w-[220px] max-h-[85%] flex items-center justify-center mx-auto">
                <Image
                  src={p.imagePath}
                  alt={p.title}
                  fill
                  quality={95}
                  sizes="260px"
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
                      <span className="text-slate-400">{t.dimensiLabel}</span>
                      <span className="font-semibold">{p.specs.dimensions}</span>
                    </div>
                  )}
                  {p.specs.loadStatic && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.bebanStatisLabel}</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {p.specs.loadStatic}
                      </span>
                    </div>
                  )}
                  {p.specs.capacity && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.kapasitasLabel}</span>
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
      {/* 3. LOKER DIKECILKAN: TWO-TONE SPLIT MICRO-CARD (DESAIN 3)                  */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-stretch">
        {/* Left Side: Thumbnail Handshake */}
        <div className="relative md:w-3/12 min-h-[160px] md:min-h-auto bg-slate-100 dark:bg-slate-800 shrink-0">
          <Image
            src="/images/baru/job.jpeg"
            alt="Asia Plastik Careers"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-slate-900/90 hidden md:block" />
        </div>

        {/* Right Side: Career Info & CTA */}
        <div className="md:w-9/12 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 flex-1">
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
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

