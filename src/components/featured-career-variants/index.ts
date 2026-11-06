import type { ComponentType } from "react";
import type { CareerVariantKey } from "./types";
import Variant1GridCompactDark from "./Variant1GridCompactDark";
import Variant2CarouselRibbon from "./Variant2CarouselRibbon";
import Variant3BentoSplit from "./Variant3BentoSplit";
import Variant4TabsGlass from "./Variant4TabsGlass";
import Variant5EnterpriseSpec from "./Variant5EnterpriseSpec";

export * from "./types";
export { default as FavoriteProductsCareerSection } from "./FavoriteProductsCareerSection";
export { default as Variant1GridCompactDark } from "./Variant1GridCompactDark";
export { default as Variant2CarouselRibbon } from "./Variant2CarouselRibbon";
export { default as Variant3BentoSplit } from "./Variant3BentoSplit";
export { default as Variant4TabsGlass } from "./Variant4TabsGlass";
export { default as Variant5EnterpriseSpec } from "./Variant5EnterpriseSpec";
export { PrototypeCareerSwitcher } from "./PrototypeCareerSwitcher";

export const CAREER_VARIANT_COMPONENTS: Record<CareerVariantKey, ComponentType> = {
  "1": Variant1GridCompactDark,
  "2": Variant2CarouselRibbon,
  "3": Variant3BentoSplit,
  "4": Variant4TabsGlass,
  "5": Variant5EnterpriseSpec,
};
