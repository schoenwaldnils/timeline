import { FC } from 'react'

import { TimelineEvent } from '../../../@types/TimelineEvent.d'
import { CHANGE_CONTENT, useStore } from '../Store'
import { EventView } from './EventView'

export const Event: FC<TimelineEvent> = ({
  id,
  name,
  pixelYear,
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
      pixelYear={pixelYear}
      rowIndex={rowIndex}
      zIndex={zIndex}
      changeContent={changeContent}
    >
      {name}
    </EventView>
  )
}
