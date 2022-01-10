import { FC } from 'react'

import { TimelineEvent } from '@/@types/TimelineEvent.d'
import { CHANGE_CONTENT, useStore } from '@/components/Store'

import { EventView } from './EventView'

export const Event: FC<TimelineEvent> = ({
  id,
  name,
  pixelStart,
  rowIndex,
  zIndex,
}) => {
  const { dispatch } = useStore()

  const changeContent = () => {
    dispatch({
      type: CHANGE_CONTENT,
      contentId: id,
    })
  }

  return (
    <EventView
      pixelStart={pixelStart}
      rowIndex={rowIndex}
      zIndex={zIndex}
      changeContent={changeContent}
    >
      {name}
    </EventView>
  )
}
