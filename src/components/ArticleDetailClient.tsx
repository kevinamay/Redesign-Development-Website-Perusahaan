"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight, Home, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Article } from "@/data/articlesData";
import { useLanguage } from "@/data/translations";
import { articleUITranslations, getLocalizedArticle } from "@/data/articleTranslations";

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticleDetailClient({
  article,
  relatedArticles,
}: ArticleDetailClientProps) {
  const { lang } = useLanguage();
  const t = articleUITranslations[lang] || articleUITranslations.id;
  const currentLocalized = getLocalizedArticle(article, lang);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* 1. TOP NAVIGATION & HEADER */}
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Breadcrumb: Home > News & Article > [Article Title] */}
            <nav
              aria-label="Breadcrumb"
              className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6 block"
            >
              <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <Home className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.breadcrumbHome}</span>
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                <Link
                  href="/article"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t.breadcrumbCurrent}
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md inline-block">
                  {currentLocalized.title}
                </span>
              </div>
            </nav>

            {/* Date */}
            <div className="text-sm md:text-base text-blue-600 font-semibold mb-3 md:mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{article.date}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8 lg:mb-10 max-w-4xl mx-auto text-center px-4 md:px-0">
              {currentLocalized.title}
            </h1>
          </div>

          {/* 2. HERO IMAGE */}
          <div className="w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl mb-10 lg:mb-16 aspect-[4/3] md:aspect-[16/9] relative bg-slate-100 border border-slate-200/60">
            <img
              src={article.image}
              alt={currentLocalized.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* 3. ARTICLE BODY */}
          <article className="max-w-3xl mx-auto px-5 sm:px-8 md:px-0">
            <div
              className="prose prose-base md:prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl
                [&_p]:text-base [&_p]:md:text-lg [&_p]:text-slate-700 [&_p]:leading-loose [&_p]:mb-6 [&_p]:text-justify
                [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:md:mt-12 [&_h2]:mb-4 [&_h2]:md:mb-6
                [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4
                [&_ul]:space-y-3 [&_ul]:mb-8 [&_ul]:text-base [&_ul]:md:text-lg [&_ul]:text-slate-700 [&_ul]:pl-5 [&_ul]:list-disc
                [&_ol]:space-y-3 [&_ol]:mb-8 [&_ol]:text-base [&_ol]:md:text-lg [&_ol]:text-slate-700 [&_ol]:pl-5 [&_ol]:list-decimal
                [&_li]:leading-relaxed
                [&_strong]:text-slate-900 [&_strong]:font-bold
                [&_em]:italic [&_em]:text-slate-600
                [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium hover:[&_a]:text-blue-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* 4. BOTTOM ACTIONS & RELATED ARTICLES */}
          <div className="mt-8 md:mt-12 text-center">
            {/* Back Button */}
            <Link
              href="/article"
              className="bg-slate-900 text-white hover:bg-blue-600 px-6 py-4 rounded-xl transition-all duration-300 w-full sm:w-fit mx-auto flex items-center justify-center gap-3 font-semibold mt-12 shadow-md hover:shadow-lg group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{t.backToList}</span>
            </Link>
          </div>

          {/* Related Section */}
          {relatedArticles.length > 0 && (
            <section className="max-w-7xl mx-auto mt-16 md:mt-24 pt-12 md:pt-16 border-t border-slate-200 px-4 md:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    {t.relatedBadge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                    {t.relatedTitle}
                  </h2>
                </div>
                <Link
                  href="/article"
                  className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider inline-flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span>{t.viewAll}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => {
                  const relLocalized = getLocalizedArticle(rel, lang);
                  return (
                    <article
                      key={rel.slug}
                      className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-slate-100"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-48 overflow-hidden w-full bg-slate-100">
                        <img
                          src={rel.image}
                          alt={relLocalized.title}
                          loading="lazy"
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow bg-white">
                        <div className="text-slate-500 text-xs mb-3 flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{rel.date}</span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          <Link href={`/article/${rel.slug}`}>{relLocalized.title}</Link>
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 text-justify flex-grow">
                          {relLocalized.excerpt}
                        </p>

                        <Link
                          href={`/article/${rel.slug}`}
                          className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5 group/btn mt-auto inline-flex w-fit"
                        >
                          <span>{t.readMore}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
