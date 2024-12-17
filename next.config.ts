import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        hostname:"img.youtube.com"
      },
      {
        hostname:"cdn.myanimelist.net"
      }
    ]
  }
};

export default nextConfig;
