"use client";

import React from "react";
import Link from "next/link";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Corporate Brand & Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20">
                AP
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {t.footer.legalName}
                </span>
                <p className="text-xs text-blue-400 font-medium tracking-wider uppercase">
                  {t.footer.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Certifications badges */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{t.footer.certificationsTitle}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.footer.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700 font-sans"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-l-2 border-blue-500 pl-2.5">
              {t.footer.quickNavTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.footer.quickNavLinks.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500/70" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Manufacturing Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-l-2 border-blue-500 pl-2.5">
              {t.footer.solutionsTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.footer.solutionsLinks.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500/70" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-l-2 border-blue-500 pl-2.5">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${footerData.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  WhatsApp: {footerData.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              {t.footer.privacyPolicy}
            </span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              {t.footer.termsOfService}
            </span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
