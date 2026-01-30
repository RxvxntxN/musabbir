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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ], // add any external domain you want to use
  },
  /* config options here */
};

export default nextConfig;
