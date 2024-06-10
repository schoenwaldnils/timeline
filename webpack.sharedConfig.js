module.exports = (config = {}) => {
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          // icon: true,
          memo: true,
          replaceAttrValues: {
            '#000000': 'currentColor',
            '#000': 'currentColor',
          },
          svgoConfig: {
            multipass: true,
            plugins: [
              {
                name: 'removeViewBox',
                active: false,
              },
              'removeDimensions',
              {
                name: 'cleanupNumericValues',
                params: {
                  floatPrecision: 2,
                },
              },
              {
                name: 'addAttributesToSVGElement',
                params: {
                  attributes: [
                    { preserveAspectRatio: 'xMinYMid meet' },
                    { height: '1em' },
                  ],
                },
              },
            ],
          },
        },
      },
      'url-loader',
    ],
  })

  return config
}
