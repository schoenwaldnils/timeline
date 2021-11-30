import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'
import { MdVerticalAlignBottom } from 'react-icons/md'
import { useSwipeable } from 'react-swipeable'

import { zIndexes } from '../../data/constants'

const isActiveStyles = css`
  opacity: 1;
  transform: translateX(-100%);
  transition: transform 300ms, opacity 50ms 0ms;
`

// 1. https://developers.google.com/web/updates/2016/12/url-bar-resizing

const SidebarContainer = styled.div<{
  isActive: boolean
}>`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: ${zIndexes.sidebar};
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 100vw;
  height: 100%; /* 1 */
  font-size: 1rem;
  pointer-events: all;
  background-color: var(--Sidebar-backgroundColor);
  opacity: 0;
  box-shadow: 1rem -0.5rem 0.75rem 1rem rgba(0, 0, 0, 0.25);
  transition: transform 300ms, opacity 100ms 200ms;

  ${(p) => p.isActive && isActiveStyles}
`

const SidebarContent = styled.div`
  height: 100%;
  max-height: 100vh;
  padding: 1rem 1rem 3rem;
  overflow-y: auto;
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 2.5rem;
  background-color: var(--Sidebar-iconBackgroundColor);
  border-radius: 50%;

  @media (min-width: 21.5rem) {
    right: auto;
    left: 0;
    transform: translateX(-50%);
  }
`

const Close = styled(IconButton)`
  color: var(--Sidebar-iconColor) !important;

  :focus {
    outline: 0;
  }
`

const Icon = styled(MdVerticalAlignBottom)`
  transform: rotate(-90deg);
`

interface SidebarViewProps {
  isActive: boolean
  closeSidebar: () => void
}

export const SidebarView: FC<SidebarViewProps> = ({
  isActive = false,
  children,
  closeSidebar,
}) => {
  const { t } = useTranslation('ui')
  const handlers = useSwipeable({
    onSwipedRight: () => closeSidebar(),
    delta: 30,
  })

  return (
    <SidebarContainer isActive={isActive} role="dialog" {...handlers}>
      {children && <SidebarContent>{children}</SidebarContent>}
      <ButtonWrapper>
        <Close aria-label={t('closeSidebar')} onClick={closeSidebar}>
          <Icon />
        </Close>
      </ButtonWrapper>
    </SidebarContainer>
  )
}
