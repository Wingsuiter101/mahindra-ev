import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Adds trailing slashes to all routes — prevents 404s on static hosts
  // (GitHub Pages, Netlify, etc.) that serve index.html per directory.
  trailingSlash: true,

  images: {
    // Serve images unoptimized so the deck works on any static host
    // without a Node server running Next.js image optimisation.
    unoptimized: true,
  },
};

export default nextConfig;
