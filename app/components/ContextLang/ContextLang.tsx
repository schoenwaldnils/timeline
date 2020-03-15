import React, { useState, useEffect } from 'react'

import { getUserLanguage } from '../../js/getUserLanguage'
import { createCookie } from '../../js/cookie'

export const languages = ['en', 'de']

let locale = 'en'

interface ContextLangInterface {
  language: string
  changeLanguage: (language: any) => void
}

export const ContextLang = React.createContext<ContextLangInterface | null>({
  language: locale,
  changeLanguage: () => null,
})

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState(locale)

  const changeLanguage = language => {
    createCookie('timeline-lang', language)
    setLanguage(language)
  }

  useEffect(() => {
    locale = getUserLanguage()
    if (locale !== language) {
      changeLanguage(locale)
    }
  }, [])

  return (
    <ContextLang.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </ContextLang.Provider>
  )
}

export const currentlocale = () => locale
