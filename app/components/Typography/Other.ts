import styled from '@emotion/styled'
import { themeColors, shades } from '../../data/colors'

export const P = styled.p`
  margin: 0 0 1em;
  white-space: pre-wrap;

  :last-child {
    margin-bottom: 0;
  }
`

export const HR = styled.hr`
  height: 1px;
  background-color: ${themeColors.themeColor};
  border: 0;
`

export const QUOTE = styled.blockquote`
  &::before {
    content: '”';
    flex-shrink: 0;
    display: block;
    margin-right: 0.125em;
    font-size: 3em;
    line-height: 1;
    color: ${themeColors.themeColor};
  }

  display: flex;
  margin: 0;
  color: ${shades.cb2};
`
