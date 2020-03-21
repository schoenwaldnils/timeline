const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportTrailingSlash: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.stories.tsx$/,
      loader: 'ignore-loader',
    })
    return config
  },
})
