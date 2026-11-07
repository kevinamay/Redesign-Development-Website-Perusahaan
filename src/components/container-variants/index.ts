import type { ComponentType } from "react";
import type { ContainerVariantKey, SampleProductItem } from "./types";
import Variant2SquareBentoGrid from "./Variant2SquareBentoGrid";
import Variant3CubicHeroShowcase from "./Variant3CubicHeroShowcase";
import Variant4IndustrialCrateBox from "./Variant4IndustrialCrateBox";
import Variant4NotchedSpecTicket from "./Variant4NotchedSpecTicket";
import Variant5SquareCircleLens from "./Variant5SquareCircleLens";

export * from "./types";
export { default as Variant2SquareBentoGrid } from "./Variant2SquareBentoGrid";
export { default as Variant3CubicHeroShowcase } from "./Variant3CubicHeroShowcase";
export { default as Variant4IndustrialCrateBox } from "./Variant4IndustrialCrateBox";
export { default as Variant4NotchedSpecTicket } from "./Variant4NotchedSpecTicket";
export { default as Variant5SquareCircleLens } from "./Variant5SquareCircleLens";
export { PrototypeContainerSwitcher } from "./PrototypeContainerSwitcher";

export const CONTAINER_VARIANT_COMPONENTS: Record<
  ContainerVariantKey,
  ComponentType<{ product: SampleProductItem }>
> = {
  "1": Variant2SquareBentoGrid,
  "2": Variant3CubicHeroShowcase,
  "3": Variant4IndustrialCrateBox,
  "4": Variant4NotchedSpecTicket, // <-- DESAIN 4 ASLI (Notched Spec-Ticket yang Anda sukai)
  "5": Variant5SquareCircleLens,
};
