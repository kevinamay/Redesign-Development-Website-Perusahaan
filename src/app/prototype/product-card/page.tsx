"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Layers,
  LayoutGrid,
  Sun,
  Moon,
  ExternalLink,
  Tag,
} from "lucide-react";
import ProductCardOriginal from "@/components/prototype/ProductCardOriginal";
import ProductCardVariantA from "@/components/prototype/ProductCardVariantA";
import ProductCardVariantB from "@/components/prototype/ProductCardVariantB";
import ProductCardVariantC from "@/components/prototype/ProductCardVariantC";
import PrototypeProductSwitcher, {
  PRODUCT_PROTOTYPE_VARIANTS,
} from "@/components/prototype/PrototypeProductSwitcher";

const SAMPLE_PRODUCTS = [
  {
    id: "pallet",
    title: "PALLET P SERIES",
    subtitle:
      "Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, & Racking Otomasi",
    dimensi: "1200 x 1165 x 140 MM",
    berat: "12 KG",
    deskripsi:
      "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material HDPE/PP berkualitas tinggi berstandar ekspor, palet ini menawarkan ketahanan optimal terhadap benturan, kelembapan, bahan kimia, serta kompatibel dengan automated racking & forklift 4 arah.",
    imagePath: "/images/products/pallet.png",
    categoryName: "Pallet Industri",
  },
  {
    id: "keranjang",
    title: "KERANJANG INDUSTRI C SERIES",
    subtitle: "Wadah Serbaguna Heavy-Duty untuk Distribusi Logistik & Manufaktur",
    dimensi: "620 x 430 x 310 MM",
    berat: "2.8 KG",
    deskripsi:
      "Keranjang plastik industri Asia Plastik berdaya tampung tinggi dan dapat ditumpuk secara presisi (stackable). Ideal untuk perakitan otomotif, hasil panen, cold storage, dan rantai pasok ritel modern.",
    imagePath: "/images/products/keranjang.png",
    categoryName: "Keranjang Plastik",
  },
  {
    id: "jerigen",
    title: "JERIGEN HDPE 20 LITER",
    subtitle: "Kemasan Cairan Industri, Kimia, & Minyak Berkualitas Tinggi",
    dimensi: "285 x 245 x 380 MM",
    berat: "950 GRAM",
    deskripsi:
      "Jerigen kimia & industri terbuat dari 100% High-Density Polyethylene berdensitas tinggi dengan ketahanan anti-bocor, tutup segel ganda (tamper-evident), serta lulus uji drop test industri.",
    imagePath: "/images/products/jerigen-hdpe.png",
    categoryName: "Jerigen Industri",
  },
];

function PrototypeProductContent() {
  const searchParams = useSearchParams();
  const currentVariantId = searchParams.get("variant") ?? "A";
  const [selectedProductId, setSelectedProductId] = useState("pallet");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeProduct =
    SAMPLE_PRODUCTS.find((p) => p.id === selectedProductId) ||
    SAMPLE_PRODUCTS[0];

  const currentVariant =
    PRODUCT_PROTOTYPE_VARIANTS.find(
      (v) => v.id.toLowerCase() === currentVariantId.toLowerCase()
    ) || PRODUCT_PROTOTYPE_VARIANTS[1];

  const renderCard = () => {
    const cardProps = {
      title: activeProduct.title,
      dimensi: activeProduct.dimensi,
      berat: activeProduct.berat,
      deskripsi: activeProduct.deskripsi,
      imagePath: activeProduct.imagePath,
      subtitle: activeProduct.subtitle,
      badges: [
        {
          label: activeProduct.categoryName,
          icon: <Tag className="w-3.5 h-3.5 text-blue-500" />,
          variant: "blue" as const,
        },
      ],
    };

    switch (currentVariantId.toUpperCase()) {
      case "A":
        return <ProductCardVariantA {...cardProps} />;
      case "B":
        return <ProductCardVariantB {...cardProps} />;
      case "C":
        return <ProductCardVariantC {...cardProps} />;
      case "ORIGINAL":
      default:
        return <ProductCardOriginal {...cardProps} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* HEADER CONTROL BAR */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Katalog</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 text-xs font-black tracking-wide border border-blue-200 dark:border-blue-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROTOTYPE DESIGN LAB</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
              title="Ganti Tema Terang/Gelap"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mode Terang</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Mode Gelap</span>
                </>
              )}
            </button>

            <Link
              href={`/products?variant=${currentVariantId}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all"
            >
              <span>Terapkan ke Halaman /products</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN PROTOTYPE WORKSPACE */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 pb-36">
        {/* HERO TITLE & EXPLANATION */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Eksplorasi Desain Kartu Produk
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Pilih dan uji 3 variasi desain baru yang dirancang khusus untuk meningkatkan konversi B2B, kerapian spesifikasi teknis, dan kesan premium manufaktur.
          </p>
        </div>

        {/* PRODUCT SWITCHER PILLS (To test different items) */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <LayoutGrid className="w-3.5 h-3.5" />
            Uji Produk:
          </span>
          {SAMPLE_PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedProductId(prod.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedProductId === prod.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300"
              }`}
            >
              {prod.title}
            </button>
          ))}
        </div>

        {/* ACTIVE VARIANT HIGHLIGHT CARD */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase">
                {currentVariant.id.toUpperCase()}
              </span>
              <span className="text-sm font-extrabold text-blue-950 dark:text-blue-200">
                {currentVariant.label}
              </span>
            </div>
            <p className="text-xs text-blue-900/80 dark:text-blue-300/80 mt-1">
              {currentVariant.description}
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold shrink-0">
            Gunakan switcher melayang di bawah untuk berganti varian
          </div>
        </div>

        {/* RENDER ACTIVE PRODUCT CARD */}
        <div className="transition-all duration-300">
          {renderCard()}
        </div>

        {/* DESIGN COMPARISON GUIDE */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-extrabold tracking-tight">
              Panduan Perbandingan Karakteristik Desain
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <div className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                Varian A: Industrial Studio
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Fokus pada <strong>presisi engineering & spesifikasi B2B</strong>. Menghadirkan panggung studio 3D di sisi kiri dan matriks 4 parameter teknis di sisi kanan dengan tombol RFQ kontras tinggi.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <div className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                Varian B: Modern B2B Bento
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Gaya <strong>modular Bento Box kontemporer</strong> (ala Apple/Linear). Memisahkan hero spotlight, fitur keunggulan, dan panel spesifikasi gelap (HUD) secara seimbang dan mudah dipindai mata.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <div className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                Varian C: Panoramic Ribbon
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Tampilan <strong>sinematik panggung lebar</strong> dengan pita spesifikasi horizontal di tengah. Memberikan kesan mewah, bersih, dan rapi seperti katalog perusahaan multinasional modern.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FLOATING PROTOTYPE SWITCHER AT BOTTOM */}
      <PrototypeProductSwitcher currentVariant={currentVariantId} />
    </div>
  );
}

export default function PrototypeProductPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center font-bold">
          Memuat Prototype Lab...
        </div>
      }
    >
      <PrototypeProductContent />
    </Suspense>
  );
}
