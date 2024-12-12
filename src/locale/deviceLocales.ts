import { getLocales as defaultGetLocales, Locale } from 'expo-localization'

type LocalWithLanguageCode = Locale & {
  languageCode: string
}

export function getLocales() {
  const locales = defaultGetLocales?.() ?? []
  const output: LocalWithLanguageCode[] = []

  for (const locale of locales) {
    if (typeof locale.languageCode === 'string') {
      if (locale.languageCode === 'en') {
        // english
        locale.languageCode = 'en'
      }

      if (locale.languageCode === 'vi') {
        // vietnamese
        locale.languageCode = 'vi'
      }
    }

    if (typeof locale.languageTag === 'string') {
      if (locale.languageTag.startsWith('en-US')) {
        locale.languageTag = 'en'
      }
      if (locale.languageTag.startsWith('vi-VN')) {
        // vietnamese
        locale.languageTag = 'vi'
      }
    }

    output.push(locale as LocalWithLanguageCode)
  }

  return output
}

export const deviceLocales = getLocales()

export const deviceLanguageCodes = removeDuplicates(
  deviceLocales.map(l => l.languageCode),
)

export function removeDuplicates<T>(arr: T[]): T[] {
  const s = new Set(arr)
  return [...s]
}
