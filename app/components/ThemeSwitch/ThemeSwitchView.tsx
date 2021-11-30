import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import { FC, MouseEvent } from 'react'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

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
      title={t('ui.toggle-dark-mode')}
      aria-label={t('ui.toggle-dark-mode')}
    >
      {isDark ? <IconLight /> : <IconDark />}
    </ButtonSquare>
  )
}
