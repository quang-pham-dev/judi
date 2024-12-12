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
import { THEME_MODE } from '@/constants/common'

type Theme = typeof THEME_MODE.LIGHT | typeof THEME_MODE.DARK

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useStorageState(StorageKeys.USER_THEME)
  const themePersisted = themeState[1] as Theme

  const [theme, setTheme] = useState<Theme>(
    themePersisted || Appearance.getColorScheme() || 'light',
  )

  useEffect(() => {
    const cachedTheme = themePersisted
    if (cachedTheme) {
      setTheme(cachedTheme as Theme)
    }
  }, [themePersisted])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
