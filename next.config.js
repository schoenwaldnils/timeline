const withCSS = require('@zeit/next-css');
const config = require('config');

module.exports = withCSS({
  exportPathMap: async () => {
    return {
      '/': {
        page: '/',
      },
    };
  },
  publicRuntimeConfig: { // Will be available on both server and client
    CONTENTFUL_SPACE_ID: config.get('CONTENTFUL_SPACE_ID'),
  },
});
