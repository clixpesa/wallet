import { dirname, join } from 'path'

module.exports = {
  stories: ['../../../packages/ui/**/*.@(mdx|stories.@(ts|tsx))'],
  features: {},
  addons: [
    getAbsolutePath('@storybook/addon-ondevice-controls'),
    getAbsolutePath("@chromatic-com/storybook"),
    '@storybook/addon-webpack5-compiler-swc'
  ],
  docs: {},
}

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
