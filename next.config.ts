import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow higher quality presets for full-bleed hero & product shots on retina / mobile
    qualities: [75, 85, 90, 92, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },
};

export default nextConfig;
