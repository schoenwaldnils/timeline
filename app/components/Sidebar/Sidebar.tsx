import React, { useState, useEffect, useContext } from 'react'
import Swipe from 'react-easy-swipe'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { MdVerticalAlignBottom } from 'react-icons/md'

import { getLocalStorageNumber, setLocalStorage } from '../../js/localStorage'
import { SidebarContext } from './SidebarContext'
import { themeColors } from '../../js/colors'
import { zIndexes } from '../../data/constants'

interface WrapperProps {
  isActive: boolean
}

const isActiveStyles = css`
  transform: translateX(-100%);
  transition: transform 300ms, opacity 50ms 0ms;
  opacity: 1;
`

const Wrapper = styled.div<WrapperProps>`
  position: fixed !important;
  top: 0;
  left: 100%;
  z-index: ${zIndexes.sidebar};
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100vh;
  max-width: 100vw;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 1rem -0.5rem 0.75rem 1rem rgba(0, 0, 0, 0.25);
  transition: transform 300ms, opacity 100ms 200ms;
  opacity: 0;

  ${({ isActive }) => isActive && isActiveStyles}
`

const StyledSwipe = styled(Swipe)`
  height: 100%;
`

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 1rem 1rem 3rem;
  overflow-y: auto;
`

const Close = styled.button`
  position: absolute;
  left: 0;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  margin-left: -1em;
  font-size: 1.5rem;
  line-height: 1;
  color: #fff;
  background-color: ${themeColors.themeColor};
  border-radius: 50%;
  border: none;
  transform: rotate(-90deg);
  cursor: pointer;
  -moz-outline-radius: 50%;

  :focus {
    outline: 0;
  }
`

export const Sidebar: React.FC = () => {
  const { isActive, content, closeSidebar } = useContext(SidebarContext)
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
  }, [])

  return (
    <Wrapper isActive={isActive} role="dialog">
      {content && (
        <StyledSwipe onSwipeRight={closeSidebar}>
          <SidebarContent>{content}</SidebarContent>
          <Close onClick={() => closeSidebar()}>
            <MdVerticalAlignBottom />
          </Close>
        </StyledSwipe>
      )}
    </Wrapper>
  )
}

Sidebar.defaultProps = {
  isActive: true,
}
