"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileDrawer from "@/components/MobileDrawer";
import { useLanguage, Language } from "@/data/translations";
import {
  Mail,
  Phone,
  Globe,
  Menu,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const { lang, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languageOptions: { code: Language; label: string; badge: string }[] = [
    { code: "id", label: "Bahasa (ID)", badge: "ID" },
    { code: "en", label: "English (EN)", badge: "EN" },
    { code: "zh", label: "中文 (CN)", badge: "CN" },
  ];

  const currentBadge = lang === "id" ? "ID" : lang === "en" ? "EN" : "CN";

  const navMenuItems = [
    { label: t.navbar.home, href: "#hero" },
    { label: t.navbar.about, href: "/about" },
    { label: t.navbar.products, href: "/products" },
    { label: t.navbar.facilities, href: "/about#mesin-produksi" },
    { label: t.navbar.contact, href: "/kontak" },
  ];

  const featureIcons = [Cpu, ShieldCheck, Layers, Sparkles];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full max-w-[100vw] overflow-hidden overflow-x-hidden isolate font-sans box-border"
    >
      {/* ========================================================================= */}
      {/* 1. LAYER 1: THE BACKGROUND IMAGE                                          */}
      {/* ========================================================================= */}
      <Image
        src="/images/fotopt.png"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover -z-10 dark:brightness-[0.72] dark:contrast-[1.08] transition-[filter] duration-500"
        style={{ objectPosition: "right top" }}
        alt="Asia Plastik Background"
      />

      {/* ========================================================================= */}
      {/* 2. LAYER 2: THE WHITE / DARK GRADIENT OVERLAY (SPLIT SCREEN EFFECT)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 via-40% to-transparent to-70% dark:from-slate-950 dark:via-slate-950/95 dark:via-40% dark:to-transparent dark:to-75% pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-0 z-10 hidden dark:block bg-slate-950/20 pointer-events-none transition-opacity duration-500" />

      {/* ========================================================================= */}
      {/* 3. LAYER 3: CONTENT & NAVBAR (BRING TO FRONT, Z-20)                       */}
      {/* ========================================================================= */}
      <div className="relative z-20 flex flex-col justify-between min-h-[100svh] w-full max-w-[100vw] overflow-x-hidden box-border">
        {/* TOP BAR & MAIN NAVBAR */}
        <header className="w-full max-w-[100vw] overflow-hidden">
          {/* Top Bar (Dark Navy bar inspired by the reference design) */}
          <div className="w-full bg-slate-950 text-slate-300 border-b border-slate-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex flex-wrap items-center justify-between w-full text-xs overflow-hidden box-border">
              {/* Top Bar Left Tagline */}
              <div className="hidden md:flex items-center gap-2 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{t.topBar.tagline}</span>
              </div>

              {/* Top Bar Right: Contact & Language (strictly prevents overflow on mobile) */}
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto flex-wrap overflow-hidden">
                {/* Email - hidden on small mobile screen to prevent stretching */}
                <a
                  href="mailto:marketing@asiaplastik.com"
                  className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-xs"
                  aria-label="Email Asia Plastik"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="hidden md:inline">marketing@asiaplastik.com</span>
                  <span className="inline md:hidden">{t.topBar.emailLabel}</span>
                </a>

                <span className="hidden sm:inline text-slate-700 select-none">|</span>

                {/* Phone */}
                <a
                  href="tel:+62318433078"
                  className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors font-medium text-xs shrink-0"
                  aria-label="Telepon Asia Plastik"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="hidden md:inline">+6231 8433078</span>
                  <span className="inline md:hidden">{t.topBar.phoneLabel}</span>
                </a>

                <span className="text-slate-700 select-none">|</span>

                {/* Language Toggle (ID, EN, ZH) */}
                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-slate-800 text-white font-semibold transition-colors focus:outline-hidden cursor-pointer text-xs"
                    aria-label="Pilih Bahasa / Select Language / 选择语言"
                    aria-expanded={isLangOpen}
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{currentBadge}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                        isLangOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl py-1.5 z-50 text-xs">
                      {languageOptions.map((opt) => (
                        <button
                          key={opt.code}
                          type="button"
                          onClick={() => {
                            setLanguage(opt.code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 hover:bg-slate-800 flex items-center justify-between transition-colors cursor-pointer ${
                            lang === opt.code ? "text-blue-400 font-bold" : "text-slate-300"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {lang === opt.code && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <span className="text-slate-700 select-none">|</span>

                {/* THEME TOGGLE SWITCH */}
                <div className="shrink-0">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="w-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
              {/* Left: Corporate Logo */}
              <Link
                href="/"
                className="inline-flex items-center focus:outline-hidden hover:opacity-95 transition-opacity"
                aria-label="Beranda CV. Asia Plastik"
              >
                {/* Light Mode Corporate Slate Logo */}
                <Image
                  src="/images/logo-dark.webp"
                  alt="Logo CV. Asia Plastik"
                  width={271}
                  height={92}
                  priority
                  className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto object-contain block dark:hidden"
                />
                {/* Dark Mode Crisp White Logo */}
                <Image
                  src="/images/logo.webp"
                  alt="Logo CV. Asia Plastik"
                  width={271}
                  height={92}
                  priority
                  className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto object-contain hidden dark:block"
                />
              </Link>

              {/* Center: Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-7">
                {navMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Right: Direct Contact / Menu Toggle */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Direct CTA Button (Desktop) */}
                <Link
                  href="/kontak"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>{t.navbar.quoteCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {/* MENU with Hamburger Icon */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-white transition-all duration-200 focus:outline-hidden group shadow-2xs cursor-pointer"
                  aria-label={t.navbar.menuBtn}
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t.navbar.menuBtn}
                  </span>
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* HERO TYPOGRAPHY & LAYOUT */}
        <div className="flex-1 flex items-center w-full max-w-[100vw] overflow-hidden">
          {/* Main Content Wrapper with safe mobile padding */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 box-border">
            {/* Visual Accent: Thin, elegant vertical line */}
            <div className="border-l-4 border-blue-600 pl-4 sm:pl-7 lg:pl-9 max-w-2xl lg:max-w-3xl animate-fade-in-up">
              {/* Top Label Badge */}
              <div className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider text-blue-600 uppercase mb-2.5 sm:mb-3 flex items-center gap-2">
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline (H1) with responsive sizing */}
              <h1 className="font-extrabold text-slate-900 dark:text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18] sm:leading-[1.14] tracking-tight uppercase break-words">
                {t.hero.titleStart}{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="mt-3 sm:mt-5 font-medium text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg tracking-wide max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons: Responsive Stack on mobile, side-by-side on sm+ */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                {/* 1. Primary Button */}
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
                >
                  <span>{t.hero.primaryCta}</span>
                </Link>

                {/* 2. Secondary Button */}
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border-2 border-slate-800 dark:border-slate-400 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>{t.hero.secondaryCta}</span>
                </Link>
              </div>

              {/* 3. Refined Feature Grid (Presisi Cetak Tinggi, etc.) */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/90 dark:border-slate-800 w-full box-border">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 w-full box-border">
                  {t.hero.features.map((feat, index) => {
                    const Icon = featureIcons[index] || Sparkles;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 transition-colors min-w-0 box-border overflow-hidden"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1 overflow-hidden">
                          <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm block truncate sm:whitespace-normal">
                            {feat.title}
                          </span>
                          <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 block truncate sm:whitespace-normal">
                            {feat.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. REFINED BOTTOM STATS SECTION (No Cut-off, Wrapping Responsive Grid) */}
        <div className="w-full border-t border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-950/85 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 box-border overflow-hidden">
          <div className="max-w-7xl mx-auto w-full box-border">
            {/* Statistics Grid: grid-cols-2 on mobile, lg:grid-cols-4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full box-border">
              {t.hero.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden box-border">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 shrink-0">
                    {metric.value}
                  </span>
                  <div className="flex flex-col min-w-0 overflow-hidden">
                    <span className="font-bold text-slate-900 dark:text-white text-xs md:text-sm leading-tight truncate sm:whitespace-normal">
                      {metric.label}
                    </span>
                    <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight truncate sm:whitespace-normal">
                      {metric.sublabel}
                    </span>
                  </div>
                </div>
              ))}

              {/* Facility Quick Link integrated into 4th grid cell or full width on mobile */}
              <div className="flex items-center col-span-2 lg:col-span-1 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200/50 dark:border-slate-800/50 min-w-0 overflow-hidden box-border">
                <a
                  href="/about#mesin-produksi"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-xs md:text-sm inline-flex items-center gap-1.5 transition-colors group min-w-0"
                >
                  <span className="group-hover:underline truncate sm:whitespace-normal">{t.hero.facilityLink}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-OUT FLYOUT NAVIGATION MENU (DRAWER, FIXED Z-50)                     */}
      {/* ========================================================================= */}
      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
}
