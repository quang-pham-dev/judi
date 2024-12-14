import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as ReactNavigationThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { RootProvider } from '@/lib/providers/root-provider'
import { useTheme } from '@/context/theme-context'

// Boundary for error thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <RootProvider>
      <NavigationContent />
    </RootProvider>
  )
}

function NavigationContent() {
  const { theme } = useTheme()

  return (
    <ReactNavigationThemeProvider
      value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot />
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </ReactNavigationThemeProvider>
  )
}
