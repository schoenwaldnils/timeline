import styled from '@emotion/styled'
import { ClickAwayListener } from '@material-ui/core'
import dynamic from 'next/dynamic'
import { FC, useState } from 'react'

import { useTranslation } from '../../hooks/useTranslation'
import { IconPadded } from '../Icon'

const SearchContainer = dynamic(() => import('./SearchContainer'), {
  ssr: false,
})

const Wrapper = styled.div`
  position: relative;
`

const Icon = styled(IconPadded)`
  font-size: 1.25rem;
  cursor: pointer;
`

export const Search: FC = () => {
  const { t } = useTranslation()
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
    <Icon
      icon="search"
      role="button"
      aria-label={t('ui.search')}
      onClick={() => setIsActive(true)}
    />
  )
}
