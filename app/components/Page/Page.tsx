import React from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

import { Header } from '../Header'
import { Timeline } from '../Timeline'
import { ThemeSwitch } from '../ThemeSwitch'
import { Scaling, ScaleIndicator } from '../Scaling'
import { ContentfulContent } from '../Contentful'

import { useStore, CLOSE_SIDEBAR } from '../Store'
import { useScrollPosition } from '../../customHooks/useScrollPosition'
import { useContentfulTimeline } from '../../customHooks/useContentfulTimeline'
import { zIndexes } from '../../data/constants'

const Sidebar = dynamic(() => import('../Sidebar/Sidebar'))

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

const TimelineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
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

export const Page = () => {
  const [state, dispatch] = useStore()
  const [containerRef, elementRef] = useScrollPosition()
  const {
    data: { events, timespans },
  } = useContentfulTimeline()

  const sidebarContent = state.sidebar.contentId ? (
    <ContentfulContent id={state.sidebar.contentId} />
  ) : null

  return (
    <StyledPage>
      <Header />
      <Content>
        <TimelineWrapper ref={containerRef}>
          <Timeline {...{ events, timespans }} ref={elementRef} />
        </TimelineWrapper>
        <Sidebar
          isActive={state.sidebar.isActive}
          content={sidebarContent}
          closeSidebar={() => dispatch({ type: CLOSE_SIDEBAR })}
        />
        <Config>
          <ThemeSwitch />
          <Scaling />
          <ScaleIndicator />
        </Config>
      </Content>
    </StyledPage>
  )
}
