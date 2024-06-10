import Color from 'color'
import { ReactNode } from 'react'

import { colors, shades, themeColors } from './colors'

export default {
  title: 'Colors',
}

const isDark = (color: string) => Color(color).isDark()

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '0.5rem',
    }}
  >
    {children}
  </div>
)

const Box = ({ children, color }: { children: ReactNode; color: string }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '5rem',
      fontSize: '14px',
      color: color && isDark(color) ? '#fff' : '#000',
      backgroundColor: color,
    }}
  >
    {children}
  </div>
)

export const Colors = () => (
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
