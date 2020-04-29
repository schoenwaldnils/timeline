import React, { useReducer, useEffect } from 'react'
import shallowequal from 'shallowequal'

import { StoreContext, initialState, reducer } from './Store'
import { getUserLocalStore, getUserSessionStore } from './userStore'
import { getUrlHash } from '../../js/urlHash'
import {
  SET_LANG,
  SET_SCALE,
  SET_FILTER,
  SET_SIDEBAR_ACTIVE,
  SET_THEME,
} from './reducer'

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    /**
     * Load store form local storage and apply
     */
    const localStore = getUserLocalStore()
    if (localStore.lang && localStore.lang !== state.lang) {
      dispatch({ type: SET_LANG, lang: localStore.lang })
    }
    if (localStore.scale && localStore.scale !== state.scale) {
      dispatch({ type: SET_SCALE, scale: localStore.scale })
    }
    if (localStore.filter && !shallowequal(localStore.filter, state.filter)) {
      dispatch({ type: SET_FILTER, filter: localStore.filter })
    }

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
     * Read url hash
     */
    const localId = getUrlHash()
    if (localId && localId !== state.sidebar.contentId) {
      dispatch({ type: SET_SIDEBAR_ACTIVE, contentId: localId })
    }

    return () => {
      matcher.removeListener(onChange)
    }
  }, [state, dispatch])

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
