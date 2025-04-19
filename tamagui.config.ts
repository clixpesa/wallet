import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { allFonts } from 'fonts'

import { themes } from './themes'

export const config = createTamagui({
  ...defaultConfig,
  themes,
  fonts: {
    ...defaultConfig.fonts,

    heading: allFonts.heading,
    body: allFonts.body,
    button: allFonts.button,
    subHeading: allFonts.subHeading,
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
