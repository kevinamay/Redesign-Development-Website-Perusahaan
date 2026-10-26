"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { VideoMediaItem, OFFICIAL_ASIA_PLASTIK_VIDEOS } from "@/data/mediaData";
import { VideoModal } from "./components/VideoModal";
import { VariantGridHomepage } from "./components/VariantGridHomepage";
import { VariantGalleryMedia } from "./components/VariantGalleryMedia";
import { VariantCinemaTheater } from "./components/VariantCinemaTheater";
import { VariantHorizontalReel } from "./components/VariantHorizontalReel";
import { VariantEnterpriseStoryline } from "./components/VariantEnterpriseStoryline";
import { PrototypeVideoSwitcher, VIDEO_PROTOTYPE_VARIANTS } from "./components/PrototypeVideoSwitcher";

function VideoPrototypeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read variant from query param (default: "grid")
  const paramVariant = searchParams.get("variant") || "grid";
  const [prevParamVariant, setPrevParamVariant] = useState(paramVariant);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  if (paramVariant !== prevParamVariant) {
    setPrevParamVariant(paramVariant);
    setSelectedVariant(null);
  }

  const currentVariant = selectedVariant ?? paramVariant;
  const [activeVideo, setActiveVideo] = useState<VideoMediaItem | null>(null);
  const [videos, setVideos] = useState<VideoMediaItem[]>(OFFICIAL_ASIA_PLASTIK_VIDEOS);

  // Fetch updated videos from API if available
  useEffect(() => {
    fetch("/api/media/youtube")
      .then((res) => res.json())
      .then((resData) => {
        const videoList = resData.videos || resData.data;
        if (Array.isArray(videoList) && videoList.length > 0) {
          setVideos(videoList);
        }
      })
      .catch(() => {
        // Fallback to static official video list
      });
  }, []);

  const switchVariant = (newVariantKey: string) => {
    setSelectedVariant(newVariantKey);
    const params = new URLSearchParams(searchParams.toString());
    params.set("variant", newVariantKey);
    router.replace(`/prototype/video?${params.toString()}`);
  };

  const activeVariantMeta =
    VIDEO_PROTOTYPE_VARIANTS.find((v) => v.key === currentVariant) ||
    VIDEO_PROTOTYPE_VARIANTS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pb-28">
      {/* Top Bar Banner for Prototype */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-mono font-bold tracking-wider uppercase text-[11px] border border-amber-500/30">
            PROTOTYPE LAB
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            Eksplorasi Format Video YouTube Resmi CV. Asia Plastik
          </span>
          <span className="text-slate-500 hidden md:inline">•</span>
          <span className="text-slate-400 font-semibold hidden md:inline">
            Sedang Aktif: <strong className="text-white">{activeVariantMeta.name}</strong>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors underline text-xs"
          >
            ← Kembali ke Website Utama
          </Link>
        </div>
      </header>

      {/* Main Variant Container */}
      <main className="flex-1">
        {currentVariant === "grid" && (
          <VariantGridHomepage
            videos={videos}
            onPlay={setActiveVideo}
            onSwitchVariant={switchVariant}
          />
        )}

        {currentVariant === "gallery" && (
          <VariantGalleryMedia
            videos={videos}
            onPlay={setActiveVideo}
          />
        )}

        {currentVariant === "cinema" && (
          <VariantCinemaTheater
            videos={videos}
            onPlay={setActiveVideo}
          />
        )}

        {currentVariant === "reel" && (
          <VariantHorizontalReel
            videos={videos}
            onPlay={setActiveVideo}
          />
        )}

        {currentVariant === "enterprise" && (
          <VariantEnterpriseStoryline
            videos={videos}
            onPlay={setActiveVideo}
          />
        )}
      </main>

      {/* Floating Bottom Switcher (Keyboard Navigable & URL-synced) */}
      <PrototypeVideoSwitcher
        currentKey={currentVariant}
        onSelectVariant={switchVariant}
      />

      {/* Interactive Video Modal Player */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}

export default function VideoPrototypePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white font-mono text-sm">
          Memuat prototipe desain...
        </div>
      }
    >
      <VideoPrototypeContent />
    </Suspense>
  );
}
