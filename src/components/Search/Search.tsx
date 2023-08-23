'use client'
import styled from '@emotion/styled'
import { ClickAwayListener } from '@material-ui/core'
import dynamic from 'next/dynamic'
import { FC, useState } from 'react'
import { useTranslations } from 'next-intl'

import { ReactComponent as SearchIcon } from '../../svgs/searchIcon.svg'

const SearchContainer = dynamic(() => import('./SearchContainer'), {
  ssr: false,
})

const Wrapper = styled.div`
  position: relative;
`

const Button = styled.button`
  font-size: 1.25rem;
  cursor: pointer;
`

export const Search: FC = () => {
  const t = useTranslations()
  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    return (
      <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
        <Wrapper>
          <SearchContainer onHitClick={() => setIsActive(false)} />
        </Wrapper>
      </ClickAwayListener>
    )
  }

  return (
    <Button aria-label={t('ui.search')} onClick={() => setIsActive(true)}>
      <SearchIcon />
    </Button>
  )
}
