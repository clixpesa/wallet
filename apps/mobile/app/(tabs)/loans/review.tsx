import { Calendar } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitButton, YStack, SizableText, Card, H4, H3, View, Text } from 'ui'

export default function ReviewLoanScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/loan-terms')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <YStack p="$4" gap="$5">
        <H4>Review application</H4>
        <Card bordered borderColor="$orange9" padded>
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

        <Card padded>
          <Card.Header my="auto" padded gap="$3">
            <YStack gap="$4" ai="center">
              <SizableText mt="$2">Duration</SizableText>
              <YStack ai="center" gap="$4">
                <H3>1 month</H3>
              </YStack>
            </YStack>
            <View flexDirection="row" gap="$2">
              <SizableText size="$4">Repayment</SizableText>
              <View
                backgroundColor="$color6"
                borderRadius={100_000}
                marginRight="auto"
                paddingHorizontal="$2"
                paddingVertical="$0.5"
                theme="alt1"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="$color9" fontSize="$1" fontWeight="$1">
                  Weekly
                </Text>
              </View>
            </View>
          </Card.Header>
          <Card.Footer
            paddingHorizontal="$4"
            paddingVertical="$4"
            flexDirection="row"
            width="100%"
            gap="$3"
          >
            <Calendar />
            <View flex={10} gap="$2">
              <SizableText>1st payment</SizableText>
              <SizableText fos="$3" width="100%" lh="$1" color="$color10">
                03/08/2024
              </SizableText>
            </View>
            <SizableText fow="700">4,000 cKES</SizableText>
          </Card.Footer>
        </Card>

        <SubmitButton bg="$orange9" onPress={() => handleSubmit()}>
          Submit application
        </SubmitButton>
      </YStack>
    </SafeAreaView>
  )
}
