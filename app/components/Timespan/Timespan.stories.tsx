import React from 'react'
import { action } from '@storybook/addon-actions'

import styled from '@emotion/styled'
import { TimespanView } from './TimespanView'

export default {
  title: 'Timespan',
  component: TimespanView,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`

export const Time = () => (
  <Container>
    <TimespanView
      name="Event Lorem Ipsum"
      type="time"
      pixelStart={50}
      pixelDuration={537}
      rowIndex={0}
      changeContent={action('changeContent')}
    />
    <TimespanView
      name="John Doe"
      type="person"
      pixelStart={50}
      pixelDuration={1542}
      rowIndex={1}
      changeContent={action('changeContent')}
    />
  </Container>
)
