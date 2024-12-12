import { PropsWithChildren, Suspense } from 'react'
import { StyleSheet, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { RootSiblingParent } from 'react-native-root-siblings'

import { LanguagesProvider } from '@/context/language'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { ReactQueryProvider } from './react-query-provider'
import I18nProvider from '@/locale/i18nProvider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export function RootProvider({ children }: Readonly<PropsWithChildren>) {
  const colorScheme = useColorScheme()

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <LanguagesProvider>
              <I18nProvider>
                <ReactQueryProvider>{children}</ReactQueryProvider>
              </I18nProvider>
            </LanguagesProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Suspense>
  )
}
