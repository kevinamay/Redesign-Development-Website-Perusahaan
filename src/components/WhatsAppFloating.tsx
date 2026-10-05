"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function WhatsAppFloating() {
  const { lang } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  // Phone number specified by the user
  const rawPhone = "082244109503";
  // Convert 08... to international format 628...
  const waPhone = rawPhone.replace(/^0/, "62");

  // Message template matching the user's specification & screenshot
  const messages = {
    id: "Halo, Saya menemukan website asiaplastik.com. Saya ingin bertanya produk Anda",
    en: "Hello, I found your website asiaplastik.com. I would like to inquire about your products",
    zh: "Halo, Saya menemukan website asiaplastik.com. Saya ingin bertanya produk Anda", // Keep consistent or bilingual
  };

  const selectedMessage = messages[lang] || messages.id;
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(selectedMessage)}`;

  const tooltips = {
    id: {
      title: "Hubungi Admin Sales",
      subtitle: "Respon Cepat via WhatsApp",
    },
    en: {
      title: "Chat with Sales Admin",
      subtitle: "Fast response via WhatsApp",
    },
    zh: {
      title: "联系销售客服",
      subtitle: "WhatsApp 在线快速响应",
    },
  };

  const t = tooltips[lang] || tooltips.id;

  return (
    <aside
      aria-label="Bantuan WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3 select-none"
    >
      {/* Floating Info Pill / Tooltip (can be dismissed or auto-hidden) */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2.5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl rounded-2xl py-2 px-3.5 pr-2.5 text-slate-800 dark:text-slate-100 animate-fade-in transition-all">
          <div className="text-left">
            <p className="text-xs font-bold leading-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.title}</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
              {t.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup info"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Admin CV Asia Plastik via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl shadow-emerald-600/30 transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Subtle Wave Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Official Logo SVG */}
        <svg
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-slate-900 rounded-full shadow-xs" />
      </a>
    </aside>
  );
}
