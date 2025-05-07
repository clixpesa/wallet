import AddGoalScreen from 'features/spaces/add-goal-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme, Text } from 'tamagui'
import { Stack } from 'expo-router'

export default function Screen() {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text fontSize={20} fontWeight="600">
              Goal
            </Text>
          ),
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: theme.color2.val,
          },
        }}
      />
      <AddGoalScreen />
    </SafeAreaView>
  )
}
