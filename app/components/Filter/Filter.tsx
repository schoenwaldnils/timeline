import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'

import { ReactComponent as FilterIcon } from './filterIcon.svg'

import { T } from '../../js/translate'
import { zIndexes } from '../../data/constants'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { useStore, SET_FILTER } from '../Store'

const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  color: inherit;
  background: none;
  border: 0;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
`

const Icon = styled(FilterIcon)`
  display: block;
  width: 1em;
  height: 1em;
  font-size: 1.25rem;

  > path {
    fill: currentColor;
  }
`

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  z-index: ${zIndexes.filter};
  padding: 0.25rem;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem 0 #0007;
`

const Label = styled.label`
  padding: 0.5em 0.7em;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1;
`

const InputEl = styled.div`
  display: flex;
  width: max-content;

  > ${Label} {
    flex-shrink: 0;
  }
`

const Checkbox = styled.input`
  margin: 0 0.75em 0 0;
`

export const Filter: React.FC = () => {
  const [state, dispatch] = useStore()
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

  const filterElements = [
    {
      id: 'persons',
      label: T('ui.persons'),
      name: 'personsAreActive',
      value: state.filter.personsAreActive,
    },
    {
      id: 'times',
      label: T('ui.times'),
      name: 'timesAreActive',
      value: state.filter.timesAreActive,
    },
    {
      id: 'events',
      label: T('ui.events'),
      name: 'eventsAreActive',
      value: state.filter.eventsAreActive,
    },
  ]

  return (
    <Wrapper ref={ref}>
      <IconButton onClick={toggleIsActive} aria-label={T('ui.filterElements')}>
        <Icon
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentcolor"
        />
      </IconButton>

      {isActive && (
        <Menu>
          {filterElements.map(({ id, name, label, value }) => (
            <InputEl key={`checkbox_${id}`}>
              <Label htmlFor={`checkbox_${id}`}>
                <Checkbox
                  id={`checkbox_${id}`}
                  type="checkbox"
                  name={name}
                  onChange={handleChange}
                  checked={value}
                />
                {label}
              </Label>
            </InputEl>
          ))}
        </Menu>
      )}
    </Wrapper>
  )
}
