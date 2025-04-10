import { SafeAreaProvider } from './safe-area'
import { TamaguiProvider } from './tamagui'
import { ToastProvider } from './toast'
import { AuthProvider } from './auth'

export function Provider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}

const compose = (providers: React.FC<{ children: React.ReactNode }>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => {
    const Provider = Prev ? (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    ) : (
      <Curr>{children}</Curr>
    )
    return Provider
  })

const Providers = compose([
  SafeAreaProvider,
  TamaguiProvider,
  ToastProvider,
  AuthProvider,
])
