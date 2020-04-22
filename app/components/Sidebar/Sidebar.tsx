import React, { useState, useEffect } from 'react'
import Swipe from 'react-easy-swipe'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { MdVerticalAlignBottom } from 'react-icons/md'

import { getLocalStorageNumber, setLocalStorage } from '../../js/localStorage'
import { themeColors } from '../../js/colors'
import { zIndexes } from '../../data/constants'
import { T } from '../../js/translate'

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
  background-color: #fff;
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
  color: #fff;
  cursor: pointer;
  background-color: ${themeColors.themeColor};
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

interface SidebarProps {
  isActive: boolean
  content: any
  closeSidebar: Function
}

export const Sidebar: React.FC<SidebarProps> = ({
  isActive = false,
  content,
  closeSidebar,
}) => {
  const DEFAULT_SIDEBAR_WIDTH = 320
  const LOCALSTORAGE_KEY = 'sidebarWidth'

  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH)

  useEffect(() => {
    const userSidebarWidth: number = getLocalStorageNumber(LOCALSTORAGE_KEY)

    if (!userSidebarWidth) {
      setLocalStorage(LOCALSTORAGE_KEY, sidebarWidth)
    } else if (userSidebarWidth !== sidebarWidth) {
      setSidebarWidth(userSidebarWidth)
    }
  }, [sidebarWidth])

  return (
    <Wrapper isActive={isActive} role="dialog">
      <Swipe onSwipeRight={closeSidebar}>
        {content && <SidebarContent>{content}</SidebarContent>}
        <Close aria-label={T('ui.closeSidebar')} onClick={() => closeSidebar()}>
          <Icon />
        </Close>
      </Swipe>
    </Wrapper>
  )
}
