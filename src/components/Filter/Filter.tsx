import { ClickAwayListener } from '@material-ui/core'
import { FC, useState } from 'react'

import { SET_FILTER, useStore } from '@/components/Store'

import { FilterView } from './FilterView'

export const Filter: FC = () => {
  const { store, dispatch } = useStore()
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => setIsActive(!isActive)

  const handleChange = (clickedRef) => {
    dispatch({
      type: SET_FILTER,
      filter: {
        [clickedRef.target.name]: clickedRef.target.checked,
      },
    })
  }

  return (
    <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
      <FilterView
        isActive={isActive}
        toggleIsActive={toggleIsActive}
        handleChange={handleChange}
        filterState={store.filter}
      />
    </ClickAwayListener>
  )
}
