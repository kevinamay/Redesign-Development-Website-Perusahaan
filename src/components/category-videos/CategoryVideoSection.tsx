"use client";

import React from "react";
import dynamic from "next/dynamic";
import { getCategoryVideos } from "@/data/categoryVideos";
import {
  CategoryVideoVariantKey,
  resolveVideoVariantKey,
} from "./types";
import Variant4MinimalIndustrial from "./Variant4MinimalIndustrial";

// Lazy-load varian prototipe agar bundle awal halaman produksi (/products) tetap ramping & cepat
const Variant1ModernTripleCard = dynamic(() => import("./Variant1ModernTripleCard"));
const Variant2SpotlightCinema = dynamic(() => import("./Variant2SpotlightCinema"));
const Variant3HorizontalCarousel = dynamic(() => import("./Variant3HorizontalCarousel"));
const Variant3CompactCarousel = dynamic(() => import("./Variant3CompactCarousel"));
const Variant4IndustrialProofCard = dynamic(() => import("./Variant4IndustrialProofCard"));
const Variant5BentoMediaPods = dynamic(() => import("./Variant5BentoMediaPods"));

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
