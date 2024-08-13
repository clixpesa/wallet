import { PiggyBank, Coins, PersonStanding } from '@tamagui/lucide-icons'
import { Stack, useRouter } from 'expo-router'
import { Onboarding, OnboardingStepInfo, StepContent } from 'ui'

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

const OnboardingScreen = () => {
  const router = useRouter()
  return <Onboarding autoSwipe onOnboarded={() => router.push('/sign-up')} steps={steps} />
}

const steps: OnboardingStepInfo[] = [
  {
    theme: 'teal',
    Content: () => (
      <StepContent
        title="Chamaa Groups"
        icon={PersonStanding}
        description="Create Chamaa's and groups and begin saving together"
      />
    ),
  },
  {
    theme: 'orange',
    Content: () => (
      <StepContent
        title="Loans"
        icon={Coins}
        description="Access affordable loans for your Chamaa or Group"
      />
    ),
  },
  {
    theme: 'blue',
    Content: () => (
      <StepContent
        title="Save and Grow Together"
        icon={PiggyBank}
        description="Save money together for a given goal"
      />
    ),
  },
]
