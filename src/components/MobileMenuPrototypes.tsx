"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/data/translations";
import {
  X,
  Home,
  Users,
  Package,
  ShieldCheck,
  PhoneCall,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Sparkles,
  Eye,
  MessageCircle,
} from "lucide-react";

export type MenuVariant = "A" | "B" | "C";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  variant: MenuVariant;
}

// ============================================================================
// SHARED DATA & SOCIAL ICONS
// ============================================================================
const socialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/asiaplastik/?locale=id_ID",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/asia_plastik?igsh=ZWpjNG5zcm9rbW42",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AsiaPlastik",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.774-42.144-48.423-48.426C458.581 64 288 64 288 64S117.42 64 74.768 75.657c-23.649 6.282-42.143 24.776-48.425 48.426C15 166.738 15 256 15 256s0 89.262 11.343 131.917c6.282 23.65 24.776 42.144 48.425 48.426C117.42 448 288 448 288 448s170.58 0 213.232-11.657c23.649-6.282 42.143-24.776 48.423-48.426C561 345.262 561 256 561 256s0-89.262-11.345-131.917zM232 336V176l144 80-144 80z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@asiaplastik",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/asia-plastik-plastic-packaging-manufacturing/?originalSubdomain=id",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/628113229988?text=Halo%20Asia%20Plastik%2C%20saya%20ingin%20berkonsultasi",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

// ============================================================================
// VARIANT A: CENTER FLOATING MODAL CARD (Clean, Contained, iOS-Dialog Vibe)
// ============================================================================
export function VariantA({
  onClose,
}: {
  onClose: () => void;
}) {
  const { lang, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.navbar.home, href: "/", icon: Home, badge: "Utama" },
    { label: t.navbar.about, href: "/about", icon: Users },
    { label: t.navbar.products, href: "/products", icon: Package, badge: "Katalog" },
    { label: t.navbar.facilities, href: "/about#mesin-produksi", icon: ShieldCheck },
    { label: t.navbar.contact, href: "/kontak", icon: PhoneCall },
  ];

  const languageOptions: { code: Language; label: string }[] = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
    { code: "zh", label: "CN" },
  ];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Dimmed Glass Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Floating Center Dialog Card */}
      <div className="relative z-[100000] w-full max-w-[390px] max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 p-5 flex flex-col gap-4 animate-scale-up">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image
              src="/images/logo-dark.webp"
              alt="Logo Asia Plastik"
              width={160}
              height={54}
              className="h-7 w-auto object-contain block dark:hidden"
            />
            <Image
              src="/images/logo.webp"
              alt="Logo Asia Plastik"
              width={160}
              height={54}
              className="h-7 w-auto object-contain hidden dark:block"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Language Bar */}
        <div className="flex items-center justify-between p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs">
          <div className="flex items-center gap-1.5 px-2 text-slate-500 dark:text-slate-400 font-semibold">
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px]">Bahasa:</span>
          </div>
          <div className="flex items-center gap-1">
            {languageOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLanguage(opt.code)}
                className={`py-1 px-2.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                  lang === opt.code
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Action Rows */}
        <nav className="flex flex-col gap-1.5">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Quick Contact & Socials Box */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <a
              href="tel:+62318433078"
              className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600"
            >
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>+6231 8433078</span>
            </a>
            <a
              href="mailto:marketing@asiaplastik.com"
              className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span className="truncate">Email Kami</span>
            </a>
          </div>
          <div className="border-t border-slate-200/60 dark:border-slate-700/60 pt-2 flex items-center justify-center gap-4 text-slate-400">
            {socialIcons.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// VARIANT B: TOP DROPDOWN ISLAND (Header-Attached SaaS Dynamic Island Vibe)
// ============================================================================
export function VariantB({
  onClose,
}: {
  onClose: () => void;
}) {
  const { lang, setLanguage, t } = useLanguage();

  const gridLinks = [
    { label: t.navbar.home, href: "/", icon: Home, desc: "Beranda Utama" },
    { label: t.navbar.about, href: "/about", icon: Users, desc: "Profil & Sejarah" },
    { label: t.navbar.products, href: "/products", icon: Package, desc: "Katalog Kemasan" },
    { label: t.navbar.facilities, href: "/about#mesin-produksi", icon: ShieldCheck, desc: "Pabrik & ISO" },
  ];

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Floating Island hanging from the Top Header */}
      <div className="relative z-[100000] top-16 sm:top-20 inset-x-3 sm:inset-x-auto sm:right-6 sm:w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 p-5 flex flex-col gap-4 animate-slide-down">
        {/* Island Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide">
              NAVIGASI CEPAT
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Compact Lang Pills */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-[11px] font-bold">
              {(["id", "en", "zh"] as Language[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                    lang === code ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <ThemeToggle />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2x2 Grid of Main Navigation */}
        <div className="grid grid-cols-2 gap-2.5">
          {gridLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="group p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-600 hover:text-white border border-slate-200/60 dark:border-slate-700/60 transition-all duration-200 flex flex-col justify-between gap-3 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-800 dark:text-slate-100 group-hover:text-white">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 group-hover:text-blue-100">
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured CTA Banner: Hubungi Penjualan */}
        <Link
          href="/kontak"
          onClick={onClose}
          className="group flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">
                Konsultasi & Penawaran
              </div>
              <div className="text-sm font-bold">{t.navbar.contact}</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Island Footer: Contacts & Socials */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-500 font-medium">+6231 8433078</span>
          <div className="flex items-center gap-3 text-slate-400">
            {socialIcons.slice(0, 4).map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// VARIANT C: BOTTOM SHEET POPUP (Thumb-Friendly, Mobile-First Action Sheet)
// ============================================================================
export function VariantC({
  onClose,
}: {
  onClose: () => void;
}) {
  const { lang, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.navbar.home, href: "/", icon: Home, hint: "Halaman Beranda" },
    { label: t.navbar.about, href: "/about", icon: Users, hint: "Profil & Sertifikasi ISO" },
    { label: t.navbar.products, href: "/products", icon: Package, hint: "Katalog Botol, Jerigen & Pail" },
    { label: t.navbar.facilities, href: "/about#mesin-produksi", icon: ShieldCheck, hint: "Mesin Injection & Blow" },
    { label: t.navbar.contact, href: "/kontak", icon: PhoneCall, hint: "Alamat Kantor & Kontak Sales" },
  ];

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col justify-end sm:items-center sm:justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Bottom Sheet Card */}
      <div className="relative z-[100000] w-full sm:max-w-[430px] bg-white dark:bg-slate-900 rounded-t-[32px] sm:rounded-[32px] shadow-2xl border-t sm:border border-slate-200/80 dark:border-slate-800 p-6 pt-3 flex flex-col gap-4 max-h-[88vh] overflow-y-auto animate-slide-up">
        {/* Drag Handle Indicator */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto cursor-pointer" onClick={onClose} />

        {/* Sheet Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Menu Navigasi
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              CV. ASIA PLASTIK
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Horizontal Language Strip */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-500">
          <span className="px-2 text-[11px]">Pilih Bahasa:</span>
          {(["id", "en", "zh"] as Language[]).map((code) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`flex-1 py-1 rounded-lg font-bold text-center transition-all cursor-pointer ${
                lang === code ? "bg-blue-600 text-white shadow-xs" : "hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {code === "id" ? "Indonesia" : code === "en" ? "English" : "中文"}
            </button>
          ))}
        </div>

        {/* Navigation List with Subtitles */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {item.hint}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            );
          })}
        </nav>

        {/* Dual Primary Quick Actions (WhatsApp & Contact) */}
        <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <a
            href="https://wa.me/628113229988?text=Halo%20Asia%20Plastik%2C%20saya%20ingin%20berkonsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
          <Link
            href="/kontak"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow-md hover:opacity-90 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Kontak Kami</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPOSITE POPUP DISPATCHER
// ============================================================================
export function MobileMenuPopup({
  isOpen,
  onClose,
  variant,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <>
      {variant === "A" && <VariantA onClose={onClose} />}
      {variant === "B" && <VariantB onClose={onClose} />}
      {variant === "C" && <VariantC onClose={onClose} />}
    </>,
    document.body
  );
}

// ============================================================================
// PROTOTYPE SWITCHER (FLOATING BOTTOM BAR FOR USER SELECTION)
// ============================================================================
interface PrototypeSwitcherProps {
  currentVariant: MenuVariant;
  onSelectVariant: (v: MenuVariant) => void;
  onOpenMenu: () => void;
}

export function PrototypeSwitcher({
  currentVariant,
  onSelectVariant,
  onOpenMenu,
}: PrototypeSwitcherProps) {
  const variants: { key: MenuVariant; name: string }[] = [
    { key: "A", name: "A (Center Modal)" },
    { key: "B", name: "B (Top Island)" },
    { key: "C", name: "C (Bottom Sheet)" },
  ];

  const currentIndex = variants.findIndex((v) => v.key === currentVariant);

  const prev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + variants.length) % variants.length;
    onSelectVariant(variants[nextIdx].key);
  }, [currentIndex, variants, onSelectVariant]);

  const next = useCallback(() => {
    const nextIdx = (currentIndex + 1) % variants.length;
    onSelectVariant(variants[nextIdx].key);
  }, [currentIndex, variants, onSelectVariant]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea" || (document.activeElement as HTMLElement)?.isContentEditable) {
        return;
      }
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  return (
    <aside
      aria-label="Prototype Variant Switcher"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[99990] flex flex-wrap items-center justify-center gap-2 px-3 py-2 rounded-full bg-slate-950/90 text-white shadow-2xl border border-slate-700/80 backdrop-blur-md text-xs select-none"
    >
      <div className="flex items-center gap-1.5 pl-2 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Prototype:</span>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={prev}
        className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-200 transition-colors cursor-pointer"
        title="Varian Sebelumnya (←)"
        aria-label="Previous Variant"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Direct Variant Buttons */}
      <div className="flex items-center gap-1">
        {variants.map((v) => (
          <button
            key={v.key}
            onClick={() => onSelectVariant(v.key)}
            className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
              currentVariant === v.key
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Next Arrow */}
      <button
        onClick={next}
        className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-200 transition-colors cursor-pointer"
        title="Varian Berikutnya (→)"
        aria-label="Next Variant"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Trigger Button: Preview Popup */}
      <button
        onClick={onOpenMenu}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold shadow-xs transition-colors cursor-pointer ml-1"
        title="Klik untuk membuka popup menu ini"
      >
        <Eye className="w-3.5 h-3.5" />
        <span>Buka Popup</span>
      </button>
    </aside>
  );
}
