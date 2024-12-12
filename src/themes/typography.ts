const type = {
  base: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
}

const fontSize = {
  xs: 12,
  sm: 14,
  xmd: 16,
  md: 18,
  lg: 20,
  xl: 24,
  '2xl': 30,
  '3xl': 36,
}

const lineHeight = {
  base: 14,
  xs: 16,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
  '2xl': 36,
  '3xl': 38,
  '4xl': 45,
} as const

const letterSpacing = {
  base: 0,
  xs: 0.25,
  sm: 0.5,
  md: 0.75,
  lg: 1,
  xl: 1.25,
  '2xl': 1.5,
  '3xl': 1.75,
} as const

const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const

export const TYPOGRAPHY = {
  type,
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
}
