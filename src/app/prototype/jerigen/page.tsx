import React, { Suspense } from "react";
import { Metadata } from "next";
import JerrycanPrototypeSwitcher from "@/components/prototype-jerrycan/JerrycanPrototypeSwitcher";

export const metadata: Metadata = {
  title: "Eksplorasi Desain Produk Jerigen HDPE 20L - CV. Asia Plastik",
  description: "6 eksplorasi desain produk Jerigen 20L: Studio Shadow-Box (Dark), CAD Technical Blueprint, B2B Configurator, Bento Lab, Swiss Editorial, dan Notched Ticket.",
};

export default function JerrycanPrototypePage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500 font-mono text-sm">Memuat desain panggung produk...</div>}>
      <JerrycanPrototypeSwitcher />
    </Suspense>
  );
}
