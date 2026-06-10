import { useTranslations } from 'next-intl'
import { ButtonHTMLAttributes, useEffect } from 'react'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

import { Theme } from '@/@types/Theme'
import { ButtonSquare } from '@/components/Button'
import { USER_THEME_KEY } from '@/data/constants'
import { useStore } from '@/hooks/useStore'

const IconLight = WiDaySunny

const IconDark = () => <WiMoonAltWaningCrescent5 style={{ transform: 'rotate(-30deg)' }} />

export type ThemeSwitchProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const t = useTranslations()
  const theme = useStore((state) => state.theme)
  const toggleTheme = useStore((state) => state.toggleTheme)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(USER_THEME_KEY, theme)

    const root = document.querySelector(':root')

    if (theme === Theme.Dark) {
      root?.classList.add('dark')
      root?.classList.remove('light')
    } else {
      root?.classList.add('light')
      root?.classList.remove('dark')
    }
  }, [theme])

  return (
    <ButtonSquare
      {...props}
      onClick={toggleTheme}
      title={t('ui.toggle-dark-mode')}
      aria-label={t('ui.toggle-dark-mode')}
    >
      {theme === Theme.Dark ? <IconLight /> : <IconDark />}
    </ButtonSquare>
  )
}
