import { ClickAwayListener } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'

import { LangSwitchView } from './LangSwitchView'

export const LangSwitch: FC = () => {
  const router = useRouter()
  const { i18n } = useTranslation('common')
  const [, setCookie] = useCookies(['NEXT_LOCALE'])
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = (newLocale: string) => {
    if (i18n.language === newLocale || !router) {
      return
    }

    // https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
    setCookie('NEXT_LOCALE', newLocale)

    router.push(router.pathname, router.pathname, {
      locale: newLocale,
    })

    setIsActive(false)
  }

  return (
    <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
      <LangSwitchView
        isActive={isActive}
        toggleIsActive={toggleIsActive}
        handleButtonClick={handleButtonClick}
        currentLocale={i18n.language}
      />
    </ClickAwayListener>
  )
}
