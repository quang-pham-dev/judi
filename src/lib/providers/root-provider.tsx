import { PropsWithChildren, Suspense } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'

import { ThemedText } from '@/components/ThemedText'
import { LanguagesProvider } from '@/context/language-context'
import { ThemeProvider } from '@/context/theme-context'
import { KeyboardControllerProvider } from '@/context/keyboard-controller-context'
import I18nProvider from '@/locale/i18nProvider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export function RootProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <Suspense fallback={<ThemedText>Loading...</ThemedText>}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ThemeProvider>
            <LanguagesProvider>
              <KeyboardControllerProvider>
                <I18nProvider>{children}</I18nProvider>
              </KeyboardControllerProvider>
            </LanguagesProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Suspense>
  )
}
