import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui, createFont, getVariableValue } from 'tamagui'

import { themes } from './themes'
// const systemFont = createFont({
//   family: 'System',
//   size: {
//     1: 11,
//     2: 12,
//     3: 13,
//     4: 14,
//     true: 14, // Default size
//     5: 16,
//     6: 18,
//     7: 20,
//     8: 23,
//     9: 30,
//     10: 46,
//     11: 55,
//     12: 62,
//     13: 72,
//     14: 92,
//     15: 114,
//     16: 134,
//   },
//   lineHeight: {
//     // 1 will be 22
//     2: 22,
//   },
//   weight: {
//     1: '300', // Light
//     2: '400', // Regular
//     3: '500', // Medium
//     4: '600', // SemiBold
//     5: '700', // Bold
//     6: '800', // ExtraBold
//     7: '900', // Black
//   },
//   letterSpacing: {
//     1: 0,
//     2: -1,
//     // 3 will be -1
//   },
//   // (native only) swaps out fonts by face/style
//   face: {
//     300: { normal: 'InterRegular' },
//     400: { normal: 'InterRegular' },
//     500: { normal: 'InterRegular' },
//     600: { normal: 'InterRegular' },
//     700: { normal: 'InterRegular' },
//   },
// })

const headingSize = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134,
}

export const headingFont = createFont({
  family: 'System',

  // transform: {
  //   6: 'uppercase',
  //   7: 'none',
  // },
  weight: {
    3: '800',
    4: '900',
  },
  face: {
    800: { normal: 'inter_semibold' },
    900: { normal: 'inter_bold' },
  },
  size: Object.fromEntries(
    Object.entries(headingSize).map(([k, v]) => [k, getVariableValue(v)])
  ),
  lineHeight: Object.fromEntries(
    Object.entries(headingSize).map(([k, v]) => [k, getVariableValue(v) + 4])
  ),
})

const bodySize = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134,
}
export const bodyFont = createFont({
  family: 'System',
  weight: {
    1: '300',
    // 2 will be 300
    4: '400',
    6: '600',
  },
  face: {
    300: { normal: 'inter_regular' },
    400: { normal: 'inter_regular' },
    600: { normal: 'inter_regular' },
  },
  size: Object.fromEntries(
    Object.entries(bodySize).map(([k, v]) => [k, getVariableValue(v) * 1.2])
  ),
  lineHeight: Object.fromEntries(
    Object.entries(headingSize).map(([k, v]) => [k, getVariableValue(v) + 5])
  ),
})

export const config = createTamagui({
  ...defaultConfig,
  themes,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
