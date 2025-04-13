import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,  // Ensures that React's strict mode is enabled
  images: {
    domains: ['example.com'], // Add allowed domains for external images
  },
  // You can add other custom Next.js config options here
};

export default nextConfig;