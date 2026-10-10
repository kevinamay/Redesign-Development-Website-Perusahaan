import { Language } from "@/data/translations";

export interface AboutContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };
  customFabrication: {
    eyebrow: string;
    title: string;
    desc1: string;
    desc2: string;
    categoriesTitle: string;
    products: string[];
    warehouseBadge: string;
    forkliftBadge: string;
  };
  isoSection: {
    badge: string;
    title: string;
    description: string;
    metric1Label: string;
    metric2Label: string;
    metric3Label: string;
  };
  visionMission: {
    eyebrow: string;
    title: string;
    visionTitle: string;
    visionDesc: string;
    visionFooterLeft: string;
    visionFooterRight: string;
    missionTitle: string;
    missionPoints: string[];
    missionFooterLeft: string;
    missionFooterRight: string;
  };
  machinery: {
    eyebrow: string;
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    badge1Val: string;
    badge1Label: string;
    badge2Val: string;
    badge2Label: string;
    image1Badge: string;
    image2Badge: string;
  };
}

export const aboutTranslations: Record<Language, AboutContent> = {
  id: {
    hero: {
      badge: "GAMBARAN PERUSAHAAN",
      title: "Tentang Kami",
      description:
        "Asia Plastik adalah perusahaan manufaktur kemasan plastik yang mengkhususkan diri pada bidang injection dan blow molding sejak tahun 1985.",
      breadcrumbHome: "Beranda",
      breadcrumbCurrent: "Tentang Kami",
    },
    customFabrication: {
      eyebrow: "In-House Tooling & Custom Fabrication",
      title: "Produksi Kustom",
      desc1:
        "Melalui proses pengembangan produk dan proses berkesinambungan, beberapa produk yang kami kembangkan antara lain palet plastik blow, keranjang industri, botol plastik, jerigen, ember, galon, pelampung, kebutuhan ternak.",
      desc2:
        "Dengan berkembangnya unit in-house, kami siap melayani produk-produk khusus sesuai kebutuhan pelanggan.",
      categoriesTitle: "Kategori Produk Unggulan Kustom:",
      products: [
        "Palet Plastik Blow",
        "Keranjang Industri",
        "Botol Plastik",
        "Jerigen Beragam Ukuran",
        "Ember & Pail Industri",
        "Galon & Wadah Cairan",
        "Pelampung Jaring / Laut",
        "Kebutuhan Peternakan",
      ],
      warehouseBadge: "Kawasan Pergudangan Terintegrasi",
      forkliftBadge: "Logistik Cepat & Aman",
    },
    isoSection: {
      badge: "SERTIFIKAT",
      title: "Sertifikasi ISO 9001:2015",
      description:
        "Sejak tahun 2005 Asia Plastik berhasil meraih ISO 9001:2000 yang kini telah dikembangkan menjadi ISO 9001:2015.",
      metric1Label: "ISO 9001:2000 Pertama",
      metric2Label: "Upgrade ISO 9001:2015",
      metric3Label: "Quality Audit Compliance",
    },
    visionMission: {
      eyebrow: "PRINSIP PERUSAHAAN",
      title: "Asia Plastik Visi & Misi",
      visionTitle: "Visi Kami",
      visionDesc:
        "Menjadi perusahaan manufaktur plastik terkemuka secara nasional dan internasional dengan sumber daya manusia yang handal dan teknologi canggih yang mengutamakan kepuasan pelanggan.",
      visionFooterLeft: "Target Nasional & Global",
      visionFooterRight: "Orientasi Klien",
      missionTitle: "Misi Kami",
      missionPoints: [
        "Mengembangkan sumber daya manusia yang kompeten, berintegritas, dan berdedikasi tinggi.",
        "Menerapkan teknologi terdepan dalam proses manufaktur injection dan blow molding.",
        "Meningkatkan efisiensi manajemen dan produktivitas rantai pasok secara berkelanjutan.",
        "Memberikan kualitas produk yang baik, presisi, dan konsisten sesuai spesifikasi klien.",
        "Menciptakan produk baru yang inovatif, fungsional, dan ramah lingkungan.",
        "Berjuang dalam perbaikan terus menerus (continuous improvement) di setiap lini operasional.",
      ],
      missionFooterLeft: "Total 6 Pilar Komitmen Mutu",
      missionFooterRight: "Standar Mutu Berkelanjutan",
    },
    machinery: {
      eyebrow: "Kapasitas Ekstra Besar",
      title: "Blow Moulding 500 liter",
      desc1:
        "Kemampuan mesin Blow Moulding kami mampu memproduksi tangki dan wadah industri dengan kapasitas hingga 500 liter dalam satu siklus pembentukan yang homogen.",
      desc2:
        "Dirancang untuk ketahanan struktural luar biasa, produk hasil cetakan memiliki ketebalan dinding yang merata, tahan terhadap benturan keras, serta aman untuk penyimpanan zat cair industri dan kimia.",
      desc3:
        "Setiap unit diproduksi di bawah pengawasan ketat teknisi bersertifikasi dan parameter mesin otomatis berpresisi mikro, memastikan tidak ada cacat, kebocoran, atau deviasi ukuran demi kepuasan klien jangka panjang.",
      badge1Val: "500L",
      badge1Label: "Kapasitas Maksimal Wadah",
      badge2Val: "±0.05 mm",
      badge2Label: "Toleransi Presisi Cetak",
      image1Badge: "Mesin Blow Moulding Otomasi Presisi",
      image2Badge: "Kontrol Kualitas & Parameter Termal Mikro",
    },
  },
  en: {
    hero: {
      badge: "COMPANY PROFILE",
      title: "About Us",
      description:
        "Asia Plastik is a premier plastic packaging manufacturing enterprise specializing in precision injection and blow molding technologies since 1985.",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "About Us",
    },
    customFabrication: {
      eyebrow: "In-House Tooling & Custom Fabrication",
      title: "Custom Manufacturing",
      desc1:
        "Through ongoing engineering innovations and refined manufacturing methods, our product lines include blow-molded plastic pallets, industrial crates, bottles, multi-size jerrycans, buckets, gallons, marine floats, and farming equipment.",
      desc2:
        "With our expanding in-house tooling workshop, we are fully prepared to build tailor-made plastic products suited to exact client specifications.",
      categoriesTitle: "Featured Custom Product Categories:",
      products: [
        "Blow-Molded Plastic Pallets",
        "Industrial Crates & Boxes",
        "Plastic Bottles & Containers",
        "Multi-Size Jerrycans",
        "Industrial Pails & Buckets",
        "Gallons & Liquid Containers",
        "Marine & Fishery Floats",
        "Livestock Farming Equipment",
      ],
      warehouseBadge: "Integrated Warehousing Facility",
      forkliftBadge: "Fast & Secure Logistics",
    },
    isoSection: {
      badge: "ACCREDITATION",
      title: "ISO 9001:2015 Certification",
      description:
        "Since 2005, Asia Plastik has maintained ISO 9001:2000 accreditation, which has successfully evolved into the modern ISO 9001:2015 standard.",
      metric1Label: "First ISO 9001:2000",
      metric2Label: "Upgrade ISO 9001:2015",
      metric3Label: "Quality Audit Compliance",
    },
    visionMission: {
      eyebrow: "CORPORATE VALUES",
      title: "Asia Plastik Vision & Mission",
      visionTitle: "Our Vision",
      visionDesc:
        "To become a leading plastic manufacturing enterprise both nationally and internationally, empowered by competent human talent and cutting-edge technology that puts customer satisfaction first.",
      visionFooterLeft: "National & Global Target",
      visionFooterRight: "Client-Centric Approach",
      missionTitle: "Our Mission",
      missionPoints: [
        "Cultivate competent, ethical, and dedicated human capital.",
        "Implement cutting-edge technology in injection and blow molding processes.",
        "Continuously elevate management efficiency and supply chain productivity.",
        "Deliver superior, precise, and consistent products matching client technical specs.",
        "Innovate functional, reliable, and environmentally responsible new products.",
        "Strive for continuous improvement across all operational workflows.",
      ],
      missionFooterLeft: "6 Pillars of Quality Commitment",
      missionFooterRight: "Sustainable Quality Standards",
    },
    machinery: {
      eyebrow: "Extra Large Capacity",
      title: "500-Liter Blow Molding",
      desc1:
        "Our high-capacity blow molding machinery can produce industrial tanks and containers holding up to 500 liters in a single homogeneous cycle.",
      desc2:
        "Engineered for structural toughness, our molded tanks exhibit uniform wall thickness, high impact resilience, and safe containment for industrial and chemical fluids.",
      desc3:
        "Every item is fabricated under strict certified technician oversight and automated micro-precision parameters, ensuring zero leakage, no defects, and consistent dimensions.",
      badge1Val: "500L",
      badge1Label: "Maximum Container Volume",
      badge2Val: "±0.05 mm",
      badge2Label: "Precision Molding Tolerance",
      image1Badge: "Precision Automated Blow Molding",
      image2Badge: "Quality Control & Micro Thermal Parameters",
    },
  },
  zh: {
    hero: {
      badge: "公司概况",
      title: "关于我们",
      description:
        "亚洲塑料（CV. ASIA PLASTIK）是一家专注于精密注塑与大型中空挤吹塑成型技术的专业塑料制造企业，始创于1985年。",
      breadcrumbHome: "首页",
      breadcrumbCurrent: "关于我们",
    },
    customFabrication: {
      eyebrow: "自主模具开发与定制制造",
      title: "定制化生产",
      desc1:
        "通过持续的产品研发与工程改进，我们开发的产品系列涵盖大型吹塑塑料托盘、工业周转箱、塑料瓶、多规格化工/机油桶、工业广口桶、大容量水桶、海洋渔业浮球以及畜牧养殖器具。",
      desc2:
        "依托内部不断扩大的工模与模具开发团队，我们具备承接并满足客户各类特殊技术要求与专属定制产品的全面能力。",
      categoriesTitle: "特色定制产品类别：",
      products: [
        "重型吹塑塑料托盘",
        "工业周转箱与塑料筐",
        "各类塑料瓶与包装瓶",
        "多规格化工/机油桶",
        "工业涂料桶与广口桶",
        "大容量水桶与液体容器",
        "渔业海洋捕捞浮球",
        "畜牧养殖专用器具",
      ],
      warehouseBadge: "一体化现代化仓储基地",
      forkliftBadge: "高效安全的物流保障",
    },
    isoSection: {
      badge: "国际资质认证",
      title: "ISO 9001:2015 质量管理体系认证",
      description:
        "自2005年起，亚洲塑料便成功通过 ISO 9001:2000 认证，现已全面升级并持续维持 ISO 9001:2015 国际质量管理体系标准。",
      metric1Label: "首次获得 ISO 9001:2000",
      metric2Label: "升级至 ISO 9001:2015",
      metric3Label: "质量体系审计合规率",
    },
    visionMission: {
      eyebrow: "企业发展准则",
      title: "亚洲塑料 愿景与使命",
      visionTitle: "企业愿景",
      visionDesc:
        "依托高素质人才与先进生产装备，以客户高度满意为核心导向，成为在国内外享有盛誉的领军塑料制造企业。",
      visionFooterLeft: "立足全国，放眼全球",
      visionFooterRight: "以客户需求为中心",
      missionTitle: "企业使命",
      missionPoints: [
        "培养具备专业能力、诚信与高度敬业精神的优秀人才队伍。",
        "在注塑与吹塑成型流程中深度应用前沿技术与自动化设备。",
        "持续优化企业运营效能并提升供应链综合生产效率。",
        "交付符合严格技术规格、精度卓越且品质一致的高标准产品。",
        "积极开发具有创新性、实用性与环保属性的新型塑料制品。",
        "在所有制造与管理流程中坚持精益求精与持续改善（Continuous Improvement）。",
      ],
      missionFooterLeft: "六大质量承诺核心支柱",
      missionFooterRight: "可持续卓越品质标准",
    },
    machinery: {
      eyebrow: "特大容量成型技术",
      title: "500升 超大型中空挤吹塑成型",
      desc1:
        "我们的大型中空吹塑设备能够在单次成型周期中一体无缝生产容积高达 500 升的重型工业储罐与容器。",
      desc2:
        "专为高要求工业级强度设计，制品壁厚均匀致密，具备出色的抗冲击与耐跌落性能，可安全盛装各类工业液体与化学药剂。",
      desc3:
        "每台设备均在资深认证技师与微米级自动化控制参数下严密运行，杜绝气孔、渗漏及尺寸偏差，保障客户长期稳定使用。",
      badge1Val: "500L",
      badge1Label: "单体最大容器容量",
      badge2Val: "±0.05 mm",
      badge2Label: "模具精密成型公差",
      image1Badge: "高精度自动化大型吹塑机组",
      image2Badge: "全流程质检与微控热工参数",
    },
  },
};
