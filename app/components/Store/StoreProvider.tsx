import React, { useReducer, useEffect } from 'react'
import shallowequal from 'shallowequal'

import {
  StoreContext,
  initialState,
  reducer,
  SET_LANG,
  SET_SCALE,
  SET_SIDEBAR_ACTIVE,
  SET_FILTER,
} from './Store'
import { getUserStore } from './userStore'
import { getUrlHash } from '../../js/urlHash'

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    /**
     * Load store form local storage and apply
     */
    const localStore = getUserStore()
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
     * Read and listen to url hash
     */
    const localId = getUrlHash()
    if (localId && localId !== state.sidebar.contentId) {
      dispatch({ type: SET_SIDEBAR_ACTIVE, contentId: localId })
    }
  }, [state, dispatch])

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
