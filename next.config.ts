import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/demos/apex-plumbing",
        destination: "/demos/apex-plumbing/index.html",
      },
      {
        source: "/demos/spark-electrical",
        destination: "/demos/spark-electrical/index.html",
      },
      {
        source: "/demos/atelier-noir",
        destination: "/demos/atelier-noir/index.html",
      },
      {
        source: "/demos/oakwood-builders",
        destination: "/demos/oakwood-builders/index.html",
      },
    ];
  },
};

export default nextConfig;
