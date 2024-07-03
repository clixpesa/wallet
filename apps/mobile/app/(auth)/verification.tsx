import { VerificationScreen } from 'app/features/auth/verification-screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Verification',
        }}
      />
      <VerificationScreen />
    </SafeAreaView>
  )
}
