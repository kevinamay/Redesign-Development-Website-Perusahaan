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
    { label: "BERANDA", href: "/" },
    { label: "TENTANG KAMI", href: "/about" },
    { label: "PRODUK", href: "/products" },
    { label: "ARTIKEL", href: "/article" },
    { label: "FAQ", href: "/faq" },
    { label: "PARTNER", href: "/partner" },
    { label: "PRODUK CUSTOM", href: "/kontak" },
    { label: "KONTAK", href: "/kontak" },
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
        <Image
          src="/images/tokopedia.png"
          alt="Tokopedia"
          width={32}
          height={32}
          className="w-8 h-8 object-contain shrink-0"
        />
      ),
    },
    {
      name: "Shopee",
      href: "https://shopee.co.id/asiaplastik52?smtt=0.27476852-1652338218.9&is_from_login=true",
      isExternal: true,
      icon: (
        <svg
          className="w-8 h-8 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          {/* Official Shopee Bag */}
          <path
            d="M11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z"
            fill="#EE4D2D"
          />
          {/* Official Shopee 'S' in Crisp White */}
          <path
            d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554z"
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
      className="w-full max-w-[100vw] overflow-hidden bg-slate-950 text-slate-400 pt-12 pb-6 border-t border-slate-900"
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

          {/* Column 2 (Menu Navigasi 2 Kolom Tanpa Judul - Estetis & Presisi): lg:col-span-3 */}
          <div className="lg:col-span-3 pt-1">
            <div className="grid grid-cols-2 gap-x-8 sm:gap-x-10">
              {/* Kolom Kiri: BERANDA, TENTANG KAMI, PRODUK, ARTIKEL */}
              <ul className="flex flex-col gap-4">
                {quickNavLinks.slice(0, 4).map((link, idx) => (
                  <li key={idx} className="h-6 flex items-center">
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-slate-200 hover:text-white uppercase transition-all duration-200 whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                      <span className="group-hover:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Kolom Kanan: FAQ, PARTNER, PRODUK CUSTOM, KONTAK */}
              <ul className="flex flex-col gap-4">
                {quickNavLinks.slice(4, 8).map((link, idx) => (
                  <li key={idx} className="h-6 flex items-center">
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-slate-200 hover:text-white uppercase transition-all duration-200 whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                      <span className="group-hover:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 (Solusi Manufaktur): lg:col-span-2 */}
          <div className="lg:col-span-2">
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
                    "Jalan Rungkut Industri III/27A, Surabaya - Indonesia, Kode Pos 60293"}
                </span>
              </li>

              {/* 2. Phone */}
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="tel:+62318433078"
                  className="hover:text-white transition-colors"
                >
                  +6231 8433078 - 8439998 - 8439145
                </a>
              </li>

              {/* 3. WhatsApp MessageCircle */}
              <li className="flex items-center gap-3">
                <MessageCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="https://wa.me/628113229988?text=Halo%20Asia%20Plastik%2C%20saya%20ingin%20berkonsultasi%20mengenai%20produk%20dan%20pemesanan%20plastik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +62 811-322-9988
                </a>
              </li>

              {/* 4. Mail */}
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="mailto:marketing@asiaplastik.com"
                  className="hover:text-white transition-colors"
                >
                  marketing@asiaplastik.com
                </a>
              </li>

              {/* 5. Clock */}
              <li className="flex items-center gap-3">
                <Clock className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>
                  {t.footer?.workingHours || "Senin - Sabtu: 08.00 - 16.30 WIB"}
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
