module.exports = (config = {}) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          memo: true,
          replaceAttrValues: {
            '#000000': 'currentColor',
            '#000': 'currentColor',
          },
          svgoConfig: {
            multipass: true,
            plugins: [
              {
                name: 'cleanupNumericValues',
                params: {
                  floatPrecision: 2,
                },
              },
              {
                name: 'removeViewBox',
                active: false,
              },
              {
                name: 'addAttributesToSVGElement',
                params: {
                  attributes: [{ preserveAspectRatio: 'xMinYMid meet' }],
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
