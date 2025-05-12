import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { useTheme, Text } from 'tamagui'
import { EditSpaceScreen } from 'features/spaces/edit-name-screen'

export default function Screen() {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text fontSize={20} fontWeight="600">
              Edit Space
            </Text>
          ),
          headerTitleAlign: 'center',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.color2.val,
          },
        }}
      />
      <EditSpaceScreen />
    </SafeAreaView>
  )
}
