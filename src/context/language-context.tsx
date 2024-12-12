import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { AppLanguage } from '@/locale/languages'

interface LanguagePreferences {
  primaryLanguage: string
  appLanguage: AppLanguage
}

type LanguageContextState = LanguagePreferences

interface LanguageContextApi {
  setPrimaryLanguage: (code2: string) => void
  setAppLanguage: (code2: AppLanguage) => void
}

export const LanguageStateContext = createContext<
  LanguageContextState | undefined
>(undefined)

export const LanguageApiContext = createContext<LanguageContextApi | undefined>(
  undefined,
)

export function LanguagesProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LanguagePreferences>(() => ({
    primaryLanguage: 'en',
    appLanguage: AppLanguage.en,
  }))

  const updateLanguagePrefs = useCallback(
    (updater: (prev: LanguagePreferences) => LanguagePreferences) => {
      setState(prev => {
        const next = updater(prev)
        // Persist changes to storage
        return next
      })
    },
    [],
  )

  useEffect(() => {
    // Initialize from storage
    // Set up storage change listener
    return () => {
      // Clean up storage listener
    }
  }, [])

  const api = useMemo(
    () => ({
      setPrimaryLanguage(code2: string) {
        updateLanguagePrefs(prev => ({ ...prev, primaryLanguage: code2 }))
      },
      setAppLanguage(code2: AppLanguage) {
        updateLanguagePrefs(prev => ({ ...prev, appLanguage: code2 }))
      },
    }),
    [updateLanguagePrefs],
  )

  return (
    <LanguageStateContext.Provider value={state}>
      <LanguageApiContext.Provider value={api}>
        {children}
      </LanguageApiContext.Provider>
    </LanguageStateContext.Provider>
  )
}
