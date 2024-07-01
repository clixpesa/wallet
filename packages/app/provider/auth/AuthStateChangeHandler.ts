import { useEffect } from 'react'
import { useRouter } from 'solito/router'

import { onAuthStateChanged } from './firebase'

const useRedirectAfterSignOut = () => {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (!user) {
        router.replace('/sign-in')
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
