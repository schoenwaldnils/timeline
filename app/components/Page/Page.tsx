import React from 'react'
import styled from '@emotion/styled'

import { Header } from '../Header'
import { Timeline } from '../Timeline'
import { Sidebar } from '../Sidebar'
import { useScrollPosition } from '../../customHooks/useScrollPosition'
// import { Scaling } from '../Scaling'

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

  return (
    <StyledPage>
      <Header />
      <Content>
        <TimelineWrapper ref={containerRef}>
          <Timeline ref={elementRef} />
        </TimelineWrapper>
        <Sidebar />
        {/* <Scaling /> */}
      </Content>
    </StyledPage>
  )
}
