import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/demos/apex-plumbing",
        destination: "/demos/apex-plumbing/index.html",
      },
      {
        source: "/demos/northfield-advisory",
        destination: "/demos/northfield-advisory/index.html",
      },
      {
        source: "/demos/atelier-noir",
        destination: "/demos/atelier-noir/index.html",
      },
    ];
  },
};

export default nextConfig;
