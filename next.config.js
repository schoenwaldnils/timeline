module.exports = {
  exportTrailingSlash: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            memo: true,
          },
        },
        'url-loader',
      ],
    })

    return config
  },
}
