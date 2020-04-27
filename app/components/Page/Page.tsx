import React from 'react'
import styled from '@emotion/styled'

import { Header } from '../Header'
import { Timeline } from '../Timeline'
import { Sidebar } from '../Sidebar'
import { useScrollPosition } from '../../customHooks/useScrollPosition'
import { useContentfulTimeline } from '../../customHooks/useContentfulTimeline'
import { Scaling } from '../Scaling'
import { useStore, CLOSE_SIDEBAR } from '../Store'
import { ContentfulContent } from '../Contentful'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
`

const Content = styled.div`
  position: relative;
  flex-grow: 1;
`

const TimelineWrapper = styled.div`
  height: 100%;
  overflow: auto;
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
        <Scaling />
      </Content>
    </StyledPage>
  )
}
