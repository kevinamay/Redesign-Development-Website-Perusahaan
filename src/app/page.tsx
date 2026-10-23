import React from "react";
import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Presisi Tinggi",
  description:
    "Produsen kemasan plastik industri, botol, jerigen HDPE/PET, dan mold making in-house sejak 1985 bersertifikat ISO 9001:2015.",
};

export default function Home() {
  return <HomeClient />;
}

