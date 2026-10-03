"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Globe,
  ChevronDown,
  Search,
  Menu,
  X,
  Hexagon,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"ID" | "EN">("ID");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenuItems = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Produk & Layanan", href: "#products" },
    { label: "Standar Mutu & Fasilitas", href: "#about" },
    { label: "Hubungi Kami", href: "#contact" },
  ];

  return (
    <section
      id="hero"
      style={{ backgroundImage: "url('/images/BG_CV%20ASIA.webp')" }}
      className="relative w-full h-[78vh] min-h-[520px] max-h-[660px] flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat font-sans"
    >
      {/* 1. NATURAL, BRIGHT BACKGROUND OVERLAYS (NO EXCESSIVE DARKNESS) */}
      {/* Targeted soft left-to-right gradient: ensures text readability on the left while leaving the building & sky bright & visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
      
      {/* Subtle top shade specifically for navbar text readability */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Subtle bottom edge gradient for smooth section transition */}
      <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* 2. TOP BAR & NAVBAR (HEADER OVERLAY) */}
      <header className="relative z-30 w-full">
        {/* Top Bar */}
        <div className="w-full border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end items-center text-xs sm:text-sm text-gray-100">
            {/* Desktop / Tablet Top Bar */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-6">
              {/* Email */}
              <a
                href="mailto:marketing@asiaplastik.com"
                className="flex items-center gap-1.5 text-gray-100 hover:text-white transition-colors drop-shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>marketing@asiaplastik.com</span>
              </a>

              {/* Divider */}
              <span className="text-white/30 select-none">|</span>

              {/* Phone */}
              <a
                href="tel:+62318433078"
                className="flex items-center gap-1.5 text-gray-100 hover:text-white transition-colors font-medium drop-shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+6231 8433078</span>
              </a>

              {/* Divider */}
              <span className="text-white/30 select-none">|</span>

              {/* Language Dropdown Toggle */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-white/15 text-white font-medium transition-colors focus:outline-none drop-shadow-sm"
                  aria-label="Pilih Bahasa"
                  aria-expanded={isLangOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>{selectedLang}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isLangOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl py-1 z-50 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLang("ID");
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between ${
                        selectedLang === "ID"
                          ? "text-blue-400 font-bold"
                          : "text-gray-200"
                      }`}
                    >
                      <span>ID (Indonesia)</span>
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
                      className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between ${
                        selectedLang === "EN"
                          ? "text-blue-400 font-bold"
                          : "text-gray-200"
                      }`}
                    >
                      <span>EN (English)</span>
                      {selectedLang === "EN" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Simplified Top Bar */}
            <div className="flex sm:hidden items-center justify-between w-full">
              <a
                href="tel:+62318433078"
                className="flex items-center gap-1.5 text-gray-100 text-xs font-medium"
              >
                <Phone className="w-3 h-3 text-blue-400" />
                <span>+6231 8433078</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  setSelectedLang(selectedLang === "ID" ? "EN" : "ID")
                }
                className="flex items-center gap-1 text-xs text-white font-semibold px-2 py-0.5 rounded bg-black/30 backdrop-blur-xs"
              >
                <Globe className="w-3 h-3 text-blue-400" />
                <span>{selectedLang}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-slate-950/75 backdrop-blur-md shadow-md border-b border-white/10"
              : "bg-transparent backdrop-blur-xs"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
            {/* Left: Corporate Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 border border-white/20 flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200">
                <Hexagon className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-white tracking-wider group-hover:text-blue-300 transition-colors uppercase drop-shadow-sm">
                  ASIA PLASTIK
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-gray-200 tracking-[0.22em] uppercase -mt-0.5">
                  Manufacturing
                </span>
              </div>
            </Link>

            {/* Right: Search Icon + MENU with Hamburger */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg text-gray-100 hover:text-white hover:bg-white/15 transition-colors focus:outline-none drop-shadow-sm"
                aria-label="Cari Produk"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* MENU Button + Hamburger Icon */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/30 border border-white/20 hover:bg-black/50 hover:border-white/40 text-white transition-all duration-200 focus:outline-none group backdrop-blur-xs shadow-sm"
                aria-label="Buka Menu Navigasi"
              >
                <span className="text-xs font-bold tracking-widest uppercase group-hover:text-blue-300 transition-colors">
                  MENU
                </span>
                <Menu className="w-4 h-4 text-white group-hover:text-blue-300 transition-colors" />
              </button>
            </div>
          </div>

          {/* Quick Search Overlay Input */}
          {isSearchOpen && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 transition-all duration-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari kebutuhan cetak plastik, botol HDPE, mold tooling, jerigen..."
                  className="w-full bg-slate-900/90 text-white placeholder-gray-400 text-xs sm:text-sm px-4 py-2.5 pl-10 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md shadow-2xl"
                  autoFocus
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-2 text-[11px] text-gray-400 hover:text-white px-2 py-0.5 rounded bg-white/10"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* 3. HERO TYPOGRAPHY & LAYOUT (PROPORTIONAL, COMPACT & CRISP) */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10">
          <div
            className={`max-w-2xl lg:max-w-3xl border-l-[3px] sm:border-l-4 border-white pl-4 sm:pl-6 lg:pl-8 transition-all duration-700 ease-out ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Main Headline (H1) - Balanced corporate size */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              PERUSAHAAN MANUFAKTUR PENGEMASAN PLASTIK
            </h1>

            {/* Sub-headline (p) - Crisp & readable */}
            <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-base font-medium text-gray-100 tracking-wide leading-relaxed uppercase max-w-xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.85)]">
              KAMI ADALAH AHLI DALAM INJECTION DAN BLOW MOLDING
            </p>

            {/* Action Buttons - Compact & proportional */}
            <div className="pt-5 sm:pt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Lihat Produk Kami</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black/35 hover:bg-black/55 text-white text-xs sm:text-sm font-semibold border border-white/30 backdrop-blur-xs transition-all duration-200"
              >
                <span>Hubungi Penjualan</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM ACCENT STRIP (COMPACT) */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/30 backdrop-blur-xs py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-200">
          <div className="flex items-center gap-2 drop-shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Standar Presisi Tinggi & Quality Assurance Teruji</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:inline text-gray-300 drop-shadow-sm">
              Kawasan Industri & Pergudangan
            </span>
            <a
              href="#about"
              className="text-blue-300 hover:text-white font-medium inline-flex items-center gap-1 transition-colors drop-shadow-sm"
            >
              <span>Pelajari Profil Perusahaan</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 5. SLIDE-OUT FLYOUT NAVIGATION DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          />

          <div className="relative w-full max-w-sm sm:max-w-md bg-slate-950/95 border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between z-10 shadow-2xl backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <Hexagon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white uppercase tracking-wider block">
                      ASIA PLASTIK
                    </span>
                    <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                      Menu Navigasi
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                  aria-label="Tutup Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 space-y-4">
                {navMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-white/10 hover:translate-x-1 transition-all duration-150"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                Kontak Representatif
              </div>
              <a
                href="mailto:marketing@asiaplastik.com"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>marketing@asiaplastik.com</span>
              </a>
              <a
                href="tel:+62318433078"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+6231 8433078</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
