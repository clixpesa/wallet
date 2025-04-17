import '../tamagui-web.css'

import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'provider'
import { useTheme, View } from 'tamagui'
import { OfflineBanner } from 'components/OfflineBanner'
import { useEffect, useCallback, useState } from 'react'
import { useAuth } from 'provider/auth'
import type { User } from 'provider/auth/firebase'
import { getItem, setItem, removeItem } from 'store/storage'
import auth from '@react-native-firebase/auth'
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
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      {/* <StatusBar style="auto" /> */}
      <Provider>
        <View style={{ flex: 1 }}>
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
                // headerStyle: {
                //   backgroundColor: theme.color2.val,
                // },
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
                // headerStyle: {
                //   backgroundColor: theme.color2.val,
                // },
              }}
            />
          </Stack>
          <OfflineBanner />
          {/* </Provider> */}
          {/* </ThemeProvider> */}
        </View>
      </Provider>
    </GestureHandlerRootView>
  )
}
