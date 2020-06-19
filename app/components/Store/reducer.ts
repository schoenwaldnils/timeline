import {
  setUserLocalStore,
  setUserSessionStore,
  getUserLocalStore,
} from './userStore'
import { isBrowser } from '../../utils/isBrowser'
import { setUrlHash, removeUrlHash } from '../../js/urlHash'
import { Locale } from '../../utils/intl/intlConsts'

export const SET_INIT = 'SET_INIT'
export const SET_LOCALE = 'SET_LOCALE'
export const SET_SCALE = 'SET_SCALE'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const SET_FILTER = 'SET_FILTER'
export const SET_THEME = 'SET_THEME'
export const SET_ACTIVE_PERSONS = 'SET_ACTIVE_PERSONS'

type SET_INIT = 'SET_INIT'
type SET_LOCALE = 'SET_LOCALE'
type SET_SCALE = 'SET_SCALE'
type CHANGE_CONTENT = 'CHANGE_CONTENT'
type CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
type SET_FILTER = 'SET_FILTER'
type SET_THEME = 'SET_THEME'
type SET_ACTIVE_PERSONS = 'SET_ACTIVE_PERSONS'

export type State = {
  locale: Locale
  scale: number
  sidebarId: string | undefined
  filter: {
    personsAreActive: boolean
    timesAreActive: boolean
    eventsAreActive: boolean
  }
  themeIsDark: boolean
  activePersons: Array<string>
}

type Filter = {
  personsAreActive?: boolean
  timesAreActive?: boolean
  eventsAreActive?: boolean
}

export type Action =
  | { type: SET_INIT; [key: string]: any }
  | { type: SET_LOCALE; locale: string }
  | { type: SET_SCALE; scale: number }
  | { type: CHANGE_CONTENT; contentId: string }
  | { type: CLOSE_SIDEBAR }
  | { type: SET_FILTER; filter: Filter }
  | { type: SET_THEME; themeIsDark: boolean }
  | { type: SET_ACTIVE_PERSONS; activePersons: Array<string> }

type Reducer<S, A> = (state: S, action: A) => S

interface ScaleChangedEvent {
  action: any
  state: any
}

export const reducer: Reducer<State, Action> = (state, action) => {
  let scaleChanged: CustomEvent<ScaleChangedEvent>
  if (typeof window !== 'undefined') {
    scaleChanged = new CustomEvent('scaleChanged', {
      detail: {
        action,
        state,
      },
    })
  }

  // console.log('action.type', action.type)

  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        ...getUserLocalStore(),
      }

    case SET_LOCALE:
      setUserLocalStore({
        locale: action.locale,
      })
      return {
        ...state,
        locale: action.locale,
      }

    case SET_SCALE:
      if (isBrowser) {
        setUserLocalStore({
          scale: action.scale,
        })
      }

      window.dispatchEvent(scaleChanged)

      return {
        ...state,
        scale: action.scale,
      }

    case CHANGE_CONTENT:
      setUrlHash(action.contentId)
      return {
        ...state,
        sidebarId: action.contentId,
      }

    case CLOSE_SIDEBAR:
      removeUrlHash()
      return {
        ...state,
        sidebarId: undefined,
      }

    case SET_FILTER:
      setUserLocalStore({
        filter: {
          ...state.filter,
          ...action.filter,
        },
      })
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.filter,
        },
      }

    case SET_THEME:
      setUserSessionStore({
        themeIsDark: action.themeIsDark,
      })
      return {
        ...state,
        themeIsDark: action.themeIsDark,
      }

    case SET_ACTIVE_PERSONS:
      return {
        ...state,
        activePersons: [...state.activePersons, ...action.activePersons],
      }

    default:
      throw new Error()
  }
}
