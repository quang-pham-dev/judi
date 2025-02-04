import React from 'react'
import { Image, ImageProps, StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/use-theme-color'

export interface ThemedImageProps extends ImageProps {
  lightColor?: string
  darkColor?: string
  variant?: 'default' | 'rounded' | 'circle'
}

export const ThemedImage = ({
  style,
  lightColor,
  darkColor,
  variant = 'default',
  ...props
}: ThemedImageProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  const variantStyles = {
    default: {},
    rounded: { borderRadius: 8 },
    circle: { borderRadius: 9999 },
  }

  return (
    <Image
      style={[variantStyles[variant], styles.image, { backgroundColor }]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
})
