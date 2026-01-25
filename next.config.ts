import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
        port: '',
        pathname: '/media/**',
      },
    ], // add any external domain you want to use
  },
  /* config options here */
};

export default nextConfig;
