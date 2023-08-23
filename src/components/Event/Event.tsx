import type { TimelineEvent } from '@/@types/TimelineEvent.d'
import { useStore } from '@/hooks/useStore'

import { EventView } from './EventView'

export const Event = ({
  id,
  name,
  pixelStart,
  rowIndex,
  zIndex,
}: TimelineEvent) => {
  const setSidebarId = useStore((state) => state.setSidebarId)

  return (
    <EventView
      pixelStart={pixelStart}
      rowIndex={rowIndex}
      zIndex={zIndex}
      changeContent={() => setSidebarId(id)}
    >
      {name}
    </EventView>
  )
}
