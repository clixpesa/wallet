import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import * as Notifications from 'expo-notifications'
import { SplashScreen, Stack } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { LogBox, View } from 'react-native'

SplashScreen.preventAutoHideAsync()

LogBox.ignoreLogs(['Cannot update a component', 'You are setting the style'])

Notifications.setNotificationHandler({
  /** Additional Configuration */
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export default function HomeLayout() {
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const [themeLoaded, setThemeLoaded] = useState(false)

  useEffect(() => {
    setThemeLoaded(true)
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded])

  if (!themeLoaded || !fontLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider>
        <Stack />
      </Provider>
    </View>
  )
}
