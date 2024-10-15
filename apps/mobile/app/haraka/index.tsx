import { SafeAreaView } from 'react-native-safe-area-context'
import { SizableText, YStack } from 'ui'

export default function RequestLoanScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <YStack f={1} gap="$2" jc="space-between">
        <SizableText>Haraka Loans</SizableText>
      </YStack>
    </SafeAreaView>
  )
}
