import React from 'react'

import { TimespanView } from './TimespanView'
import { useStore, CHANGE_CONTENT } from '../Store'

export interface TimespanProps {
  id: string
  name: string
  type: string
  pixelDuration: number
  pixelStart: number
  startBlurriness?: Number
  endBlurriness?: Number
  rowIndex: number
  isAncestor?: boolean
  isDescendant?: boolean
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
  isAncestor,
  isDescendant,
}) => {
  const { dispatch } = useStore()
  const handleClick = () => {
    dispatch({ type: CHANGE_CONTENT, contentId: id })
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
        rowIndex,
        changeContent: handleClick,
        isAncestor,
        isDescendant,
      }}
    />
  )
}
