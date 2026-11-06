"use client";

import React from "react";
import VariantLightboxModal from "./product-variants/VariantLightboxModal";
import type { ProductBadge, ProductVariantProps } from "./product-variants/types";

export type { ProductBadge, ProductVariantProps };
export type ProductCardProps = ProductVariantProps;

/**
 * ProductCard Component (Desain Tetap: Opsi 9 - Focus Lightbox Modal)
 * Langsung merender VariantLightboxModal secara efisien dan konsisten
 * tanpa membungkus Suspense / useSearchParams berlebih di setiap kartu.
 */
export default function ProductCard(props: ProductCardProps) {
  return <VariantLightboxModal {...props} />;
}
