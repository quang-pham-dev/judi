import { SvgProps, SvgXml } from 'react-native-svg'
import { useThemeColor } from '@/hooks/use-theme-color'

interface ThemedIconProps extends SvgProps {
  lightColor?: string
  darkColor?: string
  name: string
  iconSet: Record<string, string>
  size?: number
  color?: 'primary' | 'secondary' | 'text'
}

export const ThemedIcon = ({
  lightColor,
  darkColor,
  name,
  iconSet,
  size = 24,
  ...props
}: ThemedIconProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon')

  return (
    <SvgXml
      xml={iconSet[name]}
      width={size}
      height={size}
      color={color}
      {...props}
    />
  )
}
