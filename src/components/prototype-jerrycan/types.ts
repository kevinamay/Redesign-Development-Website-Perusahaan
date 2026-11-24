export type JerrycanVariantKey = "1" | "2" | "3" | "4" | "5" | "6";

export interface JerrycanProductData {
  id: string;
  name: string;
  category: string;
  code: string;
  tagline: string;
  imagePath: string;
  capacity: string;
  capacityAlt: string;
  weight: string;
  wallThickness: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    neckDiameter: string;
  };
  material: string;
  resinGrade: string;
  capType: string;
  colorOptions: {
    name: string;
    hex: string;
    border: string;
    usage: string;
  }[];
  certifications: string[];
  features: {
    title: string;
    desc: string;
    icon: string;
  }[];
  testMetrics: {
    label: string;
    value: string;
    unit: string;
    status: string;
    standard: string;
  }[];
  priceTiers: {
    minQty: number;
    maxQty?: number;
    pricePerUnit: number;
    leadTime: string;
    discountBadge?: string;
  }[];
  logistics: {
    layerOnPallet: number;
    totalPerPallet: number;
    stackingLimit: string;
    container20ft: number;
    container40ft: number;
  };
  applications: {
    industry: string;
    examples: string;
    icon: string;
  }[];
}
