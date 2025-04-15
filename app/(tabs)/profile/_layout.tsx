import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
          title: '',
          headerShadowVisible: false
        }}/>
      <Stack.Screen
        name="edit"
        options={{
          title: 'Edit Profile',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  )
}