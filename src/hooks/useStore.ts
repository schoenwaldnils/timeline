'use client'

import { create } from 'zustand'

import { Theme } from '@/@types/Theme'
import { USER_FILTER_KEY, USER_LOCALE_KEY, USER_THEME_KEY } from '@/data/constants'
import { i18n, Locale } from '@/i18n-config'
import type { Dictionary } from '@/utils/getDictionary'

type Filter = {
  showPersons: boolean
  showTimes: boolean
  showEvents: boolean
}

export interface Store {
  locale: Locale
  dictionary: Dictionary
  setDictionary: (dictionary: Dictionary) => void
  filter: Filter
  setFilter: (filter: Partial<Store['filter']>) => void
  theme: Theme
  toggleTheme: () => void
}

const getLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    const localLocale = window.localStorage.getItem(USER_LOCALE_KEY) as Locale

    if (!localLocale) {
      return i18n.defaultLocale
    }

    return `${localLocale}` ? localLocale : i18n.defaultLocale
  }

  return i18n.defaultLocale
}

const getFilter = (): Filter => {
  const defaultFilter: Filter = {
    showPersons: true,
    showTimes: true,
    showEvents: true,
  }

  if (typeof window !== 'undefined') {
    const localFilter = window.localStorage.getItem(USER_FILTER_KEY)

    if (!localFilter) {
      return defaultFilter
    }

    return JSON.parse(localFilter) as Filter
  }

  return defaultFilter
}

const getTheme = (set: (partial: Partial<Store>) => void): Theme => {
  if (typeof window !== 'undefined') {
    const localTheme = window.localStorage.getItem(USER_THEME_KEY) as Theme
    const query = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

    const matchedTheme = query.matches ? Theme.Dark : Theme.Light

    query.addEventListener('change', (event) =>
      set({ theme: event.matches ? Theme.Dark : Theme.Light }),
    )

    if (!localTheme) {
      return matchedTheme
    }

    return `${localTheme}` ? localTheme : matchedTheme
  }
  return Theme.Light
}

export const useStore = create<Store>((set) => ({
  locale: getLocale(),
  dictionary: {} as Dictionary,
  setDictionary: (dictionary) => set(() => ({ dictionary })),
  filter: getFilter(),
  setFilter: (filter: Partial<Store['filter']>) =>
    set((state) => ({ filter: { ...state.filter, ...filter } })),
  theme: getTheme(set),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === Theme.Light ? Theme.Dark : Theme.Light,
    })),
}))
