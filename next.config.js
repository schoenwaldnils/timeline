const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: async () => {
    return {
      '/': {
        page: '/',
      },
    }
  },
})
