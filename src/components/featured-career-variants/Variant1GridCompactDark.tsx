"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, Sparkles, CheckCircle2, PhoneCall, ExternalLink } from "lucide-react";
import { companyConfig } from "@/data/companyConfig";
import { useLanguage } from "@/data/translations";
import { FEATURED_PRODUCTS } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";

/**
 * Desain 1: Clean Industrial 4-Grid + Compact Dark Slate Card
 * - Produk Favorit: 4 Grid B2B bersih, spesifikasi ringkas & badge keunggulan
 * - Loker Dikecilkan: Mini banner horizontal ramping (~130px) hemat ruang 70%
 */
export default function Variant1GridCompactDark() {
  const { lang } = useLanguage();
  const top4Products = FEATURED_PRODUCTS.slice(0, 4);

  const t = {
    id: {
      badge: "PRODUK FAVORIT & PILIHAN UTAMA",
      heading: "Produk Unggulan Paling Diminati Industri",
      subheading:
        "Rangkaian produk terlaris dengan standar ketahanan tinggi, diproduksi langsung dari pabrik resmi Asia Plastik untuk kebutuhan logistik, pergudangan, dan manufaktur.",
      viewCatalog: "Lihat Semua Katalog",
      rfq: "Minta Penawaran",
      careerEyebrow: "PELUANG KARIR",
      careerHeading: "Bergabung Bersama Tim Asia Plastik",
      careerDesc:
        "Kami membuka kesempatan bagi talenta profesional untuk berkembang di industri manufaktur & kemasan plastik modern.",
      careerBtn: "Kirim CV Sekarang",
    },
    en: {
      badge: "FEATURED & MOST POPULAR PRODUCTS",
      heading: "Top-Tier Products Preferred by Industry Leaders",
      subheading:
        "Our best-selling industrial product lineup engineered for durability, produced directly in Asia Plastik official facility for logistics, warehousing, and manufacturing.",
      viewCatalog: "Explore All Catalog",
      rfq: "Request Quotation",
      careerEyebrow: "CAREER OPPORTUNITY",
      careerHeading: "Grow Your Career with Asia Plastik",
      careerDesc:
        "We welcome talented professionals to build a thriving career in modern plastics and industrial manufacturing.",
      careerBtn: "Submit Your CV",
    },
    zh: {
      badge: "核心推荐与热销产品系列",
      heading: "备受工业与物流客户信赖的核心热销产品",
      subheading:
        "由亚洲塑料源头工厂直属制造，符合高强度工业标准与严苛卫生规范，广泛应用于大型现代化仓储、供应链与制造业。",
      viewCatalog: "查看全部产品目录",
      rfq: "索取正式报价",
      careerEyebrow: "人才招聘",
      careerHeading: "加入亚洲塑料优秀制造团队",
      careerDesc:
        "我们诚邀具备专业素养与进取精神的人才加入，共同推动现代化工业塑料制品与精密注塑产业的发展。",
      careerBtn: "立即投递简历",
    },
  }[lang] || {
    badge: "PRODUK FAVORIT & PILIHAN UTAMA",
    heading: "Produk Unggulan Paling Diminati Industri",
    subheading:
      "Rangkaian produk terlaris dengan standar ketahanan tinggi, diproduksi langsung dari pabrik resmi Asia Plastik untuk kebutuhan logistik, pergudangan, dan manufaktur.",
    viewCatalog: "Lihat Semua Katalog",
    rfq: "Minta Penawaran",
    careerEyebrow: "PELUANG KARIR",
    careerHeading: "Bergabung Bersama Tim Asia Plastik",
    careerDesc:
      "Kami membuka kesempatan bagi talenta profesional untuk berkembang di industri manufaktur & kemasan plastik modern.",
    careerBtn: "Kirim CV Sekarang",
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER: PRODUK FAVORIT                                         */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            {t.subheading}
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group shrink-0"
        >
          <span>{t.viewCatalog}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 2. GRID 4 PRODUK TERFAVORIT                                               */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {top4Products.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col overflow-hidden group"
          >
            {/* Foto Produk */}
            <div className="relative w-full h-52 bg-slate-50/80 dark:bg-slate-800/40 p-4 flex items-center justify-center border-b border-slate-100 dark:border-slate-800/80 select-none">
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50 z-10">
                {p.badge.label}
              </span>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={p.imagePath}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              </div>
            </div>

            {/* Info Konten Produk */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                  {p.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {p.subtitle}
                </p>

                {/* Highlight Spesifikasi */}
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{p.highlight}</span>
                </div>
              </div>

              {/* Action Link & RFQ WhatsApp */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={getWhatsAppProductUrl(p.title, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t.rfq}</span>
                </a>
                <Link
                  href={p.catalogUrl}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label={`Lihat ${p.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 3. LOKER DIKECILKAN (COMPACT HORIZONTAL CARD - TINGGI RAMBING ~130PX)       */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-7 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left: Mini Avatar/Thumbnail Handshake + Info */}
        <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700/80 shadow-xs hidden xs:block">
            <Image
              src="/images/career-handshake.jpg"
              alt="Asia Plastik Recruitment"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-1">
              {t.careerEyebrow}
            </span>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white">
              {t.careerHeading}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-1 leading-relaxed line-clamp-2">
              {t.careerDesc}
            </p>
          </div>
        </div>

        {/* Right: Quick Action Button & Email */}
        <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-2.5 w-full md:w-auto shrink-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800 pt-3 md:pt-0">
          <a
            href={`mailto:${companyConfig.contact.recruitmentEmail}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/25 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>{t.careerBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-70" />
          </a>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            {companyConfig.contact.recruitmentEmail}
          </span>
        </div>
      </div>
    </section>
  );
}

