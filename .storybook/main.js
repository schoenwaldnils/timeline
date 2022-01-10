module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions'],
  staticDirs: ['../public'],
}
