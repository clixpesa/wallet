import '../tamagui-web.css'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SplashScreen, Stack } from 'expo-router'

import { Provider } from 'provider'
import { OfflineBanner } from 'components/OfflineBanner'
import { Text } from 'tamagui'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <BottomSheetModalProvider>
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
                headerTitle: () => (
                  <Text fontSize={20} fontWeight="600">
                    Notifications
                  </Text>
                ),
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

            <Stack.Screen
              name="space/customize"
              options={{
                title: '',
                headerTransparent: true,
              }}
            />

            <Stack.Screen
              name="space/[spaceId]"
              options={{
                title: '',
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              name="space/settings"
              options={{
                title: '',
                headerTransparent: true,
              }}
            />
          </Stack>
          <OfflineBanner />
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}
