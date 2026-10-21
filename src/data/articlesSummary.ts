import rawSummary from "./articlesSummary.json";

export interface ArticleSummary {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  imageUrl?: string;
}

export const articlesSummary: ArticleSummary[] = (rawSummary as ArticleSummary[]).map((a) => ({
  ...a,
  imageUrl: a.image,
}));
