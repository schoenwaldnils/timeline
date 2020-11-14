import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'

import { initFirebase } from '../utils/initFirebase'
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from '../utils/userCookies'

import { mapUserData } from '../utils/mapUserData'

initFirebase()

type UserType = {
  id: string
  email: string
  token: string
}

const useUser = () => {
  const [user, setUser] = useState<UserType | undefined>()
  const router = useRouter()

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push('/auth')
      })
      .catch(e => {
        console.error(e)
      })
  }

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async fireUser => {
        if (fireUser) {
          console.log(fireUser)
          const userData = await mapUserData(fireUser)
          setUserCookie(userData)
          setUser(userData)
        } else {
          removeUserCookie()
          setUser(undefined)
        }
      })

    const userFromCookie = getUserFromCookie()
    if (!userFromCookie) {
      router.push('/')
      return
    }
    setUser(userFromCookie)

    // eslint-disable-next-line consistent-return
    return () => {
      cancelAuthListener()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, logout }
}

export { useUser }
