import { Language } from "@/data/translations";

export interface ArticleUIContent {
  pageTitle: string;
  readMore: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  backToList: string;
  relatedBadge: string;
  relatedTitle: string;
  viewAll: string;
}

export const articleUITranslations: Record<Language, ArticleUIContent> = {
  id: {
    pageTitle: "BERITA & ARTIKEL LAINNYA",
    readMore: "LEBIH DETIL",
    breadcrumbHome: "Beranda",
    breadcrumbCurrent: "Berita & Artikel",
    backToList: "Kembali ke Daftar Artikel",
    relatedBadge: "REKOMENDASI",
    relatedTitle: "BERITA & ARTIKEL LAINNYA",
    viewAll: "Lihat Semua Artikel",
  },
  en: {
    pageTitle: "NEWS & OTHER ARTICLES",
    readMore: "READ MORE",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "News & Articles",
    backToList: "Back to All Articles",
    relatedBadge: "RECOMMENDED",
    relatedTitle: "OTHER NEWS & ARTICLES",
    viewAll: "View All Articles",
  },
  zh: {
    pageTitle: "更多新闻与行业动态",
    readMore: "查看详情",
    breadcrumbHome: "首页",
    breadcrumbCurrent: "新闻与行业动态",
    backToList: "返回文章列表",
    relatedBadge: "推荐阅读",
    relatedTitle: "更多新闻与行业动态",
    viewAll: "查看全部文章",
  },
};

export interface ArticleTranslationItem {
  title: string;
  excerpt?: string;
}

export const articleItemsTranslations: Record<string, Partial<Record<Language, ArticleTranslationItem>>> = {
  "botol-pet-minyak-goreng-bisa-untuk-refill-ini-yang-perlu-diperhatikan": {
    en: {
      title: "Can PET Cooking Oil Bottles Be Refilled? Key Considerations",
      excerpt: "PET cooking oil bottles are widely used in food packaging due to their clear appearance, light weight, and practical handling.",
    },
    zh: {
      title: "PET食用油瓶可以重复灌装吗？这些要点需注意",
      excerpt: "PET食用油瓶因其美观的外观、轻量化与实用性，广泛应用于食品包装。但在考虑重复利用时需关注清洁与食品安全。",
    },
  },
  "alasan-kenapa-harus-bangga-pakai-batik": {
    en: {
      title: "Reasons to Be Proud of Wearing Batik",
      excerpt: "Batik is not just patterned fabric for clothing. Behind each motif lies history, creativity, and rich Indonesian cultural values.",
    },
    zh: {
      title: "为何我们应当以穿蜡染（Batik）为荣",
      excerpt: "蜡染不仅仅是一种服装图案面料。在每一个图样和制作工艺的背后，都凝聚着代代相传的历史、匠心与文化价值。",
    },
  },
  "ngemil-tapi-nggak-bikin-gemuk-ini-caranya": {
    en: {
      title: "Snacking Without Gaining Weight? Here's How!",
      excerpt: "Snacking is often seen as a cause of weight gain. In fact, snacks can remain part of your daily diet when managed mindfully.",
    },
    zh: {
      title: "如何吃零食不易发胖？健康技巧分享！",
      excerpt: "吃零食常被认为是体重增加的原因之一。然而，只要科学合理地控制分量与选择，零食也能健康享用。",
    },
  },
  "rahasia-kelezatan-roti-ini-fungsi-pasta-roti-yang-sering-terlupakan": {
    en: {
      title: "Secrets of Delicious Bread: The Essential Role of Bakery Paste",
      excerpt: "What makes bread smell fragrant, tender, and appetizing? Besides flour and yeast, bakery paste plays a crucial role in aroma and taste.",
    },
    zh: {
      title: "烘焙美味的秘诀：常被忽视的面包膏与食用香膏的作用",
      excerpt: "是什么让面包更香甜诱人？除了面粉与酵母，面包香膏在塑造产品风味与香气一致性上扮演着不可忽视的角色。",
    },
  },
  "kapan-waktu-terbaik-mengonsumsi-madu-pagi-atau-malam": {
    en: {
      title: "When Is the Best Time to Consume Honey, Morning or Night?",
      excerpt: "Honey has long been recognized as a natural superfood. Learn whether morning or night brings the optimal health benefits.",
    },
    zh: {
      title: "什么时候喝蜂蜜最好：早晨还是晚上？",
      excerpt: "蜂蜜一直被视为天然滋补佳品。了解早晨或夜晚饮用蜂蜜的不同健康益处与最佳吸收时机。",
    },
  },
  "nggak-cuma-bikin-kenyang-ini-manfaat-protein-drink-untuk-tubuh": {
    en: {
      title: "More Than Just Satiating: Health Benefits of Protein Drinks",
      excerpt: "Protein drinks provide convenient essential amino acids for active lifestyles, muscle recovery, and overall bodily strength.",
    },
    zh: {
      title: "不仅饱腹，更能强身：蛋白质饮品对身体的益处",
      excerpt: "蛋白质饮品不仅能提供饱腹感，更能为高强度运动与日常体能恢复补充必需氨基酸与能量。",
    },
  },
  "ini-beberapa-khasiat-asam-jawa-yang-baik-untuk-kesehatan": {
    en: {
      title: "Surprising Health Benefits of Tamarind",
      excerpt: "Tamarind is a popular natural ingredient in Southeast Asian cuisine, offering rich antioxidants, minerals, and digestive support.",
    },
    zh: {
      title: "酸角/罗望子对健康的多种营养与益处",
      excerpt: "酸角在东南亚饮食中备受欢迎，不仅风味浓郁独特，更富含天然抗氧化剂与助消化成分。",
    },
  },
  "sering-disamakan-ini-perbedaan-green-tea-dan-matcha": {
    en: {
      title: "Often Confused: The Real Differences Between Green Tea and Matcha",
      excerpt: "While both originate from Camellia sinensis, their cultivation, processing methods, and nutritional profiles differ remarkably.",
    },
    zh: {
      title: "常被混淆的绿茶与抹茶有何区别？一文详解",
      excerpt: "虽然绿茶与抹茶源于同种茶树，但在遮光种植、研磨工艺与营养吸收方式上有显著不同。",
    },
  },
  "kenapa-botol-pet-dari-asia-plastik-jadi-pilihan-favorit-untuk-kemasan-madu": {
    en: {
      title: "Why Asia Plastik PET Bottles Are the Top Choice for Honey Packaging",
      excerpt: "Discover why food-grade PET bottles with leakproof caps are preferred by premium honey producers across Indonesia.",
    },
    zh: {
      title: "为什么 Asia Plastik 的 PET 塑料瓶是蜂蜜包装的首选？",
      excerpt: "采用食品级高透光 PET 材质与精密防漏密封盖，为优质纯天然蜂蜜产品提供安全、美观的专业包装解决方案。",
    },
  },
  "botol-pupuk-pet-tebal-apakah-aman-untuk-cairan-panas-ini-penjelasannya": {
    en: {
      title: "Heavy-Duty PET Fertilizer Bottles: Are They Safe for Hot Liquids?",
      excerpt: "Understanding the thermal resistance and chemical compatibility of thickened PET containers for agricultural chemical packaging.",
    },
    zh: {
      title: "加厚 PET 农用化肥瓶耐热吗？能否装高温液体详解",
      excerpt: "解析工业级加厚 PET 瓶在农业液体肥料储存中的耐化学腐蚀与耐温特性，确保安全灌装。",
    },
  },
  "standar-kualitas-produsen-kemasan-plastik-mengapa-sertifikasi-food-grade-dan-teknologi-produksi-sangat-penting": {
    en: {
      title: "Plastic Packaging Standards: Why Food Grade Certification & High Tech Matter",
      excerpt: "Quality assurance in plastic manufacturing ensures zero chemical migration, consistent wall thickness, and regulatory compliance.",
    },
    zh: {
      title: "塑料包装制造质量标准：为何食品级认证与尖端生产工艺至关重要",
      excerpt: "严苛的食品级无毒认证与自动化注塑设备，是保障食品饮料与药品包装卫生安全的核心基石。",
    },
  },
  "ciri-ciri-kemasan-plastik-food-grade-yang-aman-untuk-makanan-dan-minuman": {
    en: {
      title: "Characteristics of Safe Food Grade Plastic Packaging",
      excerpt: "How to identify authentic food-grade plastics, certifications, recycling codes, and odor-free safety properties.",
    },
    zh: {
      title: "适用于食品与饮料的安全食品级塑料包装鉴别特征",
      excerpt: "如何识别真正的食品级塑料制品，关注材质编号、无毒无异味特性与官方安全合规标识。",
    },
  },
  "perbedaan-injection-molding-dan-blow-molding-pengertian-proses-kelebihan-dan-aplikasinya": {
    en: {
      title: "Difference Between Injection Molding and Blow Molding: Processes & Applications",
      excerpt: "Comprehensive comparison between injection molding and blow molding technologies in modern plastic manufacturing.",
    },
    zh: {
      title: "注塑成型与吹塑成型的区别：工艺原理、优势与应用对比",
      excerpt: "全方位解析注塑与吹塑两种核心工艺在塑料托盘、周转箱、中空吹塑桶及塑料瓶生产中的技术差异与适用场景。",
    },
  },
  "cara-memilih-produsen-kemasan-plastik-terpercaya-untuk-bisnis-anda": {
    en: {
      title: "How to Choose a Reliable Plastic Packaging Manufacturer for Your Business",
      excerpt: "Key factors to evaluate: machinery capacity, mold precision, on-time delivery track record, and food grade certifications.",
    },
    zh: {
      title: "如何为您的企业甄选值得信赖的塑料包装生产厂家",
      excerpt: "评估生产厂家的模具研发能力、注塑产能、品控体系与及时交付实力，助企业供应链稳定运行。",
    },
  },
  "mengapa-pallet-plastik-asia-plastik-lebih-higienis-untuk-industri-makanan-dan-farmasi": {
    en: {
      title: "Why Asia Plastik Pallets Are More Hygienic for Food and Pharma Industries",
      excerpt: "Plastic pallets eliminate termite risks, fungal decay, and splinter hazards, making them mandatory for hygienic warehousing.",
    },
    zh: {
      title: "为什么 Asia Plastik 塑料托盘更符合食品与制药行业的高卫生标准",
      excerpt: "塑料托盘无木屑虫蛀隐患、耐冲洗易消毒，是满足 GMP 与 HACCP 仓储洁净度标准的理想承重载体。",
    },
  },
  "alasan-memilih-palet-plastik-daripada-palet-kayu": {
    en: {
      title: "Reasons to Choose Plastic Pallets Over Wooden Pallets",
      excerpt: "Compare longevity, weight tolerance, weather resistance, and total cost of ownership between plastic and traditional wood pallets.",
    },
    zh: {
      title: "企业仓储物流选择塑料托盘替代木托盘的关键优势",
      excerpt: "从使用寿命、承重稳定性、耐水耐候及全生命周期成本等多维度剖析塑料托盘的显著优势。",
    },
  },
};

export function getLocalizedArticle(
  article: { slug: string; title: string; excerpt?: string },
  lang: Language
): { title: string; excerpt?: string } {
  const custom = articleItemsTranslations[article.slug]?.[lang];
  return {
    title: custom?.title || article.title,
    excerpt: custom?.excerpt || article.excerpt,
  };
}
