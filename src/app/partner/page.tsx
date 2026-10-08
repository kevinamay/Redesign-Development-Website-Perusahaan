"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Handshake,
  ShieldCheck,
  Building2,
  Home,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

export const partnersList = [
  {
    name: "Greenfields",
    logo: "/images/logo/greenfileds.jpg",
    sector: {
      id: "Industri Susu & Produk Olahan",
      en: "Dairy & Beverage Industry",
      zh: "乳制品与饮品产业",
    },
  },
  {
    name: "PT. Indo Acidatama Tbk",
    logo: "/images/logo/indo acidatama.png",
    sector: {
      id: "Bahan Kimia & Agroindustri",
      en: "Chemicals & Agro-Industry",
      zh: "化工与农业综合产业",
    },
  },
  {
    name: "Kelaya Hair Treatment",
    logo: "/images/logo/kelaya.jpg",
    sector: {
      id: "Perawatan Pribadi & Kosmetik",
      en: "Personal Care & Cosmetics",
      zh: "个人护理与美妆",
    },
  },
  {
    name: "Kimia Farma",
    logo: "/images/logo/kimia farma.jpg",
    sector: {
      id: "Farmasi & Kesehatan",
      en: "Pharmaceutical & Healthcare",
      zh: "制药与健康医疗",
    },
  },
  {
    name: "Mak",
    logo: "/images/logo/mak.png",
    sector: {
      id: "Produk Rumah Tangga & Kimia",
      en: "Household & Chemical Products",
      zh: "家居及化学产品",
    },
  },
  {
    name: "PT. Megasurya Mas",
    logo: "/images/logo/megasurya.png",
    sector: {
      id: "Minyak Nabati & Sabun Industri",
      en: "Edible Oils & Soap Industry",
      zh: "食用油与洗涤工业",
    },
  },
  {
    name: "MS Glow Skincare",
    logo: "/images/logo/ms glow.png",
    sector: {
      id: "Kecantikan & Skincare",
      en: "Beauty & Skincare",
      zh: "美妆护肤品牌",
    },
  },
  {
    name: "PT. Multi Sarana Indotani",
    logo: "/images/logo/multi sarana.png",
    sector: {
      id: "Agrokimia & Perlindungan Tanaman",
      en: "Agrochemicals & Crop Protection",
      zh: "农药与农化科技",
    },
  },
  {
    name: "Petrokimia Kayaku",
    logo: "/images/logo/petrokimia.png",
    sector: {
      id: "Formulasi Pestisida & Pupuk",
      en: "Pesticides & Fertilizers",
      zh: "农化制剂与肥料",
    },
  },
  {
    name: "PT Petrosida Gresik",
    logo: "/images/logo/petrosida.png",
    sector: {
      id: "Industri Agrokimia Terpadu",
      en: "Integrated Agrochemicals",
      zh: "综合农化生产",
    },
  },
  {
    name: "PT. Pupuk Kujang Cikampek",
    logo: "/images/logo/pomal.jpg",
    sector: {
      id: "Produsen Pupuk Nasional BUMN",
      en: "National Fertilizer SOE",
      zh: "国家级化肥制造",
    },
  },
  {
    name: "SIMP",
    logo: "/images/logo/simp.png",
    sector: {
      id: "Agribisnis Kelapa Sawit & Pangan",
      en: "Agribusiness & Food Processing",
      zh: "农业综合与食品加工",
    },
  },
  {
    name: "Sinarmas Agribusiness and Food",
    logo: "/images/logo/sinarmas.png",
    sector: {
      id: "Agribisnis Terbesar & FMCG",
      en: "Agribusiness & Global FMCG",
      zh: "金光集团农业与日化",
    },
  },
  {
    name: "Tjiwi Kimia Paper Products",
    logo: "/images/logo/twijikimia.png",
    sector: {
      id: "Industri Kertas & Kemasan",
      en: "Paper & Packaging Products",
      zh: "造纸与工业包装",
    },
  },
  {
    name: "PT Tunas Baru Lampung",
    logo: "/images/logo/tunasbaru.png",
    sector: {
      id: "Perkebunan & Minyak Goreng",
      en: "Plantation & Edible Oils",
      zh: "种植业与食用油制品",
    },
  },
  {
    name: "Wilmar",
    logo: "/images/logo/wilmar.png",
    sector: {
      id: "Rantai Pasok Agribisnis Global",
      en: "Global Agribusiness Supply Chain",
      zh: "丰益国际全球粮油产业链",
    },
  },
];

export default function PartnerPage() {
  const { lang } = useLanguage();

  const content = {
    id: {
      breadcrumbHome: "Beranda",
      breadcrumbCurrent: "Partner",
      heroEyebrow: "WELCOME TO OUR PARTNER PAGE!",
      heroTitle: "ASIA PLASTIK PARTNER",
      heroSubtitle:
        "Kami bangga dipercaya oleh perusahaan multinasional, BUMN, dan brand terkemuka dalam menyediakan kemasan plastik presisi berkualitas tinggi.",
      gridEyebrow: "ASIA PLASTIK",
      gridTitle: "OUR TRUSTED PARTNERS",
      trustBadge: "Kemitraan Jangka Panjang Terpercaya",
      valuePropTitle: "Mengapa Perusahaan Terkemuka Memilih Asia Plastik?",
      valuePropSubtitle:
        "Komitmen kami terhadap konsistensi mutu, ketepatan waktu pengiriman, dan kapabilitas kustomisasi cetakan menjadikannya mitra manufaktur tepercaya.",
      values: [
        {
          title: "Standar Mutu Ketat",
          desc: "Sertifikasi ISO 9001:2015 serta kepatuhan bahan baku food grade murni tanpa kontaminasi kimia.",
          icon: ShieldCheck,
        },
        {
          title: "Kapasitas Skala Besar",
          desc: "Fasilitas mesin modern berkecepatan tinggi menjamin kestabilan pasokan ribuan hingga jutaan unit.",
          icon: Cpu,
        },
        {
          title: "Cetakan Kustom Presisi",
          desc: "Layanan rancang bangun mold eksklusif injection & blow molding sesuai bentuk spesifik produk Anda.",
          icon: Layers,
        },
      ],
      ctaTitle: "Ingin Berkolaborasi Bersama Kami?",
      ctaSubtitle:
        "Kami selalu terbuka untuk peluang kerjasama strategis guna mendukung kebutuhan industri dan bisnis Anda.",
      ctaButton: "HUBUNGI KAMI",
      ctaWhatsapp: "KONSULTASI WHATSAPP",
    },
    en: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Partners",
      heroEyebrow: "WELCOME TO OUR PARTNER PAGE!",
      heroTitle: "ASIA PLASTIK PARTNER",
      heroSubtitle:
        "We are excited about the opportunity to collaborate and create value together.",
      gridEyebrow: "ASIA PLASTIK",
      gridTitle: "OUR TRUSTED PARTNERS",
      trustBadge: "Trusted Long-Term B2B Partnerships",
      valuePropTitle: "Why Leading Enterprises Choose Asia Plastik",
      valuePropSubtitle:
        "Our commitment to quality consistency, on-time delivery, and precision tooling capability makes us the preferred manufacturing partner.",
      values: [
        {
          title: "Rigorous Quality Standards",
          desc: "ISO 9001:2015 certified processes and 100% pure food grade resin compliance.",
          icon: ShieldCheck,
        },
        {
          title: "High-Volume Scalability",
          desc: "High-speed modern production lines guaranteeing continuous supply of thousands to millions of units.",
          icon: Cpu,
        },
        {
          title: "Precision Custom Tooling",
          desc: "Exclusive engineering for custom injection and blow molding molds tailored to your specifications.",
          icon: Layers,
        },
      ],
      ctaTitle: "Want to Collaborate With Us?",
      ctaSubtitle:
        "We are always open to strategic partnership opportunities to support your business and industrial packaging needs.",
      ctaButton: "CONTACT US",
      ctaWhatsapp: "WHATSAPP SALES",
    },
    zh: {
      breadcrumbHome: "网站首页",
      breadcrumbCurrent: "合作伙伴",
      heroEyebrow: "WELCOME TO OUR PARTNER PAGE!",
      heroTitle: "ASIA PLASTIK PARTNER",
      heroSubtitle: "我们期待与您携手合作，共同创造更大商业价值与卓越包装品质。",
      gridEyebrow: "ASIA PLASTIK",
      gridTitle: "OUR TRUSTED PARTNERS",
      trustBadge: "值得长期信赖的企业战略合作伙伴",
      valuePropTitle: "为何行业领军企业信赖 ASIA PLASTIK",
      valuePropSubtitle:
        "我们对严苛品质、准时交付与高精度模具定制的长期承诺，使我们成为众多知名品牌的首选塑料制造伙伴。",
      values: [
        {
          title: "严苛质量标准",
          desc: "通过 ISO 9001:2015 质量管理认证，完全符合食品级纯料安全合规。",
          icon: ShieldCheck,
        },
        {
          title: "大批量规模化产能",
          desc: "高速现代化注塑与吹塑机群，保障数十万至数百万件订单的稳定供应。",
          icon: Cpu,
        },
        {
          title: "专属高精模具开发",
          desc: "全方位模具工程服务，按客户专属技术图纸量身打造专属注塑及吹塑模具。",
          icon: Layers,
        },
      ],
      ctaTitle: "想与我们开展商业合作？",
      ctaSubtitle:
        "我们始终对战略合作持开放态度，全力支持您的工业与商业包装需求。",
      ctaButton: "立即联系我们",
      ctaWhatsapp: "微信/WHATSAPP 咨询",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* 0. GLOBAL NAVIGATION NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="bg-slate-900 relative py-24 lg:py-32 overflow-hidden text-center">
          {/* Subtle background glow effect & dot grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Ambient luminous glow circles */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                {content.breadcrumbHome}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-blue-400 font-medium">
                {content.breadcrumbCurrent}
              </span>
            </div>

            {/* Eyebrow */}
            <span className="inline-block text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">
              {content.heroEyebrow}
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
              {content.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              {content.heroSubtitle}
            </p>

            {/* Hero Partner Stats Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/80 border border-slate-700/60 rounded-full text-xs sm:text-sm text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">16+</span>
              <span>{content.trustBadge}</span>
            </div>
          </div>
        </section>

        {/* 2. PARTNERS LOGO GRID SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
              {content.gridEyebrow}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {content.gridTitle}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          {/* Grid Layout (2 col mobile, 3 sm, 4 md, 5 lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            {partnersList.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center aspect-[3/2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-contain max-h-16 grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                  />
                </div>

                {/* Micro tooltip pill on hover with partner name */}
                <div className="absolute inset-x-0 bottom-0 py-1.5 px-2 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center pointer-events-none">
                  <p className="text-[11px] font-semibold text-white truncate px-1 drop-shadow-sm">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. VALUE PROPOSITION PILLARS */}
          <div className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
                ASIA PLASTIK VALUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {content.valuePropTitle}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {content.valuePropSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {content.values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {val.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. CALL TO ACTION (CTA) SECTION */}
          <div className="mt-20 text-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 lg:p-14 shadow-sm relative overflow-hidden">
            {/* Background subtle radial gradient */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs">
                <Handshake className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {content.ctaTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-8 text-sm lg:text-base leading-relaxed">
                {content.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto bg-slate-900 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  {content.ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/628113229988?text=Halo%20Asia%20Plastik,%20kami%20tertarik%20untuk%20menjalin%20kerjasama%20kemitraan%20B2B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.ctaWhatsapp}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
