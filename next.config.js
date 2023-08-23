const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/utils/i18n.ts',
)

const sharedConfig = require('./webpack.sharedConfig.js')

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  reactStrictMode: true,
  webpack: sharedConfig,
  images: {
    domains: ['ctfassets.net', 'images.ctfassets.net'],
  },
})
