import React from "react";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import NewProduct from "@/components/NewProduct";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Main Page Container */}
      <main className="flex-1">
        {/* 1. Main Header & Hero Section (includes integrated Top Bar & Navbar) */}
        <Hero />

        {/* 2. About Us Preview Section with Parallax Overlapping Card */}
        <AboutPreview />

        {/* 3. New Product Flagship Showcase (Bento-box style) */}
        <NewProduct />
      </main>

      {/* 4. Corporate Footer */}
      <Footer />
    </div>
  );
}

