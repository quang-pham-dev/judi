/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { COLORS } from '@/themes/colors'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { THEME_MODE } from '@/constants/common'
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark,
) {
  const theme = useColorScheme() ?? THEME_MODE.LIGHT
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return COLORS[theme][colorName]
  }
}
