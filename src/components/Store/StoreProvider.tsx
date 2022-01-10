import { FC, useEffect, useReducer } from 'react'

import { getUrlHash } from '@/js/urlHash'

import { CHANGE_CONTENT, CLOSE_SIDEBAR, reducer, SET_THEME } from './reducer'
import { initialState, StoreContext } from './Store'
import { getUserLocalStore, getUserSessionStore } from './userStore'

export const StoreProvider: FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {
    ...initialState,
    ...getUserLocalStore(),
  })

  useEffect(() => {
    /**
     * dark mode
     */
    const matchDark = '(prefers-color-scheme: dark)'
    const matcher = window.matchMedia && window.matchMedia(matchDark)
    let preferesDark = !!matcher.matches

    const sessionStore = getUserSessionStore()
    if (typeof sessionStore.themeIsDark !== 'undefined') {
      preferesDark = sessionStore.themeIsDark
    }

    if (preferesDark !== store.themeIsDark) {
      dispatch({ type: SET_THEME, themeIsDark: preferesDark })
    }

    /**
     * Read and listen to url hash
     */
    const handleUrlChange = () => {
      // TODO: refactor to use next/router
      const localId = getUrlHash()
      if (localId) {
        dispatch({ type: CHANGE_CONTENT, contentId: localId })
      }
      if (!localId && store.sidebarId) {
        dispatch({ type: CLOSE_SIDEBAR })
      }
    }
    window.onpopstate = () => {
      handleUrlChange()
    }
    window.addEventListener('load', handleUrlChange, {
      passive: true,
    })

    return () => {
      window.removeEventListener('load', () => null)
    }
  }, [store, dispatch])

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
