const sharedConfig = require('./webpack.sharedConfig.js')

module.exports = {
  exportTrailingSlash: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loader: 'ignore-loader',
    })
    return { ...config, ...sharedConfig(config) }
  },
}
