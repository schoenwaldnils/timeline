import React from 'react'
import { action } from '@storybook/addon-actions'

import { LangSwitchView } from './LangSwitchView'

export default {
  title: 'LangSwitch',
  component: LangSwitchView,
}

const props = {
  toggleIsActive: action('toggleIsActive'),
  handleButtonClick: action('handleChange'),
  currentLang: 'en',
}

export const Icon = () => <LangSwitchView {...props} />

export const IsActive = () => <LangSwitchView {...props} isActive={true} />
