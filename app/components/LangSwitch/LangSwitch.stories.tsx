import { action } from '@storybook/addon-actions'
import { FC } from 'react'

import { LOCALES } from '../../utils/intl/intlConsts'
import { LangSwitchView } from './LangSwitchView'

export default {
  title: 'Lang Switch',
  component: LangSwitchView,
}

const props = {
  toggleIsActive: action('toggleIsActive'),
  handleButtonClick: action('handleChange'),
  currentLang: 'en',
}

export const LangSwitch: FC = () => (
  <LangSwitchView {...props} isActive={true} currentLocale={LOCALES.EN} />
)
