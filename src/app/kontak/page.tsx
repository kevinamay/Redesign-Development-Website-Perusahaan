import type { Metadata } from "next";
import KontakClientContent from "./KontakClientContent";

export const metadata: Metadata = {
  title: "Hubungi Kami | CV. ASIA PLASTIK - Kantor & Pabrik Surabaya",
  description:
    "Hubungi CV. Asia Plastik untuk penawaran harga grosir, konsultasi cetakan custom, botol PET, jerigen HDPE, dan kunjungan pabrik di SIER Rungkut Surabaya.",
  openGraph: {
    title: "Hubungi Kami | CV. ASIA PLASTIK - Pabrik Kemasan Plastik",
    description:
      "Informasi alamat pabrik, nomor telepon, WhatsApp sales, jam operasional, dan lokasi Google Maps CV. Asia Plastik di Kawasan Industri Rungkut Surabaya.",
    url: "https://asiaplastik.com/kontak",
    siteName: "CV. ASIA PLASTIK",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://asiaplastik.com/kontak",
  },
};

export default function KontakPage() {
  return <KontakClientContent />;
}
