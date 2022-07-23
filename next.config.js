/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'admin.hollys.co.kr'],
  },
};

module.exports = nextConfig;
``;
