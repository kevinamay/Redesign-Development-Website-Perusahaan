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
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

export const partnersList = [
  {
    name: "Greenfields",
    logo: "/images/logo/greenfileds.png",
    sector: {
      id: "Industri Susu & Olahan Pangan",
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
    logo: "/images/logo/kelaya.png",
    sector: {
      id: "Perawatan Pribadi & Kosmetik",
      en: "Personal Care & Cosmetics",
      zh: "个人护理与美妆",
    },
  },
  {
    name: "Kimia Farma",
    logo: "/images/logo/kimia farma.png",
    sector: {
      id: "Farmasi & Layanan Kesehatan",
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
    logo: "/images/logo/pomal.png",
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
      id: "Agribisnis Global & FMCG",
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
      heroEyebrow: "SELAMAT DATANG DI HALAMAN MITRA KAMI!",
      heroTitle: "ASIA PLASTIK PARTNER",
      heroSubtitle:
        "Kami bangga dipercaya oleh perusahaan multinasional, BUMN, dan brand terkemuka dalam menyediakan kemasan plastik presisi berkualitas tinggi.",
      partnerCountBadge: "16 Mitra Korporat",
      gridEyebrow: "ASIA PLASTIK",
      gridTitle: "MITRA TEPERCAYA KAMI",
      valuePropEyebrow: "NILAI UNGGUL ASIA PLASTIK",
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
      ctaWhatsappUrl:
        "https://wa.me/628113229988?text=" +
        encodeURIComponent("Halo Asia Plastik, kami tertarik untuk menjalin kerjasama kemitraan B2B"),
    },
    en: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Partners",
      heroEyebrow: "WELCOME TO OUR PARTNER PAGE!",
      heroTitle: "ASIA PLASTIK PARTNERS",
      heroSubtitle:
        "We are excited about the opportunity to collaborate and create value together.",
      partnerCountBadge: "16 Corporate Partners",
      gridEyebrow: "ASIA PLASTIK",
      gridTitle: "OUR TRUSTED PARTNERS",
      valuePropEyebrow: "ASIA PLASTIK VALUES",
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
      ctaWhatsappUrl:
        "https://wa.me/628113229988?text=" +
        encodeURIComponent("Hello Asia Plastik, we are interested in exploring strategic B2B partnership"),
    },
    zh: {
      breadcrumbHome: "网站首页",
      breadcrumbCurrent: "合作伙伴",
      heroEyebrow: "欢迎访问我们的合作伙伴页面！",
      heroTitle: "亚洲塑料 合作伙伴",
      heroSubtitle: "我们期待与您携手合作，共同创造更大商业价值与卓越包装品质。",
      partnerCountBadge: "16 家企业合作伙伴",
      gridEyebrow: "亚洲塑料合作企业",
      gridTitle: "我们值得信赖的合作伙伴",
      valuePropEyebrow: "亚洲塑料核心价值",
      trustBadge: "值得长期信赖的企业战略合作伙伴",
      valuePropTitle: "为何行业领军企业信赖亚洲塑料",
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
      ctaWhatsapp: "微信 / WhatsApp 咨询",
      ctaWhatsappUrl:
        "https://wa.me/628113229988?text=" +
        encodeURIComponent("您好亚洲塑料，我们对开展企业级 B2B 战略合作很感兴趣"),
    },
  }[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* 0. GLOBAL NAVIGATION NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="bg-slate-900 relative py-20 lg:py-28 overflow-hidden text-center">
          {/* Subtle background dot grid pattern */}
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
              <ChevronRight className="w-3 h-3 text-slate-600" />
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
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-800/80 border border-slate-700/60 rounded-full text-xs sm:text-sm text-slate-300 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">{content.partnerCountBadge}</span>
              <span className="text-slate-400">|</span>
              <span>{content.trustBadge}</span>
            </div>
          </div>
        </section>

        {/* 2. PARTNERS LOGO GRID SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
              {content.gridEyebrow}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {content.gridTitle}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          {/* Symmetrical 4-Column Grid: 16 items = 4 rows of 4 cards perfectly balanced */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
            {partnersList.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between min-h-[190px] sm:min-h-[210px] shadow-xs hover:shadow-xl hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle top indicator hover line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Ambient hover glow inside card */}
                <div className="absolute inset-0 bg-radial from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Big, Clear, Transparent Logo Container */}
                <div className="relative w-full h-24 sm:h-28 flex items-center justify-center my-auto">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-108 drop-shadow-xs"
                  />
                </div>

                {/* Brand Name & Industry Sector */}
                <div className="w-full pt-3 mt-2 border-t border-slate-100 dark:border-slate-800/80 text-center relative z-10">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {partner.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {partner.sector[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. VALUE PROPOSITION PILLARS */}
          <div className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
                {content.valuePropEyebrow}
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
                    className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300"
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
          <div className="mt-20 text-center bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-10 lg:p-14 shadow-xs relative overflow-hidden">
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
                  href={content.ctaWhatsappUrl}
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
