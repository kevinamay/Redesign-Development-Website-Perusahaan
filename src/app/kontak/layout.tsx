import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Kami - CV. ASIA PLASTIK | Hubungi Pabrik & Kantor Penjualan",
  description:
    "Hubungi CV. Asia Plastik untuk konsultasi manufaktur plastik presisi, pemesanan kemasan industri, penawaran harga B2B, dan kunjungan pabrik di Surabaya.",
  keywords: [
    "kontak asia plastik",
    "alamat pabrik asia plastik surabaya",
    "nomor telepon cv asia plastik",
    "hubungi produsen plastik surabaya",
    "pabrik plastik rungkut industri",
  ],
  openGraph: {
    title: "Kontak Kami - CV. ASIA PLASTIK",
    description:
      "Hubungi tim teknis dan sales CV. Asia Plastik untuk solusi kemasan & cetak plastik industri.",
    url: "https://asiaplastik.com/kontak",
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
