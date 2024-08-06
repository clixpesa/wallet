import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signInWithPhoneNumber as signInWithPhoneNumberFirebase,
} from 'firebase/auth'

import { Firebase } from './types'

let auth: ReturnType<typeof initializeAuth>

if (typeof window !== 'undefined') {
  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAj7ZQUD9mfmBen8IEfvifnRjAXSE4StmY',
    authDomain: 'clixpesa-test.firebaseapp.com',
    databaseURL: 'https://clixpesa-test-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'clixpesa-test',
    storageBucket: 'clixpesa-test.appspot.com',
    messagingSenderId: '609904908445',
    appId: '1:609904908445:web:7d6624636e8cae1d551c74',
    measurementId: 'G-SHLR0VGXWH',
  })

  auth = initializeAuth(firebaseApp, {
    persistence: browserLocalPersistence,
  })
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () => Boolean(auth?.currentUser)

const signOut: Firebase['signOut'] = () => auth.signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await signInAnonymouslyFirebase(auth)).user
}

const signInWithPhoneNumber = async (phoneNumber, recaptchaVerifier) => {
  return await signInWithPhoneNumberFirebase(auth, phoneNumber, recaptchaVerifier)
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
  signInWithPhoneNumber,
}
