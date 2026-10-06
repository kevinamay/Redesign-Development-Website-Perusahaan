"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ruler,
  Weight,
  PhoneCall,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  ArrowRight,
  Layers,
  Sparkles,
  ShieldCheck,
  FileText,
  MessageCircle,
  Package,
  Boxes,
  Truck,
  RotateCcw,
} from "lucide-react";
import { catalogCategories, ProductCategory, ProductItem } from "@/data/catalogData";
import { footerData } from "@/data/homeData";

export default function ProductCatalog() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("pallet-industri");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);

  // Active Category Data
  const activeCategory = useMemo(() => {
    return (
      catalogCategories.find((cat) => cat.id === activeCategoryId) ||
      catalogCategories[0]
    );
  }, [activeCategoryId]);

  // Filtered products when searching
  const isSearching = searchQuery.trim().length > 0;
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: { category: ProductCategory; product: ProductItem }[] = [];

    catalogCategories.forEach((cat) => {
      cat.products.forEach((prod) => {
        if (
          prod.name.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q) ||
          prod.description.toLowerCase().includes(q) ||
          prod.specs.some(
            (s) =>
              s.value.toLowerCase().includes(q) ||
              s.label.toLowerCase().includes(q)
          )
        ) {
          results.push({ category: cat, product: prod });
        }
      });
    });

    return results;
  }, [searchQuery, isSearching]);

  // WhatsApp Link Generator
  const getWhatsAppLink = (productName: string) => {
    const rawNumber = footerData.contact.whatsapp.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Halo CV. Asia Plastik, saya tertarik dengan produk ${productName} dari katalog website dan ingin berkonsultasi mengenai penawaran harga serta spesifikasi teknis.`
    );
    return `https://wa.me/${rawNumber}?text=${message}`;
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* ========================================================================= */}
      {/* CATALOG HERO BANNER & SEARCH BAR                                          */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 pt-8 pb-12 sm:pb-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Katalog Produk
            </span>
            {activeCategory && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-800 dark:text-slate-200">
                  {activeCategory.name}
                </span>
              </>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>B2B Enterprise Manufacturing Catalog</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                Katalog Produk Manufaktur & Kemasan Industri
              </h1>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Diproduksi dengan mesin injection & blow moulding presisi berstandar ISO 9001:2015.
                Tersedia kapasitas produksi skala besar, cetakan kustom (custom tooling), dan
                distribusi terpercaya ke seluruh Indonesia.
              </p>
            </div>

            {/* Quick Live Search Bar */}
            <div className="w-full lg:w-96">
              <label
                htmlFor="catalog-search"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                Pencarian Cepat Produk
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="catalog-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama produk, dimensi, berat..."
                  className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats Micro Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Standar Mutu</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">ISO 9001:2015</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Material Resin</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Virgin & Food Grade</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Boxes className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Kapasitas Produksi</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">500+ Ton / Bulan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Jangkauan Logistik</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. PAGE LAYOUT (SPLIT SCREEN)                                             */}
      {/* Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col     */}
      {/* lg:flex-row gap-12                                                        */}
      {/* Background: clean bg-slate-50 to make white cards pop                     */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12">
        {/* ======================================================================= */}
        {/* 2. LEFT COLUMN: STICKY CATEGORY SIDEBAR (lg:w-1/4)                      */}
        {/* Container: lg:sticky lg:top-32 h-fit                                   */}
        {/* Title: KATEGORI PRODUK (text-sm font-bold text-slate-400 tracking-     */}
        {/*        widest uppercase mb-6)                                          */}
        {/* List of categories: Pallet Industri, Keranjang Industri, Box Lipat,     */}
        {/* Blok Lalu Lintas, Botol Pupuk PET, dll.                                 */}
        {/* Styling: Active (bg-blue-600 text-white rounded-xl shadow-md),          */}
        {/* Inactive: text-slate-600 hover:bg-slate-200 rounded-xl                  */}
        {/* ======================================================================= */}
        <aside className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-32 h-fit flex flex-col gap-6">
            <div>
              {/* Category Sidebar Title */}
              <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-6">
                KATEGORI PRODUK
              </h2>

              {/* Mobile Horizontal Scroll Category Pill Strip (for small screens) */}
              <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 mb-4 scrollbar-none">
                {catalogCategories.map((cat) => {
                  const isActive = !isSearching && activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategoryId(cat.id);
                        setSearchQuery("");
                      }}
                      className={`whitespace-nowrap px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 shrink-0 ${
                        isActive
                          ? "bg-blue-600 text-white rounded-xl shadow-md"
                          : "text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              {/* Desktop Vertical Category List */}
              <div className="hidden lg:flex flex-col gap-2">
                {catalogCategories.map((cat) => {
                  const isActive = !isSearching && activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategoryId(cat.id);
                        setSearchQuery("");
                      }}
                      className={`w-full text-left px-5 py-3.5 font-semibold text-sm transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? "bg-blue-600 text-white rounded-xl shadow-md"
                          : "text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 rounded-xl"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-blue-700/60 text-white font-bold"
                            : "bg-slate-200/80 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-300 dark:group-hover:bg-slate-700"
                        }`}
                      >
                        {cat.products.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* B2B Custom Tooling Assistance Callout Card */}
            <div className="hidden lg:block bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 rounded-3xl shadow-lg border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center mb-4">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white mb-2">
                Butuh Cetakan / Moulding Khusus?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Kami menyediakan layanan rancang cetakan custom (tooling fabrication) sesuai
                spesifikasi 3D CAD/drawing teknis perusahaan Anda.
              </p>
              <a
                href={getWhatsAppLink("Custom Mold & Tooling Injection/Blow")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Konsultasi Teknis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Sales Contact Help Box */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 shadow-sm">
              <p className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>Layanan Hotline Penjualan</span>
              </p>
              <p className="mb-2 text-slate-500 dark:text-slate-400">
                Respon cepat untuk pemesanan partai besar (PO) & tender.
              </p>
              <a
                href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline block"
              >
                {footerData.contact.phone}
              </a>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {footerData.contact.workingHours}
              </span>
            </div>
          </div>
        </aside>

        {/* ======================================================================= */}
        {/* 3. RIGHT COLUMN: PRODUCT DISPLAY (lg:w-3/4)                             */}
        {/* Header: Display the active category title "PALLET INDUSTRI"             */}
        {/* (text-4xl font-extrabold text-slate-900 mb-2) and a small breadcrumb/  */}
        {/* subtitle. Add a top border or subtle divider.                           */}
        {/* ======================================================================= */}
        <section className="w-full lg:w-3/4">
          {/* SEARCH MODE HEADER */}
          {isSearching ? (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Hasil Pencarian
                </h2>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  Kembali ke Semua Kategori
                </button>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Menampilkan {searchResults.length} produk untuk kata kunci &ldquo;{searchQuery}&rdquo;
              </p>
              <div className="border-t border-slate-200 dark:border-slate-800 mt-4" />
            </div>
          ) : (
            /* STANDARD ACTIVE CATEGORY HEADER */
            <div className="mb-8">
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                {activeCategory.displayName}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                {activeCategory.subtitle}
              </p>

              {/* Subtle divider */}
              <div className="border-t border-slate-200 dark:border-slate-800 mt-6 pt-2" />
            </div>
          )}

          {/* SEARCH RESULTS DISPLAY */}
          {isSearching && (
            <div className="flex flex-col gap-8">
              {searchResults.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Produk Tidak Ditemukan
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
                    Maaf, tidak ada produk yang cocok dengan &ldquo;{searchQuery}&rdquo;. Silakan coba
                    kata kunci lain atau jelajahi kategori di sebelah kiri.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Tampilkan Semua Produk</span>
                  </button>
                </div>
              ) : (
                searchResults.map(({ product, category }) => (
                  <ProductBentoCard
                    key={product.id}
                    product={product}
                    categoryName={category.name}
                    onOpenContact={() =>
                      window.open(getWhatsAppLink(product.name), "_blank")
                    }
                  />
                ))
              )}
            </div>
          )}

          {/* STANDARD CATEGORY PRODUCTS DISPLAY */}
          {!isSearching && (
            <div className="flex flex-col gap-8">
              {activeCategory.products.map((product) => (
                <ProductBentoCard
                  key={product.id}
                  product={product}
                  categoryName={activeCategory.name}
                  onOpenContact={() =>
                    window.open(getWhatsAppLink(product.name), "_blank")
                  }
                />
              ))}

              {/* Category Additional Technical Notes Card */}
              <div className="mt-4 p-6 sm:p-8 rounded-3xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Garansi Mutu & Kustomisasi Spesifikasi</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    Seluruh lini produk {activeCategory.name} dapat dikustomisasi warna, ketebalan
                    dinding, logo perusahaan (hot-stamping / embossed), serta formulasi aditif UV
                    untuk ketahanan luar ruangan.
                  </p>
                </div>
                <a
                  href={getWhatsAppLink(`${activeCategory.name} - Kustomisasi Spesifikasi`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold shadow-sm border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Diskusikan Kustomisasi</span>
                </a>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

{/* ========================================================================= */}
{/* 4. PRODUCT CARD DESIGN (PALLET P SERIES & BENTO-STYLE PRODUCT CARDS)        */}
{/* Card: bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100  */}
{/*       flex flex-col lg:flex-row gap-8 items-center                       */}
{/* Image Area: relative w-full lg:w-2/5 aspect-square bg-slate-50           */}
{/*       rounded-2xl overflow-hidden flex items-center justify-center       */}
{/* Image: Next.js <Image /> pointing to /images/product/Pallet/pallet1.png   */}
{/*       (or whichever filename in folder). object-contain hover:scale-105  */}
{/*       transition-transform duration-500                                 */}
{/* Content Area: Title (text-3xl font-bold text-slate-900 mb-4)             */}
{/* Specs Box: grid grid-cols-2 gap-4 mb-6                                   */}
{/*    Spec 1: Icon (Ruler), Label "Dimensi", Value "1200 x 1165 x 140 MM"   */}
{/*    Spec 2: Icon (Weight), Label "Berat", Value "12 KG"                   */}
{/*    Style inside: bg-slate-50 p-4 rounded-xl border border-slate-100      */}
{/* Description: EXACT SPECIFIED TEXT FOR PALLET P SERIES                    */}
{/* Action Button: w-max mt-6 bg-blue-600 text-white px-8 py-3              */}
{/*    rounded-full hover:bg-blue-700 transition-colors ("Hubungi Penjualan") */}
{/* ========================================================================= */}
interface ProductBentoCardProps {
  product: ProductItem;
  categoryName: string;
  onOpenContact: () => void;
}

function ProductBentoCard({
  product,
  categoryName,
  onOpenContact,
}: ProductBentoCardProps) {
  // Find Dimension & Weight specs
  const dimSpec = product.specs.find((s) => s.label.toLowerCase() === "dimensi") || product.specs[0];
  const weightSpec = product.specs.find((s) => s.label.toLowerCase() === "berat") || product.specs[1];

  return (
    <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-8 items-center transition-all duration-300 hover:shadow-2xl hover:border-slate-200 dark:hover:border-slate-700">
      {/* ======================================================================= */}
      {/* Image Area (Left side of card):                                         */}
      {/* Container: relative w-full lg:w-2/5 aspect-square bg-slate-50           */}
      {/*            rounded-2xl overflow-hidden flex items-center justify-center */}
      {/* Image: object-contain hover:scale-105 transition-transform duration-500 */}
      {/* ======================================================================= */}
      <div className="relative w-full lg:w-2/5 aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-slate-100 dark:border-slate-800/80 group">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

        {/* Product Badge if available */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
            {product.badge}
          </div>
        )}

        {/* Next.js Responsive Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={product.id === "pallet-p-series"}
            className="object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Quick Zoom Hint Overlay */}
        <div className="absolute bottom-3 right-3 text-[10px] text-slate-400 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity">
          Arahkan kursor untuk zoom
        </div>
      </div>

      {/* ======================================================================= */}
      {/* Content Area (Right side of card):                                      */}
      {/* Title: PALLET P SERIES (text-3xl font-bold text-slate-900 mb-4)         */}
      {/* Specs Box: grid grid-cols-2 gap-4 mb-6                                  */}
      {/* Spec 1: Icon (Ruler), Label "Dimensi", Value "1200 x 1165 x 140 MM"     */}
      {/* Spec 2: Icon (Weight), Label "Berat", Value "12 KG"                     */}
      {/* Style specs: bg-slate-50 p-4 rounded-xl border border-slate-100        */}
      {/* Description: EXACT TEXT SPECIFIED                                      */}
      {/* Action Button: w-max mt-6 bg-blue-600 text-white px-8 py-3             */}
      {/* rounded-full hover:bg-blue-700 transition-colors                       */}
      {/* ======================================================================= */}
      <div className="flex-1 w-full flex flex-col justify-between">
        <div>
          {/* Micro Category Subhead */}
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-1">
            {categoryName}
          </div>

          {/* Product Title */}
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {product.name}
          </h3>

          {/* Specs Box (Grid) */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Spec 1: Dimensi with Ruler Icon */}
            {dimSpec && (
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                  <Ruler className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {dimSpec.label}
                  </span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">
                  {dimSpec.value}
                </div>
              </div>
            )}

            {/* Spec 2: Berat with Weight Icon */}
            {weightSpec && (
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                  <Weight className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {weightSpec.label}
                  </span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">
                  {weightSpec.value}
                </div>
              </div>
            )}
          </div>

          {/* Description Paragraph (EXACT TEXT) */}
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base mb-6">
            {product.description}
          </p>

          {/* Bullet Key Points for Enterprise B2B Buyers */}
          {product.features && product.features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 mb-6">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button Bar */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Primary Action Button (EXACT STYLING SPECIFIED) */}
          <button
            onClick={onOpenContact}
            className="w-max mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 group cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Hubungi Penjualan</span>
          </button>

          {/* Secondary CTA: Quick WhatsApp Consultation */}
          <a
            href={`https://wa.me/${footerData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              `Halo CV. Asia Plastik, saya ingin meminta brosur & spesifikasi teknis untuk produk ${product.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-max mt-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Minta Spesifikasi Teknis</span>
          </a>
        </div>
      </div>
    </article>
  );
}
