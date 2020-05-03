import React from 'react'
import styled from '@emotion/styled'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

import { T } from '../../js/translate'
import { ButtonSquare } from '../Button'

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
  return (
    <ButtonSquare
      {...props}
      onClick={toggleTheme}
      aria-label={T('ui.toggleDarkMode')}
    >
      {isDark ? <IconLight /> : <IconDark />}
    </ButtonSquare>
  )
}
