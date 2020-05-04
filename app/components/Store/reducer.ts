import {
  setUserLocalStore,
  setUserSessionStore,
  getUserLocalStore,
} from './userStore'
import { setUrlHash, removeUrlHash } from '../../js/urlHash'

export const SET_INIT = 'SET_INIT'
export const SET_LANG = 'SET_LANG'
export const SET_SCALE = 'SET_SCALE'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const SET_FILTER = 'SET_FILTER'
export const SET_THEME = 'SET_THEME'

type SET_INIT = 'SET_INIT'
type SET_LANG = 'SET_LANG'
type SET_SCALE = 'SET_SCALE'
type CHANGE_CONTENT = 'CHANGE_CONTENT'
type CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
type SET_FILTER = 'SET_FILTER'
type SET_THEME = 'SET_THEME'

export type LANGUAGES = 'en' | 'de' | string

export type State = {
  lang: string
  scale: number
  sidebar: {
    isActive: boolean
    contentId: string | undefined
  }
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
  | { type: SET_INIT; [key: string]: any }
  | { type: SET_LANG; lang: LANGUAGES }
  | { type: SET_SCALE; scale: number }
  | { type: CHANGE_CONTENT; contentId: string }
  | { type: CLOSE_SIDEBAR }
  | { type: SET_FILTER; filter: Filter }
  | { type: SET_THEME; themeIsDark: boolean }

type Reducer<S, A> = (state: S, action: A) => S

interface ScaleChangedEvent {
  action: any
  state: any
}

export const reducer: Reducer<State, Action> = (state, action) => {
  const scaleChanged: CustomEvent<ScaleChangedEvent> = new CustomEvent(
    'scaleChanged',
    {
      detail: {
        action,
        state,
      },
    },
  )

  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        ...getUserLocalStore(),
      }

    case SET_LANG:
      setUserLocalStore({
        lang: action.lang,
      })
      return {
        ...state,
        lang: action.lang,
      }

    case SET_SCALE:
      setUserLocalStore({
        scale: action.scale,
      })

      window.dispatchEvent(scaleChanged)

      return {
        ...state,
        scale: action.scale,
      }

    case CHANGE_CONTENT:
      setUrlHash(action.contentId)
      return {
        ...state,
        sidebar: {
          isActive: true,
          contentId: action.contentId,
        },
      }

    case CLOSE_SIDEBAR:
      removeUrlHash()
      return {
        ...state,
        sidebar: {
          isActive: false,
          contentId: undefined,
        },
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

    default:
      throw new Error()
  }
}
