/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
      {
        protocol: 'https',
        hostname: 'web.pokerbaazicdn.com',
        port: '',
        pathname: '/asset/**',
      }
    ],
  },
};

module.exports = nextConfig;
