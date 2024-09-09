import * as Sentry from '@sentry/react-native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { LogBox, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { OfflineBanner } from '@/components/OfflineBanner'

// Construct a new instrumentation instance. This is needed to communicate between the integration and React
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation()

if (!__DEV__) {
  Sentry.init({
    dsn: 'https://8036b3186d7444fa8c8e04efccb7c40a@o376684.ingest.us.sentry.io/5210682',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.ReactNativeTracing({
        enableUserInteractionTracing: true,
        enableNativeFramesTracking: true,
        enableStallTracking: true,
        // Pass instrumentation to be used as `routingInstrumentation`
        routingInstrumentation,
      }),
    ],
  })
}

SplashScreen.preventAutoHideAsync()

LogBox.ignoreLogs(['Cannot update a component', 'You are setting the style'])

function RootLayout() {
  // Capture the NavigationContainer ref and register it with the instrumentation.
  const ref = useNavigationContainerRef()

  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const [themeLoaded, setThemeLoaded] = useState(false)

  useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref)
    }
  }, [ref])

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
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Provider>
            <Stack />
            <OfflineBanner />
          </Provider>
        </View>
      </GestureHandlerRootView>
    </ErrorBoundary>
  )
}

function getRootLayout() {
  // Wrap the Root Layout route component with `Sentry.wrap` to capture gesture info and profiling data.
  return __DEV__ ? RootLayout : Sentry.wrap(RootLayout)
}

export default getRootLayout()
