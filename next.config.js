/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['sequelize', 'mysql2'],
  images: {
    localPatterns: [
      {
        pathname: '/uploads/**',
        search: '',
      },
      {
        pathname: '/**',
        search: '',
      },
    ],
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
    ],
  },
};

module.exports = nextConfig;
