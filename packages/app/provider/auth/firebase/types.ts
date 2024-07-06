import { FirebaseAuthTypes } from '@react-native-firebase/auth'

type User = Pick<FirebaseAuthTypes.User, 'uid'>

export type Firebase = {
  getIsSignedIn: () => boolean
  signInAnonymously: () => Promise<User>
  signOut: () => Promise<void>
  onAuthStateChanged: (callback: (user: { uid: string } | null) => void) => () => void
  getCurrentUser: () => User | null
  ConfirmationResult: FirebaseAuthTypes.ConfirmationResult
}
