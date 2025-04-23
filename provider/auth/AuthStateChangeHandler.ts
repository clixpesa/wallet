import { useRouter } from 'expo-router'
import { useEffect } from 'react'

import { onAuthStateChanged } from './firebase'

const useRedirectAfterSignOut = () => {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (!user) {
        router.replace('/sign-up')
      }
    })
    return () => {
      unsubscribe()
    }
  }, [router])
}

export const AuthStateChangeHandler = () => {
  useRedirectAfterSignOut()
  return null
}
