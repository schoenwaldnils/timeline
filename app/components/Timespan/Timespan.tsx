import React from 'react'

import { useStore, CHANGE_CONTENT } from '../Store'
import { TimespanView } from './TimespanView'

export interface TimespanProps {
  id: string
  name: string
  type: string
  pixelDuration: number
  pixelStart: number
  startBlurriness?: Number
  endBlurriness?: Number
  rowIndex: number
}

export const Timespan: React.FC<TimespanProps> = ({
  id,
  name,
  type,
  pixelStart,
  pixelDuration,
  startBlurriness,
  endBlurriness,
  rowIndex,
}) => {
  const [, dispatch] = useStore()

  const changeContent = () => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: id,
    })
  }

  return (
    <TimespanView
      {...{
        name,
        type,
        pixelStart,
        pixelDuration,
        startBlurriness,
        endBlurriness,
        changeContent,
        rowIndex,
      }}
    />
  )
}
