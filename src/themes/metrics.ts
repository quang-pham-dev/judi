import { Dimensions, FlexStyle } from 'react-native'
import { COLORS } from './colors'
import { TYPOGRAPHY } from './typography'

const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

const { fontSize, lineHeight, letterSpacing, type } = TYPOGRAPHY

const borderRadius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  '4xl': 26,
  full: 9999,
  circle: '50%',
} as const

const heading = {
  h1: {
    color: COLORS.light.text,
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight['4xl'],
    fontFamily: type.medium,
    letterSpacing: letterSpacing.lg,
  },

  // Other heading styles
}

// Spacing types
export type ISpacing = Pick<
  FlexStyle,
  | 'margin'
  | 'marginVertical'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginBottom'
  | 'padding'
  | 'paddingVertical'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingBottom'
>

export const METRICS = {
  screenHeight,
  screenWidth,
  borderRadius,
  heading,
} as const
