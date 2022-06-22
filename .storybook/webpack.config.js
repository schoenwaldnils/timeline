const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const fs = require('fs')
const sharedConfig = require('../webpack.sharedConfig.js')

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      )
    }
    currDir = dir
  }
}

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  })

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test('.svg'),
  )

  fileLoaderRule.exclude = path.resolve(__dirname, '../src')

  config.resolve.extensions.push('.ts', '.tsx', '.svg')

  config.resolve.plugins = [new TsconfigPathsPlugin()]

  config.resolve.alias = {
    ...config.resolve.alias,
    '@/': path.resolve(__dirname, '../src'),
    // to solve "Can't resolve 'fs' in 'node_modules/next-i18next'"
    // https://github.com/isaachinman/next-i18next/issues/935#issuecomment-784668711
    'next-i18next': getPackageDir('react-i18next'),
    '@emotion/core': getPackageDir('@emotion/react'),
    '@emotion/styled': getPackageDir('@emotion/styled'),
    'emotion-theming': getPackageDir('@emotion/react'),
  }

  config.resolve.plugins = [new TsconfigPathsPlugin()]

  return sharedConfig(config)
}
