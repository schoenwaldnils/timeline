import React from 'react'

import { Scaling } from './Scaling'
import { ScaleIndicator } from './ScaleIndicator'

export default {
  title: 'Scaling',
  component: Scaling,
}

export const Basic = () => <Scaling />

export const Indicator = () => <ScaleIndicator />
