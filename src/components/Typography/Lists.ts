import styled from '@emotion/styled'

import { themeColors } from '@/data/colors'

export const UL = styled.ul`
  margin-top: 0;
  margin-bottom: 1em;
  padding-left: 0;
  list-style: none;

  :last-child {
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

  :last-child {
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
    font-weight: 600;
    color: ${themeColors.themeColor};
    transform: scale(0.8);
    transform-origin: left 65%;
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
