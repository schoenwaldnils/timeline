import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import { zIndexes } from '../../data/constants'
import {
  ContentfulTimelineData,
  formatTimelineData,
} from '../../js/objectFormating/formatTimelineData'
import { Header } from '../Header'
import { ScaleIndicator, Scaling } from '../Scaling'
import { useStore } from '../Store'
import { ThemeSwitch } from '../ThemeSwitch'

const Sidebar = dynamic(() => import('../Sidebar/Sidebar'), { ssr: false })
const Timeline = dynamic(() => import('../Timeline/Timeline'), { ssr: false })

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

export const Page: FC<{
  timelineData: { en: ContentfulTimelineData; de: ContentfulTimelineData }
}> = ({ timelineData }) => {
  const { store } = useStore()

  const formatedData = formatTimelineData(
    timelineData[store.locale],
    store.scale,
    store.filter,
  )

  return (
    <StyledPage>
      <Header />
      <Content>
        <Timeline data={formatedData} />
        <Sidebar isActive={!!store.sidebarId} contentId={store.sidebarId} />
        <Config>
          <ThemeSwitch />
          <Scaling />
          <ScaleIndicator />
        </Config>
      </Content>
    </StyledPage>
  )
}
