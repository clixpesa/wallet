import { createFont, isAndroid } from '@tamagui/core'

// Font weights
const INTER_WEIGHT = '400'
const MEDIUM_WEIGHT = '500'

// Font families
const fontFamily = {
  inter: 'Inter-Regular',
  medium: 'Inter-Medium',
}

const androidFace = {
  [INTER_WEIGHT]: { normal: fontFamily.inter },
  [MEDIUM_WEIGHT]: { normal: fontFamily.medium },
}

const getFontProps = (family: string, weight: string) => ({
  family,
  ...(isAndroid ? { face: androidFace } : null),
  weight: {
    true: weight,
  },
})

export const fonts = {
  heading1: {
    family: fontFamily.inter,
    size: 52,
    lineHeight: 52 * 0.96,
    weight: INTER_WEIGHT,
  },
  heading2: {
    family: fontFamily.inter,
    size: 36,
    lineHeight: 40,
    weight: INTER_WEIGHT,
  },
  heading3: {
    family: fontFamily.inter,
    size: 24,
    lineHeight: 24 * 1.2,
    weight: INTER_WEIGHT,
  },
  subheading1: {
    family: fontFamily.inter,
    size: 18,
    lineHeight: 24,
    weight: INTER_WEIGHT,
  },
  subheading2: {
    family: fontFamily.inter,
    size: 16,
    lineHeight: 20,
    weight: INTER_WEIGHT,
  },
  body1: {
    family: fontFamily.inter,
    size: 18,
    lineHeight: 18 * 1.3,
    weight: INTER_WEIGHT,
  },
  body2: {
    family: fontFamily.inter,
    size: 16,
    lineHeight: 16 * 1.3,
    weight: INTER_WEIGHT,
  },
  body3: {
    family: fontFamily.inter,
    size: 14,
    lineHeight: 14 * 1.3,
    weight: INTER_WEIGHT,
  },
  body4: {
    family: fontFamily.inter,
    size: 12,
    lineHeight: 16,
    weight: INTER_WEIGHT,
  },
  buttonLabel1: {
    family: fontFamily.medium,
    size: 18,
    lineHeight: 18 * 1.15,
    weight: MEDIUM_WEIGHT,
  },
  buttonLabel2: {
    family: fontFamily.medium,
    size: 16,
    lineHeight: 16 * 1.15,
    weight: MEDIUM_WEIGHT,
  },
  buttonLabel3: {
    family: fontFamily.medium,
    size: 14,
    lineHeight: 14 * 1.15,
    weight: MEDIUM_WEIGHT,
  },
  buttonLabel4: {
    family: fontFamily.medium,
    size: 12,
    lineHeight: 12 * 1.15,
    weight: MEDIUM_WEIGHT,
  },
} as const

export const headingFont = createFont({
  ...getFontProps(fontFamily.inter, INTER_WEIGHT),
  size: {
    1: fonts.heading3.size,
    2: fonts.heading2.size,
    3: fonts.heading1.size,
    true: fonts.heading2.size,
  },
  lineHeight: {
    1: fonts.heading3.lineHeight,
    2: fonts.heading2.lineHeight,
    3: fonts.heading1.lineHeight,
    true: fonts.heading2.lineHeight,
  },
})

export const subHeadingFont = createFont({
  ...getFontProps(fontFamily.inter, INTER_WEIGHT),
  size: {
    1: fonts.subheading2.size,
    2: fonts.subheading1.size,
    true: fonts.subheading1.size,
  },

  lineHeight: {
    1: fonts.subheading2.lineHeight,
    2: fonts.subheading1.lineHeight,
    true: fonts.subheading1.lineHeight,
  },
})

export const bodyFont = createFont({
  ...getFontProps(fontFamily.inter, INTER_WEIGHT),
  size: {
    1: fonts.body4.size,
    2: fonts.body3.size,
    3: fonts.body2.size,
    4: fonts.body1.size,
    true: fonts.body2.size,
  },
  lineHeight: {
    1: fonts.body4.lineHeight,
    2: fonts.body3.lineHeight,
    3: fonts.body2.lineHeight,
    4: fonts.body1.lineHeight,
    true: fonts.body2.lineHeight,
  },
})

export const buttonFont = createFont({
  ...getFontProps(fontFamily.medium, MEDIUM_WEIGHT),
  size: {
    1: fonts.buttonLabel4.size,
    2: fonts.buttonLabel3.size,
    3: fonts.buttonLabel2.size,
    4: fonts.buttonLabel1.size,
    true: fonts.buttonLabel2.size,
  },
  lineHeight: {
    1: fonts.buttonLabel4.lineHeight,
    2: fonts.buttonLabel3.lineHeight,
    3: fonts.buttonLabel2.lineHeight,
    4: fonts.buttonLabel1.lineHeight,
    true: fonts.buttonLabel2.lineHeight,
  },
})

export const allFonts = {
  heading: headingFont,
  subHeading: subHeadingFont,
  body: bodyFont,
  button: buttonFont,
}
