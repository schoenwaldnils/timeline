import { ScaleIndicator } from './ScaleIndicator'
import { Scaling } from './Scaling'

export default {
  title: 'Scaling',
  component: Scaling,
}

export const scaling = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',
    }}
  >
    <Scaling />
    <ScaleIndicator />
  </div>
)
