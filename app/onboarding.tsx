import { Onboarding, type OnboardingStepInfo, StepContent } from 'components'
import { HandCoins, PiggyBank, Sparkles } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'

const steps: OnboardingStepInfo[] = [
  {
    theme: 'teal',
    Content: () => (
      <StepContent
        title="Clixpesa"
        icon={Sparkles}
        description="Step into the future of money with Clixpesa"
      />
    ),
  },
  {
    theme: 'green',
    Content: () => (
      <StepContent
        title="Save"
        icon={PiggyBank}
        description="Manage your money, save personally or in groups with friends and family."
      />
    ),
  },
  {
    theme: 'teal',
    Content: () => (
      <StepContent
        title="Spend"
        icon={HandCoins}
        description="Manage your money, track your income and expediture and spend daily in a smarter way."
      />
    ),
  },
]

/**
 * note: this screen is used as a standalone page on native and as a sidebar on auth layout on web
 */
export default function OnboardingScreen() {
  const router = useRouter()
  return (
    <Onboarding autoSwipe onOnboarded={() => router.push('/sign-up')} steps={steps} />
  )
}
