import rawArticles from "./articlesData.json";

export interface Article {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  detailLink?: string;
  imageUrl?: string;
}

export const articlesData: Article[] = (rawArticles as Article[]).map((a) => ({
  ...a,
  imageUrl: a.image, // backwards-compatibility with list page
}));

export function getArticleBySlug(slug: string): Article | undefined {
  if (!slug) return undefined;
  const decoded = decodeURIComponent(slug).toLowerCase().trim();
  return articlesData.find((a) => a.slug.toLowerCase() === decoded);
}

export function getRelatedArticles(currentSlug: string, count: number = 3): Article[] {
  const others = articlesData.filter((a) => a.slug !== currentSlug);
  const currentIndex = articlesData.findIndex((a) => a.slug === currentSlug);
  
  if (currentIndex >= 0 && others.length >= count) {
    // Pick adjacent articles for context relevance
    const nextArticles = others.slice(currentIndex, currentIndex + count);
    if (nextArticles.length === count) return nextArticles;
  }
  return others.slice(0, count);
}
