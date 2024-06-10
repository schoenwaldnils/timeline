import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { forwardRef, MouseEvent, Ref } from 'react'

import { Tooltip } from '@/components/Tooltip'

import { i18n } from '../../../i18n-config'
import { ReactComponent as LangIcon } from './langIcon.svg'
import css from './LangSwitch.module.css'

interface LangSwitchViewProps {
  isActive?: boolean
  toggleIsActive: (event: MouseEvent<HTMLButtonElement>) => void
  handleButtonClick: (locale: string) => void
  currentLocale: string
}

export const LangSwitchView = forwardRef(
  (
    {
      isActive = false,
      toggleIsActive,
      handleButtonClick,
    }: LangSwitchViewProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const t = useTranslations()

    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }

    const locales = { en: 'English', de: 'Deutsch' }

    return (
      <div className={css.LangSwitch} ref={ref}>
        <button
          className={css.LangSwitch_button}
          onClick={toggleIsActive}
          aria-label={t('ui.change-language')}
        >
          <LangIcon
            className={css.LangSwitch_svg}
            aria-hidden="true"
            focusable="false"
            role="img"
          />

          <span className={css.LangSwitch_text}>{t('ui.language')}</span>
        </button>

        {isActive && (
          <Tooltip alignRight className={css.LangSwitch_tooltip}>
            {i18n.locales.map((locale) => (
              <Link
                className={css.LangSwitch_item}
                key={locale}
                onClick={() => handleButtonClick(locale)}
                locale={locale}
                href={redirectedPathName(locale)}
              >
                {locales[locale]}
              </Link>
            ))}
          </Tooltip>
        )}
      </div>
    )
  },
)
