'use client'

import { create } from 'zustand'

import { USER_SCALE_KEY } from '@/data/constants'

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

const getScale = (defaultScale = 1): number => {
  if (typeof window !== 'undefined') {
    const localScale = window.localStorage.getItem(USER_SCALE_KEY)

    if (!localScale) {
      return defaultScale
    }

    return `${localScale}` ? parseFloat(localScale) : defaultScale
  }

  return defaultScale
}

const setLocalScale = (scale: number) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(USER_SCALE_KEY, scale.toString())
  }
}

export interface ScaleStore {
  scale: number
  scaleMaxed: boolean
  scaleFloored: boolean
  scaleUp: () => void
  scaleDown: () => void
}

export const useScaleStore = create<ScaleStore>((set) => ({
  scale: getScale(),
  scaleUp: () =>
    set((state) => {
      setLocalScale(higherScale(state.scale))

      return {
        scale: higherScale(state.scale),
        scaleMaxed: isMaxScale(higherScale(state.scale)),
        scaleFloored: false,
      }
    }),
  scaleDown: () =>
    set((state) => {
      setLocalScale(lowerScale(state.scale))

      return {
        scale: lowerScale(state.scale),
        scaleMaxed: false,
        scaleFloored: isMinScale(lowerScale(state.scale)),
      }
    }),
  scaleMaxed: false,
  scaleFloored: false,
}))
