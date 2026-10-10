import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - CV. ASIA PLASTIK | Spesialis Injection & Blow Moulding Sejak 1985",
  description:
    "Profil lengkap CV. Asia Plastik: sejarah manufaktur plastik sejak 1985, sertifikasi ISO 9001:2015, visi misi, mesin blow moulding 500 liter, dan fasilitas produksi kustom.",
  keywords: [
    "tentang asia plastik",
    "sejarah cv asia plastik",
    "pabrik plastik surabaya",
    "produsen injection blow moulding",
    "sertifikat iso 9001:2015 asia plastik",
  ],
  openGraph: {
    title: "Tentang Kami - CV. ASIA PLASTIK",
    description:
      "Profil lengkap CV. Asia Plastik: sejarah manufaktur plastik sejak 1985, sertifikasi ISO 9001:2015, dan fasilitas mesin blow moulding.",
    url: "https://asiaplastik.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
