import React from 'react'
import styled from '@emotion/styled'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

import { ButtonSquare } from '../Button'
import { useTranslation } from '../../hooks/useTranslation'

const IconLight = WiDaySunny

const IconDark = styled(WiMoonAltWaningCrescent5)`
  transform: rotate(-30deg);
`

interface ThemeSwitchViewProps {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void
  isDark?: boolean
}

export const ThemeSwitchView: React.FC<ThemeSwitchViewProps> = ({
  toggleTheme,
  isDark = false,
  ...props
}) => {
  const { t } = useTranslation()
  return (
    <ButtonSquare
      {...props}
      onClick={toggleTheme}
      aria-label={t('ui.toggleDarkMode')}
    >
      {isDark ? <IconLight /> : <IconDark />}
    </ButtonSquare>
  )
}
