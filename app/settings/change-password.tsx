import ChangePasswordScreen from 'features/settings/change-password-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

export default function Screen() {
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
      <ChangePasswordScreen />
    </SafeAreaView>
  )
}
