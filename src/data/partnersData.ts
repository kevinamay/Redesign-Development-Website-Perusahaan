import { Language } from "./translations";

export interface PartnerSector {
  id: string;
  en: string;
  zh: string;
}

export interface Partner {
  name: string;
  logo: string;
  sector: Record<Language, string>;
}

export const partnersList: Partner[] = [
  {
    name: "PT. Additon Karya Sembada",
    logo: "/images/logo/additon.png",
    sector: {
      id: "Bahan Kimia Konstruksi & Aditif Beton",
      en: "Construction Chemicals & Concrete Admixtures",
      zh: "建筑化学品与混凝土外加剂",
    },
  },
  {
    name: "PT. ALP Petro Industry",
    logo: "/images/logo/alp petro.png",
    sector: {
      id: "Manufaktur Minyak Pelumas, Kimia Industri & Blending Oli",
      en: "Lubricant Oil Manufacturing, Chemical Blending & Petrochemicals",
      zh: "工业润滑油精炼、润滑剂调配与石化化学品制造",
    },
  },
  {
    name: "PT. Aneka Indomakmur (AIM Biscuits)",
    logo: "/images/logo/aim biscuits.png",
    sector: {
      id: "Industri Biskuit & Makanan Ringan",
      en: "Biscuits & Confectionery Industry",
      zh: "饼干与休闲食品产业",
    },
  },
  {
    name: "PT. Asian Agri",
    logo: "/images/logo/asian agri.png",
    sector: {
      id: "Agribisnis Minyak Kelapa Sawit & Produk Pangan Terpadu",
      en: "Integrated Palm Oil Agribusiness & Sustainable Food Products",
      zh: "综合棕榈油农业与可持续绿色粮油生产",
    },
  },
  {
    name: "PT. Atlantic Biruraya (Cheers Water)",
    logo: "/images/logo/cheers.png",
    sector: {
      id: "Air Minum Dalam Kemasan & Minuman Sehat Beralkali",
      en: "Healthy Alkaline Drinking Water & Bottled Beverages",
      zh: "健康碱性饮用水及瓶装饮品产业",
    },
  },
  {
    name: "PT. Dua Kelinci",
    logo: "/images/logo/dua kelinci.png",
    sector: {
      id: "Industri Pangan Olahan, Kacang & Makanan Ringan",
      en: "Food Manufacturing, Peanuts & Confectionery Snacks",
      zh: "食品制造、坚果与休闲零食产业",
    },
  },
  {
    name: "PT. Faber-Castell International Indonesia",
    logo: "/images/logo/faber castell.png",
    sector: {
      id: "Manufaktur Alat Tulis, Gambar & Perlengkapan Seni Global",
      en: "Global Writing Instruments, Drawing & Art Supplies Manufacturing",
      zh: "全球知名书写工具、美术用品与文具制造",
    },
  },
  {
    name: "PT. Gloria Origita Cosmetics (Purbasari)",
    logo: "/images/logo/purbasari.png",
    sector: {
      id: "Produk Perawatan Tubuh, Kosmetik & Skincare Nusantara",
      en: "Traditional Body Care, Cosmetics & Modern Skincare",
      zh: "印尼传统身体护理、美妆与个人护肤品",
    },
  },
  {
    name: "Greenfields",
    logo: "/images/logo/greenfileds.png",
    sector: {
      id: "Industri Susu & Olahan Pangan",
      en: "Dairy & Beverage Industry",
      zh: "乳制品与饮品产业",
    },
  },
  {
    name: "PT HM Sampoerna Tbk",
    logo: "/images/logo/sampoerna.png",
    sector: {
      id: "Industri Tembakau & Produk Konsumen (FMCG)",
      en: "Tobacco & Consumer Goods Industry (FMCG)",
      zh: "烟草及快速消费品产业",
    },
  },
  {
    name: "PT. Indo Acidatama Tbk",
    logo: "/images/logo/indo acidatama.png",
    sector: {
      id: "Bahan Kimia & Agroindustri",
      en: "Chemicals & Agro-Industry",
      zh: "化工与农业综合产业",
    },
  },
  {
    name: "PT. Indofood Sukses Makmur Tbk",
    logo: "/images/logo/indofood.png",
    sector: {
      id: "Industri Pangan Olahan & Total Food Solutions",
      en: "Food Processing & Total Food Solutions",
      zh: "综合食品制造与全面食品方案",
    },
  },
  {
    name: "PT. Inti Daya Guna Aneka Warna (INDANA)",
    logo: "/images/logo/indana.png",
    sector: {
      id: "Industri Cat & Pelapis Permukaan",
      en: "Paints & Surface Coatings Industry",
      zh: "涂料与表面保护漆产业",
    },
  },
  {
    name: "PT. Jadi Abadi Corak Biscuit (Jacobis)",
    logo: "/images/logo/jacobis.png",
    sector: {
      id: "Industri Biskuit, Wafer, Cookies & Makanan Ringan Ekspor",
      en: "Biscuits, Wafers, Cookies & Confectionery Export Manufacturing",
      zh: "大型饼干制造、威化曲奇与休闲食品出口产业",
    },
  },
  {
    name: "Kelaya Hair Treatment",
    logo: "/images/logo/kelaya.png",
    sector: {
      id: "Perawatan Pribadi & Kosmetik",
      en: "Personal Care & Cosmetics",
      zh: "个人护理与美妆",
    },
  },
  {
    name: "Kementerian Koperasi dan UKM RI",
    logo: "/images/logo/kemenkopukm.png",
    sector: {
      id: "Kementerian Pembinaan Koperasi & UKM RI",
      en: "Ministry of Cooperatives & SMEs Republic of Indonesia",
      zh: "印度尼西亚共和国合作社与中小微企业部",
    },
  },
  {
    name: "Kimia Farma",
    logo: "/images/logo/kimia farma.png",
    sector: {
      id: "Farmasi & Layanan Kesehatan",
      en: "Pharmaceutical & Healthcare",
      zh: "制药与健康医疗",
    },
  },
  {
    name: "PT. Konimex",
    logo: "/images/logo/konimex.png",
    sector: {
      id: "Industri Farmasi, Layanan Kesehatan & Makanan Konsumen",
      en: "Pharmaceuticals, Healthcare Products & Consumer Foods",
      zh: "制药、健康医疗与高品质消费食品产业",
    },
  },
  {
    name: "MAKO Cake and Bakery",
    logo: "/images/logo/mako.png",
    sector: {
      id: "Industri Roti, Kue Butik & Produk Pastry Premium",
      en: "Japanese-Inspired Boutique Bakery, Cakes & Premium Pastry",
      zh: "日式精品烘焙、精致蛋糕与优质西点产业",
    },
  },
  {
    name: "Mak",
    logo: "/images/logo/mak.png",
    sector: {
      id: "Produk Rumah Tangga & Kimia",
      en: "Household & Chemical Products",
      zh: "家居及化学产品",
    },
  },
  {
    name: "PT. Megasurya Mas",
    logo: "/images/logo/megasurya.png",
    sector: {
      id: "Minyak Nabati & Sabun Industri",
      en: "Edible Oils & Soap Industry",
      zh: "食用油与洗涤工业",
    },
  },
  {
    name: "PT. Mikatasa Agung",
    logo: "/images/logo/mikatasa.png",
    sector: {
      id: "Manufaktur Perekat, Lem Industri & Cat Pelapis",
      en: "Industrial Adhesives, Sealants & Surface Paint Coatings",
      zh: "工业粘合剂、胶粘剂与建筑涂料制造",
    },
  },
  {
    name: "MS Glow Skincare",
    logo: "/images/logo/ms glow.png",
    sector: {
      id: "Kecantikan & Skincare",
      en: "Beauty & Skincare",
      zh: "美妆护肤品牌",
    },
  },
  {
    name: "PT. Multi Sarana Indotani",
    logo: "/images/logo/multi sarana.png",
    sector: {
      id: "Agrokimia & Perlindungan Tanaman",
      en: "Agrochemicals & Crop Protection",
      zh: "农药与农化科技",
    },
  },
  {
    name: "PT. Nippon Paint Indonesia",
    logo: "/images/logo/nippon paint.png",
    sector: {
      id: "Manufaktur Cat & Pelapis Berkualitas Global",
      en: "Global Coatings & Decorative Paint Manufacturing",
      zh: "全球高品质涂料与装饰漆制造",
    },
  },
  {
    name: "OT Group (Orang Tua)",
    logo: "/images/logo/ot.png",
    sector: {
      id: "Industri Makanan, Minuman & Produk Konsumen (FMCG)",
      en: "Food, Beverage & Fast-Moving Consumer Goods (FMCG)",
      zh: "食品、饮料与快速消费品产业 (FMCG)",
    },
  },
  {
    name: "PT. Pacific Paint (Since 1943)",
    logo: "/images/logo/pacific paint.png",
    sector: {
      id: "Manufaktur Cat & Pelapis Permukaan Pelopor di Indonesia",
      en: "Pioneering Paint & Architectural Coating Manufacturing",
      zh: "印尼老字号涂料与建筑表面涂层制造",
    },
  },
  {
    name: "PT. Panfila Indosari (RON 88)",
    logo: "/images/logo/ron88.png",
    sector: {
      id: "Air Minum Dalam Kemasan (AMDK) & Air Mineral Alami",
      en: "Bottled Drinking Water & Natural Mineral Water",
      zh: "天然矿泉水与高品质饮用水制造",
    },
  },
  {
    name: "Petrokimia Kayaku",
    logo: "/images/logo/petrokimia.png",
    sector: {
      id: "Formulasi Pestisida & Pupuk",
      en: "Pesticides & Fertilizers",
      zh: "农化制剂与肥料",
    },
  },
  {
    name: "PT Petrosida Gresik",
    logo: "/images/logo/petrosida.png",
    sector: {
      id: "Industri Agrokimia Terpadu",
      en: "Integrated Agrochemicals",
      zh: "综合农化生产",
    },
  },
  {
    name: "PT. PIM Pharmaceuticals",
    logo: "/images/logo/pim.png",
    sector: {
      id: "Farmasi, Obat-obatan & Suplemen Kesehatan",
      en: "Pharmaceuticals & Healthcare Supplements",
      zh: "制药与健康医药制品",
    },
  },
  {
    name: "PT. Pupuk Kujang Cikampek",
    logo: "/images/logo/pomal.png",
    sector: {
      id: "Produsen Pupuk Nasional BUMN",
      en: "National Fertilizer SOE",
      zh: "国家级化肥制造",
    },
  },
  {
    name: "PT. Realfood Winta Asia (Realfood)",
    logo: "/images/logo/realfood.png",
    sector: {
      id: "Makanan & Minuman Sehat Sarang Burung Walet",
      en: "Edible Bird's Nest Health & Wellness Beverages",
      zh: "印尼天然燕窝健康饮品与滋补营养食品",
    },
  },
  {
    name: "Rumah Kreatif BUMN (RKB)",
    logo: "/images/logo/rumah bumn.png",
    sector: {
      id: "Pusat Edukasi, Pengembangan & Pembinaan UMKM Indonesia",
      en: "MSME Incubation, Digitalization & Empowerment Hub",
      zh: "印尼中小微企业数字化与创业孵化发展中心",
    },
  },
  {
    name: "PT. Serena Indopangan Industri",
    logo: "/images/logo/serena.png",
    sector: {
      id: "Industri Biskuit, Cookies & Makanan Ringan Berkualitas",
      en: "Premium Biscuits, Cookies & Confectionery Manufacturing",
      zh: "优质休闲饼干、曲奇与西点制造产业",
    },
  },
  {
    name: "SIMP",
    logo: "/images/logo/simp.png",
    sector: {
      id: "Agribisnis Kelapa Sawit & Pangan",
      en: "Agribusiness & Food Processing",
      zh: "农业综合与食品加工",
    },
  },
  {
    name: "Sinarmas Agribusiness and Food",
    logo: "/images/logo/sinarmas.png",
    sector: {
      id: "Agribisnis Global & FMCG",
      en: "Agribusiness & Global FMCG",
      zh: "金光集团农业与日化",
    },
  },
  {
    name: "Tjiwi Kimia Paper Products",
    logo: "/images/logo/twijikimia.png",
    sector: {
      id: "Industri Kertas & Kemasan",
      en: "Paper & Packaging Products",
      zh: "造纸与工业包装",
    },
  },
  {
    name: "PT Tunas Baru Lampung",
    logo: "/images/logo/tunasbaru.png",
    sector: {
      id: "Perkebunan & Minyak Goreng",
      en: "Plantation & Edible Oils",
      zh: "种植业与食用油制品",
    },
  },
  {
    name: "Wilmar",
    logo: "/images/logo/wilmar.png",
    sector: {
      id: "Rantai Pasok Agribisnis Global",
      en: "Global Agribusiness Supply Chain",
      zh: "丰益国际全球粮油产业链",
    },
  },
];
