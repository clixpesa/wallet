import { LinearGradient } from '@tamagui/linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitButton, YStack, XStack, SizableText, Card, H4, H3, H6, Text } from 'ui'

export default function ReviewLoanScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/loans-terms')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <YStack p="$4" gap="$5">
        <H4>Review application</H4>
        <Card bordered borderColor="$orange9" bg="$orange5">
          <Card.Header my="auto" padded gap="$3">
            <YStack gap="$4" ai="center">
              <SizableText mt="$2">Loan amount</SizableText>

              <YStack ai="center" gap="$4">
                <H3>10,000 cKES</H3>
                <SizableText size="$4">To repay (7.5% interest)</SizableText>
                <H3> = 10,750 cKES</H3>
              </YStack>
            </YStack>
          </Card.Header>
        </Card>

        <Card bg="$orange2">
          <Card.Header my="auto" padded gap="$3">
            <YStack gap="$4" ai="center">
              <SizableText mt="$2">Duration</SizableText>

              <YStack ai="center" gap="$4">
                <H3>1 month</H3>
                <SizableText size="$4">To repay (7.5% interest)</SizableText>
                <H3> = 10,750 cKES</H3>
              </YStack>
            </YStack>
          </Card.Header>
          <Card.Footer bg="red" padded>
            <Text>hhdhdgh</Text>
          </Card.Footer>
        </Card>

        <SubmitButton bg="$orange9">Submit application</SubmitButton>
      </YStack>
    </SafeAreaView>
  )
}
