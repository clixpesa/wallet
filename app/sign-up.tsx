import { useRouter } from 'expo-router'
import { View, Text, H1, Paragraph } from 'tamagui'

export default function OnboardingScreen() {
  const router = useRouter()
  return (
    <View>
      <H1 size="$8" fontWeight="bold">
        Let's get you started
      </H1>
      <Paragraph fontSize="$5" py="$1" color="$color10">
        Enter your phone number to get started, we may store and send a verification code
        to this number
      </Paragraph>
    </View>
  )
}
