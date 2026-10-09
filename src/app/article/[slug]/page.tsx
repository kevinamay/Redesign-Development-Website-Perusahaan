import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ArrowRight, Home, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articlesData, getArticleBySlug, getRelatedArticles } from "@/data/articlesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | CV. Asia Plastik",
      description: "Halaman artikel tidak ditemukan.",
    };
  }

  return {
    title: `${article.title} | CV. Asia Plastik`,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [{ url: article.image }] : [],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* 1. TOP NAVIGATION & HEADER */}
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Breadcrumb: Home > News & Article > [Article Title] */}
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-slate-500 mb-8 flex items-center justify-center flex-wrap gap-2 text-center"
            >
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <Home className="w-4 h-4 text-slate-400" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link
                href="/article"
                className="hover:text-blue-600 transition-colors"
              >
                News & Article
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md">
                {article.title}
              </span>
            </nav>

            {/* Date: Render with Calendar icon in blue */}
            <div className="text-blue-600 font-semibold mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>{article.date}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-10 max-w-4xl mx-auto text-center">
              {article.title}
            </h1>
          </div>

          {/* 2. HERO IMAGE */}
          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl mb-16 aspect-[16/9] relative bg-slate-100 border border-slate-200/60">
            <img
              src={article.image}
              alt={article.title}
              priority-load="true"
              className="object-cover w-full h-full"
            />
          </div>

          {/* 3. ARTICLE BODY (READABILITY OPTIMIZED) */}
          <article className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-slate max-w-none 
                [&_p]:text-lg [&_p]:text-slate-700 [&_p]:leading-loose [&_p]:mb-6 [&_p]:text-justify
                [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-6
                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4
                [&_ul]:space-y-3 [&_ul]:mb-8 [&_ul]:text-lg [&_ul]:text-slate-700 [&_ul]:pl-5 [&_ul]:list-disc
                [&_ol]:space-y-3 [&_ol]:mb-8 [&_ol]:text-lg [&_ol]:text-slate-700 [&_ol]:pl-5 [&_ol]:list-decimal
                [&_li]:leading-relaxed
                [&_strong]:text-slate-900 [&_strong]:font-bold
                [&_em]:italic [&_em]:text-slate-600
                [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium hover:[&_a]:text-blue-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* 4. BOTTOM ACTIONS & RELATED ARTICLES */}
          <div className="mt-16 text-center">
            {/* Kembali ke Daftar Artikel Button */}
            <Link
              href="/article"
              className="bg-slate-900 text-white hover:bg-blue-600 px-8 py-3 rounded-xl transition-all duration-300 w-fit mx-auto flex items-center gap-2 shadow-md hover:shadow-lg font-semibold text-sm group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Kembali ke Daftar Artikel</span>
            </Link>
          </div>

          {/* OTHER NEWS & ARTICLE SECTION */}
          {relatedArticles.length > 0 && (
            <section className="max-w-7xl mx-auto mt-24 pt-16 border-t border-slate-200">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    REKOMENDASI
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                    OTHER NEWS & ARTICLE
                  </h2>
                </div>
                <Link
                  href="/article"
                  className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.slug}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-slate-100"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden w-full bg-slate-100">
                      <img
                        src={rel.image}
                        alt={rel.title}
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
                        <Link href={`/article/${rel.slug}`}>{rel.title}</Link>
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 text-justify flex-grow">
                        {rel.excerpt}
                      </p>

                      <Link
                        href={`/article/${rel.slug}`}
                        className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5 group/btn mt-auto inline-flex w-fit"
                      >
                        <span>BACA SELENGKAPNYA</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                ))}
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
