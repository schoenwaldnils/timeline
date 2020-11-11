import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { initFirebase } from '../../utils/initFirebase'
import { setUserCookie } from '../../utils/userCookies'
import { mapUserData } from '../../utils/mapUserData'

// Init the Firebase app.
initFirebase()

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  signInSuccess: async ({ user }) => {
    const userData = await mapUserData(user)
    setUserCookie(userData)
  },
}

export const FirebaseAuth = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}
