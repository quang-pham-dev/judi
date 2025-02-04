import React, { useState } from 'react'
import { StyleSheet, TextInput, View, ViewStyle, TextStyle } from 'react-native'
import { useThemeColor } from '@/hooks/use-theme-color'
import type { InputColorTokens } from '@/themes/colors'

export interface ThemedInputProps
  extends Omit<React.ComponentProps<typeof TextInput>, 'style'> {
  variant?: 'default' | 'outlined'
  lightColor?: Partial<InputColorTokens>
  darkColor?: Partial<InputColorTokens>
  containerStyle?: ViewStyle
  inputStyle?: TextStyle
  error?: boolean
  disabled?: boolean
}

export const ThemedInput = ({
  variant = 'default',
  lightColor,
  darkColor,
  containerStyle,
  inputStyle,
  error = false,
  disabled = false,
  ...props
}: ThemedInputProps) => {
  const colors = useThemeColor(
    { light: lightColor, dark: darkColor },
    'input',
  ) as InputColorTokens
  const [isFocused, setIsFocused] = useState(false)

  const getVariantStyles = () => {
    const baseStyles: ViewStyle = {
      backgroundColor: colors.background,
      borderColor: error
        ? colors.error
        : isFocused
          ? colors.borderFocused
          : colors.border,
      borderWidth: variant === 'outlined' ? 1 : 0,
      borderBottomWidth: variant === 'default' ? 1 : undefined,
      borderRadius: variant === 'outlined' ? 8 : 0,
      paddingHorizontal: 16,
      paddingVertical: 12,
      opacity: disabled ? 0.6 : 1,
    }

    return baseStyles
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[
          styles.input,
          getVariantStyles(),
          {
            color: disabled ? colors.disabled : colors.text,
          },
          inputStyle,
        ]}
        placeholderTextColor={colors.placeholder}
        editable={!disabled}
        onFocus={e => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={e => {
          setIsFocused(false)
          props.onBlur?.(e)
        }}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
  },
})
