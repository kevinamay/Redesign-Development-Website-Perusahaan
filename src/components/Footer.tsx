"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/asiaplastik/?locale=id_ID",
      isExternal: true,
      icon: (
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/asia_plastik?igsh=ZWpjNG5zcm9rbW42",
      isExternal: true,
      icon: (
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
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
      isExternal: true,
      icon: (
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 576 512"
          aria-hidden="true"
        >
          <path d="M549.655 124.083c-6.281-23.65-24.774-42.144-48.423-48.426C458.581 64 288 64 288 64S117.42 64 74.768 75.657c-23.649 6.282-42.143 24.776-48.425 48.426C15 166.738 15 256 15 256s0 89.262 11.343 131.917c6.282 23.65 24.776 42.144 48.425 48.426C117.42 448 288 448 288 448s170.58 0 213.232-11.657c23.649-6.282 42.143-24.776 48.423-48.426C561 345.262 561 256 561 256s0-89.262-11.345-131.917zM232 336V176l144 80-144 80z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@asiaplastik",
      isExternal: true,
      icon: (
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 448 512"
          aria-hidden="true"
        >
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/asia-plastik-plastic-packaging-manufacturing/?originalSubdomain=id",
      isExternal: true,
      icon: (
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
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
      href: "https://wa.me/628113229988?text=Halo%20Asia%20Plastik%2C%20saya%20ingin%20berkonsultasi%20mengenai%20produk%20dan%20pemesanan%20plastik",
      isExternal: true,
      icon: (
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="w-full max-w-[100vw] overflow-hidden bg-[#1e3a5f] text-blue-100 pt-12 pb-6 border-t border-blue-900/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Balanced 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Social Media Icons */}
          <div className="flex flex-col">
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

            {/* Social Media Links (Tailwind Transparent Style) */}
            <div className="mt-6 sm:mt-8 flex items-center gap-5 text-blue-200">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  {...(item.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={item.name}
                  title={item.name}
                  className="text-blue-200 hover:text-white transition-colors duration-200 inline-flex items-center justify-center focus:outline-none"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Nav Menu 1 (BERANDA, TENTANG KAMI, PRODUK, ARTIKEL) */}
          <div className="pt-1">
            <ul className="flex flex-col gap-4">
              {quickNavLinks.slice(0, 4).map((link, idx) => (
                <li key={idx} className="h-6 flex items-center">
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-white hover:text-blue-200 uppercase transition-all duration-200 whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    <span className="group-hover:text-blue-200 group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Nav Menu 2 (FAQ, PARTNER, PRODUK CUSTOM, KONTAK) */}
          <div className="pt-1">
            <ul className="flex flex-col gap-4">
              {quickNavLinks.slice(4, 8).map((link, idx) => (
                <li key={idx} className="h-6 flex items-center">
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-white hover:text-blue-200 uppercase transition-all duration-200 whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    <span className="group-hover:text-blue-200 group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: HUBUNGI KANTOR & PABRIK (Contact Details) */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider mb-4 uppercase">
              {t.footer?.contactTitle || "HUBUNGI KANTOR & PABRIK"}
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm">
              {/* 1. MapPin */}
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-blue-100">
                  {t.footer?.address ||
                    "Jalan Rungkut Industri III/27A, Surabaya - Indonesia, Kode Pos 60293"}
                </span>
              </li>

              {/* 2. Phone */}
              <li className="flex items-center gap-3">
                <Phone className="text-blue-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="tel:+62318433078"
                  className="hover:text-white transition-colors text-blue-100"
                >
                  +6231 8433078 - 8439998 - 8439145
                </a>
              </li>

              {/* 3. WhatsApp MessageCircle */}
              <li className="flex items-center gap-3">
                <MessageCircle className="text-blue-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="https://wa.me/628113229988?text=Halo%20Asia%20Plastik%2C%20saya%20ingin%20berkonsultasi%20mengenai%20produk%20dan%20pemesanan%20plastik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
                >
                  WhatsApp: +62 811-322-9988
                </a>
              </li>

              {/* 4. Mail */}
              <li className="flex items-center gap-3">
                <Mail className="text-blue-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <a
                  href="mailto:marketing@asiaplastik.com"
                  className="hover:text-white transition-colors text-blue-100"
                >
                  marketing@asiaplastik.com
                </a>
              </li>

              {/* 5. Clock */}
              <li className="flex items-center gap-3">
                <Clock className="text-blue-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-blue-100">
                  {t.footer?.workingHours || "Senin - Sabtu: 08.00 - 16.30 WIB"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compressed Bottom Bar (Copyright & Extra Links) */}
        <div className="mt-10 pt-6 border-t border-blue-400/20 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200/90">
          <p className="text-xs text-blue-200/90">
            {t.footer?.copyright ||
              "© 2026 CV. ASIA PLASTIK. Seluruh Hak Cipta Dilindungi Undang-Undang."}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-blue-200/90">
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
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-blue-200/90"
              aria-label="Kembali ke Atas"
            >
              <span>{t.footer?.backToTop || "Kembali ke Atas"}</span>
              <ArrowUp className="w-4 h-4 text-blue-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
