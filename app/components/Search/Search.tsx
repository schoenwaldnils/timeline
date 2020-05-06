import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

import { ReactComponent as SearchIcon } from './searchIcon.svg'

import { useClickOutside } from '../../hooks/useClickOutside'
import { useTranslation } from '../../hooks/useTranslation'

const SearchContainer = dynamic(() => import('./SearchContainer'), {
  ssr: false,
})

const Wrapper = styled.div`
  position: relative;
`

const Icon = styled(SearchIcon)`
  font-size: 1.25rem;

  > path {
    fill: currentColor;
  }
`

export const Search = () => {
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useClickOutside(ref, () => {
    if (isActive) {
      setIsActive(false)
    }
  })

  if (isActive) {
    return (
      <Wrapper ref={ref}>
        <SearchContainer />
      </Wrapper>
    )
  }

  return (
    <Icon
      role="button"
      aria-label={t('ui.search')}
      onClick={() => setIsActive(true)}
    />
  )
}
