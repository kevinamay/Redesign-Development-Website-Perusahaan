"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/data/translations";
import { companyConfig } from "@/data/companyConfig";
import {
  X,
  Home,
  Users,
  Package,
  Newspaper,
  HelpCircle,
  Handshake,
  PhoneCall,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// 6 Official Social Media Channels (in exact order)
const socialMediaChannels = [
  {
    name: "Facebook",
    href: companyConfig.socialMedia.facebook,
    hoverBg: "hover:bg-[#1877F2]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512" aria-hidden="true">
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: companyConfig.socialMedia.instagram,
    hoverBg: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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
    href: companyConfig.socialMedia.youtube,
    hoverBg: "hover:bg-[#FF0000]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512" aria-hidden="true">
        <path d="M549.655 124.083c-6.281-23.65-24.774-42.144-48.423-48.426C458.581 64 288 64 288 64S117.42 64 74.768 75.657c-23.649 6.282-42.143 24.776-48.425 48.426C15 166.738 15 256 15 256s0 89.262 11.343 131.917c6.282 23.65 24.776 42.144 48.425 48.426C117.42 448 288 448 288 448s170.58 0 213.232-11.657c23.649-6.282 42.143-24.776 48.423-48.426C561 345.262 561 256 561 256s0-89.262-11.345-131.917zM232 336V176l144 80-144 80z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: companyConfig.socialMedia.tiktok,
    hoverBg: "hover:bg-[#000000] dark:hover:bg-[#25F4EE] dark:hover:text-black",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: companyConfig.socialMedia.linkedin,
    hoverBg: "hover:bg-[#0A66C2]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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
    href: companyConfig.contact.whatsapp.getChatUrl(
      "primary",
      "Halo Asia Plastik, saya ingin berkonsultasi"
    ),
    hoverBg: "hover:bg-[#25D366]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { lang, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-popup-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-popup-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-popup-open");
    };
  }, [isOpen]);

  // Escape key handler
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

  const hints = {
    id: {
      home: "Halaman Utama Asia Plastik",
      about: "Profil & Sertifikasi ISO 9001:2015",
      products: "Katalog Botol, Jerigen & Pail",
      articles: "Wawasan & Berita Manufaktur",
      faq: "Pertanyaan Umum & Jawaban",
      partner: "Klien & Mitra Industri Kami",
      facilities: "Mesin Injection & Blow Moulding",
      contact: "Alamat Kantor & Kontak Sales",
      langLabel: "Pilih Bahasa:",
      socialLabel: "Media Sosial Resmi",
      waText: "Chat WhatsApp",
      contactBtn: "Kontak Kami",
    },
    en: {
      home: "Asia Plastik Main Page",
      about: "Company Profile & ISO 9001:2015",
      products: "Bottle, Jerrycan & Pail Catalog",
      articles: "Manufacturing News & Insights",
      faq: "Frequently Asked Questions",
      partner: "Our Industry Clients & Partners",
      facilities: "Injection & Blow Moulding",
      contact: "Office Address & Sales Team",
      langLabel: "Select Language:",
      socialLabel: "Official Social Media",
      waText: "Chat WhatsApp",
      contactBtn: "Contact Us",
    },
    zh: {
      home: "亚洲塑料官方首页",
      about: "企业介绍与ISO 9001认证",
      products: "塑料瓶、塑料桶产品目录",
      articles: "塑料制造行业资讯与文章",
      faq: "常见问题解答与咨询",
      partner: "企业客户与合作伙伴",
      facilities: "注塑吹塑500L精密机械",
      contact: "泗水总部地址与业务对接",
      langLabel: "选择语言：",
      socialLabel: "官方社交媒体",
      waText: "微信/WhatsApp咨询",
      contactBtn: "联系我们",
    },
  }[lang];

  const navLinks = [
    { label: t.navbar.home, href: "/", icon: Home, hint: hints.home },
    { label: t.navbar.about, href: "/about", icon: Users, hint: hints.about },
    { label: t.navbar.products, href: "/products", icon: Package, hint: hints.products },
    { label: t.navbar.articles, href: "/article", icon: Newspaper, hint: hints.articles },
    { label: t.navbar.faq || "FAQ", href: "/faq", icon: HelpCircle, hint: hints.faq },
    { label: t.navbar.partner || "Partner", href: "/partner", icon: Handshake, hint: hints.partner },
    { label: t.navbar.contact, href: "/kontak", icon: PhoneCall, hint: hints.contact },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[99999] overflow-hidden isolate">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Slide-in Drawer Container from RIGHT */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] max-w-[90vw] h-full bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between z-[100000] overflow-hidden animate-slide-in-right box-border">
        {/* Header: Title + ThemeToggle + Close Button */}
        <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div>
            <div className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Menu Navigasi
            </div>
            <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              CV. ASIA PLASTIK
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body: Language Selector & Navigation List */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-4">
          {/* Compact Horizontal Language Strip */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-500">
            <span className="px-2 text-[11px] font-bold text-slate-500 dark:text-slate-400">
              {hints.langLabel}
            </span>
            {(["id", "en", "zh"] as Language[]).map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`flex-1 py-1.5 rounded-lg font-bold text-center transition-all cursor-pointer ${
                  lang === code
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {code === "id" ? "Indonesia" : code === "en" ? "English" : "中文"}
              </button>
            ))}
          </div>

          {/* Navigation List with Subtitles */}
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((item, idx) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl transition-colors ${
                    isActive
                      ? "bg-blue-50/90 dark:bg-slate-800/90 text-blue-600 dark:text-blue-400"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800/70"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors shrink-0 shadow-2xs ${
                        isActive
                          ? "bg-blue-600 text-white shadow-blue-500/20"
                          : "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold transition-colors ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400 font-extrabold"
                            : "text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500">
                        {item.hint}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-all ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 translate-x-1"
                        : "text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer: Quick Actions (WhatsApp & Contact) & Socials */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3 shrink-0">
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={companyConfig.contact.whatsapp.getChatUrl(
                "primary",
                "Halo Asia Plastik, saya ingin berkonsultasi"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-[0.99] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{hints.waText}</span>
            </a>
            <Link
              href="/kontak"
              onClick={onClose}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow-md hover:opacity-90 transition-all active:scale-[0.99] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{hints.contactBtn}</span>
            </Link>
          </div>

          <div className="pt-2.5 border-t border-slate-100 dark:border-slate-850 flex flex-col items-center gap-2">
            <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              {hints.socialLabel}
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 w-full flex-wrap">
              {socialMediaChannels.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  aria-label={s.name}
                  className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white ${s.hoverBg} flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 active:scale-95 cursor-pointer`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
