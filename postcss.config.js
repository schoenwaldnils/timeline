const { viewportsCss } = require('./app/js/viewports')

module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {
      extensions: viewportsCss,
    },
    'postcss-color-function': {},
    'postcss-color-hex-alpha': {},
    'postcss-calc': {},
    autoprefixer: {},
    'postcss-reporter': {
      clearMessages: true,
    },
  },
})
