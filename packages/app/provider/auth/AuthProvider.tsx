import { AuthStateChangeHandler } from './AuthStateChangeHandler'
import { Firebase } from './firebase/types'

export type AuthProviderProps = {
  children?: React.ReactNode
  onAuthStateChanged?: Parameters<Firebase['onAuthStateChanged']>[0]
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthProvider>
      <AuthStateChangeHandler />
      {children}
    </AuthProvider>
  )
}
