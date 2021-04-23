const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const sharedConfig = require('./webpack.sharedConfig.js')

let config = {
  trailingSlash: true,
  webpack: sharedConfig,
  future: {
    webpack5: true,
  },
}

if (process.env.ANALYZE === 'true') {
  config = withBundleAnalyzer(config)
}

module.exports = config
