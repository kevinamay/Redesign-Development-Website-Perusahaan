"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Globe,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"ID" | "EN">("ID");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navMenuItems = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Produk & Layanan", href: "#products" },
    { label: "Standar Mutu & Fasilitas", href: "#about" },
    { label: "Hubungi Penjualan", href: "#contact" },
  ];

  return (
    <section id="hero" className="relative min-h-[100vh] w-full overflow-hidden bg-white font-sans">
      {/* ========================================================================= */}
      {/* 1. LAYER 1: THE BACKGROUND IMAGE                                          */}
      {/* ========================================================================= */}
      <Image
        src="/images/fotopt.png"
        alt="Fasilitas Pabrik CV. Asia Plastik"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-[100%_0%] z-0"
      />

      {/* ========================================================================= */}
      {/* 2. LAYER 2: THE WHITE GRADIENT OVERLAY (SPLIT SCREEN EFFECT)              */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 via-40% to-transparent to-70% pointer-events-none" />

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
                <span>Kawasan Industri & Pergudangan • Spesialis Injection & Blow Moulding Sejak 1990</span>
              </div>

              {/* Top Bar Right: Contact & Language */}
              <div className="flex items-center gap-3 sm:gap-6 ml-auto">
                {/* Email */}
                <a
                  href="mailto:marketing@asiaplastik.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  aria-label="Email Asia Plastik"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="hidden sm:inline">marketing@asiaplastik.com</span>
                  <span className="inline sm:hidden">Email</span>
                </a>

                <span className="text-slate-700 select-none">|</span>

                {/* Phone */}
                <a
                  href="tel:+62318433078"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
                  aria-label="Telepon Asia Plastik"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>+6231 8433078</span>
                </a>

                <span className="text-slate-700 select-none">|</span>

                {/* Language Toggle */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-800 text-white font-semibold transition-colors focus:outline-hidden"
                    aria-label="Pilih Bahasa"
                    aria-expanded={isLangOpen}
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>{selectedLang}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                        isLangOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl py-1.5 z-50 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLang("ID");
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 hover:bg-slate-800 flex items-center justify-between transition-colors ${
                          selectedLang === "ID"
                            ? "text-blue-400 font-bold"
                            : "text-slate-300"
                        }`}
                      >
                        <span>Bahasa (ID)</span>
                        {selectedLang === "ID" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLang("EN");
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 hover:bg-slate-800 flex items-center justify-between transition-colors ${
                          selectedLang === "EN"
                            ? "text-blue-400 font-bold"
                            : "text-slate-300"
                        }`}
                      >
                        <span>English (EN)</span>
                        {selectedLang === "EN" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Navbar (Clean light background with dark typography) */}
          <nav className="w-full bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-xs">
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
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                />
              </Link>

              {/* Center: Desktop Navigation Links (matching modern reference layout) */}
              <div className="hidden lg:flex items-center gap-7">
                {navMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Right: Search + Direct Contact / Menu Toggle */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                {/* Search Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-hidden"
                  aria-label="Cari Produk atau Kebutuhan Manufaktur"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Direct CTA Button (Desktop) */}
                <Link
                  href="#contact"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all"
                >
                  <span>Minta Penawaran</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {/* MENU with Hamburger Icon */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 transition-all duration-200 focus:outline-hidden group shadow-2xs"
                  aria-label="Buka Menu"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase group-hover:text-blue-600 transition-colors">
                    MENU
                  </span>
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 group-hover:text-blue-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Search Overlay Bar */}
            {isSearchOpen && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3.5 animate-fade-in-up">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari kebutuhan cetak plastik, botol HDPE, mold tooling, jerigen..."
                    className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm px-4 py-2.5 pl-10 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 shadow-md"
                    autoFocus
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-2 text-[11px] text-slate-500 hover:text-slate-800 px-2 py-0.5 rounded bg-slate-100 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* HERO TYPOGRAPHY & LAYOUT (DARK TEXT ON WHITE GRADIENT) */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16">
            {/* Visual Accent: Thin, elegant vertical line */}
            <div className="border-l-4 border-blue-600 pl-5 sm:pl-7 lg:pl-9 max-w-2xl lg:max-w-3xl animate-fade-in-up">
              
              {/* Top Label Badge */}
              <div className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase mb-3 flex items-center gap-2">
                <span>MANUFACTURING & PACKAGING SOLUTIONS</span>
              </div>

              {/* Main Headline (H1): text-slate-900 with 'PLASTIK' in text-blue-600 */}
              <h1 className="font-extrabold text-slate-900 text-3xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight uppercase">
                PERUSAHAAN MANUFAKTUR PENGEMASAN <span className="text-blue-600">PLASTIK</span>
              </h1>

              {/* Sub-headline: text-slate-600 */}
              <p className="mt-4 sm:mt-5 font-medium text-slate-600 text-base sm:text-lg lg:text-xl tracking-wide max-w-xl leading-relaxed">
                KAMI ADALAH AHLI DALAM INJECTION DAN BLOW MOLDING
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* 1. Primary Button: Solid Blue */}
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Lihat Produk Kami →</span>
                </Link>

                {/* 2. Secondary Button: Outlined Dark Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg border-2 border-slate-800 text-slate-800 hover:bg-slate-100 bg-transparent font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Hubungi Penjualan</span>
                </Link>
              </div>

              {/* Bottom Features (4 items): text-slate-800 & icons text-blue-600 */}
              <div className="mt-8 pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm block">Presisi Cetak Tinggi</span>
                    <span className="text-[11px] text-slate-500 hidden sm:block">Injection & Blow Mold</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm block">Quality Control Teruji</span>
                    <span className="text-[11px] text-slate-500 hidden sm:block">Inspeksi Standar Industri</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm block">Resin Mutu Prima</span>
                    <span className="text-[11px] text-slate-500 hidden sm:block">Food Grade & Industrial</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm block">Kapasitas Produksi Massal</span>
                    <span className="text-[11px] text-slate-500 hidden sm:block">Kontrak Pasokan Besar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS & ACCENT STRIP (Clean Light Aesthetic) */}
        <div className="w-full border-t border-slate-200/80 bg-white/70 backdrop-blur-md py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            {/* Key Stats Counter */}
            <div className="flex items-center gap-6 sm:gap-12">
              <div className="flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-black text-blue-600">30+</span>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-xs leading-tight">Tahun</span>
                  <span className="text-[11px] text-slate-500 leading-tight">Pengalaman Industri</span>
                </div>
              </div>

              <div className="hidden xs:flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-black text-blue-600">100+</span>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-xs leading-tight">Mitra Klien</span>
                  <span className="text-[11px] text-slate-500 leading-tight">Perusahaan Nasional</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-black text-blue-600">99.8%</span>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-xs leading-tight">Akurasi Cetak</span>
                  <span className="text-[11px] text-slate-500 leading-tight">Standar Presisi Tinggi</span>
                </div>
              </div>
            </div>

            {/* Quick Link */}
            <div className="flex items-center gap-4">
              <a
                href="#about"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Pelajari Profil Fasilitas Pabrik</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-OUT FLYOUT NAVIGATION MENU (DRAWER, FIXED Z-50)                     */}
      {/* ========================================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fade-in-up">
          {/* Backdrop */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white border-l border-slate-200 p-6 sm:p-8 flex flex-col justify-between z-10 shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <Image
                  src="/images/logo.webp"
                  alt="Logo CV. Asia Plastik"
                  width={150}
                  height={50}
                  className="h-8 sm:h-9 w-auto object-contain"
                />

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
                  aria-label="Tutup Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-2">
                {navMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 hover:translate-x-1 transition-all duration-150"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Contact */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Kontak Representatif
              </div>
              <a
                href="mailto:marketing@asiaplastik.com"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>marketing@asiaplastik.com</span>
              </a>
              <a
                href="tel:+62318433078"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>+6231 8433078</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
