import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
