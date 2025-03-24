import { useColorScheme } from 'react-native'
import { TamaguiProvider as TamaguiProviderOG } from 'tamagui'
import { config } from '../../tamagui.config'

export function TamaguiProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProviderOG
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
    >
      {children}
    </TamaguiProviderOG>
  )
}
