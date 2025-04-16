import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth'

type BooleanPredicate = () => boolean
type VoidAsyncFn = () => Promise<void>
type AsyncGetter<T> = () => Promise<T>
type AuthStateCallback = (user: FirebaseAuthTypes.User | null) => void
export type User = FirebaseAuthTypes.User | null

const signOut: VoidAsyncFn = () => auth().signOut()

const isSignedIn: BooleanPredicate = () => Boolean(auth().currentUser)

const getCurrentUser: () => FirebaseAuthTypes.User | null = () => auth().currentUser

const signInAnonymously: AsyncGetter<FirebaseAuthTypes.User> = async () => {
  return (await auth().signInAnonymously()).user
}

const onAuthStateChanged: (callback: AuthStateCallback) => () => void = (callback) => {
  return auth().onAuthStateChanged(callback)
}

const signInWithPhoneNumber = async (
  phoneNumber: string
): Promise<FirebaseAuthTypes.ConfirmationResult> => {
  return await auth().signInWithPhoneNumber(phoneNumber)
}

export {
  signOut,
  isSignedIn,
  getCurrentUser,
  signInAnonymously,
  onAuthStateChanged,
  signInWithPhoneNumber,
}
