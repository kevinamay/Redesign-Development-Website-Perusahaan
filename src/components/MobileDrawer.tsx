"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/data/translations";
import {
  X,
  Home,
  Users,
  Package,
  ShieldCheck,
  PhoneCall,
  Mail,
  Phone,
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { t } = useLanguage();

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: t.navbar.home, href: "/", icon: Home },
    { label: t.navbar.about, href: "/about", icon: Users },
    { label: t.navbar.products, href: "/products", icon: Package },
    { label: t.navbar.facilities, href: "/about#mesin-produksi", icon: ShieldCheck },
    { label: t.navbar.contact, href: "/kontak", icon: PhoneCall },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* 1. PANEL & BACKDROP (GLASSMORPHISM) */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        aria-hidden="true"
      />

      {/* 2. SIDEBAR PANEL (SLIDE IN FROM RIGHT) */}
      <aside className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 overflow-y-auto border-l border-slate-100 dark:border-slate-800">
        <div>
          {/* HEADER SECTION */}
          <div className="p-6 pb-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
            {/* Company Logo */}
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5 focus:outline-none">
              <Image
                src="/images/logo-dark.webp"
                alt="Logo CV. Asia Plastik"
                width={271}
                height={92}
                className="h-8 sm:h-9 w-auto object-contain block dark:hidden"
              />
              <Image
                src="/images/logo.webp"
                alt="Logo CV. Asia Plastik"
                width={271}
                height={92}
                className="h-8 sm:h-9 w-auto object-contain hidden dark:block"
              />
            </Link>

            {/* Header Right: Theme Toggle & Sleek Rounded Close Button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors focus:outline-none cursor-pointer"
                aria-label={t.navbar.closeMenu}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3. MAIN NAVIGATION LINKS (BREAKING THE MONOTONY) */}
          <div className="px-6 py-6">
            <nav className="space-y-2">
              {navLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all duration-300"
                  >
                    {/* Left Icon Container with Interactive Hover Shift */}
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Bold Typography with group-hover shift */}
                    <span className="text-base font-bold transition-transform duration-300 group-hover:translate-x-2">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* 4. BOTTOM CONTACT CARD (UPGRADED AESTHETIC) */}
        <div className="bg-slate-50 dark:bg-slate-800/60 m-6 p-6 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-xs">
          {/* Label */}
          <div className="text-xs font-bold text-slate-400 dark:text-slate-400 tracking-widest uppercase mb-5">
            {t.navbar.repContact}
          </div>

          {/* Email & Phone Contact Rows */}
          <div className="space-y-3.5">
            <a
              href="mailto:marketing@asiaplastik.com"
              className="flex items-center gap-3 text-slate-800 dark:text-slate-100 font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100/70 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="truncate">marketing@asiaplastik.com</span>
            </a>

            <a
              href="tel:+62318433078"
              className="flex items-center gap-3 text-slate-800 dark:text-slate-100 font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100/70 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span>+6231 8433078</span>
            </a>
          </div>

          {/* Subtle Divider */}
          <div className="border-t border-slate-200/80 dark:border-slate-700/80 my-4" />

          {/* Social Media Row (Instagram, Facebook, LinkedIn) */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white dark:bg-slate-700/80 border border-slate-200/80 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:border-transparent flex items-center justify-center transition-all shadow-2xs"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white dark:bg-slate-700/80 border border-slate-200/80 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center transition-all shadow-2xs"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white dark:bg-slate-700/80 border border-slate-200/80 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center transition-all shadow-2xs"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
