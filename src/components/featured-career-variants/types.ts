export interface FeaturedProduct {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  subtitle: string;
  imagePath: string;
  badge: {
    label: string;
    variant: "blue" | "emerald" | "amber" | "purple";
  };
  highlight: string;
  specs: {
    dimensions?: string;
    weight?: string;
    capacity?: string;
    material: string;
    loadStatic?: string;
    loadDynamic?: string;
  };
  catalogUrl: string;
}

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "pallet-p-series",
    title: "PALLET P SERIES",
    category: "Pallet Industri",
    categoryId: "pallet-industri",
    subtitle: "Palet Plastik Heavy Duty Standar Pergudangan, Ekspor, & Racking Otomasi",
    imagePath: "/images/product/Pallet/pallet-floating.png",
    badge: {
      label: "B2B FLAGSHIP",
      variant: "blue",
    },
    highlight: "Beban Statis 3.000 KG • Dinamis 1.000 KG",
    specs: {
      dimensions: "1200 x 1165 x 140 MM",
      weight: "12 KG",
      material: "Pure Virgin HDPE",
      loadStatic: "3.000 KG",
      loadDynamic: "1.000 KG",
    },
    catalogUrl: "/products?category=pallet-industri",
  },
  {
    id: "keranjang-t25",
    title: "KERANJANG INDUSTRI T-25",
    category: "Keranjang Industri",
    categoryId: "keranjang-industri",
    subtitle: "Wadah Logistik Berpori Kokoh untuk Pertanian, Industri Pangan, & Gudang",
    imagePath: "/images/product/Keranjang/keranjang-t25.png",
    badge: {
      label: "FOOD GRADE",
      variant: "emerald",
    },
    highlight: "Ventilasi Maksimal & Struktur Tumpuk Presisi",
    specs: {
      dimensions: "620 x 430 x 250 MM",
      weight: "1.82 KG",
      capacity: "±55 Liter",
      material: "Food-Grade PP / HDPE",
    },
    catalogUrl: "/products?category=keranjang-industri",
  },
  {
    id: "box-lipat",
    title: "BOX LIPAT PLASTIK",
    category: "Box Lipat",
    categoryId: "box-lipat",
    subtitle: "Kontainer Lipat Praktis Hemat Ruang Hingga 75% Saat Penyimpanan Kosong",
    imagePath: "/images/product/Box Lipat/box-lipat.png",
    badge: {
      label: "HEMAT RUANG 75%",
      variant: "amber",
    },
    highlight: "Sistem Lipat Instan & Distribusi Modern",
    specs: {
      dimensions: "400 x 600 x 320 MM",
      weight: "2.6 KG",
      capacity: "±60 Liter",
      material: "Heavy Duty Impact PP",
    },
    catalogUrl: "/products?category=box-lipat",
  },
  {
    id: "jerigen-hdpe-20l",
    title: "JERIGEN KIMIA HDPE 20L",
    category: "Jerigen Chemical HDPE",
    categoryId: "jerigen-chemical-hdpe",
    subtitle: "Kemasan Standar Cairan Kimia Keras, Minyak Pelumas, & Bahan Industri",
    imagePath: "/images/product/jerigen HDPE/20l.png",
    badge: {
      label: "CHEMICAL GRADE",
      variant: "purple",
    },
    highlight: "Tutup Segel Anti Bocor & Dinding Tebal Tahan Benturan",
    specs: {
      capacity: "20 Liter",
      weight: "1.1 KG",
      material: "High Density Polyethylene (HDPE)",
    },
    catalogUrl: "/products?category=jerigen-chemical-hdpe",
  },
  {
    id: "botol-pupuk-1l",
    title: "BOTOL PUPUK AGRO 1 LITER",
    category: "Botol Pupuk PET",
    categoryId: "botol-pupuk-pet",
    subtitle: "Botol Kemasan Agrokimia dengan Tutup Takar Presisi dan Tutup Luar Rapat",
    imagePath: "/images/product/Botol Pupuk/pupuk1l.png",
    badge: {
      label: "TUTUP TAKAR",
      variant: "emerald",
    },
    highlight: "Dinding Tahan Tekanan & Tutup Takar Presisi",
    specs: {
      capacity: "1.000 ML",
      material: "Polyethylene Terephthalate (PET)",
    },
    catalogUrl: "/products?category=botol-pupuk-pet",
  },
  {
    id: "traffic-block",
    title: "ROAD BARRIER / TRAFFIC BLOCK",
    category: "Blok Lalu Lintas",
    categoryId: "blok-lalu-lintas",
    subtitle: "Pembatas Jalan Keselamatan Industri & Proyek dengan Isian Air / Pasir",
    imagePath: "/images/product/Lalu Lintas/trafficblock1.png",
    badge: {
      label: "UV STABILIZED",
      variant: "amber",
    },
    highlight: "Material Tahan Cuaca Ekstrem & Stabilitas Maksimal",
    specs: {
      capacity: "Isi Air/Pasir 150-200 L",
      material: "Impact Resistant Polyethylene",
    },
    catalogUrl: "/products?category=blok-lalu-lintas",
  },
];

export type CareerVariantKey = "1" | "2" | "3" | "4" | "5";

export interface CareerVariantMeta {
  key: CareerVariantKey;
  number: number;
  badgeText: string;
  name: string;
  shortDesc: string;
  tag: string;
}

export const CAREER_VARIANTS_META: CareerVariantMeta[] = [
  {
    key: "1",
    number: 1,
    badgeText: "Desain 1",
    name: "Desain 1: Clean Industrial 4-Grid + Compact Dark Slate Card",
    shortDesc: "Grid 4 produk terlaris yang bersih & elegan, dipadukan mini banner loker horizontal ramping (~130px)",
    tag: "Clean Grid",
  },
  {
    key: "2",
    number: 2,
    badgeText: "Desain 2",
    name: "Desain 2: Dynamic Carousel Showcase + Horizontal Ribbon Strip",
    shortDesc: "Carousel geser 6 produk favorit dengan navigasi panah, berpadu pita lowongan ramping aksen biru (~84px)",
    tag: "Carousel Deck",
  },
  {
    key: "3",
    number: 3,
    badgeText: "Desain 3",
    name: "Desain 3: Bento Grid Hierarchy + Two-Tone Split Micro-Card",
    shortDesc: "Bento grid asimetris fokus Pallet Flagship + 3 produk samping, loker format kartu mini two-tone",
    tag: "Bento Master",
  },
  {
    key: "4",
    number: 4,
    badgeText: "Desain 4",
    name: "Desain 4: Interactive Category Tabs + Floating Glassmorphic Bar",
    shortDesc: "Filter tab kategori instan (Logistik, Wadah Makanan, Kemasan Kimia) + banner loker kaca transparan",
    tag: "Category Tabs",
  },
  {
    key: "5",
    number: 5,
    badgeText: "Desain 5",
    name: "Desain 5: Enterprise Tech Spec Matrix + Integrated Career Callout",
    shortDesc: "Matriks data teknis lengkap B2B (beban, material, dimensi) + callout loker info 4 divisi aktif",
    tag: "Spec Matrix",
  },
];

export function resolveCareerVariantKey(
  input: string | null | undefined
): CareerVariantKey {
  if (!input) return "1";
  const normalized = input.trim().toLowerCase();
  switch (normalized) {
    case "2":
    case "opsi-2":
    case "carousel":
    case "ribbon":
      return "2";
    case "3":
    case "opsi-3":
    case "bento":
      return "3";
    case "4":
    case "opsi-4":
    case "tabs":
    case "glass":
      return "4";
    case "5":
    case "opsi-5":
    case "spec":
    case "matrix":
      return "5";
    case "1":
    case "opsi-1":
    case "grid":
    default:
      return "1";
  }
}

