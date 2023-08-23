'use client'
import { ClickAwayListener } from '@material-ui/core'
import { ChangeEvent, FC, useState } from 'react'

import { FilterView } from './FilterView'
import { Store, useStore } from '@/hooks/useStore'

export const Filter: FC = () => {
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => setIsActive(!isActive)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
      <FilterView
        isActive={isActive}
        toggleIsActive={toggleIsActive}
        handleChange={handleChange}
        filterState={filter}
      />
    </ClickAwayListener>
  )
}
