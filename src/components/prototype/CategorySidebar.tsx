"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategorySidebarOriginal, {
  CategorySidebarProps,
} from "@/components/prototype/CategorySidebarOriginal";
import CategorySidebarVariantA from "@/components/prototype/CategorySidebarVariantA";
import CategorySidebarVariantB from "@/components/prototype/CategorySidebarVariantB";
import CategorySidebarVariantC from "@/components/prototype/CategorySidebarVariantC";

function CategorySidebarRenderer(props: CategorySidebarProps) {
  const searchParams = useSearchParams();
  const catVariant = searchParams?.get("catVariant")?.toUpperCase() || "A";

  switch (catVariant) {
    case "A":
      return <CategorySidebarVariantA {...props} />;
    case "B":
      return <CategorySidebarVariantB {...props} />;
    case "C":
      return <CategorySidebarVariantC {...props} />;
    case "ORIGINAL":
      return <CategorySidebarOriginal {...props} />;
    default:
      return <CategorySidebarVariantA {...props} />;
  }
}

export default function CategorySidebar(props: CategorySidebarProps) {
  return (
    <Suspense fallback={<CategorySidebarOriginal {...props} />}>
      <CategorySidebarRenderer {...props} />
    </Suspense>
  );
}
