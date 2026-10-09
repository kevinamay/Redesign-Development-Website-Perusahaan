export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface HeroData {
  badge: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  image: string;
  stats: StatItem[];
}

export interface AboutSnippet {
  tagline: string;
  heading: string;
  description: string[];
  image: string;
  keyPillars: {
    title: string;
    description: string;
    icon: "ShieldCheck" | "Cpu" | "Recycle" | "Clock";
  }[];
}

export interface ProductHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  href: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface FooterData {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    logoImage: string;
  };
  contact: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    whatsapp: string;
    email: string;
    workingHours: string;
  };
  sections: FooterSection[];
  certifications: string[];
  socialLinks: {
    platform: string;
    href: string;
  }[];
  copyright: string;
}

// -------------------------------------------------------------
// Home Page Content Database Mock
// -------------------------------------------------------------

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Produk & Layanan", href: "/products" },
  { label: "Mesin & Fasilitas", href: "/about#mesin-produksi" },
  { label: "Kontak", href: "/kontak" },
  { label: "Minta Penawaran", href: "/kontak", isCta: true },
];

export const heroData: HeroData = {
  badge: "Pusat Manufaktur & Cetak Plastik Presisi Tinggi",
  title: "Solusi Terpercaya untuk Kebutuhan",
  highlightedTitle: "Kemasan & Komponen Plastik Industri",
  subtitle:
    "CV. Asia Plastik menghadirkan inovasi injeksi dan blow molding berkualitas unggul. Didukung oleh teknologi mesin termutakhir, material ramah standar industri, dan tim teknis berpengalaman untuk mendukung pertumbuhan bisnis Anda.",
  ctaPrimary: {
    label: "Jelajahi Produk Kami",
    href: "#products",
  },
  ctaSecondary: {
    label: "Hubungi Sales Representatif",
    href: "/kontak",
  },
  image: "/images/BG_CV%20ASIA.webp",
  stats: [
    { value: "20+", label: "Tahun Pengalaman", sublabel: "Sejak tahun 2004" },
    { value: "500+", label: "Ton Kapasitas / Bulan", sublabel: "Produksi stabil & tepat waktu" },
    { value: "150+", label: "Klien Korporat", sublabel: "Industri F&B, Kosmetik, & Kimia" },
    { value: "99.8%", label: "Tingkat Presisi Mutu", sublabel: "Quality Control ketat" },
  ],
};

export const aboutSnippet: AboutSnippet = {
  tagline: "Profil Singkat CV. Asia Plastik",
  heading: "Menghubungkan Efisiensi Produksi dengan Kualitas Tanpa Kompromi",
  description: [
    "Didirikan dengan dedikasi tinggi terhadap industri manufaktur plastik di Indonesia, CV. Asia Plastik terus berkembang menjadi mitra strategis berbagai perusahaan manufaktur berskala nasional.",
    "Kami memadukan teknologi mesin mutakhir (injection molding, blow molding, dan tooling mold presisi) dengan manajemen mutu terpadu untuk memastikan setiap unit produk memenuhi standar kekuatan, estetika, dan ketahanan yang optimal.",
  ],
  image: "/images/about.jpg",
  keyPillars: [
    {
      title: "Presisi & Quality Control",
      description: "Setiap batch melalui pengujian toleransi dimensi, ketahanan tekanan, dan visual inspection.",
      icon: "ShieldCheck",
    },
    {
      title: "Mesin Otomasi Modern",
      description: "Penggunaan mesin hidrolik & servo ramah energi untuk kecepatan siklus produksi yang konsisten.",
      icon: "Cpu",
    },
    {
      title: "Material Ramah & Food Grade",
      description: "Tersedia pilihan resin HDPE, PP, PET, dan formulasi ramah lingkungan bersertifikasi aman.",
      icon: "Recycle",
    },
    {
      title: "Pengiriman Tepat Waktu",
      description: "Sistem logistik dan perencanaan kapasitas yang disiplin demi menjaga kelancaran rantai pasok klien.",
      icon: "Clock",
    },
  ],
};

export const productHighlights: ProductHighlight[] = [
  {
    id: "injection-molding",
    title: "Plastic Injection Molding",
    category: "Komponen Industri & Tutup Kemasan",
    description:
      "Pembuatan komponen teknis plastik presisi tinggi, tutup botol (bottle caps), seal, dan peralatan rumah tangga dengan toleransi mikro yang akurat.",
    image: "/images/product-injection.jpg",
    features: ["Bahan PP, PE, ABS, PS", "Toleransi dimensi tinggi", "Kustomisasi warna & tekstur"],
    href: "/kontak",
  },
  {
    id: "blow-molding",
    title: "Extrusion & Injection Blow Molding",
    category: "Kemasan Botol & Jerigen",
    description:
      "Produksi botol plastik kimia, wadah pelumas, botol sabun, dan jerigen industri berbagai volume dengan ketebalan dinding yang merata dan anti bocor.",
    image: "/images/product-blow.jpg",
    features: ["Kapasitas 100ml hingga 20 Liter", "Material HDPE & PET tahan bocor", "Desain ergonomis & kokoh"],
    href: "/kontak",
  },
  {
    id: "custom-mold",
    title: "Custom Mold & Tooling Fabrication",
    category: "Desain Cetakan Kustom",
    description:
      "Layanan rancang bangun cetakan baja (mold maker) sesuai kebutuhan spesifik produk Anda, mulai dari sketsa 3D CAD/CAM hingga prototipe fungsional.",
    image: "/images/product-mold.jpg",
    features: ["Baja mold berkualitas tahan abrasi", "Konsultasi desain CAD 3D gratis", "Jaminan masa pakai siklus tinggi"],
    href: "/kontak",
  },
  {
    id: "industrial-packaging",
    title: "Industrial & Agricultural Packaging",
    category: "Wadah Logistik & Agrikultur",
    description:
      "Solusi wadah plastik tebal, krat buah/sayur, palet plastik, serta wadah penyimpanan berat untuk kebutuhan pergudangan dan ekspor.",
    image: "/images/product-industrial.jpg",
    features: ["Daya tumpuk beban berat", "Tahan cuaca & anti korosi", "Standardisasi ukuran pergudangan"],
    href: "/kontak",
  },
];

export const footerData: FooterData = {
  company: {
    name: "Asia Plastik",
    legalName: "CV. ASIA PLASTIK",
    tagline: "Precision Plastic Manufacturing & Industrial Packaging",
    description:
      "Produsen manufaktur produk plastik terkemuka yang melayani sektor industri, agrikultur, farmasi, serta kebutuhan kemasan konsumen dengan standar keunggulan teruji.",
    logoImage: "/images/logo.png",
  },
  contact: {
    address: "Jalan Rungkut Industri III/27A",
    city: "Surabaya",
    postalCode: "60293",
    country: "Indonesia",
    phone: "+6231 8433078",
    whatsapp: "+62 811-322-9988",
    email: "marketing@asiaplastik.com",
    workingHours: "Senin - Sabtu: 08.00 - 16.30 WIB",
  },
  sections: [
    {
      title: "Navigasi",
      links: [
        { label: "BERANDA", href: "/" },
        { label: "TENTANG KAMI", href: "/about" },
        { label: "PRODUK", href: "/products" },
        { label: "ARTIKEL", href: "/about#artikel" },
        { label: "FAQ", href: "/faq" },
        { label: "PARTNER", href: "/about#partner" },
        { label: "PRODUK CUSTOM", href: "/products#custom" },
        { label: "KONTAK", href: "/kontak" },
      ],
    },
    {
      title: "Solusi Manufaktur",
      links: [
        { label: "Injection Molding", href: "#products" },
        { label: "Blow Molding & Botol", href: "#products" },
        { label: "Pembuatan Cetakan (Mold)", href: "#products" },
        { label: "Kemasan Industri HDPE", href: "#products" },
        { label: "Komponen Plastik Kustom", href: "#products" },
      ],
    },
    {
      title: "Layanan Klien",
      links: [
        { label: "Konsultasi Teknis & CAD", href: "/kontak" },
        { label: "Permintaan Sampel Produk", href: "/kontak" },
        { label: "Kalkulator Estimasi Biaya", href: "/kontak" },
        { label: "Syarat & Ketentuan Pemesanan", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
      ],
    },
  ],
  certifications: [
    "ISO 9001:2015 Quality Management",
    "Food Grade Safety Compliance",
    "Eco-Friendly Recyclable Resins",
  ],
  socialLinks: [
    { platform: "LinkedIn", href: "https://linkedin.com" },
    { platform: "Instagram", href: "https://instagram.com" },
    { platform: "WhatsApp", href: "https://wa.me/6281234567890" },
  ],
  copyright: `© ${new Date().getFullYear()} CV. ASIA PLASTIK. Seluruh Hak Cipta Dilindungi Undang-Undang.`,
};
