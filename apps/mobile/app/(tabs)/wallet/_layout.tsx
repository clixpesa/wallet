import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Wallet', headerShadowVisible: false }} />
      <Stack.Screen
        name="manage-group"
        options={{ title: 'Manage Group', presentation: 'fullScreenModal' }}
      />
    </Stack>
  )
}
