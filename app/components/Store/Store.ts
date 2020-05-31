import { createContext, useContext } from 'react'
import { State, Action } from './reducer'
import { LOCALES } from '../../utils/intl/intlConsts'

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
}

type Context = [State, (action: Action) => void]

export const StoreContext = createContext<Context>([initialState, () => {}])

export const useStore = () => useContext(StoreContext)
export * from './reducer'
