import { EditProfileScreen } from 'features/profile/edit-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

export default function Screen() {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom', 'left', 'right']}>
      <Stack.Screen
        name="edit"
        options={{
          title: 'Edit Profile',
          headerTitleAlign: 'center',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.color2.val,
          },
        }}
      />
      <EditProfileScreen />
    </SafeAreaView>
  )
}
