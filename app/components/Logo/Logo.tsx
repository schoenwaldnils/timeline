import { FC } from 'react'

import { useStore } from '../Store'
import { LogoView } from './LogoView'

export const Logo: FC = () => {
  const { store } = useStore()

  return <LogoView isDark={store.themeIsDark} />
}
