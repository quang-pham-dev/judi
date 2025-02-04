import React from 'react'
import {
  SafeAreaView as RNSafeAreaView,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SafeAreaView = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: ViewStyle
}) => {
  const inset = useSafeAreaInsets()

  return (
    <RNSafeAreaView style={[styles.container, { marginTop: inset.top }, style]}>
      {children}
    </RNSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
