import withCSS from '@zeit/next-css';
import { fetchPathMapForNextJS } from './scripts/contentful';

const exportPathMap = async () => {
  const contentfulPages = await fetchPathMapForNextJS();
  console.log({
    '/': { page: '/' },
    ...contentfulPages,
  });
  return {
    '/': { page: '/' },
    ...contentfulPages,
  };
};

// const {
//   CONTENTFUL_SPACE_ID,
//   CONTENTFUL_DELIVERY_TOKEN,
// } = process.env;

export default withCSS({
  // publicRuntimeConfig: { // Will be available on both server and client
  //   contentfulSpaceId: CONTENTFUL_SPACE_ID,
  //   contentfulContentDeliveryToken: CONTENTFUL_DELIVERY_TOKEN,
  // },
  exportPathMap,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000,
      aggregateTimeout: 1000,
    };
    return config;
  },
});
