import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'tamagui'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Settings',
        }}
      />
      <Text>Settings</Text>
    </SafeAreaView>
  )
}
