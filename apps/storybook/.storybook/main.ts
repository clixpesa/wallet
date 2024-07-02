import { dirname, join } from 'path'
import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../../../packages/ui/**/*.@(mdx|stories.@(ts|tsx))'],
  features: {},

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'solito',
          'expo-linking',
          'expo-constants',
          'expo-modules-core',
          'expo-document-picker',
          'expo-av',
          'expo-asset',
          'react-native-reanimated',
        ],
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
    getAbsolutePath('@chromatic-com/storybook'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
