"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

interface HeroSlide {
  src: string;
  alt: string;
  imageClass: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/hero-gedung-1.jpeg",
    alt: "Gedung Kantor & Fasilitas CV. Asia Plastik Surabaya",
    imageClass:
      "object-cover object-[65%_center] sm:object-[70%_center] md:object-center md:scale-105",
  },
  {
    src: "/images/hero-pabrik-1.jpeg",
    alt: "Fasilitas Pabrik & Area Produksi Manufaktur CV. Asia Plastik Surabaya",
    imageClass:
      "object-cover object-[60%_center] sm:object-[65%_center] md:object-[60%_center] md:scale-105",
  },
];

interface VariantOption {
  key: string;
  name: string;
  tag: string;
  desc: string;
}

const VARIANTS: VariantOption[] = [
  {
    key: "responsive-clean",
    name: "Desain A (Rekomendasi): Garis Hilang di HP, Muncul di Tablet & Desktop",
    tag: "REQUESTED",
    desc: "Pada tampilan HP/Mobile garis biru vertikal dihilangkan total (border-l-0 pl-0). Garis tetap muncul rapi dan presisi pada tablet & desktop (border-l-4 pl-7).",
  },
  {
    key: "original",
    name: "Desain B: Garis Asli Lama (Selalu Muncul)",
    tag: "ORIGINAL LAMA",
    desc: "Garis biru vertikal (border-l-4) tetap dipasang di semua ukuran layar termasuk HP/Mobile (seperti screenshot komplain).",
  },
  {
    key: "pill-badge",
    name: "Desain C: Modern Accent Pill di Mobile",
    tag: "ALTERNATIF",
    desc: "Pada mobile menggunakan strip horizontal kecil di atas badge tanpa garis vertikal, lalu menjadi garis vertikal di tablet & desktop.",
  },
];

function HeroPrototypeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLanguage();

  const variantParam = searchParams.get("variant") || "responsive-clean";
  const [deviceMode, setDeviceMode] = useState<"mobile" | "tablet" | "desktop">("mobile");
  const [currentSlide] = useState(0);

  const currentVariant =
    VARIANTS.find((v) => v.key === variantParam) || VARIANTS[0];

  const switchVariant = (newKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("variant", newKey);
    router.replace(`/prototype/hero?${params.toString()}`);
  };

  const nextVariant = () => {
    const idx = VARIANTS.findIndex((v) => v.key === currentVariant.key);
    const nextIdx = (idx + 1) % VARIANTS.length;
    switchVariant(VARIANTS[nextIdx].key);
  };

  const prevVariant = () => {
    const idx = VARIANTS.findIndex((v) => v.key === currentVariant.key);
    const prevIdx = (idx - 1 + VARIANTS.length) % VARIANTS.length;
    switchVariant(VARIANTS[prevIdx].key);
  };

  const isMobile = deviceMode === "mobile";
  const isTablet = deviceMode === "tablet";
  const isDesktop = deviceMode === "desktop";

  // Logika penentuan garis biru secara eksplisit sesuai deviceMode simulasi
  const getBorderClasses = () => {
    if (currentVariant.key === "original") {
      // Desain B: Selalu ada garis biru di semua device
      return isMobile
        ? "border-l-4 border-blue-600 pl-4"
        : isTablet
        ? "border-l-4 border-blue-600 pl-6"
        : "border-l-4 border-blue-600 pl-8";
    }

    if (currentVariant.key === "responsive-clean") {
      // Desain A: DI HP GARIS HILANG TOTAL, DI TABLET & DESKTOP MUNCUL
      if (isMobile) {
        return "border-l-0 pl-0 border-transparent";
      }
      if (isTablet) {
        return "border-l-4 border-blue-600 pl-6";
      }
      return "border-l-4 border-blue-600 pl-8";
    }

    if (currentVariant.key === "pill-badge") {
      // Desain C: DI HP GARIS VERTIKAL HILANG, DI TABLET & DESKTOP MUNCUL
      if (isMobile) {
        return "border-l-0 pl-0 border-transparent";
      }
      if (isTablet) {
        return "border-l-4 border-blue-600 pl-6";
      }
      return "border-l-4 border-blue-600 pl-8";
    }

    return "border-l-0 pl-0";
  };

  const hasLineVisible =
    currentVariant.key === "original" || !isMobile;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-24">
      {/* Top Controls Toolbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Web Utama</span>
            </Link>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                PROTOTYPE HERO
              </span>
              <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                Simulasi Responsif Garis Hero
              </span>
            </div>
          </div>

          {/* Device Viewport Toggle Buttons */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isMobile
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>HP (390px)</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode("tablet")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isTablet
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isDesktop
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop (100%)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Preview Container */}
      <main className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 bg-slate-950/95 overflow-y-auto">
        {/* Active Variant Info Banner */}
        <div className="w-full max-w-4xl mb-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                {currentVariant.tag}
              </span>
              <h1 className="text-base sm:text-lg font-bold text-white">
                {currentVariant.name}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              {currentVariant.desc}
            </p>
          </div>

          {/* Real-time Indicator Status Garis */}
          <div className="flex flex-col gap-1 self-stretch sm:self-auto shrink-0 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 text-[11px]">
              Status Garis ({deviceMode.toUpperCase()}):
            </span>
            {hasLineVisible ? (
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Garis Biru Muncul (border-l-4)
              </span>
            ) : (
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Garis Biru Dihilangkan (Bersih)
              </span>
            )}
          </div>
        </div>

        {/* Quick Variant Pills for instant switching */}
        <div className="w-full max-w-4xl mb-6 flex flex-wrap gap-2">
          {VARIANTS.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => switchVariant(v.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                currentVariant.key === v.key
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-850"
              }`}
            >
              {v.name.split(":")[0]}
            </button>
          ))}
        </div>

        {/* Device Frame Viewport Simulator */}
        <div
          className={`transition-all duration-300 relative border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-950 ${
            isMobile
              ? "w-[390px] min-h-[760px] ring-8 ring-slate-800/80 my-2"
              : isTablet
              ? "w-[768px] min-h-[700px] ring-8 ring-slate-800/80 my-2"
              : "w-full max-w-7xl min-h-[640px] my-2"
          }`}
        >
          {/* Mock Mobile Status Bar if in mobile frame */}
          {isMobile && (
            <div className="bg-slate-900 text-slate-300 text-[11px] px-6 py-2 flex items-center justify-between border-b border-slate-800 select-none">
              <span className="font-semibold">09:41</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-slate-400 font-mono">5G • 100%</span>
              </div>
            </div>
          )}

          {/* Rendered Hero Component Inside Frame */}
          <section
            className={`relative w-full overflow-hidden isolate font-sans ${
              isMobile ? "min-h-[700px]" : "min-h-[580px]"
            }`}
          >
            {/* Background Slides */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
              <Image
                src={HERO_SLIDES[currentSlide].src}
                fill
                priority
                sizes="100vw"
                className={HERO_SLIDES[currentSlide].imageClass}
                alt={HERO_SLIDES[currentSlide].alt}
              />
            </div>

            {/* Split Screen Gradient Overlay */}
            <div
              className={`absolute inset-0 z-10 pointer-events-none transition-colors duration-500 ${
                isMobile
                  ? "bg-gradient-to-r from-white via-white/95 via-50% to-transparent dark:from-slate-950 dark:via-slate-950/95"
                  : "bg-gradient-to-r from-white via-white/95 via-35% to-transparent sm:via-35% dark:from-slate-950 dark:via-slate-950/95"
              }`}
            />

            {/* Hero Content Area */}
            <div
              className={`relative z-20 flex flex-col justify-center w-full ${
                isMobile
                  ? "min-h-[680px] p-5"
                  : isTablet
                  ? "min-h-[580px] p-8"
                  : "min-h-[580px] p-10 max-w-7xl mx-auto"
              }`}
            >
              <div className="w-full max-w-3xl">
                {/* VARIANT-SPECIFIC CONTAINER LOGIC */}
                <div className={`transition-all duration-300 ${getBorderClasses()}`}>
                  {/* For Variant C (Pill-badge): Display accent bar only on mobile */}
                  {currentVariant.key === "pill-badge" && isMobile && (
                    <div className="w-12 h-1.5 rounded-full bg-blue-600 mb-3" />
                  )}

                  {/* Top Badge */}
                  <div
                    className={`font-bold tracking-wider text-blue-600 uppercase mb-2.5 flex items-center gap-2 ${
                      isMobile ? "text-xs" : "text-sm"
                    }`}
                  >
                    <span>{t.hero.badge}</span>
                  </div>

                  {/* Headline */}
                  <h2
                    className={`font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight uppercase mb-6 ${
                      isMobile
                        ? "text-[26px]"
                        : isTablet
                        ? "text-4xl"
                        : "text-5xl lg:text-6xl"
                    }`}
                  >
                    {t.hero.titleLines && t.hero.titleLines.length > 0 ? (
                      <>
                        {t.hero.titleLines.map((line, idx) => {
                          const isLast = idx === t.hero.titleLines!.length - 1;
                          return (
                            <span key={idx} className="block">
                              {line}
                              {isLast && (
                                <span className="text-blue-600 dark:text-blue-400">
                                  {" "}
                                  {t.hero.titleHighlight}
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {t.hero.titleStart}{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                          {t.hero.titleHighlight}
                        </span>
                      </>
                    )}
                  </h2>

                  {/* Buttons */}
                  <div
                    className={`flex gap-3 ${
                      isMobile ? "flex-col w-full max-w-[280px]" : "flex-row w-auto"
                    }`}
                  >
                    <button
                      type="button"
                      className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md text-center"
                    >
                      {t.hero.primaryCta}
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm shadow-sm border border-slate-200 dark:border-slate-700 text-center"
                    >
                      {t.hero.secondaryCta}
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="flex items-center gap-2 mt-6">
                    <div className="w-8 h-2 rounded-full bg-blue-600" />
                    <div className="w-2.5 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-2.5 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Info card footer with link to live homepage */}
        <div className="w-full max-w-4xl mt-6 bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span className="font-semibold text-slate-200">
              💡 Mau tes langsung di halaman utama?
            </span>{" "}
            Buka website utama lalu ubah ukuran jendela browser ke mode HP atau buka DevTools (F12) toggle device mode.
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium shrink-0 transition-colors"
          >
            <span>Buka Homepage (/)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      {/* Floating Bottom Variant Switcher */}
      <aside
        aria-label="Prototype Variant Switcher"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 border border-slate-700/80 shadow-2xl rounded-2xl px-4 py-2.5 flex items-center gap-3 backdrop-blur-md"
      >
        <button
          type="button"
          onClick={prevVariant}
          aria-label="Desain sebelumnya"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-semibold text-slate-200">
            {currentVariant.name}
          </span>
        </div>

        <button
          type="button"
          onClick={nextVariant}
          aria-label="Desain selanjutnya"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </aside>
    </div>
  );
}

export default function HeroPrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-300 text-sm">
          Memuat Prototype Hero...
        </div>
      }
    >
      <HeroPrototypeContent />
    </Suspense>
  );
}
