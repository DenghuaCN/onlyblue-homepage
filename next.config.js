/**
 * next.config.js
 * @type {import('next').NextConfig}
 */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'denghua-blog.oss-cn-shenzhen.aliyuncs.com',
        port: '443',
        pathname: '/**'
      }
    ]
  }
}

module.exports = {
  ...nextConfig,
  webpack: (config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@public': path.resolve(__dirname, './public'),
    }
    return config
  }
};