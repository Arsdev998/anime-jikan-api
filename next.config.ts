import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "img.youtube.com",
      },
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

export default nextConfig;
