"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, footerData } from "@/data/homeData";
import { Menu, X, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter regular links vs CTA link
  const standardLinks = navLinks.filter((item) => !item.isCta);
  const ctaLink = navLinks.find((item) => item.isCta) || {
    label: "Minta Penawaran",
    href: "#contact",
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100/80"
      }`}
    >
      {/* Top micro-bar for corporate credibility */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Sertifikasi ISO 9001:2015 & Standar Mutu Manufaktur
            </span>
            <span className="text-slate-500">|</span>
            <span>{footerData.contact.workingHours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${footerData.contact.email}`}
              className="hover:text-white transition-colors"
            >
              {footerData.contact.email}
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              Hotline: {footerData.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-extrabold text-xl tracking-tight">AP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                {footerData.company.legalName}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                Plastic Manufacturing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {standardLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${footerData.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Sales</span>
            </a>

            <Link
              href={ctaLink.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200"
            >
              <span>{ctaLink.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-100 bg-white ${
          isOpen ? "max-h-[450px] opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-3">
          {standardLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href={`https://wa.me/${footerData.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Hubungi via WhatsApp</span>
            </a>

            <Link
              href={ctaLink.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors"
            >
              <span>{ctaLink.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
