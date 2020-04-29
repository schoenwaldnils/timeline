import React from 'react'
import styled from '@emotion/styled'
import { WiDaySunny, WiMoonAltWaningCrescent5 } from 'react-icons/wi'

import { T } from '../../js/translate'
import { useStore, SET_THEME } from '../Store'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  padding: 0;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1;
  color: var(--Button-color);
  cursor: pointer;
  background-color: var(--Button-backgroundColor);
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
`

const IconLight = WiDaySunny

const IconDark = styled(WiMoonAltWaningCrescent5)`
  transform: rotate(-30deg);
`

export const ThemeSwitch: React.FC = props => {
  const [state, dispatch] = useStore()

  const toggleTheme = () => {
    dispatch({
      type: SET_THEME,
      themeIsDark: !state.themeIsDark,
    })
  }

  return (
    <div {...props}>
      <Button onClick={toggleTheme} aria-label={T('ui.toggleDarkMode')}>
        {state.themeIsDark ? <IconLight /> : <IconDark />}
      </Button>
    </div>
  )
}
