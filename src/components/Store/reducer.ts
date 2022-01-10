import { removeUrlHash, setUrlHash } from '@/js/urlHash'
import { isBrowser } from '@/utils/isBrowser'

import {
  getUserLocalStore,
  setUserLocalStore,
  setUserSessionStore,
} from './userStore'

export const SET_INIT = 'SET_INIT'
export const SET_SCALE = 'SET_SCALE'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const SET_FILTER = 'SET_FILTER'
export const SET_THEME = 'SET_THEME'

type SET_INIT = 'SET_INIT'
type SET_SCALE = 'SET_SCALE'
type CHANGE_CONTENT = 'CHANGE_CONTENT'
type CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
type SET_FILTER = 'SET_FILTER'
type SET_THEME = 'SET_THEME'

export type Store = {
  scale: number
  sidebarId?: string
  filter: {
    personsAreActive: boolean
    timesAreActive: boolean
    eventsAreActive: boolean
  }
  themeIsDark: boolean
}

type Filter = {
  personsAreActive?: boolean
  timesAreActive?: boolean
  eventsAreActive?: boolean
}

export type Action =
  | { type: SET_INIT }
  | { type: SET_SCALE; scale: number }
  | { type: CHANGE_CONTENT; contentId: string }
  | { type: CLOSE_SIDEBAR }
  | { type: SET_FILTER; filter: Filter }
  | { type: SET_THEME; themeIsDark: boolean }

type Reducer<S, A> = (store: S, action: A) => S

interface ScaleChangedEvent {
  action: Action
  store: Store
}

export const reducer: Reducer<Store, Action> = (store, action) => {
  let scaleChanged: CustomEvent<ScaleChangedEvent>
  if (typeof window !== 'undefined') {
    scaleChanged = new CustomEvent('scaleChanged', {
      detail: {
        store,
        action,
      },
    })
  }

  // console.log('action.type', action.type)

  switch (action.type) {
    case SET_INIT:
      return {
        ...store,
        ...getUserLocalStore(),
      }

    case SET_SCALE:
      if (isBrowser) {
        setUserLocalStore({
          scale: action.scale,
        })
      }

      window.dispatchEvent(scaleChanged)

      return {
        ...store,
        scale: action.scale,
      }

    case CHANGE_CONTENT:
      setUrlHash(action.contentId)
      return {
        ...store,
        sidebarId: action.contentId,
      }

    case CLOSE_SIDEBAR:
      removeUrlHash()
      return {
        ...store,
        sidebarId: undefined,
      }

    case SET_FILTER:
      setUserLocalStore({
        filter: {
          ...store.filter,
          ...action.filter,
        },
      })
      return {
        ...store,
        filter: {
          ...store.filter,
          ...action.filter,
        },
      }

    case SET_THEME:
      setUserSessionStore({
        themeIsDark: action.themeIsDark,
      })
      return {
        ...store,
        themeIsDark: action.themeIsDark,
      }

    default:
      throw new Error()
  }
}
