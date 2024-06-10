'use client'

import { useTranslations } from 'next-intl'
import { MdVerticalAlignBottom } from 'react-icons/md'
import { useSwipeable } from 'react-swipeable'
import { useShallow } from 'zustand/react/shallow'

import { ApolloWrapper } from '@/components/ApolloWrapper'
import { useSidebarStore } from '@/hooks/useSidebarStore'

import { ContentfulContent } from '../Contentful'
import css from './Sidebar.module.css'

export const Sidebar = () => {
  const { active, type, id, hideSidebar } = useSidebarStore(
    useShallow((state) => ({
      active: state.active,
      type: state.type,
      id: state.id,
      hideSidebar: state.hideSidebar,
    })),
  )

  const t = useTranslations()
  const handlers = useSwipeable({
    onSwipedRight: hideSidebar,
    delta: 30,
  })

  return (
    <ApolloWrapper>
      <div
        className={css.Sidebar}
        role="dialog"
        {...handlers}
        style={
          active
            ? {
                opacity: 1,
                transform: 'translateX(-100%)',
                transition: 'transform 300ms, opacity 50ms 0ms',
              }
            : {}
        }
      >
        <div className={css.Sidebar_content}>
          {type && id && <ContentfulContent type={type} id={id} />}
        </div>

        <button
          className={css.Sidebar_close}
          onClick={hideSidebar}
          aria-label={t('ui.close-sidebar')}
        >
          <MdVerticalAlignBottom
            style={{
              transform: 'rotate(-90deg)',
            }}
          />
        </button>
      </div>
    </ApolloWrapper>
  )
}
