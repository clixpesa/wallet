import { TamaguiProvider, YStack } from 'ui'
import { Decorator } from '@storybook/react'
import { UniversalThemeProvider } from 'app/provider/theme'
import { ToastProvider } from 'app/provider/toast'
import React from 'react'
import { config } from 'ui'

export const StorybookDecorator: Decorator = (Story, args: any) => {
  return (
    <UniversalThemeProvider>
      <TamaguiProvider config={config} defaultTheme="light">
        <ToastProvider noSafeArea>
          <YStack bc="$background" f={1}>
            <Story />
          </YStack>
        </ToastProvider>
      </TamaguiProvider>
    </UniversalThemeProvider>
  )
}
