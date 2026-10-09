"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Target,
  Factory,
  CheckCircle2,
  Cpu,
  Layers,
  Building2,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function AboutPreview() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  // Multilingual tab data & content specifications
  const content = {
    id: {
      badge: "GAMBARAN PERUSAHAAN",
      heading: "Membangun Masa Depan Industri Plastik",
      subheading:
        "Solusi manufaktur kemasan plastik presisi injection dan blow molding dengan dedikasi standar kualitas berkelas dunia.",
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
          image: "/images/assets/about-1.png",
          imageAlt: "Fasilitas Produksi Manufaktur Asia Plastik",
          imageTag: "Pabrik Produksi Modern • Skala Massal",
          badges: [
            { icon: Factory, title: "30+ Tahun Dedikasi", desc: "Spesialis Injection & Blow" },
            { icon: Cpu, title: "Otomasi Presisi", desc: "Parameter Suhu & Siklus Mikro" },
            { icon: Layers, title: "Material Food Grade", desc: "Resin Standar Industri Aman" },
          ],
        },
        {
          id: "sertifikat-iso",
          step: "02",
          navTitle: "Sertifikat ISO",
          navSubtitle: "Standar Mutu ISO 9001:2015",
          title: "Sertifikasi Standar Mutu ISO 9001:2015",
          description:
            "Sejak tahun 2005 Asia Plastik berhasil meraih ISO 9001:2000 yang kini telah dikembangkan menjadi ISO 9001:2015. Seluruh rantai operasional dijalankan melalui inspeksi toleransi ketat guna memastikan zero-defect.",
          image: "/images/assets/iso-bg.png",
          imageAlt: "Fasilitas Bangunan dan Sertifikasi ISO Asia Plastik",
          imageTag: "Terakreditasi ISO 9001:2015 • Audit Berkala",
          badges: [
            { icon: ShieldCheck, title: "Manajemen Mutu Terpadu", desc: "Sistem Terintegrasi Penuh" },
            { icon: Award, title: "Inspeksi Toleransi Ketat", desc: "Pengujian Dimensi & Tekanan" },
            { icon: CheckCircle2, title: "Audit Berkala Konsisten", desc: "Kepatuhan Regulasi Penuh" },
          ],
        },
        {
          id: "visi-nilai",
          step: "03",
          navTitle: "Visi & Nilai",
          navSubtitle: "Inovasi & Komitmen Berkelanjutan",
          title: "Visi & Prinsip Nilai Perusahaan",
          description:
            "Visi & Nilai: Menjadi perusahaan manufaktur plastik terkemuka secara nasional dan internasional dengan menyediakan kemasan yang inovatif, ramah lingkungan, dan andal demi kepuasan mitra bisnis.",
          image: "/images/assets/visi.png",
          imageAlt: "Visi dan Nilai Mutu Asia Plastik",
          imageTag: "Inovasi Berkelanjutan • Integritas Kemitraan",
          badges: [
            { icon: Target, title: "Kualitas Presisi", desc: "Konsistensi di Setiap Batch" },
            { icon: Building2, title: "Integritas Kemitraan", desc: "Transparansi & Pasokan Stabil" },
            { icon: Sparkles, title: "Inovasi Ramah Lingkungan", desc: "Efisiensi Energi & Daur Ulang" },
          ],
        },
      ],
    },
    en: {
      badge: "COMPANY OVERVIEW",
      heading: "Building the Future of Plastic Industry",
      subheading:
        "Precision injection and blow molding packaging solutions engineered to international quality standards.",
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
          image: "/images/assets/about-1.png",
          imageAlt: "Asia Plastik Production Plant",
          imageTag: "Advanced Manufacturing Plant • Mass Scale",
          badges: [
            { icon: Factory, title: "30+ Years Experience", desc: "Injection & Blow Specialist" },
            { icon: Cpu, title: "Precision Automation", desc: "Micro Cycle & Thermal Control" },
            { icon: Layers, title: "Food Grade Certified", desc: "Safe Resin Formulations" },
          ],
        },
        {
          id: "iso-cert",
          step: "02",
          navTitle: "ISO Certification",
          navSubtitle: "ISO 9001:2015 Quality Standard",
          title: "ISO 9001:2015 Quality Certification",
          description:
            "Since 2005, Asia Plastik achieved ISO 9001:2000 which has evolved into ISO 9001:2015 compliance. Every production process adheres to stringent tolerance audits ensuring zero defects.",
          image: "/images/assets/iso-bg.png",
          imageAlt: "Asia Plastik ISO Certified Facility",
          imageTag: "ISO 9001:2015 Certified • Periodic Audits",
          badges: [
            { icon: ShieldCheck, title: "Integrated QMS", desc: "Comprehensive Standard" },
            { icon: Award, title: "Micro Tolerance Check", desc: "Rigid Dimension Inspection" },
            { icon: CheckCircle2, title: "Audited Compliance", desc: "Consistent Verification" },
          ],
        },
        {
          id: "vision-values",
          step: "03",
          navTitle: "Vision & Values",
          navSubtitle: "Innovation & Sustainable Growth",
          title: "Corporate Vision & Core Values",
          description:
            "Vision & Values: To stand as a premier plastic manufacturing enterprise nationally and globally by delivering innovative, eco-conscious, and durable packaging tailored for client satisfaction.",
          image: "/images/assets/visi.png",
          imageAlt: "Corporate Values Asia Plastik",
          imageTag: "Eco Innovation • Trusted Partnership",
          badges: [
            { icon: Target, title: "Precision Standards", desc: "Batch Consistency" },
            { icon: Building2, title: "Partner Integrity", desc: "Stable Supply Chain" },
            { icon: Sparkles, title: "Green Sustainability", desc: "Recyclable Options" },
          ],
        },
      ],
    },
    zh: {
      badge: "企业概况",
      heading: "打造塑料制造产业的美好未来",
      subheading: "专注于精密注塑与吹塑成型包装，坚持国际高标准质量管理。",
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
          image: "/images/assets/about-1.png",
          imageAlt: "亚洲塑料现代化生产基地",
          imageTag: "现代化制造车间 • 规模化量产",
          badges: [
            { icon: Factory, title: "30余年制造经验", desc: "注塑与吹塑行业专家" },
            { icon: Cpu, title: "高精度自动化", desc: "微公差温控成型" },
            { icon: Layers, title: "食品级标准材料", desc: "合规安全树脂原料" },
          ],
        },
        {
          id: "iso-cert",
          step: "02",
          navTitle: "ISO 认证",
          navSubtitle: "ISO 9001:2015 质量体系",
          title: "ISO 9001:2015 国际质量体系认证",
          description:
            "自2005年荣获 ISO 9001:2000 起，现已全面推行 ISO 9001:2015 标准。全流程微公差严格检验，确保零缺陷交付。",
          image: "/images/assets/iso-bg.png",
          imageAlt: "ISO 认证现代化厂房",
          imageTag: "ISO 9001:2015 权威认证 • 定期审核",
          badges: [
            { icon: ShieldCheck, title: "一体化质管系统", desc: "标准化全流程质控" },
            { icon: Award, title: "严苛微公差检测", desc: "尺寸与抗压双重检验" },
            { icon: CheckCircle2, title: "规范审计达标", desc: "持续合规稳定生产" },
          ],
        },
        {
          id: "vision-values",
          step: "03",
          navTitle: "愿景与核心价值",
          navSubtitle: "创新驱动与可持续发展",
          title: "企业愿景与核心价值观",
          description:
            "愿景与价值观：通过持续技术革新与环保制造，成为国内外领先且深受信赖的塑料包装标杆企业，为合作伙伴创造长久价值。",
          image: "/images/assets/visi.png",
          imageAlt: "企业愿景与发展理念",
          imageTag: "绿色环保创新 • 诚信稳健合作",
          badges: [
            { icon: Target, title: "严苛精度品质", desc: "每一批次稳定可靠" },
            { icon: Building2, title: "诚信合作伙伴", desc: "稳定高效供应链" },
            { icon: Sparkles, title: "绿色环保创新", desc: "节能减排可回收树脂" },
          ],
        },
      ],
    },
  };

  const t = content[lang] || content.id;
  const currentTab = t.tabs[activeTab] || t.tabs[0];

  return (
    <section
      id="about"
      className="relative w-full bg-slate-50/70 dark:bg-slate-950 py-20 sm:py-24 border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. SECTION LAYOUT (TWO-COLUMN SPLIT CONTAINER) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ========================================================================= */}
          {/* 2. LEFT COLUMN: INTERACTIVE NAVIGATION & INTRO (5 cols)                   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Header Area */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              {/* Bold Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
                {t.heading}
              </h2>

              {/* Subheading */}
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t.subheading}
              </p>
            </div>

            {/* Interactive Steps List (Cards / Tabs) */}
            <div className="space-y-3.5" role="tablist" aria-label="Company Overview Tabs">
              {t.tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? "bg-white dark:bg-slate-900 shadow-md shadow-slate-200/80 dark:shadow-none border border-slate-200/90 dark:border-slate-700/80 translate-x-1.5"
                        : "bg-transparent hover:bg-white/60 dark:hover:bg-slate-900/40 border border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Number Indicator */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                        }`}
                      >
                        {tab.step}
                      </div>

                      {/* Tab Text */}
                      <div>
                        <p
                          className={`text-base font-bold transition-colors ${
                            isActive
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                          }`}
                        >
                          {tab.navTitle}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {tab.navSubtitle}
                        </p>
                      </div>
                    </div>

                    {/* Active Accent Indicator */}
                    <div className="flex items-center gap-2">
                      {isActive ? (
                        <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors" />
                      )}
                    </div>
                  </button>
                );
              })}
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

          {/* ========================================================================= */}
          {/* 3. RIGHT COLUMN: DYNAMIC CONTENT & IMAGE PLACEMENT (7 cols)               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            {/* Dedicated Showcase Card */}
            <div
              id={`panel-${currentTab.id}`}
              role="tabpanel"
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 dark:border-slate-800 transition-all duration-500 ease-in-out flex flex-col justify-between space-y-7"
            >
              {/* Header Info Area */}
              <div className="space-y-3.5 transition-opacity duration-500">
                {/* Active Indicator Tag */}
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{currentTab.navTitle}</span>
                </div>

                {/* Main Showcase Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {currentTab.title}
                </h3>

                {/* Description Paragraph */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {currentTab.description}
                </p>
              </div>

              {/* Row of Feature Badges / Micro-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {currentTab.badges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-blue-500/40"
                    >
                      <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs mb-1">
                        <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="truncate">{badge.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {badge.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* The Dedicated Image Showcase Container (NO MORE IMAGES BELOW TEXT) */}
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 group">
                <Image
                  key={currentTab.image}
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Dashboard-style Floating Badge at Bottom */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white drop-shadow-md">
                  <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{currentTab.imageTag}</span>
                  </div>

                  <span className="hidden sm:inline-flex text-xs font-medium text-slate-300 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/10">
                    {lang === "zh" ? "亚洲塑料有限公司" : "CV. Asia Plastik"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
