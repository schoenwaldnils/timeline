import React from 'react'

import { CHANGE_CONTENT, useStore } from '../Store'
import { EventView } from './EventView'

export interface EventProps {
  id: string
  name: string
  pixelYear: number
  rowIndex?: number
  zIndex?: number
}

export const Event: React.FC<EventProps> = ({
  id,
  name,
  pixelYear,
  rowIndex,
  zIndex,
}) => {
  const [, dispatch] = useStore()

  const changeContent = () => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: id,
    })
  }
  return (
    <EventView
      pixelYear={pixelYear}
      rowIndex={rowIndex}
      zIndex={zIndex}
      changeContent={changeContent}
    >
      {name}
    </EventView>
  )
}
