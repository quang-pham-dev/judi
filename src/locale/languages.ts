interface Language {
  code3: string
  code2: string
  name: string
}

export enum AppLanguage {
  en = 'en',
  vi = 'vi',
}

interface AppLanguageConfig {
  code2: AppLanguage
  name: string
}

export const APP_LANGUAGES: AppLanguageConfig[] = [
  { code2: AppLanguage.en, name: 'English' },
  { code2: AppLanguage.vi, name: 'Tiếng Việt – Vietnamese' },
]

export const LANGUAGES: Language[] = [
  { code3: 'eng', code2: 'en', name: 'English' },
  { code3: 'vie', code2: 'vi', name: 'Vietnamese' },
]

export const LANGUAGES_MAP_CODE2 = Object.fromEntries(
  LANGUAGES.map(lang => [lang.code2, lang]),
)

export const LANGUAGES_MAP_CODE3 = Object.fromEntries(
  LANGUAGES.map(lang => [lang.code3, lang]),
)
// some additional manual mappings (not clear if these should be in the "official" mappings)
if (LANGUAGES_MAP_CODE2.fa) {
  LANGUAGES_MAP_CODE3.pes = LANGUAGES_MAP_CODE2.fa
}
