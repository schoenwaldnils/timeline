/* eslint-disable @typescript-eslint/no-var-requires */
// const withBundleAnalyzer = require('@next/bundle-analyzer')()
const sharedConfig = require('./webpack.sharedConfig.js')

let config = {
  trailingSlash: true,
  webpack: sharedConfig,
  images: {
    domains: ['ctfassets.net', 'images.ctfassets.net'],
  },
}

// config = withBundleAnalyzer(config)

module.exports = config
