import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // images: {
  //
  // }
  images: {
    domains: ['image.tmdb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
        search: ''
      }
    ]
  }
};

export default nextConfig;
