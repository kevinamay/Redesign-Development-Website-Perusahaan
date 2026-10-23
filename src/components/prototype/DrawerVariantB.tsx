"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/data/translations";
import { companyConfig } from "@/data/companyConfig";
import DrawerPrototypeBar from "./DrawerPrototypeBar";
import {
  X,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

interface DrawerVariantProps {
  isOpen: boolean;
  onClose: () => void;
  activeVariant?: "A" | "B" | "C";
  onSelectVariant?: (v: "A" | "B" | "C") => void;
}

export default function DrawerVariantB({
  isOpen,
  onClose,
  activeVariant = "B",
  onSelectVariant,
}: DrawerVariantProps) {
  const { lang, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const navItems = [
    { num: "01", label: t.navbar.home, href: "/", badge: "Utama" },
    { num: "02", label: t.navbar.about, href: "/about", badge: "Profil & Visi" },
    { num: "03", label: t.navbar.products, href: "/products", badge: "Katalog" },
    { num: "04", label: t.navbar.articles, href: "/article", badge: "Berita" },
    { num: "05", label: t.navbar.contact, href: "/kontak", badge: "Hubungi Sales" },
  ];

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden isolate">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Slide-in Drawer Container from LEFT */}
      <div className="fixed inset-y-0 left-0 w-full sm:w-[400px] max-w-[90vw] h-full bg-slate-900 text-white shadow-2xl border-r border-slate-800 flex flex-col justify-between z-10 animate-slide-in-left box-border">
        {/* Top Industrial Banner */}
        <div className="p-6 bg-gradient-to-br from-[#1e3a5f] to-[#0f243a] border-b border-blue-900/50 shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
              <span className="text-[11px] font-bold text-blue-300 tracking-wider uppercase">
                Pabrik Manufaktur Plastik
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span>CV. ASIA PLASTIK</span>
          </div>
          <p className="text-xs text-blue-200/80 mt-1">
            Precision Injection & Blow Moulding Sejak 1985
          </p>

          <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-[11px] text-blue-200 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>ISO 9001:2015 Certified System</span>
          </div>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
          {/* PROTOTYPE SWITCHER BUTTONS */}
          {onSelectVariant && (
            <DrawerPrototypeBar
              activeVariant={activeVariant}
              onSelectVariant={onSelectVariant}
            />
          )}
          {/* Language Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-800/90 border border-slate-700/60 text-xs">
            {(["id", "en", "zh"] as Language[]).map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`py-1.5 rounded-lg font-bold text-center transition-all cursor-pointer ${
                  lang === code
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {code === "id" ? "Indonesia" : code === "en" ? "English" : "中文"}
              </button>
            ))}
          </div>

          {/* Numbered Menu Links */}
          <nav className="flex flex-col gap-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-1">
              Daftar Navigasi
            </div>
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/40 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-400 group-hover:text-blue-300">
                    {item.num}
                  </span>
                  <span className="text-sm font-bold text-slate-100 group-hover:text-white group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 group-hover:text-blue-300">
                  {item.badge}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Contact Banner */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/70 shrink-0 flex flex-col gap-3">
          <a
            href={companyConfig.contact.whatsapp.getChatUrl(
              "primary",
              "Halo Asia Plastik, saya ingin konsultasi kebutuhan kemasan plastik"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp Penjualan</span>
          </a>

          <Link
            href="/kontak"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Informasi Kantor & Pabrik</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
