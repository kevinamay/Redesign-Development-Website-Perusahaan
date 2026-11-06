"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, PhoneCall, Cpu, Users } from "lucide-react";
import { companyConfig } from "@/data/companyConfig";
import { useLanguage } from "@/data/translations";
import { FEATURED_PRODUCTS } from "./types";
import { getWhatsAppProductUrl } from "@/lib/whatsapp";

/**
 * Desain 5: Enterprise Tech Spec Matrix + Integrated Career Callout
 * - Produk Favorit: Tabel spesifikasi teknis langsung di kartu untuk pembeli B2B
 * - Loker Dikecilkan: Callout karir ramping dengan chip divisi lowongan terbuka
 */
export default function Variant5EnterpriseSpec() {
  const { lang } = useLanguage();
  const top4Products = FEATURED_PRODUCTS.slice(0, 4);

  const t = {
    id: {
      badge: "SPESIFIKASI TEKNIK & STANDAR MUTU",
      heading: "Katalog Produk Standar Manufaktur & B2B",
      subheading:
        "Tinjau data spesifikasi teknis esensial untuk kebutuhan verifikasi procurement, audit pabrik, dan rantai pasokan pergudangan.",
      rfq: "Minta Penawaran Spesifikasi",
      careerEyebrow: "REKRUTMEN & TALENTA AKTIF",
      careerHeading: "Peluang Karir Terbuka di Asia Plastik",
      careerDesc: "Membuka lowongan untuk divisi Operasional Pabrik, Quality Control, & Logistik.",
      careerBtn: "Kirim Berkas Lamaran",
      roles: ["Operator Molding", "Staff QC Presisi", "Logistik & Gudang"],
    },
    en: {
      badge: "TECHNICAL SPECIFICATIONS & QUALITY",
      heading: "Enterprise Manufacturing & B2B Product Standards",
      subheading:
        "Review essential engineering specifications designed for procurement verification, factory audits, and warehouse operations.",
      rfq: "Request Technical Quote",
      careerEyebrow: "ACTIVE RECRUITMENT",
      careerHeading: "Explore Open Career Opportunities",
      careerDesc: "Hiring for Plant Operations, Quality Control, and Supply Chain Warehousing.",
      careerBtn: "Apply Now",
      roles: ["Molding Operator", "Precision QC Staff", "Warehouse Logistics"],
    },
    zh: {
      badge: "技术规格与制造标准",
      heading: "面向大型企业采购与供应链的技术参数矩阵",
      subheading:
        "为大型工厂采购核验、质量审计与自动化立库对接提供详尽直观的关键物理规格数据。",
      rfq: "索取技术方案报价",
      careerEyebrow: "人才招募",
      careerHeading: "亚洲塑料开放岗位与职业发展机会",
      careerDesc: "常年面向注塑车间生产、精密质检与物流仓储等核心部门招纳贤才。",
      careerBtn: "投递求职申请",
      roles: ["注塑机操作员", "精密品质把控 (QC)", "立库仓储物流"],
    },
  }[lang] || {
    badge: "SPESIFIKASI TEKNIK & STANDAR MUTU",
    heading: "Katalog Produk Standar Manufaktur & B2B",
    subheading:
      "Tinjau data spesifikasi teknis esensial untuk kebutuhan verifikasi procurement, audit pabrik, dan rantai pasokan pergudangan.",
    rfq: "Minta Penawaran Spesifikasi",
    careerEyebrow: "REKRUTMEN & TALENTA AKTIF",
    careerHeading: "Peluang Karir Terbuka di Asia Plastik",
    careerDesc: "Membuka lowongan untuk divisi Operasional Pabrik, Quality Control, & Logistik.",
    careerBtn: "Kirim Berkas Lamaran",
    roles: ["Operator Molding", "Staff QC Presisi", "Logistik & Gudang"],
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER                                                         */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-2.5">
            <Cpu className="w-3.5 h-3.5" />
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
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors shrink-0 group"
        >
          <span>Katalog Spesifikasi Lengkap</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 2. SPECIFICATION MATRIX CARDS (4 ITEM)                                    */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {top4Products.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {p.category}
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wider uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {p.badge.label}
                </span>
              </div>

              <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>

              {/* Foto Produk */}
              <div className="relative w-full h-44 bg-slate-50/70 dark:bg-slate-800/30 rounded-xl p-3 flex items-center justify-center select-none border border-slate-100 dark:border-slate-800/60 my-3">
                <Image
                  src={p.imagePath}
                  alt={p.title}
                  fill
                  sizes="260px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                />
              </div>

              {/* Tabel Mini Data Spesifikasi Teknis */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800 text-[11px] space-y-1.5">
                {p.specs.dimensions && (
                  <div className="flex justify-between border-b border-slate-200/50 dark:border-slate-700/50 pb-1">
                    <span className="text-slate-400">Dimensi</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{p.specs.dimensions}</span>
                  </div>
                )}
                {p.specs.weight && (
                  <div className="flex justify-between border-b border-slate-200/50 dark:border-slate-700/50 pb-1">
                    <span className="text-slate-400">Bobot</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{p.specs.weight}</span>
                  </div>
                )}
                {p.specs.capacity && (
                  <div className="flex justify-between border-b border-slate-200/50 dark:border-slate-700/50 pb-1">
                    <span className="text-slate-400">Kapasitas</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{p.specs.capacity}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-400">Material</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{p.specs.material}</span>
                </div>
              </div>
            </div>

            {/* Action RFQ */}
            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
              <a
                href={getWhatsAppProductUrl(p.title, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.rfq}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 3. LOKER DIKECILKAN: INLINE CALLOUT DENGAN CHIP POSISI TERBUKA             */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-500/20">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                {t.careerEyebrow}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {t.careerHeading}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-2">
              {t.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                >
                  • {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800 pt-3 lg:pt-0 justify-end">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
            {companyConfig.contact.recruitmentEmail}
          </span>
          <a
            href={`mailto:${companyConfig.contact.recruitmentEmail}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.careerBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

