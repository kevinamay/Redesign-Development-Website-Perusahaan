import { Language } from "@/data/translations";
import rawArticlesTranslations from "./articlesTranslations.json";

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

const allArticlesTranslations = rawArticlesTranslations as Record<
  string,
  Record<string, ArticleTranslationItem>
>;

export function getLocalizedArticle(
  article: { slug: string; title: string; excerpt?: string },
  lang: Language
): { title: string; excerpt?: string } {
  if (lang === "id") {
    return {
      title: article.title,
      excerpt: article.excerpt,
    };
  }

  const translated = allArticlesTranslations[article.slug]?.[lang];
  return {
    title: translated?.title || article.title,
    excerpt: translated?.excerpt || article.excerpt,
  };
}

export function formatArticleDate(dateStr: string, lang: Language): string {
  if (!dateStr) return "";
  if (lang === "id") return dateStr;

  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    const monthMap: Record<string, { en: string; zh: string }> = {
      Jan: { en: "Jan", zh: "1月" },
      Feb: { en: "Feb", zh: "2月" },
      Mar: { en: "Mar", zh: "3月" },
      Apr: { en: "Apr", zh: "4月" },
      May: { en: "May", zh: "5月" },
      Jun: { en: "Jun", zh: "6月" },
      Jul: { en: "Jul", zh: "7月" },
      Aug: { en: "Aug", zh: "8月" },
      Sep: { en: "Sep", zh: "9月" },
      Oct: { en: "Oct", zh: "10月" },
      Nov: { en: "Nov", zh: "11月" },
      Dec: { en: "Dec", zh: "12月" },
      Agu: { en: "Aug", zh: "8月" },
      Okt: { en: "Oct", zh: "10月" },
      Des: { en: "Dec", zh: "12月" },
    };

    const m = monthMap[month];
    if (m) {
      if (lang === "zh") {
        return `${year}年${m.zh}${day}日`;
      }
      if (lang === "en") {
        return `${m.en} ${day}, ${year}`;
      }
    }
  }

  return dateStr;
}
