import React, { useReducer, useEffect } from 'react'

import { reducer, CHANGE_CONTENT, SET_THEME, CLOSE_SIDEBAR } from './reducer'
import { StoreContext, initialState } from './Store'
import { getUserLocalStore, getUserSessionStore } from './userStore'
import { getUrlHash } from '../../js/urlHash'

export const StoreProvider = ({ children }) => {
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

    const onChange = matches =>
      dispatch({ type: SET_THEME, themeIsDark: matches })

    matcher.addListener(({ matches }) => onChange(matches))

    /**
     * Read and listen to url hash
     */
    const handleUrlChange = () => {
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
      matcher.removeListener(onChange)
      window.removeEventListener('load', () => {})
    }
  }, [store, dispatch])

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
