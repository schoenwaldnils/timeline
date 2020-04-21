import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { Header } from '../Header'
import { Timeline } from '../Timeline'
import { Sidebar, SidebarContext } from '../Sidebar'
import { useScrollPosition } from '../../customHooks/useScrollPosition'
import { useContentfulTimeline } from '../../customHooks/useContentfulTimeline'
import { Scaling } from '../Scaling'

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
  const [containerRef, elementRef] = useScrollPosition()
  const {
    data: { events, timespans },
  } = useContentfulTimeline()

  return (
    <StyledPage>
      <Header />
      <Content>
        <TimelineWrapper ref={containerRef}>
          <Timeline {...{ events, timespans }} ref={elementRef} />
        </TimelineWrapper>
        <Sidebar {...useContext(SidebarContext)} />
        <Scaling />
      </Content>
    </StyledPage>
  )
}
