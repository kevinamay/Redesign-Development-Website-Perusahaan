"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/data/translations";
import { ArticleSummary } from "@/data/articlesSummary";
import {
  articleUITranslations,
  getLocalizedArticle,
  formatArticleDate,
} from "@/data/articleTranslations";

interface ArticleListClientProps {
  articles: ArticleSummary[];
}

const INITIAL_ARTICLE_COUNT = 6;

export default function ArticleListClient({ articles }: ArticleListClientProps) {
  const { lang } = useLanguage();
  const t = articleUITranslations[lang] || articleUITranslations.id;
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll ? articles : articles.slice(0, INITIAL_ARTICLE_COUNT);
  const hasMoreArticles = articles.length > INITIAL_ARTICLE_COUNT;

  const handleToggleShow = () => {
    if (showAll) {
      setShowAll(false);
      const topSection = document.getElementById("article-section-top");
      if (topSection) {
        topSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div id="article-section-top" className="text-center mb-14 scroll-mt-24">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2 block">
            {lang === "zh" ? "行业动态与最新资讯" : lang === "en" ? "Industry Insights & News" : "Wawasan Industri & Berita Terkini"}
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
            {t.pageTitle}
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => {
            const localized = getLocalizedArticle(article, lang);
            return (
              <article
                key={article.slug || index}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-100 dark:border-slate-800"
              >
                {/* Image Container with Next.js Image Optimization */}
                <div className="relative h-64 overflow-hidden w-full bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={article.image || article.imageUrl || "/images/assets/placeholder.jpg"}
                    alt={localized.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow bg-white dark:bg-slate-900 relative z-10">
                  {/* Date */}
                  <div className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{formatArticleDate(article.date, lang)}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                    <Link href={`/article/${article.slug}`}>
                      {localized.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 line-clamp-3 text-justify flex-grow">
                    {localized.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/article/${article.slug}`}
                    className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2 group/btn mt-auto inline-flex w-fit"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {hasMoreArticles && (
          <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 shadow-xs">
              <span>
                {t.showingCount(displayedArticles.length, articles.length)}
              </span>
            </div>

            <button
              id="btn-article-show-more"
              type="button"
              onClick={handleToggleShow}
              className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer select-none active:scale-95 ${
                showAll
                  ? "bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-md hover:shadow-lg"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              }`}
            >
              <span>{showAll ? t.showLess : t.showMore}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
