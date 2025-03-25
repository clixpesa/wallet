import auth from '@react-native-firebase/auth'

import type { Firebase } from './types'

const getIsSignedIn: Firebase['getIsSignedIn'] = () => Boolean(auth().currentUser)

const signOut: Firebase['signOut'] = () => auth().signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await auth().signInAnonymously()).user
}

const signInWithPhoneNumber = async (phoneNumber) => {
  return await auth().signInWithPhoneNumber(phoneNumber)
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return auth().onAuthStateChanged(callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth().currentUser

export {
  getIsSignedIn,
  signOut,
  signInAnonymously,
  onAuthStateChanged,
  getCurrentUser,
  signInWithPhoneNumber,
}
