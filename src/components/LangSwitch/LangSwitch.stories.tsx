import { FC } from 'react'

import { LangSwitchView } from './LangSwitchView'

export default {
  title: 'Lang Switch',
  component: LangSwitchView,
}

const props = {
  toggleIsActive: () => {},
  handleButtonClick: () => {},
  currentLocale: 'en',
}

export const LangSwitch: FC = () => <LangSwitchView {...props} isActive={true} />
