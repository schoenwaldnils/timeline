import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'

import { ReactComponent as LangIcon } from './langIcon.svg'

import { T } from '../../js/translate'
import { colors, shades } from '../../js/colors'
import translations from '../../data/translations'
import { SUPPORTED_LANGUAGES, zIndexes } from '../../data/constants'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { viewportsJs } from '../../js/viewports'
import { useStore, SET_LANG } from '../Store'

const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  color: inherit;
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
  color: ${colors.greenDarker};

  @media ${viewportsJs.sm} {
    display: block;
  }
`

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  z-index: ${zIndexes.langSwitch};
  padding: 0.25rem;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
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
    color: ${shades.cb4};
    cursor: inherit;
  }
`

export const LangSwitch: React.FC = () => {
  const [state, dispatch] = useStore()
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    setIsActive(false)
  })

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = lang => {
    dispatch({ type: SET_LANG, lang })
    setIsActive(false)
  }

  if (!state.lang) return null

  return (
    <Wrapper ref={ref}>
      <IconButton onClick={toggleIsActive} aria-label={T('ui.changeLanguage')}>
        <Svg aria-hidden="true" focusable="false" role="img" />

        <Text>{T('ui.language')}</Text>
      </IconButton>

      {isActive && (
        <Menu>
          {SUPPORTED_LANGUAGES.map(lang => (
            <Button
              key={lang}
              disabled={lang === state.lang}
              onClick={() => handleButtonClick(lang)}
            >
              {translations.ui.language[lang]}
            </Button>
          ))}
        </Menu>
      )}
    </Wrapper>
  )
}
