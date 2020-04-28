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

import { zIndexes } from '../../data/constants'
import { ThemeSwitch } from '../ThemeSwitch'

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

const ScalingPositioned = styled(Scaling)`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  z-index: ${zIndexes.scale};
`

const ThemeSwitchPositioned = styled(ThemeSwitch)`
  position: fixed;
  bottom: 1.5rem;
  left: 2.75rem;
  z-index: ${zIndexes.scale};
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
        <ScalingPositioned />
        <ThemeSwitchPositioned />
      </Content>
    </StyledPage>
  )
}
