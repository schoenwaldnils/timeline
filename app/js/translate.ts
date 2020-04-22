import { useContext } from 'react'

import { ContextLang } from '../components/ContextLang'
import translations from '../data/translations'

export const T = (id: string): string => {
  const { language } = useContext(ContextLang)
  const selectors = id.split('.')
  let string = translations
  selectors.forEach(selector => {
    string = string[selector]
  })

  return string[language]
}
