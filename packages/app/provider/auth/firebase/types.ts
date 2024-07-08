import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export type User = FirebaseAuthTypes.User

export type Firebase = {
  getIsSignedIn: () => boolean
  signInAnonymously: () => Promise<User>
  signOut: () => Promise<void>
  onAuthStateChanged: (callback: (user: User | null) => void) => () => void
  getCurrentUser: () => User | null
  ConfirmationResult: FirebaseAuthTypes.ConfirmationResult
}
