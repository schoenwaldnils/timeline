import { Timespan } from './Timespan'

export default {
  title: 'Timespan',
  component: Timespan,
}

export const timespan = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    }}
  >
    <Timespan
      id="bla"
      name="Event Lorem Ipsum"
      type="time"
      startYear={50}
      endYear={587}
      pixelStart={50}
      pixelEnd={587}
      pixelDuration={537}
      duration={537}
      rowIndex={0}
    />
    <Timespan
      id="bla"
      name="John Doe"
      type="person"
      startYear={150}
      endYear={587}
      pixelStart={150}
      pixelEnd={487}
      pixelDuration={437}
      duration={437}
      rowIndex={1}
    />
  </div>
)
