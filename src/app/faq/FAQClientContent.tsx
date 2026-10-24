"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Home,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";
import { useLanguage } from "@/data/translations";
import { companyConfig } from "@/data/companyConfig";
import { faqData } from "@/data/faqData";

export default function FAQClientContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { lang } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const current = faqData[lang] || faqData.id;

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return current.faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [current.faqs, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Trail */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{current.breadcrumbHome}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              {current.breadcrumbCurrent}
            </span>
          </nav>

          {/* PAGE HERO HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>{current.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              {current.title}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {current.subtitle}
            </p>
          </div>

          {/* SEARCH & CATEGORY FILTER CONTROLS */}
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl mb-12 flex flex-col gap-5">
            {/* Live Search Input */}
            <div className="relative w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={current.searchPlaceholder}
                aria-label={current.searchPlaceholder}
                className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 placeholder:truncate pl-12 pr-11 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm sm:text-base transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Hapus pencarian"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800/80 overflow-x-auto no-scrollbar sm:flex-wrap pb-1">
              {current.categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 sm:shrink ${isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACCORDION FAQ CARDS */}
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={index}
                    className={`bg-white dark:bg-slate-900 border rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${isOpen
                      ? "border-blue-500/50 dark:border-blue-500/50 ring-2 ring-blue-500/10 shadow-md"
                      : "border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700"
                      }`}
                  >
                    {/* Header Button */}
                    <button
                      type="button"
                      id={`faq-trigger-${index}`}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-4 sm:p-6 lg:p-7 flex items-center justify-between gap-3 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer select-none group"
                    >
                      <span
                        className={`text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight break-words leading-snug sm:leading-normal transition-colors ${isOpen
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                          }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                          ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rotate-180"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                          }`}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Buttery-Smooth CSS Grid Transition */}
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      className={`grid transition-all duration-300 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-6 lg:px-7 pb-4 sm:pb-6 lg:pb-7 pt-1 border-t border-slate-100 dark:border-slate-800/60">
                          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-left sm:text-justify mt-3 sm:mt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-4 text-sm sm:text-base">
                {current.noResults}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
              >
                {current.resetSearch}
              </button>
            </div>
          )}

          {/* DEDICATED SUPPORT CTA BANNER */}
          <div className="mt-14 sm:mt-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
            {/* Ambient subtle glow centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.supportBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
                {current.supportTitle}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                {current.supportDesc}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
                <a
                  href={companyConfig.contact.whatsapp.getChatUrl(
                    "primary",
                    "Halo CV. Asia Plastik, saya ingin menanyakan informasi lebih lanjut mengenai produk dan pemesanan."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 text-white font-semibold px-5 sm:px-6 py-3.5 rounded-xl hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/20 transition-all inline-flex items-center justify-center gap-2.5 text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{current.whatsappBtn}</span>
                </a>

                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-5 sm:px-6 py-3.5 rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all inline-flex items-center justify-center gap-2.5 text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{current.emailBtn}</span>
                </a>

                <a
                  href={`tel:${companyConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full sm:w-auto bg-slate-800 text-slate-200 font-semibold px-5 sm:px-6 py-3.5 rounded-xl hover:bg-slate-700 transition-all inline-flex items-center justify-center gap-2.5 text-sm border border-slate-700/60"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{companyConfig.contact.phoneFormattedFull}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
