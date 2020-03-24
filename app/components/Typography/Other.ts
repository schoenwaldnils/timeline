import styled from '@emotion/styled'
import { themeColors } from '../../js/colors'

export const P = styled.p`
  margin: 0 0 1em;
  white-space: pre-wrap;

  :last-of-type {
    margin-bottom: 0;
  }
`

export const HR = styled.hr`
  height: 1px;
  background-color: ${themeColors.themeColor};
  border: 0;
`
