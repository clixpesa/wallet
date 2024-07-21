import { PiggyBank, Coins, PersonStanding } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/router'
import { Onboarding, OnboardingStepInfo, StepContent } from 'ui'

const steps: OnboardingStepInfo[] = [
  {
    theme: 'orange',
    Content: () => (
      <StepContent
        title="Chamaa Groups"
        icon={PersonStanding}
        description="Create Chamaa's and groups and begin saving together"
      />
    ),
  },
  {
    theme: 'green',
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

/**
 * note: this screen is used as a standalone page on native and as a sidebar on auth layout on web
 */
export const OnboardingScreen = () => {
  const router = useRouter()
  return <Onboarding autoSwipe onOnboarded={() => router.push('/sign-up')} steps={steps} />
}
