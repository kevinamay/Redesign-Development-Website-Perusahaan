"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronRight, Navigation } from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function GlobalDistribution() {
  const { lang } = useLanguage();

  const content = {
    id: {
      badge: "KLIEN KAMI",
      heading: "Distribusi Ke Seluruh Dunia",
      p1: "Selain melayani pasar nasional, Asia Plastik juga berupaya memenuhi kebutuhan pasar global.",
      p2: "Tujuan kami adalah membangun jaringan global yang lebih kuat dengan tetap kompetitif dalam bisnis kemasan plastik.",
      cta: "HUBUNGI KAMI",
      stats: [
        { value: "20+", label: "Negara Tujuan Ekspor" },
        { value: "100%", label: "Standar Mutu Global" },
        { value: "24/7", label: "Dukungan Pasokan" },
      ],
      hqLabel: "Surabaya (HQ & Pabrik)",
      activeLogistics: "Jaringan Logistik Ekspor Aktif",
      globalSupplyChain: "Rantai Pasok Global",
      locations: [
        { name: "Surabaya (HQ & Pabrik)", top: "62%", left: "75%", isHq: true },
        { name: "Asia Pasifik (Jepang / Korsel)", top: "38%", left: "80%", isHq: false },
        { name: "Australia & Oseania", top: "74%", left: "84%", isHq: false },
        { name: "Timur Tengah & Teluk", top: "46%", left: "62%", isHq: false },
        { name: "Eropa Barat", top: "32%", left: "51%", isHq: false },
        { name: "Amerika Utara", top: "36%", left: "24%", isHq: false },
      ],
    },
    en: {
      badge: "OUR CLIENTS",
      heading: "Worldwide Distribution",
      p1: "In addition to serving the domestic market, Asia Plastik actively fulfills the needs of global markets.",
      p2: "Our objective is to forge stronger international networks while maintaining competitive excellence in plastic packaging solutions.",
      cta: "CONTACT US",
      stats: [
        { value: "20+", label: "Export Destinations" },
        { value: "100%", label: "Global Quality Standards" },
        { value: "24/7", label: "Supply Chain Support" },
      ],
      hqLabel: "Surabaya (HQ & Plant)",
      activeLogistics: "Active Export Logistics Network",
      globalSupplyChain: "Global Supply Chain",
      locations: [
        { name: "Surabaya (HQ & Plant)", top: "62%", left: "75%", isHq: true },
        { name: "Asia Pacific (Japan / S. Korea)", top: "38%", left: "80%", isHq: false },
        { name: "Australia & Oceania", top: "74%", left: "84%", isHq: false },
        { name: "Middle East & Gulf", top: "46%", left: "62%", isHq: false },
        { name: "Western Europe", top: "32%", left: "51%", isHq: false },
        { name: "North America", top: "36%", left: "24%", isHq: false },
      ],
    },
    zh: {
      badge: "全球客户",
      heading: "全球化销售与物流网络",
      p1: "除深耕国内市场外，亚洲塑料亦积极拓展并满足全球客户的高标准需求。",
      p2: "我们的愿景是建立更加稳固的全球化合作网络，在塑料包装领域持续保持核心竞争优势。",
      cta: "联系我们",
      stats: [
        { value: "20+", label: "出口覆盖国家" },
        { value: "100%", label: "国际质检标准" },
        { value: "24/7", label: "稳定供应链保障" },
      ],
      hqLabel: "泗水（总部与工厂）",
      activeLogistics: "国际出口物流网络运行中",
      globalSupplyChain: "全球化供应链网络",
      locations: [
        { name: "泗水（总部与生产基地）", top: "62%", left: "75%", isHq: true },
        { name: "亚太地区 (日本 / 韩国)", top: "38%", left: "80%", isHq: false },
        { name: "澳大利亚与大洋洲", top: "74%", left: "84%", isHq: false },
        { name: "中东与海湾地区", top: "46%", left: "62%", isHq: false },
        { name: "西欧地区", top: "32%", left: "51%", isHq: false },
        { name: "北美地区", top: "36%", left: "24%", isHq: false },
      ],
    },
  };

  const t = content[lang] || content.id;
  const locations = t.locations;

  return (
    <section className="w-full max-w-[100vw] overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      {/* 1. SECTION LAYOUT & AESTHETICS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ========================================================================= */}
          {/* 2. LEFT COLUMN: TEXT & CALL TO ACTION                                     */}
          {/* ========================================================================= */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-2xs">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
              {t.heading}
            </h2>

            {/* Description Paragraphs */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-normal">
              {t.p1}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-normal">
              {t.p2}
            </p>

            {/* Trust Metrics Bar */}
            <div className="w-full grid grid-cols-3 gap-4 py-5 mb-8 border-y border-slate-100 dark:border-slate-800/80">
              {t.stats.map((item, idx) => (
                <div key={idx}>
                  <span className="block text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button: Outlined Primary Button */}
            <Link
              href="/kontak"
              className="border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-full px-8 py-3 font-semibold transition-all inline-flex items-center gap-2 w-max group shadow-xs cursor-pointer"
            >
              <span>{t.cta}</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ========================================================================= */}
          {/* 3. RIGHT COLUMN: MODERN MAP VISUALIZATION                                 */}
          {/* ========================================================================= */}
          <div className="w-full">
            {/* Container: Glass-like rounded showcase */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-inner flex items-center justify-center p-6 sm:p-8 overflow-hidden group">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />

              {/* The Map Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/assets/world-map.png"
                  alt="Peta Distribusi Global CV Asia Plastik"
                  fill
                  className="object-contain opacity-80 dark:opacity-60 transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Pulsating Location Pins */}
                {locations.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{ top: loc.top, left: loc.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 cursor-pointer"
                  >
                    {/* Ping Waves */}
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute inline-flex rounded-full opacity-75 animate-ping ${
                          loc.isHq
                            ? "h-7 w-7 bg-blue-500"
                            : "h-5 w-5 bg-indigo-400"
                        }`}
                      />
                      {/* Solid Center Dot */}
                      <span
                        className={`relative inline-flex rounded-full border-2 border-white dark:border-slate-900 shadow-md ${
                          loc.isHq
                            ? "h-4 w-4 bg-blue-600"
                            : "h-3 w-3 bg-indigo-500"
                        }`}
                      />
                    </div>

                    {/* Tooltip / HQ Label */}
                    {loc.isHq ? (
                      <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>{loc.name}</span>
                      </div>
                    ) : (
                      <div className="opacity-0 group-hover/pin:opacity-100 transition-opacity duration-200 pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-medium px-2 py-0.5 rounded-md shadow-md">
                        {loc.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Subtle Corner Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 select-none pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3 h-3 text-blue-500" />
                  <span>{t.activeLogistics}</span>
                </span>
                <span className="hidden sm:inline-block">{t.globalSupplyChain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
