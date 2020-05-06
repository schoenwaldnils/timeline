import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useSwipeable } from 'react-swipeable'
import { MdVerticalAlignBottom } from 'react-icons/md'

import { zIndexes } from '../../data/constants'
import { useTranslation } from '../../hooks/useTranslation'

interface WrapperProps {
  isActive: boolean
}

const isActiveStyles = css`
  opacity: 1;
  transform: translateX(-100%);
  transition: transform 300ms, opacity 50ms 0ms;
`

// 1. https://developers.google.com/web/updates/2016/12/url-bar-resizing
// 2. Set height of swipable div

const Wrapper = styled.div<WrapperProps>`
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
  background-color: var(--Sidebar-backgroundColor);
  opacity: 0;
  box-shadow: 1rem -0.5rem 0.75rem 1rem rgba(0, 0, 0, 0.25);
  transition: transform 300ms, opacity 100ms 200ms;

  ${({ isActive }) => isActive && isActiveStyles}

  > div {
    min-height: 100%; /* 2 */
  }
`

const SidebarContent = styled.div`
  height: 100%;
  max-height: 100vh;
  padding: 1rem 1rem 3rem;
  overflow-y: auto;
`

const Close = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 2.5rem;

  @media (min-width: 21.5rem) {
    right: auto;
    left: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  margin-left: -1em;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--Sidebar-iconColor);
  cursor: pointer;
  background-color: var(--Sidebar-iconBackgroundColor);
  border: none;
  border-radius: 50%;
  transform: rotate(-90deg);
  -moz-outline-radius: 50%;

  :focus {
    outline: 0;
  }
`

const Icon = styled(MdVerticalAlignBottom)`
  flex-shrink: 0;
`

interface SidebarViewProps {
  isActive: boolean
  closeSidebar: Function
}

export const SidebarView: React.FC<SidebarViewProps> = ({
  isActive = false,
  children,
  closeSidebar,
}) => {
  const { t } = useTranslation()
  const handlers = useSwipeable({
    onSwipedRight: eventData => closeSidebar(eventData),
    delta: 30,
  })
  return (
    <Wrapper isActive={isActive} role="dialog" {...handlers}>
      {children && <SidebarContent>{children}</SidebarContent>}
      <Close aria-label={t('ui.closeSidebar')} onClick={() => closeSidebar()}>
        <Icon />
      </Close>
    </Wrapper>
  )
}
