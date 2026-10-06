import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Produk - CV. ASIA PLASTIK | Pallet Industri P Series",
  description:
    "Katalog resmi produk manufaktur CV. Asia Plastik: Pallet Industri (Pallet P Series) berstandar presisi tinggi dan mutu ISO 9001:2015.",
  keywords: [
    "pallet industri",
    "pallet p series",
    "pallet plastik",
    "cv asia plastik",
    "manufaktur plastik",
  ],
  openGraph: {
    title: "Katalog Produk - CV. ASIA PLASTIK",
    description:
      "Spesifikasi teknis lengkap Pallet Industri P Series unggulan CV. Asia Plastik.",
    images: [
      {
        url: "/images/product/Pallet/pallet-warehouse-crop.jpg",
        width: 1200,
        height: 630,
        alt: "Pallet P Series CV. Asia Plastik",
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
