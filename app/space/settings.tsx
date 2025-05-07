import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import SpaceSettingsScreen from 'features/spaces/settings-screen'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <SpaceSettingsScreen />
    </SafeAreaView>
  )
}
