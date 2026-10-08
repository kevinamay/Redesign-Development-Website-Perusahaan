"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function CareerBanner() {
  const { lang } = useLanguage();

  const careerContent = {
    id: {
      eyebrow: "GABUNG BERSAMA KAMI",
      heading: "LOWONGAN KARIR DI ASIA PLASTIK",
      paragraph:
        "Di Asia Plastik, kami menyambut semua talenta untuk menjadi bagian dari tim kami. Jika Anda tertarik untuk menjadi bagian dari kami, silakan kirimkan CV ke recruitmentasia7@gmail.com",
      buttonText: "Kirim CV Sekarang",
      imageAlt: "Karir dan Rekrutmen di Asia Plastik",
    },
    en: {
      eyebrow: "JOIN OUR TEAM",
      heading: "CAREER OPPORTUNITIES AT ASIA PLASTIK",
      paragraph:
        "At Asia Plastik, we welcome all talents to be part of our dedicated team. If you are interested in growing with us, please send your CV to recruitmentasia7@gmail.com",
      buttonText: "Send CV Now",
      imageAlt: "Careers and Recruitment at Asia Plastik",
    },
    zh: {
      eyebrow: "加入我们",
      heading: "亚洲塑料人才招聘与职业发展",
      paragraph:
        "在亚洲塑料 (Asia Plastik)，我们欢迎各界优秀人才加入团队共同奋斗。如果您渴望投身现代化工业制造与高洁净包装产业，欢迎投递简历至 recruitmentasia7@gmail.com",
      buttonText: "立即发送简历",
      imageAlt: "亚洲塑料人才招聘",
    },
  };

  const content = careerContent[lang] || careerContent.id;

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* 1. MODERN B2B CARD CONTAINER */}
      <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800/80 relative group">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* 2. LEFT COLUMN (Image) */}
        <div className="w-full lg:w-5/12 relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
          <Image
            src="/images/career-handshake.jpg"
            alt={content.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-900/20 lg:to-slate-900/90 pointer-events-none" />
        </div>

        {/* 3. RIGHT COLUMN (Content & Typography) */}
        <div className="w-full lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center relative z-10">
          {/* Eyebrow */}
          <span className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
            {content.eyebrow}
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {content.heading}
          </h2>

          {/* Paragraph */}
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed text-justify mb-10">
            {content.paragraph}
          </p>

          {/* 4. INTERACTIVE CTA BUTTON */}
          <div>
            <a
              href="mailto:recruitmentasia7@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 w-fit cursor-pointer group/btn"
            >
              <Mail className="w-5 h-5 text-white shrink-0 group-hover/btn:scale-110 transition-transform" />
              <span>{content.buttonText}</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
