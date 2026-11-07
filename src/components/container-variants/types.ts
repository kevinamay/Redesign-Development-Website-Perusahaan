export type ContainerVariantKey = "1" | "2" | "3" | "4" | "5";

export interface ContainerVariantMeta {
  key: ContainerVariantKey;
  num: number;
  name: string;
  shapeConcept: string;
  description: string;
  tag: string;
  highlights: string[];
}

export const CONTAINER_VARIANTS_META: ContainerVariantMeta[] = [
  {
    key: "1",
    num: 1,
    name: "Precision Square Bento Box (1:1 Ratio)",
    shapeConcept: "Kotak Simetris Modular Bento",
    tag: "Kotak Simetris 1:1",
    description:
      "Kontainer kotak simetris (1:1) bergaya Bento Box Jepang modern. Membagi ruang kotak menjadi panggung foto terpusat di atas dan dua kompartemen data terintegrasi di bawah.",
    highlights: [
      "Proporsi kotak presisi (lebar & tinggi seimbang, tanpa kesan balok memanjang)",
      "Kompartemen bento internal memisahkan dimensi produk dan tombol aksi",
      "Sangat cocok untuk grid katalog 2 kolom atau 3 kolom yang seragam",
    ],
  },
  {
    key: "2",
    num: 2,
    name: "Cubic Hero Showcase (Kubus Spotlight)",
    shapeConcept: "Kotak Kubus Panggung Minimalis",
    tag: "Kotak Kubus Fokus",
    description:
      "Menampilkan produk dalam format kubus modern dengan panggung tersembunyi (recessed stage). Spesifikasi diringkas dalam drawer bar bawah yang bersih tanpa membuat kontainer melar memanjang.",
    highlights: [
      "Fokus visual 100% pada bentuk fisik produk di panggung kubus",
      "Bilah spesifikasi horizontal terintegrasi di dasar kotak",
      "Efek hover elevasi 3D yang elegan dan tidak berlebihan",
    ],
  },
  {
    key: "3",
    num: 3,
    name: "Industrial Heavy-Duty Crate (Kotak Peti Logistik)",
    shapeConcept: "Bentuk Kotak Peti Industri Diperkuat",
    tag: "Kotak Peti Industri",
    description:
      "Mengadopsi bahasa desain produk Asia Plastik itu sendiri: kontainer peti logistik kokoh dengan aksen bracket sudut siku bertulang, garis pembatas struktural, dan badge mutu pabrik.",
    highlights: [
      "Aksen bumper sudut siku industri yang memberikan karakter kokoh",
      "Garis border struktural ganda yang menegaskan identitas manufaktur",
      "Layout data teknis terstruktur rapi seperti stensil identitas peti kemas",
    ],
  },
  {
    key: "4",
    num: 4,
    name: "Notched Spec-Ticket (Desain 4 Asli Pilihan Anda)",
    shapeConcept: "Kotak Tiket Berlekuk Cekung & Perforasi",
    tag: "Desain 4 Asli (Favorit Anda)",
    description:
      "INI DESAIN 4 ASLI YANG ANDA SUKAI: Format tiket inspeksi pabrik dengan lekukan kurva cekung (circular notches) di kedua sisi dan garis perforasi pemisah foto & spesifikasi teknis.",
    highlights: [
      "Lekukan kurva cekung (concave notch) kiri-kanan yang memecah bidang persegi panjang kaku",
      "Garis perforasi putus-putus pembatas foto dan lembar data teknis",
      "Format proporsional yang rapi dan terbukti disukai",
    ],
  },
  {
    key: "5",
    num: 5,
    name: "Square-Circle Contrast Lens (Kotak Lensa Melingkar)",
    shapeConcept: "Kontras Kotak Luar & Lingkaran Dalam",
    tag: "Kotak Panggung Melingkar",
    description:
      "Memadukan kontainer luar berbentuk kotak bersih dengan lensa panggung melingkar sempurna (circular spotlight) di dalamnya, sehingga mata pengunjung tidak melihat bidang persegi panjang yang kaku.",
    highlights: [
      "Kontras geometris dinamis antara bingkai kotak luar dan panggung lingkaran dalam",
      "Pill spesifikasi 3 kolom mengalir pas di bawah panggung bulat",
      "Tombol aksi melengkung penuh menyempurnakan harmoni visual",
    ],
  },
];

export interface SampleProductItem {
  id: string;
  title: string;
  dimensi: string;
  berat: string;
  bebanStatis?: string;
  kapasitas?: string;
  deskripsi: string;
  subtitle: string;
  imagePath: string;
  category: string;
  badges: { label: string; variant?: "blue" | "emerald" | "amber" }[];
}

export const SAMPLE_PRODUCTS: SampleProductItem[] = [
  {
    id: "pallet-p-series",
    title: "PALLET P SERIES",
    dimensi: "1200 x 1165 x 140 MM",
    berat: "12 KG",
    bebanStatis: "3.000 KG",
    deskripsi:
      "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Bebas rayap, tidak menyerap air, dan siap untuk sistem racking otomatis.",
    subtitle:
      "Palet Plastik Standar Heavy Duty untuk Pergudangan, Ekspor, & Racking Otomasi",
    imagePath: "/images/product/Pallet/pallet-floating.png",
    category: "Pallet Industri",
    badges: [
      { label: "B2B INDUSTRIAL FLAGSHIP", variant: "blue" },
      { label: "PRODUKSI PABRIK RESMI", variant: "emerald" },
    ],
  },
  {
    id: "keranjang-t25",
    title: "KERANJANG INDUSTRI T-25",
    dimensi: "620 x 430 x 250 MM",
    berat: "1,82 KG",
    kapasitas: "±55 Liter",
    deskripsi:
      "Keranjang plastik berpori kokoh dirancang untuk industri pertanian, hasil panen, dan distribusi ritel pangan. Struktur sisi dengan kisi penguat menjamin aliran udara maksimal, mencegah pembusukan komoditas, dan dapat ditumpuk tinggi tanpa roboh.",
    subtitle: "Wadah Logistik Berpori Kokoh untuk Pertanian & Gudang",
    imagePath: "/images/product/Keranjang/keranjang-t25.png",
    category: "Keranjang Industri",
    badges: [
      { label: "FOOD GRADE", variant: "blue" },
      { label: "VENTILATED", variant: "emerald" },
    ],
  },
  {
    id: "box-lipat",
    title: "BOX LIPAT PLASTIK",
    dimensi: "400 x 600 x 320 MM",
    berat: "2,40 KG",
    kapasitas: "±60 Liter",
    deskripsi:
      "Kontainer lipat inovatif hemat ruang hingga 75% saat penyimpanan kosong. Dilengkapi engsel baja terlindung dan mekanisme pengunci satu sentuhan yang memudahkan proses pick-and-pack rantai pasok modern.",
    subtitle: "Kontainer Lipat Praktis Hemat Ruang Hingga 75%",
    imagePath: "/images/product/Box Lipat/box-lipat.png",
    category: "Box Lipat",
    badges: [
      { label: "HEMAT RUANG 75%", variant: "blue" },
      { label: "HEAVY DUTY", variant: "amber" },
    ],
  },
  {
    id: "jerigen-20l",
    title: "JERIGEN KIMIA HDPE 20L",
    dimensi: "285 x 245 x 380 MM",
    berat: "1,15 KG",
    kapasitas: "20 Liter",
    deskripsi:
      "Kemasan jerigen standar kimia tahan cairan korosif, bahan bakar, dan minyak industri. Menggunakan tutup anti-bocor bersegel induksi untuk keamanan pengiriman cairan berbahaya.",
    subtitle: "Kemasan Standar UN untuk Bahan Kimia & Cairan Industri",
    imagePath: "/images/product/jerigen HDPE/20l.png",
    category: "Jerigen HDPE",
    badges: [
      { label: "CHEMICAL GRADE", variant: "blue" },
      { label: "UN CERTIFIED", variant: "emerald" },
    ],
  },
];

export function resolveContainerVariantKey(
  param: string | null | undefined
): ContainerVariantKey {
  if (param === "1") return "1";
  if (param === "2") return "2";
  if (param === "3") return "3";
  if (param === "4") return "4";
  if (param === "5") return "5";
  return "4"; // Default langsung ke Desain 4 favorit Anda
}
