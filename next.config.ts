import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 750, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
  compress: true,
};

export default nextConfig;
