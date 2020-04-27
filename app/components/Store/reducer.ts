import { setUserStore } from './userStore'
import { setUrlHash, removeUrlHash } from '../../js/urlHash'

export const SET_LANG = 'SET_LANG'
export const SET_SCALE = 'SET_SCALE'
export const SET_SIDEBAR_ACTIVE = 'SET_SIDEBAR_ACTIVE'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'

type SET_LANG = 'SET_LANG'
type SET_SCALE = 'SET_SCALE'
type SET_SIDEBAR_ACTIVE = 'SET_SIDEBAR_ACTIVE'
type CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'

export type LANGUAGES = 'en' | 'de' | string

export type State = {
  lang: string
  scale: number
  sidebar: {
    isActive: boolean
    contentId: string | undefined
  }
}

export type Action =
  | { type: SET_LANG; lang: LANGUAGES }
  | { type: SET_SCALE; scale: number }
  | { type: SET_SIDEBAR_ACTIVE; contentId: string }
  | { type: CLOSE_SIDEBAR }

type Reducer<S, A> = (state: S, action: A) => S

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case SET_LANG:
      setUserStore({
        lang: action.lang,
      })
      return {
        ...state,
        lang: action.lang,
      }

    case SET_SCALE:
      setUserStore({
        scale: action.scale,
      })
      return {
        ...state,
        scale: action.scale,
      }

    case SET_SIDEBAR_ACTIVE:
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
          ...state.sidebar,
          isActive: false,
          contentId: undefined,
        },
      }

    default:
      throw new Error()
  }
}
