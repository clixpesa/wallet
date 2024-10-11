import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import React from 'react'

import { AuthProvider } from './auth'
import { QueryClientProvider } from './react-query'
import { SafeAreaProvider } from './safe-area'
import { TamaguiProvider } from './tamagui'
import { UniversalThemeProvider } from './theme'
import { ToastProvider } from './toast'

export { loadThemePromise } from './theme/UniversalThemeProvider'

export function Provider({ children }: { children: React.ReactNode }) {
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
  BottomSheetModalProvider,
  SafeAreaProvider,
  TamaguiProvider,
  ToastProvider,
  QueryClientProvider,
])
