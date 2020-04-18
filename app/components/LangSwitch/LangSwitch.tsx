import React, { useContext, useState, useRef } from 'react'
import styled from '@emotion/styled'

import { T } from '../../js/translate'
import { languages, ContextLang } from '../ContextLang'
import { colors, shades } from '../../js/colors'
import translations from '../../data/translations'
import { zIndexes } from '../../data/constants'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { viewportsJs } from '../../js/viewports'

const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  color: inherit;
  background: none;
  border: 0;
`

const Svg = styled.svg`
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
  color: inherit;
  white-space: nowrap;
  cursor: pointer;
  background: none;
  border: 0;

  :disabled {
    color: ${shades.cb4};
    cursor: inherit;
  }
`

export const LangSwitch: React.FC = () => {
  const { language, changeLanguage } = useContext(ContextLang)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    setIsActive(false)
  })

  const toggleIsActive = () => setIsActive(!isActive)

  const handleButtonClick = lang => {
    changeLanguage(lang)
    setIsActive(false)
  }

  if (!language) return null

  return (
    <Wrapper ref={ref}>
      <IconButton onClick={toggleIsActive}>
        <Svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3.814 16.464a.501.501 0 00.65-.278L5.54 13.5h2.923l1.074 2.686a.5.5 0 00.928-.372l-3-7.5a.52.52 0 00-.928 0l-3 7.5a.5.5 0 00.278.65zM7 9.846L8.061 12.5H5.94zM6 7.5a.5.5 0 00.224-.053l2-1a.5.5 0 10-.448-.894l-2 1A.5.5 0 006 7.5zM11.75 14.25a2.025 2.025 0 001.75 2.25 2.584 2.584 0 001.482-.431c.039.088.07.152.075.162a.5.5 0 00.887-.461 4.654 4.654 0 01-.15-.368c.176-.168.359-.348.56-.548a11.374 11.374 0 001.92-2.652A1.55 1.55 0 0119 13.5a2.082 2.082 0 01-1.607 2.012.5.5 0 00.107.988.506.506 0 00.107-.012A3.055 3.055 0 0020 13.5a2.542 2.542 0 00-1.283-2.205c.16-.364.244-.6.255-.63a.5.5 0 10-.944-.33 7.97 7.97 0 01-.225.552 5.11 5.11 0 00-2.482-.21c.04-.428.091-.845.153-1.229 1.427-.123 3.04-.44 3.124-.458a.5.5 0 00-.196-.98c-.019.003-1.43.283-2.736.418.162-.761.31-1.273.313-1.284a.5.5 0 10-.958-.288c-.016.053-.206.695-.393 1.64-.041 0-.088.004-.128.004h-2a.5.5 0 000 1h1.955c-.072.476-.134.985-.17 1.517a4.001 4.001 0 00-2.535 3.233zm1.75 1.25c-.362 0-.75-.502-.75-1.25a2.82 2.82 0 011.506-2.094 11.674 11.674 0 00.384 2.927 1.684 1.684 0 01-1.14.417zm2.604-3.897a4.4 4.4 0 011.251.193 10.325 10.325 0 01-1.708 2.35l-.163.162A11.04 11.04 0 0115.25 12c0-.093.008-.185.01-.278a3.318 3.318 0 01.844-.12z M22.5 3h-21a.5.5 0 00-.5.5v16a.5.5 0 00.5.5H10v3.5a.5.5 0 00.854.354L14.707 20H22.5a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5zM22 19h-7.5a.5.5 0 00-.354.146L11 22.293V19.5a.5.5 0 00-.5-.5H2V4h20z"
          />
        </Svg>

        <Text>{T('ui.language')}</Text>
      </IconButton>

      {isActive && (
        <Menu>
          {languages.map(lang => (
            <Button
              key={lang}
              disabled={lang === language}
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
