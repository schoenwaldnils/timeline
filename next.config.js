const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  exportPathMap: async () => {
    return {
      '/': {
        page: '/',
      },
    };
  },
});
