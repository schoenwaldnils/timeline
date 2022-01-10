import { FC } from 'react'

import { Timespan as TimespanType } from '@/@types/Timespan'
import { CHANGE_CONTENT, useStore } from '@/components/Store'

import { TimespanView } from './TimespanView'

export const Timespan: FC<TimespanType> = (props) => {
  const { id } = props

  const { dispatch } = useStore()
  const handleClick = () => {
    dispatch({ type: CHANGE_CONTENT, contentId: id })
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
