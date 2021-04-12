import styled from '@emotion/styled'
import { FC, MouseEvent } from 'react'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

import { useTranslation } from '../../hooks/useTranslation'
import { ButtonSquare } from '../Button'

const IconLight = WiDaySunny

const IconDark = styled(WiMoonAltWaningCrescent5)`
  transform: rotate(-30deg);
`

interface ThemeSwitchViewProps {
  toggleTheme: (event: MouseEvent) => void
  isDark?: boolean
}

export const ThemeSwitchView: FC<ThemeSwitchViewProps> = ({
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
