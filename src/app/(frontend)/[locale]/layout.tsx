import '@/components/GlobalStyles/index.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

import { i18n, type Locale } from '@/i18n-config'

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function Root({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!i18n.locales.includes(locale as Locale)) {
    notFound()
  }

  let messages: AbstractIntlMessages
  try {
    messages = (
      (await import(`../../../messages/${locale}.json`)) as { default: AbstractIntlMessages }
    ).default
  } catch {
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
