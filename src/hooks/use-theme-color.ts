/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { COLORS } from '@/themes/colors'
import { useTheme } from '@/context/theme-context'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark,
) {
  const { theme } = useTheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return COLORS[theme][colorName]
  }
}
