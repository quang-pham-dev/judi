/**
 * Base colors
 *
 * These are the base colors that are used to create the palette.
 *
 * @see https://www.figma.com/design/design-of-project
 */

/**
 * Base color palette
 * These are the raw colors that will be used to create semantic tokens
 */
const palette = {
  // Primary colors
  blue: {
    100: '#F4F7FB',
    200: '#DCE3EC',
    300: '#B8C6D6',
    400: '#A0AAB8',
    500: '#687076',
    600: '#214B61',
    700: '#162F44',
    800: '#0C1E30',
    900: '#1D4D6E',
  },
  green: {
    light: '#FFE492',
    dark: '#6C6243',
  },
} as const

/**
 * Semantic color tokens
 * These tokens describe the purpose of the color rather than the color itself
 */
// Input specific tokens
export interface InputColorTokens {
  background: string
  text: string
  placeholder: string
  border: string
  borderFocused: string
  disabled: string
  error: string
}

export type ColorTokens = {
  // Text colors
  text: string
  textSecondary: string
  textPlaceholder: string

  // Component specific tokens
  input: InputColorTokens

  // Background colors
  background: string
  backgroundElevated: string
  backgroundHighlight: string

  // Border colors
  border: string
  borderFocus: string

  // Interactive elements
  tint: string
  icon: string
  tabIconDefault: string
  tabIconSelected: string

  // Specific use cases
  modal: string
  image: string
}

export interface ThemeColors {
  light: ColorTokens
  dark: ColorTokens
}

/**
 * Theme configuration
 * Maps semantic tokens to actual colors from our palette for each theme
 */
export const COLORS: ThemeColors = {
  light: {
    // Text colors
    text: palette.blue[900],
    textSecondary: palette.blue[500],
    textPlaceholder: palette.blue[400],

    // Input specific colors
    input: {
      background: palette.blue[100],
      text: palette.blue[900],
      placeholder: palette.blue[400],
      border: palette.blue[300],
      borderFocused: palette.blue[900],
      disabled: palette.blue[200],
      error: '#FF3B30',
    },

    // Background colors
    background: palette.blue[100],
    backgroundElevated: palette.blue[200],
    backgroundHighlight: palette.blue[300],

    // Border colors
    border: palette.blue[300],
    borderFocus: palette.blue[900],

    // Interactive elements
    tint: palette.blue[900],
    icon: palette.blue[500],
    tabIconDefault: palette.blue[500],
    tabIconSelected: palette.blue[900],

    // Specific use cases
    modal: palette.blue[100],
    image: palette.blue[500],
  },
  dark: {
    // Text colors
    text: '#ECEDEE',
    textSecondary: palette.blue[500],
    textPlaceholder: palette.blue[500],

    // Input specific colors
    input: {
      background: palette.blue[700],
      text: '#ECEDEE',
      placeholder: palette.blue[500],
      border: palette.blue[600],
      borderFocused: palette.blue[300],
      disabled: palette.blue[600],
      error: '#FF453A',
    },

    // Background colors
    background: palette.blue[800],
    backgroundElevated: palette.blue[700],
    backgroundHighlight: palette.blue[600],

    // Border colors
    border: palette.blue[600],
    borderFocus: '#ECEDEE',

    // Interactive elements
    tint: palette.blue[900],
    icon: palette.blue[500],
    tabIconDefault: palette.blue[500],
    tabIconSelected: palette.blue[900],

    // Specific use cases
    modal: palette.blue[800],
    image: palette.blue[500],
  },
}
