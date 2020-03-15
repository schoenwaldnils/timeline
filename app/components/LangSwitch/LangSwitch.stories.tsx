import React from 'react'
import { action } from '@storybook/addon-actions'

import { LangSwitch } from './index'

export default {
  title: 'LangSwitch',
  component: LangSwitch,
}

export const Basic = () => (
  <LangSwitch language="de" changeLanguage={action('change language')} />
)
