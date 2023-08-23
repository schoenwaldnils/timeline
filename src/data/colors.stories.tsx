import styled from '@emotion/styled'
import Color from 'color'
import { FC } from 'react'

import { viewportsJs } from '@/utils/viewports'

import { colors, shades, themeColors } from './colors'

export default {
  title: 'Colors',
}

const isDark = (color: string) => Color(color).isDark()

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;

  @media ${viewportsJs.sm} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${viewportsJs.md} {
    grid-template-columns: repeat(6, 1fr);
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  font-size: 14px;
  color: ${({ color }) => (color && isDark(color) ? '#fff' : '#000')};
  background-color: ${({ color }) => color};
`

export const Colors: FC = () => (
  <>
    <h1>Shades</h1>
    <Wrapper>
      {Object.entries(shades).map(([key, value]) => (
        <Box color={value} key={key}>
          {key}
        </Box>
      ))}
    </Wrapper>
    <h1>Colors</h1>
    <Wrapper>
      {Object.entries(colors).map(([key, value]) => (
        <Box color={value} key={`color-${key}`}>
          {key}
        </Box>
      ))}
    </Wrapper>
    <h1>ThemeColors</h1>
    <Wrapper>
      {Object.entries(themeColors).map(([key, value]) => (
        <Box color={value} key={`themeColor-${key}`}>
          {key}
        </Box>
      ))}
    </Wrapper>
  </>
)
