import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from '@emotion/styled'

import { ThemeSwitchView } from './ThemeSwitchView'

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitchView,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.5rem;
  }
`

const props = {
  toggleTheme: action('toggle theme'),
}

export const Basic = () => (
  <Container>
    <ThemeSwitchView {...props} />
    <ThemeSwitchView {...props} isDark={true} />
  </Container>
)
