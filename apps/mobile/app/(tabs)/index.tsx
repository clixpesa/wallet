import {
  ArrowRight,
  Bell,
  Plus,
  Minus,
  Send,
  ArrowLeftRight,
  Scan,
  Currency,
} from '@tamagui/lucide-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLink } from 'solito/link'
import {
  Button,
  H4,
  ScrollView,
  Theme,
  XStack,
  YStack,
  H2,
  H6,
  Card,
  RoundedButton,
  Transactions,
} from 'ui'

export const transactionData = [
  {
    id: '0',
    title: 'Bought BTC with cKES',
    credited: false,
    amount: '100.00',
    token: 'KES',
    date: '20 Mar 2020, 11:59',
  },
  {
    id: '1',
    title: 'Money added via M-Pesa',
    type: 'deposit',
    credited: true,
    token: 'KES',
    amount: '130.0',
    date: '20 Mar 2020, 11:59',
  },
]

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'top']}>
      <XStack maw={1480} als="center" f={1}>
        <ScrollView f={3} fb={0}>
          <YStack gap="$3" pt="$5" pb="$8">
            <Header />
            <YStack gap="$6">
              <AccountBalanceSection />
              <TransactionsSection />
            </YStack>
          </YStack>
        </ScrollView>
      </XStack>
    </SafeAreaView>
  )
}

const AccountBalanceSection = () => {
  return (
    <Card br="$0" bg="transparent" miw={200} $gtMd={{ miw: 220, f: 1, fb: 0 }}>
      <Card.Header f={1} jc="space-between">
        <H6 size="$4" fow="$1" theme="alt2">
          current balance
        </H6>
        <H2 mt="$2">$18,908</H2>
      </Card.Header>
      <Card.Footer padded gap="$6">
        <RoundedButton
          buttonText="Add"
          icon={Plus}
          action={() => console.log('Navigate to add screen')}
        />
        <RoundedButton
          buttonText="Withdraw"
          icon={Minus}
          action={() => console.log('Navigate to withdraw screen')}
        />
        <RoundedButton
          buttonText="Send"
          icon={Send}
          action={() => console.log('Navigate to Sendscreen')}
        />
        <RoundedButton
          buttonText="Swap"
          icon={ArrowLeftRight}
          action={() => console.log('Navigate to Swap screen')}
        />
      </Card.Footer>
    </Card>
  )
}

const TransactionsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$2">
        <H4 fow="400">Transactions</H4>
        <Theme name="alt2">
          <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
            See all
          </Button>
        </Theme>
      </XStack>

      <Transactions>
        <Transactions.Items>
          <Transactions.Group $gtSm={{ space: '$2' }}>
            <Transactions.Item icon={Currency} accentTheme="green" transactionId="1">
              Bought BTC with cKES
            </Transactions.Item>
            <Transactions.Item icon={Currency} accentTheme="orange" transactionId="2">
              Money added via MPES
            </Transactions.Item>
          </Transactions.Group>
        </Transactions.Items>
      </Transactions>
    </YStack>
  )
}

const Header = () => {
  return (
    <XStack ai="center" jc="space-between">
      <H2 px="$4" my="$2">
        Home
      </H2>
      <XStack mx="$5" gap="$4">
        <Scan />
        <Bell />
      </XStack>
    </XStack>
  )
}
