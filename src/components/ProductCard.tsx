"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  ProductBadge,
  ProductCardVariantKey,
  resolveVariantKey,
  VariantOriginal,
  Variant3TabbedDeck,
  VariantCleanCorporate,
  VariantValueFocus,
  VariantSoftMinimal,
  VariantLightboxModal,
  VariantModalSpecTable,
} from "./product-variants";

export type { ProductBadge };

export interface ProductCardProps {
  title: string;
  dimensi: string;
  berat: string;
  deskripsi: string;
  imagePath: string;
  subtitle?: string;
  badges?: ProductBadge[];
  variant?: ProductCardVariantKey;
}

function InnerProductCard(props: ProductCardProps) {
  const searchParams = useSearchParams();
  const urlVariantParam = searchParams?.get("variant");
  const activeVariantKey: ProductCardVariantKey =
    props.variant ?? resolveVariantKey(urlVariantParam);

  switch (activeVariantKey) {
    case "lightbox-modal":
      return <VariantLightboxModal {...props} />;
    case "modal-spec-table":
      return <VariantModalSpecTable {...props} />;
    case "clean-corporate":
      return <VariantCleanCorporate {...props} />;
    case "value-focus":
      return <VariantValueFocus {...props} />;
    case "soft-minimal":
      return <VariantSoftMinimal {...props} />;
    case "tabbed-deck":
      return <Variant3TabbedDeck {...props} />;
    case "original":
      return <VariantOriginal {...props} />;
    default:
      return <VariantLightboxModal {...props} />;
  }
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Suspense fallback={<VariantLightboxModal {...props} />}>
      <InnerProductCard {...props} />
    </Suspense>
  );
}

