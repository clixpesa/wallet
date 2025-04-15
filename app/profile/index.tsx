import ProfileScreen from 'features/profile/screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'tamagui'

export default function Screen() {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        name="profile/index"
        options={{
          title: '',
          presentation: 'modal',
          headerTitleAlign: 'center',
          animation: 'fade_from_bottom',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.color2.val,
          },
        }}
      />
      <ProfileScreen />
    </SafeAreaView>
  )
}
