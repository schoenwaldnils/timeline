const withCSS = require('@zeit/next-css');
const cfGraphql = require('./scripts/cfGraphql');
const query = require('./scripts/gqlSchema');

module.exports = withCSS({
  exportPathMap: async () => {
    return {
      '/': {
        page: '/',
        query: {
          data: await cfGraphql(query),
        },
      },
    };
  },
});
