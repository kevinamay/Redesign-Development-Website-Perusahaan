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

  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1 (Brand & About): lg:col-span-4 */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block focus:outline-none">
              {!logoError ? (
                <Image
                  src="/images/logo.webp"
                  alt="CV. ASIA PLASTIK"
                  width={200}
                  height={68}
                  className="h-10 w-auto object-contain"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <span className="text-white font-bold text-xl tracking-tight">
                  CV. ASIA PLASTIK
                </span>
              )}
            </Link>

            <p className="text-blue-500 text-xs font-bold tracking-widest mt-2 uppercase">
              {t.footer?.tagline ||
                "Precision Plastic Manufacturing & Industrial Packaging"}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              {t.footer?.description ||
                "Produsen manufaktur produk plastik terkemuka yang melayani sektor industri, agrikultur, farmasi, serta kebutuhan kemasan konsumen dengan standar keunggulan teruji."}
            </p>

            {/* Badges (Standar & Akreditasi Mutu) */}
            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-medium hover:border-blue-500/50 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 (Navigasi Cepat): lg:col-span-2 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-6 uppercase">
              {t.footer?.quickNavTitle || "NAVIGASI CEPAT"}
            </h3>
            <ul className="flex flex-col gap-4">
              {quickNavLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Solusi Manufaktur): lg:col-span-3 */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-6 uppercase">
              {t.footer?.solutionsTitle || "SOLUSI MANUFAKTUR"}
            </h3>
            <ul className="flex flex-col gap-4">
              {solutionsLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (Contact): lg:col-span-3 */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm tracking-wider mb-6 uppercase">
              {t.footer?.contactTitle || "HUBUNGI KANTOR & PABRIK"}
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              {/* 1. MapPin */}
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {t.footer?.address ||
                    "Kawasan Industri & Pergudangan, Jl. Raya Industri No. 88, Tangerang, Banten, 15138, Indonesia"}
                </span>
              </li>

              {/* 2. Phone */}
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 w-5 h-5 shrink-0" />
                <a
                  href="tel:+62215558901"
                  className="hover:text-white transition-colors"
                >
                  +62 21 555-8901
                </a>
              </li>

              {/* 3. WhatsApp MessageCircle */}
              <li className="flex items-center gap-3">
                <MessageCircle className="text-blue-500 w-5 h-5 shrink-0" />
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
                <Mail className="text-blue-500 w-5 h-5 shrink-0" />
                <a
                  href="mailto:sales@asiaplastik.com"
                  className="hover:text-white transition-colors"
                >
                  sales@asiaplastik.com
                </a>
              </li>

              {/* 5. Clock */}
              <li className="flex items-center gap-3">
                <Clock className="text-blue-500 w-5 h-5 shrink-0" />
                <span>
                  {t.footer?.workingHours || "Senin - Sabtu: 08.00 - 17.00 WIB"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Copyright & Extra Links) */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
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
