'use client'

import { ClickAwayListener } from '@material-ui/core'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { USER_FILTER_KEY } from '@/data/constants'
import { useStore } from '@/hooks/useStore'

import { FilterView } from './FilterView'

export const Filter: FC = () => {
  const { filter, setFilter } = useStore(
    useShallow((state) => ({
      filter: state.filter,
      setFilter: state.setFilter,
    })),
  )
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(USER_FILTER_KEY, JSON.stringify(filter))
  }, [filter])

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
