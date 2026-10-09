"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articlesData, Article } from "@/data/articlesData";

export { articlesData };
export type { Article };

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* 1. SECTION LAYOUT */}
        <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header: Center-aligned */}
            <div className="text-center">
              <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-12 uppercase tracking-tight">
                BERITA & ARTIKEL LAINNYA
              </h1>
            </div>

            {/* 2. ARTICLE CARD GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesData.map((article, index) => (
                <article
                  key={article.slug || index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-100"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden w-full bg-slate-200">
                    <img
                      src={article.image || article.imageUrl}
                      alt={article.title}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                    {/* Date styling */}
                    <div className="text-slate-500 text-sm mb-4 flex items-center gap-2 font-medium">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{article.date}</span>
                    </div>

                    {/* Title styling */}
                    <h2 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      <Link href={`/article/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt styling */}
                    <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3 text-justify flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/article/${article.slug}`}
                      className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2 group/btn mt-auto inline-flex w-fit"
                    >
                      <span>LEBIH DETIL</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
