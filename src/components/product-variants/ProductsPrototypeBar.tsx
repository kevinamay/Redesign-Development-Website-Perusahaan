"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PrototypeProductSwitcher } from "./PrototypeProductSwitcher";
import { resolveVariantKey } from "./types";

function InnerBar() {
  const searchParams = useSearchParams();
  const currentVariant = resolveVariantKey(searchParams.get("variant"));

  return <PrototypeProductSwitcher currentVariant={currentVariant} />;
}

export function ProductsPrototypeBar() {
  // Hide in production if desired, but in local prototype testing it will always show
  return (
    <Suspense fallback={null}>
      <InnerBar />
    </Suspense>
  );
}

