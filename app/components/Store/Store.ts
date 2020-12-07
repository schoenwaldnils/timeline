import { createContext, Dispatch, useContext } from 'react'
import { LOCALES } from '../../utils/intl/intlConsts'
import { Action } from './reducer'

export const initialState = {
  locale: LOCALES.EN,
  scale: 1,
  sidebarId: undefined,
  filter: {
    personsAreActive: true,
    timesAreActive: true,
    eventsAreActive: true,
  },
  themeIsDark: false,
  currentPerson: undefined,
  ancestors: [],
  descendants: [],
}

type Context = {
  store: typeof initialState
  dispatch: Dispatch<Action>
}

export const StoreContext = createContext<Context>({
  store: initialState,
  dispatch: () => {},
})

export const useStore = () => useContext(StoreContext)
