// Don't remove -force from these because detection is VERY slow on low-end Android.
// https://github.com/formatjs/formatjs/issues/4463#issuecomment-2176070577
import '@formatjs/intl-locale/polyfill-force'
import '@formatjs/intl-pluralrules/polyfill-force'
import '@formatjs/intl-numberformat/polyfill-force'
import '@formatjs/intl-pluralrules/locale-data/en'
import '@formatjs/intl-numberformat/locale-data/en'

import { useEffect } from 'react'
import { i18n } from '@lingui/core'

import { sanitizeAppLanguageSetting } from '@/locale/helpers'
import { AppLanguage } from '@/locale/languages'
import { messages as messagesEn } from '@/locale/locales/en/messages'
import { messages as messagesVi } from '@/locale/locales/vi/messages'

import { useLanguageState } from '@/hooks/use-language'

/**
 * We do a dynamic import of just the catalog that we need
 */
export async function dynamicActivate(locale: AppLanguage) {
  switch (locale) {
    case AppLanguage.vi: {
      i18n.loadAndActivate({ locale, messages: messagesVi })
      await Promise.all([
        import('@formatjs/intl-pluralrules/locale-data/vi'),
        import('@formatjs/intl-numberformat/locale-data/vi'),
      ])
      break
    }
    // TODO: add other languages here
    // case AppLanguage.ja: {
    //   i18n.loadAndActivate({ locale, messages: messagesJa })
    //   await Promise.all([
    //     import('@formatjs/intl-pluralrules/locale-data/ja'),
    //     import('@formatjs/intl-numberformat/locale-data/ja'),
    //   ])
    //   break
    // }
    default: {
      i18n.loadAndActivate({ locale, messages: messagesEn })
      break
    }
  }
}

export function useLocaleLanguage() {
  const { appLanguage } = useLanguageState()
  useEffect(() => {
    dynamicActivate(sanitizeAppLanguageSetting(appLanguage))
  }, [appLanguage])
}
