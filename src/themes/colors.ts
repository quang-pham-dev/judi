/**
 * Base colors
 *
 * These are the base colors that are used to create the palette.
 *
 * @see https://www.figma.com/design/design-of-project
 */

const tintColorLight = '#005B96'
const tintColorDark = '#1D4D6E'

export const COLORS = {
  light: {
    text: tintColorDark,
    darkText: '#0C1E30',
    background: '#F4F7FB',
    prebackground: '#DCE3EC',
    semibackground: '#B8C6D6',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    border: '#B8C6D6',
    placeholder: '#A0AAB8',
    green: '#FFE492',
  },
  dark: {
    text: '#ECEDEE',
    lightBlueText: '#B8C6D6',
    background: '#0C1E30',
    prebackground: '#162F44',
    semibackground: '#214B61',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: '#214B61',
    placeholder: '#687076',
    green: '#6C6243',
  },
}
