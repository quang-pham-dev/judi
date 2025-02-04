import Animated from 'react-native-reanimated'
import { type ViewProps } from 'react-native'
import { useThemeColor } from '@/hooks/use-theme-color'

export type ThemedAnimatedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedAnimatedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedAnimatedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return <Animated.View style={[{ backgroundColor }, style]} {...otherProps} />
}
