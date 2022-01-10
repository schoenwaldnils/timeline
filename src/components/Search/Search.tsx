import styled from '@emotion/styled'
import { ClickAwayListener } from '@material-ui/core'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'

import { Icon } from '@/components/Icon'

const SearchContainer = dynamic(() => import('./SearchContainer'), {
  ssr: false,
})

const Wrapper = styled.div`
  position: relative;
`

const IconStyled = styled(Icon)`
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
    <IconStyled
      icon="search"
      role="button"
      aria-label={t('ui.search')}
      onClick={() => setIsActive(true)}
    />
  )
}
