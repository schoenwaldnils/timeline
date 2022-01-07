/* eslint-disable @typescript-eslint/no-var-requires */
// const withBundleAnalyzer = require('@next/bundle-analyzer')()
const withPWA = require('next-pwa')
const sharedConfig = require('./webpack.sharedConfig.js')
const runtimeCaching = require('next-pwa/cache')
const { i18n } = require('./next-i18next.config')
const process = require('process')

const config = {
  i18n,
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  webpack: sharedConfig,
  images: {
    domains: ['ctfassets.net', 'images.ctfassets.net'],
  },
}

module.exports = withPWA(config)
