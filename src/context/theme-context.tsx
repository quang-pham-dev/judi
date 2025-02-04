import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { Appearance } from 'react-native'
import { useStorageState } from '@/hooks/use-storage-state'
import { StorageKeys } from '@/constants/factory-key'
import { THEME_MODE } from '@/constants/theme'

type Theme = typeof THEME_MODE.LIGHT | typeof THEME_MODE.DARK

export type ThemeMode = 'system' | 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useStorageState(StorageKeys.USER_THEME)
  const [themeModeState, setThemeModeState] = useStorageState(
    StorageKeys.THEME_MODE,
  )

  const [themeMode, setThemeMode] = useState<ThemeMode>(
    (themeModeState[1] as ThemeMode) || 'system',
  )

  const [theme, setTheme] = useState<Theme>(
    (themeState[1] as Theme) || Appearance.getColorScheme() || 'light',
  )

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (themeMode === 'system' && colorScheme) {
        setTheme(colorScheme as Theme)
        setThemeState(colorScheme)
      }
    })

    return () => {
      subscription.remove()
    }
  }, [themeMode])

  const updateThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode)
    setThemeModeState(mode)

    if (mode === 'system') {
      const systemTheme = Appearance.getColorScheme() || 'light'
      setTheme(systemTheme as Theme)
      setThemeState(systemTheme)
    } else {
      setTheme(mode as Theme)
      setThemeState(mode)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setThemeState(newTheme)
    setThemeMode(newTheme)
    setThemeModeState(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeMode,
        setThemeMode: updateThemeMode,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
