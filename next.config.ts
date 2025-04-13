import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,  // Ensures that React's strict mode is enabled
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your external image source
        port: '',
        pathname: '/path/to/images/**', // Replace with actual image path
      },
    ],
  },
  // You can add other custom Next.js config options here
};

export default nextConfig;