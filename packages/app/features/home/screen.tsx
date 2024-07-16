import { Button, H4, OverviewCard, ScrollView, Theme, XStack, YStack } from '@my/ui'
import { ArrowRight } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'

export function HomeScreen() {
  return (
    <XStack maw={1480} als="center" f={1}>
      <ScrollView f={3} fb={0}>
        <YStack gap="$3" pt="$5" pb="$8">
          <YStack gap="$6">
            <AccountBalanceSection />
            <TransactionsSection />
          </YStack>
        </YStack>
      </ScrollView>
    </XStack>
  )
}

const AccountBalanceSection = () => {
  return <OverviewCard title="Current Balance" balance="$18,908" />
}
const TransactionsSection = () => {
  return (
    <YStack gap="$4">
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 fow="400">Transactions</H4>
        <Theme name="alt2">
          <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
            See all
          </Button>
        </Theme>
      </XStack>
    </YStack>
  )
}
