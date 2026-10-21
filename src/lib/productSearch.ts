import { Language } from "@/data/translations";
import { getLocalizedProduct } from "@/data/catalogTranslations";

export interface SearchableProduct {
  title: string;
  dimensi: string;
  berat: string;
  deskripsi: string;
  imagePath: string;
  subtitle?: string;
  isPallet?: boolean;
  categoryId: string;
  categoryName: string;
  categoryDisplayName: string;
  allCategorySearchText?: string;
}

export const normalizeText = (text: string = ""): string => {
  return text
    .toLowerCase()
    .replace(/[&/\\#,+()$~%.'":*?<>{}_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export const compactText = (text: string = ""): string => {
  return text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]/gi, "");
};

export const categoryAliases: Record<string, string[]> = {
  "pallet-industri": [
    "pallet",
    "palet",
    "palet plastik",
    "pallet plastik",
    "racking",
    "tatakan",
    "alas gudang",
    "heavy duty pallet",
  ],
  "keranjang-industri": [
    "keranjang",
    "basket",
    "crate",
    "keranjang buntu",
    "keranjang bolong",
    "keranjang industri",
    "keranjang buah",
    "keranjang sayur",
  ],
  "box-lipat": [
    "box lipat",
    "kotak lipat",
    "folding box",
    "collapsible container",
    "folding crate",
    "box plastik",
  ],
  "blok-lalu-lintas": [
    "lalu lintas",
    "traffic",
    "cone",
    "traffic cone",
    "traffic block",
    "road barrier",
    "pembatas jalan",
    "barrier",
    "kerucut",
  ],
  "botol-pupuk-pet": [
    "botol pupuk",
    "pupuk",
    "botol agro",
    "pertanian",
    "agro",
    "pet pupuk",
  ],
  "kosmetik": [
    "kosmetik",
    "cosmetic",
    "skincare",
    "pot cream",
    "botol kosmetik",
    "pot krim",
    "wadah skincare",
  ],
  "botol-minyak-goreng": [
    "botol minyak",
    "minyak goreng",
    "minyak",
    "cooking oil",
    "botol pet minyak",
  ],
  "beragam-kemasan-pet": [
    "beragam kemasan pet",
    "kemasan pet",
    "toples",
    "jar",
    "galon",
    "botol sambal",
    "wadah bumbu",
    "toples bumbu",
    "galon pet",
  ],
  "jerigen-hdpe": [
    "jerigen",
    "jeriken",
    "jerry can",
    "hdpe",
    "jerigen hdpe",
    "jeriken hdpe",
  ],
  "jerigen-chemical-hdpe": [
    "jerigen chemical",
    "jerigen kimia",
    "kimia",
    "chemical",
    "jeriken kimia",
  ],
  "jerigen-oli": [
    "jerigen oli",
    "oli",
    "pelumas",
    "lubricant",
    "oli mesin",
    "jeriken oli",
  ],
  "jerigen-lipat": [
    "jerigen lipat",
    "jeriken lipat",
    "collapsible jerrycan",
    "jerigen air",
    "lipat",
  ],
  "botol-hdpe": [
    "botol hdpe",
    "botol kimia",
    "botol laboratorium",
    "botol sampel",
    "botol m",
  ],
  "kaleng-pail-plastik": [
    "kaleng pail",
    "kaleng & pail",
    "kaleng pail plastik",
    "kaleng & pail plastik",
    "kaleng",
    "pail",
    "ember",
    "ember plastik",
    "kaleng plastik",
    "pail plastik",
    "kaleng cat",
    "pail cat",
    "wadah cat",
    "canister",
    "bucket",
    "cans & pails",
    "cans and pails",
    "plastic cans",
    "plastic pails",
  ],
  "perikanan-dan-kelautan": [
    "perikanan",
    "kelautan",
    "perikanan kelautan",
    "ikan",
    "kepiting",
    "kerang",
    "float ball",
    "pelampung",
    "keranjang kepiting",
    "keranjang kerang",
    "fishery",
    "marine",
  ],
};

export const popularPillCategoryMap: Record<string, string> = {
  // Indonesian
  "pallet": "pallet-industri",
  "keranjang": "keranjang-industri",
  "box lipat": "box-lipat",
  "jerigen": "jerigen-hdpe",
  "botol": "botol-hdpe",
  "kaleng pail": "kaleng-pail-plastik",
  "kaleng & pail": "kaleng-pail-plastik",
  "lalu lintas": "blok-lalu-lintas",
  "perikanan": "perikanan-dan-kelautan",
  // English
  "crate": "keranjang-industri",
  "folding box": "box-lipat",
  "jerrycan": "jerigen-hdpe",
  "bottle": "botol-hdpe",
  "cans & pails": "kaleng-pail-plastik",
  "traffic barrier": "blok-lalu-lintas",
  "fishery": "perikanan-dan-kelautan",
  // Chinese
  "托盘": "pallet-industri",
  "周转箱": "keranjang-industri",
  "折叠箱": "box-lipat",
  "塑料桶": "jerigen-hdpe",
  "塑料瓶": "botol-hdpe",
  "塑料桶和罐": "kaleng-pail-plastik",
  "交通路障": "blok-lalu-lintas",
  "渔业海产": "perikanan-dan-kelautan",
};

/**
 * Filter products based on search query with smart multi-word and multilingual matching.
 */
export function filterProductsBySearch<T extends SearchableProduct>(
  products: T[],
  searchQuery: string,
  lang: Language
): T[] {
  const rawQuery = searchQuery.trim();
  if (!rawQuery) return [];

  const queryLower = rawQuery.toLowerCase();
  const queryNorm = normalizeText(rawQuery);
  const queryCompact = compactText(rawQuery);
  const queryTokens = queryNorm.split(" ").filter((t) => t.length > 0);

  return products.filter((p) => {
    const localized = getLocalizedProduct(p, lang);

    // Metadata Kategori (termasuk multi-bahasa & alias)
    const categoryRaw = `${p.categoryName} ${p.categoryDisplayName} ${p.categoryId} ${p.allCategorySearchText || ""}`;
    const categoryNorm = normalizeText(categoryRaw);
    const categoryCompact = compactText(categoryRaw);
    const categoryWords = categoryNorm.split(" ").filter(Boolean);

    // 1. Cek apakah query mencocokkan Kategori secara langsung atau token
    const categoryDirectMatch =
      categoryRaw.toLowerCase().includes(queryLower) ||
      categoryNorm.includes(queryNorm) ||
      (queryCompact.length >= 2 && categoryCompact.includes(queryCompact));

    const categoryTokenMatch =
      queryTokens.length > 0 &&
      queryTokens.every((token) => {
        return categoryWords.some((word) => {
          if (token.length <= 2) return word === token;
          return word === token || word.startsWith(token) || word.includes(token);
        });
      });

    if (categoryDirectMatch || categoryTokenMatch) {
      return true;
    }

    // 2. Cek apakah query mencocokkan Produk ini secara spesifik
    const productRaw = `${p.title} ${localized.title} ${p.deskripsi} ${localized.deskripsi} ${p.subtitle || ""} ${localized.subtitle || ""} ${p.dimensi} ${p.berat}`;
    const productNorm = normalizeText(productRaw);
    const productCompact = compactText(productRaw);
    const productWords = productNorm.split(" ").filter(Boolean);

    const productDirectMatch =
      productRaw.toLowerCase().includes(queryLower) ||
      productNorm.includes(queryNorm) ||
      (queryCompact.length >= 2 && productCompact.includes(queryCompact));

    const productTokenMatch =
      queryTokens.length > 0 &&
      queryTokens.every((token) => {
        return productWords.some((word) => {
          if (token.length <= 2) return word === token;
          return word === token || word.startsWith(token) || word.includes(token);
        });
      });

    return productDirectMatch || productTokenMatch;
  });
}
