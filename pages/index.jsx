import React from 'react'

import { LanguageConsumer } from '../app/js/context/lang-context'

import Page from '../app/components/Page/Page'

import '../app/css/index.css'

export default () => (
  <LanguageConsumer>
    {({ language } = {}) => {
      if (!language) return null
      return <Page language={language} />
    }}
  </LanguageConsumer>
)
