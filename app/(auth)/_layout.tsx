import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

export default function Layout() {
  const theme = useTheme()
  return (
    <>
      <Stack.Screen options={{ headerShown: false}} />
      <Stack>
        <Stack.Screen
          name="onboarding"
          options={{ headerShown: false, animation: 'fade' }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            title: '',
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.color2.val,
            },
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="verify-code"
          options={{
            title: '',
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.color2.val,
            },
            animation: 'fade',
          }}
        />

        <Stack.Screen
          name="set-password"
          options={{
            title: '',
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.color2.val,
            },
            animation: 'fade',
          }}
        />
      </Stack>
    </>
  )
}
