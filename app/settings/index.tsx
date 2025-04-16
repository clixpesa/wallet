import { SettingsScreen } from 'features/settings/screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'tamagui'

export default function Settings() {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: theme.color2.val,
          },
        }}
      />
      <SettingsScreen />
    </SafeAreaView>
  )
}
