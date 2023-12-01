/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.nilecruisez.com",
      },
    ],
  },
};

module.exports = nextConfig;
