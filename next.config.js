/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const sharedConfig = require('./webpack.sharedConfig.js')

let config = {
  webpack5: false,
  trailingSlash: true,
  webpack: sharedConfig,
}

if (process.env.ANALYZE === 'true') {
  config = withBundleAnalyzer(config)
}

module.exports = config
