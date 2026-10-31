/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // ensures current project folder is root
  },
  serverExternalPackages: ['sequelize', 'mysql2', 'node-cron'],
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
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/hair-transplantation/\\"',
        destination: '/hair-transplantation/',
        permanent: true,
      },
      {
        source: '/hair-transplantation/\\"\\"',
        destination: '/hair-transplantation/',
        permanent: true,
      },
      {
        source: '/hair-transplantation/%22',
        destination: '/hair-transplantation/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/plugins/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/puri-skin-clinic',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/eye-filler',
        destination: '/',
        permanent: true,
      },
      {
        source: '/\\*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/\\$',
        destination: '/',
        permanent: true,
      },
      {
        source: '/After-all-what-could-be-the-connection-between-eating-habits-and-dry-skin',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/After-all-what-could-be-the-connection-between-eating-habits-and-dry-skin/\\?',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/After-all-what-could-be-the-connection-between-eating-habits-and-dry-skin/%3F',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/After-all-why-does-the-skin-look-dull-despite-using-good-and-expensive-beauty-products',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/After-all-why-does-the-skin-look-dull-despite-using-good-and-expensive-beauty-products/\\?',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/After-all-why-does-the-skin-look-dull-despite-using-good-and-expensive-beauty-products/%3F',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/tag/hair-care',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/2',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/tag/acne-treatment',
        destination: '/acne-treatment/',
        permanent: true,
      },
      {
        source: '/category/skin-treatment',
        destination: '/skin-related-services/',
        permanent: true,
      },
      {
        source: '/tag/hair-care-treatment',
        destination: '/hair-related-services/',
        permanent: true,
      },
      {
        source: '/tag/skin-care',
        destination: '/skin-related-services/',
        permanent: true,
      },
      {
        source: '/tag/clear-skin',
        destination: '/skin-related-services/',
        permanent: true,
      },
      {
        source: '/tag/hair-clinic',
        destination: '/hair-related-services/',
        permanent: true,
      },
      {
        source: '/category/acne-treatment',
        destination: '/acne-treatment/',
        permanent: true,
      },
      {
        source: '/tag/skincare',
        destination: '/skin-related-services/',
        permanent: true,
      },
      {
        source: '/category/hindi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/hair-care-service',
        destination: '/hair-related-services/',
        permanent: true,
      },
      {
        source: '/tag/skin-treatment',
        destination: '/skin-related-services/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:slug((?!admin|api|blogs|uploads|favicon.ico).+)/',
        destination: '/blogs/:slug/',
      },
    ];
  },
};

module.exports = nextConfig;
