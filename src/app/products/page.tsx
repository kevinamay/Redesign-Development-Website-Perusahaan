"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronRight,
  Sparkles,
  CheckCircle2,
  PackageOpen,
  ArrowRight,
  PhoneCall,
  Search,
  X,
  Tag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { footerData } from "@/data/homeData";
import { useLanguage } from "@/data/translations";
import {
  catalogUiTranslations,
  categoriesTranslations,
  getLocalizedProduct,
} from "@/data/catalogTranslations";
import {
  keranjangProducts,
  boxLipatProducts,
  laluLintasProducts,
  botolPupukProducts,
  kosmetikProducts,
  minyakGorengProducts,
  kemasanPETProducts,
  jerigenHdpeProducts,
  jerigenChemicalProducts,
  jerigenOliProducts,
  jerigenLipatProducts,
  botolHdpeProducts,
  kalengPailProducts,
  perikananProducts,
} from "@/data/catalogData";

// Daftar Kategori ID dan fallback nama
const categoryIds = [
  { id: "pallet-industri", defaultName: "Pallet Industri" },
  { id: "keranjang-industri", defaultName: "Keranjang Industri" },
  { id: "box-lipat", defaultName: "Box Lipat" },
  { id: "blok-lalu-lintas", defaultName: "Blok Lalu Lintas dan Kerucut Lalu Lintas" },
  { id: "botol-pupuk-pet", defaultName: "Botol Pupuk PET" },
  { id: "kosmetik", defaultName: "Kosmetik" },
  { id: "botol-minyak-goreng", defaultName: "Botol Minyak Goreng" },
  { id: "beragam-kemasan-pet", defaultName: "Beragam Kemasan PET" },
  { id: "jerigen-hdpe", defaultName: "Jerigen HDPE" },
  { id: "jerigen-chemical-hdpe", defaultName: "Jerigen Chemical HDPE" },
  { id: "jerigen-oli", defaultName: "Jerigen Oli" },
  { id: "jerigen-lipat", defaultName: "Jerigen Lipat" },
  { id: "botol-hdpe", defaultName: "Botol HDPE" },
  { id: "kaleng-pail-plastik", defaultName: "Kaleng & Pail Plastik" },
  { id: "perikanan-dan-kelautan", defaultName: "Perikanan dan Kelautan" },
];

const palletProductData = {
  title: "PALLET P SERIES",
  dimensi: "1200 x 1165 x 140 MM",
  berat: "12 KG",
  deskripsi:
    "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.",
  subtitle:
    "Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, & Racking Otomasi",
  imagePath: "/images/product/Pallet/pallet-floating.png",
  isPallet: true,
};

// Pemetaan data produk per kategori
const categoryProductsMap: Record<
  string,
  Array<{
    title: string;
    dimensi: string;
    berat: string;
    deskripsi: string;
    imagePath: string;
    subtitle?: string;
    isPallet?: boolean;
  }>
> = {
  "pallet-industri": [palletProductData],
  "keranjang-industri": keranjangProducts,
  "box-lipat": boxLipatProducts,
  "blok-lalu-lintas": laluLintasProducts,
  "botol-pupuk-pet": botolPupukProducts,
  "kosmetik": kosmetikProducts,
  "botol-minyak-goreng": minyakGorengProducts,
  "beragam-kemasan-pet": kemasanPETProducts,
  "jerigen-hdpe": jerigenHdpeProducts,
  "jerigen-chemical-hdpe": jerigenChemicalProducts,
  "jerigen-oli": jerigenOliProducts,
  "jerigen-lipat": jerigenLipatProducts,
  "botol-hdpe": botolHdpeProducts,
  "kaleng-pail-plastik": kalengPailProducts,
  "perikanan-dan-kelautan": perikananProducts,
};

export default function ProductsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("pallet-industri");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { lang } = useLanguage();
  const ui = catalogUiTranslations[lang] || catalogUiTranslations.id;

  const categories = categoryIds.map((item) => {
    const meta =
      categoriesTranslations[item.id]?.[lang] || categoriesTranslations[item.id]?.id;
    return {
      id: item.id,
      name: meta?.name || item.defaultName,
      displayName: meta?.displayName || item.defaultName.toUpperCase(),
      subtitle: meta?.subtitle || "",
    };
  });

  const activeCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  const getWhatsAppLink = (productOrCategoryTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(ui.whatsappMessage(productOrCategoryTitle));
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  // Daftar seluruh produk yang digabungkan dengan metadata kategori untuk pencarian
  const allProductsWithCategory = useMemo(() => {
    return categoryIds.flatMap((catItem) => {
      const catMeta =
        categoriesTranslations[catItem.id]?.[lang] ||
        categoriesTranslations[catItem.id]?.id;
      const catName = catMeta?.name || catItem.defaultName;
      const catDisplayName = catMeta?.displayName || catItem.defaultName.toUpperCase();
      const rawProducts = categoryProductsMap[catItem.id] || [];

      return rawProducts.map((p) => ({
        ...p,
        categoryId: catItem.id,
        categoryName: catName,
        categoryDisplayName: catDisplayName,
      }));
    });
  }, [lang]);

  // Logika Filter Produk berdasarkan Nama Produk atau Nama Kategori
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return allProductsWithCategory.filter((p) => {
      const localized = getLocalizedProduct(p, lang);

      // 1. Pencarian berdasarkan Nama Produk (asli atau terjemahan)
      const titleMatch =
        p.title.toLowerCase().includes(query) ||
        localized.title.toLowerCase().includes(query);

      // 2. Pencarian berdasarkan Nama Kategori Produk
      const categoryMatch =
        p.categoryName.toLowerCase().includes(query) ||
        p.categoryDisplayName.toLowerCase().includes(query) ||
        p.categoryId.toLowerCase().includes(query);

      // 3. Pencarian berdasarkan Deskripsi & Subtitle
      const descMatch =
        p.deskripsi.toLowerCase().includes(query) ||
        localized.deskripsi.toLowerCase().includes(query) ||
        Boolean(p.subtitle && p.subtitle.toLowerCase().includes(query)) ||
        Boolean(localized.subtitle && localized.subtitle.toLowerCase().includes(query));

      // 4. Pencarian berdasarkan Dimensi & Berat
      const specMatch =
        p.dimensi.toLowerCase().includes(query) ||
        p.berat.toLowerCase().includes(query);

      return titleMatch || categoryMatch || descMatch || specMatch;
    });
  }, [searchQuery, allProductsWithCategory, lang]);

  const isSearching = searchQuery.trim().length > 0;
  const activeProducts = categoryProductsMap[activeCategoryId] || [];

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
              {ui.sidebarTitle}
            </h2>

            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = !isSearching && activeCategoryId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setSearchQuery("");
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
          {/* SEARCH BAR COMPONENT (Ditempatkan persis di atas header katalog sesuai permintaan) */}
          <div className="mb-8">
            <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-blue-600 transition-all duration-200">
              <div className="pl-4 sm:pl-5 pr-2 text-slate-400 dark:text-slate-500 pointer-events-none flex items-center justify-center">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  ui.search?.placeholder ||
                  "Cari produk berdasarkan nama atau kategori (contoh: Pallet, Keranjang, Jerigen, Botol)..."
                }
                className="w-full py-4 pr-12 text-sm sm:text-base text-slate-900 dark:text-white bg-transparent border-none focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                  aria-label={ui.search?.clearSearch || "Hapus pencarian"}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Filter Pills (Pencarian Cepat) */}
            <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-semibold shrink-0 mr-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                {ui.search?.popularSearches || "Pencarian Populer:"}
              </span>
              {[
                "Pallet",
                "Keranjang",
                "Box Lipat",
                "Jerigen",
                "Botol",
                "Kaleng Pail",
                "Lalu Lintas",
                "Perikanan",
              ].map((pill) => {
                const isSelected = searchQuery.toLowerCase() === pill.toLowerCase();
                return (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        setSearchQuery("");
                      } else {
                        setSearchQuery(pill);
                      }
                    }}
                    className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/60 dark:border-slate-700/60"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content: Search Results vs Active Category View */}
          {isSearching ? (
            <div>
              {/* Search Results Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5" />
                      <span>{ui.search?.resultsTitle || "Hasil Pencarian"}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                      &ldquo;{searchQuery}&rdquo;
                    </h1>

                    <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                      {ui.search?.resultsCount
                        ? ui.search.resultsCount(filteredProducts.length, searchQuery)
                        : `Ditemukan ${filteredProducts.length} produk untuk pencarian "${searchQuery}"`}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{ui.search?.clearSearch || "Hapus Pencarian"}</span>
                  </button>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-6 pt-2" />
              </div>

              {/* Matching Products Cards */}
              {filteredProducts.length > 0 ? (
                <div className="flex flex-col gap-12">
                  {filteredProducts.map((p, idx) => {
                    const localized = getLocalizedProduct(p, lang);
                    return (
                      <ProductCard
                        key={`${p.categoryId}-${p.title}-${idx}`}
                        title={localized.title}
                        dimensi={localized.dimensi}
                        berat={localized.berat}
                        deskripsi={localized.deskripsi}
                        imagePath={p.imagePath}
                        subtitle={localized.subtitle}
                        badges={[
                          {
                            label: p.categoryName,
                            icon: <Tag className="w-3.5 h-3.5 text-blue-500" />,
                            variant: "blue",
                          },
                          ...(p.isPallet
                            ? [
                                {
                                  label: ui.badges.flagship,
                                  icon: <Sparkles className="w-3.5 h-3.5" />,
                                  variant: "blue" as const,
                                },
                                {
                                  label: ui.badges.factoryOfficial,
                                  icon: (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                  ),
                                  variant: "emerald" as const,
                                },
                              ]
                            : []),
                        ]}
                      />
                    );
                  })}
                </div>
              ) : (
                /* Sleek Empty State for Search */
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {ui.search?.noResultsTitle || "Produk Tidak Ditemukan"}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                    {ui.search?.noResultsDesc
                      ? ui.search.noResultsDesc(searchQuery)
                      : `Tidak ada produk atau kategori yang cocok dengan "${searchQuery}". Coba kata kunci lain atau periksa ejaan.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-colors text-sm font-semibold inline-flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
                  >
                    <span>{ui.search?.allProducts || "Tampilkan Semua Produk"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Header Section (Persis sesuai gambar 2: KATALOG PRODUK > PALLET INDUSTRI) */}
              <div className="mb-8">
                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  {ui.breadcrumbCatalog} &gt; {activeCategory.name}
                </div>

                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {activeCategory.displayName}
                </h1>

                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                  {activeCategory.subtitle}
                </p>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-6 pt-2" />
              </div>

              {/* Active Category Products List */}
              {activeProducts.length > 0 ? (
                <div className="flex flex-col gap-12">
                  {activeProducts.map((p) => {
                    const localized = getLocalizedProduct(p, lang);
                    return (
                      <ProductCard
                        key={p.title}
                        title={localized.title}
                        dimensi={localized.dimensi}
                        berat={localized.berat}
                        deskripsi={localized.deskripsi}
                        imagePath={p.imagePath}
                        subtitle={localized.subtitle}
                        badges={
                          p.isPallet
                            ? [
                                {
                                  label: ui.badges.flagship,
                                  icon: <Sparkles className="w-3.5 h-3.5" />,
                                  variant: "blue",
                                },
                                {
                                  label: ui.badges.factoryOfficial,
                                  icon: (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                  ),
                                  variant: "emerald",
                                },
                              ]
                            : undefined
                        }
                      />
                    );
                  })}
                </div>
              ) : (
                /* Clean Empty State for other category tabs */
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <PackageOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {ui.emptyState.titlePrefix} {activeCategory.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                    {ui.emptyState.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLink(`Kategori ${activeCategory.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold inline-flex items-center gap-2 shadow-md shadow-blue-600/20"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>{ui.emptyState.contactSales}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveCategoryId("pallet-industri")}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-2.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{ui.emptyState.viewPallet}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
