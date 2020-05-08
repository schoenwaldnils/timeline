import React from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

import { Header } from '../Header'
import { Timeline, TimelineProps } from '../Timeline'
import { ThemeSwitch } from '../ThemeSwitch'
import { Scaling, ScaleIndicator } from '../Scaling'

import { zIndexes } from '../../data/constants'
import { useStore } from '../Store'

const Sidebar = dynamic(() => import('../Sidebar/Sidebar'), { ssr: false })

const StyledPage = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: max-content auto;
  grid-template-columns: 100vw;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Content = styled.div`
  position: relative;
  grid-area: content;
`

const Config = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  z-index: ${zIndexes.scale};

  > *:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`

export const Page: React.FC<TimelineProps> = ({ timelineData }) => {
  const [state] = useStore()

  return (
    <StyledPage>
      <Header />
      <Content>
        <Timeline timelineData={timelineData} />
        <Sidebar isActive={!!state.sidebarId} contentId={state.sidebarId} />
        <Config>
          <ThemeSwitch />
          <Scaling />
          <ScaleIndicator />
        </Config>
      </Content>
    </StyledPage>
  )
}
