"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import MobileDrawer from "@/components/MobileDrawer";
import { useLanguage, Language } from "@/data/translations";
import { companyConfig } from "@/data/companyConfig";
import {
  Mail,
  Phone,
  Globe,
  Menu,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const { lang, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

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
    { label: t.navbar.articles, href: "/article" },
    { label: t.navbar.contact, href: "/kontak" },
  ];

  let activeHref = "";
  if (pathname === "/") {
    activeHref = "/";
  } else if (pathname === "/about" || pathname?.startsWith("/about")) {
    activeHref = "/about";
  } else if (pathname === "/products" || pathname?.startsWith("/products")) {
    activeHref = "/products";
  } else if (pathname === "/article" || pathname?.startsWith("/article")) {
    activeHref = "/article";
  } else if (pathname === "/kontak" || pathname?.startsWith("/kontak")) {
    activeHref = "/kontak";
  } else if (pathname === "/faq" || pathname?.startsWith("/faq")) {
    activeHref = "/faq";
  } else if (pathname === "/partner" || pathname?.startsWith("/partner")) {
    activeHref = "/partner";
  }

  // Jika kursor mouse mengarah (hover) ke suatu menu di navbar, HANYA menu tersebut yang menyala biru.
  // Menu aktif otomatis tidak lagi berwarna biru saat menu lain diarahkan.
  const currentHighlight = hoveredHref || activeHref;

  return (
    <>
      {/* 1. Top Bar (Baby Blue / Soft Blue bar) - SCROLLS NATURALLY WITH PAGE (NOT STICKY) - Disembunyikan di HP, Tampil di Tablet & Desktop */}
      <div className="hidden sm:block w-full max-w-[100vw] bg-[#edf5fd] dark:bg-slate-950 text-slate-900 dark:text-slate-300 border-b border-blue-100 dark:border-slate-800 relative z-[60] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between w-full text-xs box-border">
          {/* Top Bar Left Tagline */}
          <div className="hidden md:flex items-center gap-2 text-slate-900 dark:text-slate-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="truncate">{t.topBar.tagline}</span>
          </div>

          {/* Top Bar Right: Contact & Language */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto">
            {/* Email - hidden on small mobile screen to prevent stretching */}
            <a
              href={`mailto:${companyConfig.contact.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-900 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors font-medium text-xs"
              aria-label="Email Asia Plastik"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="hidden md:inline">{companyConfig.contact.email}</span>
              <span className="inline md:hidden">{t.topBar.emailLabel}</span>
            </a>

            <span className="hidden sm:inline text-blue-300 dark:text-slate-700 select-none">|</span>

            {/* Phone */}
            <a
              href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1 text-slate-900 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors font-semibold text-xs shrink-0"
              aria-label="Telepon Asia Plastik"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="hidden md:inline">{companyConfig.contact.phoneDisplay}</span>
              <span className="inline md:hidden">{t.topBar.phoneLabel}</span>
            </a>

            <span className="text-blue-300 dark:text-slate-700 select-none">|</span>

            {/* Marketplace Official Store Links (Shopee & Tokopedia) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href={companyConfig.marketplace.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 hover:text-[#EE4D2D] dark:text-slate-200 dark:hover:text-[#EE4D2D] transition-all duration-200 p-1 rounded-md hover:bg-blue-100/70 dark:hover:bg-slate-800 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Shopee Official Store CV. Asia Plastik"
                title="Shopee Official Store"
              >
                <svg
                  className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] fill-none"
                  viewBox="0 0 192 192"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="14"
                    d="M23.014 58.406C22.78 54.94 25.507 52 28.953 52h134.094c3.446 0 6.172 2.94 5.939 6.406l-5.174 96.451c-.455 8.491-7.473 15.143-15.977 15.143H44.165c-8.504 0-15.522-6.652-15.977-15.143zM125 51a29 29 0 0 0-29-29 29 29 0 0 0-29 29"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="14"
                    d="M114 83H88a14 14 0 0 0 0 28h4m-2 0h14a14 14 0 0 1 9.899 4.101 13.994 13.994 0 0 1 0 19.798A14 14 0 0 1 104 139H78"
                  />
                </svg>
              </a>

              <a
                href={companyConfig.marketplace.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 hover:text-[#42B549] dark:text-slate-200 dark:hover:text-[#42B549] transition-all duration-200 p-1 rounded-md hover:bg-blue-100/70 dark:hover:bg-slate-800 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Tokopedia Official Store CV. Asia Plastik"
                title="Tokopedia Official Store"
              >
                <svg
                  className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] fill-current"
                  viewBox="0 0 192 192"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                  />
                </svg>
              </a>
            </div>

            <span className="text-blue-300 dark:text-slate-700 select-none">|</span>

            {/* Language Toggle (ID, EN, ZH) */}
            <div ref={langRef} className="relative shrink-0 z-50">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-blue-100/70 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold transition-colors focus:outline-hidden cursor-pointer"
                aria-label="Pilih Bahasa / Select Language / 选择语言"
                aria-expanded={isLangOpen}
              >
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{currentBadge}</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-600 dark:text-slate-400 transition-transform duration-200 ${
                    isLangOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl dark:shadow-2xl py-1.5 z-[70] text-xs transition-colors duration-200">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => {
                        setLanguage(opt.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer ${
                        lang === opt.code
                          ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-slate-800/60"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {lang === opt.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider hanya tampil di Tablet / Laptop / Desktop saat switch tema aktif */}
            <span className="hidden sm:inline text-blue-300 dark:text-slate-700 select-none">|</span>

            {/* THEME TOGGLE SWITCH: KIRI = GELAP, KANAN = TERANG (Hanya muncul di Tablet / Laptop / Desktop, disembunyikan di HP) */}
            <ThemeToggle className="hidden sm:inline-flex" />
          </div>
        </div>
      </div>

      {/* 2. Main Navbar - STICKY TOP-0 (LOCKED ONLY THIS SECTION DURING SCROLL) */}
      <header className="w-full max-w-[100vw] sticky top-0 z-50 shadow-xs">
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
            <div
              className="hidden lg:flex items-center gap-7"
              onMouseLeave={() => setHoveredHref(null)}
            >
              {navMenuItems.map((item, index) => {
                const isBlue = currentHighlight === item.href;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    onClick={() => setHoveredHref(null)}
                    className={`text-sm font-semibold transition-colors duration-150 ${
                      isBlue
                        ? "text-blue-600 dark:text-blue-400 font-bold"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right: Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
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

      {/* Mobile Menu Bottom Sheet Popup (Final Design C) */}
      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
