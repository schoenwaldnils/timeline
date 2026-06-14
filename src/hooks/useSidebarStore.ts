'use client'

import { create } from 'zustand'

import { AlgoliaIndex } from '@/@types/algolia'

export interface SidebarStore {
  active: boolean
  type?: AlgoliaIndex
  id?: string
  setSidebar: (props: { type: AlgoliaIndex; id: string }) => void
  hideSidebar: () => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  active: false,
  type: undefined,
  id: undefined,
  setSidebar: ({ type, id }: { type: AlgoliaIndex; id: string }) =>
    set(() => ({
      active: true,
      type,
      id,
    })),
  hideSidebar: () => {
    set((sidebar) => ({ ...sidebar, active: false }))
    setTimeout(() => {
      set(() => ({
        active: false,
        type: undefined,
        id: undefined,
      }))
    }, 300)
  },
}))
