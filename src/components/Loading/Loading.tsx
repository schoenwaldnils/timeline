import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'

import { themeColors } from '@/data/colors'

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

export const Loading: FC = () => <Loader />

const loadingDots = keyframes`
  0%,
  100% {
    content: '.';
  }
  33% {
    content: '..';
  }
  67% {
    content: '...';
  }
`

const LoaderDots = styled.div`
  ::before {
    content: '...';
    animation: ${loadingDots} 1s infinite linear;
  }
`

export const LoadingDots: FC = () => <LoaderDots />
