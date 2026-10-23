"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/data/translations";
import { companyConfig } from "@/data/companyConfig";
import DrawerPrototypeBar from "./DrawerPrototypeBar";
import {
  X,
  Home,
  Users,
  Package,
  ShieldCheck,
  Newspaper,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

interface DrawerVariantProps {
  isOpen: boolean;
  onClose: () => void;
  activeVariant?: "A" | "B" | "C";
  onSelectVariant?: (v: "A" | "B" | "C") => void;
}

export default function DrawerVariantC({
  isOpen,
  onClose,
  activeVariant = "C",
  onSelectVariant,
}: DrawerVariantProps) {
  const { lang, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const navLinks = [
    { label: t.navbar.home, href: "/", icon: Home, subtitle: "Beranda Utama", tag: "Home" },
    { label: t.navbar.about, href: "/about", icon: Users, subtitle: "Tentang Kami", tag: "Company" },
    { label: t.navbar.products, href: "/products", icon: Package, subtitle: "Katalog Produk", tag: "Catalog" },
    { label: t.navbar.articles, href: "/article", icon: Newspaper, subtitle: "Berita & Wawasan", tag: "Articles" },
    { label: t.navbar.contact, href: "/kontak", icon: PhoneCall, subtitle: "Hubungi Penjualan", tag: "Sales" },
  ];

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden isolate">
      {/* Heavy Blur Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Slide-in Segmented Glass Drawer from RIGHT */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[440px] max-w-[92vw] h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-l border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between z-10 animate-slide-in-right overflow-y-auto box-border">
        {/* Card 1: Top Bar with Title & Preferences */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-blue-500/30">
                AP
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  CV. ASIA PLASTIK
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  Surabaya, Jawa Timur
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PROTOTYPE SWITCHER BUTTONS */}
          {onSelectVariant && (
            <DrawerPrototypeBar
              activeVariant={activeVariant}
              onSelectVariant={onSelectVariant}
            />
          )}

          {/* Language Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-500">
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

          {/* Card 2: Main Navigation Stack */}
          <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-2.5 border border-slate-100 dark:border-slate-800/60 flex flex-col gap-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2.5 py-1">
              Navigasi Halaman
            </div>
            {navLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all hover:shadow-xs border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.tag}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Card 3: Action Hub & Floating CTAs */}
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800 mt-4">
          <a
            href={companyConfig.contact.whatsapp.getChatUrl(
              "primary",
              "Halo Asia Plastik, saya ingin konsultasi kemasan"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Konsultasi WhatsApp Sales</span>
          </a>

          <Link
            href="/kontak"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs shadow-xs hover:bg-slate-800 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Lihat Alamat Kantor & Kontak</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
