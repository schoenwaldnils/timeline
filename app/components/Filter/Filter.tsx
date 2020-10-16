import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useStore, SET_FILTER } from '../Store'

import { FilterView } from './FilterView'

export const Filter: React.FC = () => {
  const { store, dispatch } = useStore()
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    setIsActive(false)
  })

  const toggleIsActive = () => setIsActive(!isActive)

  const handleChange = clickedRef => {
    dispatch({
      type: SET_FILTER,
      filter: {
        [clickedRef.target.name]: clickedRef.target.checked,
      },
    })
  }

  return (
    <FilterView
      isActive={isActive}
      toggleIsActive={toggleIsActive}
      handleChange={handleChange}
      filterState={store.filter}
      ref={ref}
    />
  )
}
