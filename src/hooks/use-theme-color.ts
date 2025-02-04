/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useMemo } from 'react'
import { COLORS } from '@/themes/colors'
import { useTheme } from '@/context/theme-context'

type ThemeColorValue<T> = T extends object ? string | Partial<T> : string
type ColorType<T> = T extends object ? T : string

export function useThemeColor<T = string>(
  props: { light?: ThemeColorValue<T>; dark?: ThemeColorValue<T> },
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark,
): ColorType<T> {
  const { theme } = useTheme()

  return useMemo(() => {
    const colorFromProps = props[theme]
    const defaultColor = COLORS[theme][colorName]

    if (colorFromProps) {
      if (typeof colorFromProps === 'string') {
        return colorFromProps as ColorType<T>
      }

      if (
        typeof defaultColor === 'object' &&
        defaultColor !== null &&
        typeof colorFromProps === 'object' &&
        colorFromProps !== null
      ) {
        const mergedColor = {
          ...(defaultColor as object),
          ...(colorFromProps as object),
        }
        return mergedColor as unknown as ColorType<T>
      }
    }

    return defaultColor as unknown as ColorType<T>
  }, [theme, props, colorName])
}
