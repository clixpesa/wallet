import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="index" options={{ title: 'Wallet' }} />
      <Stack.Screen name="manage-group" options={{ title: 'Manage Group' }} />
    </Stack>
  )
}
