import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'ui'

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Stack.Screen options={{ title: 'Notifications' }} />
      <Text>Notifications Screen</Text>
    </SafeAreaView>
  )
}
