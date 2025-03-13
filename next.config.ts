import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    "next/dist/compiled/@next/react-dev-overlay",
    "tailwind-merge",
  ],
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
