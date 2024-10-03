/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3007',
        pathname: '/data/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'server.arashkyadegar.ir',
        port: '',
        pathname: '/data/uploads/**',
      },
    ],
  },
};

export default nextConfig;
