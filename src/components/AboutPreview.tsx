"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function AboutPreview() {
  const { lang } = useLanguage();

  // Multilingual tab data & content specifications
  const content = {
    id: {
      readMore: "SELENGKAPNYA",
      tabs: [
        {
          id: "tentang-kami",
          step: "01",
          navTitle: "Tentang Kami",
          navSubtitle: "Dedikasi Manufaktur Sejak 1985",
          title: "Pionir Manufaktur Plastik Sejak 1985",
          description:
            "Asia Plastik adalah perusahaan manufaktur kemasan plastik yang mengkhususkan diri pada bidang injection dan blow molding sejak tahun 1985. Dengan komitmen presisi dan efisiensi tinggi, kami menjadi mitra strategis ratusan industri terkemuka nasional.",
          image: "/images/assets/about-1.webp",
          imageAlt: "Fasilitas Produksi Manufaktur Asia Plastik",
          imageTag: "Pabrik Produksi Modern • Skala Massal",
        },
        {
          id: "sertifikat-iso",
          step: "02",
          navTitle: "Sertifikat ISO",
          navSubtitle: "Standar Mutu ISO 9001:2015",
          title: "Sertifikasi Standar Mutu ISO 9001:2015",
          description:
            "Sejak tahun 2005 Asia Plastik berhasil meraih ISO 9001:2000 yang kini telah dikembangkan menjadi ISO 9001:2015. Seluruh rantai operasional dijalankan melalui inspeksi toleransi ketat guna memastikan zero-defect.",
          image: "/images/assets/iso-bg.webp",
          imageAlt: "Fasilitas Bangunan dan Sertifikasi ISO Asia Plastik",
          imageTag: "Terakreditasi ISO 9001:2015 • Audit Berkala",
        },
        {
          id: "visi-nilai",
          step: "03",
          navTitle: "Visi & Nilai",
          navSubtitle: "Inovasi & Komitmen Berkelanjutan",
          title: "Visi & Prinsip Nilai Perusahaan",
          description:
            "Visi & Nilai: Menjadi perusahaan manufaktur plastik terkemuka secara nasional dan internasional dengan menyediakan kemasan yang inovatif, ramah lingkungan, dan andal demi kepuasan mitra bisnis.",
          image: "/images/assets/visi.webp",
          imageAlt: "Visi dan Nilai Mutu Asia Plastik",
          imageTag: "Inovasi Berkelanjutan • Integritas Kemitraan",
        },
      ],
    },
    en: {
      readMore: "LEARN MORE",
      tabs: [
        {
          id: "about-us",
          step: "01",
          navTitle: "About Us",
          navSubtitle: "Manufacturing Legacy Since 1985",
          title: "Pioneering Plastic Manufacturing Since 1985",
          description:
            "Asia Plastik specializes in precision injection and blow molding packaging since 1985. Through dedicated craftsmanship and continuous engineering advances, we remain the trusted supplier to top national industries.",
          image: "/images/assets/about-1.webp",
          imageAlt: "Asia Plastik Production Plant",
          imageTag: "Advanced Manufacturing Plant • Mass Scale",
        },
        {
          id: "iso-cert",
          step: "02",
          navTitle: "ISO Certification",
          navSubtitle: "ISO 9001:2015 Quality Standard",
          title: "ISO 9001:2015 Quality Certification",
          description:
            "Since 2005, Asia Plastik achieved ISO 9001:2000 which has evolved into ISO 9001:2015 compliance. Every production process adheres to stringent tolerance audits ensuring zero defects.",
          image: "/images/assets/iso-bg.webp",
          imageAlt: "Asia Plastik ISO Certified Facility",
          imageTag: "ISO 9001:2015 Certified • Periodic Audits",
        },
        {
          id: "vision-values",
          step: "03",
          navTitle: "Vision & Values",
          navSubtitle: "Innovation & Sustainable Growth",
          title: "Corporate Vision & Core Values",
          description:
            "Vision & Values: To stand as a premier plastic manufacturing enterprise nationally and globally by delivering innovative, eco-conscious, and durable packaging tailored for client satisfaction.",
          image: "/images/assets/visi.webp",
          imageAlt: "Corporate Values Asia Plastik",
          imageTag: "Eco Innovation • Trusted Partnership",
        },
      ],
    },
    zh: {
      readMore: "了解更多",
      tabs: [
        {
          id: "about-us",
          step: "01",
          navTitle: "关于我们",
          navSubtitle: "始创于1985年",
          title: "深耕塑料制造数十载（始创于1985年）",
          description:
            "亚洲塑料自1985年成立至今，专业从事注塑与吹塑塑料包装制造。凭借高精密度与高效产能，成为众多国家重点企业的长期信赖合作伙伴。",
          image: "/images/assets/about-1.webp",
          imageAlt: "亚洲塑料现代化生产基地",
          imageTag: "现代化制造车间 • 规模化量产",
        },
        {
          id: "iso-cert",
          step: "02",
          navTitle: "ISO 认证",
          navSubtitle: "ISO 9001:2015 质量体系",
          title: "ISO 9001:2015 国际质量体系认证",
          description:
            "自2005年荣获 ISO 9001:2000 起，现已全面推行 ISO 9001:2015 标准。全流程微公差严格检验，确保零缺陷交付。",
          image: "/images/assets/iso-bg.webp",
          imageAlt: "ISO 认证现代化厂房",
          imageTag: "ISO 9001:2015 权威认证 • 定期审核",
        },
        {
          id: "vision-values",
          step: "03",
          navTitle: "愿景与核心价值",
          navSubtitle: "创新驱动与可持续发展",
          title: "企业愿景与核心价值观",
          description:
            "愿景与价值观：通过持续技术革新与环保制造，成为国内外领先且深受信赖的塑料包装标杆企业，为合作伙伴创造长久价值。",
          image: "/images/assets/visi.webp",
          imageAlt: "企业愿景与发展理念",
          imageTag: "绿色环保创新 • 诚信稳健合作",
        },
      ],
    },
  };

  const t = content[lang] || content.id;

  return (
    <section
      id="about"
      className="relative w-full max-w-[100vw] overflow-hidden bg-slate-50/70 dark:bg-slate-950 py-20 sm:py-24 border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. SECTION LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col space-y-10">
          {/* Interactive Steps List: 3 Clean Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Company Overview Features">
            {t.tabs.map((tab) => (
              <Link
                key={tab.id}
                href="/about"
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Step Number Indicator */}
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-5">
                    {tab.step}
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {tab.navTitle}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {tab.navSubtitle}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>Lihat Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Action Button: SELENGKAPNYA */}
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-sm font-semibold transition-all duration-300 group shadow-xs cursor-pointer"
            >
              <span>{t.readMore}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
