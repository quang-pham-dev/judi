import { useContext } from 'react'

import {
  LanguageStateContext,
  LanguageApiContext,
} from '@/context/language-context'

export function useLanguageState() {
  const context = useContext(LanguageStateContext)
  if (context === undefined) {
    throw new Error('useLanguageState must be used within a LanguagesProvider')
  }
  return context
}

export function useLanguageApi() {
  const context = useContext(LanguageApiContext)
  if (context === undefined) {
    throw new Error('useLanguageApi must be used within a LanguagesProvider')
  }
  return context
}
