import '../tamagui-web.css'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import {  SplashScreen, Stack } from 'expo-router'
import { Provider } from 'provider'
import { OfflineBanner } from 'components/OfflineBanner'
import { useEffect, useCallback, useState } from 'react'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  SplashScreen.hideAsync()
  // const [interLoaded, interError] = useFonts({
  //   'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  //   'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  //   'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  //   'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
  // })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="notifications"
            options={{
              title: 'Notifications',
              presentation: 'modal',
              headerTitleAlign: 'center',
              animation: 'slide_from_right',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerShadowVisible: false,
            }}
          />

          <Stack.Screen
            name="modal"
            options={{
              title: '',
              presentation: 'modal',
              headerTitleAlign: 'center',
              animation: 'slide_from_right',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerShadowVisible: false,
            }}
          />
        </Stack>
        <OfflineBanner />
      </Provider>
    </GestureHandlerRootView>
  )
}