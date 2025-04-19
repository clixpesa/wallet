import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

import { allFonts } from 'ui/theme/fonts'
import { themes } from 'ui/theme/themes'

export const config = createTamagui({
  ...defaultConfig,
  themes,
  fonts: allFonts,
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
