/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Ensures that React's strict mode is enabled
  experimental: {
    appDir: true,  // Enables the new app directory (for Next.js 13+ with React Server Components)
  },
  images: {
    domains: ['example.com'], // Allow external images, modify this with your domains
  },
  // You can add other custom Next.js config options here
}

module.exports = nextConfig;