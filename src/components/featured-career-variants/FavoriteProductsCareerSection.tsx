"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { resolveCareerVariantKey, CareerVariantKey } from "./types";
import { PrototypeCareerSwitcher } from "./PrototypeCareerSwitcher";
import Variant1GridCompactDark from "./Variant1GridCompactDark";
import Variant2CarouselRibbon from "./Variant2CarouselRibbon";
import Variant3BentoSplit from "./Variant3BentoSplit";
import Variant4TabsGlass from "./Variant4TabsGlass";
import Variant5EnterpriseSpec from "./Variant5EnterpriseSpec";

interface FavoriteProductsCareerSectionProps {
  initialVariant?: CareerVariantKey;
}

function FavoriteCareerContent({
  initialVariant,
}: FavoriteProductsCareerSectionProps) {
  const searchParams = useSearchParams();
  const variantParam = searchParams.get("variant");
  const [selectedVariant, setSelectedVariant] = useState<CareerVariantKey>(
    initialVariant || resolveCareerVariantKey(variantParam)
  );

  useEffect(() => {
    if (variantParam) {
      setSelectedVariant(resolveCareerVariantKey(variantParam));
    }
  }, [variantParam]);

  const renderVariant = () => {
    switch (selectedVariant) {
      case "2":
        return <Variant2CarouselRibbon />;
      case "3":
        return <Variant3BentoSplit />;
      case "4":
        return <Variant4TabsGlass />;
      case "5":
        return <Variant5EnterpriseSpec />;
      case "1":
      default:
        return <Variant1GridCompactDark />;
    }
  };

  return (
    <div className="relative w-full">
      {/* 1. Komponen Desain Aktif */}
      {renderVariant()}

      {/* 2. Floating Prototype Switcher */}
      <PrototypeCareerSwitcher
        currentVariant={selectedVariant}
        onSelectVariant={(key) => setSelectedVariant(key)}
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
          <Variant1GridCompactDark />
        </div>
      }
    >
      <FavoriteCareerContent {...props} />
    </Suspense>
  );
}

