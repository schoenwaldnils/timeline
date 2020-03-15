import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { themeColors } from '../../js/colors'

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 10rem;
  max-height: 100%;
  color: ${themeColors.themeColor};

  ::before {
    content: '';
    width: 2rem;
    height: 2rem;
    border: 0.25rem solid currentColor;
    border-bottom-color: transparent;
    border-radius: 100%;
    animation: ${rotate360} 400ms linear infinite;
  }
`

export const Loading = () => <Loader />
