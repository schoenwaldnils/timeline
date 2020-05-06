import React from 'react'
import Error from 'next/error'
import { NextPage } from 'next'
import { Locale } from '../utils/intl/intlConsts'
import { LocaleProvider } from '../context/LocaleContext'

interface LangProps {
  locale?: Locale
}

export const withLocale = (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  return WithLocale
}
