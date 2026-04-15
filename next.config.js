/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['sequelize', 'mysql2', 'node-cron'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'puriskinclinic.com',
      },
      {
        protocol: 'https',
        hostname: 'spcdn.shortpixel.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google user avatars from Places API
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },
};

module.exports = nextConfig;
