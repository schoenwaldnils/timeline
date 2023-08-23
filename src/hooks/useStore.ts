'use client'
import { create } from 'zustand'

import { Dictionary } from '@/utils/getDictionary'

import { i18n, Locale } from '../../i18n-config'

export const scales = [0.1, 0.2, 0.5, 1, 2, 4, 5, 10]

const lowerScale = (scale: number) => {
  const index = scales.indexOf(scale)
  return index > 0 ? scales[index - 1] : scale
}

const higherScale = (scale: number) => {
  const index = scales.indexOf(scale)
  return index < scales.length - 1 ? scales[index + 1] : scale
}

const isMaxScale = (scale: number) =>
  scales.indexOf(scale) === scales.length - 1
const isMinScale = (scale: number) => scales.indexOf(scale) === 0

export interface Store {
  locale: Locale
  dictionary: Dictionary
  setDictionary: (dictionary: Dictionary) => void
  scale: number
  scaleMaxed: boolean
  scaleFloored: boolean
  scaleUp: () => void
  scaleDown: () => void
  sidebarId?: string
  setSidebarId: (id?: string) => void
  filter: {
    showPersons: boolean
    showTimes: boolean
    showEvents: boolean
  }
  setFilter: (filter: Partial<Store['filter']>) => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useStore = create<Store>((set) => ({
  locale: i18n.defaultLocale,
  dictionary: {} as Dictionary,
  setDictionary: (dictionary) => set(() => ({ dictionary })),
  scale: 1,
  scaleUp: () =>
    set((state) => ({
      scale: higherScale(state.scale),
      scaleMaxed: isMaxScale(higherScale(state.scale)),
      scaleFloored: false,
    })),
  scaleDown: () =>
    set((state) => ({
      scale: lowerScale(state.scale),
      scaleMaxed: false,
      scaleFloored: isMinScale(lowerScale(state.scale)),
    })),
  scaleMaxed: false,
  scaleFloored: false,
  sidebarId: undefined,
  setSidebarId: (id) => set(() => ({ sidebarId: id })),
  filter: {
    showPersons: true,
    showTimes: true,
    showEvents: true,
  },
  setFilter: (filter: Partial<Store['filter']>) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}))
