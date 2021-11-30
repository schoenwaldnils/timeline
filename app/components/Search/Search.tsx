import styled from '@emotion/styled'
import { ClickAwayListener } from '@material-ui/core'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'

import { ReactComponent as SearchIcon } from './searchIcon.svg'

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

export const Search: FC = () => {
  const { t } = useTranslation('ui')
  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    return (
      <ClickAwayListener onClickAway={() => isActive && setIsActive(false)}>
        <Wrapper>
          <SearchContainer />
        </Wrapper>
      </ClickAwayListener>
    )
  }

  return (
    <Icon
      role="button"
      aria-label={t('search')}
      onClick={() => setIsActive(true)}
    />
  )
}
