import { H1, Paragraph, YStack, Button, SizableText } from 'tamagui'
import { OneTimeCodeInputExample } from 'components'
import { router } from 'expo-router'

export default function VerifyCodeScreen() {
  async function verifyCode({ code }) {
    // alert('Submit')
    // router.push('/set-password')
  }

  return (
    <YStack flex={1} p="$4" bg="$color2">
      <YStack gap="$2" mb="$2">
        <H1 size="$6" fontWeight="700">
          Enter the 6-digit code
        </H1>
        <Paragraph fontSize="$4" py="$1" color="$color10">
          We've sent it to +254 706 394 600
        </Paragraph>

        <OneTimeCodeInputExample />
      </YStack>
    </YStack>
  )
}
