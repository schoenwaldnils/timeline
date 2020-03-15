import React from 'react'
import styled from '@emotion/styled'
import Color from 'color'

import { shades, colors, themeColors } from './colors'

export default {
  title: 'Colors',
}

const isDark = color => Color(color).isDark()

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 5fr 5fr 5fr;
  grid-gap: 0.5rem;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: ${({ color }) => color};
  color: ${({ color }) => (isDark(color) ? '#fff' : '#000')};
`

export const Shades = () => (
  <Wrapper>
    {Object.keys(shades).map(i => (
      <Box color={shades[i]} key={i}>
        {i}
      </Box>
    ))}
  </Wrapper>
)

export const Colors = () => (
  <Wrapper>
    {Object.keys(colors).map(i => (
      <Box color={colors[i]}>{i}</Box>
    ))}
  </Wrapper>
)

export const ThemeColors = () => (
  <Wrapper>
    {Object.keys(themeColors).map(i => (
      <Box color={themeColors[i]}>{i}</Box>
    ))}
  </Wrapper>
)
