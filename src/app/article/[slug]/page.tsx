import React from "react";
import { notFound } from "next/navigation";
import {
  articlesData,
  getArticleBySlug,
  getRelatedArticles,
  getArticleContentTranslation,
} from "@/data/articlesData";
import ArticleDetailClient from "@/components/ArticleDetailClient";

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
  const contentTranslation = getArticleContentTranslation(article.slug);

  return (
    <ArticleDetailClient
      article={article}
      relatedArticles={relatedArticles}
      contentZh={contentTranslation?.zh}
      contentEn={contentTranslation?.en}
    />
  );
}
