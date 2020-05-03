import React, { forwardRef } from 'react'
import styled from '@emotion/styled'

import { ReactComponent as LangIcon } from './langIcon.svg'

import { T } from '../../js/translate'
import translations from '../../data/translations'
import { SUPPORTED_LANGUAGES } from '../../data/constants'
import { viewportsJs } from '../../js/viewports'
import { Tooltip } from '../Tooltip'

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

const Menu = styled(Tooltip)`
  display: flex;
  flex-direction: column;
`

interface LangSwitchViewProps {
  isActive?: boolean
  toggleIsActive: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleButtonClick: (lang: string) => void
  currentLang: string
  ref?: React.Ref<HTMLDivElement>
}

export const LangSwitchView: React.FC<LangSwitchViewProps> = forwardRef(
  (
    { isActive = false, toggleIsActive, handleButtonClick, currentLang },
    ref,
  ) => {
    return (
      <Wrapper ref={ref}>
        <IconButton
          onClick={toggleIsActive}
          aria-label={T('ui.changeLanguage')}
        >
          <Svg aria-hidden="true" focusable="false" role="img" />

          <Text>{T('ui.language')}</Text>
        </IconButton>

        {isActive && (
          <Menu>
            {SUPPORTED_LANGUAGES.map(lang => (
              <Button
                key={lang}
                disabled={lang === currentLang}
                onClick={() => handleButtonClick(lang)}
              >
                {translations.ui.language[lang]}
              </Button>
            ))}
          </Menu>
        )}
      </Wrapper>
    )
  },
)
