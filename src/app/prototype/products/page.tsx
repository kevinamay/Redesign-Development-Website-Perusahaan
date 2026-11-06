"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ExternalLink, Box } from "lucide-react";
import {
  PRODUCT_VARIANTS_META,
  ProductCardVariantKey,
  resolveVariantKey,
  VariantOriginal,
  Variant3TabbedDeck,
  VariantCleanCorporate,
  VariantValueFocus,
  VariantSoftMinimal,
  VariantLightboxModal,
  VariantModalSpecTable,
  PrototypeProductSwitcher,
} from "@/components/product-variants";

// Sample test products
const sampleProducts = [
  {
    id: "pallet",
    title: "PALLET P SERIES",
    dimensi: "1200 x 1165 x 140 MM",
    berat: "12 KG",
    deskripsi:
      "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.",
    subtitle:
      "Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, & Racking Otomasi",
    imagePath: "/images/product/Pallet/pallet-floating.png",
    badges: [
      { label: "B2B INDUSTRIAL FLAGSHIP", variant: "blue" as const },
      { label: "PRODUKSI PABRIK RESMI", variant: "emerald" as const },
    ],
  },
  {
    id: "keranjang",
    title: "KERANJANG INDUSTRI T-25",
    dimensi: "620 X 430 X 250 MM",
    berat: "1,82 KG",
    deskripsi:
      "Keranjang Plastik Industri T-25 dari Asia Plastik adalah solusi ideal untuk kebutuhan penyimpanan dan distribusi dalam berbagai sektor industri. Terbuat dari bahan plastik berkualitas tinggi, keranjang ini kokoh, tahan lama, dan mampu menahan beban berat.",
    subtitle: "Wadah Logistik Berpori untuk Pergudangan & Industri Pangan",
    imagePath: "/images/product/Keranjang/keranjang-t25.png",
    badges: [
      { label: "Keranjang Industri", variant: "blue" as const },
    ],
  },
];

function ProductPrototypeContent() {
  const searchParams = useSearchParams();

  const urlVariantParam = searchParams.get("variant");
  const currentVariant: ProductCardVariantKey = resolveVariantKey(urlVariantParam);

  const [viewMode, setViewMode] = useState<"focus" | "all">("focus");
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);

  const activeProduct = sampleProducts[selectedProductIndex];
  const activeMeta =
    PRODUCT_VARIANTS_META.find((v) => v.key === currentVariant) ||
    PRODUCT_VARIANTS_META[2];

  const variantMap: Record<
    ProductCardVariantKey,
    React.ComponentType<any>
  > = {
    "lightbox-modal": VariantLightboxModal,
    "modal-spec-table": VariantModalSpecTable,
    "clean-corporate": VariantCleanCorporate,
    "value-focus": VariantValueFocus,
    "soft-minimal": VariantSoftMinimal,
    "tabbed-deck": Variant3TabbedDeck,
    "original": VariantOriginal,
  };

  const renderVariantComponent = (
    key: ProductCardVariantKey,
    product: typeof sampleProducts[0]
  ) => {
    const Component = variantMap[key] || VariantLightboxModal;
    return <Component {...product} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col pb-36">
      {/* Top Prototype Laboratory Banner */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono font-bold tracking-wider uppercase text-[11px] shadow-xs">
            PROTOTYPE LAB
          </span>
          <div className="flex flex-col">
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Eksplorasi Desain Produk Bersih & Profesional</span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="text-blue-600 dark:text-cyan-400 font-mono text-xs hidden sm:inline">
                {activeMeta.name}
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View Mode Toggle: Focus vs All */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center text-xs">
            <button
              type="button"
              onClick={() => setViewMode("focus")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === "focus"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Fokus Satu Desain
            </button>
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === "all"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Bandingkan Semua ({PRODUCT_VARIANTS_META.length})
            </button>
          </div>

          <Link
            href={`/products?variant=${currentVariant}`}
            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Buka di /products</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        {/* Sample Product Switcher Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-8 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Pilih Sampel Produk Uji:
            </span>
            <div className="flex items-center gap-2">
              {sampleProducts.map((prod, idx) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setSelectedProductIndex(idx)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedProductIndex === idx
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {prod.title}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 font-medium">
            <span>Tip: Tekan tombol panah keyboard</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
              →
            </kbd>
            <span>untuk mengganti desain seketika</span>
          </div>
        </div>

        {/* MODE 1: FOCUS SINGLE VARIANT */}
        {viewMode === "focus" && (
          <div className="space-y-6">
            {/* Variant Meta Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold border border-blue-200 dark:border-blue-800">
                    {activeMeta.badgeText} • {activeMeta.tag}
                  </span>
                  <span className="text-xs text-slate-300 dark:text-slate-700">•</span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    ID: {activeMeta.key}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {activeMeta.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {activeMeta.shortDesc}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="text-xs font-bold text-slate-500">
                  {PRODUCT_VARIANTS_META.length} Pilihan Tersedia
                </span>
              </div>
            </div>

            {/* The Active Variant Component Rendered */}
            <div className="transition-all duration-300">
              {renderVariantComponent(currentVariant, activeProduct)}
            </div>
          </div>
        )}

        {/* MODE 2: COMPARE ALL VARIANTS STACKED */}
        {viewMode === "all" && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                Komparasi Desain Bersih & Sederhana
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Menampilkan Desain Asli (Original), Desain 3 (Tabbed Deck), serta 6 variasi desain baru yang lebih tenang, profesional, dan khas website korporat manufaktur.
              </p>
            </div>

            {PRODUCT_VARIANTS_META.map((meta) => (
              <div key={meta.key} className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 px-6 py-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs shadow-xs">
                      {meta.badgeText}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {meta.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {meta.shortDesc}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/products?variant=${meta.key}`}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Coba di Halaman Utama</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {renderVariantComponent(meta.key, activeProduct)}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Bottom Prototype Switcher */}
      <PrototypeProductSwitcher currentVariant={currentVariant} />
    </div>
  );
}

export default function ProductPrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex items-center justify-center text-sm font-mono">
          Memuat Prototype Lab...
        </div>
      }
    >
      <ProductPrototypeContent />
    </Suspense>
  );
}
