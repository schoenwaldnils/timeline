import React from 'react'
import styled from '@emotion/styled'

import { Header } from '../Header'
import { ContentfulTimeline } from '../Contentful/ContentfulTimeline'
import { Sidebar } from '../Sidebar'

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

export const Page = () => (
  <StyledPage>
    <Header />
    <Content>
      <TimelineWrapper>
        <ContentfulTimeline />
      </TimelineWrapper>
      <Sidebar />
    </Content>
  </StyledPage>
)
