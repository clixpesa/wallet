import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { router, useSegments } from 'expo-router'
import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth'
import { getItem, setItem, removeItem } from 'store/storage'

type AuthContextType = {
  user: FirebaseAuthTypes.User | null
  loading: boolean
  error: Error | null
  sendPhoneOtp: (phoneNumber: string) => Promise<void>
  confirmOtp: (code: string) => Promise<void>
  signOut: () => Promise<void>
  confirmation: FirebaseAuthTypes.ConfirmationResult | null
  verifyGoogleIdToken: (idToken: string) => Promise<FirebaseAuthTypes.UserCredential>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [confirmation, setConfirmation] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null)
  //Redirect
  useProtectedRoute(user)
  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user)
    if (loading) setLoading(false)
  }

  useEffect(() => {
    // Try to load user from storage first
    let storedUser: FirebaseAuthTypes.User | null = null
    const getStoredUser = async () => {
      storedUser = await getItem<FirebaseAuthTypes.User>('user')
    }
    getStoredUser()

    if (storedUser) {
      setUser(storedUser)
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  const sendPhoneOtp = async (phoneNumber: string) => {
    try {
      setLoading(true)
      setError(null)

      const confirmationResult = await auth().signInWithPhoneNumber(phoneNumber)
      setConfirmation(confirmationResult)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  const confirmOtp = async (code: string) => {
    try {
      setLoading(true)
      setError(null)

      if (!confirmation) {
        throw new Error('No confirmation available')
      }

      const userCredential = await confirmation.confirm(code)
      const currentUser = userCredential?.user

      if (currentUser) {
        await setItem('user', currentUser.toJSON())
      }
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  const verifyGoogleIdToken = async (idToken: string) => {
    try {
      setLoading(true)
      setError(null)

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const userCredential = await auth().signInWithCredential(googleCredential)

      const currentUser = userCredential?.user

      if (currentUser) {
        await setItem('user', currentUser.toJSON())
      }

      return userCredential
    } catch (error) {
      setError(error as Error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      await auth().signOut()
      await removeItem('user')
      setUser(null)
    } catch (err) {
      setError(err as Error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        signOut,
        loading,
        confirmOtp,
        confirmation,
        sendPhoneOtp,
        verifyGoogleIdToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export function useProtectedRoute(user: FirebaseAuthTypes.User | null) {
  const segments = useSegments()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/onboarding')
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/')
    }
  }, [user, segments])
}
