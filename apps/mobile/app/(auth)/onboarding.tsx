import { OnboardingScreen } from 'app/features/auth/onboarding-screen'
import { Stack } from 'expo-router'

export default function OnbordingScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <OnboardingScreen />
    </>
  )
}
