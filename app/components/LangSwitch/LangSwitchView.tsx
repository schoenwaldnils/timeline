import styled from '@emotion/styled'
import { FC, forwardRef, MouseEvent, Ref } from 'react'

import translations from '../../data/translations'
import { useTranslation } from '../../hooks/useTranslation'
import { viewportsJs } from '../../js/viewports'
import { Locale, SUPPORTED_LOCALES } from '../../utils/intl/intlConsts'
import { Tooltip } from '../Tooltip'
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

const Button = styled.button`
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
  handleButtonClick: (lang: string) => void
  currentLocale: Locale
  ref?: Ref<HTMLDivElement>
}

export const LangSwitchView: FC<LangSwitchViewProps> = forwardRef(
  (
    { isActive = false, toggleIsActive, handleButtonClick, currentLocale },
    ref,
  ) => {
    const { t } = useTranslation()

    return (
      <Wrapper ref={ref}>
        <IconButton
          onClick={toggleIsActive}
          aria-label={t('ui.changeLanguage')}
        >
          <Svg aria-hidden="true" focusable="false" role="img" />

          <Text>{t('ui.language')}</Text>
        </IconButton>

        {isActive && (
          <StyledTooltip alignRight>
            {SUPPORTED_LOCALES.map((locale) => (
              <Button
                key={locale}
                disabled={locale === currentLocale}
                onClick={() => handleButtonClick(locale)}
              >
                {translations.ui.language[locale]}
              </Button>
            ))}
          </StyledTooltip>
        )}
      </Wrapper>
    )
  },
)

LangSwitchView.displayName = 'LangSwitchView'
