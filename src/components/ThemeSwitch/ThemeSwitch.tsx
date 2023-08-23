import styled from '@emotion/styled'
import { useTranslations } from 'next-intl'
import { ButtonHTMLAttributes } from 'react'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

import { ButtonSquare } from '@/components/Button'
import { useStore } from '@/hooks/useStore'

const IconLight = WiDaySunny

const IconDark = styled(WiMoonAltWaningCrescent5)`
  transform: rotate(-30deg);
`

export type ThemeSwitchProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const t = useTranslations()
  const themeIsDark = useStore((state) => state.theme === 'dark')
  const toggleTheme = useStore((state) => state.toggleTheme)

  return (
    <ButtonSquare
      {...props}
      onClick={toggleTheme}
      title={t('ui.toggle-dark-mode')}
      aria-label={t('ui.toggle-dark-mode')}
    >
      {themeIsDark ? <IconLight /> : <IconDark />}
    </ButtonSquare>
  )
}
