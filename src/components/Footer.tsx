"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function Footer() {
  const { t } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const certifications = t.footer?.certifications || [
    "ISO 9001:2015 Quality Management",
    "Food Grade Safety Compliance",
    "Eco-Friendly Recyclable Resins",
  ];

  const quickNavLinks = t.footer?.quickNavLinks || [
    { label: "Beranda", href: "#hero" },
    { label: "Profil Perusahaan", href: "#about" },
    { label: "Katalog Produk", href: "#products" },
    { label: "Standar Mutu (QC)", href: "#quality" },
    { label: "Hubungi Kami", href: "#contact" },
  ];

  const solutionsLinks = t.footer?.solutionsLinks || [
    { label: "Injection Molding", href: "#products" },
    { label: "Blow Molding & Botol", href: "#products" },
    { label: "Pembuatan Cetakan (Mold)", href: "#products" },
    { label: "Kemasan Industri HDPE", href: "#products" },
    { label: "Komponen Plastik Kustom", href: "#products" },
  ];

  const socialLinks = [
    {
      name: "Tokopedia",
      href: "https://www.tokopedia.com/asia-plastik-official",
      isExternal: true,
      icon: (
        <svg
          className="w-8 h-8 text-[#03AC0E] shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.94 13.56a5.6 5.6 0 0 0-4.06-2.58l.64-1.42A3.24 3.24 0 0 0 17 5.17l-1.39.63A7.47 7.47 0 0 0 12 5.09a7.47 7.47 0 0 0-3.61.71L7 5.17A3.24 3.24 0 0 0 5.48 9.56l.64 1.42a5.6 5.6 0 0 0-4.06 2.58A5.94 5.94 0 0 0 1 17.15C1 20.93 4.29 24 8.35 24h7.3C19.71 24 23 20.93 23 17.15a5.94 5.94 0 0 0-1.06-3.59zM12 21.65c-3.14 0-5.7-2.34-5.7-5.23s2.56-5.23 5.7-5.23 5.7 2.34 5.7 5.23-2.56 5.23-5.7 5.23z" />
          <circle cx="9.25" cy="15.8" r="1.5" fill="#FFFFFF" />
          <circle cx="14.75" cy="15.8" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Shopee",
      href: "https://shopee.co.id/asiaplastik52?smtt=0.27476852-1652338218.9&is_from_login=true",
      isExternal: true,
      icon: (
        <svg
          className="w-8 h-8 text-[#EE4D2D] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8.25 6.375A3.75 3.75 0 0 1 12 2.625a3.75 3.75 0 0 1 3.75 3.75V7.5H8.25V6.375z"
            stroke="#EE4D2D"
            strokeWidth="2"
          />
          <path
            d="M4.5 7.5h15l1.35 13.5a1.8 1.8 0 0 1-1.8 1.95H4.95a1.8 1.8 0 0 1-1.8-1.95L4.5 7.5z"
            fill="#EE4D2D"
          />
          <path
            d="M14 15.8c0 1.2-.9 2-2.3 2a3.8 3.8 0 0 1-2.2-.7l.5-1.4a3 3 0 0 0 1.7.5c.7 0 1.1-.3 1.1-.7 0-.4-.3-.6-1.1-1-1.1-.4-1.9-.9-1.9-2 0-1.1.9-1.9 2.2-1.9.7 0 1.4.2 2 .5l-.5 1.4a2.6 2.6 0 0 0-1.5-.4c-.6 0-1 .3-1 .7 0 .4.3.6 1.1.9 1.1.4 2 1 2 2.2z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@AsiaPlastik",
      isExternal: true,
      icon: (
        <svg
          className="w-8 h-8 text-[#FF0000] shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
            fill="#FF0000"
          />
          <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/asia_plastik?igsh=ZWpjNG5zcm9rbW42",
      isExternal: true,
      icon: (
        <svg
          className="w-8 h-8 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="footerIgGradient" cx="20%" cy="105%" r="120%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="10%" stopColor="#fdf497" />
              <stop offset="50%" stopColor="#fd5949" />
              <stop offset="70%" stopColor="#d6249f" />
              <stop offset="100%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#footerIgGradient)" />
          <rect
            x="5.2"
            y="5.2"
            width="13.6"
            height="13.6"
            rx="3.8"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            fill="none"
          />
          <circle cx="12" cy="12" r="3.4" stroke="#FFFFFF" strokeWidth="1.6" />
          <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@asiaplastik",
      isExternal: true,
      icon: (
        <svg
          className="w-8 h-8 text-white fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:marketing@asiaplastik.com",
      isExternal: false,
      icon: (
        <svg
          className="w-8 h-8 text-[#FF6600] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="3.5" fill="#FF6600" />
          <path
            d="M3 6L12 13L21 6"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-400 pt-12 pb-6 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Modern CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1 (Brand & About & Badges & Social): lg:col-span-4 */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block focus:outline-none">
                {!logoError ? (
                  <Image
                    src="/images/logo.webp"
                    alt="CV. ASIA PLASTIK"
                    width={190}
                    height={65}
                    className="h-9 w-auto object-contain"
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  <span className="text-white font-bold text-xl tracking-tight">
                    CV. ASIA PLASTIK
                  </span>
                )}
              </Link>

              <p className="text-blue-500 text-xs font-bold tracking-widest mt-1.5 uppercase">
                {t.footer?.tagline ||
                  "Precision Plastic Manufacturing & Industrial Packaging"}
              </p>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
                {t.footer?.description ||
                  "Produsen manufaktur produk plastik terkemuka yang melayani sektor industri, agrikultur, farmasi, serta kebutuhan kemasan konsumen dengan standar keunggulan teruji."}
              </p>

              {/* Badges (Standar & Akreditasi Mutu) */}
              <div className="mt-5 flex flex-wrap gap-2">
                {certifications.map((badge, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-[11px] sm:text-xs font-medium hover:border-blue-500/50 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>

              {/* Standalone Colored Social Media & Marketplace Links */}
              <div className="mt-5 flex flex-wrap items-center gap-4">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    {...(item.isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={item.name}
                    title={item.name}
                    className="hover:scale-110 transition-transform duration-300 inline-block focus:outline-none"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 (Navigasi Cepat): lg:col-span-2 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-4 uppercase">
              {t.footer?.quickNavTitle || "NAVIGASI CEPAT"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickNavLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Solusi Manufaktur): lg:col-span-3 */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-4 uppercase">
              {t.footer?.solutionsTitle || "SOLUSI MANUFAKTUR"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solutionsLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (Contact): lg:col-span-3 */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-4 uppercase">
              {t.footer?.contactTitle || "HUBUNGI KANTOR & PABRIK"}
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm">
              {/* 1. MapPin */}
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {t.footer?.address ||
                    "Kawasan Industri & Pergudangan, Jl. Raya Industri No. 88, Tangerang, Banten, 15138, Indonesia"}
                </span>
              </li>

              {/* 2. Phone */}
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="tel:+62215558901"
                  className="hover:text-white transition-colors"
                >
                  +62 21 555-8901
                </a>
              </li>

              {/* 3. WhatsApp MessageCircle */}
              <li className="flex items-center gap-3">
                <MessageCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +62 812-3456-7890
                </a>
              </li>

              {/* 4. Mail */}
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="mailto:sales@asiaplastik.com"
                  className="hover:text-white transition-colors"
                >
                  sales@asiaplastik.com
                </a>
              </li>

              {/* 5. Clock */}
              <li className="flex items-center gap-3">
                <Clock className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>
                  {t.footer?.workingHours || "Senin - Sabtu: 08.00 - 17.00 WIB"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compressed Bottom Bar (Copyright & Extra Links) */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            {t.footer?.copyright ||
              "© 2026 CV. ASIA PLASTIK. Seluruh Hak Cipta Dilindungi Undang-Undang."}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <Link
              href="#privacy"
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer?.privacyPolicy || "Kebijakan Privasi"}
            </Link>
            <Link
              href="#terms"
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer?.termsOfService || "Syarat & Ketentuan"}
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Kembali ke Atas"
            >
              <span>{t.footer?.backToTop || "Kembali ke Atas"}</span>
              <ArrowUp className="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
