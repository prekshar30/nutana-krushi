/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // React 18 / Leaflet double mount smooth rendering
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
