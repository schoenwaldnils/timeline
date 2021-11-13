/* eslint-disable @typescript-eslint/no-var-requires */
// const withBundleAnalyzer = require('@next/bundle-analyzer')()
const sharedConfig = require('./webpack.sharedConfig.js')

let config = {
  webpack5: false,
  trailingSlash: true,
  webpack: sharedConfig,
}

// config = withBundleAnalyzer(config)

module.exports = config
