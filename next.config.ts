import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asiaplastik.com",
      },
    ],
  },
  experimental: {
    cpus: 2,
  },
};

export default nextConfig;
