"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { resolveCareerVariantKey, CareerVariantKey } from "./types";
import {
  CAREER_VARIANT_COMPONENTS,
  PrototypeCareerSwitcher,
} from "./index";

interface FavoriteProductsCareerSectionProps {
  initialVariant?: CareerVariantKey;
}

function FavoriteCareerContent({
  initialVariant,
}: FavoriteProductsCareerSectionProps) {
  const searchParams = useSearchParams();
  const variantParam = searchParams.get("variant");
  const [overrideVariant, setOverrideVariant] = useState<CareerVariantKey | null>(null);

  const selectedVariant =
    overrideVariant ||
    (variantParam ? resolveCareerVariantKey(variantParam) : initialVariant || "1");

  const ActiveVariantComponent =
    CAREER_VARIANT_COMPONENTS[selectedVariant] ||
    CAREER_VARIANT_COMPONENTS["1"];

  return (
    <div className="relative w-full">
      {/* 1. Komponen Desain Aktif */}
      <ActiveVariantComponent />

      {/* 2. Floating Prototype Switcher */}
      <PrototypeCareerSwitcher
        currentVariant={selectedVariant}
        onSelectVariant={(key) => setOverrideVariant(key)}
      />
    </div>
  );
}

export default function FavoriteProductsCareerSection(
  props: FavoriteProductsCareerSectionProps
) {
  return (
    <Suspense
      fallback={
        <div className="w-full py-16 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
        </div>
      }
    >
      <FavoriteCareerContent {...props} />
    </Suspense>
  );
}

