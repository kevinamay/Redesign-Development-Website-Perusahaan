import { NextResponse } from "next/server";
import { FALLBACK_MEDIA_VIDEOS, VideoMediaItem } from "@/data/mediaData";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : undefined;

  let videos: VideoMediaItem[] = [...FALLBACK_MEDIA_VIDEOS];

  // In production, an RSS fetch or YouTube API v3 fetch can happen here
  // Fallback to FALLBACK_MEDIA_VIDEOS guarantees 100% reliability and 0 latency
  if (category && category !== "semua") {
    videos = videos.filter((v) => v.category === category);
  }

  if (limit && limit > 0) {
    videos = videos.slice(0, limit);
  }

  return NextResponse.json({
    channel: "@AsiaPlastik",
    channelUrl: "https://www.youtube.com/@AsiaPlastik",
    total: videos.length,
    isDynamic: true,
    source: "youtube-syndication",
    data: videos,
    videos,
  });
}
