'use client'

import { useRef } from 'react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Timeline } from '@/components/Timeline'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { TimelineQueryData } from '@/utils/objectFormating/formatTimelineData'

import { Config } from './Config'
import css from './Page.module.css'

export const Page = ({ timelineData }: { timelineData: TimelineQueryData }) => {
  const ref = useRef<HTMLDivElement>(null)
  const elementRef = useScrollPosition(ref)

  return (
    <div className={css.Page}>
      <Header />
      <div className={css.Page_content} ref={elementRef}>
        <Timeline data={timelineData} containerRef={ref} />

        <Config className={css.Page_config} />
      </div>
      <aside className={css.Page_sidebar}>
        <Sidebar />
      </aside>
    </div>
  )
}
