module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@emotion/babel-plugin',
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
}
