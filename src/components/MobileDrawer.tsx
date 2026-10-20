"use client";

import React, { useState } from "react";
import { MobileMenuPopup, MenuVariant } from "@/components/MobileMenuPrototypes";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [variant] = useState<MenuVariant>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const v = (params.get("variant") || params.get("menuVariant")) as MenuVariant;
      if (v && ["A", "B", "C"].includes(v)) {
        return v;
      }
    }
    return "A";
  });

  return <MobileMenuPopup isOpen={isOpen} onClose={onClose} variant={variant} />;
}
