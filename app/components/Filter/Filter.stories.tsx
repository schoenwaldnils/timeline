import React from 'react'
import { action } from '@storybook/addon-actions'

import { FilterView } from './FilterView'

export default {
  title: 'Filter',
  component: FilterView,
}

const props = {
  toggleIsActive: action('toggleIsActive'),
  handleChange: action('handleChange'),
  filterState: {
    personsAreActive: true,
    timesAreActive: true,
    eventsAreActive: true,
  },
}

export const Active = () => <FilterView {...props} isActive={true} />
