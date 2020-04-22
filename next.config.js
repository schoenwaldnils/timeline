const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const sharedConfig = require('./webpack.sharedConfig.js')

module.exports = withBundleAnalyzer({
  exportTrailingSlash: true,
  webpack: sharedConfig,
})
