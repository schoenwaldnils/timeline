import styled from '@emotion/styled'

import { themeColors } from '../../js/colors'

export const UL = styled.ul`
  margin-top: 0;
  margin-bottom: 1em;
  padding-left: 0;
  list-style: none;

  :last-of-type {
    margin-bottom: 0;
  }

  & & {
    padding-left: 0.75em;
  }
`

export const OL = styled.ol`
  margin-bottom: 1em;
  padding-left: 0;
  list-style: none;
  counter-reset: ol;

  :last-of-type {
    margin-bottom: 0;
  }
`

export const LI = styled.li`
  position: relative;
  padding-left: 1em;

  ${OL} > & {
    counter-increment: ol;
  }

  ${OL} > &::before {
    content: counter(ol);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.8em;
    font-weight: 200;
    line-height: calc(1.4em / 0.8);
    color: ${themeColors.themeColor};
  }

  ${UL} > &::before {
    content: '';
    position: absolute;
    top: calc(1em * 1.5 / 2);
    left: 0;
    width: 0.35em;
    height: 2px;
    margin-top: -1px;
    background-color: ${themeColors.themeColor};
  }
`
