/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // <<< This tells Next.js to treat `/app` inside `/src` properly
  },
};

export default nextConfig;