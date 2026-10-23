import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asiaplastik.com",
      },
    ],
  },
  experimental: {
    cpus: 2,
    workerThreads: false,
  },
};

export default nextConfig;
