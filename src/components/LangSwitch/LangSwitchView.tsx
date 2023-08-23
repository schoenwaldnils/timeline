import styled from '@emotion/styled'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { forwardRef, MouseEvent, Ref } from 'react'

import { Tooltip } from '@/components/Tooltip'
import { viewportsJs } from '@/utils/viewports'

import { i18n } from '../../../i18n-config'
import { ReactComponent as LangIcon } from './langIcon.svg'

const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  color: inherit;
  cursor: pointer;
  background: none;
  border: 0;
`

const Svg = styled(LangIcon)`
  display: block;
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
`

const Text = styled.span`
  display: none;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--LangSwitch-color);

  @media ${viewportsJs.sm} {
    display: block;
  }
`

const Button = styled(Link)`
  padding: 0.5em 0.7em;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 300;
  color: inherit;
  white-space: nowrap;
  cursor: pointer;
  background: none;
  border: 0;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  text-decoration: none;

  :disabled {
    color: var(--LangSwitch-buttonDisabled);
    cursor: inherit;
  }
`

const StyledTooltip = styled(Tooltip)`
  display: flex;
  flex-direction: column;
`

interface LangSwitchViewProps {
  isActive?: boolean
  toggleIsActive: (event: MouseEvent<HTMLButtonElement>) => void
  handleButtonClick: (locale: string) => void
  currentLocale: string
}

export const LangSwitchView = forwardRef(
  (
    { isActive = false, toggleIsActive }: LangSwitchViewProps,
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
      <Wrapper ref={ref}>
        <IconButton
          onClick={toggleIsActive}
          aria-label={t('ui.change-language')}
        >
          <Svg aria-hidden="true" focusable="false" role="img" />

          <Text>{t('ui.language')}</Text>
        </IconButton>

        {isActive && (
          <StyledTooltip alignRight>
            {i18n.locales.map((locale) => (
              <Button
                key={locale}
                // onClick={() => handleButtonClick(locale)}
                locale={locale}
                href={redirectedPathName(locale)}
              >
                {locales[locale]}
              </Button>
            ))}
          </StyledTooltip>
        )}
      </Wrapper>
    )
  },
)

LangSwitchView.displayName = 'LangSwitchView'
