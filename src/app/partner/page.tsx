import type { Metadata } from "next";
import PartnerClientContent, { partnersList } from "./PartnerClientContent";

export { partnersList };

export const metadata: Metadata = {
  title: "Mitra Korporat & Kemitraan B2B | CV. ASIA PLASTIK",
  description:
    "Daftar mitra terpercaya, klien BUMN, dan perusahaan multinasional yang mempercayakan kebutuhan manufaktur kemasan plastik kepada CV. Asia Plastik.",
  openGraph: {
    title: "Mitra Korporat & Kemitraan B2B | CV. ASIA PLASTIK",
    description:
      "Mitra terpercaya CV. Asia Plastik: Komitmen mutu ISO 9001:2015, kapasitas produksi skala besar, dan cetakan kustom presisi.",
    url: "https://asiaplastik.com/partner",
    siteName: "CV. ASIA PLASTIK",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://asiaplastik.com/partner",
  },
};

export default function PartnerPage() {
  return <PartnerClientContent />;
}
