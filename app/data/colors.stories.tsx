import React from 'react'
import styled from '@emotion/styled'
import Color from 'color'

import { shades, colors, themeColors } from './colors'
import { viewportsJs } from '../js/viewports'

export default {
  title: 'Colors',
}

const isDark = color => Color(color).isDark()

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
  color: ${({ color }) => (isDark(color) ? '#fff' : '#000')};
  background-color: ${({ color }) => color};
`

export const Basic = () => (
  <>
    <h1>Shades</h1>
    <Wrapper>
      {Object.keys(shades).map(i => (
        <Box color={shades[i]} key={i}>
          {i}
        </Box>
      ))}
    </Wrapper>
    <h1>Colors</h1>
    <Wrapper>
      {Object.keys(colors).map(i => (
        <Box color={colors[i]}>{i}</Box>
      ))}
    </Wrapper>
    <h1>ThemeColors</h1>
    <Wrapper>
      {Object.keys(themeColors).map(i => (
        <Box color={themeColors[i]}>{i}</Box>
      ))}
    </Wrapper>
  </>
)