import { action } from '@storybook/addon-actions'
import { FC } from 'react'

import { LangSwitchView } from './LangSwitchView'

export default {
  title: 'Lang Switch',
  component: LangSwitchView,
}

const props = {
  toggleIsActive: action('toggleIsActive'),
  handleButtonClick: action('handleChange'),
  currentLocale: 'en',
}

export const LangSwitch: FC = () => (
  <LangSwitchView {...props} isActive={true} />
)
