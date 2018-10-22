const env = {
  'process.env.CONTENTFUL_SPACE_ID': process.env.CONTENTFUL_SPACE_ID,
  'process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN': process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
  'process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN': process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
}

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', env],
    ['styled-components', {
      'ssr': true,
      'displayName': true,
      'preprocess': false,
    }],
  ]
};
