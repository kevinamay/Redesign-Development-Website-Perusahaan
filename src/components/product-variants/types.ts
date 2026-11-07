import React from "react";

export interface ProductBadge {
  label: string;
  icon?: React.ReactNode;
  variant?: "blue" | "emerald";
}

export interface ProductVariantProps {
  title: string;
  dimensi: string;
  berat: string;
  deskripsi: string;
  imagePath: string;
  subtitle?: string;
  badges?: ProductBadge[];
  bebanStatis?: string;
  kapasitas?: string;
  category?: string;
  priority?: boolean;
}

export type ProductCardVariantKey =
  | "original"
  | "tabbed-deck"
  | "clean-corporate"
  | "value-focus"
  | "soft-minimal"
  | "lightbox-modal"
  | "modal-spec-table";

export interface VariantMeta {
  key: ProductCardVariantKey;
  number: number;
  badgeText: string;
  name: string;
  shortDesc: string;
  tag: string;
}

export const PRODUCT_VARIANTS_META: VariantMeta[] = [
  {
    key: "original",
    number: 0,
    badgeText: "ORI",
    name: "Desain Asli (Original)",
    shortDesc: "Tata letak kartu standar split 2 kolom yang sudah terpasang",
    tag: "Dipertahankan",
  },
  {
    key: "tabbed-deck",
    number: 3,
    badgeText: "D-3",
    name: "Desain 3: Enterprise Tabbed Deck",
    shortDesc: "Favorit Anda: 3 tab bersih (Ringkasan, Spek Lengkap, & Aplikasi)",
    tag: "Dipertahankan",
  },
  {
    key: "clean-corporate",
    number: 1,
    badgeText: "Opsi 1",
    name: "Opsi 1: Clean Corporate Classic",
    shortDesc: "Sederhana & profesional standar B2B, grid bersih tanpa ornamen ramai",
    tag: "Dipertahankan",
  },
  {
    key: "value-focus",
    number: 4,
    badgeText: "Opsi 4",
    name: "Opsi 4: Feature Bullets & Value Focus",
    shortDesc: "Poin keunggulan logistik langsung dengan centang rapi untuk pembeli",
    tag: "Dipertahankan",
  },
  {
    key: "soft-minimal",
    number: 5,
    badgeText: "Opsi 5",
    name: "Opsi 5: Soft Minimalist Card",
    shortDesc: "Estetika minimalis modern, spasi lega dan tata letak tenang tanpa distraksi",
    tag: "Dipertahankan",
  },
  {
    key: "lightbox-modal",
    number: 9,
    badgeText: "Opsi 9",
    name: "Opsi 9: Focus Lightbox Modal (Desain Fix)",
    shortDesc: "Desain Fix: Kartu ringkas 1 foto jernih dengan modal pop-up detail sesuai foto referensi Anda",
    tag: "Desain Fix",
  },
  {
    key: "modal-spec-table",
    number: 92,
    badgeText: "9-B",
    name: "Opsi 9-B: Technical Spec-Sheet Modal",
    shortDesc: "Format lembar spesifikasi resmi pabrik 2x2: data teknis rapi terstruktur",
    tag: "9-B",
  },
];

export function resolveVariantKey(
  input: string | null | undefined
): ProductCardVariantKey {
  if (!input) return "lightbox-modal"; // Default ke Opsi 9 Biasa

  const normalized = input.trim().toLowerCase();

  switch (normalized) {
    case "0":
    case "ori":
    case "original":
    case "default":
      return "original";

    case "3":
    case "tabbed":
    case "tabbed-deck":
    case "tabs":
    case "d3":
    case "d-3":
      return "tabbed-deck";

    case "1":
    case "clean-corporate":
    case "corporate":
    case "classic":
      return "clean-corporate";

    case "4":
    case "value-focus":
    case "bullets":
    case "value":
      return "value-focus";

    case "5":
    case "soft-minimal":
    case "soft":
    case "minimal":
      return "soft-minimal";

    case "9b":
    case "9-b":
    case "modal-spec-table":
    case "table":
    case "spec":
      return "modal-spec-table";

    case "9":
    case "opsi-9":
    case "opsi9":
    case "lightbox":
    case "lightbox-modal":
    case "modal":
    case "biasa":
    default:
      return "lightbox-modal";
  }
}
