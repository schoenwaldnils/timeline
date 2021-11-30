import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const ns = ['common']
const supportedLngs = ['en', 'de']

i18n.use(initReactI18next).init({
  //debug: true,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  ns,
  supportedLngs,
  react: {
    useSuspense: false,
  },
})

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(
      lang,
      n,
      require(`../public/locales/${lang}/${n}.json`),
    )
  })
})

export default i18n
