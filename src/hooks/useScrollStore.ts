'use client'

import { create } from 'zustand'

import { Coordinates } from '@/@types/Scroll'
import { USER_SCROLL_POSITION_KEY } from '@/data/constants'

const getScroll = (defaultScroll = { left: 0, top: 0 }): Coordinates => {
  if (typeof window !== 'undefined') {
    const localScroll = window.localStorage.getItem(USER_SCROLL_POSITION_KEY)

    return localScroll ? (JSON.parse(localScroll) as Coordinates) : defaultScroll
  }

  return defaultScroll
}

const setLocalScroll = (scroll: Coordinates) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(USER_SCROLL_POSITION_KEY, JSON.stringify(scroll))
  }
}

export interface ScrollStore {
  scroll: Coordinates
  setScroll: (c: Coordinates) => void
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scroll: getScroll({ left: 0, top: 0 }),
  setScroll: (coordinates: Coordinates) =>
    set(() => {
      setLocalScroll(coordinates)

      return {
        scroll: coordinates,
      }
    }),
}))
