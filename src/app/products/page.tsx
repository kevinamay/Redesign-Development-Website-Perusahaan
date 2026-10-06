import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Katalog Produk - CV. ASIA PLASTIK | Pallet Industri, Keranjang & Kemasan Plastik Presisi",
  description:
    "Katalog resmi produk manufaktur CV. Asia Plastik: Pallet Industri (Pallet P Series), Keranjang Industri, Box Lipat, Blok Lalu Lintas, Botol Pupuk PET, dan wadah industri presisi tinggi berstandar ISO 9001:2015.",
  keywords: [
    "pallet industri",
    "pallet p series",
    "pallet plastik jakarta",
    "pallet plastik tangerang",
    "keranjang industri",
    "box lipat",
    "blok lalu lintas",
    "botol pupuk pet",
    "cv asia plastik",
    "cetak plastik injeksi",
    "blow moulding indonesia",
  ],
  openGraph: {
    title: "Katalog Produk - CV. ASIA PLASTIK",
    description:
      "Temukan spesifikasi teknis lengkap Pallet Industri P Series, Keranjang Industri, Box Lipat, dan wadah plastik manufaktur unggulan CV. Asia Plastik.",
    images: [
      {
        url: "/images/product/Pallet/pallet1.png",
        width: 1200,
        height: 630,
        alt: "Pallet P Series CV. Asia Plastik",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <Navbar />
      <ProductCatalog />
      <Footer />
    </div>
  );
}
