"use client";

import { useSyncExternalStore, useCallback } from "react";

export type Language = "id" | "en" | "zh";

export interface TranslationSchema {
  common: {
    languageName: string;
    langCode: string;
    lightMode: string;
    darkMode: string;
    themeTooltipDark: string;
    themeTooltipLight: string;
  };
  topBar: {
    tagline: string;
    isoCert: string;
    workingHours: string;
    emailLabel: string;
    phoneLabel: string;
    hotline: string;
  };
  navbar: {
    home: string;
    about: string;
    products: string;
    facilities: string;
    contact: string;
    searchPlaceholder: string;
    searchClose: string;
    quoteCta: string;
    menuBtn: string;
    closeMenu: string;
    repContact: string;
    whatsappSales: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    features: {
      title: string;
      subtitle: string;
    }[];
    metrics: {
      value: string;
      label: string;
      sublabel: string;
    }[];
    facilityLink: string;
  };
  newProduct: {
    badge: string;
    title: string;
    description: string;
    specs: {
      dimensions: string;
      weight: string;
      certification: string;
      capacity: string;
      dimensionsVal: string;
      weightVal: string;
      certificationVal: string;
      capacityVal: string;
    };
    highlights: string;
    carouselAlt: string;
    ctaButton: string;
  };
  footer: {
    legalName: string;
    tagline: string;
    description: string;
    certificationsTitle: string;
    certifications: string[];
    quickNavTitle: string;
    quickNavLinks: { label: string; href: string }[];
    solutionsTitle: string;
    solutionsLinks: { label: string; href: string }[];
    contactTitle: string;
    address: string;
    workingHours: string;
    privacyPolicy: string;
    termsOfService: string;
    backToTop: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  id: {
    common: {
      languageName: "Bahasa (ID)",
      langCode: "ID",
      lightMode: "Terang",
      darkMode: "Gelap",
      themeTooltipDark: "Mode Gelap aktif (Geser ke KANAN untuk Mode Terang)",
      themeTooltipLight: "Mode Terang aktif (Geser ke KIRI untuk Mode Gelap)",
    },
    topBar: {
      tagline: "Kawasan Industri & Pergudangan • Spesialis Injection & Blow Moulding Sejak 1990",
      isoCert: "Sertifikasi ISO 9001:2015 & Standar Mutu Manufaktur",
      workingHours: "Senin - Sabtu: 08.00 - 17.00 WIB",
      emailLabel: "Email",
      phoneLabel: "Telp",
      hotline: "Hotline",
    },
    navbar: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk & Layanan",
      facilities: "Standar Mutu & Fasilitas",
      contact: "Hubungi Penjualan",
      searchPlaceholder: "Cari kebutuhan cetak plastik, botol HDPE, mold tooling, jerigen...",
      searchClose: "Tutup",
      quoteCta: "Minta Penawaran",
      menuBtn: "MENU",
      closeMenu: "Tutup Menu",
      repContact: "Kontak Representatif",
      whatsappSales: "WhatsApp Sales",
    },
    hero: {
      badge: "MANUFACTURING & PACKAGING SOLUTIONS",
      titleStart: "PERUSAHAAN MANUFAKTUR PENGEMASAN",
      titleHighlight: "PLASTIK",
      subtitle: "KAMI ADALAH AHLI DALAM INJECTION DAN BLOW MOLDING",
      primaryCta: "Lihat Produk Kami →",
      secondaryCta: "Hubungi Penjualan",
      features: [
        { title: "Presisi Cetak Tinggi", subtitle: "Injection & Blow Mold" },
        { title: "Quality Control Teruji", subtitle: "Inspeksi Standar Industri" },
        { title: "Resin Mutu Prima", subtitle: "Food Grade & Industrial" },
        { title: "Kapasitas Produksi Massal", subtitle: "Kontrak Pasokan Besar" },
      ],
      metrics: [
        { value: "30+", label: "Tahun", sublabel: "Pengalaman Industri" },
        { value: "100+", label: "Mitra Klien", sublabel: "Perusahaan Nasional" },
        { value: "99.8%", label: "Akurasi Cetak", sublabel: "Standar Presisi Tinggi" },
      ],
      facilityLink: "Pelajari Profil Fasilitas Pabrik",
    },
    newProduct: {
      badge: "NEW PRODUCT",
      title: "Solid Foldable Industrial Basket",
      description:
        "Wadah krat industri lipat multifungsi dengan struktur kokoh dan material food-grade presisi. Dirancang untuk efisiensi ruang penyimpanan hingga 75% saat dilipat, ideal untuk distribusi logistik pergudangan modern dan rantai pasok industri.",
      specs: {
        dimensions: "Dimensi",
        weight: "Berat",
        certification: "Sertifikasi",
        capacity: "Kapasitas Beban",
        dimensionsVal: "600 x 400 x 320 mm",
        weightVal: "2.6 Kg",
        certificationVal: "ISO 9001:2015",
        capacityVal: "40 Kg (Dinamis)",
      },
      highlights: "Ready Stock & Kontrak B2B",
      carouselAlt: "Solid Foldable Industrial Basket - Tampilan",
      ctaButton: "Lihat Produk Selengkapnya",
    },
    footer: {
      legalName: "CV. ASIA PLASTIK",
      tagline: "Precision Plastic Manufacturing & Industrial Packaging",
      description:
        "Produsen manufaktur produk plastik terkemuka yang melayani sektor industri, agrikultur, farmasi, serta kebutuhan kemasan konsumen dengan standar keunggulan teruji.",
      certificationsTitle: "Standar & Akreditasi Mutu:",
      certifications: [
        "ISO 9001:2015 Quality Management",
        "Food Grade Safety Compliance",
        "Eco-Friendly Recyclable Resins",
      ],
      quickNavTitle: "Navigasi",
      quickNavLinks: [
        { label: "BERANDA", href: "/" },
        { label: "TENTANG KAMI", href: "/about" },
        { label: "PRODUK", href: "/products" },
        { label: "ARTIKEL", href: "/about#artikel" },
        { label: "FAQ", href: "/faq" },
        { label: "PARTNER", href: "/about#partner" },
        { label: "PRODUK CUSTOM", href: "/products#custom" },
        { label: "KONTAK", href: "/#contact" },
      ],
      solutionsTitle: "Solusi Manufaktur",
      solutionsLinks: [
        { label: "Injection Molding", href: "#products" },
        { label: "Blow Molding & Botol", href: "#products" },
        { label: "Pembuatan Cetakan (Mold)", href: "#products" },
        { label: "Kemasan Industri HDPE", href: "#products" },
        { label: "Komponen Plastik Kustom", href: "#products" },
      ],
      contactTitle: "Hubungi Kantor & Pabrik",
      address: "Kawasan Industri & Pergudangan, Jl. Raya Industri No. 88, Tangerang, Banten, 15138, Indonesia",
      workingHours: "Senin - Sabtu: 08.00 - 17.00 WIB",
      privacyPolicy: "Kebijakan Privasi",
      termsOfService: "Syarat & Ketentuan",
      backToTop: "Kembali ke Atas",
      copyright: `© ${new Date().getFullYear()} CV. ASIA PLASTIK. Seluruh Hak Cipta Dilindungi Undang-Undang.`,
    },
  },
  en: {
    common: {
      languageName: "English (EN)",
      langCode: "EN",
      lightMode: "Light",
      darkMode: "Dark",
      themeTooltipDark: "Dark Mode active (Slide RIGHT for Light Mode)",
      themeTooltipLight: "Light Mode active (Slide LEFT for Dark Mode)",
    },
    topBar: {
      tagline: "Industrial Estate & Warehousing • Injection & Blow Molding Specialist Since 1990",
      isoCert: "ISO 9001:2015 Certified & Industrial Manufacturing Standards",
      workingHours: "Monday - Saturday: 08:00 - 17:00 WIB",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hotline: "Hotline",
    },
    navbar: {
      home: "Home",
      about: "About Us",
      products: "Products & Services",
      facilities: "Quality & Facilities",
      contact: "Contact Sales",
      searchPlaceholder: "Search plastic molding, HDPE bottles, mold tooling, crates...",
      searchClose: "Close",
      quoteCta: "Request a Quote",
      menuBtn: "MENU",
      closeMenu: "Close Menu",
      repContact: "Representative Contact",
      whatsappSales: "WhatsApp Sales",
    },
    hero: {
      badge: "MANUFACTURING & PACKAGING SOLUTIONS",
      titleStart: "PLASTIC PACKAGING MANUFACTURING",
      titleHighlight: "COMPANY",
      subtitle: "WE ARE SPECIALISTS IN INJECTION AND BLOW MOLDING",
      primaryCta: "Explore Our Products →",
      secondaryCta: "Contact Sales Team",
      features: [
        { title: "High Molding Precision", subtitle: "Injection & Blow Mold" },
        { title: "Proven Quality Control", subtitle: "Industrial Standard Testing" },
        { title: "Premium Resin Quality", subtitle: "Food Grade & Industrial" },
        { title: "Mass Production Capacity", subtitle: "Large Supply Contracts" },
      ],
      metrics: [
        { value: "30+", label: "Years", sublabel: "Industry Experience" },
        { value: "100+", label: "Client Partners", sublabel: "National Enterprises" },
        { value: "99.8%", label: "Molding Accuracy", sublabel: "High Precision Standards" },
      ],
      facilityLink: "Explore Factory & Facility Profile",
    },
    newProduct: {
      badge: "NEW PRODUCT",
      title: "Solid Foldable Industrial Basket",
      description:
        "Multifunctional heavy-duty foldable industrial crate engineered with robust interlocking structure and precision food-grade polymer. Designed to save up to 75% storage space when folded, ideal for modern warehouse logistics, distribution, and supply chains.",
      specs: {
        dimensions: "Dimensions",
        weight: "Weight",
        certification: "Certification",
        capacity: "Load Capacity",
        dimensionsVal: "600 x 400 x 320 mm",
        weightVal: "2.6 Kg",
        certificationVal: "ISO 9001:2015",
        capacityVal: "40 Kg (Dynamic)",
      },
      highlights: "Ready Stock & B2B Supply Contracts",
      carouselAlt: "Solid Foldable Industrial Basket - View",
      ctaButton: "View All Products",
    },
    footer: {
      legalName: "CV. ASIA PLASTIK",
      tagline: "Precision Plastic Manufacturing & Industrial Packaging",
      description:
        "Leading plastic manufacturing enterprise serving industrial, agricultural, pharmaceutical, and consumer packaging sectors with proven standards of excellence.",
      certificationsTitle: "Quality Standards & Accreditations:",
      certifications: [
        "ISO 9001:2015 Quality Management",
        "Food Grade Safety Compliance",
        "Eco-Friendly Recyclable Resins",
      ],
      quickNavTitle: "Navigation",
      quickNavLinks: [
        { label: "HOME", href: "/" },
        { label: "ABOUT US", href: "/about" },
        { label: "PRODUCTS", href: "/products" },
        { label: "ARTICLES", href: "/about#artikel" },
        { label: "FAQ", href: "/faq" },
        { label: "PARTNER", href: "/about#partner" },
        { label: "CUSTOM PRODUCTS", href: "/products#custom" },
        { label: "CONTACT", href: "/#contact" },
      ],
      solutionsTitle: "Manufacturing Solutions",
      solutionsLinks: [
        { label: "Injection Molding", href: "#products" },
        { label: "Blow Molding & Bottles", href: "#products" },
        { label: "Mold Tooling Fabrication", href: "#products" },
        { label: "HDPE Industrial Containers", href: "#products" },
        { label: "Custom Technical Parts", href: "#products" },
      ],
      contactTitle: "Contact Office & Plant",
      address: "Industrial & Warehousing Estate, Jl. Raya Industri No. 88, Tangerang, Banten, 15138, Indonesia",
      workingHours: "Monday - Saturday: 08:00 - 17:00 WIB",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      backToTop: "Back to Top",
      copyright: `© ${new Date().getFullYear()} CV. ASIA PLASTIK. All Rights Reserved.`,
    },
  },
  zh: {
    common: {
      languageName: "中文 (CN)",
      langCode: "CN",
      lightMode: "浅色",
      darkMode: "深色",
      themeTooltipDark: "深色模式已开启 (向右滑动切换为浅色模式)",
      themeTooltipLight: "浅色模式已开启 (向左滑动切换为深色模式)",
    },
    topBar: {
      tagline: "工业园区与仓储基地 • 始于1990年的专业注塑与吹塑成型制造基地",
      isoCert: "ISO 9001:2015 质量管理体系认证与工业制造标准",
      workingHours: "周一至周六：08:00 - 17:00 (WIB)",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      hotline: "服务热线",
    },
    navbar: {
      home: "首页",
      about: "关于我们",
      products: "产品与服务",
      facilities: "质量与设施",
      contact: "联系销售",
      searchPlaceholder: "搜索塑料模具、HDPE塑料瓶、定制模具、工业周转筐...",
      searchClose: "关闭",
      quoteCta: "获取报价",
      menuBtn: "菜单",
      closeMenu: "关闭菜单",
      repContact: "业务代表联系方式",
      whatsappSales: "WhatsApp 咨询",
    },
    hero: {
      badge: "塑料工业制造与包装整体方案",
      titleStart: "专业工业塑料包装制造",
      titleHighlight: "企业",
      subtitle: "我们是精密注塑成型与中空吹塑成型的行业专家",
      primaryCta: "浏览产品中心 →",
      secondaryCta: "咨询销售团队",
      features: [
        { title: "高精密成型技术", subtitle: "注塑与吹塑模具" },
        { title: "严苛全检品控", subtitle: "工业级出厂检验标准" },
        { title: "优质原厂原料", subtitle: "食品级与工业级树脂" },
        { title: "大批量规模化产能", subtitle: "大宗长期供货合同" },
      ],
      metrics: [
        { value: "30+", label: "年", sublabel: "行业制造沉淀" },
        { value: "100+", label: "合作企业", sublabel: "知名上市与规模型企业" },
        { value: "99.8%", label: "成品合格率", sublabel: "高精度工业公差标准" },
      ],
      facilityLink: "深入了解厂房设施与生产能力",
    },
    newProduct: {
      badge: "新品首发",
      title: "高强度折叠工业周转筐",
      description:
        "多功能重型折叠工业周转箱，采用高抗冲击韧性结构与精密食品级聚合物原料注塑而成。折叠后可节省高达75%的仓储与运输空间，广泛适用于现代化智能仓储物流、生鲜冷链及工业供应链配送。",
      specs: {
        dimensions: "规格尺寸",
        weight: "单筐重量",
        certification: "质量认证",
        capacity: "额定承重",
        dimensionsVal: "600 x 400 x 320 mm",
        weightVal: "2.6 千克 (Kg)",
        certificationVal: "ISO 9001:2015",
        capacityVal: "40 千克 (动态承载)",
      },
      highlights: "现货常备 & 支持企业B2B批量采购",
      carouselAlt: "高强度折叠工业周转筐 - 展示角度",
      ctaButton: "查看全部产品",
    },
    footer: {
      legalName: "亚洲塑料有限公司 (CV. ASIA PLASTIK)",
      tagline: "精密工业塑料注塑制造与包装解决方案",
      description:
        "专业工业塑料制品制造商，深耕工业包装、农业周转、医药日化及消费品包材领域，以严苛标准与稳定交付赢得广泛信赖。",
      certificationsTitle: "质量管理与权威资质：",
      certifications: [
        "ISO 9001:2015 质量管理体系",
        "食品级安全合规标准",
        "环保可循环再生聚合物",
      ],
      quickNavTitle: "网站导航",
      quickNavLinks: [
        { label: "网站首页", href: "/" },
        { label: "关于我们", href: "/about" },
        { label: "产品目录", href: "/products" },
        { label: "行业动态", href: "/about#artikel" },
        { label: "常见问题", href: "/faq" },
        { label: "合作伙伴", href: "/about#partner" },
        { label: "定制产品", href: "/products#custom" },
        { label: "联系我们", href: "/#contact" },
      ],
      solutionsTitle: "核心制造能力",
      solutionsLinks: [
        { label: "精密注塑成型 (Injection Molding)", href: "#products" },
        { label: "中空挤吹塑与容器 (Blow Molding)", href: "#products" },
        { label: "定制模具开发制造 (Mold Tooling)", href: "#products" },
        { label: "HDPE工业包装箱桶", href: "#products" },
        { label: "工程塑料精密构件", href: "#products" },
      ],
      contactTitle: "总部办公室与生产基地",
      address: "印尼万丹省唐格朗市工业与仓储开发区工业大道88号 (15138)",
      workingHours: "周一至周六：08:00 - 17:00 (印尼西部时间 WIB)",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      backToTop: "返回顶部",
      copyright: `© ${new Date().getFullYear()} 亚洲塑料有限公司 (CV. ASIA PLASTIK). 保留所有权利。`,
    },
  },
};

function subscribeLanguage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("language-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("language-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "id";
  const stored = localStorage.getItem("language");
  if (stored === "id" || stored === "en" || stored === "zh") {
    return stored;
  }
  return "id";
}

function getServerSnapshot(): Language {
  return "id";
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribeLanguage, getLanguageSnapshot, getServerSnapshot);

  const setLanguage = useCallback((newLang: Language) => {
    localStorage.setItem("language", newLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang === "zh" ? "zh-CN" : newLang;
    }
    window.dispatchEvent(new CustomEvent("language-change", { detail: newLang }));
  }, []);

  const t = translations[lang] || translations.id;

  return { lang, setLanguage, t };
}
