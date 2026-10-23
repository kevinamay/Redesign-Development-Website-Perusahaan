"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCardOriginal from "@/components/prototype/ProductCardOriginal";
import ProductCardVariantA from "@/components/prototype/ProductCardVariantA";
import ProductCardVariantB from "@/components/prototype/ProductCardVariantB";
import ProductCardVariantC from "@/components/prototype/ProductCardVariantC";

export interface ProductBadge {
  label: string;
  icon?: React.ReactNode;
  variant?: "blue" | "emerald";
}

export interface ProductCardProps {
  title: string;
  dimensi: string;
  berat: string;
  deskripsi: string;
  imagePath: string;
  subtitle?: string;
  badges?: ProductBadge[];
}

function ProductCardRenderer(props: ProductCardProps) {
  const searchParams = useSearchParams();
  const variant = searchParams?.get("variant")?.toUpperCase();

  switch (variant) {
    case "A":
      return <ProductCardVariantA {...props} />;
    case "B":
      return <ProductCardVariantB {...props} />;
    case "C":
      return <ProductCardVariantC {...props} />;
    case "ORIGINAL":
      return <ProductCardOriginal {...props} />;
    default:
      // Default to Original layout when no variant is set
      return <ProductCardOriginal {...props} />;
  }
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Suspense fallback={<ProductCardOriginal {...props} />}>
      <ProductCardRenderer {...props} />
    </Suspense>
  );
}
