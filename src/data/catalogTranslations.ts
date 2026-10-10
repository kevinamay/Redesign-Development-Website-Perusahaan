import { Language } from "@/data/translations";

export interface LocalizedCategoryInfo {
  name: string;
  displayName: string;
  subtitle: string;
}

export interface LocalizedProductData {
  title: string;
  dimensi: string;
  berat: string;
  deskripsi: string;
  subtitle?: string;
}

// 1. UI Translations for Product Pages & Cards
export const catalogUiTranslations = {
  id: {
    sidebarTitle: "KATEGORI PRODUK",
    breadcrumbCatalog: "KATALOG PRODUK",
    specsLabels: {
      dimensions: "Dimensi",
      weight: "Berat",
    },
    actions: {
      contactSales: "Hubungi Penjualan",
      hotline: "Hotline: +62 21 555-8901",
      readMore: "Baca Selengkapnya",
      showLess: "Tampilkan Lebih Sedikit",
    },
    badges: {
      flagship: "B2B INDUSTRIAL FLAGSHIP",
      factoryOfficial: "PRODUKSI PABRIK RESMI",
    },
    emptyState: {
      titlePrefix: "Katalog",
      description:
        "Produk untuk kategori ini sedang dalam tahap persiapan spesifikasi teknis resmi. Hubungi sales representatif kami untuk ketersediaan cetakan dan penawaran langsung.",
      contactSales: "Hubungi Tim Sales",
      viewPallet: "Lihat Pallet Industri",
    },
    search: {
      placeholder: "Cari produk berdasarkan nama atau kategori (contoh: Pallet, Keranjang, Jerigen, Botol)...",
      resultsTitle: "Hasil Pencarian",
      resultsCount: (count: number, query: string) => `Ditemukan ${count} produk untuk "${query}"`,
      noResultsTitle: "Produk Tidak Ditemukan",
      noResultsDesc: (query: string) => `Tidak ada produk atau kategori yang cocok dengan "${query}". Coba kata kunci lain atau periksa ejaan.`,
      clearSearch: "Hapus Pencarian",
      allProducts: "Semua Kategori",
      popularSearches: "Pencarian Populer:",
    },
    whatsappMessage: (productTitle: string) =>
      `Halo CV. Asia Plastik, saya tertarik dengan produk ${productTitle} dari katalog website dan ingin menanyakan penawaran harga serta spesifikasi.`,
  },
  en: {
    sidebarTitle: "PRODUCT CATEGORIES",
    breadcrumbCatalog: "PRODUCT CATALOG",
    specsLabels: {
      dimensions: "Dimensions",
      weight: "Weight",
    },
    actions: {
      contactSales: "Contact Sales",
      hotline: "Hotline: +62 21 555-8901",
      readMore: "Read More",
      showLess: "Show Less",
    },
    badges: {
      flagship: "B2B INDUSTRIAL FLAGSHIP",
      factoryOfficial: "OFFICIAL FACTORY PRODUCTION",
    },
    emptyState: {
      titlePrefix: "Catalog",
      description:
        "Products for this category are undergoing technical specification finalization. Contact our sales representative for mold tooling availability and direct B2B quotation.",
      contactSales: "Contact Sales Team",
      viewPallet: "View Industrial Pallets",
    },
    search: {
      placeholder: "Search products by name or category (e.g. Pallet, Crate, Jerrycan, Bottle)...",
      resultsTitle: "Search Results",
      resultsCount: (count: number, query: string) => `Found ${count} products for "${query}"`,
      noResultsTitle: "No Products Found",
      noResultsDesc: (query: string) => `No products or categories matched "${query}". Try another keyword or check your spelling.`,
      clearSearch: "Clear Search",
      allProducts: "All Categories",
      popularSearches: "Popular Searches:",
    },
    whatsappMessage: (productTitle: string) =>
      `Hello CV. Asia Plastik, I am interested in the ${productTitle} product from your website catalog and would like to inquire about quotation and specifications.`,
  },
  zh: {
    sidebarTitle: "产品分类目录",
    breadcrumbCatalog: "产品目录",
    specsLabels: {
      dimensions: "规格尺寸",
      weight: "单件重量",
    },
    actions: {
      contactSales: "联系销售团队",
      hotline: "服务热线: +62 21 555-8901",
      readMore: "查看详情",
      showLess: "收起详情",
    },
    badges: {
      flagship: "B2B 工业旗舰标杆",
      factoryOfficial: "原厂正规生产制造",
    },
    emptyState: {
      titlePrefix: "产品目录",
      description:
        "该分类下的产品技术规格正在整理归档中。欢迎联系我们的销售工程师咨询现有注塑模具及批量采购报价。",
      contactSales: "联系销售团队",
      viewPallet: "查看工业塑料托盘",
    },
    search: {
      placeholder: "按名称或类别搜索产品（例如托盘、周转箱、塑料桶、塑料瓶）...",
      resultsTitle: "搜索结果",
      resultsCount: (count: number, query: string) => `找到 ${count} 个匹配 "${query}" 的产品`,
      noResultsTitle: "未找到相关产品",
      noResultsDesc: (query: string) => `没有找到与 "${query}" 匹配的产品或类别。请尝试其他关键词。`,
      clearSearch: "清除搜索",
      allProducts: "所有分类",
      popularSearches: "热门搜索:",
    },
    whatsappMessage: (productTitle: string) =>
      `您好 CV. Asia Plastik，我对官网目录中的产品 ${productTitle} 很感兴趣，想咨询批量报价与技术参数。`,
  },
};

// 2. Multilingual Category Metadata
export const categoriesTranslations: Record<
  string,
  Record<Language, LocalizedCategoryInfo>
> = {
  "pallet-industri": {
    id: {
      name: "Pallet Industri",
      displayName: "PALLET INDUSTRI",
      subtitle: "Solusi Palet Plastik Standar Logistik, Higienis & Pergudangan Otomasi",
    },
    en: {
      name: "Industrial Pallets",
      displayName: "INDUSTRIAL PALLETS",
      subtitle: "Heavy-Duty Plastic Pallet Solutions for Logistics, Hygiene & Automated Warehousing",
    },
    zh: {
      name: "工业塑料托盘",
      displayName: "工业塑料托盘",
      subtitle: "现代化物流、卫生标准与自动化立库重载塑料托盘整体解决方案",
    },
  },
  "keranjang-industri": {
    id: {
      name: "Keranjang Industri",
      displayName: "KERANJANG INDUSTRI",
      subtitle: "Wadah Distribusi & Penyimpanan Logistik Industri",
    },
    en: {
      name: "Industrial Crates",
      displayName: "INDUSTRIAL CRATES",
      subtitle: "Durable Distribution & Storage Containers for Industrial Logistics",
    },
    zh: {
      name: "工业塑料周转筐",
      displayName: "工业塑料周转筐",
      subtitle: "适用于工厂车间、农业果蔬与供应链物流的高承重周转存储筐",
    },
  },
  "box-lipat": {
    id: {
      name: "Box Lipat",
      displayName: "BOX LIPAT",
      subtitle: "Kontainer Lipat Pintar Hemat Ruang Pergudangan",
    },
    en: {
      name: "Collapsible Boxes",
      displayName: "COLLAPSIBLE BOXES",
      subtitle: "Space-Saving Smart Foldable Containers for Efficient Warehousing",
    },
    zh: {
      name: "折叠工业周转箱",
      displayName: "折叠工业周转箱",
      subtitle: "空箱折叠节省75%空间、适用于循环共用物流的高效智能周转箱",
    },
  },
  "blok-lalu-lintas": {
    id: {
      name: "Blok Lalu Lintas dan Kerucut Lalu Lintas",
      displayName: "BLOK LALU LINTAS & KERUCUT",
      subtitle: "Road Barrier Pembatas Jalan & Kerucut Pengaman Rekayasa Lalu Lintas",
    },
    en: {
      name: "Traffic Barriers & Cones",
      displayName: "TRAFFIC BARRIERS & CONES",
      subtitle: "Highway Water Barriers & Safety Reflective Cones for Traffic Engineering",
    },
    zh: {
      name: "交通隔离水马与路锥",
      displayName: "交通隔离水马与路锥",
      subtitle: "公路安全防撞隔离水马及工程级反光防撞交通锥",
    },
  },
  "botol-pupuk-pet": {
    id: {
      name: "Botol Pupuk PET",
      displayName: "BOTOL PUPUK PET",
      subtitle: "Kemasan Botol Kedap Udara Agrokimia & Cairan Kimia",
    },
    en: {
      name: "Agrochemical PET Bottles",
      displayName: "AGROCHEMICAL PET BOTTLES",
      subtitle: "Airtight & Chemical-Resistant PET Bottles for Agrochemicals & Fertilizers",
    },
    zh: {
      name: "PET农化肥料瓶",
      displayName: "PET农化肥料瓶",
      subtitle: "高气密性耐化学腐蚀PET农药、肥料及精细化学品专业包装瓶",
    },
  },
  kosmetik: {
    id: {
      name: "Kosmetik",
      displayName: "KOSMETIK",
      subtitle: "Kemasan Botol & Pot Kosmetik, Skincare, dan Personal Care Higienis",
    },
    en: {
      name: "Cosmetics Packaging",
      displayName: "COSMETICS PACKAGING",
      subtitle: "Hygienic Jars & Bottles for Skincare, Cosmetics, and Personal Care",
    },
    zh: {
      name: "化妆品与日化包材",
      displayName: "化妆品与日化包材",
      subtitle: "洁净级护肤膏霜瓶、精华瓶、乳液瓶及个人护理用品包装",
    },
  },
  "botol-minyak-goreng": {
    id: {
      name: "Botol Minyak Goreng",
      displayName: "BOTOL MINYAK GORENG",
      subtitle: "Botol Plastik PET Food Grade Higienis untuk Minyak Goreng & Minyak Nabati",
    },
    en: {
      name: "Cooking Oil Bottles",
      displayName: "COOKING OIL BOTTLES",
      subtitle: "Hygienic Food-Grade PET Bottles for Cooking Oil & Vegetable Oils",
    },
    zh: {
      name: "食用油PET瓶",
      displayName: "食用油PET瓶",
      subtitle: "食品级高洁净透明PET食用油、植物油及食用油脂包装瓶",
    },
  },
  "beragam-kemasan-pet": {
    id: {
      name: "Beragam Kemasan PET",
      displayName: "BERAGAM KEMASAN PET",
      subtitle: "Galon Air Minum, Toples Bumbu, & Beragam Wadah Higienis Food Grade",
    },
    en: {
      name: "Assorted PET Packaging",
      displayName: "ASSORTED PET PACKAGING",
      subtitle: "Drinking Water Gallons, Spice Jars, & Multipurpose Food-Grade Containers",
    },
    zh: {
      name: "综合PET容器与瓶罐",
      displayName: "综合PET容器与瓶罐",
      subtitle: "纯净水大桶、调味品密封罐及多种食品级多功能透明塑料容器",
    },
  },
  "jerigen-hdpe": {
    id: {
      name: "Jerigen HDPE",
      displayName: "JERIGEN HDPE",
      subtitle: "Wadah Jerigen Blow Moulding Anti Bocor",
    },
    en: {
      name: "HDPE Jerry Cans",
      displayName: "HDPE JERRY CANS",
      subtitle: "Leak-Proof Blow Moulding Jerry Cans for Liquids & Detergents",
    },
    zh: {
      name: "HDPE标准手提塑料桶",
      displayName: "HDPE标准手提塑料桶",
      subtitle: "高密度聚乙烯中空吹塑防漏耐摔手提油水桶与洗涤剂桶",
    },
  },
  "jerigen-chemical-hdpe": {
    id: {
      name: "Jerigen Chemical HDPE",
      displayName: "JERIGEN CHEMICAL HDPE",
      subtitle: "Jerigen Khusus Bahan Kimia Industri Standar Heavy Duty",
    },
    en: {
      name: "HDPE Chemical Jerry Cans",
      displayName: "HDPE CHEMICAL JERRY CANS",
      subtitle: "Heavy-Duty UN-Standard Containers for Industrial Chemicals & Acids",
    },
    zh: {
      name: "HDPE耐酸碱化工桶",
      displayName: "HDPE耐酸碱化工桶",
      subtitle: "重工业级耐化学品腐蚀、耐酸碱堆码专用防爆中空吹塑桶",
    },
  },
  "jerigen-oli": {
    id: {
      name: "Jerigen Oli",
      displayName: "JERIGEN OLI",
      subtitle: "Kemasan Jerigen Pelumas, Oli Mesin, & Cairan Otomotif",
    },
    en: {
      name: "Engine Oil Jerry Cans",
      displayName: "ENGINE OIL JERRY CANS",
      subtitle: "Premium Packaging for Lubricants, Engine Oils & Automotive Fluids",
    },
    zh: {
      name: "润滑油与机油专用桶",
      displayName: "润滑油与机油专用桶",
      subtitle: "耐油抗渗漏车用润滑油、发动机机油及汽车养护流体专业桶",
    },
  },
  "jerigen-lipat": {
    id: {
      name: "Jerigen Lipat",
      displayName: "JERIGEN LIPAT",
      subtitle: "Jerigen Lipat Praktis Fleksibel untuk Air & Kebutuhan Darurat",
    },
    en: {
      name: "Collapsible Water Jerry Cans",
      displayName: "COLLAPSIBLE WATER JERRY CANS",
      subtitle: "Flexible Practical Foldable Water Cans for Emergency & Outdoor Logistics",
    },
    zh: {
      name: "户外便携折叠水桶",
      displayName: "户外便携折叠水桶",
      subtitle: "轻巧柔韧耐折叠食品级储水桶，适用于野营自驾与应急防灾储备",
    },
  },
  "botol-hdpe": {
    id: {
      name: "Botol HDPE",
      displayName: "BOTOL HDPE",
      subtitle: "Botol Plastik High-Density Polyethylene untuk Industri, Farmasi & Kimia",
    },
    en: {
      name: "HDPE Bottles",
      displayName: "HDPE BOTTLES",
      subtitle: "High-Density Polyethylene Bottles for Industry, Pharma & Household Chemicals",
    },
    zh: {
      name: "HDPE工业与医药瓶",
      displayName: "HDPE工业与医药瓶",
      subtitle: "高密度聚乙烯抗化学腐蚀瓶，广泛应用于工业清洗、医药及日化",
    },
  },
  "kaleng-pail-plastik": {
    id: {
      name: "Kaleng & Pail Plastik",
      displayName: "KALENG & PAIL PLASTIK",
      subtitle: "Pail & Ember Industri Bersegel Rapat untuk Cat, Bahan Kimia, & Pasta",
    },
    en: {
      name: "Plastic Pails & Cans",
      displayName: "PLASTIC PAILS & CANS",
      subtitle: "Tightly Sealed Industrial Pails & Buckets for Paint, Chemicals & Food Paste",
    },
    zh: {
      name: "涂料桶与工业塑料圆桶",
      displayName: "涂料桶与工业塑料圆桶",
      subtitle: "防渗漏密封卡口工业桶，适用于涂料油漆、化工原料及食品级油脂",
    },
  },
  "perikanan-dan-kelautan": {
    id: {
      name: "Perikanan dan Kelautan",
      displayName: "PERIKANAN DAN KELAUTAN",
      subtitle: "Pelampung Jaring Nelayan, Pelampung Keramba, & Wadah Hasil Laut",
    },
    en: {
      name: "Fisheries & Marine",
      displayName: "FISHERIES & MARINE",
      subtitle: "Fishing Net Floats, Aquaculture Cage Buoys, & Seafood Transport Baskets",
    },
    zh: {
      name: "海洋捕捞与水产养殖",
      displayName: "海洋捕捞与水产养殖",
      subtitle: "抗紫外线耐海水腐蚀浮球、深水网箱养殖浮体及水产透气周转筐",
    },
  },
};

// 3. Multilingual Overrides for All Catalog Products
export const productTranslations: Record<
  string,
  {
    en?: Partial<LocalizedProductData>;
    zh?: Partial<LocalizedProductData>;
  }
> = {
  "PALLET P SERIES": {
    "en": {
      "title": "PALLET P SERIES",
      "subtitle": "Heavy Duty Plastic Pallets for Warehousing, Export & Automated Racking",
      "dimensi": "1200 x 1165 x 140 MM",
      "berat": "12 KG",
      "deskripsi": "Industrial plastic pallets from Asia Plastik are specifically engineered for modern logistics and heavy warehousing. Molded from premium-grade polymer, these pallets deliver superior load resistance, impact durability, and resilience in extreme conditions. Unlike wooden pallets, they are splinter-free, non-absorbent, and pest-resistant."
    },
    "zh": {
      "title": "P系列塑料托盘",
      "subtitle": "适用于立体仓储、出口货运与自动化货架的标准重载塑料托盘",
      "dimensi": "1200 x 1165 x 140 毫米",
      "berat": "12 千克 (KG)",
      "deskripsi": "亚洲塑料 (Asia Plastik) 工业级塑料托盘专为现代化工业物流与智能仓储设计。采用高强度原生原料注塑成型，具备优异的动载承载力、耐冲击性及极端温差适应能力。与传统木质托盘相比，无木刺碎片、不吸水受潮、防霉防虫蛀，符合严格的出口与食品卫生标准。"
    }
  },
  "KERANJANG INDUSTRI KECIL": {
    "en": {
      "title": "SMALL INDUSTRIAL CRATE (T-15)",
      "dimensi": "620 X 430 X 150 MM",
      "berat": "1.5 KG",
      "deskripsi": "The T-15 Industrial Crate is designed for industrial needs demanding strength and hygiene in storage and distribution. Made from food-grade certified polymer, ideal for food processing, logistics, and agriculture."
    },
    "zh": {
      "title": "小号工业塑料周转筐 (T-15)",
      "dimensi": "620 X 430 X 150 毫米",
      "berat": "1.5 千克",
      "deskripsi": "T-15型工业塑料周转筐专为严苛工业存储与周转设计，采用高品质食品级安全塑料制造，结构坚固抗摔，广泛适用于食品加工、农业果蔬采摘及车间物料周转。"
    }
  },
  "KERANJANG INDUSTRI T-25": {
    "en": {
      "title": "MEDIUM INDUSTRIAL CRATE (T-25)",
      "dimensi": "620 X 430 X 250 MM",
      "berat": "1.82 KG",
      "deskripsi": "Medium 25 cm height industrial plastic crate with reinforced ribs and optimal ventilation, ideal for warehouse distribution and food supply chain."
    },
    "zh": {
      "title": "中号工业塑料周转筐 (T-25)",
      "dimensi": "620 X 430 X 250 毫米",
      "berat": "1.82 千克",
      "deskripsi": "T-25型工业塑料筐高度为25厘米，采用加强筋网孔透气设计，通风保鲜，承载力强，可多层稳固堆叠，是仓储与配送的高效经济之选。"
    }
  },
  "KERANJANG INDUSTRI BESAR": {
    "en": {
      "title": "LARGE INDUSTRIAL CRATE (32 CM)",
      "dimensi": "620 X 430 X 320 MM",
      "berat": "2.25 KG",
      "deskripsi": "Heavy-duty large industrial crate (32 cm height) engineered for high-volume storage and bulk material distribution with reinforced rim and handles."
    },
    "zh": {
      "title": "大号工业塑料周转筐 (高32厘米)",
      "dimensi": "620 X 430 X 320 毫米",
      "berat": "2.25 千克",
      "deskripsi": "大号高承重工业塑料周转筐（高度32厘米），大容量深筐体设计，抗冲击耐摔，配有符合人体工程学的搬运把手，适用于大宗物资仓储与长途运输。"
    }
  },
  "KERANJANG TERTUTUP": {
    "en": {
      "title": "SOLID CLOSED INDUSTRIAL CRATE",
      "dimensi": "430 X 620 X 320 MM",
      "berat": "2.5 KG",
      "deskripsi": "Heavy-duty solid closed industrial crate designed for dustproof and secure storage of sensitive parts, electronics, and small components in manufacturing and warehousing."
    },
    "zh": {
      "title": "大号封闭式工业塑料周转筐",
      "dimensi": "430 X 620 X 320 毫米",
      "berat": "2.5 千克",
      "deskripsi": "大号封闭式工业塑料周转筐，全封闭箱壁设计，有效防尘防潮，保护精密零件与敏感物料，适用于制造装配、无尘车间与仓储周转。"
    }
  },
  "KERANJANG INDUSTRI T-38": {
    "en": {
      "title": "EXTRA LARGE INDUSTRIAL CRATE (T-38)",
      "dimensi": "620 X 430 X 380 MM",
      "berat": "2.3 KG",
      "deskripsi": "The largest variant in the Asia Plastik crate lineup, featuring 38 cm height, extra-volume capacity, and reinforced bottom ribs for bulk materials and heavy transit."
    },
    "zh": {
      "title": "特大号工业塑料周转筐 (T-38)",
      "dimensi": "620 X 430 X 380 毫米",
      "berat": "2.3 千克",
      "deskripsi": "T-38是亚洲塑料周转筐系列中容积最大的型号（高38厘米），专为大容量、高承重物流与大宗物料周转设计，加固结构确保多层稳固堆叠。"
    }
  },
  "DAYS OLD CHICKEN BOX": {
    "en": {
      "title": "DAY-OLD CHICKEN (DOC) TRANSPORT CRATE",
      "dimensi": "668 X 495 X 145 MM",
      "berat": "2.07 KG",
      "deskripsi": "Specialized plastic transport crate engineered for day-old chicks (DOC) with optimal ventilation grids and hygienic easy-to-clean design for commercial poultry logistics."
    },
    "zh": {
      "title": "雏鸡禽苗专用透气运输箱 (DOC BOX)",
      "dimensi": "668 X 495 X 145 毫米",
      "berat": "2.07 千克",
      "deskripsi": "专为一日龄雏鸡 (DOC) 安全运输设计的专用塑料筐，拥有精密空气流通网孔，保持适宜温湿度，箱体光滑易清洗消毒，深受现代化养殖场信赖。"
    }
  },
  "BOX LIPAT": {
    "en": {
      "title": "STANDARD FOLDABLE INDUSTRIAL BOX",
      "dimensi": "400 X 600 X 320 MM",
      "berat": "2.6 KG",
      "deskripsi": "Innovative collapsible plastic container saving up to 75% volume when folded, perfect for returnable transit packaging (RTP), warehouse storage, and e-commerce logistics."
    },
    "zh": {
      "title": "标准型折叠工业周转箱",
      "dimensi": "400 X 600 X 320 毫米",
      "berat": "2.6 千克",
      "deskripsi": "创新型可折叠塑料周转箱，空箱折叠后节省高达75%空间，折叠顺畅，锁扣牢固，广泛应用于汽配周转、连锁超市配送及现代化仓储。"
    }
  },
  "BOX LIPAT LUBANG": {
    "en": {
      "title": "VENTILATED FOLDABLE INDUSTRIAL CRATE",
      "dimensi": "400 X 600 X 320 MM",
      "berat": "2.6 KG",
      "deskripsi": "Perforated collapsible crate offering superior airflow for agricultural produce, cold chain distribution, and space-saving return logistics."
    },
    "zh": {
      "title": "网孔通风型折叠塑料周转箱",
      "dimensi": "400 X 600 X 320 毫米",
      "berat": "2.6 千克",
      "deskripsi": "箱体四周带有透气网孔的折叠周转箱，专为果蔬生鲜冷链与农产品配送设计，通风散热，耐水洗易风干，空箱回运极度节省运费。"
    }
  },
  "KERUCUT LALU LINTAS 50 CM": {
    "en": {
      "title": "TRAFFIC CONE 50 CM (REFLECTIVE)",
      "dimensi": "BASE 280 X 280 MM - HEIGHT 500 MM",
      "berat": "1.1 KG",
      "deskripsi": "50 cm durable traffic safety cone with high-intensity reflective sleeve and weather-resistant polymer, ideal for parking zones, commercial plazas, and local road diversions."
    },
    "zh": {
      "title": "工程级橡胶底座反光路锥 50 CM",
      "dimensi": "底座 280 X 280 毫米 - 高 500 毫米",
      "berat": "1.1 千克",
      "deskripsi": "50厘米高反光安全路锥，采用高弹性耐候聚合物注塑，配高亮晶格反光膜，抗碾压耐老化，适用于停车场、商业广场与道路施工引导。"
    }
  },
  "ROAD BARRIER / TRAFFIC BLOCK": {
    "en": {
      "title": "WATER-FILLED ROAD SAFETY BARRIER",
      "dimensi": "1200 X 500 X 800 MM",
      "berat": "10 KG (EMPTY) / UP TO 100+ KG (FILLED)",
      "deskripsi": "Heavy-duty polyethylene road barrier with water or sand ballast capability, interlocking system, and high visibility for highway divisions and construction zones."
    },
    "zh": {
      "title": "注水防撞隔离水马 / 交通路障",
      "dimensi": "1200 X 500 X 800 毫米",
      "berat": "10 千克 (空重) / 充水后超 100 千克",
      "deskripsi": "高密度聚乙烯注水/灌沙防撞隔离水马，互锁拼接卡槽设计，醒目红黄双色，吸能缓冲防撞性能优越，广泛用于高速公路、市政施工与交管分流。"
    }
  },
  "KERUCUT LALU LINTAS STANDAR (RING TOP)": {
    "en": {
      "title": "STANDARD TRAFFIC CONE WITH RING TOP (70 CM)",
      "dimensi": "BASE 360 X 360 MM - HEIGHT 700 MM",
      "berat": "2.2 KG",
      "deskripsi": "70 cm industrial safety cone with convenient ring top handle for quick deployment and barricade tape attachment, featuring heavy weighted base for stability against wind."
    },
    "zh": {
      "title": "环形手柄反光防撞路锥 (70 CM)",
      "dimensi": "底座 360 X 360 毫米 - 高 700 毫米",
      "berat": "2.2 千克",
      "deskripsi": "70厘米顶部带环手柄工程路锥，便于抓取移动及穿挂警示链条或警戒带，重型加重底座抗风防倾倒，适合道路抢修与高速分流。"
    }
  },
  "BOTOL PUPUK PET 100 CC": {
    "en": {
      "title": "AGROCHEMICAL PET BOTTLE 100 CC",
      "dimensi": "DIAMETER 45 MM - HEIGHT 98 MM",
      "berat": "16 GR",
      "deskripsi": "100 cc airtight PET bottle with leak-proof cap, chemically resistant to liquid fertilizers, pesticides, and agricultural formulas."
    },
    "zh": {
      "title": "100 CC 农化液体肥料PET塑料瓶",
      "dimensi": "直径 45 毫米 - 高 98 毫米",
      "berat": "16 克",
      "deskripsi": "100 CC 高阻隔PET农用塑料瓶，耐弱酸弱碱与农化试剂腐蚀，密封防漏盖设计，适用于高浓缩微肥、杀虫剂及试用装液体包装。"
    }
  },
  "BOTOL PUPUK PET 250 CC": {
    "en": {
      "title": "AGROCHEMICAL PET BOTTLE 250 CC",
      "dimensi": "DIAMETER 58 MM - HEIGHT 140 MM",
      "berat": "26 GR",
      "deskripsi": "250 cc standard agricultural PET bottle engineered for safe packaging of plant nutrients, herbicides, and biochemical liquids."
    },
    "zh": {
      "title": "250 CC 农用肥料与农药PET塑料瓶",
      "dimensi": "直径 58 毫米 - 高 140 毫米",
      "berat": "26 克",
      "deskripsi": "250 CC 标准农化PET瓶，瓶身抗压耐摔，螺纹口密封严实，适用于植物营养液、除草剂与水溶肥的分装与流通。"
    }
  },
  "BOTOL PUPUK PET 250 CC WITH LINING": {
    "en": {
      "title": "AGROCHEMICAL PET BOTTLE 250 CC (INDUCTION LINING)",
      "dimensi": "DIAMETER 58 MM - HEIGHT 140 MM",
      "berat": "27 GR",
      "deskripsi": "250 cc agrochemical bottle equipped with aluminum induction seal liner to prevent vapor leaks and liquid permeation during transport."
    },
    "zh": {
      "title": "250 CC 带铝箔垫片密封农化PET瓶",
      "dimensi": "直径 58 毫米 - 高 140 毫米",
      "berat": "27 克",
      "deskripsi": "250 CC 配备电磁感应铝箔封口垫片的农化瓶，彻底杜绝液体挥发与长途颠簸渗漏，确保危险化学液体包装万无一失。"
    }
  },
  "BOTOL PUPUK PET 500 CC NATURAL": {
    "en": {
      "title": "NATURAL PET AGROCHEMICAL BOTTLE 500 CC",
      "dimensi": "DIAMETER 72 MM - HEIGHT 182 MM",
      "berat": "38 GR",
      "deskripsi": "500 cc semi-translucent natural PET bottle enabling clear liquid level visibility while offering superior barrier against agrochemical degradation."
    },
    "zh": {
      "title": "500 CC 本色半透明农化PET塑料瓶",
      "dimensi": "直径 72 毫米 - 高 182 毫米",
      "berat": "38 克",
      "deskripsi": "500 CC 本色高洁净PET瓶，瓶身透明可直观观察内部药液容量，瓶体抗冲击耐老化，是农化行业主力包装规程。"
    }
  },
  "BOTOL PUPUK PET 1 LITER NATURAL": {
    "en": {
      "title": "NATURAL PET AGROCHEMICAL BOTTLE 1 LITER",
      "dimensi": "DIAMETER 88 MM - HEIGHT 235 MM",
      "berat": "62 GR",
      "deskripsi": "1 Liter heavy-grade agricultural PET container with reinforced base and tamper-evident cap, designed for bulk fertilizer and chemical distribution."
    },
    "zh": {
      "title": "1升 (1000 CC) 本色农用肥料PET大瓶",
      "dimensi": "直径 88 毫米 - 高 235 毫米",
      "berat": "62 克",
      "deskripsi": "1升大容量加厚工业级PET农化瓶，防盗自锁防伪盖，瓶身加强筋增强堆垛刚度，适于大宗叶面肥与有机液肥批发零售。"
    }
  },
  "BOTOL PET 100 CC WITH PUMP": {
    "en": {
      "title": "PET COSMETIC BOTTLE 100 CC WITH PUMP",
      "dimensi": "DIAMETER 38 MM - HEIGHT 135 MM",
      "berat": "22 GR",
      "deskripsi": "100 cc crystal clear PET cosmetic bottle with precision lotion pump dispenser, perfect for sanitizers, toners, and facial serums."
    },
    "zh": {
      "title": "100 CC 洁净PET按压泵头化妆品瓶",
      "dimensi": "直径 38 毫米 - 高 135 毫米",
      "berat": "22 克",
      "deskripsi": "100 CC 高透亮PET化妆品瓶，配备顺畅按压乳液喷泵，出液细腻均匀，适用于免洗消毒凝胶、护肤爽肤水与精华液。"
    }
  },
  "BOTOL PET GOLD 300 CC WITH PUMP": {
    "en": {
      "title": "LUXURY GOLD PET BOTTLE 300 CC WITH PUMP",
      "dimensi": "DIAMETER 56 MM - HEIGHT 175 MM",
      "berat": "35 GR",
      "deskripsi": "300 cc premium amber-gold PET bottle with lockable pump dispenser, providing UV light protection for premium hair and body lotions."
    },
    "zh": {
      "title": "300 CC 琥珀金高端按压泵PET护肤瓶",
      "dimensi": "直径 56 毫米 - 高 175 毫米",
      "berat": "35 克",
      "deskripsi": "300 CC 典雅琥珀金色PET高级瓶，有效阻隔紫外光线保护内部活性成分，配旋转锁扣按压泵，专为高端洗发水与身体乳打造。"
    }
  },
  "BOTOL PET 500 ML WITH PUMP": {
    "en": {
      "title": "PET BOTTLE 500 ML WITH PUMP DISPENSER",
      "dimensi": "DIAMETER 68 MM - HEIGHT 210 MM",
      "berat": "48 GR",
      "deskripsi": "500 ml family-size clear PET pump container suitable for liquid soap, hand washes, shampoos, and hotel personal care amenities."
    },
    "zh": {
      "title": "500 ML 大容量按压泵PET洗护瓶",
      "dimensi": "直径 68 毫米 - 高 210 毫米",
      "berat": "48 克",
      "deskripsi": "500 ML 大容量洁净透明PET按压瓶，手感舒适，泵头回弹迅速，适用于家用洗手液、沐浴露、洗洁精及酒店客房护理。"
    }
  },
  "BOTOL MINYAK GORENG PET 2 LITER ULIR": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 2 LITER (SPIRAL DESIGN)",
      "dimensi": "105 X 105 X 315 MM",
      "berat": "48 GR",
      "deskripsi": "2 Liter PET cooking oil bottle featuring ergonomic spiral ribs for enhanced bottle rigidity and non-slip handling during heavy pouring."
    },
    "zh": {
      "title": "2 升 螺旋加强筋PET食用油瓶",
      "dimensi": "105 X 105 X 315 毫米",
      "berat": "48 克",
      "deskripsi": "2升大容量食用油专用PET瓶，瓶身采用螺旋加强筋设计，显著提高抗压防变形强度，倾倒防滑手感极佳，适于家庭量贩装包装。"
    }
  },
  "BOTOL MINYAK GORENG PET 1,5 LITER": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 1.5 LITER",
      "dimensi": "DIAMETER 92 MM - HEIGHT 295 MM",
      "berat": "42 GR",
      "deskripsi": "1.5 Liter food-grade PET cooking oil bottle featuring ergonomic waist grip and drip-free cap for easy pouring and supermarket display."
    },
    "zh": {
      "title": "1.5 升 食品级PET食用油瓶",
      "dimensi": "直径 92 毫米 - 高 295 毫米",
      "berat": "42 克",
      "deskripsi": "1.5 升食品级高透明PET食用油瓶，人体工学收腰握持设计，配防滴漏油嘴瓶盖，倾倒平稳不漏油，超市货架展示效果极佳。"
    }
  },
  "BOTOL MINYAK GORENG PET 1 LITER A": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 1 LITER (TYPE A)",
      "dimensi": "DIAMETER 80 MM - HEIGHT 265 MM",
      "berat": "32 GR",
      "deskripsi": "Standard 1 Liter PET bottle for vegetable oil and coconut oil packaging with high clarity, food safety compliance, and sturdy base."
    },
    "zh": {
      "title": "1 升 标准A款PET食用植物油瓶",
      "dimensi": "直径 80 毫米 - 高 265 毫米",
      "berat": "32 克",
      "deskripsi": "1升主力规格A款透明PET油瓶，符合FDA/印尼BPOM食品接触标准，晶莹透亮展现纯净油色，螺纹密封防漏性能优异。"
    }
  },
  "BOTOL MINYAK GORENG PET 900 ML": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 900 ML",
      "dimensi": "DIAMETER 76 MM - HEIGHT 255 MM",
      "berat": "30 GR",
      "deskripsi": "900 ml economical size PET bottle designed for competitive retail vegetable oils with lightweight yet durable sidewalls."
    },
    "zh": {
      "title": "900 毫升 经济装PET食用油瓶",
      "dimensi": "直径 76 毫米 - 高 255 毫米",
      "berat": "30 克",
      "deskripsi": "900毫升经济实用型PET植物油瓶，轻量化高刚性结构，降低包装与物流成本，是快消食用油市场畅销包装。"
    }
  },
  "BOTOL MINYAK GORENG PET 800 ML": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 800 ML",
      "dimensi": "DIAMETER 74 MM - HEIGHT 245 MM",
      "berat": "28 GR",
      "deskripsi": "800 ml compact food-grade PET bottle tailored for households and specialized oils like sesame and olive oil blends."
    },
    "zh": {
      "title": "800 毫升 便携装PET食用油瓶",
      "dimensi": "直径 74 毫米 - 高 245 毫米",
      "berat": "28 克",
      "deskripsi": "800毫升精巧型食品级PET瓶，适合家庭日常用油、小磨芝麻油及特种植物油包装，手感小巧握持省力。"
    }
  },
  "BOTOL MINYAK GORENG PET 620 ML": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 620 ML",
      "dimensi": "DIAMETER 68 MM - HEIGHT 228 MM",
      "berat": "24 GR",
      "deskripsi": "620 ml slender PET bottle with elegant lines, suitable for cooking condiments, gourmet culinary oils, and vinegar."
    },
    "zh": {
      "title": "620 毫升 精装PET食用油瓶",
      "dimensi": "直径 68 毫米 - 高 228 毫米",
      "berat": "24 克",
      "deskripsi": "620毫升细长高雅PET调味油瓶，线条优美，耐轻度摔落，适用于高档山茶油、果醋及精品厨房调味液体。"
    }
  },
  "BOTOL MINYAK GORENG PET 250 ML": {
    "en": {
      "title": "PET COOKING OIL BOTTLE 250 ML",
      "dimensi": "DIAMETER 50 MM - HEIGHT 165 MM",
      "berat": "18 GR",
      "deskripsi": "250 ml compact size PET bottle ideal for sample promotions, premium virgin coconut oil, or travel culinary kits."
    },
    "zh": {
      "title": "250 毫升 便携/样品装PET食用油瓶",
      "dimensi": "直径 50 毫米 - 高 165 毫米",
      "berat": "18 克",
      "deskripsi": "250毫升迷你食品级PET瓶，专为初榨椰子油、样品试用装及餐饮单人份调味用油定制，轻巧密封防漏。"
    }
  },
  "GALON PET 19 LITER": {
    "en": {
      "title": "PET WATER GALLON 19 LITER (5 GALLONS)",
      "dimensi": "DIAMETER 270 MM - HEIGHT 490 MM",
      "berat": "680 GR",
      "deskripsi": "Standard 19 Liter (5 Gallon) BPA-free PET mineral water dispenser bottle with ultra-high transparency and drop-tested durability."
    },
    "zh": {
      "title": "19升 (5加仑) 食品级PET纯净水大桶",
      "dimensi": "直径 270 毫米 - 高 490 毫米",
      "berat": "680 克",
      "deskripsi": "19升 (标准5加仑) 无BPA食品级透明PET饮水桶，晶莹透亮如玻璃质感，耐跌落抗冲击，与所有标准饮水机与抽水泵完美兼容。"
    }
  },
  "GALON PET 15 LITER WITH HANDLE": {
    "en": {
      "title": "PET WATER GALLON 15 LITER WITH ERGONOMIC HANDLE",
      "dimensi": "DIAMETER 255 MM - HEIGHT 440 MM",
      "berat": "580 GR",
      "deskripsi": "15 Liter water bottle integrated with an ergonomic solid side handle for effortless lifting, carrying, and inverted dispenser mounting."
    },
    "zh": {
      "title": "15升 带一体式提手PET纯净水桶",
      "dimensi": "直径 255 毫米 - 高 440 毫米",
      "berat": "580 克",
      "deskripsi": "15升带侧身一体化坚固手柄PET饮水桶，省力提携，轻松搬运换水，特别适合现代家庭与办公饮用水配送。"
    }
  },
  "GALON PET KOTAK 5 LITER WITH HANDLE": {
    "en": {
      "title": "SQUARE PET GALLON 5 LITER WITH HANDLE",
      "dimensi": "160 X 160 X 310 MM",
      "berat": "140 GR",
      "deskripsi": "5 Liter square space-efficient PET water container with sturdy top handle, stackable design for refrigerators and pantry storage."
    },
    "zh": {
      "title": "5升 方形便携手提PET纯净水储水桶",
      "dimensi": "160 X 160 X 310 毫米",
      "berat": "140 克",
      "deskripsi": "5升方形紧凑型PET纯净水桶，顶部配结实加粗提手，方体设计紧凑省空间，易于车载外带、冰箱冷藏与厨房收纳。"
    }
  },
  "BOTOL PET MINUMAN BULAT 350 ML / 500 ML": {
    "en": {
      "title": "ROUND BEVERAGE PET BOTTLE 350 ML / 500 ML",
      "dimensi": "DIAMETER 62 MM - HEIGHT 190 MM",
      "berat": "22 GR",
      "deskripsi": "Classic round transparent PET beverage bottle for fresh juices, cold brew coffees, teas, and dairy drinks with tamper-proof cap."
    },
    "zh": {
      "title": "350 ML / 500 ML 圆形即饮饮料PET瓶",
      "dimensi": "直径 62 毫米 - 高 190 毫米",
      "berat": "22 克",
      "deskripsi": "经典圆形通透PET即饮饮料瓶，配防盗自断圈瓶盖，广泛用于鲜榨果汁、冷萃咖啡、奶茶及乳酸菌饮品包装。"
    }
  },
  "BOTOL PET SABUN CAIR 450 ML (PUSH PULL CAP)": {
    "en": {
      "title": "PET LIQUID SOAP BOTTLE 450 ML (PUSH-PULL CAP)",
      "dimensi": "DIAMETER 65 MM - HEIGHT 215 MM",
      "berat": "32 GR",
      "deskripsi": "450 ml PET container fitted with a push-pull closure cap for smooth controlled dispensing of dishwashing liquids and floor soaps."
    },
    "zh": {
      "title": "450 ML 推拉盖PET洗洁精与液体皂瓶",
      "dimensi": "直径 65 毫米 - 高 215 毫米",
      "berat": "32 克",
      "deskripsi": "450毫升配备推拉式密封盖的PET包装瓶，开合顺滑出液可控，专为洗洁精、洗车液及日化清洁剂打造。"
    }
  },
  "BOTOL PET AIR ZAM-ZAM 250 ML": {
    "en": {
      "title": "ZAM-ZAM WATER PET BOTTLE 250 ML",
      "dimensi": "DIAMETER 52 MM - HEIGHT 155 MM",
      "berat": "16 GR",
      "deskripsi": "250 ml specialized PET bottle for packaging and distributing sacred Zam-Zam drinking water and religious gift sets."
    },
    "zh": {
      "title": "250 ML 圣水/朝觐纯净水专用PET瓶",
      "dimensi": "直径 52 毫米 - 高 155 毫米",
      "berat": "16 克",
      "deskripsi": "250毫升专用水包装瓶，高洁净无味无毒，主要用于朝觐麦加圣水、礼品甘露及圣水伴手礼的安全分装。"
    }
  },
  "TOPLES PET BUMBU 200 ML DENGAN FLIP-TOP SHAKER": {
    "en": {
      "title": "PET SPICE JAR 200 ML WITH FLIP-TOP SHAKER LID",
      "dimensi": "DIAMETER 50 MM - HEIGHT 115 MM",
      "berat": "24 GR",
      "deskripsi": "200 ml cylindrical food-grade PET spice shaker jar with dual flip-top lid (pour & sift orifices) for pepper, salt, herbs, and spices."
    },
    "zh": {
      "title": "200 ML 翻盖撒粉双开孔PET调味品密封罐",
      "dimensi": "直径 50 毫米 - 高 115 毫米",
      "berat": "24 克",
      "deskripsi": "200毫升圆柱形食品级PET透明调味罐，配双开翻盖（一侧多孔撒撒粉、一侧大口倒出），保持调料干燥防潮防结块。"
    }
  },
  "JERIGEN 27 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 27 LITER",
      "dimensi": "291 X 232 X 497 MM",
      "berat": "1200 GR",
      "deskripsi": "27 Liter extra-large HDPE jerry can with double-ribbed corners and heavy load rating for industrial fluids, food oils, and detergents."
    },
    "zh": {
      "title": "27 升 HDPE重型工业手提塑料桶",
      "dimensi": "291 X 232 X 497 毫米",
      "berat": "1200 克",
      "deskripsi": "27升超大容量高密度聚乙烯手提桶，桶身边角加强防胀筋，耐强力跌落与堆码，适用于工业助剂、商用食用油及大宗液体转运。"
    }
  },
  "JERIGEN 22 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 22 LITER",
      "dimensi": "290 X 232 X 419.5 MM",
      "berat": "1200 GR",
      "deskripsi": "22 Liter heavy-duty HDPE container offering optimal balance between volumetric capacity and manual handling convenience."
    },
    "zh": {
      "title": "22 升 HDPE工业级手提塑料桶",
      "dimensi": "290 X 232 X 419.5 毫米",
      "berat": "1200 克",
      "deskripsi": "22升工业级防漏塑料桶，兼顾大容量与单人搬运便携性，密闭防渗漏内盖与防盗外盖组合，确保运输安全。"
    }
  },
  "JERIGEN 20 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 20 LITER (STANDARD)",
      "dimensi": "288 X 225 X 398.5 MM",
      "berat": "870 GR",
      "deskripsi": "The industry-standard 20 Liter blow-molded jerry can, universally adopted across automotive fluids, chemicals, and industrial logistics."
    },
    "zh": {
      "title": "20 升 HDPE标准通用型塑料手提桶",
      "dimensi": "288 X 225 X 398.5 毫米",
      "berat": "870 克",
      "deskripsi": "行业标准20升吹塑手提塑料桶，市场占有率最高的主力桶型，具有卓越的耐候性、耐冲击性及标准化堆叠槽。"
    }
  },
  "JERIGEN 20 LITER MGE": {
    "en": {
      "title": "HDPE JERRY CAN 20 LITER (MGE HEAVY REINFORCED)",
      "dimensi": "260 X 230 X 400 MM",
      "berat": "1000 GR",
      "deskripsi": "MGE reinforced 20 Liter jerry can with increased wall thickness (1000g) for severe export conditions and heavy chemical transit."
    },
    "zh": {
      "title": "20 升 MGE型加强款工业塑料桶",
      "dimensi": "260 X 230 X 400 毫米",
      "berat": "1000 克",
      "deskripsi": "MGE型20升特厚重型塑料桶，自重增至1000克，专为极端海运堆垛、重度化学液体及长途颠簸环境特别加固。"
    }
  },
  "JERIGEN 18 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 18 LITER",
      "dimensi": "135 X 85 X 232 MM",
      "berat": "860 GR",
      "deskripsi": "18 Liter versatile jerry can suited for commercial liquid detergents, sanitizers, and workshop maintenance supplies."
    },
    "zh": {
      "title": "18 升 HDPE实用型手提塑料桶",
      "dimensi": "135 X 85 X 232 毫米",
      "berat": "860 克",
      "deskripsi": "18升实用中大型手提桶，广泛用于商用洗衣液、消毒杀菌液、车辆保养清洗液及车间维修辅料存储。"
    }
  },
  "JERIGEN 5 LITER LEBAR": {
    "en": {
      "title": "HDPE JERRY CAN 5 LITER (WIDE STABLE BASE)",
      "dimensi": "240 X 100 X 273 MM",
      "berat": "340 GR",
      "deskripsi": "5 Liter wide-profile jerry can with low center of gravity preventing tip-over during vehicle transit and shelf storage."
    },
    "zh": {
      "title": "5 升 宽体稳固型HDPE手提塑料桶",
      "dimensi": "240 X 100 X 273 毫米",
      "berat": "340 克",
      "deskripsi": "5升宽体加厚手提桶，低重心设计防晃防倾倒，加厚把手提握舒适，适合车载运输与货架平稳陈列。"
    }
  },
  "JERIGEN 5 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 5 LITER (STANDARD)",
      "dimensi": "181 X 126 X 327 MM",
      "berat": "180 GR",
      "deskripsi": "Standard 5 Liter upright jerry can widely used for cleaning solutions, automotive oils, and liquid chemical refills."
    },
    "zh": {
      "title": "5 升 HDPE标准直立手提塑料桶",
      "dimensi": "181 X 126 X 327 毫米",
      "berat": "180 克",
      "deskripsi": "5升标准立式手提桶，日化清洁、汽车冷却液与化工原料最广泛采用的轻便包装，配防漏自锁防伪盖。"
    }
  },
  "JERIGEN 4,5 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 4.5 LITER",
      "dimensi": "180 X 120 X 320 MM",
      "berat": "180 GR",
      "deskripsi": "4.5 Liter blow-molded container offering a slightly compact footprint while preserving robust strength and leak resistance."
    },
    "zh": {
      "title": "4.5 升 HDPE中型手提塑料桶",
      "dimensi": "180 X 120 X 320 毫米",
      "berat": "180 克",
      "deskripsi": "4.5升中型紧凑手提塑料桶，尺寸微调更利于包装纸箱空间集约化利用，坚固耐用防渗透。"
    }
  },
  "JERIGEN 4 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 4 LITER",
      "dimensi": "193 X 123 X 291 MM",
      "berat": "170 GR",
      "deskripsi": "4 Liter standard jerry can, typical size for motor engine oil packaging, radiator coolant, and household liquid refills."
    },
    "zh": {
      "title": "4 升 HDPE汽车养护与日化手提桶",
      "dimensi": "193 X 123 X 291 毫米",
      "berat": "170 克",
      "deskripsi": "4升经典手提桶，机油润滑剂、水箱防冻液与大容量洗洁精通用标准包装，倒液顺畅不挂壁。"
    }
  },
  "JERIGEN 2 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 2 LITER",
      "dimensi": "135 X 85 X 232 MM",
      "berat": "99.6 GR",
      "deskripsi": "2 Liter compact jerry can tailored for retail household chemicals, floor cleaner concentrates, and plant fertilizers."
    },
    "zh": {
      "title": "2 升 HDPE轻便手提塑料桶",
      "dimensi": "135 X 85 X 232 毫米",
      "berat": "99.6 克",
      "deskripsi": "2升小巧手提桶，专为家庭日化浓缩液、地板清洁剂及园艺液体肥料零售包装定制，轻便顺手。"
    }
  },
  "JERIGEN 1,8 LITER": {
    "en": {
      "title": "HDPE JERRY CAN 1.8 LITER",
      "dimensi": "142 X 86 X 236 MM",
      "berat": "90 GR",
      "deskripsi": "1.8 Liter ergonomic small jerry can optimized for consumer retail packs requiring distinct branding and convenient pouring."
    },
    "zh": {
      "title": "1.8 升 HDPE紧凑型塑料手提桶",
      "dimensi": "142 X 86 X 236 毫米",
      "berat": "90 克",
      "deskripsi": "1.8升精细化容量塑料手提桶，便于消费者单手倾倒操作，是差别化快消品包装的理想方案。"
    }
  },
  "JERIGEN 1 LITER TINGGI": {
    "en": {
      "title": "HDPE JERRY CAN 1 LITER (SLENDER TALL)",
      "dimensi": "89 X 64 X 225 MM",
      "berat": "72 GR",
      "deskripsi": "1 Liter tall slender jerry can saving shelf width, easy to grip and pour, ideal for brake fluid and laboratory reagents."
    },
    "zh": {
      "title": "1 升 细长高款HDPE手提塑料桶",
      "dimensi": "89 X 64 X 225 毫米",
      "berat": "72 克",
      "deskripsi": "1升细长型高身手提塑料桶，极度节省货架陈列面宽，易于握持倾倒，常用于制动液、刹车油及实验室试剂。"
    }
  },
  "JERIGEN 1 LITER LEBAR": {
    "en": {
      "title": "HDPE JERRY CAN 1 LITER (WIDE COMPACT)",
      "dimensi": "128 X 71 X 178 MM",
      "berat": "65 GR",
      "deskripsi": "1 Liter wide-base compact jerry can with low profile and high stability, resistant to accidental tipping."
    },
    "zh": {
      "title": "1 升 宽底紧凑款HDPE手提塑料桶",
      "dimensi": "128 X 71 X 178 毫米",
      "berat": "65 克",
      "deskripsi": "1升宽底紧凑型手提桶，低矮稳固不易倾倒，适合工具箱携带及家庭维修护理液体分装。"
    }
  },
  "JERIGEN 500 ML": {
    "en": {
      "title": "HDPE MINI JERRY CAN 500 ML",
      "dimensi": "90 X 64.5 X 129.6 MM",
      "berat": "40 GR",
      "deskripsi": "500 ml miniature jerry can featuring an adorable yet functional mini-handle, perfect for specialty lubricants and additives."
    },
    "zh": {
      "title": "500 ML 迷你HDPE手提塑料小桶",
      "dimensi": "90 X 64.5 X 129.6 毫米",
      "berat": "40 克",
      "deskripsi": "500毫升袖珍微型手提桶，拥有完整的迷你提手与防漏瓶嘴，是特种润滑油、燃油添加剂及礼品包装的热门选择。"
    }
  },
  "JERIGEN 32,5 LITER CHEMICAL BIRU": {
    "en": {
      "title": "HDPE CHEMICAL BLUE JERRY CAN 32.5 LITER",
      "dimensi": "345 X 272 X 443 MM",
      "berat": "1500 GR",
      "deskripsi": "32.5 Liter heavy-gauge blue HDPE chemical container certified for hazardous acids, caustic alkalis, and industrial solvent transport."
    },
    "zh": {
      "title": "32.5 升 HDPE重级蓝色耐酸碱化工桶",
      "dimensi": "345 X 272 X 443 毫米",
      "berat": "1500 克",
      "deskripsi": "32.5升重型深蓝HDPE化工防腐桶，壁厚坚实（自重1500克），高抗内压防爆防渗，专为强酸强碱、工业溶剂及危险化学品储运研发。"
    }
  },
  "JERIGEN 30 KG CHEMICAL BIRU": {
    "en": {
      "title": "HDPE CHEMICAL BLUE JERRY CAN 30 KG",
      "dimensi": "298 X 290 X 516 MM",
      "berat": "1400 GR",
      "deskripsi": "30 kg chemical-grade UN standard blue jerry can designed for high-density liquids, sulfuric acid, hydrogen peroxide, and electroplating chemicals."
    },
    "zh": {
      "title": "30 公斤 (KG) 工业蓝色化工耐酸桶",
      "dimensi": "298 X 290 X 516 毫米",
      "berat": "1400 克",
      "deskripsi": "30公斤重载蓝色化工专用塑料桶，符合国际危包标准，耐硫酸、双氧水及电镀原料等强氧化性介质，抗跌落性能极佳。"
    }
  },
  "JERIGEN 25 KG CHEMICAL BIRU": {
    "en": {
      "title": "HDPE CHEMICAL BLUE JERRY CAN 25 KG",
      "dimensi": "295 X 290 X 455 MM",
      "berat": "1200 GR",
      "deskripsi": "25 kg heavy chemical container with airtight inner vent cap and tamper-proof ring, resistant to environmental stress cracking (ESCR)."
    },
    "zh": {
      "title": "25 公斤 (KG) 工业级防渗漏化工桶",
      "dimensi": "295 X 290 X 455 毫米",
      "berat": "1200 克",
      "deskripsi": "25公斤高强度化工专用防腐桶，配备带气阀透气内塞与防伪锁紧盖，优异的耐环境应力开裂 (ESCR) 性能保障多层堆叠安全。"
    }
  },
  "JERIGEN 20 KG CHEMICAL": {
    "en": {
      "title": "HDPE CHEMICAL JERRY CAN 20 KG",
      "dimensi": "287 X 287 X 381 MM",
      "berat": "900 GR",
      "deskripsi": "20 kg multi-purpose chemical container for industrial water treatment chemicals, chlorine, liquid coagulants, and textile dyes."
    },
    "zh": {
      "title": "20 公斤 (KG) 多功能工业耐酸碱桶",
      "dimensi": "287 X 287 X 381 毫米",
      "berat": "900 克",
      "deskripsi": "20公斤多用途工业化学品包装桶，广泛应用于工业循环水处理药剂、含氯消毒剂、净水絮凝剂及印染化工原料。"
    }
  },
  "JERIGEN OLI 5 LITER": {
    "en": {
      "title": "ENGINE OIL JERRY CAN 5 LITER",
      "dimensi": "209 X 101 X 324.5 MM",
      "berat": "360 GR",
      "deskripsi": "5 Liter premium lubricant bottle engineered with view stripe option, anti-glug neck design, and heat-resistant resin for automotive oils."
    },
    "zh": {
      "title": "5 升 发动机润滑油/机油专用塑料桶",
      "dimensi": "209 X 101 X 324.5 毫米",
      "berat": "360 克",
      "deskripsi": "5升优质机油手提桶，专为润滑油与柴机油包装研发，瓶口具备防飞溅倾倒导流设计，耐油耐温抗渗透，尽显高端品质。"
    }
  },
  "JERIGEN OLI 4,5 LITER": {
    "en": {
      "title": "ENGINE OIL JERRY CAN 4.5 LITER",
      "dimensi": "207.3 X 101.4 X 305.4 MM",
      "berat": "240 GR",
      "deskripsi": "4.5 Liter heavy-duty motor oil container with ergonomic angled handle for smooth controlled dispensing in automotive service centers."
    },
    "zh": {
      "title": "4.5 升 汽车机油与传动油包装桶",
      "dimensi": "207.3 X 101.4 X 305.4 毫米",
      "berat": "240 克",
      "deskripsi": "4.5升车用润滑油脂包装桶，倾斜式握把符合人体力学，倾倒平顺不滴漏，满足4S店与汽修连锁保养用油需求。"
    }
  },
  "JERIGEN OLI 4 LITER": {
    "en": {
      "title": "ENGINE OIL JERRY CAN 4 LITER",
      "dimensi": "209 X 101 X 287 MM",
      "berat": "240 GR",
      "deskripsi": "4 Liter standard passenger car engine oil container, perfectly sized for four-cylinder engine oil changes with robust side labeling area."
    },
    "zh": {
      "title": "4 升 家用车机油标准手提塑料桶",
      "dimensi": "209 X 101 X 287 毫米",
      "berat": "240 克",
      "deskripsi": "4升家用轿车机油标准包装桶，四缸发动机换油标准黄金容量，大面积模内贴标/不干胶贴标区域，提升品牌形象。"
    }
  },
  "JERIGEN LIPAT 5 LITER": {
    "en": {
      "title": "COLLAPSIBLE WATER JERRY CAN 5 LITER",
      "dimensi": "205 X 181 X 181 MM",
      "berat": "140 GR",
      "deskripsi": "5 Liter flexible food-grade LDPE folding water container with integrated on/off dispensing spigot, packs flat for emergency storage and outdoor travel."
    },
    "zh": {
      "title": "5 升 食品级折叠便携储水水桶",
      "dimensi": "205 X 181 X 181 毫米",
      "berat": "140 克",
      "deskripsi": "5升食品级柔性低密度聚乙烯 (LDPE) 折叠水桶，自带旋转开关水龙头，空桶可彻底压平折叠，专为应急备灾、露营野炊与户外自驾研制。"
    }
  },
  "BOTOL M 1 LITER PANJANG": {
    "en": {
      "title": "TALL HDPE BOTTLE 1 LITER (M-SERIES)",
      "dimensi": "DIAMETER 85 MM - HEIGHT 230 MM",
      "berat": "80 GR",
      "deskripsi": "Tall slender 1 Liter HDPE bottle offering excellent shelf utilization, chemical resistance, and secure sealing for laboratory and industrial liquids."
    },
    "zh": {
      "title": "1 升 细长高款HDPE塑料瓶 (M系列)",
      "dimensi": "直径 85 毫米 - 高 230 毫米",
      "berat": "80 克",
      "deskripsi": "1升高身细长型HDPE高密度聚乙烯瓶，具有出色的耐酸碱化学稳定性与耐摔性，广泛用于实验室试剂、工业助剂及液体清洗剂。"
    }
  },
  "BOTOL M 1000 MK TUTUP TAKAR": {
    "en": {
      "title": "M1000 MK HDPE BOTTLE WITH MEASURING CUP CAP",
      "dimensi": "205 X 181 X 181 MM",
      "berat": "140 GR",
      "deskripsi": "1000 ml HDPE dosing bottle with graduated measuring cup cap for precise liquid dispensing in agrochemicals, cleaners, and concentrates."
    },
    "zh": {
      "title": "M1000 MK 带刻度量杯盖HDPE计量瓶",
      "dimensi": "205 X 181 X 181 毫米",
      "berat": "140 克",
      "deskripsi": "1000毫升配备精准刻度量杯盖的HDPE专业瓶，无需额外量具即可快速精确配比倒取药液，是农药配比与浓缩清洁剂的首选。"
    }
  },
  "BOTOL M 1000": {
    "en": {
      "title": "STANDARD HDPE BOTTLE 1000 ML (M1000)",
      "dimensi": "DIAMETER 98.5 MM - HEIGHT 216 MM",
      "berat": "80 GR",
      "deskripsi": "Standard round 1000 ml HDPE chemical bottle with heavy-duty neck thread and leak-proof seal for versatile industrial packaging."
    },
    "zh": {
      "title": "1000 ML 标准圆型HDPE化工塑料瓶",
      "dimensi": "直径 98.5 毫米 - 高 216 毫米",
      "berat": "80 克",
      "deskripsi": "1000毫升标准圆形高密度聚乙烯瓶，加厚平底稳固抗摔，高密封度防脱螺纹，适用于各类工业液体、润滑油精及化工中间体。"
    }
  },
  "BOTOL KOTAK 0,5 KG": {
    "en": {
      "title": "SQUARE HDPE BOTTLE 0.5 KG (500 ML)",
      "dimensi": "72.5 X 72.5 X 130 MM",
      "berat": "35 GR",
      "deskripsi": "Square-shaped 0.5 kg capacity HDPE container optimizing carton packing space by 30% compared to round bottles, ideal for powder and liquid chemicals."
    },
    "zh": {
      "title": "0.5 公斤 (500 ML) 方形HDPE塑料瓶",
      "dimensi": "72.5 X 72.5 X 130 毫米",
      "berat": "35 克",
      "deskripsi": "方形紧凑设计0.5公斤容量HDPE瓶，相比传统圆瓶节省超30%包装纸箱与托盘空间，适用于粉末试剂、化工颗粒及液体助剂包装。"
    }
  },
  "BOTOL KOTAK 1 KG": {
    "en": {
      "title": "SQUARE HDPE BOTTLE 1 KG (1000 ML)",
      "dimensi": "89 X 89 X 161 MM",
      "berat": "75 GR",
      "deskripsi": "1 kg capacity square HDPE bottle offering space-saving packing and strong corner impact resistance for industrial dry and liquid products."
    },
    "zh": {
      "title": "1 公斤 (1000 ML) 方形加厚HDPE塑料瓶",
      "dimensi": "89 X 89 X 161 毫米",
      "berat": "75 克",
      "deskripsi": "1公斤大容量方形HDPE瓶，棱角加厚抗摔，整齐码放省空间，适用于兽药原料粉、食品添加剂及工业固液体包装。"
    }
  },
  "BOTOL BIOCLIN": {
    "en": {
      "title": "BIOCLIN HDPE BOTTLE (ERGONOMIC CLEANER)",
      "dimensi": "DIAMETER 87.5 MM - HEIGHT 244 MM",
      "berat": "65 GR",
      "deskripsi": "Ergonomically contoured HDPE bottle tailored for household toilet cleaners, tile degreasers, and acidic bathroom solutions."
    },
    "zh": {
      "title": "BIOCLIN 人体工学强力洁厕液专用瓶",
      "dimensi": "直径 87.5 毫米 - 高 244 毫米",
      "berat": "65 克",
      "deskripsi": "专为酸性洁厕剂、瓷砖去油污清洗剂研发的人体工学HDPE瓶，耐强酸腐蚀，握持倾倒防滑顺手，配专业防溅导流嘴。"
    }
  },
  "BOTOL LYSOL 1 LITER": {
    "en": {
      "title": "LYSOL TYPE HDPE DISINFECTANT BOTTLE 1 L",
      "dimensi": "DIAMETER 97.2 MM - HEIGHT 200 MM",
      "berat": "110 GR",
      "deskripsi": "Heavy-walled 1 Liter HDPE bottle designed for hospital-grade disinfectant liquids, bleaches, and concentrated sanitizers."
    },
    "zh": {
      "title": "1 升 加厚型消毒杀菌液HDPE塑料瓶",
      "dimensi": "直径 97.2 毫米 - 高 200 毫米",
      "berat": "110 克",
      "deskripsi": "110克超厚壁1升高密度聚乙烯瓶，耐次氯酸钠84消毒液与酚类消毒剂腐蚀，不透光抗紫外线，保障医用及家庭消毒剂品质稳定。"
    }
  },
  "BOTOL HYDRO": {
    "en": {
      "title": "HYDRO HDPE BOTTLE (COMPACT WIDE NECK)",
      "dimensi": "DIAMETER 82 MM - HEIGHT 147 MM",
      "berat": "57.2 GR",
      "deskripsi": "Compact HDPE bottle with wide neck for easy filling and pouring of viscous liquids, liquid plant foods, and biochemical mixtures."
    },
    "zh": {
      "title": "HYDRO 短款广口高强度HDPE瓶",
      "dimensi": "直径 82 毫米 - 高 147 毫米",
      "berat": "57.2 克",
      "deskripsi": "矮胖款大口径HDPE塑料瓶，加料灌装极速顺畅，适用于水培营养浓缩液、粘稠液体胶体及生化助剂包装。"
    }
  },
  "BOTOL 500 CC NECK 24 MM WITH PUMP": {
    "en": {
      "title": "HDPE BOTTLE 500 CC (24 MM PUMP DISPENSER)",
      "dimensi": "DIAMETER 65.5 MM - HEIGHT 133 MM",
      "berat": "53.4 GR",
      "deskripsi": "500 cc HDPE round bottle fitted with a 24 mm neck lotion pump dispenser, suitable for institutional soaps, lotions, and barrier creams."
    },
    "zh": {
      "title": "500 CC HDPE按压泵头洗手液瓶 (口径24MM)",
      "dimensi": "直径 65.5 毫米 - 高 133 毫米",
      "berat": "53.4 克",
      "deskripsi": "500 CC 圆柱形HDPE塑料瓶配24mm口径乳液泵，耐酸碱耐油脂，适合工厂车间洗手液、医用洗手消毒凝胶及工业护手膏包装。"
    }
  },
  "BOTOL 500 CC NECK 28 MM WITH PUMP": {
    "en": {
      "title": "HDPE BOTTLE 500 CC (28 MM HEAVY PUMP)",
      "dimensi": "DIAMETER 74 MM - HEIGHT 169 MM",
      "berat": "58.4 GR",
      "deskripsi": "500 cc HDPE bottle paired with a robust 28 mm pump for high-viscosity gels, heavy lubricants, and commercial wash formulations."
    },
    "zh": {
      "title": "500 CC HDPE高流量按压泵瓶 (口径28MM)",
      "dimensi": "直径 74 毫米 - 高 169 毫米",
      "berat": "58.4 克",
      "deskripsi": "500 CC 配28mm大口径强劲抽吸泵的HDPE瓶，出液通畅无堵塞，特别适合高粘度凝胶、磨砂洗手膏及商用洗涤凝露。"
    }
  },
  "BOTOL OLI 900 ML": {
    "en": {
      "title": "MOTORCYCLE ENGINE OIL BOTTLE 900 ML",
      "dimensi": "129.5 X 81.3 X 215.5 MM",
      "berat": "80 GR",
      "deskripsi": "900 ml specially contoured oil bottle with narrow spout neck, ideal for motorcycle 4T/2T engine lubricant packaging."
    },
    "zh": {
      "title": "900 ML 摩托车四冲程机油专用HDPE瓶",
      "dimensi": "129.5 X 81.3 X 215.5 毫米",
      "berat": "80 克",
      "deskripsi": "900毫升异型机油瓶，配备细长注油弯嘴导流设计，精准匹配摩托车4T/2T机油加注口，无外溢无漏油。"
    }
  },
  "BOTOL M 50-500 ML": {
    "en": {
      "title": "M-SERIES MULTI-SIZE HDPE BOTTLES (50-500 ML)",
      "dimensi": "DIAMETER 36.5 - 70 MM - HEIGHT 68.8 - 181 MM",
      "berat": "9 - 40 GR",
      "deskripsi": "Complete series of versatile M-Series HDPE containers available from 50 ml to 500 ml for pharmaceutical, agrochemical, and lab samples."
    },
    "zh": {
      "title": "M系列多规格全能HDPE试剂与样品瓶 (50-500 ML)",
      "dimensi": "直径 36.5 至 70 毫米 - 高 68.8 至 181 毫米",
      "berat": "9 至 40 克",
      "deskripsi": "M系列多规格高密度聚乙烯塑料瓶家族（涵盖50ml、100ml、250ml、500ml），统一标准化外观，适合药化取样与产品系列化包装。"
    }
  },
  "KALENG PLASTIK 0,75 KG": {
    "en": {
      "title": "PLASTIC CANISTER 0.75 KG (PAINT & CHEMICAL)",
      "dimensi": "DIAMETER 114 MM - HEIGHT 108.5 MM",
      "berat": "55 GR",
      "deskripsi": "0.75 kg compact plastic can with airtight snap-on lid, corrosion-proof alternative to tinplate for specialty coatings and grease."
    },
    "zh": {
      "title": "0.75 公斤 (KG) 密封防锈工业塑料罐",
      "dimensi": "直径 114 毫米 - 高 108.5 毫米",
      "berat": "55 克",
      "deskripsi": "0.75公斤小规格塑料罐配密封卡扣盖，彻底取代传统易锈马口铁罐，防潮耐酸碱，适用于特种防腐漆、润滑脂与胶粘剂。"
    }
  },
  "KALENG PLASTIK 1 KG": {
    "en": {
      "title": "PLASTIC CANISTER 1 KG (COATING & PASTE)",
      "dimensi": "DIAMETER 114 MM - HEIGHT 132 MM",
      "berat": "58 GR",
      "deskripsi": "1 kg standard plastic canister widely used for architectural paint pastes, wood putty, ink, and automotive refinishing compounds."
    },
    "zh": {
      "title": "1 公斤 (KG) 标准工业涂料与腻子塑料罐",
      "dimensi": "直径 114 毫米 - 高 132 毫米",
      "berat": "58 克",
      "deskripsi": "1公斤零售黄金规格工业塑料罐，盖体密封牢固，开合方便耐摔击，广泛用于内外墙涂料色浆、原子灰腻子、油墨及车漆辅料。"
    }
  },
  "PAIL 1 KG MB2 NATURAL": {
    "en": {
      "title": "PLASTIC PAIL 1 KG (MB2 NATURAL FOOD GRADE)",
      "dimensi": "DIAMETER 132.2 MM - HEIGHT 121.4 MM",
      "berat": "55 GR",
      "deskripsi": "1 kg translucent natural food-grade plastic bucket with airtight tamper-evident lid and handle for jams, dairy, and confectionery pastes."
    },
    "zh": {
      "title": "1 公斤 MB2本色食品级带提手密封圆桶",
      "dimensi": "直径 132.2 毫米 - 高 121.4 毫米",
      "berat": "55 克",
      "deskripsi": "1公斤本色半透明食品级MB2小圆桶，配备防伪易撕拉密封盖与塑料提手，安全无味，是烘焙果酱、乳酪及调味酱的理想包装。"
    }
  },
  "PAIL 1 KG MB2 PUTIH SUSU": {
    "en": {
      "title": "PLASTIC PAIL 1 KG (MB2 MILK WHITE)",
      "dimensi": "DIAMETER 114 MM - HEIGHT 108.5 MM",
      "berat": "55 GR",
      "deskripsi": "1 kg opaque milk-white plastic pail offering superior UV shielding for light-sensitive coatings, wax, and specialty chemicals."
    },
    "zh": {
      "title": "1 公斤 MB2乳白色遮光防紫外线塑料桶",
      "dimensi": "直径 114 毫米 - 高 108.5 毫米",
      "berat": "55 克",
      "deskripsi": "1公斤高纯净乳白色塑料小桶，遮光抗光敏变质，严密锁扣防泄漏，适用于光敏感乳胶漆、汽车抛光蜡及高档化学品。"
    }
  },
  "PAIL 5 KG PANJANG": {
    "en": {
      "title": "PLASTIC PAIL 5 KG (TALL CYLINDER WITH HANDLE)",
      "dimensi": "DIAMETER 167 MM - HEIGHT 199 MM",
      "berat": "200 GR",
      "deskripsi": "5 kg heavy-duty tall cylinder plastic bucket with reinforced metal or polymer bail handle for commercial wall paints, waterproof pastes, and bulk food ingredients."
    },
    "zh": {
      "title": "5 公斤 高筒型带坚固提手塑料桶",
      "dimensi": "直径 167 毫米 - 高 199 毫米",
      "berat": "200 克",
      "deskripsi": "5公斤深筒加厚工业塑料桶，配备加粗舒适提手，抗跌落耐重压，广泛用于建筑防水涂料、商用调味膏及大包装食品原料。"
    }
  },
  "PAIL 10 KG MB2": {
    "en": {
      "title": "INDUSTRIAL PLASTIC PAIL 10 KG (MB2)",
      "dimensi": "DIAMETER 322 MM - HEIGHT 263.5 MM",
      "berat": "365 GR",
      "deskripsi": "10 kg industrial-grade plastic bucket with tamper-evident tear strip lid and ergonomic handle for construction chemicals and adhesives."
    },
    "zh": {
      "title": "10 公斤 MB2工业级重型涂料密封桶",
      "dimensi": "直径 322 毫米 - 高 263.5 毫米",
      "berat": "365 克",
      "deskripsi": "10公斤大容量工业注塑桶，具有防伪撕拉安全盖与抗疲劳把手，耐受苛刻的堆垛重载，是建筑胶粘剂与工业油漆的标准桶型。"
    }
  },
  "PAIL 25 KG MB5": {
    "en": {
      "title": "HEAVY DUTY INDUSTRIAL PAIL 25 KG (MB5)",
      "dimensi": "DIAMETER 322 MM - HEIGHT 370 MM",
      "berat": "760 GR",
      "deskripsi": "25 kg heavy-gauge UN-rated industrial plastic pail featuring heavy rim reinforcement and airtight gasket seal for bulk hazardous and non-hazardous products."
    },
    "zh": {
      "title": "25 公斤 MB5超重型工业级带胶条大桶",
      "dimensi": "直径 322 毫米 - 高 370 毫米",
      "berat": "760 克",
      "deskripsi": "25公斤大容量高刚性工业塑料桶（自重达760克），口沿多重加强筋，配备发泡胶条气密密封盖，专为大宗危险/非危化工原料堆码储运打造。"
    }
  },
  "FLOAT BALL 30 CM": {
    "en": {
      "title": "MARINE TRAWL FLOAT BALL 30 CM",
      "dimensi": "DIAMETER 300 MM",
      "berat": "1300 GR",
      "deskripsi": "30 cm high-buoyancy rotomolded marine float ball engineered with UV-stabilized virgin polymer for deep-sea fishing nets and aquaculture demarcation."
    },
    "zh": {
      "title": "30 厘米 海洋捕捞高浮力耐压浮球",
      "dimensi": "直径 300 毫米",
      "berat": "1300 克",
      "deskripsi": "30厘米高强度抗压海洋浮球，采用抗紫外线耐海水腐蚀原生聚合物注塑，浮力充沛，适合深海拖网、围网及近海养殖浮标标记。"
    }
  },
  "FLOAT BALL 36 CM": {
    "en": {
      "title": "MARINE AQUACULTURE FLOAT BALL 36 CM",
      "dimensi": "DIAMETER 360 MM",
      "berat": "2000 GR",
      "deskripsi": "36 cm heavy-duty marine buoy with thick wall thickness (2000g), engineered to withstand wave slamming and long-term seawater exposure."
    },
    "zh": {
      "title": "36 厘米 深水养殖抗风浪浮球 (重2000克)",
      "dimensi": "直径 360 毫米",
      "berat": "2000 克",
      "deskripsi": "36厘米重型抗风浪网箱养殖浮球，壁厚坚韧达2000克自重，耐强海流冲击与长时间暴晒，是抗风浪深水网箱养殖的基石浮体。"
    }
  },
  "FLOAT BALL 40 CM": {
    "en": {
      "title": "EXTRA LARGE MARINE BUOY FLOAT BALL 40 CM",
      "dimensi": "DIAMETER 400 MM",
      "berat": "2300 GR",
      "deskripsi": "40 cm maximum-buoyancy marine float ball designed for heavy aquaculture cages, commercial longline fishing, and marine navigation aids."
    },
    "zh": {
      "title": "40 厘米 特大号海洋极高浮力工程浮标球",
      "dimensi": "直径 400 毫米",
      "berat": "2300 克",
      "deskripsi": "40厘米超大容积深海浮标球，提供超大静浮力，经久耐磨抗藤壶附着，专为重型网箱平台、延绳钓捕捞与海上工程导标定制。"
    }
  },
  "CONTAINER SOFT SHELLED CRAB": {
    "en": {
      "title": "SOFT-SHELLED CRAB APARTMENT BOX",
      "dimensi": "260 X 207 X 105 MM",
      "berat": "232 GR",
      "deskripsi": "Dedicated aquaculture isolation box for soft-shelled crab molting and farming, with self-draining water holes to prevent cannibalism and boost survival rates."
    },
    "zh": {
      "title": "软壳蟹与青蟹生态立体养殖盒 (蟹公寓)",
      "dimensi": "260 X 207 X 105 毫米",
      "berat": "232 克",
      "deskripsi": "软壳蟹独立脱壳养殖专用盒（蟹公寓），设计有精密自排水孔与防残食隔间，极大提高蜕壳成活率与品相，便于立体层叠高效养殖。"
    }
  },
  "CLAM BASKET TYPE 01": {
    "en": {
      "title": "VENTILATED CLAM & SHELLFISH BASKET (TYPE 01)",
      "dimensi": "700 X 200 X 200 MM",
      "berat": "1.41 KG",
      "deskripsi": "Long rectangular shellfish rearing basket (700x200x200 mm) with flow-through mesh designed for oyster, clam, and mussel offshore cultivation lines."
    },
    "zh": {
      "title": "贝类与牡蛎吊养长条透气网筐 (型号 01)",
      "dimensi": "700 X 200 X 200 毫米",
      "berat": "1.41 千克",
      "deskripsi": "700x200x200毫米长条型贝类养殖筐，四周精密海水流动网孔促进藻类摄食，耐海水盐蚀，适用于生蚝、文蛤与扇贝的浮筏吊养。"
    }
  },
  "CLAM BASKET TYPE 02": {
    "en": {
      "title": "SLENDER SHELLFISH NURSERY BASKET (TYPE 02)",
      "dimensi": "850 X 150 X 150 MM",
      "berat": "1.2 KG",
      "deskripsi": "Slender and lightweight 850x150x150 mm shellfish basket designed for high-density cage suspension and easy handling during offshore harvesting."
    },
    "zh": {
      "title": "贝类与海产采收细长条筐 (型号 02)",
      "dimensi": "850 X 150 X 150 毫米",
      "berat": "1.2 千克",
      "deskripsi": "850x150x150毫米细长轻巧型海产培育筐，适于狭窄网箱通道穿梭操作，材质坚固耐海水盐雾腐蚀，便于高效分选与起捕运输。"
    }
  }
};

/**
 * Returns localized product fields based on current language
 */
export function getLocalizedProduct(
  product: {
    title: string;
    dimensi: string;
    berat: string;
    deskripsi: string;
    imagePath?: string;
    subtitle?: string;
  },
  lang: Language
) {
  if (lang !== "en" && lang !== "zh") {
    return product;
  }

  const overrides = productTranslations[product.title]?.[lang];
  if (!overrides) {
    return product;
  }

  return {
    ...product,
    title: overrides.title || product.title,
    dimensi: overrides.dimensi || product.dimensi,
    berat: overrides.berat || product.berat,
    deskripsi: overrides.deskripsi || product.deskripsi,
    subtitle: overrides.subtitle || product.subtitle,
  };
}
