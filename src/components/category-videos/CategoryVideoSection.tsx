"use client";

import React from "react";
import { getCategoryVideos } from "@/data/categoryVideos";
import {
  CategoryVideoVariantKey,
  resolveVideoVariantKey,
} from "./types";
import Variant1ModernTripleCard from "./Variant1ModernTripleCard";
import Variant2SpotlightCinema from "./Variant2SpotlightCinema";
import Variant3HorizontalCarousel from "./Variant3HorizontalCarousel";
import Variant3CompactCarousel from "./Variant3CompactCarousel";
import Variant4IndustrialProofCard from "./Variant4IndustrialProofCard";
import Variant4MinimalIndustrial from "./Variant4MinimalIndustrial";
import Variant5BentoMediaPods from "./Variant5BentoMediaPods";

interface CategoryVideoSectionProps {
  categoryId: string;
  variant?: CategoryVideoVariantKey;
}

export function CategoryVideoSection({
  categoryId,
  variant = "4-rev",
}: CategoryVideoSectionProps) {
  const videoData = getCategoryVideos(categoryId);
  const activeKey = resolveVideoVariantKey(variant);

  if (!videoData || !videoData.videos || videoData.videos.length === 0) {
    return null;
  }

  switch (activeKey) {
    case "1":
      return <Variant1ModernTripleCard data={videoData} />;
    case "2":
      return <Variant2SpotlightCinema data={videoData} />;
    case "3":
      return <Variant3HorizontalCarousel data={videoData} />;
    case "3-rev":
      return <Variant3CompactCarousel data={videoData} />;
    case "4":
      return <Variant4IndustrialProofCard data={videoData} />;
    case "5":
      return <Variant5BentoMediaPods data={videoData} />;
    case "4-rev":
    default:
      return <Variant4MinimalIndustrial data={videoData} />;
  }
}

export default CategoryVideoSection;
