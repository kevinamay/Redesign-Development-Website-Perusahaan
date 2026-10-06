"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const { lang, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

  const languageOptions: { code: Language; label: string; badge: string }[] = [
    { code: "id", label: "Bahasa (ID)", badge: "ID" },
    { code: "en", label: "English (EN)", badge: "EN" },
    { code: "zh", label: "中文 (CN)", badge: "CN" },
  ];

  const currentBadge = lang === "id" ? "ID" : lang === "en" ? "EN" : "CN";

  const navMenuItems = [
    { label: t.navbar.home, href: "/" },
    { label: t.navbar.about, href: "/about" },
    { label: t.navbar.products, href: "/products" },
    { label: t.navbar.facilities, href: "/about#mesin-produksi" },
    { label: t.navbar.contact, href: "/#contact" },
  ];

  return (
    <>
      <header className="w-full sticky top-0 z-50 shadow-xs">
        {/* Top Bar (Dark Navy bar identical to Beranda Hero) */}
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
        <nav className="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 shadow-xs">
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
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain block dark:hidden"
              />
              {/* Dark Mode Crisp White Logo */}
              <Image
                src="/images/logo.webp"
                alt="Logo CV. Asia Plastik"
                width={271}
                height={92}
                priority
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain hidden dark:block"
              />
            </Link>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navMenuItems.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 font-bold"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right: Search + Direct Contact / Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden cursor-pointer"
                aria-label={t.navbar.searchPlaceholder}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Direct CTA Button (Desktop) */}
              <Link
                href="/#contact"
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

      {/* Slide-out Flyout Mobile Drawer */}
      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
