"use client";

import React, { useState, useEffect } from "react";
import DrawerVariantA from "@/components/prototype/DrawerVariantA";
import DrawerVariantB from "@/components/prototype/DrawerVariantB";
import DrawerVariantC from "@/components/prototype/DrawerVariantC";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "A" | "B" | "C";
}

export default function MobileDrawer({
  isOpen,
  onClose,
  variant = "A",
}: MobileDrawerProps) {
  const [activeVariant, setActiveVariant] = useState<"A" | "B" | "C">(variant);

  // Synchronize variant prop if parent changes it
  useEffect(() => {
    setActiveVariant(variant);
  }, [variant]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-popup-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-popup-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-popup-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (activeVariant === "B") {
    return (
      <DrawerVariantB
        isOpen={isOpen}
        onClose={onClose}
        activeVariant={activeVariant}
        onSelectVariant={setActiveVariant}
      />
    );
  }

  if (activeVariant === "C") {
    return (
      <DrawerVariantC
        isOpen={isOpen}
        onClose={onClose}
        activeVariant={activeVariant}
        onSelectVariant={setActiveVariant}
      />
    );
  }

  // Default: Variant A (Slide from Right, Clean Minimalist)
  return (
    <DrawerVariantA
      isOpen={isOpen}
      onClose={onClose}
      activeVariant={activeVariant}
      onSelectVariant={setActiveVariant}
    />
  );
}
