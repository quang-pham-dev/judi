import {
  AppLanguage,
  LANGUAGES_MAP_CODE2,
  LANGUAGES_MAP_CODE3,
} from './languages'

export function code2ToCode3(lang: string): string {
  if (lang.length === 2) {
    return LANGUAGES_MAP_CODE2[lang]?.code3 || lang
  }
  return lang
}

export function code3ToCode2(lang: string): string {
  if (lang.length === 3) {
    return LANGUAGES_MAP_CODE3[lang]?.code2 || lang
  }
  return lang
}

export function code3ToCode2Strict(lang: string): string | undefined {
  if (lang.length === 3) {
    return LANGUAGES_MAP_CODE3[lang]?.code2
  }

  return undefined
}

export function codeToLanguageName(lang: string): string {
  const lang2 = code3ToCode2(lang)
  return LANGUAGES_MAP_CODE2[lang2]?.name || lang
}

export function getTranslatorLink(text: string, lang: string): string {
  return `https://translate.google.com/?sl=auto&tl=${lang}&text=${encodeURIComponent(
    text,
  )}`
}

export function sanitizeAppLanguageSetting(appLanguage: string): AppLanguage {
  const langs = appLanguage.split(',').filter(Boolean)

  for (const lang of langs) {
    switch (fixLegacyLanguageCode(lang)) {
      case 'en':
        return AppLanguage.en
      case 'vi':
        return AppLanguage.vi
      default:
        continue
    }
  }
  return AppLanguage.en
}

export function fixLegacyLanguageCode(code: string | null): string | null {
  if (code === 'in') {
    // indonesian
    return 'id'
  }
  if (code === 'iw') {
    // hebrew
    return 'he'
  }
  if (code === 'ji') {
    // yiddish
    return 'yi'
  }
  return code
}
