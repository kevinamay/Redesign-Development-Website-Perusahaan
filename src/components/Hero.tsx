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
  Search,
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languageOptions: { code: Language; label: string; badge: string }[] = [
    { code: "id", label: "Bahasa (ID)", badge: "ID" },
    { code: "en", label: "English (EN)", badge: "EN" },
    { code: "zh", label: "中文 (CN)", badge: "CN" },
  ];

  const currentBadge = lang === "id" ? "ID" : lang === "en" ? "EN" : "CN";

  const navMenuItems = [
    { label: t.navbar.home, href: "#hero" },
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.products, href: "#products" },
    { label: t.navbar.facilities, href: "#about" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  const featureIcons = [Cpu, ShieldCheck, Layers, Sparkles];

  return (
    <section id="hero" className="relative min-h-[100vh] w-full overflow-hidden isolate font-sans">

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
      <div className="relative z-20 flex flex-col justify-between h-full min-h-[100vh]">
        {/* TOP BAR & MAIN NAVBAR */}
        <header className="w-full">
          {/* Top Bar (Dark Navy bar inspired by the reference design) */}
          <div className="w-full bg-slate-950 text-slate-300 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-xs">
              {/* Top Bar Left Tagline */}
              <div className="hidden md:flex items-center gap-2 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{t.topBar.tagline}</span>
              </div>

              {/* Top Bar Right: Contact & Language */}
              <div className="flex items-center gap-2.5 sm:gap-6 ml-auto">
                {/* Email */}
                <a
                  href="mailto:marketing@asiaplastik.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  aria-label="Email Asia Plastik"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="hidden md:inline">marketing@asiaplastik.com</span>
                  <span className="inline md:hidden">{t.topBar.emailLabel}</span>
                </a>

                <span className="text-slate-700 select-none">|</span>

                {/* Phone */}
                <a
                  href="tel:+62318433078"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
                  aria-label="Telepon Asia Plastik"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="hidden md:inline">+6231 8433078</span>
                  <span className="inline md:hidden">{t.topBar.phoneLabel}</span>
                </a>

                <span className="text-slate-700 select-none">|</span>

                {/* Language Toggle (ID, EN, ZH) */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-800 text-white font-semibold transition-colors focus:outline-hidden cursor-pointer"
                    aria-label="Pilih Bahasa / Select Language / 选择语言"
                    aria-expanded={isLangOpen}
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
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

                {/* THEME TOGGLE SWITCH: KIRI = GELAP, KANAN = TERANG */}
                <ThemeToggle />
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
                <Image
                  src="/images/logo.webp"
                  alt="Logo CV. Asia Plastik"
                  width={180}
                  height={60}
                  priority
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain dark:brightness-110"
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

              {/* Right: Search + Direct Contact / Menu Toggle */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Search Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden"
                  aria-label={t.navbar.searchPlaceholder}
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Direct CTA Button (Desktop) */}
                <Link
                  href="#contact"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all"
                >
                  <span>{t.navbar.quoteCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {/* MENU with Hamburger Icon */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-white transition-all duration-200 focus:outline-hidden group shadow-2xs"
                  aria-label={t.navbar.menuBtn}
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t.navbar.menuBtn}
                  </span>
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Search Overlay Bar */}
            {isSearchOpen && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3.5 animate-fade-in-up">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.navbar.searchPlaceholder}
                    className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm px-4 py-2.5 pl-10 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 shadow-md"
                    autoFocus
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-2 text-[11px] text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 transition-colors cursor-pointer"
                  >
                    {t.navbar.searchClose}
                  </button>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* HERO TYPOGRAPHY & LAYOUT */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16">
            {/* Visual Accent: Thin, elegant vertical line */}
            <div className="border-l-4 border-blue-600 pl-5 sm:pl-7 lg:pl-9 max-w-2xl lg:max-w-3xl animate-fade-in-up">
              {/* Top Label Badge */}
              <div className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase mb-3 flex items-center gap-2">
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="font-extrabold text-slate-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight uppercase">
                {t.hero.titleStart} <span className="text-blue-600 dark:text-blue-400">{t.hero.titleHighlight}</span>
              </h1>

              {/* Sub-headline */}
              <p className="mt-4 sm:mt-5 font-medium text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl tracking-wide max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* 1. Primary Button */}
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>{t.hero.primaryCta}</span>
                </Link>

                {/* 2. Secondary Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg border-2 border-slate-800 dark:border-slate-400 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{t.hero.secondaryCta}</span>
                </Link>
              </div>

              {/* Bottom Features (4 items) */}
              <div className="mt-8 pt-6 border-t border-slate-200/90 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {t.hero.features.map((feat, index) => {
                  const Icon = featureIcons[index] || Sparkles;
                  return (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm block">
                          {feat.title}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
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

        {/* BOTTOM METRICS & ACCENT STRIP */}
        <div className="w-full border-t border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-950/80 backdrop-blur-md py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            {/* Key Stats Counter */}
            <div className="flex items-center gap-6 sm:gap-12">
              {t.hero.metrics.map((metric, idx) => (
                <div key={idx} className={`flex items-center gap-2.5 ${idx === 1 ? "hidden xs:flex" : ""}`}>
                  <span className="text-xl sm:text-2xl font-black text-blue-600">{metric.value}</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 dark:text-white text-xs leading-tight">
                      {metric.label}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      {metric.sublabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Link */}
            <div className="flex items-center gap-4">
              <a
                href="#about"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{t.hero.facilityLink}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
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
