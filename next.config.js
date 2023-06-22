/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mars.jpl.nasa.gov", "mars.nasa.gov", "images-api.nasa.gov"],
  },
};

module.exports = nextConfig;
