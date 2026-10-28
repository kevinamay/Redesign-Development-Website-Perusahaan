import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import GlobalDistribution from "@/components/GlobalDistribution";
import NewProduct from "@/components/NewProduct";
import CareerBanner from "@/components/CareerBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Presisi Tinggi",
  description:
    "Produsen kemasan plastik industri, botol, jerigen HDPE/PET, dan mold making in-house sejak 1985 bersertifikat ISO 9001:2015.",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip flex flex-col bg-transparent font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative z-10">
      {/* 1. Sticky Global Navigation (Top Bar & Navbar) */}
      <Navbar />

      {/* Main Page Container */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-clip">
        {/* 1. Hero Showcase Section */}
        <Hero />

        {/* 2. About Us Preview Section with Interactive Steps */}
        <AboutPreview />

        {/* 3. Global Distribution & Clients Section (World Map) */}
        <GlobalDistribution />

        {/* 4. New Product Flagship Showcase (Bento-box style) */}
        <NewProduct />

        {/* 5. Career / Recruitment Banner */}
        <CareerBanner />
      </main>

      {/* 6. Corporate Footer */}
      <Footer />
    </div>
  );
}
