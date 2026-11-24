import { JerrycanProductData } from "./types";

export const JERRYCAN_PRODUCT: JerrycanProductData = {
  id: "jerigen-hdpe-20l",
  name: "JERIGEN 20 LITER",
  category: "Blow Moulding Container",
  code: "AP-JRG-20HD",
  tagline: "Wadah Kimia & Pangan Standar Ekspor UN Packaging dengan Struktur Interlocking Anti-Tumpah",
  imagePath: "/images/products/jerigen-hdpe-sample.jpg",
  capacity: "20 Liter (Kapasitas Maksimal Isi: 21.5 Liter)",
  capacityAlt: "Tersedia varian 25 Liter (Custom Mold)",
  weight: "870 GR",
  wallThickness: "2.2 mm Rata (Optimal Corner Thickness)",
  dimensions: {
    length: "288 MM",
    width: "225 MM",
    height: "398,5 MM",
    neckDiameter: "Ø 55 mm (DIN 61 Standard)",
  },
  material: "100% Virgin High-Density Polyethylene (HDPE)",
  resinGrade: "Blow Moulding High Molecular Weight (HMW-HDPE)",
  capType: "Tutup Segel Segi Enam (Tamper-Evident Ratchet Cap) + EPE Foam Wad Insert & Opsi Ventilasi Gas",
  colorOptions: [
    {
      name: "Putih Natural Translucent",
      hex: "#F1F5F9",
      border: "border-slate-300",
      usage: "Standard Pangan, Minyak Goreng & Umum (Level cairan tampak dari luar)",
    },
    {
      name: "Biru Industri Kimia (UN Blue)",
      hex: "#1E40AF",
      border: "border-blue-700",
      usage: "Kimia Berat, Pelarut, Bahan Kimia Industri B3",
    },
    {
      name: "Kuning Safety Hazard",
      hex: "#F59E0B",
      border: "border-amber-500",
      usage: "Pestisida, Herbisida, & Bahan Kimia Berbahaya Khusus",
    },
    {
      name: "Abu-abu Solid Neutral",
      hex: "#64748B",
      border: "border-slate-500",
      usage: "Oli Mesin, Pelumas Industri, Minyak Rem & Cairan Otomotif",
    },
    {
      name: "Hitam UV-Block Antistatic",
      hex: "#1E293B",
      border: "border-slate-800",
      usage: "Zat peka cahaya & larutan yang memerlukan perlindungan UV tinggi",
    },
  ],
  certifications: [
    "UN Packaging Certificate (Group II & III Liquids)",
    "ISO 9001:2015 Certified Manufacturing",
    "Food Grade FDA & BPOM Migration Approved (Bebas BPA)",
    "SNI Standar Industri Wadah Plastik Indonesia",
  ],
  features: [
    {
      title: "Interlocking Stackable Base",
      desc: "Dasar jerigen dirancang memiliki lekukan pengunci yang pas menempel di atas tutup jerigen bawahnya, aman ditumpuk hingga 4 susun tanpa bergeser di atas pallet.",
      icon: "Layers",
    },
    {
      title: "Gagang Cetak Terintegrasi (Heavy Load Handle)",
      desc: "Gagang hollow moulding kokoh yang menyatu tanpa sambungan las panas, teruji menahan daya angkat beban statis lebih dari 65 kg tanpa deformasi.",
      icon: "ShieldCheck",
    },
    {
      title: "Tutup Segel Anti-Bocor & Anti-Pemalsuan",
      desc: "Mekanisme ring segel bergerigi (tamper-evident) yang patah saat pertama kali dibuka, dilengkapi liner EPE tahan asam pekat dan pelarut organik.",
      icon: "Lock",
    },
    {
      title: "Ketahanan Benturan & Uji Jatuh 1.8 Meter",
      desc: "Struktur sudut bulat dipertebal secara presisi menggunakan mesin blow moulding otomatis untuk mencegah retak pecah saat jerigen terbanting atau terjatuh dari bak truk.",
      icon: "Zap",
    },
  ],
  testMetrics: [
    {
      label: "Uji Jatuh Bebas (Drop Test)",
      value: "1.8 Meter",
      unit: "Tinggi",
      status: "PASSED (Isi Penuh 20L)",
      standard: "UN 6.1.5.3 Specification",
    },
    {
      label: "Uji Tekanan Hidrolik",
      value: "250 kPa",
      unit: "Tekanan",
      status: "PASSED (Tanpa Bocor)",
      standard: "ASTM D4991 / UN Leakproof",
    },
    {
      label: "Beban Tumpuk (Top Load Stacking)",
      value: "350 kg",
      unit: "Beban Puncak",
      status: "PASSED (28 Hari Uji Statis)",
      standard: "ISO 2234 Compressive Load",
    },
    {
      label: "Ketahanan Kimiawi (ESCR Test)",
      value: "> 1.000 Jam",
      unit: "Daya Tahan",
      status: "PASSED (Zero Cracking)",
      standard: "ASTM D1693 Stress Crack",
    },
  ],
  priceTiers: [
    {
      minQty: 500,
      maxQty: 1999,
      pricePerUnit: 28500,
      leadTime: "3 - 5 Hari Kerja",
      discountBadge: "Harga Standar B2B",
    },
    {
      minQty: 2000,
      maxQty: 4999,
      pricePerUnit: 26000,
      leadTime: "5 - 7 Hari Kerja",
      discountBadge: "Hemat 8.7% (Free Emboss Logo)",
    },
    {
      minQty: 5000,
      maxQty: 9999,
      pricePerUnit: 24200,
      leadTime: "7 - 10 Hari Kerja",
      discountBadge: "Hemat 15.1% (Best Seller Distributor)",
    },
    {
      minQty: 10000,
      pricePerUnit: 22000,
      leadTime: "10 - 14 Hari Kerja",
      discountBadge: "Harga Kontrak Pabrik (OEM Volume)",
    },
  ],
  logistics: {
    layerOnPallet: 16,
    totalPerPallet: 64, // 4 layer x 16 pcs on 1200x1000 pallet
    stackingLimit: "Maksimal 4 Tingkat Pada Pallet",
    container20ft: 1800,
    container40ft: 3900,
  },
  applications: [
    {
      industry: "Bahan Kimia & Agrokimia",
      examples: "Pupuk cair, pestisida, asam sulfat encer, cairan desinfektan, cairan pembersih industri",
      icon: "FlaskConical",
    },
    {
      industry: "Otomotif & Pelumas",
      examples: "Oli mesin curah, radiator coolant, minyak transmisi, degreaser mesin",
      icon: "Car",
    },
    {
      industry: "Pangan & Minuman (Food Grade)",
      examples: "Minyak goreng kelapa sawit, sirup industri, cuka fermentasi, konsentrat sari buah",
      icon: "Utensils",
    },
    {
      industry: "Farmasi & Sanitasi",
      examples: "Alkohol 70-96%, hand sanitizer curah, cairan klorinasi rumah sakit",
      icon: "HeartPulse",
    },
  ],
};
