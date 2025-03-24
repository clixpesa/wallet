import { createContext, useEffect, useState } from 'react'
import { router, useSegments } from 'expo-router'
import { Platform } from 'react-native'

export const AuthContext = createContext({ user: null })

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // useProtectedRoute(user)

  useEffect(() => {
    // Mock authentication check
    const storedUser = null // Replace with actual user retrieval logic
    setUser(storedUser)
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

// function useProtectedRoute(user) {
//   const segments = useSegments()

//   useEffect(() => {
//     const inAuthGroup = segments[0] === '(auth)'

//     if (!user && !inAuthGroup) {
//       replaceRoute('/onboarding')
//     } else if (user && inAuthGroup) {
//       replaceRoute('/')
//     }
//   }, [user, segments])
// }

// const replaceRoute = (href) => {
//   if (Platform.OS === 'ios') {
//     setTimeout(() => router.replace(href), 1)
//   } else {
//     setImmediate(() => router.replace(href))
//   }
// }
