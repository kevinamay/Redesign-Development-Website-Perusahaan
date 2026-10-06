"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Weight,
  PhoneCall,
  ChevronRight,
  PackageOpen,
  ArrowRight,
} from "lucide-react";
import { footerData } from "@/data/homeData";

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

const palletPSeriesProduct = {
  title: "PALLET P SERIES",
  image: "/images/product/Pallet/pallet1.png",
  dimensions: "1200 x 1165 x 140 MM",
  weight: "12 KG",
  description:
    "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.",
};

export default function ProductCatalog() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("pallet-industri");

  const activeCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  const getWhatsAppLink = (productTitle: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo CV. Asia Plastik, saya tertarik dengan produk ${productTitle} dari katalog website dan ingin menanyakan penawaran harga serta spesifikasi.`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12">
        {/* Left Column: Sticky Category Sidebar */}
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

        {/* Right Column: Product Display */}
        <section className="w-full lg:w-3/4">
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
            <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-8 items-center">
              {/* Image Area */}
              <div className="relative w-full lg:w-2/5 aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-slate-100 dark:border-slate-800/80">
                <Image
                  src={palletPSeriesProduct.image}
                  alt={palletPSeriesProduct.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="flex-1 w-full">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {palletPSeriesProduct.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                      <Ruler className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Dimensi
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {palletPSeriesProduct.dimensions}
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                      <Weight className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Berat
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {palletPSeriesProduct.weight}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                  {palletPSeriesProduct.description}
                </p>

                <a
                  href={getWhatsAppLink(palletPSeriesProduct.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-max mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-semibold text-sm shadow-md shadow-blue-600/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hubungi Penjualan</span>
                </a>
              </div>
            </article>
          ) : (
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
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-2.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold inline-flex items-center gap-1"
                >
                  <span>Lihat Pallet Industri</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
