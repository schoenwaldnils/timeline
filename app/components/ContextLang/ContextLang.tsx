import React, { useState, useEffect } from 'react'

import { getUserLanguage, setUserLanguage } from './userLanguage'

export const languages = ['en', 'de']

let locale = 'en'

interface ContextLangProps {
  language: string
  changeLanguage: (language: any) => void
}

export const ContextLang = React.createContext<ContextLangProps | null>({
  language: locale,
  changeLanguage: () => null,
})

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState(locale)

  const changeLanguage = (newLanguage: string) => {
    setUserLanguage(newLanguage)
    setLanguage(newLanguage)
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

export const currentLocale = locale
