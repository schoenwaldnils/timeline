module.exports = (config = {}) => {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.(ts|tsx|js|jsx|md|mdx)$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          memo: true,
          svgoConfig: {
            plugins: [
              {
                // cleanupIDs: false,
                addAttributesToSVGElement: {
                  attributes: ['preserveAspectRatio="xMinYMid meet"'],
                },
              },
            ],
          },
        },
      },
      {
        loader: 'url-loader',
      },
    ],
    type: 'javascript/auto',
  })

  return config
}
