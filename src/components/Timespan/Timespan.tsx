import { FC } from 'react'

import { Timespan as TimespanType } from '@/@types/Timespan'

import { TimespanView } from './TimespanView'
import { useStore } from '@/hooks/useStore'

export const Timespan: FC<TimespanType> = (props) => {
  const { id } = props

  const setSidebarId = useStore((state) => state.setSidebarId)

  const handleClick = () => {
    setSidebarId(id)
  }

  return (
    <TimespanView
      {...{
        ...props,
        changeContent: handleClick,
      }}
    />
  )
}
