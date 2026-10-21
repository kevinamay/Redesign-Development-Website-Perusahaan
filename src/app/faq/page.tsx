import type { Metadata } from "next";
import FAQClientContent from "./FAQClientContent";

export const metadata: Metadata = {
  title: "Pusat Bantuan & FAQ | CV. ASIA PLASTIK - Pabrik Kemasan Plastik",
  description:
    "Pertanyaan yang sering diajukan mengenai pemesanan grosir, custom cetakan botol/kemasan, sertifikasi Halal & Food Grade, serta minimum order (MOQ) di CV. Asia Plastik.",
  openGraph: {
    title: "Pusat Bantuan & FAQ | CV. ASIA PLASTIK",
    description:
      "Informasi lengkap seputar pemesanan grosir, MOQ, kustomisasi botol/cetakan, dan sertifikasi mutu kemasan plastik CV. Asia Plastik.",
    url: "https://asiaplastik.com/faq",
    siteName: "CV. ASIA PLASTIK",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://asiaplastik.com/faq",
  },
};

export default function FAQPage() {
  return <FAQClientContent />;
}
