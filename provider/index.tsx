import { UniversalThemeProvider } from './theme'
import { SafeAreaProvider } from './safe-area'
import { TamaguiProvider } from './tamagui'
import { ToastProvider } from './toast'
import { AuthProvider } from './auth'

export function Provider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <Providers>{children}</Providers>
    </AuthProvider>
  )
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
  UniversalThemeProvider,
  SafeAreaProvider,
  TamaguiProvider,
  ToastProvider,
])
