const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const sharedConfig = require('../webpack.sharedConfig.js')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx', '.svg')

  // to solve "Can't resolve 'fs' in 'node_modules/next-i18next'"
  // https://github.com/isaachinman/next-i18next/issues/935#issuecomment-784668711
  config.resolve.alias = {
    ...config.resolve.alias,
    'next-i18next': 'react-i18next',
  }

  config.resolve.plugins = [new TsconfigPathsPlugin()]

  return sharedConfig(config)
}
