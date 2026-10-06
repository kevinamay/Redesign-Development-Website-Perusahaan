"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  PackageOpen,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { footerData } from "@/data/homeData";

// Daftar Kategori di Sidebar Kiri
interface CategoryItem {
  id: string;
  name: string;
  displayName: string;
  subtitle: string;
}

const categories: CategoryItem[] = [
  {
    id: "pallet-industri",
    name: "Pallet Industri",
    displayName: "PALLET INDUSTRI",
    subtitle: "Solusi Palet Plastik Standar Logistik, Higienis & Pergudangan Otomasi",
  },
  {
    id: "keranjang-industri",
    name: "Keranjang Industri",
    displayName: "KERANJANG INDUSTRI",
    subtitle: "Wadah Distribusi & Penyimpanan Logistik Industri",
  },
  {
    id: "box-lipat",
    name: "Box Lipat",
    displayName: "BOX LIPAT",
    subtitle: "Kontainer Lipat Pintar Hemat Ruang Pergudangan",
  },
  {
    id: "blok-lalu-lintas",
    name: "Blok Lalu Lintas",
    displayName: "BLOK LALU LINTAS",
    subtitle: "Pembatas Jalan & Alat Keselamatan Rekayasa Jalan",
  },
  {
    id: "botol-pupuk-pet",
    name: "Botol Pupuk PET",
    displayName: "BOTOL PUPUK PET",
    subtitle: "Kemasan Botol Kedap Udara Agrokimia & Cairan Kimia",
  },
  {
    id: "kemasan-pet",
    name: "Kemasan PET",
    displayName: "KEMASAN PET",
    subtitle: "Galon Air Minum & Wadah Higienis Food Grade",
  },
  {
    id: "jerigen-hdpe",
    name: "Jerigen HDPE",
    displayName: "JERIGEN HDPE",
    subtitle: "Wadah Jerigen Blow Moulding Anti Bocor",
  },
];

// Slides untuk produk PALLET P SERIES (Foto Produk Murni)
const palletSlides = [
  {
    id: "slide-1",
    title: "Pallet P Series - Tampak Keseluruhan Produk",
    shortTitle: "Tampak Depan",
    caption: "Tampak Depan (3D Floating)",
    image: "/images/product/Pallet/pallet-floating.png",
  },
  {
    id: "slide-2",
    title: "Pallet P Series - Detail Struktur & Honeycomb Grid",
    shortTitle: "Detail Struktur",
    caption: "Detail Grid & Kaki Kokoh",
    image: "/images/product/Pallet/pallet-product-detail.jpg",
  },
];

// Data Produk Tunggal
const palletPSeriesProduct = {
  title: "PALLET P SERIES",
  dimensions: "1200 x 1165 x 140 MM",
  weight: "12 KG",
  description:
    "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.",
};

export default function ProductsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("pallet-industri");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const activeCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo CV. Asia Plastik, saya tertarik dengan produk ${productTitle} dari katalog website dan ingin menanyakan penawaran harga serta spesifikasi.`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % palletSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + palletSlides.length) % palletSlides.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Split Screen Page Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12 flex-1 w-full">
        {/* Left Column: Sticky Category Sidebar (lg:w-1/4) */}
        <aside className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-32 h-fit">
            <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-6">
              KATEGORI PRODUK
            </h2>

            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = activeCategoryId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setCurrentSlide(0);
                    }}
                    className={`w-full text-left px-5 py-3.5 font-semibold text-sm transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white rounded-xl shadow-md"
                        : "text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 rounded-xl"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-white shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Column: Product Display (lg:w-3/4) */}
        <section className="w-full lg:w-3/4">
          {/* Header Section */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              Katalog Produk &gt; {activeCategory.name}
            </div>

            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
              {activeCategory.displayName}
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              {activeCategory.subtitle}
            </p>

            <div className="border-t border-slate-200 dark:border-slate-800 mt-6 pt-2" />
          </div>

          {activeCategoryId === "pallet-industri" ? (
            /* ========================================================================= */
            /* 1. PRODUCT CARD CONTAINER (PREMIUM SIDE-BY-SIDE B2B LAYOUT)               */
            /* grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-10 bg-white     */
            /* rounded-[2rem] shadow-xl border border-slate-100                          */
            /* ========================================================================= */
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-10 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 transition-all">
              {/* ======================================================================= */}
              {/* 2. LEFT COLUMN: FLOATING IMAGE GALLERY (lg:col-span-5)                  */}
              {/* ======================================================================= */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Main Floating Product Display Container */}
                <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 relative aspect-square flex items-center justify-center border border-slate-100 dark:border-slate-800/80 group overflow-hidden">
                  {/* Subtle Ambient Radial Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

                  {/* Main Image with Remove-BG Floating Trick */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={palletSlides[currentSlide].image}
                      alt={palletSlides[currentSlide].title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain mix-blend-multiply dark:mix-blend-normal drop-shadow-2xl hover:scale-105 transition-transform duration-500 select-none p-2"
                    />
                  </div>

                  {/* Slide Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    type="button"
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    type="button"
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Counter Badge */}
                  <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-slate-900/90 text-[11px] font-bold text-slate-600 dark:text-slate-300 backdrop-blur-xs border border-slate-200/60 dark:border-slate-700/60">
                    {currentSlide + 1} / {palletSlides.length}
                  </div>
                </div>

                {/* Thumbnails below the main image */}
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {palletSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all p-1 bg-slate-50 dark:bg-slate-800/50 cursor-pointer ${
                        currentSlide === idx
                          ? "border-blue-600 ring-2 ring-blue-500/20 shadow-sm"
                          : "border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="80px"
                        className="object-contain mix-blend-multiply dark:mix-blend-normal p-1"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* ======================================================================= */}
              {/* 3. RIGHT COLUMN: DETAILS & DESCRIPTION (lg:col-span-7)                  */}
              {/* ======================================================================= */}
              <div className="lg:col-span-7 flex flex-col justify-center h-full">
                {/* Header: Badges & Title */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>B2B INDUSTRIAL FLAGSHIP</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Produksi Pabrik Resmi</span>
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {palletPSeriesProduct.title}
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                    Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, &amp; Racking Otomasi
                  </p>
                </div>

                {/* Specs Grid: Beautifully styled 2-column grid */}
                <div className="grid grid-cols-2 gap-4 my-8">
                  {/* Spec 1: Dimensi */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                      <Ruler className="w-4 h-4 shrink-0" />
                      <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        Dimensi
                      </span>
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">
                      {palletPSeriesProduct.dimensions}
                    </div>
                  </div>

                  {/* Spec 2: Berat */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                      <Weight className="w-4 h-4 shrink-0" />
                      <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        Berat
                      </span>
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">
                      {palletPSeriesProduct.weight}
                    </div>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {palletPSeriesProduct.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href={getWhatsAppLink(palletPSeriesProduct.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Hubungi Penjualan</span>
                  </a>

                  <a
                    href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm cursor-pointer"
                  >
                    <span>Hotline: {footerData.contact.phone}</span>
                  </a>
                </div>
              </div>
            </article>
          ) : (
            /* Clean Empty State for other category tabs */
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <PackageOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Katalog {activeCategory.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                Produk untuk kategori ini sedang dalam tahap persiapan spesifikasi teknis resmi.
                Hubungi sales representatif kami untuk ketersediaan cetakan dan penawaran langsung.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink(`Kategori ${activeCategory.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold inline-flex items-center gap-2 shadow-md shadow-blue-600/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hubungi Tim Sales</span>
                </a>
                <button
                  onClick={() => setActiveCategoryId("pallet-industri")}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-2.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Lihat Pallet Industri</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
