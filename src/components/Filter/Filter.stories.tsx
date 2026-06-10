import { FC } from 'react'

import { FilterView } from './FilterView'

export default {
  title: 'Filter',
  component: FilterView,
}

const props = {
  toggleIsActive: () => {},
  handleChange: () => {},
  filterState: {
    showPersons: true,
    showTimes: true,
    showEvents: true,
  },
}

export const Filter: FC = () => <FilterView {...props} isActive={true} />
