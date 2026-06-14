import { Config } from 'payload'

export const localization: Config['localization'] = {
  locales: [
    {
      label: {
        en: 'English',
        de: 'Englisch',
      },
      code: 'en',
    },
    {
      label: {
        en: 'German',
        de: 'Deutsch',
      },
      code: 'de',
    },
  ],
  defaultLocale: 'de',
  fallback: true,
}
