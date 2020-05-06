// context/LocaleContext.tsx

import React, { useContext, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import {
  Locale,
  isLocale,
  LOCALES,
  SUPPORTED_LOCALES,
} from '../../utils/intl/intlConsts'

interface ContextProps {
  readonly locale: Locale
  readonly setLocale: (locale: Locale) => void
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: LOCALES.EN,
  setLocale: () => null,
})

export const LocaleProvider: React.FC<{ lang: Locale }> = ({
  lang,
  children,
}) => {
  const [locale, setLocale] = useState(lang)
  const router = useRouter()

  // store the preference
  React.useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  // sync locale value on client-side route changes
  React.useEffect(() => {
    if (
      typeof router.query.lang === 'string' &&
      isLocale(router.query.lang) &&
      locale !== router.query.lang
    ) {
      setLocale(router.query.lang)
    }
  }, [router.query.lang, locale])

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    const regex = new RegExp(`^/(${SUPPORTED_LOCALES.join('|')})`)
    router.push(router.pathname, router.asPath.replace(regex, `/${newLocale}`))
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
