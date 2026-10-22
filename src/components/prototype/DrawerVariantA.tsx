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
  PhoneCall,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

interface DrawerVariantProps {
  isOpen: boolean;
  onClose: () => void;
  activeVariant?: "A" | "B" | "C";
  onSelectVariant?: (v: "A" | "B" | "C") => void;
}

export default function DrawerVariantA({
  isOpen,
  onClose,
  activeVariant = "A",
  onSelectVariant,
}: DrawerVariantProps) {
  const { lang, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const navLinks = [
    { label: t.navbar.home, href: "/", icon: Home, desc: "Halaman Utama & Ikhtisar" },
    { label: t.navbar.about, href: "/about", icon: Users, desc: "Profil, Visi & Standar Mutu" },
    { label: t.navbar.products, href: "/products", icon: Package, desc: "Katalog Botol, Jerigen & Pail" },
    { label: t.navbar.facilities, href: "/about#mesin-produksi", icon: ShieldCheck, desc: "Mesin Injection & Blow Moulding" },
    { label: t.navbar.contact, href: "/kontak", icon: PhoneCall, desc: "Kontak Tim Sales & Alamat Pabrik" },
  ];

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden isolate">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Slide-in Drawer Container from RIGHT */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] max-w-[90vw] h-full bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200/80 dark:border-slate-800 flex flex-col justify-between z-10 animate-slide-in-right box-border">
        {/* Header: Brand Mark + Controls */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[11px] font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Menu Navigasi
            </div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              CV. ASIA PLASTIK
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 flex flex-col gap-4">
          {/* PROTOTYPE SWITCHER BUTTONS */}
          {onSelectVariant && (
            <DrawerPrototypeBar
              activeVariant={activeVariant}
              onSelectVariant={onSelectVariant}
            />
          )}
          {/* Language Selector Pill */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold">
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

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-blue-50/70 dark:hover:bg-slate-800/70 transition-all border border-transparent hover:border-blue-100 dark:hover:border-slate-700/60"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer: CTAs & Social Channels */}
        <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col gap-3 shrink-0">
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={companyConfig.contact.whatsapp.getChatUrl(
                "primary",
                "Halo Asia Plastik, saya ingin berkonsultasi"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/kontak"
              onClick={onClose}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow-md hover:opacity-90 transition-all active:scale-[0.98] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Kontak Kami</span>
            </Link>
          </div>

          <div className="text-center text-[10px] text-slate-400 dark:text-slate-500 pt-1">
            CV. Asia Plastik Surabaya • ISO 9001:2015
          </div>
        </div>
      </div>
    </div>
  );
}
