import type { Metadata } from "next";
import AboutClientContent from "@/components/AboutClientContent";

export const metadata: Metadata = {
  title: "Tentang Kami | CV. ASIA PLASTIK - Pabrik Plastik Sejak 1985",
  description:
    "Profil lengkap CV. Asia Plastik: Pabrik manufaktur kemasan plastik presisi tinggi dengan teknologi injection moulding, blow moulding hingga 500 liter, dan sertifikasi mutu ISO 9001:2015.",
  openGraph: {
    title: "Tentang Kami | CV. ASIA PLASTIK - Pabrik Plastik Sejak 1985",
    description:
      "Profil lengkap CV. Asia Plastik: Produsen kemasan plastik industri, botol, jerigen HDPE/PET, dan mold making in-house sejak 1985 bersertifikat ISO 9001:2015.",
    url: "https://asiaplastik.com/about",
    siteName: "CV. ASIA PLASTIK",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://asiaplastik.com/about",
  },
};

export default function AboutPage() {
  return <AboutClientContent />;
}
