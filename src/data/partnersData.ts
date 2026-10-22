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

// 16 Official Partners of CV. Asia Plastik (arranged in exact 4x4 matrix matching official corporate brand list)
export const partnersList: Partner[] = [
  // ROW 1
  {
    name: "Petrokimia Kayaku",
    logo: "/images/logo/petrokimia.webp",
    sector: {
      id: "Pestisida, Pupuk Hayati & Agrokimia Pertanian",
      en: "Pesticides, Bio-Fertilizers & Agricultural Agrochem",
      zh: "农药、生物肥料与农业植保化学品",
    },
  },
  {
    name: "Greenfields",
    logo: "/images/logo/greenfields.webp",
    sector: {
      id: "Industri Susu & Olahan Pangan Segar",
      en: "Dairy & Fresh Beverage Industry",
      zh: "高品质乳制品与鲜奶饮品产业",
    },
  },
  {
    name: "Kelaya Hair Treatment",
    logo: "/images/logo/kelaya.webp",
    sector: {
      id: "Produk Perawatan Rambut Alami & Skincare",
      en: "Natural Haircare & Beauty Products",
      zh: "天然植萃护发与个人护理美妆品",
    },
  },
  {
    name: "PT. Kimia Farma Tbk",
    logo: "/images/logo/kimia-farma.webp",
    sector: {
      id: "Industri Farmasi, Obat & Pelayanan Kesehatan",
      en: "Pharmaceutical & Healthcare Industry",
      zh: "国家级制药与健康医疗产业",
    },
  },

  // ROW 2
  {
    name: "MAK (PT. Mega Andalan Kalasan)",
    logo: "/images/logo/mak.webp",
    sector: {
      id: "Peralatan Rumah Sakit & Tempat Tidur Medis",
      en: "Hospital Equipment & Medical Care Systems",
      zh: "高精医院护理设备与医用病床制造",
    },
  },
  {
    name: "PT. Megasurya Mas",
    logo: "/images/logo/megasurya.webp",
    sector: {
      id: "Industri Minyak Goreng, Margarin & Sabun",
      en: "Cooking Oil, Margarine & Specialty Fats",
      zh: "食用油、人造奶油与洗涤皂类产业",
    },
  },
  {
    name: "MS GLOW Skincare",
    logo: "/images/logo/ms-glow.webp",
    sector: {
      id: "Kosmetik & Produk Perawatan Kulit Modern",
      en: "Cosmetics & Modern Skincare Products",
      zh: "知名美妆护肤品与个人护理科技",
    },
  },
  {
    name: "PT. Petrosida Gresik",
    logo: "/images/logo/petrosida.webp",
    sector: {
      id: "Formulasi Pestisida & Bahan Kimia Agro Industri",
      en: "Pesticide Formulation & Agro-Chemical Industry",
      zh: "农药配方加工与农业精细化工品",
    },
  },

  // ROW 3
  {
    name: "PT. Pomal Reka Mandiri",
    logo: "/images/logo/pomal.webp",
    sector: {
      id: "Bahan Baku Industri & Manufaktur Kimia",
      en: "Industrial Raw Materials & Chemical Manufacturing",
      zh: "工业原材料与精细化工制造",
    },
  },
  {
    name: "PT. Indo Acidatama Tbk",
    logo: "/images/logo/indo-acidatama.webp",
    sector: {
      id: "Kimia Dasar & Agrokimia Bio-Teknologi",
      en: "Basic Chemicals & Bio-Tech Agrochem",
      zh: "基础化工与生物农业技术",
    },
  },
  {
    name: "PT. Multi Sarana Indotani",
    logo: "/images/logo/multi-sarana.webp",
    sector: {
      id: "Formulator Pestisida Pertanian & Perlindungan Tanaman",
      en: "Agricultural Pesticide Formulator & Crop Protection",
      zh: "农业农药制剂研发与植保科技",
    },
  },
  {
    name: "PT. Salim Ivomas Pratama Tbk (SIMP)",
    logo: "/images/logo/simp.webp",
    sector: {
      id: "Agribisnis, Minyak Goreng & Margarin Terkemuka",
      en: "Leading Agribusiness, Edible Oils & Fats",
      zh: "综合农业、知名食用油脂与人造奶油制造",
    },
  },

  // ROW 4
  {
    name: "Sinarmas Agribusiness and Food",
    logo: "/images/logo/sinarmas.webp",
    sector: {
      id: "Agribisnis Global Terintegrasi & Minyak Kelapa Sawit",
      en: "Integrated Global Agribusiness & Palm Oil Products",
      zh: "金光集团综合性农业产业链与精炼棕榈油脂",
    },
  },
  {
    name: "Tjiwi Kimia Paper Products",
    logo: "/images/logo/twijikimia.webp",
    sector: {
      id: "Manufaktur Kertas & Produk Kemasan Karton Industri",
      en: "Paper Manufacturing & Industrial Packaging Products",
      zh: "大型造纸工业与各类纸制品纸箱包装",
    },
  },
  {
    name: "PT. Tunas Baru Lampung Tbk",
    logo: "/images/logo/tunasbaru.webp",
    sector: {
      id: "Agroindustri Kelapa Sawit, Gula & Minyak Nabati",
      en: "Palm Oil Agro-Industry, Refined Sugar & Edible Oils",
      zh: "棕榈农业、精制白糖与食用植物油产业",
    },
  },
  {
    name: "Wilmar International",
    logo: "/images/logo/wilmar.webp",
    sector: {
      id: "Pengolahan Minyak Nabati & Rantai Pasok Agribisnis Global",
      en: "Leading Edible Oils Processing & Global Agribusiness Supply Chain",
      zh: "大型食用植物油精炼加工与综合农粮跨国集团",
    },
  },
];
