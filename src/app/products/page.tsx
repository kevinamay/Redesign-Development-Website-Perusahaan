"use client";

import React, { useState, useRef } from "react";
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

// Slides untuk produk PALLET P SERIES (Hanya Foto Produk Murni - 2 Slide)
const palletSlides = [
  {
    id: "slide-1",
    title: "Pallet P Series - Tampak Keseluruhan Produk",
    shortTitle: "Tampak Penuh",
    caption: "Tampak Depan (Full Product)",
    image: "/images/product/Pallet/pallet-product-full.jpg",
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

  // Touch swipe support for mobile
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped left -> next slide
      nextSlide();
    } else if (diff < -50) {
      // Swiped right -> prev slide
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. PAGE LAYOUT (SPLIT SCREEN)                                             */}
      {/* Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col     */}
      {/* lg:flex-row gap-12                                                        */}
      {/* Background: clean bg-slate-50 to make white cards pop                     */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12 flex-1 w-full">
        {/* ======================================================================= */}
        {/* 2. LEFT COLUMN: STICKY CATEGORY SIDEBAR (lg:w-1/4)                      */}
        {/* Container: lg:sticky lg:top-32 h-fit                                   */}
        {/* Title: KATEGORI PRODUK                                                  */}
        {/* ======================================================================= */}
        <aside className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-32 h-fit">
            {/* Sidebar Title */}
            <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-6">
              KATEGORI PRODUK
            </h2>

            {/* Category Tabs */}
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

        {/* ======================================================================= */}
        {/* 3. RIGHT COLUMN: PRODUCT DISPLAY (lg:w-3/4)                             */}
        {/* Header: Display active category title "PALLET INDUSTRI"                 */}
        {/* ======================================================================= */}
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

            {/* Subtle Divider */}
            <div className="border-t border-slate-200 dark:border-slate-800 mt-6 pt-2" />
          </div>

          {/* ===================================================================== */}
          {/* 4. PRODUCT CARD DESIGN                                                */}
          {/* - Judul di atas foto                                                  */}
          {/* - Foto produk besar, cropped dekat, dan carousel swap kanan-kiri      */}
          {/* - Deskripsi dan spesifikasi di bawah foto                             */}
          {/* ===================================================================== */}
          {activeCategoryId === "pallet-industri" ? (
            <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-8 transition-all">
              {/* ================================================================= */}
              {/* 4A. JUDUL DI ATAS FOTO                                            */}
              {/* ================================================================= */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>B2B Industrial Flagship</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {palletPSeriesProduct.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, &amp; Racking Otomasi
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-2 rounded-xl border border-emerald-200/60 dark:border-emerald-800/60 self-start sm:self-auto shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Produksi Pabrik Resmi Sejak 1985</span>
                </div>
              </div>

              {/* ================================================================= */}
              {/* 4B. FOTO PRODUK BESAR (CAROUSEL SWAP KANAN KIRI)                  */}
              {/* Foto di-crop didekatkan agar produk kelihatan besar, jelas & dekat */}
              {/* ================================================================= */}
              <div className="flex flex-col gap-4">
                {/* Main Showcase Container */}
                <div
                  className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:h-[460px] lg:h-[500px] bg-slate-100/90 dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center p-3 sm:p-6 border border-slate-200/80 dark:border-slate-800 select-none group"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Ambient Lighting Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

                  {/* Active Slide Image */}
                  <Image
                    src={palletSlides[currentSlide].image}
                    alt={palletSlides[currentSlide].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-contain p-2 sm:p-4 hover:scale-105 transition-transform duration-500"
                  />

                  {/* Caption Badge (Top Left) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 dark:bg-slate-950/90 text-white text-xs font-semibold backdrop-blur-md shadow-md border border-white/10">
                      {palletSlides[currentSlide].caption}
                    </span>
                  </div>

                  {/* Slide Counter (Top Right) */}
                  <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-bold backdrop-blur-md shadow-md border border-slate-200/80 dark:border-slate-700/80">
                    {currentSlide + 1} / {palletSlides.length}
                  </div>

                  {/* Prev Button (Swap Kiri) */}
                  <button
                    onClick={prevSlide}
                    type="button"
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button (Swap Kanan) */}
                  <button
                    onClick={nextSlide}
                    type="button"
                    aria-label="Foto berikutnya"
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Swipe Instruction Hint on Mobile */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center sm:hidden pointer-events-none">
                    <span className="text-[10px] text-slate-500 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
                      Geser kanan / kiri untuk melihat foto lain
                    </span>
                  </div>
                </div>

                {/* 2 Thumbnail Previews Row */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto w-full">
                  {palletSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all p-1 bg-slate-100 dark:bg-slate-800/60 cursor-pointer ${
                        currentSlide === idx
                          ? "border-blue-600 ring-2 ring-blue-500/20 shadow-md scale-[1.02]"
                          : "border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="25vw"
                        className="object-contain p-1"
                      />
                      <span className="absolute bottom-1 inset-x-1 text-[10px] sm:text-xs font-semibold bg-slate-900/80 text-white py-0.5 px-1.5 rounded truncate text-center backdrop-blur-xs">
                        {slide.shortTitle}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ================================================================= */}
              {/* 4C. SPESIFIKASI & DESKRIPSI DI BAWAH FOTO                         */}
              {/* ================================================================= */}
              <div className="flex flex-col gap-6 pt-2">
                {/* Specs Box (Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Spec 1: Dimensi */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                      <Ruler className="w-5 h-5 shrink-0" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Dimensi
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {palletPSeriesProduct.dimensions}
                    </div>
                  </div>

                  {/* Spec 2: Berat */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                      <Weight className="w-5 h-5 shrink-0" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Berat
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {palletPSeriesProduct.weight}
                    </div>
                  </div>
                </div>

                {/* Deskripsi Produk (MUST BE THIS EXACT TEXT) */}
                <div className="bg-slate-50/80 dark:bg-slate-800/30 p-5 sm:p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Deskripsi Produk
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {palletPSeriesProduct.description}
                  </p>
                </div>

                {/* Tombol Aksi */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={getWhatsAppLink(palletPSeriesProduct.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Hubungi Penjualan</span>
                  </a>

                  <a
                    href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="w-max mt-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm cursor-pointer"
                  >
                    <span>Hotline: {footerData.contact.phone}</span>
                  </a>
                </div>
              </div>
            </article>
          ) : (
            /* Tab Kategori Lain (Clean Empty State) */
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
