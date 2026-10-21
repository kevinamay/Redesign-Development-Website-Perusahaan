import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleListClient from "@/components/ArticleListClient";
import { articlesSummary } from "@/data/articlesSummary";

export const metadata: Metadata = {
  title: "Berita & Artikel | CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Presisi",
  description:
    "Temukan berita terkini seputar industri manufaktur plastik, teknologi blow moulding 500 liter, inovasi injection moulding, sertifikasi ISO 9001:2015, dan kemasan industri presisi.",
  openGraph: {
    title: "Berita & Artikel | CV. ASIA PLASTIK",
    description:
      "Berita dan artikel terkini mengenai teknologi cetak plastik, botol & jerigen HDPE/PET, serta standar manufaktur presisi CV. Asia Plastik.",
    url: "https://asiaplastik.com/article",
    siteName: "CV. ASIA PLASTIK",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://asiaplastik.com/article",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <ArticleListClient articles={articlesSummary} />
      </main>
      <Footer />
    </div>
  );
}
