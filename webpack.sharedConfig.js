module.exports = config => {
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          memo: true,
          svgoConfig: {
            plugins: [
              {
                cleanupIDs: false,
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
