import '@/components/GlobalStyles/index.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { ReactNode } from 'react'

import { i18n } from '../../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function Root({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const locale = useLocale()

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
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
