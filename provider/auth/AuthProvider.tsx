import { router, useSegments } from 'expo-router'
import { createContext, useEffect, useState, useSyncExternalStore } from 'react'
import { Platform } from 'react-native'

export type AuthProviderProps = {
  children?: React.ReactNode
  onAuthStateChanged?: Parameters<Firebase['onAuthStateChanged']>[0]
}

import { AuthStateChangeHandler } from './AuthStateChangeHandler'
import { onAuthStateChanged, getCurrentUser } from './firebase'
import type { User } from './firebase/types'

export const AuthContext = createContext<null | User>(null)

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const [user, setUser] = useState<null | User>(null)

  useProtectedRoute(user)
  const store = useSyncExternalStore(
    (callback) => {
      const unsubscribe = onAuthStateChanged((user) => {
        callback()
        props.onAuthStateChanged?.(user)
        setUser(user)
      })

      return () => unsubscribe()
    },
    getCurrentUser,
    () => null
  )

  return (
    <AuthContext.Provider value={store}>
      <AuthStateChangeHandler />
      {children}
    </AuthContext.Provider>
  )
}

export function useProtectedRoute(user: User | null) {
  const segments = useSegments()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      replaceRoute('/onboarding')
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      replaceRoute('/')
    }
  }, [user, segments])
}

/**
 * temporary fix
 *
 * see https://github.com/expo/router/issues/740
 * see https://github.com/expo/router/issues/745
 *  */
const replaceRoute = (href: string) => {
  if (Platform.OS === 'ios') {
    setTimeout(() => {
      router.replace(href)
    }, 1)
  } else {
    setImmediate(() => {
      router.replace(href)
    })
  }
}
