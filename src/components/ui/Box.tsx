import React from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'

export interface BoxProps extends ViewProps {
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export function Box({
  flexDirection = 'column',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  style,
  children,
  ...props
}: BoxProps) {
  return (
    <View
      style={[
        {
          flexDirection,
          justifyContent,
          alignItems,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  )
}
