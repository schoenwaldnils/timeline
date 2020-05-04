import React, { useReducer, useEffect } from 'react'

import { StoreContext, initialState, reducer } from './Store'
import { getUserLocalStore, getUserSessionStore } from './userStore'
import { getUrlHash } from '../../js/urlHash'
import { CLOSE_SIDEBAR, SET_THEME, CHANGE_CONTENT } from './reducer'

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
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

    if (preferesDark !== state.themeIsDark) {
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
      if (!localId && state.sidebar.isActive) {
        dispatch({ type: CLOSE_SIDEBAR })
      }
    }
    window.onpopstate = () => {
      handleUrlChange()
    }
    window.addEventListener('load', () => {
      handleUrlChange()
    })

    return () => {
      matcher.removeListener(onChange)
      window.removeEventListener('load', () => {})
    }
  }, [state, dispatch])

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
