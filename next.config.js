/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "server",
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
};

module.exports = nextConfig;
