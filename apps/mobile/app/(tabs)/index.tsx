import {
  ArrowRight,
  Bell,
  Plus,
  MoreHorizontal,
  Smartphone,
  Receipt,
  Bitcoin,
  Coins,
  ScrollText,
} from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Button,
  SizableText,
  ScrollView,
  SpaceCard,
  NuggetCard,
  Theme,
  XStack,
  YStack,
  H2,
  H6,
  ActionButton,
  Card,
  Transactions,
  validToken,
  useMedia,
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

const defaultAuthors = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=67/32/32?ca=1',
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=30/32/32?ca=1',
  },
]

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'top']}>
      <XStack maw={1480} als="center" f={1}>
        <ScrollView f={3} fb={0}>
          <YStack gap="$3" pt="$5" pb="$8">
            <Header />
            <YStack>
              <AccountBalanceSection />
              <TransactionsSection />
              <NuggetsSection />
              <SpacesSection />
            </YStack>
          </YStack>
        </ScrollView>
      </XStack>
    </SafeAreaView>
  )
}

const Header = () => {
  return (
    <XStack ai="center" jc="space-between">
      <H2 px="$4" my="$2">
        Home
      </H2>
      <XStack mx="$5" gap="$4">
        <Bell />
      </XStack>
    </XStack>
  )
}

const AccountBalanceSection = () => {
  return (
    <Card br="$0" bg="transparent" miw={200} $gtMd={{ miw: 220, f: 1, fb: 0 }}>
      <Card.Header f={1}>
        <H6 size="$4" fow="$1" theme="alt2">
          Actual Balance (KES)
        </H6>
        <H2 mt="$2">$23,300.89</H2>
        <SizableText mt="$2">≈ 200.70 cUSD</SizableText>
      </Card.Header>
      <Card.Footer padded jc="space-between">
        <ActionButton
          buttonText="Deposit"
          icon={Plus}
          action={() => console.log('Navigate to add screen')}
        />
        <ActionButton
          buttonText="Transfer"
          icon={ArrowRight}
          action={() => console.log('Navigate to withdraw screen')}
        />
        <ActionButton icon={MoreHorizontal} action={() => console.log('Navigate to Sendscreen')} />
      </Card.Footer>
    </Card>
  )
}

const TransactionsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between">
        <SizableText fow="400">Transactions</SizableText>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            See all
          </Button>
        </Theme>
      </XStack>

      <Transactions>
        <Transactions.Items>
          <Transactions.Group $gtSm={{ space: '$2' }}>
            <Transactions.Item icon={Bitcoin} accentTheme="green" transactionId="1">
              Bought BTC with cKES
            </Transactions.Item>
          </Transactions.Group>
        </Transactions.Items>
      </Transactions>
    </YStack>
  )
}

const halfMinusSpace = validToken(
  Platform.select({
    native: '53%',
  })
)

const quarterMinusSpace = validToken(
  Platform.select({
    native: '21%',
  })
)
const NuggetsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <SizableText fow="400">Nuggets</SizableText>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            Customize
          </Button>
        </Theme>
      </XStack>

      <ScrollAdapt>
        <XStack px="$4" fw="wrap" f={1} gap="$3" mb="$4">
          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={Smartphone}
            title="Top up airtime"
          />

          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={Coins}
            title="Split the bill"
          />

          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={ScrollText}
            title="Pay bills"
          />

          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={Receipt}
            title="Manage subscriptions"
          />
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

const spaceCardWidthMd = validToken(
  Platform.select({
    native: '32%',
  })
)
const SpacesSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <SizableText fow="400">Spaces</SizableText>
        <Theme name="alt2">
          <Button
            size="$2"
            chromeless
            iconAfter={ArrowRight}
            onPress={() => router.push('/spaces/create')}
          >
            Create a Space
          </Button>
        </Theme>
      </XStack>
      <ScrollAdapt>
        <XStack px="$4" gap="$4" mb="$4" fw="wrap">
          <SpaceCard
            withImages
            w={230}
            $gtMd={{ w: spaceCardWidthMd }}
            title="Join Thousands"
            description="Saving today"
            authors={defaultAuthors}
          />

          <SpaceCard
            withImages
            w={230}
            $gtMd={{ w: spaceCardWidthMd }}
            title="Start a Personal"
            description="Savings Space"
            tag="React"
            authors={defaultAuthors}
          />
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

function ScrollAdapt({ children }: { children: React.ReactNode }) {
  const { md } = useMedia()
  return md ? (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <>{children}</>
  )
}
