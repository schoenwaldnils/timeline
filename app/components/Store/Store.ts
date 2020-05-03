import { createContext, useContext } from 'react'
import { State, Action } from './reducer'
import { LANGUAGES } from '../../data/constants'

export const initialState = {
  lang: LANGUAGES.EN,
  scale: 1,
  sidebar: {
    isActive: false,
    contentId: undefined,
  },
  filter: {
    personsAreActive: true,
    timesAreActive: true,
    eventsAreActive: true,
  },
  themeIsDark: false,
}

type Context = [State, (action: Action) => void]

export const StoreContext = createContext<Context>([initialState, () => {}])

export const useStore = () => useContext(StoreContext)
export * from './reducer'
