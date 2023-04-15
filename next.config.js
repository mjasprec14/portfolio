/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    NEXT_PUBLIC_SANITY_DATASET:process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_BASE_URL:process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION
  },
};

module.exports = nextConfig;
