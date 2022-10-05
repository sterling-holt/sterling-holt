/** @type {import('next').NextConfig} */


const nextConfig = {
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: ( config ) => {
    config.resolve.fallback = { fs: false };
    
    return config
  }
}
