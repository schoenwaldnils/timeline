import type { Locale } from '@/i18n-config'

declare module 'next-intl' {
  export interface AppConfig {
    Locale: Locale
  }
}
