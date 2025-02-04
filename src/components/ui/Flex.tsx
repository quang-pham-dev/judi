import React from 'react'
import { View, ViewProps } from 'react-native'

import { StyleProp, ViewStyle } from 'react-native'

interface FlexProps extends ViewProps {
  direction?: 'row' | 'column'
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'baseline'
  align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline'
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const styleMap = {
  direction: {
    row: 'row',
    column: 'column',
  },
  justify: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    baseline: 'baseline',
  },
  align: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
}

export function Flex({
  direction = 'column',
  justify = 'start',
  align = 'stretch',
  style,
  children,
  ...props
}: FlexProps) {
  const flexDirection = styleMap.direction[
    direction
  ] as ViewStyle['flexDirection']
  const justifyContent = styleMap.justify[
    justify
  ] as ViewStyle['justifyContent']
  const alignItems = styleMap.align[align] as ViewStyle['alignItems']

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
