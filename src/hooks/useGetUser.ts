'use client'

import { useEffect, useState } from 'react'

import type { User } from '@/payload-types'

/**
 * Fetch the currently authenticated Payload admin user, based on the
 * `payload-token` cookie. Hits the auth-enabled `users` collection's `me`
 * endpoint, which returns `{ user: User | null }`.
 *
 * Returns the `User` object when logged in, or `false` while loading or when no
 * session exists — so callers can gate admin-only UI with a simple truthy check
 * (e.g. `const user = useGetUser(); if (!user) return null`).
 */
export const useGetUser = (): User | false => {
  const [user, setUser] = useState<User | false>(false)

  useEffect(() => {
    let active = true

    fetch('/api/users/me', { credentials: 'include' })
      .then((res) => (res.ok ? (res.json() as Promise<{ user: User | null }>) : null))
      .then((result) => {
        if (active) setUser(result?.user ?? false)
      })
      .catch((error: unknown) => {
        console.error(error)
        if (active) setUser(false)
      })

    return () => {
      active = false
    }
  }, [])

  return user
}
