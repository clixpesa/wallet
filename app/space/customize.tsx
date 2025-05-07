import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import CustomizeScreen from 'features/spaces/customize-screen'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        name="space/customize"
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <CustomizeScreen />
    </SafeAreaView>
  )
}
