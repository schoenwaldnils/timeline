import { TimelineCursorView } from './TimelineCursorView'

export default {
  title: 'Timeline Cursor',
  component: TimelineCursorView,
  parameters: {
    percy: { skip: true },
  },
}

export const TimelineCursor = () => {
  return (
    <div
      style={{
        width: '1500px',
        height: '400px',
        backgroundColor: '#ff000050',
      }}
    >
      <TimelineCursorView pixelYear={100} scale={1} />
    </div>
  )
}
