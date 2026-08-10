import '@/components/GlobalStyles/index.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'

import { i18n } from '@/i18n-config'

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function Root({ children }: { children: ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Overview of biblical persons and events',
  openGraph: {
    images: ['https://timeline.schoen.world/assets/images/favicon.png'],
  },
  alternates: {
    canonical: 'https://timeline.schoen.world',
  },
}
