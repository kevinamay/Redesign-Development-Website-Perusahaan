"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function AboutPreview() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("about-intro");

  // Track active section via IntersectionObserver for the sticky timeline
  useEffect(() => {
    const sectionIds = ["about-intro", "about-iso", "about-vision"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Multilingual content fallbacks
  const content = {
    id: {
      badge: "GAMBARAN PERUSAHAAN",
      heading: "Membangun Masa Depan Industri Plastik",
      readMore: "SELENGKAPNYA",
      timeline: [
        { id: "about-intro", number: "01", title: "Tentang Kami", subtitle: "Dedikasi sejak 1985" },
        { id: "about-iso", number: "02", title: "Sertifikat ISO", subtitle: "Standar Mutu ISO 9001:2015" },
        { id: "about-vision", number: "03", title: "Visi & Nilai", subtitle: "Inovasi & Integritas" },
      ],
      s1: {
        title: "TENTANG KAMI",
        p1: "Asia Plastik adalah perusahaan manufaktur kemasan plastik yang mengkhususkan diri pada bidang injection dan blow molding sejak tahun 1985. Dengan komitmen kuat terhadap presisi dan kualitas, kami telah menjadi mitra terpercaya bagi ratusan merek terkemuka di berbagai sektor industri seperti makanan, minuman, farmasi, kosmetik, hingga bahan kimia industri.",
        p2: "Didukung armada mesin mutakhir berteknologi tinggi dan tim teknisi berpengalaman, setiap siklus produksi dikontrol secara ketat untuk menjamin ketahanan, estetika, serta keamanan produk akhir.",
      },
      s2: {
        badge: "Standar Mutu Internasional",
        title: "SERTIFIKAT ISO",
        text: "Sejak tahun 2005 Asia Plastik berhasil meraih ISO 9001:2000 yang kini telah dikembangkan menjadi ISO 9001:2015.",
        features: ["Sistem Manajemen Mutu Terintegrasi", "Inspeksi Toleransi Mikro Ketat", "Audit Berkala & Konsisten"],
      },
      s3: {
        title: "VISI & NILAI",
        vision:
          "Visi & Nilai: Menjadi perusahaan manufaktur plastik terkemuka secara nasional dan internasional dengan menyediakan solusi kemasan yang inovatif, ramah lingkungan, dan andal.",
        values: [
          {
            title: "Kualitas Presisi",
            desc: "Standar ketelitian tinggi di setiap proses injection & blow molding tanpa kompromi.",
          },
          {
            title: "Integritas & Kemitraan",
            desc: "Menjaga transparansi, konsistensi suplai, dan kolaborasi jangka panjang dengan mitra bisnis.",
          },
          {
            title: "Inovasi Berkelanjutan",
            desc: "Pemanfaatan formulasi resin ramah lingkungan serta efisiensi energi dalam proses produksi.",
          },
        ],
      },
    },
    en: {
      badge: "COMPANY OVERVIEW",
      heading: "Building the Future of Plastic Industry",
      readMore: "LEARN MORE",
      timeline: [
        { id: "about-intro", number: "01", title: "About Us", subtitle: "Dedicated since 1985" },
        { id: "about-iso", number: "02", title: "ISO Certification", subtitle: "ISO 9001:2015 Quality Standard" },
        { id: "about-vision", number: "03", title: "Vision & Values", subtitle: "Innovation & Integrity" },
      ],
      s1: {
        title: "ABOUT US",
        p1: "Asia Plastik is a plastic packaging manufacturing company specializing in injection and blow molding since 1985. With an unwavering commitment to precision and superior quality, we have become the trusted strategic partner for hundreds of reputable brands across food & beverage, pharmaceutical, cosmetic, and chemical sectors.",
        p2: "Powered by cutting-edge automated machinery and seasoned engineering professionals, every production cycle is rigorously monitored to ensure optimum strength, visual aesthetics, and flawless safety.",
      },
      s2: {
        badge: "International Quality Benchmark",
        title: "ISO CERTIFICATION",
        text: "Since 2005, Asia Plastik has successfully attained ISO 9001:2000 certification, which has now evolved into ISO 9001:2015.",
        features: ["Integrated Quality Management System", "Strict Micro-Tolerance Inspection", "Continuous Audits & Compliance"],
      },
      s3: {
        title: "VISION & VALUES",
        vision:
          "Vision & Values: To become a leading plastic manufacturing enterprise nationally and internationally by delivering innovative, sustainable, and dependable packaging solutions.",
        values: [
          {
            title: "Precision Quality",
            desc: "Uncompromising precision and tolerance across every injection & blow mold cycle.",
          },
          {
            title: "Integrity & Partnership",
            desc: "Fostering long-term transparency, delivery reliability, and collaborative trust.",
          },
          {
            title: "Sustainable Innovation",
            desc: "Embracing eco-conscious resin options and high-efficiency manufacturing technologies.",
          },
        ],
      },
    },
    zh: {
      badge: "企业概况",
      heading: "打造塑料制造产业的美好未来",
      readMore: "了解更多",
      timeline: [
        { id: "about-intro", number: "01", title: "关于我们", subtitle: "始创于1985年" },
        { id: "about-iso", number: "02", title: "ISO 认证", subtitle: "ISO 9001:2015 质量管理标准" },
        { id: "about-vision", number: "03", title: "愿景与核心价值", subtitle: "创新与诚信" },
      ],
      s1: {
        title: "关于我们",
        p1: "Asia Plastik 是一家专注于注塑（Injection）和吹塑（Blow Molding）领域的塑料包装制造企业，自1985年成立至今深耕数十年。凭借对高精度与卓越品质的不懈追求，我们已成为食品饮料、医药、化妆品及工业化学品等众多知名企业的长期战略合作伙伴。",
        p2: "依托先进的高科技自动化生产设备与经验丰富的工程团队，每个生产周期均经过严格质检，确保最终产品的坚固性、美观度与安全性。",
      },
      s2: {
        badge: "国际标准品质认可",
        title: "ISO 认证",
        text: "自2005年起，Asia Plastik 成功荣获 ISO 9001:2000 认证，目前已升级全面推行 ISO 9001:2015 质量管理体系。",
        features: ["一体化质量管理控制系统", "严格的微公差精准检测", "持续规范的质量监督审计"],
      },
      s3: {
        title: "愿景与核心价值",
        vision:
          "愿景与价值观：通过持续的技术创新、环保意识与精益求精的质量承诺，成为国内外领先且值得信赖的塑料包装制造标杆企业。",
        values: [
          {
            title: "精密品质",
            desc: "在注塑与吹塑制造的每一个环节严控精度，坚守卓越品质。",
          },
          {
            title: "诚信共赢",
            desc: "秉持诚信与稳定供应，与广大合作伙伴建立持久信赖关系。",
          },
          {
            title: "绿色创新",
            desc: "积极采用环保树脂原料与节能减排制造工艺，践行可持续发展。",
          },
        ],
      },
    },
  };

  const t = content[lang] || content.id;

  return (
    <section
      id="about"
      className="relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      {/* 1. LAYOUT STRUCTURE (Sticky Left, Scrolling Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12 relative">
        {/* LEFT COLUMN (Sticky Navigation) */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          {/* Label */}
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm mb-4 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            {t.heading}
          </h2>

          {/* Vertical Timeline / Visual Guide */}
          <div className="space-y-4 my-8 pl-1 relative">
            {/* Continuous vertical connecting line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />

            {t.timeline.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`group relative flex items-start gap-4 p-2.5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-50/80 dark:bg-blue-950/40 translate-x-1"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {/* Indicator Node */}
                  <div
                    className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-2xs ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                        : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-blue-400 group-hover:text-blue-600"
                    }`}
                  >
                    {item.number}
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-base font-bold transition-colors ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* SELENGKAPNYA Button */}
          <Link
            href="/about"
            className="border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-full px-8 py-3 font-semibold transition-all mt-8 inline-flex items-center gap-2 group shadow-xs cursor-pointer"
          >
            <span>{t.readMore}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2. RIGHT COLUMN (Scrolling Content & Parallax Effect) */}
        <div className="w-full lg:w-2/3 flex flex-col gap-24">
          {/* SECTION 1: TENTANG KAMI */}
          <article id="about-intro" className="scroll-mt-36 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t.s1.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.s1.p1}
              </p>
              {t.s1.p2 && (
                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.s1.p2}
                </p>
              )}
            </div>

            {/* Rounded Hero Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl group">
              <Image
                src="/images/assets/about-1.png"
                alt="Tentang CV Asia Plastik"
                width={1200}
                height={600}
                className="rounded-3xl shadow-xl object-cover h-[400px] w-full transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white drop-shadow-md">
                <span className="text-xs sm:text-sm font-medium bg-slate-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  Established 1985 • Injection & Blow Molding Specialist
                </span>
              </div>
            </div>
          </article>

          {/* SECTION 2: SERTIFIKAT ISO (THE VIDEO PARALLAX EFFECT - CRITICAL) */}
          <article id="about-iso" className="scroll-mt-36">
            <div className="relative w-full h-[600px] bg-[url('/images/assets/iso-bg.png')] bg-fixed bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl">
              {/* Subtle dark overlay for contrast */}
              <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

              {/* Solid dark-blue content box that slides up over the fixed background image */}
              <div className="absolute bottom-0 left-0 w-[85%] md:w-[60%] bg-[#1e3a5f] p-10 md:p-14 rounded-tr-3xl shadow-2xl border-t border-r border-blue-400/20">
                {/* ISO Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4 text-blue-300" />
                  <span>{t.s2.badge}</span>
                </div>

                {/* ISO Title */}
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {t.s2.title}
                </h3>

                {/* ISO Text */}
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {t.s2.text}
                </p>

                {/* Key Certification Points */}
                <ul className="space-y-2.5 pt-2 border-t border-blue-400/20">
                  {t.s2.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-blue-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 3: VISI & NILAI */}
          <article id="about-vision" className="scroll-mt-36 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Left */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase">
                  <Target className="w-4 h-4" />
                  <span>Arah & Prinsip Perusahaan</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {t.s3.title}
                </h3>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {t.s3.vision}
                </p>

                {/* Values Cards */}
                <div className="space-y-3 pt-2">
                  {t.s3.values.map((val, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-blue-500/40"
                    >
                      <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{val.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Right */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                <Image
                  src="/images/assets/visi.png"
                  alt="Visi dan Nilai Asia Plastik"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-xl object-cover h-[380px] w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-semibold bg-blue-600/85 backdrop-blur-md px-3 py-1 rounded-full">
                    Excellence & Sustainability
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
