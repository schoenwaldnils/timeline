import styled from '@emotion/styled'
import { action } from '@storybook/addon-actions'
import { FC } from 'react'

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

export const Basic: FC = () => (
  <Container>
    <ThemeSwitchView {...props} />
    <ThemeSwitchView {...props} isDark={true} />
  </Container>
)
