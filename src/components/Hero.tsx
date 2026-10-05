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
    <section id="hero" className="relative min-h-[100vh] w-full overflow-hidden font-sans">
      {/* ========================================================================= */}
      {/* LAYER 1: THE IMAGE (MAKE IT VISIBLE, Z-0)                                 */}
      {/* ========================================================================= */}
      <Image
        src="/images/fotobangunan (1).jpg"
        alt="Fasilitas Pabrik CV. Asia Plastik"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* ========================================================================= */}
      {/* LAYER 2: ULTRA-LIGHT OVERLAY (BRIGHT SKY & BUILDING VISIBLE, Z-10)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent z-10 pointer-events-none" />

      {/* ========================================================================= */}
      {/* LAYER 3: CONTENT & NAVBAR (BRING TO FRONT, Z-20)                          */}
      {/* ========================================================================= */}
      <div className="relative z-20 flex flex-col justify-between h-full min-h-[100vh]">
        {/* TOP BAR & MAIN NAVBAR */}
        <header className="w-full">
          {/* Top Bar */}
          <div className="w-full border-b border-white/10 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex justify-end items-center text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Email Link */}
                <a
                  href="mailto:marketing@asiaplastik.com"
                  className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors duration-150 drop-shadow-sm"
                  aria-label="Email Asia Plastik"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span className="hidden sm:inline">marketing@asiaplastik.com</span>
                  <span className="inline sm:hidden">Email</span>
                </a>

                <span className="text-white/20 select-none">|</span>

                {/* Phone Link */}
                <a
                  href="tel:+62318433078"
                  className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors duration-150 font-medium drop-shadow-sm"
                  aria-label="Telepon Asia Plastik"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span>+6231 8433078</span>
                </a>

                <span className="text-white/20 select-none">|</span>

                {/* Language Toggle Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded-md hover:bg-white/10 text-white font-semibold transition-colors focus:outline-hidden drop-shadow-sm"
                    aria-label="Pilih Bahasa"
                    aria-expanded={isLangOpen}
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>{selectedLang}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-gray-300 transition-transform duration-200 ${
                        isLangOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-36 bg-slate-900/95 backdrop-blur-md border border-white/15 rounded-lg shadow-2xl py-1.5 z-50 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLang("ID");
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between transition-colors ${
                          selectedLang === "ID"
                            ? "text-blue-400 font-bold"
                            : "text-gray-300"
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
                        className={`w-full text-left px-3 py-1.5 hover:bg-white/10 flex items-center justify-between transition-colors ${
                          selectedLang === "EN"
                            ? "text-blue-400 font-bold"
                            : "text-gray-300"
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

          {/* Main Navbar */}
          <nav className="w-full bg-transparent backdrop-blur-sm border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
              {/* Left Side: Corporate Logo using next/image */}
              <Link
                href="/"
                className="inline-flex items-center focus:outline-hidden hover:opacity-95 transition-opacity"
                aria-label="Beranda CV. Asia Plastik"
              >
                <Image
                  src="/images/logo.webp"
                  alt="Logo CV. Asia Plastik"
                  width={175}
                  height={59}
                  priority
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-md"
                />
              </Link>

              {/* Right Side: Search Icon + MENU with Hamburger Icon */}
              <div className="flex items-center gap-2 sm:gap-3.5">
                {/* Search Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 sm:p-2.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden drop-shadow-sm"
                  aria-label="Cari Produk atau Kebutuhan Manufaktur"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Word MENU + Hamburger Menu Icon */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-black/25 hover:bg-black/40 border border-white/25 hover:border-white/40 text-white transition-all duration-200 focus:outline-hidden group shadow-xs backdrop-blur-xs"
                  aria-label="Buka Menu"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase group-hover:text-blue-300 transition-colors">
                    MENU
                  </span>
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-300 transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Search Dropdown / Bar */}
            {isSearchOpen && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3.5 animate-fade-in-up">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari kebutuhan cetak plastik, botol HDPE, mold tooling, jerigen..."
                    className="w-full bg-slate-900/90 text-white placeholder-gray-400 text-xs sm:text-sm px-4 py-2.5 pl-10 rounded-xl border border-white/20 focus:outline-hidden focus:ring-2 focus:ring-blue-500 backdrop-blur-md shadow-2xl"
                    autoFocus
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-2 text-[11px] text-gray-400 hover:text-white px-2 py-0.5 rounded bg-white/10 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* HERO TYPOGRAPHY & LAYOUT (VERTICALLY CENTERED, LEFT-ALIGNED) */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20">
            {/* Visual Accent: Thin, elegant vertical line */}
            <div className="border-l-4 border-white/80 pl-5 sm:pl-7 lg:pl-9 max-w-3xl lg:max-w-4xl animate-fade-in-up">
              {/* Main Headline (H1) */}
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                PERUSAHAAN MANUFAKTUR PENGEMASAN PLASTIK
              </h1>

              {/* Sub-headline (p) */}
              <p className="mt-4 sm:mt-5 font-bold text-white text-lg sm:text-xl tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                KAMI ADALAH AHLI DALAM INJECTION DAN BLOW MOLDING
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* 1. Solid Blue Button */}
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Lihat Produk Kami →</span>
                </Link>

                {/* 2. Outlined Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-black/25 border border-white hover:bg-white/15 text-white font-medium text-sm sm:text-base backdrop-blur-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md"
                >
                  <span>Hubungi Penjualan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACCENT STRIP */}
        <div className="w-full border-t border-white/10 bg-black/25 backdrop-blur-xs py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2 drop-shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Presisi Tinggi • Injection & Blow Moulding Standard Industri</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="#about"
                className="text-blue-300 hover:text-white font-medium inline-flex items-center gap-1 transition-colors drop-shadow-sm"
              >
                <span>Pelajari Profil Fasilitas</span>
                <ChevronRight className="w-3.5 h-3.5" />
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
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-slate-950/95 border-l border-white/15 p-6 sm:p-8 flex flex-col justify-between z-10 shadow-2xl backdrop-blur-xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
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
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden"
                  aria-label="Tutup Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-3">
                {navMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-sm sm:text-base font-semibold text-gray-200 hover:text-white hover:bg-white/10 hover:translate-x-1 transition-all duration-150"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Contact */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                Kontak Representatif
              </div>
              <a
                href="mailto:marketing@asiaplastik.com"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>marketing@asiaplastik.com</span>
              </a>
              <a
                href="tel:+62318433078"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+6231 8433078</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
