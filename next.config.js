/** @type {import('next').NextConfig} */

const isProd = process.env.NODE.ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd
    ? 'https://mj-asprec-portfolio.vercel.app'
    : 'http://localhost:3000',
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
