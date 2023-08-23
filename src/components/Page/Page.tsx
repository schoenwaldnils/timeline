'use client'
import styled from '@emotion/styled'

import { Header } from '@/components/Header'
import { ScaleIndicator, Scaling } from '@/components/Scaling'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { zIndexes } from '@/data/constants'
import { useStore } from '@/hooks/useStore'
import {
  ContentfulTimelineData,
  formatTimelineData,
} from '@/utils/objectFormating/formatTimelineData'

import { Timeline } from '../Timeline'

// const Sidebar = dynamic(() => import('../Sidebar/Sidebar'), { ssr: false })

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
  overflow: auto;
`

// const SidebarWrapper = styled.div`
//   position: relative;
//   grid-area: content;
//   overflow: hidden;
//   pointer-events: none;
// `

const Config = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  z-index: ${zIndexes.scale};

  > *:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`

export const Page = ({
  timelineData,
}: {
  timelineData: ContentfulTimelineData
}) => {
  const scale = useStore((state) => state.scale)
  const filter = useStore((state) => state.filter)

  const formatedData = formatTimelineData(timelineData, scale, filter)

  return (
    <StyledPage>
      <Header />
      <Content>
        <Timeline data={formatedData} />
        <Config>
          <ThemeSwitch />
          <Scaling />
          <ScaleIndicator />
        </Config>
      </Content>
    </StyledPage>
  )

  // return (
  //   <StyledPage>
  //     <Header />
  //     <Content>
  //       <Timeline data={formatedData} />
  //       <Config>
  //         <ThemeSwitch />
  //         <Scaling />
  //         <ScaleIndicator />
  //       </Config>
  //     </Content>
  //     {/* <SidebarWrapper>
  //       <Sidebar isActive={!!store.sidebarId} contentId={store.sidebarId} />
  //     </SidebarWrapper> */}
  //   </StyledPage>
  // )
}
