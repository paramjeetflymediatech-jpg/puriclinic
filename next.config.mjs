/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '200mb', // Increase for video uploads
    },
  },
  trailingSlash: true,
};

export default nextConfig;
