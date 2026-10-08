"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Sparkles,
  CheckCircle2,
  PackageOpen,
  ArrowRight,
  PhoneCall,
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

export default function ProductsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("pallet-industri");
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
                const isActive = activeCategoryId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
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

          {activeCategoryId === "pallet-industri" ? (() => {
            const localizedPallet = getLocalizedProduct(
              {
                title: "PALLET P SERIES",
                dimensi: "1200 x 1165 x 140 MM",
                berat: "12 KG",
                deskripsi:
                  "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.",
                subtitle:
                  "Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, & Racking Otomasi",
              },
              lang
            );

            return (
              <ProductCard
                title={localizedPallet.title}
                subtitle={localizedPallet.subtitle}
                badges={[
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
                ]}
                dimensi={localizedPallet.dimensi}
                berat={localizedPallet.berat}
                deskripsi={localizedPallet.deskripsi}
                imagePath="/images/product/Pallet/pallet-floating.png"
              />
            );
          })() : activeCategoryId === "keranjang-industri" ? (
            <div className="flex flex-col gap-12">
              {keranjangProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "box-lipat" ? (
            <div className="flex flex-col gap-12">
              {boxLipatProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "blok-lalu-lintas" ? (
            <div className="flex flex-col gap-12">
              {laluLintasProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "botol-pupuk-pet" ? (
            <div className="flex flex-col gap-12">
              {botolPupukProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "kosmetik" ? (
            <div className="flex flex-col gap-12">
              {kosmetikProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "botol-minyak-goreng" ? (
            <div className="flex flex-col gap-12">
              {minyakGorengProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "beragam-kemasan-pet" ? (
            <div className="flex flex-col gap-12">
              {kemasanPETProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "jerigen-hdpe" ? (
            <div className="flex flex-col gap-12">
              {jerigenHdpeProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "jerigen-chemical-hdpe" ? (
            <div className="flex flex-col gap-12">
              {jerigenChemicalProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "jerigen-oli" ? (
            <div className="flex flex-col gap-12">
              {jerigenOliProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "jerigen-lipat" ? (
            <div className="flex flex-col gap-12">
              {jerigenLipatProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "botol-hdpe" ? (
            <div className="flex flex-col gap-12">
              {botolHdpeProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "kaleng-pail-plastik" ? (
            <div className="flex flex-col gap-12">
              {kalengPailProducts.map((p) => {
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
                  />
                );
              })}
            </div>
          ) : activeCategoryId === "perikanan-dan-kelautan" ? (
            <div className="flex flex-col gap-12">
              {perikananProducts.map((p) => {
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
                  onClick={() => setActiveCategoryId("pallet-industri")}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-2.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{ui.emptyState.viewPallet}</span>
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
